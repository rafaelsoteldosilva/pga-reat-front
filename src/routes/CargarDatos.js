import React, { useState } from "react";
import { Button } from "../globalData/globalStyles";
import { useLoadData } from "../utils/useLoadData";

export default function CargarDatos() {
   const [performLoadData, setPerformLoadData] = useState(false);

   function cargar() {
      setPerformLoadData(true);
   }

   useLoadData(performLoadData);

   return (
      <div>
         <Button style={{ margin: "10px" }} onClick={cargar}>
            Cargar Datos
         </Button>
      </div>
   );
}
