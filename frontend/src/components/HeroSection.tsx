"use client";

import React from "react";
import { useApp } from "../context/AppContext";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";

export function HeroSection() {
  const { brandConfig } = useApp();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-12 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Dynamic Brand Traits Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>{brandConfig.brandTraits}</span>
        </div>

        {/* Dynamic Hero Headline & Description */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 max-w-4xl mx-auto">
          {brandConfig.heroTitle}
        </h1>

        <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {brandConfig.heroDescription}
        </p>

        {/* Action Buttons: Request Team Callback vs Explore Services */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#service-inquiry-section"
            className="py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 active:scale-95 transition-all flex items-center space-x-2"
          >
            <span>Place an Enquiry for Team Callback</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#services-snapshot"
            className="py-4 px-6 rounded-2xl bg-slate-850 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700/80 shadow-lg transition-all flex items-center space-x-2"
          >
            <span>Explore Services Snapshot</span>
            <Layers className="w-4 h-4 text-amber-400" />
          </a>
        </div>

        {/* Snapshot Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            24-Hour Team Callback Guaranteed
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Free On-Site Technical Inspection
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Single Accountability Guarantee
          </span>
        </div>

        {/* 3 Clean Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 pt-10 border-t border-slate-800/80 text-xs text-slate-400 text-left">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 block text-xs mb-0.5">
                5 Core Finishing Trades
              </strong>
              Plastering, Wall Putty, Painting, Plumbing, and Electrical works executed by specialized skilled crews.
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 block text-xs mb-0.5">
                Free Technical Inspection
              </strong>
              Our site engineer inspects your property, verifies laser plumb lines, moisture levels, and issues a line-item estimate.
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60">
            <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 block text-xs mb-0.5">
                100% Genuine Materials
              </strong>
              Factory-direct Saint-Gobain, Birla, Asian Paints, Astral, and Polycab materials with authentic batch codes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
