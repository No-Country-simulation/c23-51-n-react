import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useFormStore = create(
  persist(
    (set) => ({
      userData: {},
      profileData: {},
      setFormData: (data, step) => {
        if (step === 5 || step === 7) {
          set((state) => ({ userData: { ...state.userData, ...data } }))
        } else {
          set((state) => ({ profileData: { ...state.profileData, ...data } }))
        }
      },
      resetForm: () => {
        set({ userData: {}, profileData: {} })
      },
    }),
    {
      name: "form-storage", 
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useFormStore


