import { useEffect, useState } from "react";

import styled from "styled-components";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { getPerfiles } from "../slices/perfilesSlice";

const DialogNameContainer = styled.div`
   width: 100%;
   text-align: center;
`;

const usuarioName = "usuarioName";
const usuarioRut = "usuarioRut";

export default function Usuario({ usuario, dialogName, show }) {
   const dispatch = useDispatch();
   const perfiles = useSelector(getPerfiles);
   const defaultValues = {
      usuarioName: "",
      usuarioRut: "",
   };
   const [formValues, setFormValues] = useState(defaultValues);
   const [profileOptions, setProfileOptions] = useState([]);
   const [profileSelectedOptions, setProfileSelectedOptions] = useState([]);
   const [initialSelectOptions, setInitialSelectOptions] = useState([]);

   useEffect(() => {
      if (usuario !== null) {
         setFormValues({
            usuarioName: usuario.attributes.nombre,
            usuarioRut: usuario.attributes.rut,
         });
      } else {
         setFormValues({
            usuarioName: "",
            usuarioRut: "",
         });
      }
   }, []);

   useEffect(() => {
      if (show) {
         setProfileOptions([]);
         setProfileSelectedOptions([]);
         setProfileInitialOptions(usuario);
      }
   }, [show]);

   function isNotEmpty(data) {
      if (typeof data === "undefined") return false;
      if (data == null) return false;
      if (data) return true;
   }

   function setProfileInitialOptions(usuario) {
      let initialOptions = [];
      if (isNotEmpty(usuario)) {
         if (usuario.attributes.perfil.data.length > 0) {
            let otherObject = {};
            let valueObject = {};
            usuario.attributes.perfil.data.map((perfil) => {
               valueObject["nombre"] = perfil.attributes.nombre;
               valueObject["id"] = perfil.id;
               otherObject = {
                  value: valueObject,
                  label: valueObject.nombre,
               };
               initialOptions.push(otherObject);
               setInitialSelectOptions(initialOptions);
            });
         }
      }
      perfiles.data.map((perfil, index) => {
         let newValueObject = {};
         newValueObject["nombre"] = perfil.attributes.nombre;
         newValueObject["id"] = perfil.id;
         let newObject = {
            value: newValueObject,
            label: newValueObject.nombre,
         };

         setProfileOptions((current) => [...current, newObject]);
      });
   }

   function handlePerfilesSelectChange(selectedOption) {
      setProfileSelectedOptions(selectedOption);
   }

   function handleChange(e) {
      let { name, value } = e.target;

      setFormValues({
         ...formValues,
         [name]: value,
      });
   }

   function validateBothFields() {
      const rutRE = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
      let errors = "";

      if (formValues[usuarioName].length === 0) {
         errors += "Nombre de usuario debe tener un valor";
      }
      if (!new RegExp(rutRE).test(formValues[usuarioRut])) {
         if (errors.length > 0) errors += " y ";
         errors += " Rut de usaurio no válido";
      }
      if (errors.length > 0) alert(errors);
      return errors.length === 0;
   }

   function handleSubmit(e) {
      e.preventDefault();
      if (validateBothFields()) {
         alert("Formulario enviado");
      }
   }

   const ShowOptions = () => {
      console.log("initialSelectOptions: ", initialSelectOptions);
      console.log("profileOptions: ", profileOptions);
      return <div></div>;
   };

   return (
      <div>
         <DialogNameContainer>
            <h2>{dialogName}</h2>
         </DialogNameContainer>
         <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
         >
            <label>
               Usuario:
               <input
                  type="text"
                  name={usuarioName}
                  value={formValues.usuarioName}
                  onChange={handleChange}
                  style={{ margin: "0 0 0 10px" }}
               />
            </label>
            <label style={{ marginTop: "10px" }}>
               Rut:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input
                  type="text"
                  name={usuarioRut}
                  value={formValues.usuarioRut}
                  onChange={handleChange}
                  style={{ margin: "0 0 0 10px" }}
               />
            </label>
            <input
               style={{ width: "100px", margin: "3px", marginTop: "5px" }}
               type="submit"
               value="Submit"
            />
            <ShowOptions />
            <Select
               defaultValue={initialSelectOptions}
               isMulti
               onChange={handlePerfilesSelectChange}
               options={profileOptions}
            />
         </form>
      </div>
   );
}
