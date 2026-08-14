import React from "react";
import { X, Shield } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onSuccessSubmit?: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onSuccessSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#2F4DA8]/10 text-[#2F4DA8] flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#2F4DA8]" />
            </div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#2F4DA8]">
              Free Security Evaluation
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#11182D]">
            Request a Custom Quote
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Fill in your facility details below. Our certified security engineers will prepare an itemized proposal within 24 hours.
          </p>
        </div>

        {/* Form */}
        <ContactForm
          defaultService={initialService}
          formId="modal-quote-form"
          onSuccessSubmit={() => {
            if (onSuccessSubmit) {
              onSuccessSubmit();
            }
          }}
        />
      </div>
    </div>
  );
};
