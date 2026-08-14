import React from "react";
import { ShieldCheck, ArrowRight, Play, Eye, Activity, Lock, Radio } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onExploreServices,
}) => {
  return (
    <section
      id="hero"
      className="relative bg-[#11182D] text-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Architectural & Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(47,77,168,0.35),rgba(255,255,255,0))]" />
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay filter blur-[1px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')`,
        }}
      />
      {/* Geometric subtle grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Badge & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Gold Pill Badge */}
            <div className="inline-flex">
              <Badge variant="gold" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                Protecting What Matters Most
              </Badge>
            </div>

            {/* Large Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold font-heading tracking-tight leading-[1.1] text-white">
              Advanced Security Systems &amp; Services
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Enterprise-grade AI surveillance, biometric access control, and proactive 24/7 Security Operations Center monitoring engineered to safeguard your properties, personnel, and high-value assets with uncompromising reliability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenQuoteModal}
                icon={<ArrowRight className="w-5 h-5" />}
                className="bg-[#3050B3] hover:bg-[#25419A] text-white font-semibold text-base py-4 px-8 shadow-xl shadow-[#3050B3]/30"
              >
                Get a Quote
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreServices}
                className="border-white/40 hover:bg-white/10 text-white font-medium text-base py-4 px-8"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F4B400] font-heading">
                  2,500+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Secured Facilities</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F4B400] font-heading">
                  &lt; 60s
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Alert-to-Dispatch</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F4B400] font-heading">
                  24/7/365
                </div>
                <div className="text-xs text-slate-400 mt-0.5">SOC Live Coverage</div>
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Hero Image with Soft Border and Status Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2F4DA8] to-[#F4B400]/40 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative w-full max-w-md lg:max-w-none bg-[#11182D] rounded-3xl p-2.5 border border-white/15 shadow-2xl overflow-hidden">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80"
                  alt="Srees Group High-Tech Security Surveillance"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11182D]/90 via-transparent to-black/30" />

                {/* Floating Top Status Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>4K AI Stream Active</span>
                </div>

                {/* Floating Bottom Info Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#11182D]/90 backdrop-blur-md border border-white/20 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#2F4DA8] flex items-center justify-center text-white shrink-0">
                        <Radio className="w-5 h-5 text-[#F4B400]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          Srees SOC Command Center
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Redundant Threat Monitoring Online
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      SECURE
                    </span>
                  </div>
                </div>
              </div>

              {/* Auxiliary Sub-Badges beneath image */}
              <div className="grid grid-cols-2 gap-2 mt-2.5 px-1">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                  <Lock className="w-3.5 h-3.5 text-[#F4B400]" />
                  <span>Biometric Encrypted</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                  <Activity className="w-3.5 h-3.5 text-[#F4B400]" />
                  <span>Real-time Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
