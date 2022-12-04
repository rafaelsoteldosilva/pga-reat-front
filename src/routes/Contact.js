import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as globalConstants from "../globals/globalConstants";

const ContentContainer = styled.div`
   position: fixed;
   display: flex;
   margin-top: 8em;
   width: 100%;
   z-index: 1;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const FieldContainer = styled.div`
   margin-top: -0.1rem;
`;

const InputField = styled.fieldset`
   border: 1px solid ${({ error }) => (error ? "red" : "white")};
   border-radius: 5px;
   margin: -0.1rem 0;
   width: 21em;
   &:hover {
      border-color: ${({ theme, error }) => (error ? "red" : "gray")};
   }

   legend {
      padding: 0 7px;
      color: black;
   }

   Input {
      color: black;
      border: none;
      width: 100%;
      :focus {
         outline: none;
      }
   }

   TextArea {
      font-family: "Roboto";
      font-weight: 500;
      color: black;
      border: none;
      width: 100%;
      :focus {
         outline: none;
      }
   }
`;

const Input = styled.input``;

const FieldErrorText = styled.label`
   margin: 0.7em;
   padding: 0;
   color: red;
   font-size: 0.8em;
`;

const SendButtonAndMandatoryText = styled.div`
   margin-top: 0.3em;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

const SendButton = styled(globalStyles.Button)``;

const MandatoryText = styled.div``;

const defaultValues = {
   enterpriseName: "",
   enterpriseRut: "",
};

const defaultErrorValuesRef = {
   enterpriseName: "",
   enterpriseRut: "",
};

const initialTouchedOrError = {
   enterpriseName: false,
   enterpriseRut: false,
};

const requiredFields = {
   enterpriseName: ture,
   enterpriseRut: true,
};

const enterpriseName = "enterpriseName";
const enterpriseRut = "enterpriseRut";

const Contact = () => {
   const [formValues, setFormValues] = useState(defaultValues);
   const [touched, setTouched] = useState(initialTouchedOrError);
   //   const [country, setCountry] = useState(countryDefaultValues)
   const [disableSendButton, setDisableSendButton] = useState(false);
   const [forceRender, setForceRender] = useState(false);
   // By changing this state value, as any other, a render will be forced

   const errorMessagesRefValues = useRef(defaultErrorValuesRef);

   let errorsForStyling = errorMessagesRefValues.current;

   // useEffect(() => {
   //    const someFieldWasTouched = Object.values(touched).reduce(
   //       (prev, curr) => prev || curr,
   //       false
   //    );
   // }, [touched]);

   for (let key in errorsForStyling) {
      errorsForStyling[key] =
         touched[key] && formValues[key].length !== 0
            ? errorsForStyling[key]
            : "";
   }

   const handleInputChange = (e) => {
      let { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
      if (value === "") {
         setTouched({
            ...touched,
            [name]: false,
         });
      } else {
         setTouched({
            ...touched,
            [name]: true,
         });
      }
   };

   function checkFieldWithRegex(field) {
      const nameRE = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
      const rutRE = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/u;

      const noError = true;
      let result = noError;
      switch (field) {
         case enterpriseName:
            result = new RegExp(nameRE).test(formValues[field]);
            break;
         case enterpriseRut:
            result = new RegExp(rutRE).test(formValues[field]);
            break;
         default:
            break;
      }

      return result;
   }

   function getErrorFieldHelperText(errorField) {
      switch (errorField) {
         case enterpriseName:
            return "Please, complete a valid enterprise Name";

         case enterpriseRut:
            return "Please, complete a valid enterprise Rut";

         default:
            return "";
      }
   }

   function validateField(field) {
      const error = false,
         noError = true;
      let validateFieldResult = noError;
      switch (field) {
         case enterpriseName:
            if (formValues.enterpriseName.length === 0) {
               validateFieldResult = error;
            } else {
               validateFieldResult = checkFieldWithRegex(enterpriseName);
            }
            break;
         case enterpriseRut:
            if (formValues.enterpriseRut.length === 0) {
               validateFieldResult = error;
            } else {
               validateFieldResult = checkFieldWithRegex(enterpriseRut);
            }
            break;

         default:
            break;
      }
      let prevError = errorMessagesRefValues.current[field];
      if (!validateFieldResult) {
         errorMessagesRefValues.current[field] = getErrorFieldHelperText(field);
      } else {
         errorMessagesRefValues.current[field] = "";
      }
      if (prevError !== errorMessagesRefValues.current[field])
         setForceRender(!forceRender);
      return validateFieldResult;
   }

   useEffect(() => {
      let fieldValidations = [];
      Object.keys(touched).forEach((field) => {
         fieldValidations.push({ field, valid: validateField(field) });
      });

      setDisableSendButton(
         fieldValidations.some((fieldValidations) => {
            return (
               requiredFields[fieldValidations.field] && !fieldValidations.valid
            );
         })
      );
   }, [formValues]);

   function handleSubmit() {
      // console.log(formValues)
   }
   return (
      <ContentContainer>
         <FormContainer>
            <FieldContainer>
               <InputField
                  error={
                     touched[contactName] &&
                     errorMessagesRefValues.current.contactName !== ""
                  }
               >
                  <legend>Enterprise Name *</legend>
                  <Input
                     type="text"
                     name={enterpriseName}
                     autoComplete="new-password"
                     size="50"
                     placeholder="Enter engterprise name"
                     value={formValues.enterpriseName}
                     onChange={handleInputChange}
                  />
               </InputField>
               <FieldErrorText>
                  {touched[contactName] &&
                     errorMessagesRefValues.current.enterpriseName}
               </FieldErrorText>
            </FieldContainer>
            <FieldContainer>
               <InputField
                  error={
                     touched[companyName] &&
                     errorMessagesRefValues.current.enterpriseRut !== ""
                  }
               >
                  <legend>Enterprise Rut *</legend>
                  <Input
                     type="text"
                     name={enterpriseRut}
                     autoComplete="new-password"
                     size="50"
                     placeholder="Enter the enterprise rut"
                     value={formValues.enterpriseRut}
                     onChange={handleInputChange}
                  />
               </InputField>
               <FieldErrorText>
                  {touched[enterpriseRut] &&
                     errorMessagesRefValues.current.enterpriseRut}
               </FieldErrorText>
            </FieldContainer>

            <SendButtonAndMandatoryText>
               <SendButton
                  disabled={disableSendButton}
                  type="submit"
                  onClick={handleSubmit}
               >
                  SEND
               </SendButton>
               <MandatoryText>* = mandatory field</MandatoryText>
            </SendButtonAndMandatoryText>
         </FormContainer>
      </ContentContainer>
   );
};

export default Contact;
