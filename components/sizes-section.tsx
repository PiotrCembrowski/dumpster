import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const services = [
  {
    name: "Small Parking Lot",
    dimensions: "Up to 25 Spaces",
    price: "450",
    ideal: "Small offices, retail shops, churches",
    features: [
      "Parking stall striping",
      "Directional arrows",
      "Fresh layout repaint",
      "Fast 24-48 hour turnaround",
    ],
  },
  {
    name: "Medium Parking Lot",
    dimensions: "25 - 75 Spaces",
    price: "850",
    ideal: "Retail centers, apartment complexes",
    popular: true,
    features: [
      "Full parking lot striping",
      "ADA handicap markings",
      "Directional arrows",
      "Fire lane markings",
    ],
  },
  {
    name: "Large Parking Lot",
    dimensions: "75 - 150 Spaces",
    price: "1,500",
    ideal: "Warehouses, shopping centers",
    features: [
      "Full lot re-striping",
      "ADA compliance striping",
      "Fire lane striping",
      "Custom markings available",
    ],
  },
  {
    name: "Commercial Projects",
    dimensions: "150+ Spaces",
    price: "Custom",
    ideal: "Industrial & large commercial properties",
    features: [
      "New layout design",
      "Warehouse striping",
      "Loading zone striping",
      "Priority scheduling",
    ],
  },
];

export function SizesSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Parking Lot Striping Pricing
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Parking Lot Striping Services & Pricing
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional parking lot striping pricing based on lot size, layout,
            and project requirements. Free quotes available for all commercial
            properties.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-lg border p-6 ${
                service.popular
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {service.dimensions}
                </p>
              </div>

              <div className="text-center mb-6">
                <span className="text-sm text-muted-foreground">
                  Starting at
                </span>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">
                    {service.price === "Custom"
                      ? "Custom"
                      : `$${service.price}`}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mb-6 pb-6 border-b border-border">
                {service.ideal}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={service.popular ? "default" : "outline"}
                asChild
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom SEO Content */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            We provide parking lot striping, ADA compliance striping, fire lane
            striping, warehouse striping, and commercial pavement markings for
            businesses across multiple cities.
          </p>
        </div>
      </div>
    </section>
  );
}
