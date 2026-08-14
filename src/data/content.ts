import { ServiceItem, FeatureItem, TestimonialItem } from "../types";

export const COMPANY_INFO = {
  name: "Srees Group",
  tagline: "Advanced Security Systems & Surveillance Services",
  phone: "+1 (800) 555-0199",
  phoneRaw: "+18005550199",
  emergencyPhone: "24/7 Emergency Support: +1 (800) 555-0199",
  email: "contact@sreesgroup.com",
  address: "100 Enterprise Boulevard, Suite 400, Financial & Tech District, NY 10005",
  workingHours: "24 Hours / 7 Days a Week (SOC Monitoring Active)",
  officeHours: "Mon - Fri: 8:00 AM - 6:00 PM EST",
  stats: [
    { label: "Secured Facilities", value: "2,500+", subtext: "Across Commercial & Residential" },
    { label: "Rapid Response Time", value: "< 60s", subtext: "Average Alert-to-Dispatch" },
    { label: "Client Retention Rate", value: "99.4%", subtext: "Long-term Security Partnerships" },
    { label: "Active SOC Monitoring", value: "24/7/365", subtext: "Redundant Command Centers" },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance",
    shortDesc: "High-definition 4K optical and thermal surveillance with AI-driven perimeter intrusion detection and encrypted cloud retention.",
    fullDesc: "Our enterprise CCTV architecture incorporates ultra-high definition 4K optical sensors, thermal imaging, and edge-computed AI analytics. We deploy PTZ multi-spectrum cameras capable of automatic license plate recognition (ALPR), facial verification, and automated line-crossing alerts, backed by redundant on-premise NVRs and zero-latency cloud backup.",
    iconName: "Camera",
    category: "surveillance",
    idealFor: "Corporate Offices, Industrial Yards, Warehouses & Retail Centers",
    features: [
      "4K Ultra-HD & Starlight Low-Light Sensors",
      "AI Anomaly Tracking & Heat Mapping",
      "Encrypted Multi-Site Remote Live Streaming",
      "Redundant Local Storage + Cloud Archival"
    ],
    benefits: [
      "Reduce property theft and vandalism by up to 94%",
      "Audit trail with tamper-proof watermarking",
      "Instant push notifications on perimeter breach"
    ],
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "access-control",
    title: "Access Control",
    shortDesc: "Biometric scanners, encrypted smart card readers, mobile credentials, and automated turnstiles for uncompromising ingress control.",
    fullDesc: "Eliminate vulnerable physical master keys with multi-factor biometric verification, NFC smartphone authentication, and RFID smart badge credentials. Our software platforms synchronize with corporate Active Directory / LDAP databases, providing automated provisioning, visitor management kiosks, and instant lock-down capabilities.",
    iconName: "KeyRound",
    category: "access",
    idealFor: "Financial Institutions, Data Centers, Medical Facilities & Gated Communities",
    features: [
      "Biometric Fingerprint & 3D Facial Recognition",
      "Mobile Credential & Apple Wallet / NFC Access",
      "Integrated Anti-Passback & Elevator Control",
      "Granular Time & Role-Based Permission Matrix"
    ],
    benefits: [
      "Instant credential revocation for terminated personnel",
      "Detailed time-stamped ingress/egress compliance logs",
      "One-touch building-wide lockdown protocol"
    ],
    imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "security-personnel",
    title: "Security Personnel",
    shortDesc: "Elite licensed, background-checked security officers, executive protection specialists, and proactive mobile vehicle patrols.",
    fullDesc: "Trained in conflict de-escalation, emergency first response, counter-surveillance, and asset protection. Our uniformed and tactical security personnel operate with GPS-verified real-time patrol logging and direct radio link to our 24/7 Security Operations Center.",
    iconName: "ShieldCheck",
    category: "guarding",
    idealFor: "Executive Suites, Critical Infrastructure, VIP Events & Luxury Retail",
    features: [
      "SIA Licensed & Rigorously Vetted Officers",
      "Executive Close Protection & Concierge Guarding",
      "GPS-Monitored Mobile Patrol Fleet",
      "Certified First Aid & CPR Emergency Responders"
    ],
    benefits: [
      "Visible physical deterrence preventing unauthorized entry",
      "Immediate on-site incident containment and crowd control",
      "Custom post orders tailored to corporate culture"
    ],
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "alarm-systems",
    title: "Alarm Systems",
    shortDesc: "Intelligent intrusion detection, seismic vault protection, glass-break sensors, and automated priority emergency dispatch.",
    fullDesc: "Commercial intrusion detection systems equipped with dual-technology microwave/PIR sensors, acoustic glass-break detectors, seismic vibration monitors, and perimeter infrared photo-beams. Hardened against radio jamming and wire cutting with dual cellular/fiber communication paths.",
    iconName: "BellRing",
    category: "alarms",
    idealFor: "Retail Chains, Financial Vaults, Jewelry Stores & Luxury Residences",
    features: [
      "Dual-Tech Microwave / Passive Infrared Sensors",
      "Acoustic Glass-Break & Vibration Detectors",
      "Anti-Jamming LTE Cellular + IP Backup",
      "Silent Duress & Panic Alarm Buttons"
    ],
    benefits: [
      "Zero false alarms through multi-point AI verification",
      "Immediate direct link to police and fire dispatch",
      "Insurance premium discounts up to 20%"
    ],
    imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "24-7-monitoring",
    title: "24/7 Monitoring",
    shortDesc: "Dedicated Security Operations Center (SOC) engineers monitoring video feeds, telemetry, and critical alarm triggers around the clock.",
    fullDesc: "Our state-of-the-art UL-listed Command Centers operate 24 hours a day, 365 days a year. When an alert triggers, our security controllers perform live video verification within seconds, challenge intruders over two-way audio talkdown systems, and dispatch rapid response teams.",
    iconName: "Activity",
    category: "monitoring",
    idealFor: "Enterprise Campuses, Multi-Tenant Towers, Warehouses & Solar Farms",
    features: [
      "UL-Listed Redundant Security Operations Centers",
      "Live Two-Way Audio Talk-Down Intervention",
      "Sub-60 Second Emergency Incident Triage",
      "Automated Incident Archival & Police Evidence Kits"
    ],
    benefits: [
      "Active intervention stopping crimes in progress",
      "Elimination of costly false alarm municipal penalties",
      "Peace of mind during off-hours, holidays, and weekends"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "smart-home-security",
    title: "Smart Home Security",
    shortDesc: "Integrated residential IoT ecosystem with smart locks, HD video doorbells, environmental hazards protection, and mobile control.",
    fullDesc: "Total residential protection seamlessly controlled from your smartphone. Integrates exterior perimeter sensors, smart biometric locks, leak/freeze detection, smoke and carbon monoxide integration, and geofencing arming protocols for uninterrupted family safety.",
    iconName: "Home",
    category: "smart",
    idealFor: "Modern Estates, Smart Condominiums, Villas & Residential Communities",
    features: [
      "High-Definition Video Doorbell with 2-Way Voice",
      "Smart Keyless Deadbolts & Remote Guest Passes",
      "Flood, Gas, Smoke & Freeze Environmental Sensors",
      "Geofenced Auto-Arming & Home Automation Links"
    ],
    benefits: [
      "Complete home control from anywhere in the world",
      "Early warning against catastrophic water/fire damage",
      "Secure delivery reception and trusted guest entry"
    ],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
  }
];

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    id: "ai-tech",
    title: "Cutting-Edge AI Technology",
    description: "Real-time behavioral analytics, automated vehicle identification, and high-definition thermal imaging provide proactive threat prevention before incidents escalate.",
    iconName: "Cpu",
    highlight: "Next-Gen Hardware"
  },
  {
    id: "certified-specialists",
    title: "Certified Security Specialists",
    description: "Our engineers, technicians, and physical officers are fully licensed, background-checked, and trained to stringent ISO and regulatory security compliance standards.",
    iconName: "Award",
    highlight: "SIA & ISO 27001 Certified"
  },
  {
    id: "rapid-response",
    title: "Rapid Response & 24/7 Reliability",
    description: "Sub-minute incident verification, redundant SOC infrastructure, and tight integration with local emergency services guarantee unyielding continuous protection.",
    iconName: "Zap",
    highlight: "< 60s Response SLA"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Jonathan Sterling",
    role: "Director of Facilities & Asset Security",
    company: "Apex Global Logistics Hub",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Srees Group modernized our 500,000 sq ft logistics facility with 4K CCTV and automated access turnstiles. Their 24/7 SOC monitoring prevented two major intrusion attempts in the first quarter alone.",
    serviceType: "CCTV & 24/7 SOC Monitoring"
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Chief Operating Officer",
    company: "Vanguard Tower & Financial Center",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "The biometric access control and vetted security personnel provided by Srees Group represent the highest benchmark of corporate professionalism. Our tenant satisfaction has never been higher.",
    serviceType: "Access Control & Security Personnel"
  },
  {
    id: "test-3",
    name: "Marcus Vance",
    role: "Managing Partner",
    company: "Vance Luxury Estate Portfolio",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "From the initial vulnerability audit to flawless smart home and alarm deployment, Srees Group delivered an impenetrable yet seamless security environment for our properties.",
    serviceType: "Smart Home Security & Alarms"
  }
];

export const TRUST_PARTNERS = [
  { name: "Metro Commercial Bank", category: "Financial Sector" },
  { name: "Vanguard Properties", category: "Commercial Real Estate" },
  { name: "Summit Industrial Parks", category: "Manufacturing & Logistics" },
  { name: "Apex Health Network", category: "Healthcare Facilities" },
  { name: "OmniTech Datacenters", category: "Critical Infrastructure" },
];
