import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Headphones } from "lucide-react";
import { COMPANY_INFO } from "../../data/content";
import { ContactForm } from "../forms/ContactForm";

interface ContactSectionProps {
  prefilledService?: string;
  prefilledFacility?: string;
  onSuccessSubmit?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledFacility,
  onSuccessSubmit,
}) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Blue Background (#2F4DA8 / Navy gradient) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#2F4DA8] via-[#243D86] to-[#11182D] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Graphic */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F4B400]/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                  <Headphones className="w-3.5 h-3.5 text-[#F4B400]" />
                  <span>Direct Advisory Link</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-4">
                  Get in Touch
                </h3>

                <p className="text-slate-200 text-base leading-relaxed">
                  Have urgent questions regarding site protection, system upgrades, or regulatory compliance? Speak directly with our senior security consultants.
                </p>
              </div>

              {/* Contact Information List with Icons in Gold */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#F4B400]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#F4B400] tracking-wider">
                      24/7 Telephone Dispatch
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-lg font-bold text-white hover:text-[#F4B400] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="block text-xs text-slate-300 mt-0.5">
                      Average pickup time: &lt; 15 seconds
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#F4B400]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#F4B400] tracking-wider">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-semibold text-white hover:text-[#F4B400] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="block text-xs text-slate-300 mt-0.5">
                      Proposals answered within 24 hours
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#F4B400]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#F4B400] tracking-wider">
                      Headquarters & SOC Center
                    </span>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Operations Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#F4B400]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#F4B400] tracking-wider">
                      Monitoring Availability
                    </span>
                    <p className="text-sm text-slate-200">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Security Guarantee */}
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-[#F4B400] shrink-0" />
              <span>Certified under ISO/IEC 27001 &amp; SIA licensing regulations.</span>
            </div>
          </div>

          {/* Right Panel: White Background Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-[#2F4DA8]">
                Personalized Risk Assessment
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#11182D] mt-1">
                Request a Quote
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Complete the form below to receive a detailed system proposal tailored to your property footprint.
              </p>
            </div>

            <ContactForm
              defaultService={prefilledService}
              onSuccessSubmit={() => {
                if (onSuccessSubmit) {
                  onSuccessSubmit();
                }
              }}
              formId="contact-section-form"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
