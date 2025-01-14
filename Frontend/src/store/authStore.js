import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      expiresAt: null,
      isAuthenticated: false,
      login: (data) =>
        set({
          token: data.token,
          expiresAt: data.expiresAt,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          token: null,
          expiresAt: null,
          isAuthenticated: false,
        }),
      isTokenValid: () => {
        const state = useAuthStore.getState();
        if (!state.token || !state.expiresAt) return false;
        return new Date(state.expiresAt) > new Date();
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;

