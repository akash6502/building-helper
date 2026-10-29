"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceDetail, servicesData } from "../data/servicesData";
import { ServiceInquiryForm } from "./ServiceInquiryForm";
import { useApp } from "../context/AppContext";
import {
  Layers,
  Sparkles,
  Paintbrush,
  Wrench,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  ChevronDown,
  Building2,
  Check,
  Award,
} from "lucide-react";

interface ServiceDetailViewProps {
  service: ServiceDetail;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const { brandConfig } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const iconMap: Record<string, React.ElementType> = {
    "plastering-gypsum-leveling": Layers,
    "wall-putty-surface-prep": Sparkles,
    "interior-exterior-painting": Paintbrush,
    "plumbing-sanitary-works": Wrench,
    "electrical-works-wiring": Zap,
    "turnkey-post-construction": ShieldCheck,
  };

  const Icon = iconMap[service.slug] || Layers;
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-400 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#services-snapshot"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-bold truncate">
              {service.title}
            </span>
          </div>

          <Link
            href="/#services-snapshot"
            className="flex items-center gap-1 hover:text-white transition-colors font-medium text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* Service Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center sm:text-left">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <div
              className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold ${service.accentClass}`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {service.badge}
            </span>
            <span className="text-xs text-slate-400">
              • Technical Finishing Trade
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg font-bold text-amber-400 mt-2">
              {service.subtitle}
            </p>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-4 leading-relaxed">
              {service.heroDescription}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <a
              href="#service-enquiry-form"
              className="py-3.5 px-7 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/25 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Enquire for {service.shortTitle}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${brandConfig.supportPhone}`}
              className="py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs border border-slate-700 transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call Engineer: {brandConfig.supportPhone}</span>
            </a>
          </div>

          {/* 4 Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {service.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800 text-left"
              >
                <span className="text-xl sm:text-2xl font-black text-white block">
                  {m.value}
                </span>
                <span className="text-xs font-bold text-amber-400 block mt-0.5">
                  {m.label}
                </span>
                <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Body Details Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section 1: Detailed Scope of Work */}
        <div className="space-y-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Detailed Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              What Is Included In This Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Every phase is executed by specialized technicians following approved engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.detailedScope.map((scope, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {scope.category}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {scope.description}
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  {scope.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Step-by-Step Technical Execution Process */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Step-by-Step Technical Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Our structured timeline ensures sequential progress with verified milestone signoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                      {step.timeframe}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Deliverable:
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 block">
                    {step.keyDeliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Factory Grade Materials & Standards */}
        <div className="space-y-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Direct Factory Authenticity
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Materials & Equipment Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              We never procure open or adulterated materials. Only factory-sealed supplies with manufacturer batch codes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.materialsAndEquipment.map((mat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                    {mat.category}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>

                <h4 className="font-black text-base text-slate-900 dark:text-white">
                  {mat.brandPartner}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {mat.specification}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300 block mb-0.5">
                    Why it matters:
                  </strong>
                  {mat.whyItMatters}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Quality Benchmarks & Ideal For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quality Standards */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="font-black text-lg text-slate-900 dark:text-white">
                Quality Standards & Tolerances
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              {service.qualityStandards.map((std, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{std}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              <h3 className="font-black text-lg text-slate-900 dark:text-white">
                Recommended For
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              {service.idealFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 5: FAQs */}
        <div className="space-y-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Everything you need to know about this finishing service.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180 text-amber-500" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 6: Contextual Enquiry Form */}
        <div id="service-enquiry-form" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Get Started
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Enquire About {service.shortTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Submit your property details below. Our technical team will call you to review your requirements and schedule a free site inspection.
            </p>
          </div>

          <ServiceInquiryForm
            preselectedServiceId={service.id}
            title={`Enquire for ${service.title}`}
            subtitle={`Our team will review your ${service.shortTitle} requirement, calculate surface area and specifications, and call you during your preferred time window.`}
          />
        </div>

        {/* Section 7: Explore Other Services */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Explore Other Finishing Services
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Browse our complete post-construction finishing capabilities.
              </p>
            </div>

            <Link
              href="/#services-snapshot"
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>View All Services on Homepage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.slice(0, 3).map((other) => {
              const OtherIcon = iconMap[other.slug] || Layers;

              return (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/60 transition-all shadow-sm group flex items-start gap-3"
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-105 transition-transform ${other.accentClass}`}
                  >
                    <OtherIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors truncate">
                      {other.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                      {other.shortSummary}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
