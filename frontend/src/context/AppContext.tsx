"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  BrandConfig,
  initialBrandConfig,
  ServiceInquiry,
  mockServiceInquiries,
} from "../data/mockData";

export interface AppContextType {
  // Brand Configuration
  brandConfig: BrandConfig;
  updateBrandConfig: (newConfig: Partial<BrandConfig>) => void;

  // Customer Service Inquiries / Leads
  serviceInquiries: ServiceInquiry[];
  submitServiceInquiry: (
    data: Omit<ServiceInquiry, "id" | "inquiryNumber" | "createdAt" | "status">
  ) => ServiceInquiry;
  selectedServiceForInquiry: string | null;
  setSelectedServiceForInquiry: (s: string | null) => void;

  // Global Notification Toast
  notification: string | null;
  setNotification: (msg: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Brand Config
  const [brandConfig, setBrandConfig] = useState<BrandConfig>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("building_helper_brand_config_v2");
      if (saved) {
        try {
          return { ...initialBrandConfig, ...JSON.parse(saved) };
        } catch (e) {
          console.error("Failed to parse saved brand config", e);
        }
      }
    }
    return initialBrandConfig;
  });

  const updateBrandConfig = (newConfig: Partial<BrandConfig>) => {
    setBrandConfig((prev) => {
      const updated = { ...prev, ...newConfig };
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "building_helper_brand_config_v2",
          JSON.stringify(updated)
        );
      }
      return updated;
    });
  };

  // Service Inquiries (Persistent in localStorage)
  const [serviceInquiries, setServiceInquiries] = useState<ServiceInquiry[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("building_helper_service_inquiries");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse saved inquiries", e);
        }
      }
    }
    return mockServiceInquiries;
  });

  const [selectedServiceForInquiry, setSelectedServiceForInquiry] =
    useState<string | null>(null);

  const [notification, setNotification] = useState<string | null>(null);

  // Auto-dismiss notification after 4 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const submitServiceInquiry = (
    data: Omit<ServiceInquiry, "id" | "inquiryNumber" | "createdAt" | "status">
  ): ServiceInquiry => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newInquiry: ServiceInquiry = {
      ...data,
      id: `inq-${Date.now()}`,
      inquiryNumber: `ENQ-2026-${randomSuffix}`,
      status: "NEW",
      createdAt: "Just now",
    };

    // 1. Save locally for instant UI update
    setServiceInquiries((prev) => {
      const updated = [newInquiry, ...prev];
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "building_helper_service_inquiries",
          JSON.stringify(updated)
        );
      }
      return updated;
    });

    setNotification(
      `Enquiry #${newInquiry.inquiryNumber} received! Our team will call you within 24 hours.`
    );

    // 2. Forward to Next.js API route (/api/enquiry) and Google Sheet
    try {
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInquiry),
      }).catch((err) => {
        console.warn("API route forwarding error:", err);
      });

      // Also support direct client-side Webhook if configured
      const directWebhook = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
      if (directWebhook) {
        fetch(directWebhook, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newInquiry),
        }).catch((err) => {
          console.warn("Direct webhook forwarding error:", err);
        });
      }
    } catch (e) {
      console.error("Failed to forward enquiry to webhook:", e);
    }

    return newInquiry;
  };

  return (
    <AppContext.Provider
      value={{
        brandConfig,
        updateBrandConfig,
        serviceInquiries,
        submitServiceInquiry,
        selectedServiceForInquiry,
        setSelectedServiceForInquiry,
        notification,
        setNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
