import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  timeout: 300000,
});

// instance.interceptors.request.use(
//   (config) => {  
//     return config;
//   },

// );instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
// err  => {
//   console.log(err)
// }
// );
export default instance;
