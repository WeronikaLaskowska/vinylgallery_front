import { GetVinylsReq, VinylApi } from "@/api/vinyl-api";
import { PaginationLogic } from "@/utils/PaginationLogic";
import { parseError } from "@/utils/parseError";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddVinylMutation(options: { onSuccess: () => void }) {
  const mutation = useMutation({
    mutationFn: VinylApi.addVinyl,
    onSuccess(res) {
      console.log(res);
      options.onSuccess();
    },
    onError(e) {
      console.log(e);
      toast.error(parseError(e).message);
    },
  });
  return mutation;
}

export function useEditVinylMutation(options: { onSuccess: () => void }) {
  const mutation = useMutation({
    mutationFn: VinylApi.editVinyl,
    onSuccess(res) {
      console.log(res);
      options.onSuccess();
    },
    onError(e) {
      console.log(e);
      toast.error(parseError(e).message);
    },
  });
  return mutation;
}
export function useDeleteVinylMutation(options: { onSuccess: () => void }) {
  const mutation = useMutation({
    mutationFn: VinylApi.deleteVinyl,
    onSuccess(res) {
      options.onSuccess();
    },
    onError(e) {
      console.log(e);
      toast.error(parseError(e).message);
    },
  });
  return mutation;
}

export function useAllVinylInfiniteQuery(params: GetVinylsReq) {
  const query = useQuery({
    queryKey: ["vinyls", params.page],
    queryFn: () => {
      return VinylApi.getVinylList({ ...params });
    },
  });
  return query;
}
export function useVinylByIdQuery(id: string) {
  const query = useQuery({
    queryKey: ["vinyl", id],
    queryFn: () => {
      return VinylApi.getVinylById(id);
    },
    enabled: Boolean(id) && id !== "",
  });
  return query;
}
