import React from "react";
import { Shield, Phone, Mail, MapPin, CheckCircle2, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "../../data/content";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11182D] text-slate-300 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F4DA8] to-[#11182D] border border-white/10 flex items-center justify-center text-white">
                <Shield className="w-5 h-5 text-[#F4B400] fill-[#F4B400]/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  SREES <span className="text-[#2F4DA8]">GROUP</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#F4B400]">
                  Security Systems & Surveillance
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Pioneering enterprise surveillance, biometric access control, and proactive 24/7 Security Operations Center monitoring for commercial, industrial, and high-profile residential assets.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B400]" /> SIA Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F4B400]" /> ISO 27001 Certified
              </span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <span>Security Solutions</span>
              <span className="w-6 h-0.5 bg-[#F4B400] rounded-full inline-block"></span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F4B400] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <span>Company</span>
              <span className="w-6 h-0.5 bg-[#F4B400] rounded-full inline-block"></span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-400 hover:text-white transition-colors">
                  Why Choose Srees Group
                </a>
              </li>
              <li>
                <a href="#configurator" className="text-slate-400 hover:text-white transition-colors">
                  Security Solution Estimator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Request Security Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & SOC Dispatch */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <span>Emergency & Contact</span>
              <span className="w-6 h-0.5 bg-[#F4B400] rounded-full inline-block"></span>
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F4B400] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">24/7 Emergency Line:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-white font-semibold hover:text-[#F4B400] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F4B400] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">Inquiries & Quotes:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F4B400] shrink-0 mt-1" />
                <span className="text-xs text-slate-400 leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Srees Group. All rights reserved. Built with enterprise security standards.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Security Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
