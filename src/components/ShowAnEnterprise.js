import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    &: hover {
      filter: brightness(70%);
    }
    &: active {
      transform: translateY(4px);
    }
`;

const DeleteContainer = styled.div`
    width: 50px,
    margin: 0.5em,
    backgroundColor: green,
    &: hover {
      filter: brightness(70%);
    }
    &: active {
      transform: translateY(4px);
    }
`;

export default function ShowAnEnterprise({ empresa }) {
   function handleEditClick() {
      console.log("Editando empresa");
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
      </EmpresaContainer>
   );
}
