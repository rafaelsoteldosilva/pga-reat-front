import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadEmpresasFromApi } from "../axiosCalls/axiosAPICalls";
import _ from "lodash";

export const fetchEmpresas = createAsyncThunk(
   "empresas/fetchEmpresas",
   async () => {
      var empresaPromise = new Promise(function (resolve, reject) {
         loadEmpresasFromApi()
            .then((dataE) => {
               return resolve(dataE);
            })
            .catch((error) => {
               console.log("fetchMenu:: error: ", error);
               reject(error);
            });
         //  resolve(mySampleMenu);
      });
      return empresaPromise;
   }
);

const initialState = {
   empresas: [],
   empresasStatus: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
   empresasError: null,
};

const empresasSlice = createSlice({
   name: "empresas",
   initialState,
   reducers: {
      resetEmpresas: (state) => {
         state = initialState;
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchEmpresas.pending, (state, action) => {
            state.empresasStatus = "loading";
         })
         .addCase(fetchEmpresas.fulfilled, (state, action) => {
            state.empresasStatus = "succeeded";
            state.empresas = _.cloneDeep(action.payload);
         })
         .addCase(fetchEmpresas.rejected, (state, action) => {
            state.empresasStatus = "failed";
            state.empresasError = action.error.message;
         });
   },
});

export const { resetEmpresas } = empresasSlice.actions;

export const getEmpresas = (state) => state.empresas.empresas;
export const getEmpresasStatus = (state) => state.empresas.empresasStatus;
export const getEmpresasError = (state) => state.empresas.empresasError;

export default empresasSlice.reducer;
