import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  HardHat,
  Hammer,
  Leaf,
  Recycle,
  Check,
  ArrowRight,
  Phone,
  ChevronRight,
} from "lucide-react";

// ─── META ─────────────────────────────────────────────────────────────────────
// FIX: Added Metadata type. Removed `keywords` (Google ignores since 2009).
// FIX: Title updated with price anchor for CTR improvement.
export const metadata: Metadata = {
  title:
    "Dumpster Rental Services | From $269 · Residential, Commercial & Construction",
  description:
    "Roll off dumpster rental services starting at $269. Residential, commercial, construction, and demolition dumpsters with same-day delivery. No hidden fees.",
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.rapiddumpsterrental.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.rapiddumpsterrental.site/services",
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Home,
    title: "Residential Dumpster Rental",
    slug: "residential",
    description:
      "Affordable dumpsters for home cleanouts, renovations, garage cleanups, moving, and landscaping. Driveway-friendly containers delivered fast with flexible rental periods and all-in pricing.",
    image: "/images/residential-service.jpg",
    alt: "Roll off dumpster in residential driveway for home cleanout and renovation",
    features: [
      "Driveway-friendly sizes (10–30 yard)",
      "7 to 14-day rental periods",
      "Same-day delivery available",
      "All-in pricing — no hidden fees",
      "Weight limits up to 6 tons",
    ],
    idealFor: [
      "Home renovations and remodels",
      "Garage and attic cleanouts",
      "Moving and downsizing",
      "Estate cleanouts",
      "Yard cleanup and landscaping",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Dumpster Rental",
    slug: "commercial",
    description:
      "Reliable roll off dumpsters for offices, retail stores, restaurants, and property management companies. Scheduled pickups, bulk pricing, and flexible rental timelines for ongoing commercial needs.",
    image: "/images/commercial-service.jpg",
    alt: "Commercial dumpster rental at office building and retail construction site",
    features: [
      "Multiple dumpster sizes available",
      "Scheduled recurring pickup options",
      "Contractor and bulk pricing",
      "Same-day and next-day delivery",
      "Extended rental periods",
    ],
    idealFor: [
      "Office and retail cleanouts",
      "Restaurant remodels",
      "Warehouse and storage cleanup",
      "Property management projects",
      "Multi-unit residential work",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Dumpster Rental",
    slug: "construction",
    description:
      "Heavy-duty dumpsters built for construction debris — roofing shingles, drywall, framing, concrete, and job site waste. High weight capacity with same-day delivery and flexible scheduling.",
    image: "/images/delivery-service.jpg",
    alt: "Construction dumpster on job site for roofing and building debris removal",
    features: [
      "High weight capacity (up to 8 tons)",
      "Construction-grade containers",
      "Same-day job site delivery",
      "Flexible scheduling for active sites",
      "20, 30, and 40 yard sizes",
    ],
    idealFor: [
      "New construction debris",
      "Roofing tear-offs and shingles",
      "Remodeling and gut jobs",
      "Contractor site cleanup",
      "Site preparation and grading",
    ],
  },
  {
    icon: Hammer,
    title: "Demolition Dumpster Rental",
    slug: "demolition",
    description:
      "Large-capacity dumpsters for heavy demolition materials — concrete, brick, wood framing, metal, and mixed debris. Extended rental periods available for multi-phase demolition projects.",
    image: "/images/services-hero.jpg",
    alt: "40 yard demolition dumpster for concrete removal and building tear-down debris",
    features: [
      "30 and 40 yard containers",
      "Heavy debris approved",
      "Up to 8-ton weight allowance",
      "Extended rental periods",
      "Fast pickup on completion",
    ],
    idealFor: [
      "Building and structure demolition",
      "Interior gut and strip-out",
      "Deck and patio removal",
      "Concrete and brick disposal",
      "Large-scale commercial cleanouts",
    ],
  },
];

const additionalServices = [
  {
    icon: Leaf,
    title: "Yard Waste Dumpster Rental",
    description:
      "Dumpsters for landscaping debris, brush, branches, leaves, and outdoor cleanup. 10 and 20 yard containers are ideal for yard waste — lighter materials fill volume faster than weight.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Disposal",
    description:
      "Responsible dumpster rental with recycling options for concrete, metal, and clean wood. We divert recyclable materials from landfill where possible — ask about recycling availability when you book.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="pt-16">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="bg-white border-b border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
              <li className="text-gray-900 font-medium" aria-current="page">
                Services
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0">
            <Image
              src="/images/services-hero.jpg"
              alt="Roll off dumpster rental services for residential and construction projects"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/90" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary uppercase tracking-widest text-sm mb-4 font-medium">
                Dumpster Rental Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Roll Off Dumpster Rentals for Every Project
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Residential, commercial, construction, and demolition dumpsters
                starting at $269. Same-day delivery available — call before noon
                and we'll have a container at your site today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* FIX: Was href="/#contact" — updated to /contact */}
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Free Dumpster Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* FIX: Was tel:1-800-555-DUMP — standardised */}
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+18005553867">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (800) 555-3867
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service detail sections */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Dumpster Rental Services — Residential, Commercial &
                Construction
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every service includes delivery, pickup, and standard disposal.
                All-in pricing with no fuel surcharges or hidden fees.
              </p>
            </div>

            <div className="space-y-24">
              {/* FIX: `index` was declared but never used for alternating layout.
                  Now odd-index cards flip to text-left / image-right. */}
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div
                    className={
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <service.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-foreground">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-foreground">
                          Ideal For
                        </h4>
                        <ul className="space-y-2">
                          {service.idealFor.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* FIX: All CTAs changed from /#contact to /contact.
                        Phone CTA added to each service card. */}
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link href="/contact">
                          Request Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href="tel:+18005553867"
                          className="flex items-center gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional services */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">
              Additional Dumpster Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 border border-border rounded-lg bg-card text-left"
                >
                  <service.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO section with city links — no Dallas/Tulsa per instruction */}
        <section className="py-16 bg-card border-t border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">
                  Same-day dumpster rental across five states
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We provide 10, 20, 30, and 40 yard roll off dumpsters for
                  residential cleanouts, roofing projects, construction debris,
                  demolition waste, yard cleanup, and commercial jobs. All-in
                  pricing from $269 with same-day delivery available.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">
                  Serving these areas
                </h2>
                <ul className="space-y-2">
                  {[
                    {
                      label: "Bartlesville, OK",
                      href: "/dumpster-rental/bartlesville-ok",
                    },
                    {
                      label: "Muskogee, OK",
                      href: "/dumpster-rental/muskogee-ok",
                    },
                    {
                      label: "Scottsbluff, NE",
                      href: "/dumpster-rental/scottsbluff-ne",
                    },
                    { label: "Pierre, SD", href: "/dumpster-rental/pierre-sd" },
                    {
                      label: "Jamestown, ND",
                      href: "/dumpster-rental/jamestown-nd",
                    },
                  ].map((city) => (
                    <li key={city.href}>
                      <Link
                        href={city.href}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
                        Dumpster rental {city.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/locations"
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-1"
                    >
                      <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
                      View all locations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-center">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Need a Dumpster Today? From $269.
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Call before noon for same-day delivery. No hidden fees, no
              obligation — just a fast quote and a dumpster when you need it.
            </p>
            {/* FIX: Added phone CTA — original had only one button */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+18005553867">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (800) 555-3867
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
