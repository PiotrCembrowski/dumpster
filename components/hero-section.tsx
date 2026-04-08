import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dumpster.jpg"
          alt="Roll off dumpster rental for construction and residential cleanup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Top Label */}
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
          Fast & Reliable Dumpster Rental Services
        </p>

        {/* SEO H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
          <span className="block text-balance">Dumpster Rental Near You</span>
          <span className="block mt-2 text-primary">
            Fast Delivery. Affordable Pricing.
          </span>
        </h1>

        {/* SEO Description */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
          Affordable roll off dumpster rentals for construction, home cleanouts,
          renovations, and commercial projects. Same-day dumpster delivery
          available with flexible rental periods.
        </p>

        {/* CTA Buttons */}
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
            <Link href="/#sizes">View Dumpster Sizes</Link>
          </Button>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              Same Day
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Dumpster Delivery
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              10-40 Yard
            </p>
            <p className="text-sm text-muted-foreground mt-1">Dumpster Sizes</p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              Affordable
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Transparent Pricing
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">Local</p>
            <p className="text-sm text-muted-foreground mt-1">Service Areas</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
}
