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

const nameSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(50, { message: "El nombre no debe exceder los 50 caracteres" })
    .regex(/^[a-zA-Z\sáéíóúüñÁÉÍÓÚÜÑ'-]+$/, {
      message: "El nombre solo puede contener letras, espacios y caracteres especiales válidos",
    }),
});

const NameStep = ({ onNext, onBack }) => {
  const form = useForm({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    onNext(data.name);
  };
  return (
    <Register onBack={onBack}>
      <div className="space-y-2">
        <h1>¿Cómo te llamas?</h1>
        <p className="text-cream/80">Usaremos tu nombre para personalizar tu experiencia.</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between space-y-[70%]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="name"
                    {...field}
                    autoComplete="name"
                    type="text"
                    className="text-3xl text-center"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="text-sm text-center text-cream/80">
                  Ingresa tu nombre.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="outline"
            className="w-full"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            Siguiente
          </Button>
        </form>
      </Form>
    </Register>
  );
};

NameStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default NameStep;
