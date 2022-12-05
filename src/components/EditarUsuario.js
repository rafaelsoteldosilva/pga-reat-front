import { useEffect, useState } from "react";

import styled from "styled-components";
import Input from "react-input-auto-format";

const DialogNameContainer = styled.div`
   width: 100%;
   text-align: center;
`;

const usuarioName = "usuarioName";
const usuarioRut = "usuarioRut";

export default function Usuario({ usuario, dialogName }) {
   const defaultValues = {
      usuarioName: "",
      usuarioRut: "",
   };
   const [formValues, setFormValues] = useState(defaultValues);

   useEffect(() => {
      if (usuario !== null) {
         setFormValues({
            usuarioName: usuario.nombre,
            usuarioRut: usuario.rut,
         });
      } else {
         setFormValues({
            usuarioName: "",
            usuarioRut: "",
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
                  //   format="##.###.###-#"
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
         </form>
      </div>
   );
}
