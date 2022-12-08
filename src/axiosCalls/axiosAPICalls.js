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
      console.log("axios error, getPerfilesFromApi:: ", error);

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

export async function getUsuariosFromApi() {
   try {
      const response = await apiCall.get(`/usuarios?populate=*`);
      return response.data;
   } catch (error) {
      console.log("axios error, getUsuariosFromApi:: ", error);

      return error.message;
   }
}
