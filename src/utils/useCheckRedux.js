import { useDispatch } from "react-redux";
import store from "../app/store";

import { fetchEmpresas, resetEmpresas } from "../slices/empresasSlice";
import { fetchPerfiles, resetPerfiles } from "../slices/perfilesSlice";
import { fetchUsuarios, resetUsuarios } from "../slices/usuariosSlice";

export function useCheckRedux() {
   const dispatch = useDispatch();

   if (!store.getState().empresas.empresasStatus !== "succeeded") {
      console.log("reading data...");
      dispatch(resetEmpresas());
      dispatch(fetchEmpresas());

      dispatch(resetPerfiles());
      dispatch(fetchPerfiles());

      dispatch(resetUsuarios());
      dispatch(fetchUsuarios());
   }
   return;
}
