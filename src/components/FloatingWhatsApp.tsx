import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { trackWhatsApp } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const WHATSAPP_URL = "https://wa.me/918901434261";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => trackWhatsApp(e, WHATSAPP_URL, "floating-button")}
      className="hidden md:flex fixed bottom-8 right-8 z-50 h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
      data-testid="floating-whatsapp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
