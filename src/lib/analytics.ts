import React from "react";

/**
 * IndiaICU — GA4 + Google Ads Conversion Tracking
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ← Replace with your GA4 Measurement ID if needed
export const GOOGLE_ADS_ID = "AW-18212173511"; 

const CONVERSION_LABELS = {
  /** Primary conversion — phone calls are the highest-value lead action */
  phoneCall: "_xvjCKaBw78cEMftnuxD", 
  whatsApp: "REPLACE_WITH_WA_LABEL", // ← Replace this when you generate a WhatsApp label
  formSubmit: "REPLACE_WITH_FORM_LABEL", 
} as const;

// ─── Safe gtag wrapper ────────────────────────────────────────────────────────

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

// ─── Event helpers (Optimized for Next.js Redirects) ──────────────────────────

/**
 * Track a phone CTA click.
 * @param e - The React MouseEvent passed from the link click
 * @param url - The dialer destination string (e.g., 'tel:+918901434774')
 * @param location - Where on the page the click happened — e.g. "hero", "navbar", "sticky-bar"
 */
export function trackPhoneCall(
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string,
  location: string
): void {
  // 1. Prevent instant navigation so Google has time to log the conversion
  if (e) e.preventDefault();

  let callbackFired = false;
  const navigateFallback = () => {
    if (!callbackFired) {
      callbackFired = true;
      window.location.href = url;
    }
  };

  // Set up an absolute fail-safe timeout (500ms) so the link never breaks if Google lags
  const timeoutId = setTimeout(navigateFallback, 500);

  // 2. Fire Google Ads conversion event with your real-world calculated margin
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.phoneCall}`,
    value: 323,
    currency: "INR",
    transaction_id: `call_${Date.now()}`,
    event_callback: () => {
      clearTimeout(timeoutId);
      navigateFallback();
    }
  });

  // 3. Keep parallel tracking alive in GA4 analytics dashboard
  gtag("event", "phone_call_click", {
    event_category: "CTA",
    event_label: location,
    value: 1,
  });
}

/**
 * Track a WhatsApp CTA click.
 * @param e - The React MouseEvent passed from the link click
 * @param url - The destination chat string (e.g., 'https://wa.me/...')
 * @param location - Where on the page the click happened
 */
export function trackWhatsApp(
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string,
  location: string
): void {
  if (e) e.preventDefault();

  let callbackFired = false;
  const navigateFallback = () => {
    if (!callbackFired) {
      callbackFired = true;
      window.open(url, "_blank", "noreferrer");
    }
  };

  const timeoutId = setTimeout(navigateFallback, 500);

  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.whatsApp}`,
    value: 323, 
    currency: "INR",
    transaction_id: `wa_${Date.now()}`,
    event_callback: () => {
      clearTimeout(timeoutId);
      navigateFallback();
    }
  });

  gtag("event", "whatsapp_click", {
    event_category: "CTA",
    event_label: location,
    value: 1,
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
    value: 323,
    currency: "INR",
    transaction_id: `form_${Date.now()}`,
  });
}
