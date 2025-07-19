import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-1-o6z3.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
