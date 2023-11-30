import { useAuthStore } from "@/stores/auth-store";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    // @ts-ignore
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

api.interceptors.response.use((config) => {
  if (config.status === 401) {
    useAuthStore.getState().setToken(null);
  }
  return config;
});
