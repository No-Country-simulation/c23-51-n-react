import useAuthStore from "@/store/authStore";
import useFormStore from "@/store/formStore";
import { fetchData } from "@/utils/fetchData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useRegister = () => {
  const login = useAuthStore((state) => state.login);

  // 1. crear el usuario
  const createUserMutation = useMutation({
    mutationFn: async (data) => {
      return await fetchData("auth/register", "POST", {
        email: data.email,
        password: data.password,
        name: data.name,
      });
    },
    onError: (error) => {
      toast.error("Error al crear la cuenta", {
        description: error.message || "Por favor, intenta nuevamente",
      });
      throw error;
    },
  });

  // 2. completar el perfil del usuario
  const completeProfileMutation = useMutation({
    mutationFn: async ({ data, token }) => {
      return await fetchData(
        "auth/complete-profile",
        "POST",
        {
          last_name: "apellido",
          gender: data.gender,
          goals: data.goals,
          activityLevel: data.activityLevel,
          birth: data.birthdate,
          height: "0.00",
          weight: "0.00",
          country: "País",
        },
        token,
      );
    },
    onSuccess: () => {
      toast.success("Perfil completado correctamente");
    },
    onError: (error) => {
      toast.error("Error al completar el perfil", {
        description: error.message || "Por favor, intenta nuevamente",
      });
      throw error;
    },
  });

  // 3. registro completo
  const register = async () => {
    try {
      const { userData, profileData } = useFormStore.getState();
      const completeFormData = { ...userData, ...profileData };

      const userResponse = await createUserMutation.mutateAsync(completeFormData);
      const { token, expiresAt } = userResponse.data;

      if (!token) {
        throw new Error("No se recibió un token válido después de crear el usuario");
      }

      await completeProfileMutation.mutateAsync({ data: completeFormData, token });

      // Autenticar al usuario usando el store
      login({ token, expiresAt });
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Error en el proceso de registro", {
        description: "Por favor, intenta nuevamente",
      });
    }
  };

  return {
    register,
    isLoading: createUserMutation.isLoading || completeProfileMutation.isLoading,
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
