import axios, { AxiosResponse } from "axios";
import {
  clearAuthData,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "../utils";
const axiosInstance = axios.create({
  baseURL: "http://13.214.134.247:8080/movies",
  timeout: 5000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default axiosInstance;
