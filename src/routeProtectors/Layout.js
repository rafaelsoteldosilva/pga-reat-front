import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ShowNavBar from "../components/ShowNavBar";

import { useCheckRedux } from "../utils/useCheckRedux";

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Layout = () => {
   useCheckRedux();
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
