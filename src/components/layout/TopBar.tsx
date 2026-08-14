import React from "react";
import { Phone, Mail, ShieldAlert } from "lucide-react";
import { COMPANY_INFO } from "../../data/content";

export const TopBar: React.FC = () => {
  return (
    <header className="bg-[#11182D] text-slate-200 text-xs md:text-sm border-b border-white/10 z-40 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Emergency phone */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4B400] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4B400]"></span>
          </span>
          <div className="flex items-center gap-1.5 text-slate-200 font-medium">
            <Phone className="w-3.5 h-3.5 text-[#F4B400]" />
            <span className="text-slate-400">24/7 Emergency Support:</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-white hover:text-[#F4B400] font-semibold transition-colors duration-150 ml-0.5"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        {/* Right: Email & SOC Status */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <ShieldAlert className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>SOC Live Monitoring Active</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#F4B400]" />
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-slate-300 hover:text-white transition-colors duration-150"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
