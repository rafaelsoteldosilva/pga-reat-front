import React, { useState } from "react";
import ShowAUser from "../components/ShowAUser";
import { usuarios } from "../sampleData/sampleData";
import { Button } from "../globalData/globalStyles";

import styled from "styled-components";
import { GlobalModal } from "../globalData/globalModal";

import EditarUsuario from "../components/EditarEmpresa";

const UsuariosContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 1em;
`;

export default function Usuarios() {
   const [show, setShow] = useState(false);

   function handleClickNueva() {
      alert("Nuevo usuario");
   }
   function showModal() {
      setShow(true);
   }

   function hideModal() {
      setShow(false);
   }

   return (
      //
      <UsuariosContainer>
         <Button style={{ margin: "10px" }} onClick={showModal}>
            Nuevo Usuario
         </Button>
         {usuarios.data.map((usuario, index) => (
            <ShowAUser key={index} usuario={usuario} index={index} />
         ))}
         <GlobalModal show={show} handleClose={hideModal}>
            <EditarUsuario empresa={null} dialogName="Nuevo Usuario" />
         </GlobalModal>
      </UsuariosContainer>
   );
}
