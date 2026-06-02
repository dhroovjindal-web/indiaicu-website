import { FaWhatsapp } from "react-icons/fa";
import { trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8901434774";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/91${PHONE_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackWhatsApp("floating-button")}
      className="hidden md:flex fixed bottom-8 right-8 z-50 h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
      data-testid="floating-whatsapp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
