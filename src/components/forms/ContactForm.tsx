import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { SERVICES_DATA } from "../../data/content";

const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (minimum 2 characters)"),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a required security solution"),
  facilityType: z.string().min(1, "Please select your facility type"),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide brief details about your project or security requirements (min 10 characters)"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to proceed",
  }),
});

type FormValues = z.infer<typeof quoteFormSchema>;

interface ContactFormProps {
  defaultService?: string;
  onSuccessSubmit?: (data: FormValues) => void;
  formId?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService,
  onSuccessSubmit,
  formId = "quote-form",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: defaultService || "CCTV & Surveillance",
      facilityType: "Commercial Office / Enterprise",
      timeline: "Immediate (< 30 days)",
      message: "",
      consent: true,
    },
  });

  // If defaultService changes, update form
  React.useEffect(() => {
    if (defaultService) {
      setValue("serviceType", defaultService);
    }
  }, [defaultService, setValue]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate swift server-side processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmittedSuccessfully(true);

    if (onSuccessSubmit) {
      onSuccessSubmit(data);
    }
  };

  const handleReset = () => {
    setSubmittedSuccessfully(false);
    reset();
  };

  if (submittedSuccessfully) {
    return (
      <div
        id={`${formId}-success`}
        className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in zoom-in-95 duration-300"
      >
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#11182D] mb-2">
          Quote Request Received!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for trusting <span className="font-semibold text-[#11182D]">Srees Group</span>. A dedicated security systems architect will analyze your requirements and contact you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="primary" size="md" onClick={handleReset}>
            Submit Another Request
          </Button>
          <a
            href="tel:+18005550199"
            className="text-xs font-semibold text-[#2F4DA8] hover:underline"
          >
            Need urgent assistance? Call +1 (800) 555-0199
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      {/* Full Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`${formId}-fullName`}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${formId}-fullName`}
            type="text"
            placeholder="John Doe"
            {...register("fullName")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F4DA8] focus:border-transparent text-sm transition-all shadow-xs"
          />
          {errors.fullName && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F4DA8] focus:border-transparent text-sm transition-all shadow-xs"
          />
          {errors.phone && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor={`${formId}-email`}
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
        >
          Email Address <span className="text-rose-500">*</span>
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          placeholder="j.doe@company.com"
          {...register("email")}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F4DA8] focus:border-transparent text-sm transition-all shadow-xs"
        />
        {errors.email && (
          <p className="text-rose-600 text-xs mt-1 font-medium">{errors.email.message}</p>
        )}
      </div>

      {/* Service Dropdown & Facility Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`${formId}-serviceType`}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Security Solution <span className="text-rose-500">*</span>
          </label>
          <select
            id={`${formId}-serviceType`}
            {...register("serviceType")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F4DA8] focus:border-transparent text-sm transition-all shadow-xs"
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Complete Integrated Enterprise Suite">
              Complete Integrated Enterprise Suite
            </option>
            <option value="Custom Security Audit & Consultation">
              Custom Security Audit & Consultation
            </option>
          </select>
          {errors.serviceType && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.serviceType.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${formId}-facilityType`}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Facility Type <span className="text-rose-500">*</span>
          </label>
          <select
            id={`${formId}-facilityType`}
            {...register("facilityType")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2F4DA8] focus:border-transparent text-sm transition-all shadow-xs"
          >
            <option value="Commercial Office / Enterprise">Commercial Office / Enterprise</option>
            <option value="Industrial Warehouse / Logistics">Industrial Warehouse / Logistics</option>
            <option value="Residential Property / Luxury Estate">Residential Property / Luxury Estate</option>
            <option value="Financial / Banking Institution">Financial / Banking Institution</option>
            <option value="Healthcare / Hospital Facility">Healthcare / Hospital Facility</option>
            <option value="Retail Store / Shopping Center">Retail Store / Shopping Center</option>
            <option value="Critical Infrastructure / Gov">Critical Infrastructure / Gov</option>
          </select>
          {errors.facilityType && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.facilityType.message}</p>
          )}
        </div>
      </div>

      {/* Message / Requirements */}
      <div>
        <label
          htmlFor={`${formId}-message`}
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
        >
          Project Details / Requirements <span className="text-rose-500">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          rows={3}
          placeholder="Please describe your site layout, number of cameras or access doors needed, current pain points..."
          {...register("message")}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F4DA8] focus:border-transparent text-sm transition-all shadow-xs resize-y"
        ></textarea>
        {errors.message && (
          <p className="text-rose-600 text-xs mt-1 font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          id={`${formId}-consent`}
          type="checkbox"
          {...register("consent")}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2F4DA8] focus:ring-[#2F4DA8]"
        />
        <label htmlFor={`${formId}-consent`} className="text-xs text-slate-600 leading-snug">
          I consent to Srees Group processing my contact details to deliver a tailored security assessment. All data is encrypted per ISO 27001 standards.
        </label>
      </div>
      {errors.consent && (
        <p className="text-rose-600 text-xs font-medium">{errors.consent.message}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full justify-center text-base font-semibold shadow-md hover:shadow-lg mt-2"
        icon={
          isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )
        }
      >
        {isSubmitting ? "Generating Assessment..." : "Submit Quote Request"}
      </Button>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
        <ShieldCheck className="w-4 h-4 text-[#F4B400]" />
        <span>Strict confidentiality guaranteed. No spam.</span>
      </div>
    </form>
  );
};
