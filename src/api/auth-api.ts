import { api } from "./client";

export namespace AuthApi {
  export interface LoginReq {
    email: string;
    password: string;
  }
  export interface LoginRes {
    token: string;
    message: string;
  }
  export const login = async (data: LoginReq) => {
    const res = await api.post<LoginRes>("users/login", data);
    return res.data;
  };
}
