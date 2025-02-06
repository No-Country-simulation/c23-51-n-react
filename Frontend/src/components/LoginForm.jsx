import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsMutating } from "@tanstack/react-query";
import { useLogin } from "@/hooks/useUserAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import PasswordInput from "@/components/ui/PasswordInput";
import { logo, arrowBack } from "@/assets";
import { ForgotPassword } from "./Login/ForgotPassword";
import { useNavigate } from "react-router";

const loginSchema = z.object({
  email: z.string().min(1, "Este campo es requerido"),
  password: z.string().min(1, "Este campo es requerido"),
});

const LoginForm = () => {
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isMutating = useIsMutating();

  const { mutate: login } = useLogin();

  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  const handleSubmit = (data) => {
    login(data);
  };

  return (
    <Card className="w-full max-w-md border-0 border-none shadow-none custom-card">
      <CardHeader className="p[75px]">
      <img className="arrow-back w-[30px] mt-[20px] cursor-pointer" src={arrowBack} alt="logo de momentum" />
      <img className="logo-momentum" src={logo} alt="logo de momentum" />
        <CardTitle>
          <span className="title-card">Iniciar Sesión</span>
          <div className="subtitle-card">Acceder con tu cuenta y sigue entrenando</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 pt-[75px]">
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      id="email"
                      placeholder="correo@ejemplo.com"
                      {...field}
                      autoComplete="email"
                    />
                  </FormControl>
                    <span className="text-sm text-cream/80">Ingresa tu correo electrónico</span>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PasswordInput
              control={loginForm.control}
              name="password"
              htmlFor="loginPassword"
              label="Contraseña"
              span="*"
              id="loginPassword"
              description={'Ingresa tu contrasena'}
            />
            <ForgotPassword />
            <div className="card-footer">
                <div className="flex items-center justify-center">
                  <Button type="submit" className="w-full bg-transparent btn-login" disabled={isMutating > 0}>
                    {isMutating > 0 ? "Ingresando..." : "Entrar y entrenar"}
                  </Button>
                </div>
                <span className="text-white text-center block p-[3px]">No tienes cuenta? <strong onClick={goToRegister} className=" cursor-pointer">Registrate aquí</strong></span>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
