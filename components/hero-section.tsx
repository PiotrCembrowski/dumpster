import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
=======
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
>>>>>>> seo-optimization

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
<<<<<<< HEAD
          src="/images/hero-parking.jpg"
          alt="Professional parking lot striping services"
=======
          src="/images/hero-dumpster.jpg"
          alt="Roll off dumpster rental for construction and residential cleanup"
>>>>>>> seo-optimization
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
<<<<<<< HEAD
          Professional Parking Lot Striping Services
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
          <span className="block text-balance">Parking Lot Striping</span>
          <span className="block mt-2 text-primary">
            Done Right. Done Fast.
=======
          Fast & Reliable Dumpster Rental Services
        </p>

        {/* SEO H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
          <span className="block text-balance">Dumpster Rental Near You</span>
          <span className="block mt-2 text-primary">
            Fast Delivery. Affordable Pricing.
>>>>>>> seo-optimization
          </span>
        </h1>

        {/* SEO Description */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
<<<<<<< HEAD
          Professional parking lot striping, ADA compliant markings, fire lane
          striping, and pavement markings for commercial properties. Fast
          turnaround and competitive pricing across multiple cities.
=======
          Affordable roll off dumpster rentals for construction, home cleanouts,
          renovations, and commercial projects. Same-day dumpster delivery
          available with flexible rental periods.
>>>>>>> seo-optimization
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8" asChild>
            <Link href="/contact">
<<<<<<< HEAD
              Get Free Striping Quote
=======
              Get Free Dumpster Quote
>>>>>>> seo-optimization
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-base px-8"
            asChild
          >
<<<<<<< HEAD
            <Link href="/services">View Striping Services</Link>
          </Button>
        </div>

        {/* Service Areas */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Tulsa • Albuquerque • Omaha • Boise • Wichita</span>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground mt-1">
              Years Experience
=======
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
>>>>>>> seo-optimization
            </p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
<<<<<<< HEAD
              1,000+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Parking Lots Completed
            </p>
=======
              10-40 Yard
            </p>
            <p className="text-sm text-muted-foreground mt-1">Dumpster Sizes</p>
>>>>>>> seo-optimization
          </div>

          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
<<<<<<< HEAD
              24-48hr
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Fast Turnaround
=======
              Affordable
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Transparent Pricing
>>>>>>> seo-optimization
            </p>
          </div>

          <div>
<<<<<<< HEAD
            <p className="text-3xl sm:text-4xl font-bold text-primary">ADA</p>
            <p className="text-sm text-muted-foreground mt-1">
              Compliant Striping
            </p>
=======
            <p className="text-3xl sm:text-4xl font-bold text-primary">Local</p>
            <p className="text-sm text-muted-foreground mt-1">Service Areas</p>
>>>>>>> seo-optimization
          </div>
        </div>

        {/* Phone CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-primary font-medium"
          >
            <Phone className="h-4 w-4" />
            Call Now For Fast Quote
          </a>
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
