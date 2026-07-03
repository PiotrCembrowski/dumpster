import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ChevronRight, ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities";
import {
  graph,
  jsonLdProps,
  breadcrumbNode,
  organizationNode,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dumpster Rental Locations | Rapid Dumpster Rental Service Areas",
  description:
    "Find dumpster rental pricing and same-day delivery in Bartlesville, Muskogee, Scottsbluff, Pierre, and Jamestown. Roll off dumpsters for every project.",
  alternates: { canonical: "/locations" },
  openGraph: {
    type: "website",
    siteName: "Rapid Dumpster Rental",
    title: "Dumpster Rental Locations | Rapid Dumpster Rental Service Areas",
    description:
      "Same-day roll off dumpster rental across Oklahoma, Nebraska, South Dakota, and North Dakota. Pick your city for local pricing.",
    url: "https://www.rapiddumpsterrental.site/locations",
    images: [
      {
        url: "https://www.rapiddumpsterrental.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rapid Dumpster Rental service areas",
      },
    ],
  },
};

export default function LocationsPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          graph(
            organizationNode(),
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Locations" },
            ]),
          ),
        )}
      />

      <main className="pt-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 mx-1" />
              <li className="text-foreground font-medium" aria-current="page">
                Locations
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Service Areas
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Dumpster Rental Locations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver 10, 20, 30, and 40 yard roll off dumpsters with
              same-day service across four states. Pick your city below for
              local pricing, permit guidance, and the communities we cover.
            </p>
            <div className="mt-8">
              <a
                href="tel:+18005553867"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call (800) 555-3867
              </a>
            </div>
          </div>
        </section>

        {/* City cards */}
        <section className="pb-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/dumpster-rental/${city.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <MapPin className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-wide font-medium">
                      {city.county}, {city.stateAbbr}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Dumpster Rental {city.name}, {city.stateAbbr}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">
                    {city.blurb}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Also serving {city.nearby.slice(0, 3).join(", ")}.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">
                      From ${city.startingPrice}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      View pricing
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
              Don&apos;t see your town? We cover the surrounding counties around
              each city too. Call us and we&apos;ll confirm same-day
              availability at your address.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
