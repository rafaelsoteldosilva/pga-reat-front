import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Modal } from "./Modal.js";

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

export default function ShowAnEnterprise({ empresa }) {
   const [show, setShow] = useState(false);
   function showModal() {
      setShow(true);
   }

   function hideModal() {
      setShow(false);
   }
   function handleEditClick() {
      console.log("Editando empresa");
      showModal();
   }
   function handleDeleteClick() {
      console.log("Eliminando empresa");
   }
   return (
      //
      <EmpresaContainer>
         <NombreContainer>{empresa.nombre}</NombreContainer>
         <RutContainer>{empresa.rut}</RutContainer>
         <EditContainer onClick={(empresa) => handleEditClick(empresa)}>
            <FontAwesomeIcon style={{ margin: "10px" }} icon={faPenToSquare} />
         </EditContainer>
         <DeleteContainer onClick={(empresa) => handleDeleteClick(empresa)}>
            <FontAwesomeIcon
               style={{ margin: "10px", marginLeft: "20px" }}
               icon={faTrash}
            />
         </DeleteContainer>
         <Modal show={show} handleClose={hideModal}>
            <p>Modal</p>
            <p>otro modal</p>
         </Modal>
         {/* <button type="button" onClick={showModal}>
            Open
         </button> */}
      </EmpresaContainer>
   );
}
