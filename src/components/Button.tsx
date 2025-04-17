import type React from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type ButtonProps = {
  children: React.ReactNode;
  variant: "contained" | "outlined";
  property: "primary" | "error";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const buttonStyle = tv({
  base: "flex h-12 w-full items-center justify-center gap-2 break-words rounded px-6 py-2 text-sm font-semibold",
  variants: {
    property: {
      primary: "",
      error: "",
    },
    variant: {
      contained: "",
      outlined: "border border-solid",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      property: "primary",
      variant: "contained",
      class: ["bg-primary", "text-white", "hover:bg-primary-hover"],
    },
    {
      property: "primary",
      variant: "outlined",
      class: ["border-primary", "text-primary"],
    },
    {
      property: "error",
      variant: "contained",
      class: ["bg-error", "text-white", "hover:bg-error-hover"],
    },
    {
      property: "error",
      variant: "outlined",
      class: ["border-error", "text-error"],
    },
    {
      disabled: true,
      variant: "contained",
      class: ["bg-light"],
    },
    {
      disabled: true,
      variant: "outlined",
      class: ["text-light", "border-light"],
    },
  ],
});

export const Button = ({
  property,
  variant,
  icon,
  endIcon,
  type = "button",
  disabled = false,
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={twMerge(
        buttonStyle({ property, variant, disabled }),
        className,
      )}
    >
      <div>{icon}</div>
      {children}
      <div>{endIcon}</div>
    </button>
  );
};
