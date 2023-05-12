import axiosInstance from ".";
import { AuthDto } from "../utils/types/auth.type";

export const register = async (authInput: AuthDto) => {
  return axiosInstance.post("auth/signup", authInput);
};

export const login = async (authInput: AuthDto) => {
  return axiosInstance.post("auth/signin", authInput);
};
