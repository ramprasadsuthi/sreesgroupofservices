import React from "react";
import { Star, Quote, Building2 } from "lucide-react";
import { TESTIMONIALS, TRUST_PARTNERS } from "../../data/content";
import { SectionHeading } from "../ui/SectionHeading";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Client Outcomes"
          badgeIcon={<Star className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]" />}
          title="Trusted by Industry Leaders"
          subtitle="Discover how Srees Group protects enterprise infrastructure, corporate headquarters, and high-security installations with zero compromises."
          align="center"
          theme="light"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 text-slate-300">
                <Quote className="w-8 h-8 opacity-40" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#F4B400] fill-[#F4B400]"
                    />
                  ))}
                </div>

                <p className="text-slate-700 text-base leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-4">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-300 shadow-xs"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold font-heading text-sm text-[#11182D]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="text-xs font-semibold text-[#2F4DA8]">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Bar */}
        <div className="border-t border-slate-200 pt-12">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Securing Leading Enterprises Across Regulated Sectors
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {TRUST_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-600 hover:text-[#11182D] hover:border-slate-300 transition-colors"
              >
                <Building2 className="w-4 h-4 text-[#2F4DA8]" />
                <div>
                  <div className="text-xs font-bold">{partner.name}</div>
                  <div className="text-[10px] text-slate-400">{partner.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
