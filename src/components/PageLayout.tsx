import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative pb-16 md:pb-0">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
      <FloatingWhatsApp />
    </div>
  );
}
