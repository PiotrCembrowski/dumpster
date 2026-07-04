import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ChevronRight, Check, ArrowRight, MapPin } from "lucide-react";
import { cities } from "@/lib/cities";
import { graph, jsonLdProps, breadcrumbNode, organizationNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Rapid Dumpster Rental | Roll Off Dumpster Delivery",
  description:
    "Rapid Dumpster Rental delivers 10–40 yard roll off dumpsters with same-day service and transparent, all-in pricing across Oklahoma, Nebraska, South Dakota, and North Dakota.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Rapid Dumpster Rental",
    title: "About Rapid Dumpster Rental | Roll Off Dumpster Delivery",
    description:
      "Same-day roll off dumpster rental with transparent, all-in pricing across four states.",
    url: "https://www.rapiddumpsterrental.site/about",
    images: [
      {
        url: "https://www.rapiddumpsterrental.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Rapid Dumpster Rental",
      },
    ],
  },
};

const values = [
  {
    title: "Transparent, all-in pricing",
    body: "The price we quote includes delivery, pickup, and a set weight allowance. We tell you the per-ton overage rate up front so there are no surprises at pickup.",
  },
  {
    title: "Same-day when you call before noon",
    body: "Most projects can't wait a week for a container. Call before noon and we aim to have a dumpster on your property the same day.",
  },
  {
    title: "Right-sized, not oversold",
    body: "We'd rather put you in the correct size than the biggest one. For heavy debris that often means a smaller container, because weight — not volume — is the real limit.",
  },
  {
    title: "Straight answers",
    body: "Permits, prohibited items, weight limits, rental periods — we explain how they actually work so you can plan the job instead of guessing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          graph(
            organizationNode(),
            breadcrumbNode([{ name: "Home", path: "/" }, { name: "About" }]),
          ),
        )}
      />

      <main className="pt-16">
        <nav aria-label="Breadcrumb" className="border-b border-border bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 mx-1" />
              <li className="text-foreground font-medium" aria-current="page">
                About
              </li>
            </ol>
          </div>
        </nav>

        <section className="py-14 lg:py-20 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              About Rapid Dumpster Rental
            </h1>
            <p className="text-lg text-muted-foreground">
              We rent roll off dumpsters — 10, 20, 30, and 40 yard — for home
              cleanouts, remodels, roofing, construction, and commercial
              projects. The goal is simple: the right container, delivered fast,
              at a price you can see before you book.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Dumpster rental is a phone-first business, and most of what goes
              wrong happens before the container ever arrives: the wrong size,
              an unexpected weight fee, a container placed where it blocks the
              work. We spend the two minutes on the phone to get those details
              right, because fixing them afterward means a second trip and a
              second bill.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve five cities across four states, and every market gets the
              same thing: 10–40 yard roll offs, transparent pricing from $269,
              and same-day delivery when you call before noon. If you&apos;re not
              sure what you need, tell us about the project and we&apos;ll size
              it for you.
            </p>
          </div>
        </section>

        <section className="py-14 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              How we work
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Where we deliver
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/dumpster-rental/${c.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  {c.name}, {c.stateAbbr}
                  <span className="ml-auto text-muted-foreground">
                    {c.county}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:gap-2.5 transition-all"
            >
              See all locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-16 bg-primary text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Need a dumpster? Let&apos;s size it right.
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Call before noon for same-day delivery, or send your project
              details for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+18005553867"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call (800) 555-3867
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
