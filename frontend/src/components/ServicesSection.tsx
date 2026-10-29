"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "../context/AppContext";
import { servicesData } from "../data/servicesData";
import {
  Layers,
  Sparkles,
  Paintbrush,
  Wrench,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Check,
} from "lucide-react";

export function ServicesSection() {
  const { setSelectedServiceForInquiry } = useApp();

  const iconMap: Record<string, React.ElementType> = {
    "plastering-gypsum-leveling": Layers,
    "wall-putty-surface-prep": Sparkles,
    "interior-exterior-painting": Paintbrush,
    "plumbing-sanitary-works": Wrench,
    "electrical-works-wiring": Zap,
    "turnkey-post-construction": ShieldCheck,
  };

  const handleQuickEnquire = (serviceId: string) => {
    setSelectedServiceForInquiry(serviceId);
    const element = document.getElementById("service-inquiry-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services-snapshot" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider">
            <span>What We Can Do For You</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Post-Construction & Finishing Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From bare-shell structures to ready-to-inhabit perfection. Click any service below to explore complete technical specifications, materials used, and detailed scope of work.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((srv) => {
            const Icon = iconMap[srv.slug] || Layers;
            const isTurnkey = srv.slug === "turnkey-post-construction";

            return (
              <div
                key={srv.id}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative group ${
                  isTurnkey
                    ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white border-amber-500/40 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-500/20"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-500/60 shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="space-y-4">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105 ${srv.accentClass}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                        isTurnkey
                          ? "bg-amber-400 text-slate-950"
                          : "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <Link
                      href={`/services/${srv.slug}`}
                      className="group/link block"
                    >
                      <h3
                        className={`text-lg sm:text-xl font-black transition-colors ${
                          isTurnkey
                            ? "text-white group-hover/link:text-amber-400"
                            : "text-slate-900 dark:text-white group-hover/link:text-amber-500"
                        }`}
                      >
                        {srv.title}
                      </h3>
                    </Link>
                    <span
                      className={`text-xs font-bold block mt-1 ${
                        isTurnkey ? "text-amber-400" : "text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      {srv.subtitle}
                    </span>
                    <p
                      className={`text-xs mt-2.5 leading-relaxed ${
                        isTurnkey ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {srv.shortSummary}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div
                    className={`space-y-2 pt-3 border-t text-[11px] ${
                      isTurnkey
                        ? "border-slate-800 text-slate-300"
                        : "border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {srv.keyHighlights.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                            isTurnkey ? "text-amber-400" : "text-emerald-500"
                          }`}
                        />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 space-y-2">
                  {/* Primary: Redirects to dedicated detail page */}
                  <Link
                    href={`/services/${srv.slug}`}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                      isTurnkey
                        ? "bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-amber-500/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    }`}
                  >
                    <span>View Service Details & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Secondary: Quick Enquire */}
                  <button
                    type="button"
                    onClick={() => handleQuickEnquire(srv.id)}
                    className={`w-full py-2 px-3 rounded-xl text-[11px] font-semibold text-center transition-colors ${
                      isTurnkey
                        ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    Quick Enquire for {srv.shortTitle} ↓
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Process: How We Work With You */}
        <div id="how-it-works" className="scroll-mt-24 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Simple & Transparent
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              How Our Team Works With Your Requirement
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              No guesswork or dealing with fragmented sub-contractors. We follow a strict engineering process from initial inquiry to final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <span className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="font-black text-sm text-slate-900 dark:text-white">
                Place Your Enquiry
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Choose the services you need, enter your approximate carpet area, and tell us your site location.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <span className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="font-black text-sm text-slate-900 dark:text-white">
                Expert Team Calls You
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Our site engineer calls you at your preferred time to review specifications and discuss your schedule.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <span className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="font-black text-sm text-slate-900 dark:text-white">
                Free Site Inspection
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Our engineer visits your property, checks wall levels & moisture, and prepares a detailed line-item BOQ.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-3 relative">
              <span className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                4
              </span>
              <h4 className="font-black text-sm text-slate-900 dark:text-white">
                Supervised Execution
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Certified crews execute with factory-sealed materials under a dedicated site supervisor with daily progress logs.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Our Team Section */}
        <div id="why-choose-us" className="scroll-mt-24 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              The Quality Difference
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Why Homeowners & Businesses Trust Our Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Traditional contractors bring unpredictable labor and disputed material quality. We deliver engineering-backed finishing under single accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-850/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <h4 className="text-base font-bold text-white">
                100% Genuine Factory Materials
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We use Saint-Gobain Gyproc, Birla WallCare, Asian Paints Royale, Astral CPVC, and Havells FRLS in factory-sealed containers with batch codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-850/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                Dedicated On-Site Supervisor
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                A trained civil engineer stays on your site to supervise workmanship, enforce laser tolerances, and send you daily WhatsApp progress logs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-850/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                Single Point Accountability
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero subcontractor finger-pointing. We manage electrical chasing, plumbing pressure tests, gypsum plastering, and painting in sync.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
