import { useState } from "react";

const defaultValues = {
   empresaName: "",
   empresaRut: "",
};

const empresaName = "empresaName";
const empresaRut = "empresaRut";

export default function Empresa() {
   const [formValues, setFormValues] = useState(defaultValues);

   const [disabled, setDisabled] = useState(true);

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

      if (formValues[empresaName].length === 0) {
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

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>
               Empresa:
               <input
                  type="text"
                  name={empresaName}
                  value={formValues.empresaName}
                  onChange={handleChange}
               />
            </label>
            <label>
               Rut:
               <input
                  type="text"
                  name={empresaRut}
                  value={formValues.empresaRut}
                  onChange={handleChange}
               />
            </label>
            <input type="submit" value="Submit" />
         </form>
      </div>
   );
}
