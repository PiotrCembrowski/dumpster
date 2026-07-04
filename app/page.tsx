import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SizesSection } from "@/components/sizes-section";
import { ProcessSection } from "@/components/process-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Rapid Dumpster Rental | Same-Day Roll Off Dumpsters From $269",
  description:
    "Roll off dumpster rental from $269 with same-day delivery. 10, 20, 30 & 40 yard dumpsters for cleanouts, roofing, construction, and demolition. No hidden fees.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <SizesSection />
      <ProcessSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
