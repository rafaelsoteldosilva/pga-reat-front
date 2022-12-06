import { useEffect, useState } from "react";

import styled from "styled-components";
import Select from "react-select";

import { empresas, usuarios, perfiles } from "../sampleData/sampleData";

const DialogNameContainer = styled.div`
   width: 100%;
   text-align: center;
`;

const perfilNombre = "perfilNombre";
const perfilCargo = "perfilCargo";

export default function EditarPerfil({ perfil, dialogName, show }) {
   const defaultValues = {
      perfilNombre: "",
      perfilCargo: "",
   };
   const [formValues, setFormValues] = useState(defaultValues);
   const [empresaOptions, setEmpresaOptions] = useState([]);
   const [empresaSelectedOption, setEmpresaSelectedOption] = useState(null);
   const [usuarioOptions, setUsuarioOptions] = useState([]);
   const [usuarioSelectedOption, setUsuarioSelectedOption] = useState(null);

   useEffect(() => {
      if (perfil !== null) {
         setFormValues({
            perfilNombre: perfil.attributes.nombre,
            perfilCargo: perfil.attributes.cargo,
         });
      } else {
         setFormValues({
            perfilNombre: "",
            perfilCargo: "",
         });
      }
   }, []);

   useEffect(() => {
      if (show) {
         setEmpresaOptions([]);
         setEmpresaSelectedOption(null);
         setEmpresaInitialOption(perfil);

         setUsuarioOptions([]);
         setUsuarioSelectedOption(null);
         setUsuarioInitialOption(perfil);
      }
   }, [show]);

   useEffect(() => {
      if (!show) {
         setEmpresaOptions([]);
         setEmpresaSelectedOption(null);

         setUsuarioOptions([]);
         setUsuarioSelectedOption(null);
      }
   }, [show]);

   function isNotEmpty(data) {
      if (typeof data === "undefined") return false;
      if (data == null) return false;
      if (data) return true;
   }

   function setEmpresaInitialOption(perfil) {
      let valueObject = {};
      if (isNotEmpty(perfil)) {
         if (isNotEmpty(perfil.attributes.empresa.data)) {
            valueObject["nombre"] =
               perfil.attributes.empresa.data.attributes.nombre;
            valueObject["id"] = perfil.attributes.empresa.data.id;
            let newObject = {
               value: valueObject,
               label: valueObject.nombre,
            };
            setEmpresaOptions((current) => [...current, newObject]);

            setEmpresaSelectedOption(newObject);
         }
      }
      empresas.data.map((empresa, index) => {
         let objectIsIncluded = false;
         if (Object.keys(valueObject) !== 0) {
            if (empresa.id === valueObject.id) {
               objectIsIncluded = true;
            }
         }
         if (!objectIsIncluded) {
            let newValueObject = {};
            newValueObject["nombre"] = empresa.attributes.nombre;
            newValueObject["id"] = empresa.id;
            let newObject = {
               value: newValueObject,
               label: newValueObject.nombre,
            };

            setEmpresaOptions((current) => [...current, newObject]);
         }
      });
   }

   function setUsuarioInitialOption(perfil) {
      let valueObject = {};
      let usuariosArray = [];
      let initialObject = {};
      if (isNotEmpty(perfil)) {
         if (isNotEmpty(perfil.attributes.usuario.data)) {
            valueObject["nombre"] =
               perfil.attributes.usuario.data.attributes.nombre;
            valueObject["id"] = perfil.attributes.usuario.data.id;
            let newObject = {
               value: valueObject,
               label: valueObject.nombre,
            };
            console.log(
               "usuario is not empty, adding it :: ",
               valueObject.nombre
            );
            initialObject = newObject;
            // usuariosArray.push(newObject);
            // setUsuarioOptions((current) => [...current, newObject]);
         }
      }
      usuarios.data.map((usuario, index) => {
         console.log("usuario:: ", usuario);
         let objectIsIncluded = false;
         console.log(
            "is usuario.id === valueObject.id:: ",
            usuario.id === valueObject.id
         );
         if (Object.keys(valueObject) !== 0) {
            if (usuario.id === valueObject.id) {
               console.log(
                  "usuario already included, not including it.",
                  valueObject.nombre
               );
               objectIsIncluded = true;
               valueObject = {};
            }
         }
         if (!objectIsIncluded) {
            let newValueObject = {};
            newValueObject["nombre"] = usuario.attributes.nombre;
            newValueObject["id"] = usuario.id;
            let newObject = {
               value: newValueObject,
               label: newValueObject.nombre,
            };
            console.log("adding usuario: ", newValueObject.nombre);
            usuariosArray.push(newObject);
         }
      });
      console.log("usuariosArray:: ", usuariosArray);
      setUsuarioOptions((current) => [...usuariosArray]);
      setUsuarioSelectedOption(initialObject);
   }

   function handleEmpresaSelectChange(selectedOption) {
      setEmpresaSelectedOption(selectedOption);
   }

   function handleUsuarioSelectChange(selectedOption) {
      setUsuarioSelectedOption(selectedOption);
   }

   function handleChange(e) {
      let { name, value } = e.target;

      setFormValues({
         ...formValues,
         [name]: value,
      });
   }

   function validateBothFields() {
      let errors = "";

      if (formValues[perfilNombre].length === 0) {
         errors += "Nombre de perfil debe tener un valor";
      }
      if (formValues[perfilCargo].length === 0) {
         if (errors.length > 0) errors += " y ";
         errors += "Cargo del perfil debe tener un valor";
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
      console.log(
         "ShowOptions:: usuarioSelectedOption: ",
         usuarioSelectedOption
      );
      console.log("ShowOptions:: usuarioOptions: ", usuarioOptions);
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
               Nombre:
               <input
                  type="text"
                  name={perfilNombre}
                  value={formValues.perfilNombre}
                  onChange={handleChange}
                  style={{ margin: "0 0 0 10px" }}
               />
            </label>
            <label style={{ marginTop: "10px" }}>
               Cargo:&nbsp;&nbsp;&nbsp;
               <input
                  type="text"
                  name={perfilCargo}
                  value={formValues.perfilCargo}
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
               defaultValue={empresaSelectedOption}
               value={empresaSelectedOption}
               onChange={handleEmpresaSelectChange}
               options={empresaOptions}
            />
            <Select
               defaultValue={usuarioSelectedOption}
               value={usuarioSelectedOption}
               onChange={handleUsuarioSelectChange}
               options={usuarioOptions}
            />
         </form>
      </div>
   );
}
