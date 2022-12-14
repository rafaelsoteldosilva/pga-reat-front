import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { GlobalModal } from "../globalData/globalModal.js";
import EditarUsuario from "./EditarUsuario.js";
import { useSelector } from "react-redux";
import { getEmpresas } from "../slices/empresasSlice";
import { deleteUsuarioWithApi } from "../axiosCalls/axiosAPICalls.js";

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

export default function ShowMostrarUsuarioEnLista({ usuario, index }) {
   const empresas = useSelector(getEmpresas);

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
   function handleDeleteUsuarioClick(usuario, index) {
      deleteUsuarioWithApi(usuario.id);
   }

   function searchEnterpriseInEmpresas(perfilId) {
      let MyEmpresa = null;
      MyEmpresa = empresas.data.find((empresa) => {
         return empresa.attributes.perfil.data !== null
            ? empresa.attributes.perfil.data.id === perfilId
            : false;
      });
      return typeof MyEmpresa !== "undefined" && MyEmpresa !== null
         ? MyEmpresa.attributes.nombre
         : "";
   }
   return (
      <React.Fragment>
         <UsuarioContainer>
            <NombreContainer>{usuario.attributes.nombre}</NombreContainer>
            <RutContainer>{usuario.attributes.rut}</RutContainer>
            <EditContainer onClick={(usuario) => handleEditClick(usuario)}>
               <FontAwesomeIcon
                  style={{ margin: "10px" }}
                  icon={faPenToSquare}
               />
            </EditContainer>
            <DeleteContainer
               onClick={() => handleDeleteUsuarioClick(usuario, index)}
            >
               <FontAwesomeIcon
                  style={{ margin: "10px", marginLeft: "20px" }}
                  icon={faTrash}
               />
            </DeleteContainer>
            <GlobalModal show={show} handleClose={hideModal}>
               <EditarUsuario
                  usuario={usuario}
                  dialogName="Editar Usuario"
                  show={show}
                  setShow={setShow}
               />
            </GlobalModal>
         </UsuarioContainer>
         {usuario.attributes.perfil.data.length > 0 &&
            usuario.attributes.perfil.data.map((perfil, index) => (
               <PerfilContainer key={index}>
                  <p>Perfil: {perfil.attributes.nombre}</p>
                  <p style={{ marginLeft: "10px" }}>
                     {searchEnterpriseInEmpresas(perfil.id)}
                  </p>
               </PerfilContainer>
            ))}
      </React.Fragment>
   );
}
