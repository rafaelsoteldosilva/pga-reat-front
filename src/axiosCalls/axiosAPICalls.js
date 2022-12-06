import axios from "axios";

// const axiosInstance = axios.create({
//    baseURL: "http://localhost:1337/api/",
//    // headers: {
//    //    Authorization: `Bearer ${accessToken}`,
//    // },
// });

export async function loadEmpresasFromApi() {
   let data = {};
   try {
      const response = await axios.get(
         "http://localhost:1337/api/empresas?populate=*"
      );
      return response.data;
   } catch (error) {
      console.log("axios error, loadPerfilesFromApi:: ", error);

      return error.message;
   }
}

export async function loadPerfilesFromApi() {
   let data = {};
   try {
      const response = await axios.get(
         `http://localhost:1337/api/perfiles?populate=*`
      );
      return response.data;
   } catch (error) {
      console.log("axios error, loadPerfilesFromApi:: ", error);

      return error.message;
   }
}

export async function loadUsuariosFromApi() {
   let data = {};
   try {
      const response = await axios.get(
         `http://localhost:1337/api/usuarios?populate=*`
      );
      return response.data;
   } catch (error) {
      console.log("axios error, loadUsuariosFromApi:: ", error);

      return error.message;
   }
}
