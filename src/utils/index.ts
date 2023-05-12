import axios from "axios";
import { toast } from "react-toastify";
import { AuthData } from "./types/auth.type";

export const getAccessToken = () => {
  const at = sessionStorage.getItem("_at");
  if (!at) return null;
  const data: AuthData | null = JSON.parse(at);
  return data ? data.accessToken : null;
};

export const getRefreshToken = () => {
  const at = sessionStorage.getItem("_at");
  if (!at) return null;
  const data: AuthData | null = JSON.parse(at);
  return data ? data.refreshToken : null;
};

export const getAuthData = () => {
  const at = sessionStorage.getItem("_at");
  if (!at) return null;
  const data: AuthData | null = JSON.parse(at);
  return data || null;
};

export const clearAuthData = () => sessionStorage.removeItem("_at");

export const setAccessToken = (token: string) => {
  const at = sessionStorage.getItem("_at");
  if (!at) return;
  const data: AuthData | null = JSON.parse(at);
  if (!data) return;
  data.accessToken = token;
  sessionStorage.setItem("_at", JSON.stringify(data));
};
export const getEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  const id = match && match[2].length === 11 ? match[2] : null;

  return "//www.youtube.com/embed/" + id;
};

export const handleError = (err: unknown) => {
  let message =
    axios.isAxiosError(err) && err.response
      ? err.response.data.message
      : "Something went wrong";
  toast.error(message);
};
