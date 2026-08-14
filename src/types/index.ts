import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  benefits: string[];
  idealFor: string;
  category: "surveillance" | "access" | "guarding" | "alarms" | "monitoring" | "smart";
  imageUrl: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  content: string;
  serviceType: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  facilityType: string;
  timeline: string;
  estimatedUnits?: string;
  message: string;
  consent: boolean;
}

export interface SecurityTierConfig {
  id: string;
  name: string;
  propertyType: "residential" | "commercial" | "industrial";
  coverageSize: string;
  baseEstimate: string;
  recommendedServices: string[];
}
