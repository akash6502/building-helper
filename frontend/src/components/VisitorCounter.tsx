"use client";

import React, { useSyncExternalStore } from "react";
import { Eye } from "lucide-react";

interface VisitorCounterProps {
  variant?: "badge" | "compact";
}

const emptySubscribe = () => () => {};

export function VisitorCounter({ variant = "badge" }: VisitorCounterProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
        <span className="text-[10px]">Loading counter...</span>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs text-slate-300">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hits.sh/building-helper-live.vercel.app.svg?style=flat-square&label=Visitors&color=f59e0b&labelColor=0f172a"
          alt="Site Visitors Counter"
          className="h-4 rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 shadow-inner">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </div>
      <Eye className="w-3.5 h-3.5 text-amber-400" />
      <span className="text-[11px] font-medium text-slate-400">
        Live Activity:
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://hits.sh/building-helper-live.vercel.app.svg?style=flat-square&label=Visits&color=f59e0b&labelColor=1e293b"
        alt="Live Site Visits Counter"
        className="h-4 rounded shadow-sm"
        loading="lazy"
      />
    </div>
  );
}
