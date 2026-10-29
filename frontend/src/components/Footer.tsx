"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "../context/AppContext";
import { servicesData } from "../data/servicesData";
import {
  PhoneCall,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2,
  Mail,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const { brandConfig } = useApp();

  return (
    <footer id="contact-section" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Top Banner: Direct site guarantee */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">24-Hour Team Callback</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Our site engineer calls you back to discuss your area, requirements, and schedule.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Free On-Site Inspection</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Complimentary technical site survey to verify wall moisture, laser plumb, and conduit layouts.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">100% Genuine Factory Materials</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Gyproc, Birla, Asian Paints, Astral, and Polycab delivered in sealed factory packaging.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Single Accountability</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Zero subcontractor finger-pointing. All 5 finishing trades synchronized under one engineer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow">
              {brandConfig.shortName || "BH"}
            </div>
            <span className="font-black text-lg text-white tracking-tight">
              {brandConfig.brandName}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {brandConfig.heroDescription}
          </p>
          <div className="pt-2 space-y-1.5">
            <a
              href={`tel:${brandConfig.supportPhone}`}
              className="flex items-center gap-2 text-white font-bold text-xs hover:text-amber-400 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{brandConfig.supportPhone}</span>
            </a>
            <a
              href={`mailto:${brandConfig.supportEmail}`}
              className="flex items-center gap-2 text-slate-400 text-xs hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{brandConfig.supportEmail}</span>
            </a>
          </div>
        </div>

        {/* Services Links Column */}
        <div className="space-y-3">
          <h5 className="font-black text-white text-xs uppercase tracking-wider">
            Finishing Services
          </h5>
          <ul className="space-y-2 text-[11px]">
            {servicesData.map((srv) => (
              <li key={srv.slug}>
                <Link
                  href={`/services/${srv.slug}`}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span>{srv.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links / Navigation */}
        <div className="space-y-3">
          <h5 className="font-black text-white text-xs uppercase tracking-wider">
            Process & Standards
          </h5>
          <ul className="space-y-2 text-[11px]">
            <li>
              <Link href="/#services-snapshot" className="hover:text-amber-400 transition-colors">
                Services Overview
              </Link>
            </li>
            <li>
              <Link href="/#how-it-works" className="hover:text-amber-400 transition-colors">
                How Our Team Works
              </Link>
            </li>
            <li>
              <Link href="/#why-choose-us" className="hover:text-amber-400 transition-colors">
                Why Choose Building Helper
              </Link>
            </li>
            <li>
              <Link href="/#service-inquiry-section" className="hover:text-amber-400 transition-colors">
                Place an Enquiry
              </Link>
            </li>
          </ul>

          <div className="pt-2">
            <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
              Customer Support Hours
            </span>
            <p className="text-[11px] text-slate-300">
              Monday – Sunday: 08:30 AM – 08:00 PM
            </p>
          </div>
        </div>

        {/* Operations Hubs / Branches */}
        <div className="space-y-3">
          <h5 className="font-black text-white text-xs uppercase tracking-wider">
            Operations Hubs
          </h5>
          <div className="space-y-3 text-[11px]">
            {brandConfig.branches.map((b) => (
              <div key={b.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-white block text-xs">
                  {b.name}
                </span>
                <p className="text-slate-400 text-[10px] mt-0.5">{b.address}</p>
                <div className="flex items-center gap-1 text-slate-500 text-[10px] mt-1">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span>{b.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <span>{brandConfig.trademarkText}</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>Free Technical Consultation</span>
            <span>•</span>
            <span>Laser-Aligned Finishing</span>
            <span>•</span>
            <span>Single-Point Supervision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
