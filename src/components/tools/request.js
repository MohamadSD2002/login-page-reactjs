import axios from "axios";
import { BASE_URL } from "./constants";

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
