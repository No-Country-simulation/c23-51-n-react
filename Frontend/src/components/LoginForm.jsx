import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsMutating } from "@tanstack/react-query";
import { useLogin } from "@/hooks/useUserAuth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import PasswordInput from "@/components/ui/PasswordInput";
import { Link, useNavigate } from "react-router";

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
    navigate("/register");
  };

  const handleSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <div className="space-y-2">
        <h1>Iniciar Sesión</h1>
        <p className="text-cream/80">Accede con tu cuenta y sigue entrenando</p>
      </div>

      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleSubmit)}
          className="flex flex-col pt-5 space-y-[50%]"
        >
          <div className="flex flex-col gap-8">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="email"
                      {...field}
                      autoComplete="email"
                      placeholder="ejemplo@gmail.com"
                      type="email"
                      className="text-base"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription className="text-sm text-cream/80">
                    Ingresa tu correo electrónico.
                  </FormDescription>
                </FormItem>
              )}
            />

            <PasswordInput
              control={loginForm.control}
              name="password"
              label="Contraseña"
              description="Crea una contraseña."
              id="password"
              className="text-base"
            />
             <Link to="/forgot-password">
              <Button variant="tertiary" className="justify-end p-0 ">
                Olvidé mi contraseña
              </Button>
            </Link>
          </div>

          <div>
            <Button type="submit" variant="outline" className="w-full" disabled={isMutating > 0}>
              {isMutating > 0 ? "Ingresando..." : "ENTRAR Y ENTRENAR"}
            </Button>
            <span className="block pt-4 text-center text-white">
              No tienes cuenta?{" "}
              <strong onClick={goToRegister} className="cursor-pointer ">
                Registrate aquí
              </strong>
            </span>
          </div>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
