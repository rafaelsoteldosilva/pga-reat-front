import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsuariosFromApi } from "../axiosCalls/axiosAPICalls";
import _ from "lodash";

export const fetchUsuarios = createAsyncThunk(
   "usuario/fetchUsuarios",
   async () => {
      var usuarioPromise = new Promise(function (resolve, reject) {
         getUsuariosFromApi()
            .then((dataU) => {
               return resolve(dataU);
            })
            .catch((error) => {
               console.log("fetchUsuario:: error: ", error);
               reject(error);
            });
      });
      return usuarioPromise;
   }
);

const initialState = {
   usuarios: [],
   usuariosStatus: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
   usuariosError: null,
};

const usuariosSlice = createSlice({
   name: "usuarios",
   initialState,
   reducers: {
      resetUsuarios: (state) => {
         state = initialState;
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchUsuarios.pending, (state, action) => {
            state.usuariosStatus = "loading";
         })
         .addCase(fetchUsuarios.fulfilled, (state, action) => {
            state.usuariosStatus = "succeeded";
            state.usuarios = _.cloneDeep(action.payload);
         })
         .addCase(fetchUsuarios.rejected, (state, action) => {
            state.usuariosStatus = "failed";
            state.usuariosError = action.error.message;
         });
   },
});

export const { resetUsuarios } = usuariosSlice.actions;

export const getUsuarios = (state) => state.usuarios.usuarios;
export const getUsuariosStatus = (state) => state.usuarios.usuariosStatus;
export const getUsuariosError = (state) => state.usuarios.usuariosError;

export default usuariosSlice.reducer;
