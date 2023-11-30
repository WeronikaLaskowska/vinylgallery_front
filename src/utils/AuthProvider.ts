import { AuthStorage } from "@/stores/auth-storage";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface AuthProviderProps {
  children: JSX.Element;
  role: string;
}

export function AuthProvider({ children, role }: AuthProviderProps) {
  const stateToken = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const storageToken = AuthStorage.getToken();
      if (storageToken) {
        setToken(storageToken);
      }
      const token = stateToken || storageToken;

      //user without token trying to go to admin panel
      if (!token && role === "ADMIN") {
        return router.push("/auth/login");
      }

      //logged in user trying to go to login pages
      if (token && role === "AUTH") {
        return router.push("/admin/list");
      }
    }
    checkAuth();
  }, [role, router, setToken, stateToken]);

  return children;
}
