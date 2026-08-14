import React from "react";
import { cn } from "../../lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 lg:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-3 flex", isCenter ? "justify-center" : "justify-start")}>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border",
              isDark
                ? "bg-[#F4B400]/15 text-[#F4B400] border-[#F4B400]/30"
                : "bg-[#2F4DA8]/10 text-[#2F4DA8] border-[#2F4DA8]/20"
            )}
          >
            {badgeIcon}
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight",
          isDark ? "text-white" : "text-[#11182D]"
        )}
      >
        {title}
      </h2>

      {/* Gold underline accent */}
      <div
        className={cn(
          "h-1 w-16 bg-[#F4B400] rounded-full my-4",
          isCenter ? "mx-auto" : "mr-auto"
        )}
      />

      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed mt-3",
            isDark ? "text-slate-300" : "text-[#6B7280]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
