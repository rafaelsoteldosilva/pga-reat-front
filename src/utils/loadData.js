import { useDispatch } from "react-redux";

import { fetchEmpresas, resetEmpresas } from "../slices/empresasSlice";

export function loadData() {
   const dispatch = useDispatch();

   dispatch(resetEmpresas());
   dispatch(fetchEmpresas());

   dispatch(resetPerfiles());
   dispatch(fetchPerfiles());

   dispatch(resetUsuarios());
   dispatch(fetchUsuarios());

   return;
}
