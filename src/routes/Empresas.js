import React, { useState } from "react";
import ShowAnEnterprise from "../components/ShowAnEnterprise";
import { useDispatch, useSelector } from "react-redux";
import { getEmpresas, getEmpresasStatus } from "../slices/empresasSlice";
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
   const dispatch = useDispatch();
   const empresas = useSelector(getEmpresas);
   const empresasStatus = useSelector(getEmpresasStatus);
   console.log("empresas:: ", empresas);
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

   const ShowEmpresas = () => {
      console.log("empresas: ", empresas);
      return <div></div>;
   };
   if (empresasStatus !== "succeeded") return <div>loading data...</div>;
   else
      return (
         //
         <EmpresasContainer>
            <Button style={{ margin: "10px" }} onClick={showModal}>
               Nueva Empresa
            </Button>
            {empresas.data.map((empresa, index) => (
               <ShowAnEnterprise key={index} empresa={empresa} index={index} />
            ))}
            <GlobalModal show={show} handleClose={hideModal}>
               <EditarEmpresa empresa={null} dialogName="Nueva Empresa" />
            </GlobalModal>
         </EmpresasContainer>
      );
}
