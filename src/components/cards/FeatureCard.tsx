import React from "react";
import { FeatureItem } from "../../types";
import { IconContainer } from "../ui/IconContainer";

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <div
      id={`feature-${feature.id}`}
      className="flex items-start gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F4B400]/40 transition-all duration-300 hover:bg-white/8 group"
    >
      {/* Circular icon with gold accents */}
      <IconContainer
        iconName={feature.iconName}
        size="md"
        variant="navy"
        className="group-hover:scale-105 group-hover:border-[#F4B400] transition-all bg-[#11182D]"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-xl font-bold font-heading text-white group-hover:text-[#F4B400] transition-colors">
            {feature.title}
          </h4>
        </div>

        {feature.highlight && (
          <span className="inline-block text-[11px] font-semibold text-[#F4B400] uppercase tracking-wider mb-2">
            ★ {feature.highlight}
          </span>
        )}

        <p className="text-slate-300 text-base leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
