import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8307744774";
const PHONE_DISPLAY = "83077 44774";
const PHONE_TEL = `tel:+91${PHONE_NUMBER}`;
const WHATSAPP_URL = "https://wa.me/918307744774?text=Emergency%20Ambulance%20Required";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0d1b35]/95 border-t border-white/15 backdrop-blur-md px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Primary Call Button */}
        <a
          href={PHONE_TEL}
          onClick={(e) => trackPhoneCall(e, PHONE_TEL, "sticky-bottom-bar-call")}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white font-black text-sm py-3 px-3 rounded-lg shadow-md shadow-red-600/30"
          aria-label="Call Emergency Ambulance"
        >
          <Phone className="h-4 w-4 animate-bounce" />
          <span>CALL: {PHONE_DISPLAY}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => trackWhatsApp(e, WHATSAPP_URL, "sticky-bottom-bar-whatsapp")}
          className="flex items-center justify-center gap-1.5 bg-[#25D366] active:bg-[#20bd5a] text-white font-bold text-xs py-3 px-3 rounded-lg shadow-md"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}