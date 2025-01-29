import PropTypes from "prop-types";
import Register from "../Register";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import PasswordInput from "@/components/ui/PasswordInput";

const accountSchema = z
  .object({
    email: z.string().email("Por favor, ingresa un correo electrónico válido."),
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
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas deben coincidir.",
    path: ["confirmPassword"],
  });

const CredentialsStep = ({ onNext, onBack, onHandleSubmit }) => {
  const form = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    onNext(data);
    onHandleSubmit(); 
  };

  return (
    <Register onBack={onBack}>
      <div className="space-y-2">
        <h1>Crea tu cuenta</h1>
        <p className="text-cream/80">Ingresa tu correo y crea una contraseña.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col pt-5 space-y-24">
          <div className="flex flex-col gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="email"
                      {...field}
                      autoComplete="email"
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
              control={form.control}
              name="password"
              label="Contraseña"
              description="Crea una contraseña."
              id="password"
              className="text-base"
            />

            <PasswordInput
              control={form.control}
              name="confirmPassword"
              label="Contraseña"
              description="Repite tu contraseña."
              id="confirmPassword"
              className="text-base"
            />

            <p className="text-[10px] text-cream/60 text-center leading-4 font-normal [&_span]:cursor-pointer [&_span]:underline [&_span]:underline-offset-2 px-8">
              Al continuar, indicas que haz leído y aceptas nuestros{" "}
              <span>Términos y Condiciones</span>, <span>Política de Privacidad</span> y{" "}
              <span>Términos de Suscripción</span>
            </p>
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-full"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Crear cuenta
          </Button>
        </form>
      </Form>
    </Register>
  );
};

CredentialsStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func,
};

export default CredentialsStep;
