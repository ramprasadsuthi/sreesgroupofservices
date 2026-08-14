import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#2F4DA8] hover:bg-[#243D86] text-white shadow-md hover:shadow-lg focus:ring-[#2F4DA8]",
    secondary:
      "bg-transparent border border-white text-white hover:bg-white/10 hover:border-white/90 focus:ring-white",
    gold:
      "bg-[#F4B400] hover:bg-[#D99F00] text-[#11182D] font-semibold shadow-md hover:shadow-lg focus:ring-[#F4B400]",
    "outline-dark":
      "bg-transparent border border-[#2F4DA8] text-[#2F4DA8] hover:bg-[#2F4DA8]/5 focus:ring-[#2F4DA8]",
    ghost:
      "bg-transparent text-[#6B7280] hover:text-[#11182D] hover:bg-black/5 focus:ring-gray-400",
  };

  const sizeStyles = {
    sm: "text-sm px-3.5 py-1.5 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
