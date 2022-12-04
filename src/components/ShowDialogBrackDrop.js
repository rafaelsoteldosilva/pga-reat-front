import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 100;
   top: 0;
   right: 0;
`;

const ShowDialogsBackDrop = (props) => {
   return <Backdrop></Backdrop>;
};

export default ShowDialogsBackDrop;
