import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ShowNavBar from "../components/ShowNavBar";

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Layout = () => {
   console.log("in Layout");

   return (
      <React.Fragment>
         <Container>
            <ShowNavBar />
            <Outlet />
         </Container>
      </React.Fragment>
   );
};

export default Layout;
