import { useEffect, useState } from "react";

import styled from "styled-components";
import Input from "react-input-auto-format";

const DialogNameContainer = styled.div`
   width: 100%;
   text-align: center;
`;

const perfilNombre = "perfilNombre";
const perfilCargo = "perfilCargo";

export default function Perfil({ perfil, dialogName }) {
   const defaultValues = {
      perfilNombre: "",
      perfilCargo: "",
   };
   const [formValues, setFormValues] = useState(defaultValues);

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
                  // format="##.###.###-#"
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
         </form>
      </div>
   );
}
