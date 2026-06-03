import { Phone, Clock, MapPin, UserCheck, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8901434774";
const PHONE_DISPLAY = "89014 34774";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-52 overflow-hidden bg-[#0d1b35]">
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

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Dispatching 24/7 Across India
          </div>
          
          <h1 className="font-heading text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
            24/7 Emergency <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">ICU Ambulance</span> <br/>
            Service
          </h1>
          
          <p className="text-xl text-blue-100/80 font-medium max-w-2xl leading-relaxed">
            Fast ICU, Oxygen, Ventilator & Intercity Ambulance support across India. Manned by critical care specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={`tel:+91${PHONE_NUMBER}`}
              onClick={() => trackPhoneCall("hero")}
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
              data-testid="button-hero-call"
            >
              <Phone className="mr-3 h-5 w-5" />
              Call Now: {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/918901434261`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsApp("hero")}
              className="inline-flex h-14 items-center justify-center rounded-md bg-[#25D366] px-8 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:scale-105 active:scale-95"
              data-testid="button-hero-whatsapp"
            >
              <FaWhatsapp className="mr-3 h-6 w-6" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Trust Points Band */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0d1b35]/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-white">24/7 Emergency Support</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-blue-400" />
              <span className="text-white">PAN India Ambulance Network</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-white">Fast Emergency Response</span>
            </div>
            <div className="flex items-center gap-3">
              <UserCheck className="h-5 w-5 flex-shrink-0 text-blue-400" />
              <span className="text-white">Trained Medical Staff</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
