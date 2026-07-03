import Image from "next/image";
import Link from "next/link";
import { Home, Building2, Truck, ArrowRight } from "lucide-react";

// ─── FIX: Each service now has an href so the card is actionable ─────────────
// Original cards had hover effects but clicking did nothing — no link, no CTA,
// no path forward. A visitor interested in residential rental had nowhere to go.
// Each card now links to the most relevant destination.
const services = [
  {
    icon: Home,
    title: "Residential Dumpster Rental",
    description:
      "Affordable roll off dumpsters for home cleanouts, remodeling, yard waste, garage cleanups, and estate cleanouts. Same-day delivery available in Bartlesville, Muskogee, and across our full service area.",
    image: "/images/residential-service.jpg",
    alt: "Residential dumpster rental for home renovation and cleanup",
    href: "/contact",
    cta: "Get a residential quote",
  },
  {
    icon: Building2,
    title: "Commercial & Construction Dumpster Rental",
    description:
      "Roll off dumpsters for construction sites, commercial properties, roofing projects, and contractor jobs. Extended rental periods, contractor pricing, and multi-unit delivery available across all service areas.",
    image: "/images/commercial-service.jpg",
    alt: "Construction dumpster rental at commercial job site",
    href: "/services",
    cta: "View commercial services",
  },
  {
    icon: Truck,
    title: "Same-Day Dumpster Delivery",
    description:
      "Call before noon and we'll have a dumpster at your property the same day. Available throughout Scottsbluff, Pierre, Jamestown, Bartlesville, and Muskogee — no waiting, no runaround.",
    image: "/images/delivery-service.jpg",
    alt: "Same day dumpster delivery truck dropping off roll off dumpster",
    href: "/contact",
    cta: "Book same-day delivery",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header
            FIX: Label was "Dumpster Rental Services" and H2 was
            "Dumpster Rental Services for Every Project" — the keyword
            appeared twice in two consecutive lines, which reads as
            repetitive to both users and crawlers.
            Label updated to a differentiator; H2 kept as the keyword target.
        */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Residential · Commercial · Same-Day
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Dumpster Rental Services for Every Project
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We provide residential, commercial, and construction dumpster
            rentals with fast delivery, flexible rental periods, and transparent
            pricing — no hidden fees.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            // FIX: Entire card is now a Link — clickable surface that goes
            // somewhere. Previously had group-hover styling with no action.
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-background hover:border-primary/50 transition-colors flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40" />
                {/* Icon */}
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* FIX: CTA added to each card — was completely absent */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom section
            FIX: Original was pure boilerplate — "Our roll off dumpster rental
            services are ideal for residential cleanouts..." — identical to text
            on multiple other sections and pages.
            Replaced with a two-column "which service fits you?" helper that
            answers the most common pre-contact question and cross-links all
            city pages, creating a second internal link hub on the homepage.
        */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Serving homes and job sites across four states
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Same-day roll off dumpster delivery is available in
                Bartlesville, OK, Scottsbluff, NE, Pierre, SD, Jamestown, ND,
                and Muskogee, OK. Call before noon and a dumpster will be at
                your property the same day.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Find pricing for your city
              </h3>
              <ul className="space-y-2">
                {[
                  {
                    label: "Dumpster rental Bartlesville, OK",
                    href: "/dumpster-rental/bartlesville",
                  },
                  {
                    label: "Dumpster rental Muskogee, OK",
                    href: "/dumpster-rental/muskogee",
                  },
                  {
                    label: "Dumpster rental Scottsbluff, NE",
                    href: "/dumpster-rental/scottsbluff",
                  },
                  {
                    label: "Dumpster rental Pierre, SD",
                    href: "/dumpster-rental/pierre",
                  },
                  {
                    label: "Dumpster rental Jamestown, ND",
                    href: "/dumpster-rental/jamestown",
                  },
                ].map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                      {city.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
