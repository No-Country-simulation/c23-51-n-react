import useAuthStore from "@/store/authStore";
import { fetchData } from "@/utils/fetchData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useRegister = () => {  
  return useMutation({
    mutationFn: async (data) => {
      return await fetchData("auth/register", "POST", {
        // Datos personales
        email: data.email,
        password: data.password,
        name: data.name,
        birthdate: data.birthdate,

        // Datos del formulario multi-paso
        gender: data.gender,
        age: data.age,
        goals: data.goals,
        activityLevel: data.activityLevel,
      })
    },
    onSuccess: () => {
      toast.success("Cuenta creada exitosamente")
    },
    onError: (error) => {
      if (error.message.includes("ya esta registrado")) {
        toast.error(error.message)
      } else {
        toast.error("Error al crear la cuenta", {
          description: "Por favor, intenta nuevamente",
        })
      }
      throw error 
    },
  })
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) => {
      return await fetchData("auth/login", "POST", {
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: (response) => {
      const { token, expires_in } = response.data;
      const expiresAt = new Date(Date.now() + expires_in * 1000).toISOString();
      login({ token, expiresAt });
      queryClient.setQueryData(["user"], { token, expiresAt });

      toast.success("Bienvenido!");
      navigate("/dashboard");
    },
    onError: (error) => {
      if (error.message.includes("400")) {
        toast.error("Credenciales inválidas");
      } else {
        toast.error("Error de inicio de sesión", {
          description: error.message,
        });
      }
    },
  });
};
