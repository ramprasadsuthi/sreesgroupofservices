import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { ServiceItem } from "../../types";
import { IconContainer } from "../ui/IconContainer";

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onQuoteService: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onQuoteService,
}) => {
  return (
    <div
      id={`service-${service.id}`}
      className="group bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top ambient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#2F4DA8] transition-colors duration-300" />

      <div>
        {/* Circular Icon with Gold/Blue Accents */}
        <div className="mb-6 flex items-center justify-between">
          <IconContainer
            iconName={service.iconName}
            size="lg"
            variant="blue"
            className="group-hover:bg-[#2F4DA8] group-hover:text-white group-hover:border-[#2F4DA8] transition-colors duration-300"
          />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-[#2F4DA8] transition-colors">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold font-heading text-[#11182D] mb-3 group-hover:text-[#2F4DA8] transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-base leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-2 mb-8 pt-2 border-t border-slate-100">
          {service.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
              <div className="w-4 h-4 rounded-full bg-[#F4B400]/20 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#D99F00] stroke-[3]" />
              </div>
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectService(service)}
          className="text-sm font-semibold text-[#2F4DA8] hover:text-[#11182D] transition-colors flex items-center gap-1.5 cursor-pointer py-1 group/link"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => onQuoteService(service.title)}
          className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-[#2F4DA8] hover:text-white text-slate-700 transition-colors cursor-pointer"
        >
          Quote This
        </button>
      </div>
    </div>
  );
};
