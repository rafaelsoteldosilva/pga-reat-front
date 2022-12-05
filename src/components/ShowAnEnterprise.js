import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { GlobalModal } from "../globalData/globalModal.js";
import EditarEmpresa from "./EditarEmpresa.js";
import { empresas, perfiles, usuarios } from "../sampleData/sampleData.js";

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

const PerfilContainer = styled.div`
   width: 92%;
   display: flex;
   flex-direction: row;
   justify-content: start;
   align-items: center;
   margin: 0.5em;
   margin-left: 3em;
   padding: 0.5em;
   border: 1px solid black;
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
      console.log(`deleting empresa ${empresa.attributes.nombre}`, index);
   }
   function searchUserInUsuarios(perfilId) {
      let MyUser = usuarios.data.find((user) =>
         user.attributes.perfil.data.length === 0
            ? false
            : user.attributes.perfil.data.find(
                 (perfil) => perfil.id === perfilId
              )
      );
      if (typeof MyUser !== "undefined") {
         return MyUser;
      } else return null;
   }
   return (
      <React.Fragment>
         <EmpresaContainer>
            <NombreContainer>{empresa.attributes.nombre}</NombreContainer>
            <RutContainer>{empresa.attributes.rut}</RutContainer>
            <EditContainer onClick={(empresa) => handleEditClick(empresa)}>
               <FontAwesomeIcon
                  style={{ margin: "10px" }}
                  icon={faPenToSquare}
               />
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
         {empresa.attributes.perfil.data && (
            <React.Fragment>
               {empresa.attributes.perfil.data && (
                  <PerfilContainer>
                     <p style={{ marginLeft: "10px" }}>
                        &nbsp;&nbsp;
                        {empresa.attributes.perfil.data.attributes.nombre}
                     </p>
                     {searchUserInUsuarios(
                        empresa.attributes.perfil.data.id
                     ) && (
                        <p style={{ marginLeft: "10px" }}>
                           {
                              searchUserInUsuarios(
                                 empresa.attributes.perfil.data.id
                              ).attributes.nombre
                           }
                        </p>
                     )}
                  </PerfilContainer>
               )}
            </React.Fragment>
         )}
      </React.Fragment>
   );
}
