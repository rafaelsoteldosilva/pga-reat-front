import React, { useState } from "react";
import ShowAnEnterprise from "../components/ShowAnEnterprise";
import { empresas } from "../sampleData/sampleData";
import { Button } from "../globalData/globalStyles";

import styled from "styled-components";
import { GlobalModal } from "../globalData/globalModal";

import EditarEmpresa from "../components/EditarEmpresa";

const EmpresasContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 1em;
`;

export default function Empresas() {
   const [show, setShow] = useState(false);

   function handleClickNueva() {
      alert("Nueva empresa");
   }
   function showModal() {
      setShow(true);
   }

   function hideModal() {
      setShow(false);
   }
   return (
      //
      <EmpresasContainer>
         <Button style={{ margin: "10px" }} onClick={showModal}>
            Nueva Empresa
         </Button>
         {empresas.map((empresa, index) => (
            <div key={index}>
               <ShowAnEnterprise empresa={empresa} index={index} />
            </div>
         ))}
         <GlobalModal show={show} handleClose={hideModal}>
            <EditarEmpresa empresa={null} dialogName="Nueva Empresa" />
         </GlobalModal>
      </EmpresasContainer>
   );
}
