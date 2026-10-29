import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData, getServiceBySlug } from "../../../data/servicesData";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ServiceDetailView } from "../../../components/ServiceDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found - Building Helper",
      description: "The requested finishing service could not be found.",
    };
  }

  return {
    title: `${service.title} | Building Helper - Post-Construction Services`,
    description: service.shortSummary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <ServiceDetailView service={service} />
      </main>
      <Footer />
    </div>
  );
}

