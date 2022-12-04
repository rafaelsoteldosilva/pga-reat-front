import React from "react";
import ShowAnEnterprise from "../components/ShowAnEnterprise";
import { empresas } from "../sampleData/sampleData";
import { Button } from "../globalData/globalStyles";

import styled from "styled-components";

const EmpresasContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 1em;
`;

export default function Empresas() {
   return (
      //
      <EmpresasContainer>
         <Button style={{ margin: "10px" }}>Nueva Empresa</Button>
         {empresas.map((empresa, index) => (
            <div key={index}>
               <ShowAnEnterprise empresa={empresa} />
            </div>
         ))}
      </EmpresasContainer>
   );
}
