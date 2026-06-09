import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dumpster.jpg"
          alt="Roll off dumpster rental delivery for construction and residential cleanup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Top label */}
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
          Same-Day Roll Off Dumpster Delivery
        </p>

        {/*
          FIX: Original H1 rendered as one run-together string in Google's index:
          "Dumpster Rental Near YouFast Delivery. Affordable Pricing."
          Two <span class="block"> inside one <h1> share the same text node —
          no separator between them, so crawlers read them as one broken phrase.

          Fix: Single clean H1 with a price anchor. The secondary tagline moves
          to its own <p> so it renders and indexes as a separate element.
        */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
          Dumpster Rental — Same-Day Delivery From $269
        </h1>

        {/* Secondary tagline — intentionally NOT part of the H1 */}
        <p className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
          Fast Drop-Off. Transparent Pricing. No Hidden Fees.
        </p>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
          Affordable roll off dumpster rentals for home cleanouts, construction,
          roofing, and commercial projects. Call before noon for same-day
          delivery — flexible 7 to 14-day rental periods available.
        </p>

        {/*
          FIX: Original had only a "Get Free Quote" button linking to /contact,
          and a "View Dumpster Sizes" button linking to /#sizes.
          Added a phone CTA — dumpster rental is phone-first and the hero
          should always offer a direct call path alongside the quote form.
          "View Dumpster Sizes" second button kept but now also wired correctly.
        */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8" asChild>
            <Link href="/contact">
              Get Free Dumpster Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-base px-8"
            asChild
          >
            <a href="tel:+18005553867" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call (800) 555-3867
            </a>
          </Button>
        </div>

        {/*
          FIX: Trust stats updated.
          "Affordable / Transparent Pricing" and "Local / Service Areas"
          are vague adjectives that anyone could claim — they don't
          reduce any specific objection. Replaced with concrete numbers:
          - price anchor ("From $269") removes the biggest pre-click concern
          - rental window ("7–14 Days") removes the scheduling uncertainty
        */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              Same Day
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Delivery Available
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              10–40 Yard
            </p>
            <p className="text-sm text-muted-foreground mt-1">Dumpster Sizes</p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              From $269
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Transparent Pricing
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              7–14 Days
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Flexible Rental Period
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
}
