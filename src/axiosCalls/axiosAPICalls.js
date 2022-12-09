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
//       config.headers.Authorization =
//          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI";
//       return config;
//    },
//    (err) => {
//       return Promise.reject(err);
//    }
// );

const freeApiCall = axios.create({
   baseURL: "http://localhost:1337/api/",
});

// freeApiCall.interceptors.request.use(
//    async (config) => {
//       return config;
//    },
//    (err) => {
//       return Promise.reject(err);
//    }
// );

export async function getEmpresasFromApi() {
   try {
      const response = await apiCall.get("/empresas?populate=*", {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, getEmpresasFromApi:: ", error);
      return error.message;
   }
}

export async function postEmpresaToApi(body) {
   let strapiBody = {
      data: {
         ...body,
      },
   };
   try {
      const response = await apiCall.post("/empresas", strapiBody, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, postEmpresaToApi:: ", error);
      return error.message;
   }
}

export async function putEmpresaToApi(body, empresaId) {
   let strapiBody = {
      data: {
         ...body,
      },
   };
   try {
      const response = await apiCall.put(`/empresas/${empresaId}`, strapiBody, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, putEmpresaToApi:: ", error);
      return error.message;
   }
}

export async function deleteEmpresaWithApi(empresaId) {
   try {
      const response = await apiCall.delete(`/empresas/${empresaId}`, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, deleteEmpresaWithApi:: ", error);
      return error.message;
   }
}

export async function getPerfilesFromApi() {
   try {
      const response = await apiCall.get(`/perfiles?populate=*`, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, getPerfilesFromApi:: ", error);

      return error.message;
   }
}

export async function postPerfilToApi(body) {
   let strapiBody = {
      data: {
         ...body,
      },
   };
   console.log("body:: ", strapiBody);
   try {
      const response = await apiCall.post("/perfiles", strapiBody, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, postPerfilToApi:: ", error);
      return error.message;
   }
}

export async function putPerfilToApi(body, perfilId) {
   let strapiBody = {
      data: {
         ...body,
      },
   };
   try {
      const response = await apiCall.put(`/perfiles/${perfilId}`, strapiBody, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, putPerfilToApi:: ", error);
      return error.message;
   }
}

export async function deletePerfilWithApi(perfilId) {
   try {
      const response = await apiCall.delete(`/perfiles/${perfilId}`, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, deletePerfilWithApi:: ", error);
      return error.message;
   }
}

export async function getUsuariosFromApi() {
   try {
      const response = await apiCall.get(`/usuarios?populate=*`, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, getUsuariosFromApi:: ", error);

      return error.message;
   }
}

export async function postUsuarioToApi(body) {
   let strapiBody = {
      data: {
         ...body,
      },
   };
   try {
      const response = await apiCall.post("/usuarios", strapiBody, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, postUsuarioToApi:: ", error);
      return error.message;
   }
}

export async function putUsuarioToApi(body, UsuarioId) {
   let strapiBody = {
      data: {
         ...body,
      },
   };
   try {
      const response = await apiCall.put(`/usuarios/${UsuarioId}`, strapiBody, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, putUsuarioToApi:: ", error);
      return error.message;
   }
}

export async function deleteUsuarioWithApi(usuarioId) {
   try {
      const response = await apiCall.delete(`/empresas/${usuarioId}`, {
         headers: {
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI",
         },
      });
      return response.data;
   } catch (error) {
      console.log("axios error, deleteUsuarioWithApi:: ", error);
      return error.message;
   }
}
