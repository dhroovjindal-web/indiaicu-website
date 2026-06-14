import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackPhoneCall, trackWhatsApp } from "@/lib/analytics";

const PHONE_NUMBER = "8901434774";
const PHONE_DISPLAY = "89014 34774";
const PHONE_TEL = `tel:+91${PHONE_NUMBER}`;
const WHATSAPP_URL = `https://wa.me/918901434261`;
const SUPPORT_EMAIL = "dhroovjindal@gmail.com";
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#050b14] border-t border-white/10">
      {/* Emergency CTA strip */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">24/7 Emergency Dispatch</p>
                <p className="text-muted-foreground text-xs">Always available — call or WhatsApp anytime</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={PHONE_TEL}
                onClick={() => trackPhoneCall("footer")}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
                data-testid="footer-call-button"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsApp("footer")}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors"
                data-testid="footer-whatsapp-button"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Company / Legal Info */}
          <div className="space-y-5 lg:col-span-1">
            <a href="/" data-testid="footer-logo">
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                India<span className="text-primary">ICU</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              IndiaICU is India’s premier emergency medical transit and dispatch network. We integrate national ICU, oxygen, and cardiac ambulance infrastructure into a single unified response system to deliver rapid emergency coordination 24/7.
            </p>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Contact us</p>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition-colors">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={PHONE_TEL} onClick={() => trackPhoneCall("footer-brand")} className="hover:text-white transition-colors font-medium">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-medium">
                  WhatsApp Support
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>24/7 Dispatch Support</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "ICU Ambulance Service",
                "Oxygen Ambulance",
                "Basic Ambulance",
                "Intercity ICU Transfer",
                "Dead Body Freezer Van",
                "Dead Body Freezer Box (Home)",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-primary/40 group-hover:w-6 group-hover:bg-primary transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Pricing Policy", href: "/pricing" },
                { label: "Cities We Serve", href: "/#cities" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact / Book", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-blue-500/40 group-hover:w-6 group-hover:bg-blue-400 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Cancellation &amp; Refund Policy", href: "/pricing#cancellation" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                    dangerouslySetInnerHTML={{ __html: `<span class="inline-block h-px w-4 bg-blue-500/40 group-hover:w-6 group-hover:bg-blue-400 transition-all mr-2"></span>${link.label}` }}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-white font-semibold block mb-1">Operational Disclosure</span>
                IndiaICU is an independent digital dispatch and transit coordination network. We integrate certified independent ambulance providers into a single emergency response system. Medical transit operations, fleet assets, and clinical personnel are managed by authorized regional partners under centralized network coordination.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              &copy; {CURRENT_YEAR} IndiaICU. All rights reserved. | Emergency Medical Transit Infrastructure
            </p>
            <div className="flex items-center gap-4">
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/pricing#cancellation" className="hover:text-white transition-colors">Cancellation</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href={PHONE_TEL} className="text-primary font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
