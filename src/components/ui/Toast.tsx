import React from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ToastProps {
  type?: "success" | "error" | "info";
  title: string;
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  type = "success",
  title,
  message,
  onClose,
}) => {
  return (
    <div
      role="alert"
      className={cn(
        "fixed bottom-6 right-6 z-50 max-w-md w-full p-4 rounded-xl shadow-2xl border flex items-start gap-3.5 bg-white transition-all animate-in slide-in-from-bottom-5 duration-300",
        type === "success" && "border-emerald-200 text-slate-800",
        type === "error" && "border-rose-200 text-slate-800",
        type === "info" && "border-blue-200 text-slate-800"
      )}
    >
      <div className="shrink-0 mt-0.5">
        {type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
        {type === "error" && <AlertCircle className="w-5 h-5 text-rose-600" />}
        {type === "info" && <Info className="w-5 h-5 text-blue-600" />}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#11182D]">{title}</h4>
        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{message}</p>
      </div>

      <button
        onClick={onClose}
        className="shrink-0 p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
