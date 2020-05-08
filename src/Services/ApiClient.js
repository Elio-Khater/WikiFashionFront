import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://localhost:44369/api",
});

export default instance;
