import useAuthStore from "@/store/authStore";
import { fetchData } from "@/utils/fetchData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) => {
      return await fetchData("auth/register", "POST", {
        email: data.email,
        password: data.password,
        name: data.name,
        birthdate: data.birthdate,
        height: data.height,
        weight: data.weight,
      });
    },
    onSuccess: () => {
      toast.success("Registrado correctamente");
      navigate("/login");
    },
    onError: (error) => {
      if (error.message.includes("409")) {
        toast.error("El correo electrónico ya está registrado");
      } else {
        toast.error("Error de registro", {
          description: error.message,
        });
      }
    },
  });
};

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
      navigate("/");
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
