import React, { useRef, useState } from "react";

import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { GlobalModal } from "../globalData/globalModal.js";
import EditarEmpresa from "./EditarEmpresa.js";
import { deleteEmpresaWithApi } from "../axiosCalls/axiosAPICalls.js";

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

export default function MostrarEmpresaEnLista({ empresa, index }) {
   const delRef = useRef();
   const editRef = useRef();
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
      deleteEmpresaWithApi(empresa.id);
   }
   return (
      <React.Fragment>
         <EmpresaContainer>
            <NombreContainer>{empresa.attributes.nombre}</NombreContainer>
            <RutContainer>{empresa.attributes.rut}</RutContainer>
            <EditContainer
               ref={editRef}
               onClick={() => handleEditClick(empresa)}
            >
               <FontAwesomeIcon
                  style={{ margin: "10px" }}
                  icon={faPenToSquare}
               />
            </EditContainer>
            <Tippy content="Editar una empresa" reference={editRef} />
            <DeleteContainer
               ref={delRef}
               onClick={() => handleDeleteClick(empresa, index)}
            >
               <FontAwesomeIcon
                  style={{ margin: "10px", marginLeft: "20px" }}
                  icon={faTrash}
               />
            </DeleteContainer>
            <Tippy content="Eliminar una empresa" reference={delRef} />
            <GlobalModal show={show} handleClose={hideModal}>
               <EditarEmpresa
                  empresa={empresa}
                  dialogName="Editar Empresa"
                  show={show}
                  setShow={setShow}
               />
            </GlobalModal>
         </EmpresaContainer>
         {empresa.attributes.perfil.data && (
            <React.Fragment>
               <PerfilContainer>
                  <p>Perfil: </p>
                  <p style={{ marginLeft: "10px" }}>
                     {empresa.attributes.perfil.data.attributes.nombre}
                  </p>
               </PerfilContainer>
            </React.Fragment>
         )}
      </React.Fragment>
   );
}
