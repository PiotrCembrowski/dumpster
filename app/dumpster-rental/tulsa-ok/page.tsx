import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Dumpster Rental Tulsa OK | Cheap Roll Off Dumpsters (Same Day Delivery)",
  description:
    "Cheap dumpster rental in Tulsa, OK. 10, 20, 30, 40 yard roll off dumpsters. Same-day delivery in Tulsa, Broken Arrow, Jenks & Owasso. Call now for pricing.",
};

export default function TulsaDumpsterPage() {
  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tulsa Dumpster Rental",
            areaServed: "Tulsa, Oklahoma",
            telephone: "1-800-555-3867",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tulsa",
              addressRegion: "OK",
              addressCountry: "US",
            },
            description:
              "Cheap roll off dumpster rental in Tulsa with same day delivery.",
          }),
        }}
      />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">
                Tulsa, Oklahoma
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold">
              Dumpster Rental Tulsa OK
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Need a dumpster rental in Tulsa, OK? We provide cheap roll off
              dumpsters with same-day delivery for construction, home cleanouts,
              roofing jobs, and more.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:18005553867"
                className="bg-primary text-white px-6 py-3 rounded-md flex items-center gap-2 font-medium"
              >
                <Phone className="h-4 w-4" />
                Call Now for Pricing
              </a>

              <a
                href="#quote"
                className="border px-6 py-3 rounded-md font-medium"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST + INTRO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted-foreground">
            Our Tulsa dumpster rental service is trusted by homeowners,
            contractors, and businesses across the Tulsa metro area. We offer
            fast delivery, flexible rental periods, and competitive pricing with
            no hidden fees.
          </p>
        </div>
      </section>

      {/* SIZES */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Roll Off Dumpster Sizes in Tulsa
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              ["10 Yard Dumpster", "Small cleanouts, garage junk removal"],
              ["20 Yard Dumpster", "Roofing, remodeling projects"],
              ["30 Yard Dumpster", "Large renovations, construction"],
              ["40 Yard Dumpster", "Demolition, commercial jobs"],
            ].map(([title, desc]) => (
              <div key={title} className="border rounded-xl p-6 bg-white">
                <h3 className="font-semibold text-gray-700">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING (FEATURE SNIPPET BAIT) */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Dumpster Rental Prices in Tulsa, OK
          </h2>

          <p className="text-muted-foreground mb-4">
            The average cost of dumpster rental in Tulsa ranges from $300 to
            $700 depending on the size, debris type, and rental period.
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>10 yard dumpster: $300 – $400</li>
            <li>20 yard dumpster: $400 – $500</li>
            <li>30 yard dumpster: $500 – $600</li>
            <li>40 yard dumpster: $600 – $700</li>
          </ul>

          <p className="mt-4 text-muted-foreground">
            Call now to get exact pricing for your project in Tulsa.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What Can You Use a Dumpster For?
          </h2>

          <p className="text-muted-foreground mb-4">
            Our dumpsters are commonly used for:
          </p>

          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Home cleanouts and junk removal</li>
            <li>Roofing and shingle disposal</li>
            <li>Construction and demolition</li>
            <li>Garage, attic, and basement cleanups</li>
            <li>Yard waste and landscaping debris</li>
          </ul>
        </div>
      </section>

      {/* LOCAL SEO BOOST */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Dumpster Rental Near Tulsa, OK
          </h2>

          <p className="text-muted-foreground mb-4">
            We provide dumpster rental services throughout the Tulsa metro area,
            including Broken Arrow, Jenks, Owasso, and Bixby. Same-day delivery
            is available in most locations.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Do You Need a Permit in Tulsa?
          </h3>

          <p className="text-muted-foreground">
            If placing a dumpster on a public street in Tulsa, a permit may be
            required. Most residential customers avoid this by placing dumpsters
            on private property such as driveways.
          </p>
        </div>
      </section>

      {/* FAQ (RANKING GOLD) */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Tulsa Dumpster Rental FAQs
          </h2>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-black">
                How much does a dumpster rental cost in Tulsa?
              </h3>
              <p>
                Prices typically range from $300 to $700 depending on size and
                rental duration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">
                Do you offer same day dumpster rental in Tulsa?
              </h3>
              <p>
                Yes, same-day delivery is available in most areas of Tulsa and
                surrounding cities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black">
                What size dumpster do I need?
              </h3>
              <p>
                A 10 yard dumpster works for small cleanups, while 20–30 yard
                dumpsters are best for remodeling and construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Get a Cheap Dumpster Rental in Tulsa Today
          </h2>

          <p className="mt-4 text-white/80">
            Call now for fast delivery and the best dumpster rental prices in
            Tulsa.
          </p>

          <div className="mt-8">
            <a
              href="tel:18005553867"
              className="bg-white text-primary px-6 py-3 rounded-md inline-flex items-center gap-2 font-medium"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
