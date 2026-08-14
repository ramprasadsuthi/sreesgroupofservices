import React from "react";
import { ShieldCheck, Clock, Users, Building } from "lucide-react";
import { COMPANY_INFO } from "../../data/content";

export const StatsBanner: React.FC = () => {
  const statIcons = [
    <Building className="w-6 h-6 text-[#F4B400]" />,
    <Clock className="w-6 h-6 text-[#F4B400]" />,
    <Users className="w-6 h-6 text-[#F4B400]" />,
    <ShieldCheck className="w-6 h-6 text-[#F4B400]" />,
  ];

  return (
    <section className="bg-[#0B101E] border-y border-white/10 py-10 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#11182D] border border-white/10 flex items-center justify-center shrink-0">
                {statIcons[idx]}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[#F4B400] uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 hidden sm:block">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
