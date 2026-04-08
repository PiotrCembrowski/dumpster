import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6 text-balance">
          Get Your Dumpster Rental Delivered Today
        </h2>

        {/* Subtext */}
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Need a roll off dumpster for construction, home cleanouts, or
          commercial projects? Get a fast, affordable dumpster rental with
          same-day delivery and flexible rental periods.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-base px-8">
            Get Free Dumpster Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Same-Day Delivery
          </Button>
        </div>

        {/* SEO Supporting Text */}
        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-primary-foreground/70 text-sm">
            We provide residential dumpster rentals, construction dumpsters,
            demolition dumpsters, and commercial roll off dumpster rentals with
            fast delivery and reliable pickup.
          </p>
        </div>
      </div>
    </section>
  );
}
