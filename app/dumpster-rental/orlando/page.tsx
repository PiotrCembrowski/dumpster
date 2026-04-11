import { Metadata } from "next";
import Link from "next/link";
import { Phone, Truck, Clock, Shield, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Dumpster Rental Orlando FL | Same Day Roll Off Dumpster Orlando",
  description:
    "Affordable dumpster rental in Orlando, FL. 10, 20, 30, 40 yard dumpsters available. Same-day delivery in Kissimmee, Winter Park, Sanford & Orlando metro.",
  keywords: [
    "dumpster rental orlando",
    "orlando dumpster rental",
    "roll off dumpster orlando",
    "cheap dumpster orlando",
    "construction dumpster orlando",
    "residential dumpster orlando",
  ],
};

const dumpsterSizes = [
  {
    size: "10 Yard Dumpster",
    description: "Small cleanouts, garage cleanups, minor renovations",
  },
  {
    size: "20 Yard Dumpster",
    description: "Home remodels, roofing projects, medium construction",
  },
  {
    size: "30 Yard Dumpster",
    description: "Large renovations, commercial cleanouts",
  },
  {
    size: "40 Yard Dumpster",
    description: "Major construction, demolition projects",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Fast dumpster delivery across Orlando metro area",
  },
  {
    icon: Clock,
    title: "Flexible Rental Periods",
    description: "Keep your dumpster as long as your project needs",
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "On-time delivery and prompt pickup guaranteed",
  },
];

export default function OrlandoDumpsterPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dumpster Rental Orlando",
            areaServed: "Orlando, Florida",
            telephone: "1-800-555-DUMP",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Orlando",
              addressRegion: "FL",
            },
            service: "Dumpster Rental",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">
                Orlando, Florida
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold">
              Dumpster Rental Orlando FL
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Affordable dumpster rental in Orlando, Florida. We provide fast
              delivery, flexible rental periods, and competitive pricing for
              residential and commercial projects.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="#quote"
                className="bg-primary text-white px-6 py-3 rounded-md font-medium"
              >
                Get Free Quote
              </Link>

              <a
                href="tel:18005553867"
                className="border px-6 py-3 rounded-md flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Dumpster Sizes Available in Orlando
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {dumpsterSizes.map((size) => (
              <div
                key={size.size}
                className="border rounded-xl p-6 hover:border-primary transition"
              >
                <h3 className="font-semibold text-lg">{size.size}</h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {size.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/dumpster-sizes" className="text-primary font-medium">
              Learn more about dumpster sizes →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Our Orlando Dumpster Rental
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-background p-6 rounded-xl">
                <benefit.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Roll Off Dumpster Rental Orlando
          </h2>

          <p className="text-muted-foreground mb-4">
            Our Orlando dumpster rental services are ideal for construction,
            home renovations, roofing jobs, and commercial cleanouts. We deliver
            roll-off dumpsters quickly across the Orlando metro area.
          </p>

          <p className="text-muted-foreground mb-4">
            Whether you're remodeling your home, managing a construction
            project, or cleaning out a property, our dumpsters help make waste
            removal simple and efficient.
          </p>

          <p className="text-muted-foreground">
            Serving Orlando, Kissimmee, Winter Park, Sanford, Altamonte Springs,
            Lake Mary, and surrounding Florida communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Get a Free Dumpster Rental Quote in Orlando
            </h2>

            <p className="mt-4 text-white/80">
              Call today for fast dumpster delivery and competitive pricing.
            </p>

            <div className="mt-8">
              <a
                href="tel:18005553867"
                className="bg-white text-primary px-6 py-3 rounded-md inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
