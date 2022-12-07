import React, { useState } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPenToSquare,
   faTrash,
   faSquarePlus,
   faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { GlobalModal } from "../globalData/globalModal.js";
import EditarPerfil from "./EditarPerfil.js";
import { useDispatch, useSelector } from "react-redux";
import { getPerfiles } from "../slices/perfilesSlice";

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

const EmpresaContainer = styled.div`
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

const UsuarioContainer = styled.div`
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

export default function ShowAProfile({ perfil, index }) {
   const dispatch = useDispatch();
   const perfiles = useSelector(getPerfiles);
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
   function handleDeleteProfileClick(perfil) {
      console.log(`deleting perfil ${perfil.attributes.nombre}`);
   }
   function handleDeleteUsuarioClick(perfil, usuario) {
      console.log(usuario);
   }
   function handleDeleteEmpresaClick(perfil, empresa) {
      console.log(empresa);
   }
   return (
      <React.Fragment>
         <PerfilContainer>
            <NombreContainer>{perfil.attributes.nombre}</NombreContainer>
            <CargoContainer>{perfil.attributes.cargo}</CargoContainer>
            <EditContainer onClick={(perfil) => handleEditClick(perfil)}>
               <FontAwesomeIcon
                  style={{ margin: "10px" }}
                  icon={faPenToSquare}
               />
            </EditContainer>
            <DeleteContainer onClick={() => handleDeleteProfileClick(perfil)}>
               <FontAwesomeIcon
                  style={{ margin: "10px", marginLeft: "20px" }}
                  icon={faTrash}
               />
            </DeleteContainer>
            <GlobalModal show={show} handleClose={hideModal}>
               <EditarPerfil
                  perfil={perfil}
                  dialogName="Editar Perfil"
                  show={show}
                  setShow={setShow}
               />
            </GlobalModal>
         </PerfilContainer>
         {perfil.attributes.empresa.data !== null && (
            <EmpresaContainer>
               <p>
                  Empresa: {perfil.attributes.empresa.data.attributes.nombre}
               </p>
            </EmpresaContainer>
         )}
         {perfil.attributes.usuario.data !== null && (
            <UsuarioContainer>
               <p>
                  Usuario: {perfil.attributes.usuario.data.attributes.nombre}
               </p>
            </UsuarioContainer>
         )}
      </React.Fragment>
   );
}
