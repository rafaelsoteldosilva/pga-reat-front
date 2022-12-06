import { configureStore } from "@reduxjs/toolkit";
import empresasReducer from "../slices/empresasSlice";
import perfilesReducer from "../slices/perfilesSlice";
import usuariosReducer from "../slices/usuariosSlice";

const store = configureStore({
   reducer: {
      empresas: empresasReducer,
      perfiles: perfilesReducer,
      usuarios: usuariosReducer,
   },
});

export default store;
