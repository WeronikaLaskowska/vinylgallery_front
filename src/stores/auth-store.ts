import { create } from "zustand";
import { AuthStorage } from "./auth-storage";

interface AuthStore {
  token: string | null;
  setToken: (v: string | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (value) => {
    if (value) {
      AuthStorage.setToken(value);
    } else {
      AuthStorage.removeToken();
    }
    set({ token: value });
  },
}));
