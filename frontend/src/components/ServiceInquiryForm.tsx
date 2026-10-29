"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { ServiceInquiry } from "../data/mockData";
import {
  Paintbrush,
  Zap,
  Layers,
  Wrench,
  Sparkles,
  CheckCircle2,
  Phone,
  User,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  PhoneCall,
  Check,
} from "lucide-react";

interface ServiceInquiryFormProps {
  preselectedServiceId?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

export function ServiceInquiryForm({
  preselectedServiceId,
  title,
  subtitle,
  id = "service-inquiry-section",
}: ServiceInquiryFormProps) {
  const {
    submitServiceInquiry,
    selectedServiceForInquiry,
    setSelectedServiceForInquiry,
    brandConfig,
  } = useApp();

  const availableServices = [
    {
      id: "Plastering & Gypsum Leveling",
      name: "Plastering & Gypsum",
      desc: "AAC block leveling, Gyproc one-coat plaster & false ceiling",
      icon: Layers,
      color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      id: "Wall Putty & Surface Prep",
      name: "Wall Putty & Surface Prep",
      desc: "Polymer putty coats, motorized vacuum sanding & primer base",
      icon: Sparkles,
      color: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    },
    {
      id: "Interior & Exterior Painting",
      name: "Painting & Finishes",
      desc: "Luxury emulsion, exterior weather-shield & texture coats",
      icon: Paintbrush,
      color: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    },
    {
      id: "Plumbing & Sanitary Works",
      name: "Plumbing & Sanitary",
      desc: "Concealed CPVC/UPVC pipelines, drainage testing & fixtures",
      icon: Wrench,
      color: "text-cyan-500 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      id: "Electrical Works & Wiring",
      name: "Electrical Works",
      desc: "FRLS copper wiring, conduit routing & MCB phase balancing",
      icon: Zap,
      color: "text-blue-500 border-blue-500/30 bg-blue-500/10",
    },
    {
      id: "Full Post-Construction Package",
      name: "Full Turnkey Package",
      desc: "All 5 trades synchronized under single site supervisor",
      icon: ShieldCheck,
      color: "text-amber-400 border-amber-500/40 bg-amber-500/20",
    },
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    if (preselectedServiceId) return [preselectedServiceId];
    return [
      "Plastering & Gypsum Leveling",
      "Wall Putty & Surface Prep",
      "Interior & Exterior Painting",
    ];
  });

  const [areaSqFt, setAreaSqFt] = useState<number>(2000);
  const [propertyType, setPropertyType] = useState<string>("3BHK Apartment");
  const [clientName, setClientName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("Gurugram");
  const [address, setAddress] = useState<string>("");
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<string>(
    "Morning (09:00 AM - 01:00 PM)"
  );
  const [notes, setNotes] = useState<string>("");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<ServiceInquiry | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Sync if preselectedServiceId or context selection changes
  useEffect(() => {
    if (preselectedServiceId) {
      const timer = setTimeout(() => {
        setSelectedServices([preselectedServiceId]);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (selectedServiceForInquiry) {
      const timer = setTimeout(() => {
        setSelectedServices((prev) =>
          prev.includes(selectedServiceForInquiry)
            ? prev
            : [...prev, selectedServiceForInquiry]
        );
        setSelectedServiceForInquiry(null);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [selectedServiceForInquiry, setSelectedServiceForInquiry]);

  const toggleService = (srvId: string) => {
    if (selectedServices.includes(srvId)) {
      setSelectedServices(selectedServices.filter((s) => s !== srvId));
    } else {
      setSelectedServices([...selectedServices, srvId]);
    }
  };

  const toggleAllServices = () => {
    if (selectedServices.length === availableServices.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(availableServices.map((s) => s.id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!clientName.trim()) {
      setErrorMessage("Please enter your name so our team knows who to address.");
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMessage(
        "Please provide a valid 10-digit mobile number so our team can call you."
      );
      return;
    }

    if (selectedServices.length === 0) {
      setErrorMessage(
        "Please select at least one service you would like to enquire about."
      );
      return;
    }

    const inquiry = submitServiceInquiry({
      clientName: clientName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      services: selectedServices,
      areaSqFt: Number(areaSqFt) || 1500,
      propertyType,
      city,
      address: address.trim() || undefined,
      preferredTimeSlot,
      notes: notes.trim() || undefined,
    });

    setSubmittedInquiry(inquiry);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedInquiry(null);
    setErrorMessage("");
    setClientName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setNotes("");
  };

  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 relative overflow-hidden transition-colors">
        {/* Ambient accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-blue-500"></div>

        {isSubmitted && submittedInquiry ? (
          /* SUCCESS STATE */
          <div className="py-12 text-center max-w-xl mx-auto space-y-6 animate-in fade-in duration-300">
            <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                Enquiry Reference: #{submittedInquiry.inquiryNumber}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Enquiry Placed Successfully!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Thank you,{" "}
                <strong className="text-slate-900 dark:text-white">
                  {submittedInquiry.clientName}
                </strong>
                . Our technical specialist team has received your service
                enquiry. We will call you at{" "}
                <strong className="text-amber-600 dark:text-amber-400">
                  {submittedInquiry.phone}
                </strong>{" "}
                during your preferred time slot (
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {submittedInquiry.preferredTimeSlot}
                </span>
                ) to discuss your requirement and arrange a free on-site
                inspection.
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  Requested Services:
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {submittedInquiry.services.length} Selected
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {submittedInquiry.services.map((srv: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold text-[11px] border border-amber-500/20"
                  >
                    {srv}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-[11px]">
                <div>
                  <span className="text-slate-400 block">Property & Area</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {submittedInquiry.areaSqFt.toLocaleString("en-IN")} Sq. Ft (
                    {submittedInquiry.propertyType})
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Site Location</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {submittedInquiry.city}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Call hotline option */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${brandConfig.supportPhone}`}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Desk Now: {brandConfig.supportPhone}</span>
              </a>

              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
              >
                Place Another Service Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* SERVICE INQUIRY FORM */
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[10px] font-black uppercase tracking-wider">
                    Fast Team Callback & Site Visit
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {title || "Place a Service Enquiry"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {subtitle ||
                    "Tell us the services you need. Our specialist team will call you back to understand your requirement and arrange a free site inspection."}
                </p>
              </div>

              <button
                type="button"
                onClick={toggleAllServices}
                className="self-start sm:self-auto text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>
                  {selectedServices.length === availableServices.length
                    ? "Deselect All Services"
                    : "Select All 5 Services"}
                </span>
              </button>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Step 1: Select Desired Services */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                1. Select Services You Require:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableServices.map((srv) => {
                  const Icon = srv.icon;
                  const isChecked = selectedServices.includes(srv.id);

                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked
                          ? "bg-amber-500/10 border-amber-500/80 shadow-sm"
                          : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold flex-shrink-0 mt-0.5 ${
                          isChecked
                            ? "bg-amber-500 text-slate-950 border-amber-500 shadow-sm"
                            : srv.color
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-xs font-bold truncate ${
                              isChecked
                                ? "text-amber-700 dark:text-amber-300"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {srv.name}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                              isChecked
                                ? "bg-amber-500 border-amber-500 text-slate-950"
                                : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                            }`}
                          >
                            {isChecked && (
                              <Check className="w-3 h-3 stroke-[3]" />
                            )}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                          {srv.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Property Type & Carpet Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  2. Property Type
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="2BHK Apartment">2BHK Apartment</option>
                    <option value="3BHK Apartment">3BHK Apartment</option>
                    <option value="4BHK / Penthouse">4BHK / Penthouse</option>
                    <option value="Independent Villa / Bungalow">
                      Independent Villa / Bungalow
                    </option>
                    <option value="Commercial Office Complex">
                      Commercial Office Complex
                    </option>
                    <option value="Retail Store / Showroom">
                      Retail Store / Showroom
                    </option>
                    <option value="Bare-Shell Commercial Floor">
                      Bare-Shell Commercial Floor
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Approximate Area:{" "}
                  <span className="text-amber-600 dark:text-amber-400 font-black">
                    {Number(areaSqFt).toLocaleString("en-IN")} Sq. Ft
                  </span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="100"
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Number(e.target.value))}
                    className="flex-1 accent-amber-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                  <input
                    type="number"
                    min="100"
                    max="100000"
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-center"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Contact Information */}
            <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                3. Your Contact Details (For Team Callback):
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98111 22334"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    City / Metro Region
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Gurugram">Gurugram (Golf Course / Sohna / CyberCity)</option>
                      <option value="New Delhi">New Delhi (South / West / Central)</option>
                      <option value="Noida">Noida / Greater Noida Express</option>
                      <option value="Faridabad">Faridabad / Neharpar</option>
                      <option value="Ghaziabad">Ghaziabad / Indirapuram</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Site Address / Society Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DLF Phase 5 / Tower B"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Preferred Callback Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={preferredTimeSlot}
                      onChange={(e) => setPreferredTimeSlot(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Morning (09:00 AM - 01:00 PM)">
                        Morning (09:00 AM - 01:00 PM)
                      </option>
                      <option value="Afternoon (01:00 PM - 05:00 PM)">
                        Afternoon (01:00 PM - 05:00 PM)
                      </option>
                      <option value="Evening (05:00 PM - 08:00 PM)">
                        Evening (05:00 PM - 08:00 PM)
                      </option>
                      <option value="Immediate (Next Available Engineer)">
                        Immediate (Next Available Engineer)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                  Specific Requirements or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific details (e.g. Bare shell flat handover next week, need paint shade consultation, concealed CPVC routing required for 3 bathrooms)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>
            </div>

            {/* Submit Button & Trust Reassurance */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>
                  No commitment required. Free technical inspection & line-item
                  estimate.
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Service Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
