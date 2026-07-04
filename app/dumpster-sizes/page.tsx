import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ChevronRight, ArrowRight } from "lucide-react";
import { sizePages } from "@/lib/sizes-data";
import { graph, jsonLdProps, breadcrumbNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dumpster Sizes | 10, 20, 30 & 40 Yard Roll Off Comparison",
  description:
    "Compare 10, 20, 30, and 40 yard roll off dumpsters — dimensions, weight limits, what fits, and price. Find the right size for your project.",
  alternates: { canonical: "/dumpster-sizes" },
  openGraph: {
    type: "website",
    siteName: "Rapid Dumpster Rental",
    title: "Dumpster Sizes | 10, 20, 30 & 40 Yard Roll Off Comparison",
    description:
      "Compare 10, 20, 30, and 40 yard roll off dumpsters — dimensions, weight limits, what fits, and price.",
    url: "https://www.rapiddumpsterrental.site/dumpster-sizes",
    images: [
      {
        url: "https://www.rapiddumpsterrental.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dumpster size comparison",
      },
    ],
  },
};

export default function DumpsterSizesPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          graph(
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Dumpster Sizes" },
            ]),
          ),
        )}
      />

      <main className="pt-16">
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
                Dumpster Sizes
              </li>
            </ol>
          </div>
        </nav>

        <section className="py-14 lg:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Roll Off Dumpster Sizes
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Dumpster Sizes: 10, 20, 30 & 40 Yard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer four roll off sizes. The right one depends on how much
              debris you have and how heavy it is — a small container of
              concrete can cost more to haul than a big container of furniture.
              Compare them below.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm bg-card">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-4 py-3 font-semibold text-foreground">Size</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Dimensions</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Weight</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Rental</th>
                    <th className="px-4 py-3 font-semibold text-foreground">From</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sizePages.map((s) => (
                    <tr key={s.slug} className="align-top">
                      <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                        <Link
                          href={`/dumpster-sizes/${s.slug}`}
                          className="text-primary hover:underline"
                        >
                          {s.yards} yard
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {s.dimensions}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {s.weightTons} tons
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {s.rentalDays} days
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                        ${s.startingPrice}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {s.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Size cards */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {sizePages.map((s) => (
                <Link
                  key={s.slug}
                  href={`/dumpster-sizes/${s.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {s.name}
                    </h2>
                    {s.popular && (
                      <span className="text-xs font-medium bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">
                    {s.lede}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">
                      From ${s.startingPrice} · {s.weightTons}-ton limit
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-primary text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Not sure which size fits?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Tell us what you&apos;re throwing away and we&apos;ll size it for
              you — for free, with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                Get a Sizing Recommendation
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
