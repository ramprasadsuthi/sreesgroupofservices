import React from "react";
import { Shield, Award, CheckCircle2, Lock } from "lucide-react";
import { WHY_CHOOSE_US_FEATURES } from "../../data/content";
import { FeatureCard } from "../cards/FeatureCard";
import { SectionHeading } from "../ui/SectionHeading";

export const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="bg-[#11182D] text-white py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F4DA8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4B400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description & 3 Feature Rows (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="The Srees Group Advantage"
              badgeIcon={<Award className="w-3.5 h-3.5 text-[#F4B400]" />}
              title="Why Choose Srees Group"
              subtitle="We combine advanced sensor technology, military-grade hardware, and certified rapid-response personnel to guarantee impenetrable protection and complete peace of mind."
              align="left"
              theme="dark"
              className="mb-8"
            />

            {/* Three Feature Rows */}
            <div className="space-y-4 pt-2">
              {WHY_CHOOSE_US_FEATURES.map((feature, idx) => (
                <FeatureCard key={feature.id} feature={feature} index={idx} />
              ))}
            </div>
          </div>

          {/* Right Column: Two Staggered Rounded Images with Proportions & Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative pl-6 pt-6 sm:pl-10 sm:pt-10">
              {/* Primary Background Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Security Operations Command Room"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11182D]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#11182D]/85 backdrop-blur-xs border border-white/10 text-xs">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>24/7 Operations Hub</span>
                  </div>
                  <div className="text-[11px] text-slate-300">Continuous telemetry & sub-minute alert triage</div>
                </div>
              </div>

              {/* Secondary Staggered Overlapping Image */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-3/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F4B400]/40 z-20 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80"
                  alt="Biometric Access Control System"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-xs text-[10px] font-bold text-[#F4B400] uppercase tracking-wider">
                  Biometrics
                </div>
              </div>

              {/* Floating Metric Card Badge */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 z-30 bg-white text-[#11182D] p-4 rounded-xl shadow-2xl border border-slate-200 flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#2F4DA8] text-white flex items-center justify-center font-bold font-heading text-lg">
                  99%
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2F4DA8]">
                    Incident Prevention
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Industry leading threat deterrence SLA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
