import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },

  baseURL: "https://wikifashionwebapi.azurewebsites.net",
  //baseURL: "https://localhost:44369",
});

export const multipartInstance = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },

  baseURL: "https://wikifashionwebapi.azurewebsites.net",
  //baseURL: "https://localhost:44369",
});
export default instance;
