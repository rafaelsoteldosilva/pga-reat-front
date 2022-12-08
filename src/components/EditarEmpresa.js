import { useEffect, useState } from "react";

import styled from "styled-components";
import Select from "react-select";

import { useSelector } from "react-redux";
import { getPerfiles } from "../slices/perfilesSlice";
import { postEmpresaToApi, putEmpresaToApi } from "../axiosCalls/axiosAPICalls";
import { loadData } from "../utils/loadData";

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

export default function EditarEmpresa({ empresa, dialogName, show, setShow }) {
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

   function isCreate() {
      if (isNotEmpty(empresa)) return false;
      else return true;
   }

   function isNotEmpty(data) {
      if (typeof data === "undefined") return false;
      if (data == null) return false;
      if (data) return true;
   }

   function setProfileInitialOption(empresa) {
      let valueObject = {};
      let noneObject = {
         value: {
            nombre: "none",
            id: -1,
         },
         label: "none",
      };
      setProfileOptions([noneObject]);
      setProfileSelectedOption(noneObject);

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
      perfiles.data.forEach((perfil, index) => {
         console.log("agregando items to select");
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
      let relation = -1;
      let body = {};
      if (validateBothFields()) {
         if (profileSelectedOption.label !== "none") {
            relation = profileSelectedOption.value.id;
         }
         if (relation > -1) {
            body = {
               nombre: formValues.empresaNombre,
               rut: formValues.empresaRut,
               perfil: relation,
            };
         } else {
            body = {
               nombre: formValues.empresaNombre,
               rut: formValues.empresaRut,
            };
         }

         if (isCreate()) {
            postEmpresaToApi(body);
         } else {
            putEmpresaToApi(body, empresa.id);
         }
         loadData();
         setShow(false);
      }
   }

   // const ShowOptions = () => {
   //    console.log("profileSelectedOption: ", profileSelectedOption);
   //    console.log("profileOptions: ", profileOptions);
   //    return <div></div>;
   // };

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
                  type="text"
                  name={empresaRut}
                  value={formValues.empresaRut}
                  onChange={handleChange}
                  style={{ margin: "0 0 0 10px" }}
               />
            </label>
            <label style={{ marginTop: "10px" }}>
               <p style={{ marginBottom: "10px" }}>Seleccione un perfil:</p>
               <Select
                  defaultValue={profileSelectedOption}
                  value={profileSelectedOption}
                  onChange={handleSelectChange}
                  options={profileOptions}
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
                  defaultValue="Enviar"
                  type="submit"
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
                  defaultValue="Cancelar"
                  type="cancel"
                  name="cancel"
                  onClick={() => setShow(false)}
               />
            </div>
         </form>
      </DialogContainer>
   );
}
