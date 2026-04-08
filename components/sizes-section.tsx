import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> seo-optimization
import { Check } from "lucide-react";

const services = [
  {
<<<<<<< HEAD
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
=======
    name: "10 Yard Dumpster",
    dimensions: "12' x 8' x 3.5'",
    price: "299",
    ideal: "Small cleanouts, garage cleanups, bathroom renovations",
    features: [
      "Holds 10 cubic yards",
      "Up to 7 days rental",
      "2 ton weight limit",
      "Same-day dumpster delivery",
    ],
  },
  {
    name: "20 Yard Dumpster",
    dimensions: "22' x 8' x 4.5'",
    price: "399",
    ideal: "Kitchen renovations, roofing projects, medium cleanouts",
    popular: true,
    features: [
      "Holds 20 cubic yards",
      "Up to 10 days rental",
      "4 ton weight limit",
      "Same-day dumpster delivery",
    ],
  },
  {
    name: "30 Yard Dumpster",
    dimensions: "22' x 8' x 6'",
    price: "499",
    ideal: "Construction projects, large cleanouts, remodels",
>>>>>>> seo-optimization
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
<<<<<<< HEAD
=======
  {
    name: "40 Yard Dumpster",
    dimensions: "22' x 8' x 8'",
    price: "599",
    ideal: "Commercial construction, demolition, large projects",
    features: [
      "Holds 40 cubic yards",
      "Up to 14 days rental",
      "8 ton weight limit",
      "Commercial priority support",
    ],
  },
>>>>>>> seo-optimization
];

export function SizesSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
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
=======
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Dumpster Rental Sizes
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Roll Off Dumpster Sizes for Every Project
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose from 10, 20, 30, and 40 yard dumpster rentals. Perfect for
            residential cleanouts, construction projects, demolition, and
            commercial waste removal.
          </p>
        </div>

        {/* Sizes */}
>>>>>>> seo-optimization
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
<<<<<<< HEAD
              {service.popular && (
=======
              {/* Popular Badge */}
              {size.popular && (
>>>>>>> seo-optimization
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

<<<<<<< HEAD
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {service.dimensions}
=======
              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {size.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {size.dimensions}
>>>>>>> seo-optimization
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-sm text-muted-foreground">
                  Starting at
                </span>
<<<<<<< HEAD

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">
                    {service.price === "Custom"
                      ? "Custom"
                      : `$${service.price}`}
=======
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">
                    ${size.price}
>>>>>>> seo-optimization
                  </span>
                </div>
              </div>

              {/* Ideal */}
              <p className="text-sm text-muted-foreground text-center mb-6 pb-6 border-b border-border">
<<<<<<< HEAD
                {service.ideal}
=======
                Ideal for: {size.ideal}
>>>>>>> seo-optimization
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className="w-full"
                variant={service.popular ? "default" : "outline"}
                asChild
              >
<<<<<<< HEAD
                <Link href="/contact">Get Quote</Link>
=======
                Get Dumpster Quote
>>>>>>> seo-optimization
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom SEO Content */}
<<<<<<< HEAD
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            We provide parking lot striping, ADA compliance striping, fire lane
            striping, warehouse striping, and commercial pavement markings for
            businesses across multiple cities.
=======
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            Our roll off dumpster rentals are available for residential,
            commercial, and construction projects. We provide fast delivery,
            flexible rental periods, and affordable pricing for all dumpster
            sizes.
>>>>>>> seo-optimization
          </p>
        </div>
      </div>
    </section>
  );
}
