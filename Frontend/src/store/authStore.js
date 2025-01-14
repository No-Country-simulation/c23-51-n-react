import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (data) =>
        set({
          user: data?.user,
          token: data?.token,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
            user: null,
            token: null,
            isAuthenticated: false,
        }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;
