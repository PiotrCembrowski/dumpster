import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import Link from "next/link";

// ─── FIX: Prices updated to reflect lowest market starting point ($269)
// Our smallest markets (Pierre SD, Jamestown ND, Scottsbluff NE) start at
// $269. Showing $299 as the floor on the homepage turns away visitors
// from those markets before they ever reach the city page.
//
// FIX: 10 yard dimensions corrected from "12' x 8' x 3.5'" to "14' x 8' x 3.5'"
// All city pages use 14' — this was an inconsistency that confused visitors
// and sent a mixed content signal to crawlers comparing the homepage to city pages.
const sizes = [
  {
    name: "10 Yard Dumpster",
    dimensions: "14′ × 8′ × 3.5′",
    price: "269",
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
    dimensions: "22′ × 8′ × 4.5′",
    price: "369",
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
    dimensions: "22′ × 8′ × 6′",
    price: "469",
    ideal: "Construction projects, large cleanouts, full home remodels",
    features: [
      "Holds 30 cubic yards",
      "Up to 14 days rental",
      "6 ton weight limit",
      "Priority scheduling",
    ],
  },
  {
    name: "40 Yard Dumpster",
    dimensions: "22′ × 8′ × 8′",
    price: "569",
    ideal: "Commercial construction, demolition, large-scale projects",
    features: [
      "Holds 40 cubic yards",
      "Up to 14 days rental",
      "8 ton weight limit",
      "Commercial priority support",
    ],
  },
];

// City links shown at the bottom of the section — internal links from the
// homepage to all city pages pass authority and help Google understand
// the site's geographic scope.
const cities = [
  { label: "Bartlesville, OK", href: "/dumpster-rental/bartlesville-ok" },
  { label: "Muskogee, OK", href: "/dumpster-rental/muskogee-ok" },
  { label: "Scottsbluff, NE", href: "/dumpster-rental/scottsbluff-ne" },
  { label: "Pierre, SD", href: "/dumpster-rental/pierre-sd" },
  { label: "Jamestown, ND", href: "/dumpster-rental/jamestown-nd" },
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
            Choose from 10, 20, 30, and 40 yard roll off dumpsters. Prices start
            at <strong className="text-foreground">$269</strong> with same-day
            delivery available. Not sure which size? Call us and we'll recommend
            the right fit.
          </p>
        </div>

        {/* Size cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sizes.map((size) => (
            <div
              key={size.name}
              className={`relative rounded-lg border p-6 flex flex-col ${
                size.popular
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {/* Popular badge */}
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

              {/* Ideal use */}
              <p className="text-sm text-muted-foreground text-center mb-6 pb-6 border-b border-border">
                Ideal for: {size.ideal}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-1">
                {size.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs
                  FIX: Original buttons were dead — no href, no asChild, no Link.
                  Clicking "Get Dumpster Quote" did nothing.
                  Now: primary CTA links to /contact, secondary is a phone call.
              */}
              <div className="space-y-2 mt-auto">
                <Button
                  className="w-full"
                  variant={size.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">Get Dumpster Quote</Link>
                </Button>
                <a
                  href="tel:+18005553867"
                  className="flex items-center justify-center gap-1.5 text-sm text-primary hover:underline py-1"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call (800) 555-3867
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Size guide helper
            FIX: Original bottom paragraph was generic boilerplate.
            Replaced with a concrete "not sure?" helper block that:
            - answers the most common pre-booking question
            - links to /contact for quote
            - cross-links all 7 city pages (homepage internal linking)
        */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Not Sure Which Size You Need?
          </h3>
          <p className="text-muted-foreground mb-6">
            Call us before you book and we'll size it for your project. Most
            home cleanouts use a 20 yard. Roofing tear-offs and kitchen remodels
            fit a 20 or 30 yard. Demolition and commercial sites typically need
            a 40 yard. When in doubt, going one size larger saves you from a
            second delivery fee.
          </p>
          <Button asChild>
            <Link href="/contact">Get a Free Sizing Recommendation</Link>
          </Button>
        </div>

        {/* City links — internal linking from homepage to all city pages */}
        <div className="mt-12 pt-10 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-5">
            Same-day dumpster delivery available in:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
              >
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
