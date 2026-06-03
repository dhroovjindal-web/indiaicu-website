import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8901434774";
const PHONE_DISPLAY = "89014 34774";
const PHONE_TEL = `tel:+91${PHONE_NUMBER}`;
const WHATSAPP_URL = `https://wa.me/918901434261`;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Cities", href: "#cities" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2" data-testid="link-logo">
            <span className="font-heading text-2xl font-bold tracking-tight text-[#0d1b35]">India<span className="text-primary">ICU</span></span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href={PHONE_TEL}
            onClick={() => trackPhoneCall("navbar-phone-display")}
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            data-testid="link-nav-phone"
          >
            <Phone className="h-4 w-4 text-primary" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={PHONE_TEL}
            onClick={() => trackPhoneCall("navbar-call-now")}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-primary/90"
            data-testid="button-call-now-nav"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </div>

        {/* Mobile: show number + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={PHONE_TEL}
            onClick={() => trackPhoneCall("navbar-mobile-header")}
            className="text-sm font-bold text-primary"
            data-testid="link-mobile-phone-header"
          >
            {PHONE_DISPLAY}
          </a>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white p-4 absolute top-16 left-0 right-0 shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              onClick={() => { setIsOpen(false); trackPhoneCall("navbar-mobile-menu"); }}
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-bold text-white shadow w-full"
              data-testid="button-mobile-call-now"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => { setIsOpen(false); trackWhatsApp("navbar-mobile-menu"); }}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#25D366] px-4 py-2 text-base font-bold text-white shadow w-full"
              data-testid="button-mobile-whatsapp"
            >
              WhatsApp: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
