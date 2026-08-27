import { HeroCallbackForm } from "./HeroCallbackForm";
import { Phone, Clock, MapPin, ShieldCheck, Network } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8307744774";
const PHONE_DISPLAY = "83077 44774";

export function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-16 pb-34 overflow-hidden bg-[#0d1b35]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-ambulance.webp"
          alt="Emergency ICU Ambulance"
          width={1408}
          height={768}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b35] via-[#0d1b35]/80 to-[#0d1b35]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b35] via-[#0d1b35]/90 to-transparent" />
      </div>

    <div className="container relative z-10 mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="max-w-2xl space-y-4 lg:space-y-6 flex-1 text-center lg:text-left">
            {/* Aggregator badge */}
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

            <p className="text-sm sm:text-lg text-blue-100/80 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Book verified ICU, oxygen, and intercity ambulances instantly across Delhi NCR, Mumbai &amp; Pan-India.
            </p>
          </div>

          {/* Right Column: Callback Form (Above fold on mobile) */}
          <div className="w-full lg:w-auto flex justify-center flex-shrink-0 mt-2 lg:mt-0">
            <HeroCallbackForm />
          </div>

        </div>
      </div>

      {/* Trust Points Band */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0d1b35]/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-white">24/7 Dispatch Support</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-blue-400" />
              <span className="text-white">PAN India Network</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-white">Partner Fleet Verified</span>
            </div>
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 flex-shrink-0 text-blue-400" />
              <span className="text-white">Aggregator &amp; Coordinator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
