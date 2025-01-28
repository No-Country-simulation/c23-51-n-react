import { create } from "zustand";

const useFormStore = create((set) => ({
  formData: {},
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  resetForm: () => set({ formData: {} }),
}));

export default useFormStore;
