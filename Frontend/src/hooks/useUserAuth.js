import useAuthStore from "@/store/authStore";
import useFormStore from "@/store/formStore";
import { fetchData } from "@/utils/fetchData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";


export const useRegister = () => {
  const login = useAuthStore((state) => state.login);
  const formData = useFormStore((state) => state.formData);

  const registerMutation = useMutation({
    mutationFn: async () => {
      const response = await fetchData("auth/register", "POST", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        last_name: "Apellido",
        gender: formData.gender,
        goals: formData.goals,
        activityLevel: formData.activityLevel,
        birth: formData.birthdate,
        height: "0.00",
        weight: "0.00",
        country: "País",
      });
      
      if (response.success && response.data && response.data.token) {
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

        return {
          token: response.data.token,
          expiresAt: expiresAt
        };
      } else {
        throw new Error("No se recibió un token válido del servidor");
      }
    },
    onSuccess: (authData) => {
      toast.success("Registro completado correctamente");
      login(authData); // Llama a la función login con el token y la fecha de expiración
    },
    onError: (error) => {
      toast.error("Error en el registro", {
        description: error.message || "Por favor, intenta nuevamente",
      });
    },
  });

  return {
    register: () => registerMutation.mutateAsync(),
    isLoading: registerMutation.isLoading,
    isError: registerMutation.isError,
    isSuccess: registerMutation.isSuccess,
  };
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
      navigate("/home");
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
