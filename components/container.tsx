import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const containerVariants = cva("", {
  variants: {
    maxWidth: {
      xs: "max-w-xs mx-auto",
      sm: "max-w-s mx-auto",
      md: "max-w-md mx-auto",
      lg: "max-w-lg mx-auto",
      xl: "max-w-xl mx-auto",
      true: "mx-auto mx-auto",
    },
    disableGutters: {
      false: "px-7 2xl:px-26",
    },
  },
  defaultVariants: {
    maxWidth: false,
    disableGutters: false,
  },
});

type ContainerProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof containerVariants> & {
    component?: React.ElementType;
  };

export const Container = ({
  className,
  component: Component = "div",
  maxWidth,
  disableGutters,
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn(containerVariants({ maxWidth, disableGutters }), className)}
      {...props}
    />
  );
};

Container.displayName = "Container";
