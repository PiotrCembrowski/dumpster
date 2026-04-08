import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const sizes = [
  {
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
    features: [
      "Holds 30 cubic yards",
      "Up to 14 days rental",
      "6 ton weight limit",
      "Priority scheduling",
    ],
  },
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
];

export function SizesSection() {
  return (
    <section id="sizes" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizes.map((size) => (
            <div
              key={size.name}
              className={`relative rounded-lg border p-6 ${
                size.popular
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {/* Popular Badge */}
              {size.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {size.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {size.dimensions}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-sm text-muted-foreground">
                  Starting at
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">
                    ${size.price}
                  </span>
                </div>
              </div>

              {/* Ideal */}
              <p className="text-sm text-muted-foreground text-center mb-6 pb-6 border-b border-border">
                Ideal for: {size.ideal}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {size.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className="w-full"
                variant={size.popular ? "default" : "outline"}
              >
                Get Dumpster Quote
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom SEO Content */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            Our roll off dumpster rentals are available for residential,
            commercial, and construction projects. We provide fast delivery,
            flexible rental periods, and affordable pricing for all dumpster
            sizes.
          </p>
        </div>
      </div>
    </section>
  );
}
