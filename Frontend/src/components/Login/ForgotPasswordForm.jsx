import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const recoverPassSchema = z.object({
  email: z.string().min(1, "Por favor, ingresa un correo electrónico válido."),
})

const ForgotPasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate();

  const recoverPassForm = useForm({
    resolver: zodResolver(recoverPassSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  })

  const handleSubmit = () => {
    toast.success("¡Enlace enviado!")
    setIsSubmitted(true)
  }

  const goToLogin = () => {
    navigate("/login");
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 text-center mt-[50%]">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-white">¡Enlace enviado con éxito!</h1>
          <p className="text-white/80">
            Te hemos enviado un enlace para recuperar
            <br />
            tu contraseña. Revisa tu correo.
          </p>
        </div>

        <div className="w-full mt-auto">
            <Button className="w-full" onClick={goToLogin}>
              VOLVER AL INICIO DE SESIÓN
            </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-2">
        <h1>Recupera tu contraseña</h1>
        <p className="text-cream/80">
          Ingresa tu correo para enviarte un enlace <br />
          de recuperación.
        </p>
      </div>

      <Form {...recoverPassForm}>
        <form onSubmit={recoverPassForm.handleSubmit(handleSubmit)} className="flex flex-col pt-5 space-y-[70%]">
          <div className="flex flex-col gap-8">
            <FormField
              control={recoverPassForm.control}
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
                  <FormDescription className="text-sm text-cream/80">Ingresa tu correo electrónico.</FormDescription>
                </FormItem>
              )}
            />
          </div>

          <div>
            <Button type="submit" variant="outline" className="w-full hover:bg-tangerine hover:text-white">
              ENVIAR ENLACE
            </Button>
            <Link to="/login">
              <Button variant="tertiary" className="w-full text-cream ">
                Volver al inicio de sesión
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </>
  )
}

export default ForgotPasswordForm