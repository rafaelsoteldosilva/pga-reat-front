import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { GlobalModal } from "../globalData/globalModal.js";
import EditarUsuario from "./EditarUsuario.js";
import { usuarios } from "../sampleData/sampleData.js";

const UsuarioContainer = styled.div`
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

export default function ShowAUser({ usuario, index }) {
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
   function handleDeleteClick(usuario, index) {
      //   console.log(`deleting user ${usuario.nombre}`, index);
   }
   return (
      //
      <UsuarioContainer>
         <NombreContainer>{usuario.nombre}</NombreContainer>
         <RutContainer>{usuario.rut}</RutContainer>
         <EditContainer onClick={(usuario) => handleEditClick(usuario)}>
            <FontAwesomeIcon style={{ margin: "10px" }} icon={faPenToSquare} />
         </EditContainer>
         <DeleteContainer onClick={() => handleDeleteClick(usuario, index)}>
            <FontAwesomeIcon
               style={{ margin: "10px", marginLeft: "20px" }}
               icon={faTrash}
            />
         </DeleteContainer>
         <GlobalModal show={show} handleClose={hideModal}>
            <EditarUsuario usuario={usuario} dialogName="Editar Usuario" />
         </GlobalModal>
      </UsuarioContainer>
   );
}
