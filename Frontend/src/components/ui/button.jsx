/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center text-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-2xl bg-tangerine text-base font-bold leading-5 text-white shadow hover:bg-tangerine/90 uppercase",
        outline:
          "rounded-lg border border-tangerine text-base font-bold bg-transparent shadow-sm hover:bg-tangerine/20 text-tangerine uppercase",
        link: "text-cream text-base font-normal leading-5 underline-offset-8 hover:underline decoration-tangerine",
        ghost: "",
      },
      size: {
        default: "h-12 px-4 py-3.5 w-full",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
