import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSReset } from "./globalData/CSSReset";
import Layout from "./routeProtectors/Layout";
import Empresa from "./routes/Empresa";
import Perfil from "./routes/Perfil";
import Usuario from "./routes/Usuario";

function App() {
   return (
      <BrowserRouter>
         <CSSReset />
         <Routes>
            <Route element={<Layout />} path="/">
               <Route index element={<Empresa />} />
               <Route path="/empresa" element={<Empresa />} />
               <Route path="/perfil" element={<Perfil />} />
               <Route path="/usuario" element={<Usuario />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
