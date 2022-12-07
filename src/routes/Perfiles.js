import React, { useState } from "react";
import ShowAProfile from "../components/ShowAProfile";
import { useDispatch, useSelector } from "react-redux";
import { getPerfiles, getPerfilesStatus } from "../slices/perfilesSlice";
import { Button } from "../globalData/globalStyles";

import styled from "styled-components";
import { GlobalModal } from "../globalData/globalModal";

import EditarPerfil from "../components/EditarPerfil";

const ProfileContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 1em;
`;

export default function Profiles() {
   const dispatch = useDispatch();
   const perfiles = useSelector(getPerfiles);
   const perfilesStatus = useSelector(getPerfilesStatus);
   const [show, setShow] = useState(false);

   function handleClickNueva() {
      alert("Nuevo perfil");
   }
   function showModal() {
      setShow(true);
   }

   function hideModal() {
      setShow(false);
   }
   if (perfilesStatus !== "succeeded") return <div>loading data...</div>;
   else
      return (
         //
         <ProfileContainer>
            <Button style={{ margin: "10px" }} onClick={showModal}>
               Nuevo Perfil
            </Button>
            {perfiles.data.map((perfil, index) => (
               <ShowAProfile key={index} perfil={perfil} index={index} />
            ))}
            <GlobalModal show={show} handleClose={hideModal}>
               <EditarPerfil
                  perfil={null}
                  dialogName="Nuevo Perfil"
                  show={show}
                  setShow={setShow}
               />
            </GlobalModal>
         </ProfileContainer>
      );
}
