import React, { useState } from "react";
import { Shield, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "../../data/content";
import { ServiceItem } from "../../types";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../cards/ServiceCard";
import { ServiceDetailModal } from "../cards/ServiceDetailModal";

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterCategories = [
    { id: "all", label: "All Solutions (6)" },
    { id: "surveillance", label: "Surveillance & CCTV" },
    { id: "access", label: "Access & Smart Tech" },
    { id: "monitoring", label: "24/7 Monitoring & Guards" },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "surveillance")
      return service.category === "surveillance" || service.category === "alarms";
    if (activeFilter === "access")
      return service.category === "access" || service.category === "smart";
    if (activeFilter === "monitoring")
      return service.category === "monitoring" || service.category === "guarding";
    return true;
  });

  return (
    <section id="services" className="bg-white py-20 lg:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Centered Title, Gold Underline & Description */}
        <SectionHeading
          badge="Enterprise Capabilities"
          badgeIcon={<Shield className="w-3.5 h-3.5 text-[#2F4DA8]" />}
          title="Our Security Solutions"
          subtitle="Comprehensive, custom-engineered security architecture protecting corporate campuses, financial infrastructure, logistics centers, and private residences."
          align="center"
          theme="light"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-[#2F4DA8] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Service Cards Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={(srv) => setSelectedService(srv)}
              onQuoteService={(title) => onOpenQuoteModal(title)}
            />
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2F4DA8]/10 text-[#2F4DA8] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#2F4DA8]" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-[#11182D]">
                Require a multi-site integrated deployment?
              </h4>
              <p className="text-slate-600 text-sm mt-0.5">
                Our senior security architects design customized enterprise security plans with central management.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal("Complete Integrated Enterprise Suite")}
            className="px-6 py-3 rounded-lg bg-[#2F4DA8] hover:bg-[#243D86] text-white text-sm font-semibold whitespace-nowrap transition-colors shadow-sm cursor-pointer shrink-0"
          >
            Request Enterprise Consultation
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle) => onOpenQuoteModal(serviceTitle)}
      />
    </section>
  );
};
