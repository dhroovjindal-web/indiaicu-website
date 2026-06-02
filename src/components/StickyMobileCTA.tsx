import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8901434774";
const PHONE_DISPLAY = "89014 34774";

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 shadow-[0_-4px_24px_rgba(0,0,0,0.6)] border-t border-white/10">
      <a 
        href={`tel:+91${PHONE_NUMBER}`}
        onClick={() => trackPhoneCall("sticky-bar")}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-primary text-primary-foreground font-bold active:brightness-90 transition-all"
        data-testid="mobile-cta-call"
      >
        <Phone className="h-5 w-5" />
        <span className="text-xs font-bold">Call Now</span>
        <span className="text-[10px] font-medium opacity-90">{PHONE_DISPLAY}</span>
      </a>
      <div className="w-px bg-white/20" />
      <a 
        href={`https://wa.me/91${PHONE_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackWhatsApp("sticky-bar")}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-[#25D366] text-white font-bold active:brightness-90 transition-all"
        data-testid="mobile-cta-whatsapp"
      >
        <FaWhatsapp className="h-5 w-5" />
        <span className="text-xs font-bold">WhatsApp</span>
        <span className="text-[10px] font-medium opacity-90">{PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}
