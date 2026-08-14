import React, { useState } from "react";
import { TopBar } from "./components/layout/TopBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { StatsBanner } from "./components/sections/StatsBanner";
import { ServicesSection } from "./components/sections/ServicesSection";
import { WhyUsSection } from "./components/sections/WhyUsSection";
import { InteractiveSecurityEstimator } from "./components/sections/InteractiveSecurityEstimator";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { QuoteModal } from "./components/forms/QuoteModal";
import { Toast } from "./components/ui/Toast";

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);
  const [contactSectionService, setContactSectionService] = useState<string | undefined>(undefined);
  const [contactSectionFacility, setContactSectionFacility] = useState<string | undefined>(undefined);
  const [toastNotification, setToastNotification] = useState<{
    show: boolean;
    title: string;
    message: string;
    type: "success" | "info" | "error";
  }>({
    show: false,
    title: "",
    message: "",
    type: "success",
  });

  const handleOpenQuoteModal = (servicePrefill?: string) => {
    setSelectedQuoteService(servicePrefill);
    setQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConfiguratorSelection = (configuredService: string, facilityType: string) => {
    setContactSectionService(configuredService);
    setContactSectionFacility(facilityType);

    // Smooth scroll down to contact section
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setToastNotification({
      show: true,
      title: "Configured System Applied",
      message: "Your system configuration has been prefilled into the quote form.",
      type: "info",
    });
  };

  const handleQuoteSubmitted = () => {
    setQuoteModalOpen(false);
    setToastNotification({
      show: true,
      title: "Assessment Requested",
      message: "Thank you! Our security engineering team will contact you within 24 hours.",
      type: "success",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#11182D] selection:bg-[#F4B400]/30 selection:text-[#11182D]">
      {/* Top Information Strip (Phone & Email) */}
      <TopBar />

      {/* Sticky Main Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Key Performance Metrics Banner */}
        <StatsBanner />

        {/* 3. Services Section ("Our Security Solutions") */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Why Choose Us Section */}
        <WhyUsSection />

        {/* 5. Interactive Solution Estimator & Configurator */}
        <InteractiveSecurityEstimator onSelectSolution={handleConfiguratorSelection} />

        {/* 6. Testimonials & Client Trust */}
        <TestimonialsSection />

        {/* 7. Contact & Quote Section */}
        <ContactSection
          prefilledService={contactSectionService}
          prefilledFacility={contactSectionFacility}
          onSuccessSubmit={() => {
            setToastNotification({
              show: true,
              title: "Assessment Requested",
              message: "Thank you! Our security engineering team will contact you within 24 hours.",
              type: "success",
            });
          }}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedQuoteService}
        onSuccessSubmit={handleQuoteSubmitted}
      />

      {/* Toast Notification */}
      {toastNotification.show && (
        <Toast
          type={toastNotification.type}
          title={toastNotification.title}
          message={toastNotification.message}
          onClose={() =>
            setToastNotification((prev) => ({ ...prev, show: false }))
          }
        />
      )}
    </div>
  );
}
