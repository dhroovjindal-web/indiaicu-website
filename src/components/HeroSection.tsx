import React from "react";
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, Network, Zap, CheckCircle2 } from "lucide-react";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8307744774";
const PHONE_DISPLAY = "83077 44774";
const PHONE_TEL = `tel:+91${PHONE_NUMBER}`;
const WHATSAPP_URL = "https://wa.me/918307744774?text=Emergency%20Ambulance%20Required";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-8 pb-32 sm:pt-14 sm:pb-32 overflow-hidden bg-[#0d1b35]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-ambulance.webp"
          alt="Emergency ICU Ambulance"
          width={1408}
          height={768}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b35] via-[#0d1b35]/85 to-[#0d1b35]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b35] via-[#0d1b35]/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="max-w-2xl space-y-4 lg:space-y-6 flex-1 text-center lg:text-left">
            {/* Aggregator badge (Kept intact) */}
            <div className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-3.5 py-1 text-xs sm:text-sm font-semibold text-blue-300 backdrop-blur-sm">
              <Network className="mr-2 h-3.5 w-3.5" />
              Ambulance Aggregator &amp; Dispatch Network
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              India's 24/7 Emergency{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                Ambulance Service
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-blue-100/90 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Immediate ICU, ventilator, oxygen, and intercity ambulance dispatch across Delhi NCR, Mumbai &amp; Pan-India.
            </p>

            {/* Emergency Features Checklist */}
            <div className="grid grid-cols-2 gap-2.5 max-w-lg mx-auto lg:mx-0 pt-1 text-left text-xs sm:text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Ventilator &amp; Oxygen Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Doctor / Paramedic Onboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Bed-to-Bed Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>15–25 Min Avg Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Emergency Call Card (Replaces the Form) */}
          <div className="w-full sm:max-w-md lg:w-auto flex justify-center flex-shrink-0">
            <div className="w-full bg-[#112240]/90 border border-blue-400/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-4 text-center">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Priority Dispatch Active
                </span>
                <span className="text-xs text-blue-200/80 font-medium flex items-center gap-1">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  Avg Response &lt; 30s
                </span>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Need an Ambulance Immediately?</h2>
                <p className="text-xs text-blue-200/70 mt-1">Speak directly with our emergency transit coordinator.</p>
              </div>

              {/* Primary CTA: Big Red Call Button */}
              <a
                href={PHONE_TEL}
                onClick={(e) => trackPhoneCall(e, PHONE_TEL, "hero-card-primary-call")}
                className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 px-6 rounded-xl shadow-lg shadow-red-600/30 transition-all transform active:scale-95"
              >
                <Phone className="h-6 w-6 animate-bounce" />
                <span>CALL NOW: {PHONE_DISPLAY}</span>
              </a>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => trackWhatsApp(e, WHATSAPP_URL, "hero-card-whatsapp")}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp (Share Location)</span>
              </a>

              <p className="text-[11px] text-blue-200/60 pt-1">
                24 Hours • Real-time GPS Tracking • Hospital Coordination
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Points Band (Kept intact) */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0d1b35]/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
              <span className="text-white">24/7 Dispatch Support</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-400" />
              <span className="text-white">PAN India Network</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
              <span className="text-white">Partner Fleet Verified</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Network className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-400" />
              <span className="text-white">Aggregator &amp; Coordinator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}