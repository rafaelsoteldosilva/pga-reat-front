// import { useDispatch } from "react-redux";

import { fetchEmpresas, resetEmpresas } from "../slices/empresasSlice";
import { fetchPerfiles, resetPerfiles } from "../slices/perfilesSlice";
import { fetchUsuarios, resetUsuarios } from "../slices/usuariosSlice";

export function loadData() {
   // const dispatch = useDispatch();

   resetEmpresas();
   fetchEmpresas();

   resetPerfiles();
   fetchPerfiles();

   resetUsuarios();
   fetchUsuarios();

   return;
}
