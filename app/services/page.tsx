import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

export const metadata = {
  title:
    "Dumpster Rental Services | Residential, Commercial & Construction Dumpsters",
  description:
    "Affordable dumpster rental services for residential, commercial, construction and demolition projects. Same-day roll off dumpster delivery available.",
  keywords: [
    "dumpster rental",
    "roll off dumpster rental",
    "construction dumpster",
    "residential dumpster rental",
    "commercial dumpster rental",
    "demolition dumpster",
    "yard waste dumpster",
    "same day dumpster delivery",
  ],
};

const services = [
  {
    icon: Home,
    title: "Residential Dumpster Rental",
    slug: "residential",
    description:
      "Affordable residential dumpster rentals for home cleanouts, renovations, moving, and landscaping projects. Convenient driveway-friendly dumpsters delivered fast.",
    image: "/images/residential-service.jpg",
    features: [
      "Driveway-friendly dumpster sizes",
      "Flexible rental periods",
      "Fast delivery & pickup",
      "Clean well-maintained dumpsters",
      "Affordable flat-rate pricing",
    ],
    idealFor: [
      "Home renovations",
      "Garage cleanouts",
      "Moving & decluttering",
      "Estate cleanouts",
      "Yard cleanup projects",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Dumpster Rental",
    slug: "commercial",
    description:
      "Reliable commercial dumpster rental services for offices, retail stores, restaurants, and property management companies.",
    image: "/images/commercial-service.jpg",
    features: [
      "Multiple dumpster sizes",
      "Scheduled pickup available",
      "Bulk pricing discounts",
      "Fast delivery options",
      "Flexible rental periods",
    ],
    idealFor: [
      "Office cleanouts",
      "Retail renovations",
      "Restaurant remodels",
      "Warehouse cleanup",
      "Property management",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Dumpster Rental",
    slug: "construction",
    description:
      "Heavy-duty construction dumpsters designed for construction debris, roofing materials, drywall, and job site waste.",
    image: "/images/delivery-service.jpg",
    features: [
      "High weight capacity",
      "Construction-grade dumpsters",
      "Same-day delivery",
      "Flexible scheduling",
      "Multiple dumpster sizes",
    ],
    idealFor: [
      "New construction",
      "Roofing projects",
      "Remodeling jobs",
      "Contractor cleanup",
      "Site preparation",
    ],
  },
  {
    icon: Hammer,
    title: "Demolition Dumpster Rental",
    slug: "demolition",
    description:
      "Large demolition dumpsters for heavy materials like concrete, brick, wood, and demolition debris.",
    image: "/images/services-hero.jpg",
    features: [
      "Large capacity dumpsters",
      "Heavy debris approved",
      "Extended rental periods",
      "Fast pickup",
      "Affordable pricing",
    ],
    idealFor: [
      "Building demolition",
      "Interior demolition",
      "Deck removal",
      "Concrete removal",
      "Large cleanups",
    ],
  },
];

const additionalServices = [
  {
    icon: Leaf,
    title: "Yard Waste Dumpster Rental",
    description:
      "Dumpsters for landscaping debris, brush, branches, leaves, and outdoor cleanup projects.",
  },
  {
    icon: Recycle,
    title: "Recycling & Eco-Friendly Disposal",
    description:
      "Environmentally responsible dumpster rental with recycling options for metal, concrete, and materials.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0">
            <Image
              src="/images/services-hero.jpg"
              alt="Roll off dumpster rental services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/90" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary uppercase tracking-widest text-sm mb-4">
                Dumpster Rental Services
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Roll Off Dumpster Rentals for Every Project
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Rent a dumpster for residential cleanouts, construction debris,
                demolition waste, yard cleanup, and commercial projects. Fast
                delivery, affordable pricing, and flexible rental periods.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/#contact">
                    Get Free Dumpster Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <a href="tel:1-800-555-DUMP">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Dumpster Rentals for Residential, Commercial & Construction
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our affordable dumpster rental services designed for
                projects of all sizes.
              </p>
            </div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                    <p className="text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold mb-4">Key Features</h4>

                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Ideal For</h4>

                        <ul className="space-y-2">
                          {service.idealFor.map((item) => (
                            <li key={item} className="flex gap-2">
                              <ArrowRight className="h-4 w-4 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button asChild>
                      <Link href="/#contact">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">
              Additional Dumpster Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service) => (
                <div key={service.title} className="p-6 border rounded-lg">
                  <service.icon className="mx-auto mb-4 h-8 w-8 text-primary" />

                  <h3 className="font-semibold mb-2">{service.title}</h3>

                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Affordable Dumpster Rental Near You
            </h2>

            <p className="text-muted-foreground">
              We provide roll off dumpster rentals for construction debris, home
              cleanouts, demolition waste, roofing materials, and yard cleanup.
              Choose from 10 yard, 20 yard, 30 yard, and 40 yard dumpsters with
              fast delivery and affordable pricing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-center">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Need a Dumpster Rental Today?
            </h2>

            <p className="text-primary-foreground/80 mb-8">
              Get fast delivery and affordable dumpster rental pricing.
            </p>

            <Button size="lg" variant="secondary" asChild>
              <Link href="/#contact">Get Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
