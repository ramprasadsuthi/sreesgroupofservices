import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "../../lib/utils";

export interface IconContainerProps {
  iconName: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "gold" | "blue" | "navy" | "gold-outline" | "white";
  className?: string;
}

export const IconContainer: React.FC<IconContainerProps> = ({
  iconName,
  size = "md",
  variant = "blue",
  className,
}) => {
  // Dynamically resolve lucide icon safely
  const IconComponent = (LucideIcons as Record<string, React.ElementType>)[iconName] || LucideIcons.Shield;

  const sizeClasses = {
    sm: "w-9 h-9 p-2 text-base",
    md: "w-13 h-13 p-3 text-xl",
    lg: "w-16 h-16 p-3.5 text-2xl",
    xl: "w-20 h-20 p-5 text-3xl",
  };

  const iconSizes = {
    sm: 18,
    md: 26,
    lg: 32,
    xl: 40,
  };

  const variantClasses = {
    gold: "bg-[#F4B400]/15 text-[#F4B400] border border-[#F4B400]/30 shadow-xs",
    blue: "bg-[#2F4DA8]/10 text-[#2F4DA8] border border-[#2F4DA8]/20 shadow-xs",
    navy: "bg-[#11182D] text-[#F4B400] border border-[#2F4DA8]/30 shadow-md",
    "gold-outline": "bg-transparent text-[#F4B400] border-2 border-[#F4B400]",
    white: "bg-white text-[#2F4DA8] shadow-md border border-slate-100",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <IconComponent size={iconSizes[size]} className="stroke-[2.2]" />
    </div>
  );
};
