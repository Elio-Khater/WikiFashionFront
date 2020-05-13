import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://wikifashionwebapi.azurewebsites.net/api",
  //baseURL: "https://localhost:44369",
});

export default instance;
