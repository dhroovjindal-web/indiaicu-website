/**
 * IndiaICU — GA4 + Google Ads Conversion Tracking
 *
 * ── SETUP (3 steps) ──────────────────────────────────────────────────────────
 *
 * 1. GA4 Measurement ID
 *    analytics.google.com → Admin → Data Streams → Web → Measurement ID
 *    Format: G-XXXXXXXXXX
 *    Replace GA4_MEASUREMENT_ID below AND in index.html (2 places).
 *
 * 2. Google Ads Account ID
 *    ads.google.com → Goals → Conversions → any conversion → Tag setup → "AW-..."
 *    Format: AW-XXXXXXXXX
 *    Replace GOOGLE_ADS_ID below AND in index.html (1 place).
 *
 * 3. Conversion Labels  (one per conversion action you create in Google Ads)
 *    ads.google.com → Goals → Conversions → [action] → Tag setup → copy label
 *    Replace each REPLACE_WITH_xxx_LABEL string below.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ← replace
export const GOOGLE_ADS_ID = "AW-XXXXXXXXX"; // ← replace

const CONVERSION_LABELS = {
  /** Primary conversion — phone calls are the highest-value lead action */
  phoneCall: "REPLACE_WITH_CALL_LABEL", // ← replace
  whatsApp: "REPLACE_WITH_WA_LABEL", // ← replace
  formSubmit: "REPLACE_WITH_FORM_LABEL", // ← replace
} as const;

// ─── Safe gtag wrapper ────────────────────────────────────────────────────────
// No-ops gracefully in dev / before GA4 script loads. Never throws.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

// ─── Event helpers ────────────────────────────────────────────────────────────

/**
 * Track a phone CTA click.
 * @param location  Where on the page — e.g. "hero", "navbar", "sticky-bar", "contact"
 */
export function trackPhoneCall(location: string): void {
  gtag("event", "phone_call_click", {
    event_category: "CTA",
    event_label: location,
    value: 1,
  });

  // Google Ads primary conversion (phone call = highest intent)
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.phoneCall}`,
    value: 1.0,
    currency: "INR",
    transaction_id: `call_${Date.now()}`,
  });
}

/**
 * Track a WhatsApp CTA click.
 * @param location  Where on the page — e.g. "hero", "navbar", "sticky-bar", "floating", "contact"
 */
export function trackWhatsApp(location: string): void {
  gtag("event", "whatsapp_click", {
    event_category: "CTA",
    event_label: location,
    value: 1,
  });

  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.whatsApp}`,
    value: 1.0,
    currency: "INR",
    transaction_id: `wa_${Date.now()}`,
  });
}

/**
 * Track contact form submission (opens WhatsApp with pre-filled message).
 */
export function trackFormSubmit(): void {
  gtag("event", "contact_form_submit", {
    event_category: "Lead",
    event_label: "Contact Form",
    value: 1,
  });

  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.formSubmit}`,
    value: 1.0,
    currency: "INR",
    transaction_id: `form_${Date.now()}`,
  });
}
