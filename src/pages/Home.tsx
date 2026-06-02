import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const ServicesSection = lazy(() => import("@/components/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const HowItWorks = lazy(() => import("@/components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const IntercitySection = lazy(() => import("@/components/IntercitySection").then(m => ({ default: m.IntercitySection })));
const CitiesSection = lazy(() => import("@/components/CitiesSection").then(m => ({ default: m.CitiesSection })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

function SectionFallback() {
  return <div className="py-24 bg-background" aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative pb-16 md:pb-0">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <IntercitySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CitiesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <StickyMobileCTA />
      <FloatingWhatsApp />
    </div>
  );
}
