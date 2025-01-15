import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsMutating } from "@tanstack/react-query";
import { useLogin } from "@/hooks/useFetch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import PasswordInput from "@/components/ui/PasswordInput";

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

  const handleSubmit = (data) => {
    login(data);
  };

  return (
    <Card className="w-full max-w-md border-0 border-none shadow-none">
      <CardHeader>
        <CardTitle>
          <span>Acceder</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 ">
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">
                    Email <span className="text-xs text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      id="email"
                      placeholder="correo@ejemplo.com"
                      {...field}
                      autoComplete="email"
                    />
                  </FormControl>
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
            />

            <div className="flex items-center justify-center">
              <Button type="submit" className="w-full max-w-40" disabled={isMutating > 0}>
                {isMutating > 0 ? "Ingresando..." : "Ingresar"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
