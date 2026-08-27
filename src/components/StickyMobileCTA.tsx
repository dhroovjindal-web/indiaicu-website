import React from "react";
import { Phone } from "lucide-react";
import { trackPhoneCall } from "@/lib/analytics";

const PHONE_NUMBER = "8307744774";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      {/* Sleek Floating Emergency Call Button */}
      <a
        href={`tel:+91${PHONE_NUMBER}`}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
          trackPhoneCall(e, `tel:+91${PHONE_NUMBER}`, "floating_btn")
        }
        className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-xl shadow-black/50 border border-white/20 backdrop-blur-sm transition active:scale-95"
        aria-label="Direct Emergency Call"
      >
        <Phone className="h-5 w-5 animate-pulse" />
      </a>
    </div>
  );
}
