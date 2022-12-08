import { useDispatch } from "react-redux";

import { fetchEmpresas, resetEmpresas } from "../slices/empresasSlice";
import { fetchPerfiles, resetPerfiles } from "../slices/perfilesSlice";
import { fetchUsuarios, resetUsuarios } from "../slices/usuariosSlice";

export function useLoadData(performLoadData) {
   const dispatch = useDispatch();

   if (performLoadData) {
      dispatch(resetEmpresas());
      dispatch(fetchEmpresas());

      dispatch(resetPerfiles());
      dispatch(fetchPerfiles());

      dispatch(resetUsuarios());
      dispatch(fetchUsuarios());
   }

   return;
}
