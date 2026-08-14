import React from "react";
import { X, Check, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { ServiceItem } from "../../types";
import { IconContainer } from "../ui/IconContainer";
import { Button } from "../ui/Button";
import { COMPANY_INFO } from "../../data/content";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Overlay */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-t-2xl">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11182D] via-[#11182D]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service badge & title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F4B400] text-[#11182D] text-xs font-bold uppercase tracking-wider">
                Enterprise Solution
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#2F4DA8] mb-2">
              System Architecture & Capabilities
            </h4>
            <p className="text-slate-700 text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-xl border border-slate-200/60">
            <div>
              <h5 className="font-semibold text-sm text-[#11182D] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2F4DA8]" />
                <span>Key Specifications</span>
              </h5>
              <ul className="space-y-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#F4B400] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-sm text-[#11182D] mb-3 flex items-center gap-2">
                <IconContainer iconName="Award" size="sm" variant="gold" className="w-5 h-5 p-0.5" />
                <span>Proven Business Value</span>
              </h5>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ideal for banner */}
          <div className="text-xs text-slate-600 bg-[#2F4DA8]/5 border border-[#2F4DA8]/15 p-3 rounded-lg flex items-center gap-2">
            <span className="font-semibold text-[#2F4DA8]">Recommended For:</span>
            <span>{service.idealFor}</span>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-xs font-semibold text-slate-600 hover:text-[#2F4DA8] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B400]" />
              <span>Talk to an Architect: {COMPANY_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button variant="ghost" size="sm" onClick={onClose} className="w-full sm:w-auto">
                Close
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  onRequestQuote(service.title);
                }}
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
