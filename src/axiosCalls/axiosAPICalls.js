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

export async function loadEmpresasFromApi() {
   console.log("in loadEmpresasFromApi");
   try {
      const response = await apiCall.get("/empresas?populate=*");
      return response.data;
   } catch (error) {
      console.log("axios error, loadPerfilesFromApi:: ", error);

      return error.message;
   }
}

export async function loadPerfilesFromApi() {
   try {
      const response = await apiCall.get(`/perfiles?populate=*`);
      return response.data;
   } catch (error) {
      console.log("axios error, loadPerfilesFromApi:: ", error);

      return error.message;
   }
}

export async function loadUsuariosFromApi() {
   try {
      const response = await apiCall.get(`/usuarios?populate=*`);
      return response.data;
   } catch (error) {
      console.log("axios error, loadUsuariosFromApi:: ", error);

      return error.message;
   }
}
