import React, { Suspense, lazy } from "react";
import { HeroCallbackForm } from "@/components/HeroCallbackForm";
import { Clock, MapPin, ShieldCheck, Network } from "lucide-react";
import { Navbar } from "@/components/Navbar";

// Lazy-load sections below the fold
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const HowItWorks = lazy(() => import("@/components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));
const StickyMobileCTA = lazy(() => import("@/components/StickyMobileCTA").then(m => ({ default: m.StickyMobileCTA })));

export default function Mumbai() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Critical Hero Section (Loads Instantly) */}
        <section className="relative min-h-[75vh] flex items-center pt-12 pb-32 sm:pt-16 sm:pb-34 overflow-hidden bg-[#0d1b35]">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-ambulance.webp"
              alt="Mumbai Emergency ICU Ambulance"
              width={1408}
              height={768}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b35] via-[#0d1b35]/80 to-[#0d1b35]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b35] via-[#0d1b35]/90 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-2">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              
              <div className="max-w-2xl space-y-3 sm:space-y-4 lg:space-y-6 flex-1 text-center lg:text-left">
                <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-3.5 py-1 text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-sm">
                  <MapPin className="mr-2 h-3.5 w-3.5" />
                  Serving Mumbai, Thane &amp; Navi Mumbai
                </div>

                <h1 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Mumbai's 24/7 ICU{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                    Ambulance Service
                  </span>
                </h1>

                <p className="hidden sm:block text-base sm:text-lg text-blue-100/80 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Instant dispatch for Ventilator, Oxygen, and Intercity Ambulances (Pune, Nashik, Surat) from any Mumbai hospital.
                </p>
              </div>

              <div className="w-full lg:w-auto flex justify-center flex-shrink-0 mt-2 lg:mt-0">
                <HeroCallbackForm />
              </div>

            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0d1b35]/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 sm:py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                  <span className="text-white">Under 30min ETA</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-white">All Mumbai Covered</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                  <span className="text-white">ICU Paramedics Onboard</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Network className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-white">Intercity Transfers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deferred Secondary Sections */}
        <Suspense fallback={<div className="py-12 bg-[#050b14]" />}>
          <ServicesSection />
          <WhyChooseUs />
          <HowItWorks />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </Suspense>
    </div>
  );
}
