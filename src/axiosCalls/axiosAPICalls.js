import axios from "axios";

// const axiosInstance = axios.create({
//    baseURL: "http://localhost:1337/api/",
//    // headers: {
//    //    Authorization: `Bearer ${accessToken}`,
//    // },
// });

const apiCall = axios.create({
   baseURL: "http://localhost:1337/api/",
});

// apiCall.interceptors.request.use(
//    async (config) => {
//       const jsonValue = window.localStorage.getItem("@token_Key");
//       let obj = JSON.parse(jsonValue);
//       if (obj) {
//          config.headers.Authorization = `Bearer ${obj}`;
//       }
//       return config;
//    },
//    (err) => {
//       return Promise.reject(err);
//    }
// );

export async function getEmpresasFromApi() {
   try {
      const response = await apiCall.get("/empresas?populate=*");
      return response.data;
   } catch (error) {
      console.log("axios error, getEmpresasFromApi:: ", error);
      return error.message;
   }
}

export async function postEmpresaToApi(body) {
   try {
      const response = await apiCall.post("/empresas", body);
      return response.data;
   } catch (error) {
      console.log("axios error, postEmpresaToApi:: ", error);
      return error.message;
   }
}

export async function putEmpresaToApi(body) {
   try {
      const response = await apiCall.put("/empresas", body);
      return response.data;
   } catch (error) {
      console.log("axios error, putEmpresaToApi:: ", error);
      return error.message;
   }
}

export async function deleteEmpresaWithApi(empresaId) {
   try {
      const response = await apiCall.delete(`/empresas/${empresaId}`);
      return response.data;
   } catch (error) {
      console.log("axios error, deleteEmpresaWithApi:: ", error);
      return error.message;
   }
}

export async function getPerfilesFromApi() {
   try {
      const response = await apiCall.get(`/perfiles?populate=*`);
      return response.data;
   } catch (error) {
      console.log("axios error, getPerfilesFromApi:: ", error);

      return error.message;
   }
}

export async function postPerfilToApi(body) {
   try {
      const response = await apiCall.post("/perfiles", body);
      return response.data;
   } catch (error) {
      console.log("axios error, postPerfilToApi:: ", error);
      return error.message;
   }
}

export async function putPerfilToApi(body) {
   try {
      const response = await apiCall.put("/perfiles", body);
      return response.data;
   } catch (error) {
      console.log("axios error, putPerfilToApi:: ", error);
      return error.message;
   }
}

export async function deletePerfilWithApi(perfilId) {
   try {
      const response = await apiCall.delete(`/perfiles/${perfilId}`);
      return response.data;
   } catch (error) {
      console.log("axios error, deletePerfilWithApi:: ", error);
      return error.message;
   }
}

export async function getUsuariosFromApi() {
   try {
      const response = await apiCall.get(`/usuarios?populate=*`);
      return response.data;
   } catch (error) {
      console.log("axios error, getUsuariosFromApi:: ", error);

      return error.message;
   }
}

export async function postUsuarioToApi(body) {
   try {
      const response = await apiCall.post("/usuarios", body);
      return response.data;
   } catch (error) {
      console.log("axios error, postUsuarioToApi:: ", error);
      return error.message;
   }
}

export async function putUsuarioToApi(body) {
   try {
      const response = await apiCall.put("/usuarios", body);
      return response.data;
   } catch (error) {
      console.log("axios error, putUsuarioToApi:: ", error);
      return error.message;
   }
}

export async function deleteUsuarioWithApi(usuarioId) {
   try {
      const response = await apiCall.delete(`/empresas/${usuarioId}`);
      return response.data;
   } catch (error) {
      console.log("axios error, deleteUsuarioWithApi:: ", error);
      return error.message;
   }
}
