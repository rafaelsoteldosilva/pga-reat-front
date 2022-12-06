import { useEffect, useState } from "react";

import styled from "styled-components";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { getPerfiles } from "../slices/perfilesSlice";

const DialogContainer = styled.div`
   width: 100%;
   height: 50%;
`;

const DialogNameContainer = styled.div`
   width: 100%;
   text-align: center;
`;

const empresaNombre = "empresaNombre";
const empresaRut = "empresaRut";

export default function EditarEmpresa({ empresa, dialogName, show }) {
   const dispatch = useDispatch();
   const perfiles = useSelector(getPerfiles);
   const defaultValues = {
      empresaNombre: "",
      empresaRut: "",
   };
   const [formValues, setFormValues] = useState(defaultValues);
   const [profileOptions, setProfileOptions] = useState([]);
   const [profileSelectedOption, setProfileSelectedOption] = useState(null);

   useEffect(() => {
      if (empresa !== null) {
         setFormValues({
            empresaNombre: empresa.attributes.nombre,
            empresaRut: empresa.attributes.rut,
         });
      } else {
         setFormValues({
            empresaNombre: "",
            empresaRut: "",
         });
      }
   }, []);

   useEffect(() => {
      if (show) {
         setProfileOptions([]);
         setProfileSelectedOption(null);
         setProfileInitialOption(empresa);
      }
   }, [show]);

   function isNotEmpty(data) {
      if (typeof data === "undefined") return false;
      if (data == null) return false;
      if (data) return true;
   }

   function setProfileInitialOption(empresa) {
      let valueObject = {};
      if (isNotEmpty(empresa)) {
         if (isNotEmpty(empresa.attributes.perfil.data)) {
            valueObject["nombre"] =
               empresa.attributes.perfil.data.attributes.nombre;
            valueObject["id"] = empresa.attributes.perfil.data.id;
            let newObject = {
               value: valueObject,
               label: valueObject.nombre,
            };
            setProfileOptions((current) => [...current, newObject]);

            setProfileSelectedOption(newObject);
         }
      }
      perfiles.data.map((perfil, index) => {
         let objectIsIncluded = false;
         if (Object.keys(valueObject) !== 0) {
            if (perfil.id === valueObject.id) {
               objectIsIncluded = true;
            }
         }
         if (!objectIsIncluded) {
            let newValueObject = {};
            newValueObject["nombre"] = perfil.attributes.nombre;
            newValueObject["id"] = perfil.id;
            let newObject = {
               value: newValueObject,
               label: newValueObject.nombre,
            };

            setProfileOptions((current) => [...current, newObject]);
         }
      });
   }

   function handleSelectChange(selectedOption) {
      setProfileSelectedOption(selectedOption);
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

      if (formValues[empresaNombre].length === 0) {
         errors += "Nombre de empresa debe tener un valor";
      }
      if (!new RegExp(rutRE).test(formValues[empresaRut])) {
         if (errors.length > 0) errors += " y ";
         errors += " Rut de empresa no válido";
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
      console.log("profileSelectedOption: ", profileSelectedOption);
      console.log("profileOptions: ", profileOptions);
      return <div></div>;
   };

   return (
      <DialogContainer>
         <DialogNameContainer>
            <h2>{dialogName}</h2>
         </DialogNameContainer>
         <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
         >
            <label>
               Empresa:
               <input
                  type="text"
                  name={empresaNombre}
                  value={formValues.empresaNombre}
                  onChange={handleChange}
                  style={{ margin: "0 0 0 10px" }}
               />
            </label>
            <label style={{ marginTop: "10px" }}>
               Rut:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input
                  // format="##.###.###-#"
                  type="text"
                  name={empresaRut}
                  value={formValues.empresaRut}
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
               defaultValue={profileSelectedOption}
               value={profileSelectedOption}
               onChange={handleSelectChange}
               options={profileOptions}
            />
         </form>
      </DialogContainer>
   );
}
