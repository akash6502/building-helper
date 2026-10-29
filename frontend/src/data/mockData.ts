export interface BrandConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  brandTraits: string;
  heroTitle: string;
  heroDescription: string;
  trademarkText: string;
  supportPhone: string;
  supportEmail: string;
  supportWhatsapp: string;
  branches: Array<{
    id: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    isPrimary?: boolean;
  }>;
}

export interface ServiceInquiry {
  id: string;
  inquiryNumber: string;
  clientName: string;
  phone: string;
  email?: string;
  services: string[];
  areaSqFt: number;
  propertyType: string;
  city: string;
  address?: string;
  preferredTimeSlot: string;
  notes?: string;
  createdAt: string;
  status: "NEW" | "CONTACTED" | "SITE_VISIT_SCHEDULED" | "ESTIMATE_SENT" | "IN_PROGRESS" | "COMPLETED";
}

export const initialBrandConfig: BrandConfig = {
  brandName: "Building Helper",
  shortName: "BH",
  tagline: "Turnkey Post-Construction & Finishing Services Delivered Directly to Your Site",
  brandTraits: "Dedicated Site Engineers • Verified Skilled Crews • Free Technical Inspection • Single Accountability",
  heroTitle: "Post-Construction & Finishing Services for Your Property",
  heroDescription:
    "Looking for verified finishing teams for Plastering, Wall Putty, Painting, Plumbing, or Electrical works? Place your enquiry below — our engineering team will call you to discuss your exact requirement and schedule a free site inspection.",
  trademarkText: "© 2026 Building Helper Technologies. All rights reserved.",
  supportPhone: "+91 80857 07987",
  supportEmail: "support@buildinghelper.in",
  supportWhatsapp: "+918085707987",
  branches: [
    {
      id: "b-1",
      name: "Central Engineering & Operations Hub",
      address: "Plot 44, Udyog Vihar Phase IV, Sector 18",
      city: "Gurugram, Haryana",
      phone: "+91 80857 07987",
      isPrimary: true,
    },
    {
      id: "b-2",
      name: "South Delhi & Metro Operations Desk",
      address: "Shed 12, Ring Road Tech Corridor, Okhla Phase 3",
      city: "New Delhi",
      phone: "+91 98111 22335",
      isPrimary: false,
    },
    {
      id: "b-3",
      name: "Noida & Greater Noida Operations Hub",
      address: "Tower B, Sector 63 Express Corridor",
      city: "Noida, UP",
      phone: "+91 98111 22336",
      isPrimary: false,
    },
  ],
};

export const mockServiceInquiries: ServiceInquiry[] = [
  {
    id: "inq-101",
    inquiryNumber: "ENQ-2026-101",
    clientName: "Sunil Grover",
    phone: "+91 98112 34567",
    email: "sunil.grover@gmail.com",
    services: [
      "Plastering & Gypsum Leveling",
      "Wall Putty & Surface Prep",
      "Interior & Exterior Painting",
    ],
    areaSqFt: 2400,
    propertyType: "3BHK Luxury Apartment",
    city: "Gurugram (Golf Course Extn)",
    address: "Tower C, Flat 1402, Pioneer Araya",
    preferredTimeSlot: "Morning (09:00 AM - 01:00 PM)",
    notes:
      "New handover bare shell flat. Need gypsum leveling on AAC block walls followed by 2 coats Birla Putty and Royale Luxury Emulsion.",
    createdAt: "Today, 11:20 AM",
    status: "NEW",
  },
  {
    id: "inq-102",
    inquiryNumber: "ENQ-2026-102",
    clientName: "Meenakshi Sundaram",
    phone: "+91 99581 88220",
    email: "meenakshi.s@outlook.com",
    services: ["Electrical Works & Wiring", "Plumbing & Sanitary Works"],
    areaSqFt: 4200,
    propertyType: "Independent Villa",
    city: "Noida Sector 44",
    address: "B-28, Sector 44, Near Golf Course",
    preferredTimeSlot: "Afternoon (01:00 PM - 05:00 PM)",
    notes:
      "Post-structure civil work complete. Need conduit routing, FRLS copper wiring for 3 floors, and CPVC concealed plumbing for 5 bathrooms.",
    createdAt: "Yesterday, 03:45 PM",
    status: "SITE_VISIT_SCHEDULED",
  },
  {
    id: "inq-103",
    inquiryNumber: "ENQ-2026-103",
    clientName: "Aman Chopra (Chopra Commercials)",
    phone: "+91 98100 77112",
    email: "achopra@chopracommercials.com",
    services: [
      "Plastering & Gypsum Leveling",
      "Wall Putty & Surface Prep",
      "Interior & Exterior Painting",
      "Electrical Works & Wiring",
      "Plumbing & Sanitary Works",
    ],
    areaSqFt: 8500,
    propertyType: "Commercial Office Complex",
    city: "Gurugram (Cyber City)",
    address: "Floor 4, Building 10-A, DLF CyberCity",
    preferredTimeSlot: "Morning (09:00 AM - 01:00 PM)",
    notes:
      "Complete post-civil finishing package. Fast-track handover required within 45 days with single accountability.",
    createdAt: "Yesterday, 10:15 AM",
    status: "CONTACTED",
  },
];
