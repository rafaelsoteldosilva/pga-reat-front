import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`

   /* 1. Use a more-intuitive box-sizing model. */

   *, *::before, *::after {
      box-sizing: border-box;
   }

   /* 2. Remove default margin */

   * {
      margin: 0;
   }

   /* 3. Allow percentage-based heights in the application, and set some theme values */

   html, body {
      background-color: white;
      font-family: "Roboto, sans-serif";
      color: black;
   }

   /* Typographic tweaks! 4. Add accessible line-height 5. Improve text rendering */

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

   /* 6. Improve media defaults */

   img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
   }

   /* 7. Remove built-in form typography styles */

   input, button, textarea, select {
      font: inherit;
   }

   /* 8. Avoid text overflows */

   p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
   }

   /* 9. Create a root stacking context */

   #root, #__next {
      isolation: isolate;
   }
`;
