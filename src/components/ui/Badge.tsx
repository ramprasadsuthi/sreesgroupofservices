import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "blue" | "navy" | "outline" | "success";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className,
  icon,
}) => {
  const variantStyles = {
    gold: "bg-[#F4B400]/15 text-[#F4B400] border border-[#F4B400]/30",
    blue: "bg-[#2F4DA8]/10 text-[#2F4DA8] border border-[#2F4DA8]/20",
    navy: "bg-[#11182D] text-white border border-white/10",
    outline: "bg-transparent text-white/90 border border-white/20",
    success: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase shadow-xs select-none",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
