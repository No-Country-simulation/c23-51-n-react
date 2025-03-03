/* eslint-disable react/prop-types */
import { useState } from "react";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "./form";
import { Button } from "./button";
import { Input } from "./input";
import { eye, hideEye } from "@/assets";

const PasswordInput = ({ control, name, description, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <Input
                id={id}
                type={showPassword ? "text" : "password"}
                {...field}
                placeholder="********"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={eye} alt="Eye icon" className="size-5" />
                ) : (
                  <img src={hideEye} alt="Eye icon" className="size-5" />
                )}
                <span className="sr-only">
                  {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                </span>
              </Button>
            </div>
          </FormControl>
          <FormDescription className="text-sm text-cream/80">{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
