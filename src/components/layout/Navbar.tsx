import React, { useState, useEffect } from "react";
import { Shield, Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import { COMPANY_INFO } from "../../data/content";

interface NavbarProps {
  onOpenQuoteModal: (servicePrefill?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ["services", "why-us", "solutions", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services", id: "services" },
    { name: "Why Us", href: "#why-us", id: "why-us" },
    { name: "Configurator", href: "#configurator", id: "solutions" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 bg-white transition-all duration-300 w-full",
        isScrolled
          ? "shadow-md py-3.5 border-b border-slate-100"
          : "py-5 border-b border-slate-100/80"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2F4DA8] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#11182D] to-[#2F4DA8] flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform duration-200">
            <Shield className="w-5 h-5 text-[#F4B400] fill-[#F4B400]/20" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#11182D]">
                SREES
              </span>
              <span className="font-heading font-bold text-xl tracking-tight text-[#2F4DA8]">
                GROUP
              </span>
            </div>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[#6B7280]">
              Security & Surveillance
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={cn(
                    "text-[15px] font-medium transition-colors duration-150 py-1 relative",
                    activeSection === link.id
                      ? "text-[#2F4DA8] font-semibold"
                      : "text-[#11182D]/80 hover:text-[#2F4DA8]"
                  )}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2F4DA8] rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Primary CTA Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenQuoteModal()}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onOpenQuoteModal()}
            className="text-xs px-3 py-2"
          >
            Quote
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#11182D] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F4DA8]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    activeSection === link.id
                      ? "bg-[#2F4DA8]/10 text-[#2F4DA8] font-semibold"
                      : "text-[#11182D] hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-slate-100 space-y-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full justify-center"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Free Quote
            </Button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 text-sm text-[#11182D] font-medium py-2.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#2F4DA8]" />
              <span>Call 24/7: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
