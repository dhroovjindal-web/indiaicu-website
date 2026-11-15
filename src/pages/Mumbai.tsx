import React, { Suspense, lazy, useEffect } from "react";
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, Network, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

// Lazy-load sections below the fold
const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const IntercitySection = lazy(() => import("@/components/IntercitySection").then(m => ({ default: m.IntercitySection })));
const HowItWorks = lazy(() => import("@/components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));
const StickyMobileCTA = lazy(() => import("@/components/StickyMobileCTA").then(m => ({ default: m.StickyMobileCTA })));

const PHONE_NUMBER = "8307744774";
const PHONE_DISPLAY = "83077 44774";
const PHONE_TEL = `tel:+91${PHONE_NUMBER}`;
const WHATSAPP_URL = "https://wa.me/918307744774?text=Emergency%20Ambulance%20Required%20in%20Mumbai";

export default function Mumbai() {
  useEffect(() => {
    document.title = "24/7 ICU & Ventilator Ambulance Service in Mumbai | IndiaICU";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Immediate 24/7 ICU, Ventilator, Oxygen, and Intercity Ambulance dispatch across Mumbai, Thane & Navi Mumbai. Under 30-minute ETA. Call 83077 44774."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.indiaicu.com/mumbai");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Critical Hero Section (Loads Instantly) */}
        <section className="relative min-h-[82vh] flex flex-col justify-between pt-4 pb-20 sm:pt-10 sm:pb-24 overflow-hidden bg-[#0d1b35]">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/hero-ambulance.webp"
              alt="Mumbai Emergency ICU Ambulance"
              width={1408}
              height={768}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b35] via-[#0d1b35]/80 to-[#0d1b35]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b35] via-[#0d1b35]/90 to-transparent" />
          </div>

          {/* Main Hero Content: Centered Layout Matching Homepage */}
          <div className="container relative z-10 mx-auto px-4 my-auto">
            <div className="max-w-2xl mx-auto text-center space-y-3 sm:space-y-5">
              
              {/* Location Badge */}
              <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-sm">
                <MapPin className="mr-2 h-3.5 w-3.5 text-blue-300" />
                Serving Mumbai, Thane &amp; Navi Mumbai
              </div>

              {/* Headline */}
              <h1 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Mumbai's 24/7 ICU{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  Ambulance Service
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base text-blue-100/80 font-medium max-w-lg mx-auto leading-relaxed">
                Instant dispatch for Ventilator, Oxygen, and Intercity Ambulances (Pune, Nashik, Surat) from any Mumbai hospital.
              </p>

              {/* Primary Instant CTA Buttons */}
              <div className="pt-1 sm:pt-3 max-w-md mx-auto space-y-2.5">
                {/* Big Red Call Button */}
                <a
                  href={PHONE_TEL}
                  onClick={(e) => trackPhoneCall(e, PHONE_TEL, "mumbai-hero-direct-call")}
                  className="w-full flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black text-base sm:text-xl py-3.5 sm:py-4 px-6 rounded-xl shadow-lg shadow-red-600/30 transition-all"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
                  <span>CALL NOW: {PHONE_DISPLAY}</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => trackWhatsApp(e, WHATSAPP_URL, "mumbai-hero-direct-whatsapp")}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold text-sm sm:text-base py-3 sm:py-3.5 px-4 rounded-xl shadow transition-colors"
                >
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Chat on WhatsApp (Share Location)</span>
                </a>

                {/* Response Status Indicator */}
                <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs text-blue-200/80 pt-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    Priority Dispatch Active
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-amber-400" />
                    Avg Response &lt; 30s
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Single Clean Trust Band */}
          <div className="relative z-10 w-full border-t border-white/10 bg-[#0d1b35]/95 backdrop-blur-md mt-4 sm:mt-8">
            <div className="container mx-auto px-4 py-3 sm:py-3.5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-red-500" />
                  <span className="text-white">Under 30min ETA</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-white">All Mumbai Covered</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-emerald-400" />
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
          <IntercitySection />
          <HowItWorks />
          <Testimonials />
          <FAQSection />
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
