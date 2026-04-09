import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Truck } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="get-quote"
      className="py-24 lg:py-32 bg-primary relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6 text-balance">
          Affordable Dumpster Rental Near You — Fast Delivery Available
        </h2>

        {/* Subtext */}
        <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Rent a roll-off dumpster for home cleanouts, construction debris,
          roofing projects, yard waste, and commercial jobs. We offer same-day
          dumpster delivery, flexible rental periods, and competitive pricing
          for residential and commercial customers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8 shadow-lg"
          >
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

        {/* Trust Signals */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            Same-Day Delivery Available
          </div>

          <div>Flexible Rental Periods</div>
          <div>Affordable Local Pricing</div>
          <div>Residential & Commercial</div>
        </div>

        {/* SEO Supporting Content */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Our roll-off dumpster rentals are ideal for home renovations,
            construction sites, demolition projects, garage cleanouts, yard
            waste removal, and commercial debris. Choose from multiple dumpster
            sizes including 10-yard, 20-yard, 30-yard, and 40-yard dumpsters
            with fast delivery and reliable pickup.
          </p>
        </div>
      </div>
    </section>
  );
}
