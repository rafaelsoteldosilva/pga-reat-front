import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        display: flex;
        background: "hsl(0, 0%, 15%)";
        color: 'white';
        font-family: "Roboto";
        font-size: 1em;
    }

`;

export const Button = styled.button`
   height: 2em;
   ${({ disabled }) =>
      disabled &&
      `
            disabled
        `}
   width: 10%;
   background-color: ${({ theme, disabled }) =>
      disabled ? "hsl(0, 0%, 30%)" : "hsl(359, 99%, 60%)"};
   color: "black";
   border-radius: 8px;
   &:hover {
      background-color: ${({ theme, disabled }) =>
         disabled ? null : "hsl(359, 99%, 80%)"};
      color: ${({ theme, disabled }) => (disabled ? null : "black")};
   }
   &:active {
      background-color: gray};
      color: "hsl(359, 99%, 30%)";
   }
   font-size: 1em;
   &:hover {
      transform: translateY(2px);
   }
`;
