import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8307744774";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 items-end md:hidden">
      {/* WhatsApp Circular Floating Button */}
      <a
        href={`https://wa.me/91${PHONE_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
          trackWhatsApp(e, `https://wa.me/91${PHONE_NUMBER}`, "floating_btn")
        }
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-950/40 transition hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

      {/* Direct Call Circular Floating Button */}
      <a
        href={`tel:+91${PHONE_NUMBER}`}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
          trackPhoneCall(e, `tel:+91${PHONE_NUMBER}`, "floating_btn")
        }
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-red-950/50 transition hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Call Dispatch"
      >
        <Phone className="h-6 w-6 animate-pulse" />
      </a>
    </div>
  );
}
