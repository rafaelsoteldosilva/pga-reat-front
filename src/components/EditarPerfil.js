import { useEffect, useState } from "react";

import styled from "styled-components";
import Select from "react-select";

import { useSelector } from "react-redux";
import { getEmpresas } from "../slices/empresasSlice";
import { getUsuarios } from "../slices/usuariosSlice";
import { postPerfilToApi, putPerfilToApi } from "../axiosCalls/axiosAPICalls";

const DialogNameContainer = styled.div`
   width: 100%;
   text-align: center;
`;

const perfilNombre = "perfilNombre";
const perfilCargo = "perfilCargo";

export default function EditarPerfil({ perfil, dialogName, show, setShow }) {
   const empresas = useSelector(getEmpresas);
   const usuarios = useSelector(getUsuarios);
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

   function isCreate() {
      if (isNotEmpty(perfil)) return false;
      else return true;
   }

   function isNotEmpty(data) {
      if (typeof data === "undefined") return false;
      if (data == null) return false;
      if (data) return true;
   }

   function setEmpresaInitialOption(perfil) {
      let initialEmpresaObject = {};
      let valueObject = {};
      let noneObject = {
         value: {
            nombre: "none",
            id: -1,
         },
         label: "none",
      };
      initialEmpresaObject = noneObject;

      if (isNotEmpty(perfil)) {
         if (isNotEmpty(perfil.attributes.empresa.data)) {
            valueObject["nombre"] =
               perfil.attributes.empresa.data.attributes.nombre;
            valueObject["id"] = perfil.attributes.empresa.data.id;
            let newObject = {
               value: valueObject,
               label: valueObject.nombre,
            };
            initialEmpresaObject = newObject;
         }
      }

      let empresasArray = [noneObject];
      empresas.data.forEach((empresa) => {
         let objectIsIncluded = false;

         if (!objectIsIncluded) {
            let newValueObject = {};
            newValueObject["nombre"] = empresa.attributes.nombre;
            newValueObject["id"] = empresa.id;
            let newObject = {
               value: newValueObject,
               label: newValueObject.nombre,
            };
            empresasArray.push(newObject);
         }
      });
      setEmpresaSelectedOption(initialEmpresaObject);
      setEmpresaOptions([...empresasArray]);
   }

   function setUsuarioInitialOption(perfil) {
      let initialUsuarioObject = {};
      let valueObject = {};
      let noneObject = {
         value: {
            nombre: "none",
            id: -1,
         },
         label: "none",
      };
      initialUsuarioObject = noneObject;

      if (isNotEmpty(perfil)) {
         if (isNotEmpty(perfil.attributes.usuario.data)) {
            valueObject["nombre"] =
               perfil.attributes.usuario.data.attributes.nombre;
            valueObject["id"] = perfil.attributes.usuario.data.id;
            let newObject = {
               value: valueObject,
               label: valueObject.nombre,
            };
            initialUsuarioObject = newObject;
         }
      }

      let usuariosArray = [noneObject];
      usuarios.data.forEach((usuario) => {
         let objectIsIncluded = false;

         if (!objectIsIncluded) {
            let newValueObject = {};
            newValueObject["nombre"] = usuario.attributes.nombre;
            newValueObject["id"] = usuario.id;
            let newObject = {
               value: newValueObject,
               label: newValueObject.nombre,
            };
            usuariosArray.push(newObject);
         }
      });
      setUsuarioSelectedOption(initialUsuarioObject);
      setUsuarioOptions([...usuariosArray]);
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
      let empresaRelation = -1;
      let usuarioRelation = -1;
      let body = {};
      if (validateBothFields()) {
         if (empresaSelectedOption.label !== "none") {
            empresaRelation = empresaSelectedOption.value.id;
         }
         if (usuarioSelectedOption.label !== "none") {
            usuarioRelation = usuarioSelectedOption.value.id;
         }
         body = {
            nombre: formValues.perfilNombre,
            cargo: formValues.perfilCargo,
         };
         if (empresaRelation > -1) {
            body["empresa"] = empresaRelation;
         }
         if (usuarioRelation > -1) {
            body["usuario"] = usuarioRelation;
         }

         console.log("body:: ", body);
         if (isCreate()) {
            postPerfilToApi(body);
         } else {
            putPerfilToApi(body, perfil.id);
         }
         setShow(false);
      }
   }

   // const ShowOptions = () => {
   //    console.log(
   //       "ShowOptions:: usuarioSelectedOption: ",
   //       usuarioSelectedOption
   //    );
   //    console.log("ShowOptions:: usuarioOptions: ", usuarioOptions);
   //    return <div></div>;
   // };

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
            <label style={{ marginTop: "10px" }}>
               <p style={{ marginBottom: "10px" }}>Seleccione una empresa:</p>
               <Select
                  defaultValue={empresaSelectedOption}
                  value={empresaSelectedOption}
                  onChange={handleEmpresaSelectChange}
                  options={empresaOptions}
               />
            </label>
            <label style={{ marginTop: "10px" }}>
               <p style={{ marginBottom: "10px" }}>Seleccione un usuario:</p>
               <Select
                  defaultValue={usuarioSelectedOption}
                  value={usuarioSelectedOption}
                  onChange={handleUsuarioSelectChange}
                  options={usuarioOptions}
               />
            </label>
            <div style={{ margin: "10px" }}>
               <input
                  style={{
                     width: "100px",
                     margin: "3px",
                     marginTop: "5px",
                     backgroundColor: "#289325",
                     color: "white",
                     borderRadius: "8px",
                     cursor: "pointer",
                  }}
                  type="submit"
                  defaultValue="Enviar"
               />
               <input
                  style={{
                     width: "100px",
                     margin: "3px",
                     marginTop: "5px",
                     backgroundColor: "#289325",
                     color: "white",
                     borderRadius: "8px",
                     textAlign: "center",
                     cursor: "pointer",
                  }}
                  type="cancel"
                  name="cancel"
                  defaultValue="Cancelar"
                  onClick={() => setShow(false)}
               />
            </div>
         </form>
      </div>
   );
}
