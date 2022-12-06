import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadPerfilesFromApi } from "../axiosCalls/axiosAPICalls";
import _ from "lodash";

export const fetchPerfiles = createAsyncThunk(
   "perfil/fetchPerfiles",
   async () => {
      var perfilPromise = new Promise(function (resolve, reject) {
         loadPerfilesFromApi()
            .then((dataP) => {
               return resolve(dataP);
            })
            .catch((error) => {
               console.log("fetchPerfil:: error: ", error);
               reject(error);
            });
      });
      return perfilPromise;
   }
);

const initialState = {
   perfiles: [],
   perfilesStatus: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
   perfilesError: null,
};

const perfilesSlice = createSlice({
   name: "perfiles",
   initialState,
   reducers: {
      resetPerfiles: (state) => {
         state = initialState;
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchPerfiles.pending, (state, action) => {
            state.perfilesStatus = "loading";
         })
         .addCase(fetchPerfiles.fulfilled, (state, action) => {
            state.perfilesStatus = "succeeded";
            state.perfiles = _.cloneDeep(action.payload);
         })
         .addCase(fetchPerfiles.rejected, (state, action) => {
            state.perfilesStatus = "failed";
            state.perfilesError = action.error.message;
         });
   },
});

export const { resetPerfiles } = perfilesSlice.actions;

export const getPerfiles = (state) => state.perfiles.perfiles;
export const getPerfilesStatus = (state) => state.perfiles.perfilesStatus;
export const getPerfilesError = (state) => state.perfiles.perfilesError;

export default perfilesSlice.reducer;
