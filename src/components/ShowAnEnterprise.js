import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { GlobalModal } from "../globalData/globalModal.js";
import EditarEmpresa from "./EditarEmpresa.js";
import { empresas } from "../sampleData/sampleData.js";

const EmpresaContainer = styled.div`
   width: 95%;
   display: flex;
   flex-direction: row;
   justify-content: start;
   margin: 0.5em;
   border: 1px solid black;
`;

const NombreContainer = styled.div`
   width: 150px;
   margin: 0.5em;
`;

const RutContainer = styled.div`
   width: 150px;
   margin: 0.5em;
`;

const EditContainer = styled.div`
    width: 50px,
    margin: 0.5em,
    backgroundColor: green,
    &:hover {
      filter: brightness(70%);
    }
    &:active {
      transform: translateY(4px);
    }
`;

const DeleteContainer = styled.div`
    width: 50px,
    margin: 0.5em,
    backgroundColor: green,
    &:hover {
      filter: brightness(70%);
    }
    &:active {
      transform: translateY(4px);
    }
`;

export default function ShowAnEnterprise({ empresa, index }) {
   const [show, setShow] = useState(false);
   function showModal() {
      setShow(true);
   }

   function hideModal() {
      setShow(false);
   }
   function handleEditClick() {
      showModal();
   }
   function handleDeleteClick(empresa, index) {
      console.log(`deleting empresa ${empresa.nombre}`, index);
   }
   return (
      //
      <EmpresaContainer>
         <NombreContainer>{empresa.nombre}</NombreContainer>
         <RutContainer>{empresa.rut}</RutContainer>
         <EditContainer onClick={(empresa) => handleEditClick(empresa)}>
            <FontAwesomeIcon style={{ margin: "10px" }} icon={faPenToSquare} />
         </EditContainer>
         <DeleteContainer onClick={() => handleDeleteClick(empresa, index)}>
            <FontAwesomeIcon
               style={{ margin: "10px", marginLeft: "20px" }}
               icon={faTrash}
            />
         </DeleteContainer>
         <GlobalModal show={show} handleClose={hideModal}>
            <EditarEmpresa empresa={empresa} dialogName="Editar Empresa" />
         </GlobalModal>
      </EmpresaContainer>
   );
}
