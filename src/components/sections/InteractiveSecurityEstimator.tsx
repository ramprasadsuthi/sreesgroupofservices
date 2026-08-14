import React, { useState } from "react";
import { Building2, Home, Warehouse, ShieldAlert, Check, ArrowRight, Calculator } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

interface SecurityConfiguratorProps {
  onSelectSolution: (configuredService: string, facilityType: string) => void;
}

export const InteractiveSecurityEstimator: React.FC<SecurityConfiguratorProps> = ({
  onSelectSolution,
}) => {
  const [propertyType, setPropertyType] = useState<"commercial" | "industrial" | "residential">("commercial");
  const [coverageArea, setCoverageArea] = useState<string>("medium");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "cctv",
    "monitoring",
    "access",
  ]);

  const propertyOptions = [
    {
      id: "commercial",
      name: "Commercial Office / Retail",
      icon: <Building2 className="w-5 h-5" />,
      desc: "Office towers, branches, and retail centers",
    },
    {
      id: "industrial",
      name: "Industrial & Logistics Hub",
      icon: <Warehouse className="w-5 h-5" />,
      desc: "Warehouses, shipping yards, and factories",
    },
    {
      id: "residential",
      name: "Luxury Estate / Residential",
      icon: <Home className="w-5 h-5" />,
      desc: "Private estates, villas, and gated communities",
    },
  ];

  const availableModules = [
    { id: "cctv", label: "4K AI CCTV Cameras", desc: "Perimeter and interior high-res coverage" },
    { id: "access", label: "Biometric & Card Access", desc: "Touchless entry and turnstile controls" },
    { id: "alarms", label: "Intrusion & Seismic Alarms", desc: "Sensors, glass-break and panic triggers" },
    { id: "monitoring", label: "24/7 Redundant SOC", desc: "Live video triage and rapid emergency dispatch" },
    { id: "guards", label: "Licensed On-Site Guards", desc: "Physical concierge and patrol units" },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculateHardwareEstimate = () => {
    let cameras = "8-16 Units (4K Ultra-HD)";
    let accessPoints = "4-8 Secure Portals";
    let sla = "Sub-60s Emergency SLA";

    if (coverageArea === "small") {
      cameras = "4-8 Units (4K Ultra-HD)";
      accessPoints = "2-4 Secure Portals";
    } else if (coverageArea === "large") {
      cameras = "32-64+ Units (Multi-Spectrum)";
      accessPoints = "16+ Turnstiles / Biometric Portals";
    }

    return { cameras, accessPoints, sla };
  };

  const estimate = calculateHardwareEstimate();

  const handleApplyToQuote = () => {
    const propertyLabel =
      propertyType === "commercial"
        ? "Commercial Office / Enterprise"
        : propertyType === "industrial"
        ? "Industrial Warehouse / Logistics"
        : "Residential Property / Luxury Estate";

    const serviceSummary = `Configured System: ${selectedFeatures.join(", ").toUpperCase()} (${coverageArea} scale)`;
    onSelectSolution(serviceSummary, propertyLabel);
  };

  return (
    <section id="configurator" className="bg-[#F8FAFC] py-20 border-y border-slate-200/80 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Solution Planner"
          badgeIcon={<Calculator className="w-3.5 h-3.5 text-[#2F4DA8]" />}
          title="Security System Configurator"
          subtitle="Customize your facility parameters to get immediate hardware and service recommendations crafted by our security architects."
          align="center"
          theme="light"
        />

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Configuration Panel (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Facility */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {propertyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPropertyType(opt.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      propertyType === opt.id
                        ? "border-[#2F4DA8] bg-[#2F4DA8]/5 ring-2 ring-[#2F4DA8]/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                        propertyType === opt.id
                          ? "bg-[#2F4DA8] text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {opt.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#11182D] leading-tight">
                        {opt.name}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Coverage Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                2. Facility Footprint / Scope
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "small", label: "Compact", sub: "< 10,000 sq ft" },
                  { id: "medium", label: "Mid-Scale", sub: "10,000 - 50,000 sq ft" },
                  { id: "large", label: "Enterprise", sub: "50,000+ sq ft / Campus" },
                ].map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setCoverageArea(scale.id)}
                    className={`p-3 text-center rounded-xl border transition-all cursor-pointer ${
                      coverageArea === scale.id
                        ? "border-[#2F4DA8] bg-[#2F4DA8] text-white font-semibold shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    <div className="text-sm font-semibold">{scale.label}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        coverageArea === scale.id ? "text-slate-200" : "text-slate-500"
                      }`}
                    >
                      {scale.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Modules */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                3. Desired Security Capabilities
              </label>
              <div className="space-y-2">
                {availableModules.map((mod) => {
                  const isChecked = selectedFeatures.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleFeature(mod.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#2F4DA8]/40 bg-[#2F4DA8]/5"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-[#2F4DA8] border-[#2F4DA8] text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#11182D]">{mod.label}</div>
                          <div className="text-xs text-slate-500">{mod.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#11182D] text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#F4B400]">
                  Architect Recommendation
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-semibold text-slate-200">
                  Custom Tier
                </span>
              </div>

              <h4 className="text-2xl font-bold font-heading mb-4">
                Tailored Deployment Spec
              </h4>

              <div className="space-y-4 py-4 border-y border-white/10 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Recommended Camera Array:</span>
                  <span className="font-semibold text-white">{estimate.cameras}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Access Control Nodes:</span>
                  <span className="font-semibold text-white">{estimate.accessPoints}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Response Protocol:</span>
                  <span className="font-semibold text-[#F4B400]">{estimate.sla}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Compliance Standard:</span>
                  <span className="font-semibold text-white">ISO 27001 / SIA</span>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                <p className="leading-relaxed">
                  Includes free on-site risk assessment, zero-downtime installation, cloud backup provisioning, and dedicated SOC monitoring linkage.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button
                variant="gold"
                size="lg"
                onClick={handleApplyToQuote}
                className="w-full justify-center text-base"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Apply to Quote Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
