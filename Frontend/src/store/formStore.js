import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFormStore = create(
  persist(
    (set) => ({
      formData: {},
      setFormData: (data) => {
        set((state) => ({ formData: { ...state.formData, ...data } }));
      },
      resetForm: () => {
        set({ formData: {} });
      },
    }),
    {
      name: "form-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useFormStore;
