import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSReset } from "./globalData/CSSReset";
import Layout from "./routeProtectors/Layout";
import Empresas from "./routes/Empresas";
import Perfiles from "./routes/Perfiles";
import Usuarios from "./routes/Usuarios";

function App() {
   return (
      <BrowserRouter>
         <CSSReset />
         <Routes>
            <Route element={<Layout />} path="/">
               <Route index element={<Empresas />} />
               <Route path="/empresas" element={<Empresas />} />
               <Route path="/perfiles" element={<Perfiles />} />
               <Route path="/usuarios" element={<Usuarios />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
