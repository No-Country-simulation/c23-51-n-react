import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRegister } from "@/hooks/useFetch";
import { useIsMutating } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PasswordInput from "@/components/ui/PasswordInput";

const registrationSchema = z.object({
  email: z.string().email({ message: "Correo electrónico inválido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(50, { message: "La contraseña no debe exceder los 50 caracteres" })
    .regex(/[a-z]/, { message: "La contraseña debe contener al menos una letra minúscula" })
    .regex(/[A-Z]/, { message: "La contraseña debe contener al menos una letra mayúscula" })
    .regex(/[0-9]/, { message: "La contraseña debe contener al menos un número" })
    .regex(/[@$!%*?&]/, {
      message: "La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &)",
    }),
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre no debe exceder los 50 caracteres" })
    .regex(/^[a-zA-Z\s]+$/, { message: "El nombre solo puede contener letras" }),
  birthdate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "La fecha debe tener el formato YYYY-MM-DD" }),
  height: z.string({ message: "La altura debe ser un número positivo" }),
  weight: z.string({ message: "El peso debe ser un número positivo" }),
});

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      birthdate: "",
      height: "",
      weight: "",
    },
  });

  const isMutating = useIsMutating();

  const { mutate: register } = useRegister();

  const handleSubmit = (data) => {
    register(data);
  };

  return (
    <Card className="w-full max-w-md border-0 border-none shadow-none">
      <CardHeader>
        <CardTitle>
          <span>Formulario de registro</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
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
              control={form.control}
              name="password"
              htmlFor="loginPassword"
              label="Contraseña"
              span="*"
              id="loginPassword"
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">
                    Nombre <span className="text-xs text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      {...field}
                      placeholder="Tu hermoso nombre"
                      autoComplete="name"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="birthdate">
                    Fecha de nacimiento <span className="text-xs text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="birthdate"
                      {...field}
                      placeholder="Fecha de nacimiento"
                      autoComplete="birthdate"
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="height">
                    Altura <span className="text-xs text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="height"
                      {...field}
                      placeholder="Altura"
                      autoComplete="height"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="weight">
                    Peso <span className="text-xs text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="weight"
                      {...field}
                      placeholder="Peso"
                      autoComplete="weight"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-center">
              <Button type="submit" className="w-full max-w-40" disabled={isMutating > 0}>
                {isMutating > 0 ? "Registrando..." : "Registrarse"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
