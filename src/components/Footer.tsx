import { Phone, MapPin, Shield, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "8901434774";
const PHONE_DISPLAY = "89014 34774";
const PHONE_TEL = `tel:+91${PHONE_NUMBER}`;
const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}`;
const CURRENT_YEAR = new Date().getFullYear();

const services = [
  { label: "ICU Ambulance Service", href: "#services" },
  { label: "Oxygen Ambulance", href: "#services" },
  { label: "Basic Ambulance", href: "#services" },
  { label: "Intercity ICU Transfer", href: "#services" },
  { label: "Dead Body Freezer Van", href: "#services" },
  { label: "Dead Body Freezer Box (Home)", href: "#services" },
];

const delhiNcrAreas = [
  "Ambulance in Delhi",
  "Ambulance in Noida",
  "Ambulance in Gurugram",
  "Ambulance in Faridabad",
  "Ambulance in Ghaziabad",
  "Ambulance in Greater Noida",
  "Ambulance in all other parts of NCR as well",
];

const panIndiaLinks = [
  "Ambulance in Mumbai",
  "Ambulance in Bengaluru",
  "Ambulance in Hyderabad",
  "Ambulance in Lucknow",
  "Ambulance in Jaipur",
  "Ambulance in Patna",
];

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

          {/* Brand column */}
          <div className="space-y-5 lg:col-span-1">
            <a href="#" data-testid="footer-logo">
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                India<span className="text-primary">ICU</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              IndiaICU provides 24/7 emergency ICU ambulance services across India. Staffed by trained paramedics and equipped with advanced life-support systems — ventilators, oxygen, defibrillators, and cardiac monitors.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Service-area business · Delhi NCR & PAN India</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={PHONE_TEL} className="hover:text-white transition-colors font-medium">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <FaWhatsapp className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-medium">
                  WhatsApp Support
                </a>
              </div>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["24/7 Support", "PAN India", "ICU Trained"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300"
                >
                  <Shield className="h-3 w-3" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                    data-testid={`footer-link-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="h-px w-4 bg-primary/40 group-hover:w-6 group-hover:bg-primary transition-all" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Delhi NCR column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Delhi NCR Coverage
            </h4>
            <ul className="space-y-3">
              {delhiNcrAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#cities"
                    className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                    data-testid={`footer-city-${area.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="h-px w-4 bg-blue-500/40 group-hover:w-6 group-hover:bg-blue-400 transition-all" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PAN India column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              PAN India Network
            </h4>
            <ul className="space-y-3">
              {panIndiaLinks.map((city) => (
                <li key={city}>
                  <a
                    href="#cities"
                    className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                    data-testid={`footer-city-${city.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="h-px w-4 bg-blue-500/40 group-hover:w-6 group-hover:bg-blue-400 transition-all" />
                    {city}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-card border border-border/60">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-white font-semibold block mb-1">Serving 50+ cities across India</span>
                ICU, oxygen, ventilator, and basic ambulance services available in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, and more.
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
              &copy; {CURRENT_YEAR} IndiaICU Emergency Ambulance Services. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              Emergency ICU Ambulance · PAN India · 24/7 Support ·{" "}
              <a href={PHONE_TEL} className="text-primary font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
