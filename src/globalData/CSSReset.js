import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`

   *, *::before, *::after {
      box-sizing: border-box;
   }

   * {
      margin: 0;
   }

   html, body {
      background-color: white;
      font-family: "Roboto, sans-serif";
      color: black;
   }

   body {
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll; 
   }

   body::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
   }

   body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
   }

   img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
   }

   input, button, textarea, select {
      font: inherit;
   }

   p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
   }

   #root, #__next {
      isolation: isolate;
   }
`;
