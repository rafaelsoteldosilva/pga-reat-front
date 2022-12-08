import React from "react";
import { Button } from "../globalData/globalStyles";
import { loadData } from "../utils/loadData";

export default function CargarDatos() {
   function cargar() {
      loadData();
   }
   return (
      <div>
         <Button style={{ margin: "10px" }} onClick={cargar}>
            Cargar Datos
         </Button>
      </div>
   );
}
