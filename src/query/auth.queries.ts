import { AuthApi } from "@/api/auth-api";
import { parseError } from "@/utils/parseError";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useLoginMutation(options: {
  onSuccess: (data: AuthApi.LoginRes) => void;
}) {
  const mutation = useMutation({
    mutationFn: AuthApi.login,
    onSuccess(res) {
      options.onSuccess(res);
    },
    onError(e) {
      toast.error(parseError(e).message);
    },
  });
  return mutation;
}
