import React from "react";

export const GA4_MEASUREMENT_ID = "G-YHQWFDJ9NV"; 
export const GOOGLE_ADS_ID = "AW-18212173511"; 

const CONVERSION_LABELS = {
  phoneCall: "hJobCLuJp9QcEMftnuxD",
  whatsApp: "j32WCL6Jp9QcEMftnuxD",
  formSubmit: "vFErCMGJp9QcEMftnuxD",
} as const;

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

/**
 * Track a phone CTA click.
 * Executes synchronously so iOS Safari never blocks the native dialer.
 */
export function trackPhoneCall(
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string,
  location: string
): void {
  // Fire Google Ads conversion
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.phoneCall}`,
    value: 323,
    currency: "INR",
    transaction_id: `call_${Date.now()}`,
  });

  // Track event in GA4
  gtag("event", "phone_call_click", {
    event_category: "CTA",
    event_label: location,
    value: 1,
  });

  // Let browser open tel: natively without preventDefault()
}

/**
 * Track a WhatsApp CTA click.
 */
export function trackWhatsApp(
  e: React.MouseEvent<HTMLAnchorElement>,
  url: string,
  location: string
): void {
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS.whatsApp}`,
    value: 323, 
    currency: "INR",
    transaction_id: `wa_${Date.now()}`,
  });

  gtag("event", "whatsapp_click", {
    event_category: "CTA",
    event_label: location,
    value: 1,
  });
}

/**
 * Track contact form submission.
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