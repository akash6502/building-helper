"use client";

import React from "react";
import { useApp } from "../context/AppContext";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ServiceInquiryForm } from "../components/ServiceInquiryForm";
import { ServicesSection } from "../components/ServicesSection";
import { Footer } from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const { notification } = useApp();

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Global Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 p-4 rounded-2xl bg-slate-900 text-white shadow-2xl border border-amber-500/40 text-xs font-semibold flex items-center gap-2.5 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Prominent Quick Enquiry Form */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-8">
          <ServiceInquiryForm />
        </div>

        {/* Snapshot of What We Can Do & Service Cards */}
        <ServicesSection />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
