import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { GlobalModal } from "../globalData/globalModal.js";
import EditarPerfil from "./EditarPerfil.js";
import { perfiles } from "../sampleData/sampleData.js";

const PerfilContainer = styled.div`
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

const CargoContainer = styled.div`
   width: 300px;
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

export default function ShowAProfile({ perfil, index }) {
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
   function handleDeleteClick(perfil, index) {
      console.log(`deleting perfil ${perfil.attributes.nombre}`, index);
   }
   return (
      //
      <PerfilContainer>
         <NombreContainer>{perfil.attributes.nombre}</NombreContainer>
         <CargoContainer>{perfil.attributes.cargo}</CargoContainer>
         <EditContainer onClick={(perfil) => handleEditClick(perfil)}>
            <FontAwesomeIcon style={{ margin: "10px" }} icon={faPenToSquare} />
         </EditContainer>
         <DeleteContainer onClick={() => handleDeleteClick(perfil, index)}>
            <FontAwesomeIcon
               style={{ margin: "10px", marginLeft: "20px" }}
               icon={faTrash}
            />
         </DeleteContainer>
         <GlobalModal show={show} handleClose={hideModal}>
            <EditarPerfil perfil={perfil} dialogName="Editar Perfil" />
         </GlobalModal>
      </PerfilContainer>
   );
}
