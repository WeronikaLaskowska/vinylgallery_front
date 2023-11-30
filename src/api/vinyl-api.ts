import { PaginationParams } from "@/models/pagination";
import { api } from "./client";
import { Vinyl } from "@/models/vinyl";
interface AddVinylReq {
  image: File;
  artist: string;
  type: string;
  name: string;
  year: string;
  score: string;
  description: string;
  genre: string;
}

export interface GetVinylsReq extends PaginationParams {
  type?: "BLACK" | "COLOURED";
  genre?: string;
}

export namespace VinylApi {
  export const addVinyl = async (data: AddVinylReq) => {
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("artist", data.artist);
    formData.append("type", data.type);
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("description", data.description);
    formData.append("genre", data.genre);
    const res = await api.post("vinyls", formData);
    console.log(res, "VINYL ADD RES");
    return res.data;
  };
  export const getVinylList = async (params: GetVinylsReq) => {
    const res = await api.get("vinyls", { params });
    console.log(res, "VINYL LIST RES");
    return res.data;
  };
}
