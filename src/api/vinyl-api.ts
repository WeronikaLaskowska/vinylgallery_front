import { PaginationParams } from "@/models/pagination";
import { api } from "./client";
interface AddVinylReq {
  image?: File | undefined;
  artist: string;
  type: string;
  name: string;
  year: string;
  score: string;
  description: string;
  genre: string;
}
interface EditVinylReq extends AddVinylReq {
  id: string;
}

export interface GetVinylsReq extends PaginationParams {
  type?: "BLACK" | "COLOURED";
  genre?: string;
}

export namespace VinylApi {
  export const addVinyl = async (data: AddVinylReq) => {
    const formData = new FormData();
    if (data.image) formData.append("image", data.image);
    formData.append("artist", data.artist);
    formData.append("type", data.type);
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("description", data.description);
    formData.append("genre", data.genre);
    const res = await api.post("vinyls", formData);
    return res.data;
  };
  export const editVinyl = async (data: EditVinylReq) => {
    const formData = new FormData();
    if (data.image) formData.append("image", data.image);
    formData.append("artist", data.artist);
    formData.append("type", data.type);
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("description", data.description);
    formData.append("genre", data.genre);
    const res = await api.put(`vinyls/${data.id}`, formData);
    return res.data;
  };
  export const getVinylList = async (params: GetVinylsReq) => {
    const res = await api.get("vinyls", { params });
    return res.data;
  };
  export const getVinylById = async (id: string) => {
    const res = await api.get(`vinyls/${id}`);
    return res.data;
  };
  export const deleteVinyl = async (id: string) => {
    const res = await api.delete(`vinyls/${id}`);
    return res.data;
  };
}
