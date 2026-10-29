"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "../context/AppContext";
import { VisitorCounter } from "./VisitorCounter";
import {
  Sparkles,
  PhoneCall,
  Clock,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export function Navbar() {
  const { brandConfig } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95 transition-colors">
      {/* Top micro bar for engineer hotline & dispatch hours */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 font-medium text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Post-Construction Finishing Services
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3 h-3" />
            Engineer Callback Hours: 08:30 AM – 08:00 PM Daily
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <VisitorCounter variant="compact" />
          <span className="text-slate-600">•</span>
          <a
            href={`tel:${brandConfig.supportPhone}`}
            className="flex items-center gap-1.5 hover:text-white text-emerald-400 font-bold transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Enquiry Desk: {brandConfig.supportPhone}
          </a>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">
            Hub: {brandConfig.branches[0]?.name || "Central Operations"}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-600 to-amber-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              {brandConfig.shortName || "BH"}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-amber-500 transition-colors">
                  {brandConfig.brandName}
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  Finishing Services
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 max-w-[280px]">
                {brandConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold text-slate-600 dark:text-slate-300">
            <Link
              href="/"
              className="hover:text-amber-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#services-snapshot"
              className="hover:text-amber-500 transition-colors"
            >
              All Services
            </Link>
            <Link
              href="/#how-it-works"
              className="hover:text-amber-500 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#why-choose-us"
              className="hover:text-amber-500 transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="/#contact-section"
              className="hover:text-amber-500 transition-colors"
            >
              Contact & Hubs
            </Link>
          </nav>

          {/* Right Action: Hotline Call & Place Enquiry CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${brandConfig.supportPhone}`}
              className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-500" />
              <span>{brandConfig.supportPhone}</span>
            </a>

            <Link
              href="/#service-inquiry-section"
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Place Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/#service-inquiry-section"
              className="py-2 px-3 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center gap-1 sm:hidden"
            >
              <span>Enquire</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-amber-500"
          >
            Home
          </Link>
          <Link
            href="/#services-snapshot"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-amber-500"
          >
            Services Snapshot
          </Link>
          <Link
            href="/#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-amber-500"
          >
            How Our Process Works
          </Link>
          <Link
            href="/#why-choose-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-amber-500"
          >
            Why Choose Us
          </Link>
          <Link
            href="/#contact-section"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-amber-500"
          >
            Contact & Operations Hubs
          </Link>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <a
              href={`tel:${brandConfig.supportPhone}`}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-500" />
              <span>Call Us: {brandConfig.supportPhone}</span>
            </a>

            <Link
              href="/#service-inquiry-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Place Service Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
