import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ChevronRight, Check, ArrowRight, MapPin } from "lucide-react";
import { sizePages, getSizePage } from "@/lib/sizes-data";
import { cities } from "@/lib/cities";
import {
  graph,
  jsonLdProps,
  breadcrumbNode,
  faqPageNode,
  abs,
} from "@/lib/schema";

export function generateStaticParams() {
  return sizePages.map((s) => ({ size: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ size: string }>;
}): Promise<Metadata> {
  const { size } = await params;
  const page = getSizePage(size);
  if (!page) return { title: "Size Not Found | Rapid Dumpster Rental" };

  const url = abs(`/dumpster-sizes/${page.slug}`);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/dumpster-sizes/${page.slug}` },
    openGraph: {
      type: "website",
      siteName: "Rapid Dumpster Rental",
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      images: [
        {
          url: abs("/images/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: page.name,
        },
      ],
    },
  };
}

export default async function SizeDetailPage({
  params,
}: {
  params: Promise<{ size: string }>;
}) {
  const { size } = await params;
  const page = getSizePage(size);
  if (!page) notFound();

  const schema = graph(
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Dumpster Sizes", path: "/dumpster-sizes" },
      { name: page.name },
    ]),
    faqPageNode(page.faqs.map((f) => ({ q: f.q, a: f.a }))),
  );

  const specs = [
    { label: "Dimensions", value: page.dimensions },
    { label: "Weight allowance", value: `${page.weightTons} tons` },
    { label: "Rental period", value: `${page.rentalDays} days` },
    { label: "Starting price", value: `$${page.startingPrice}` },
  ];

  return (
    <>
      <script {...jsonLdProps(schema)} />

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
              <li>
                <Link
                  href="/dumpster-sizes"
                  className="hover:text-primary transition-colors"
                >
                  Dumpster Sizes
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 mx-1" />
              <li className="text-foreground font-medium" aria-current="page">
                {page.name}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero + specs */}
        <section className="py-14 lg:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              {page.h1}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              {page.lede}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </p>
                  <p className="text-base font-semibold text-foreground mt-1">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+18005553867"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-card transition-colors"
              >
                <Phone className="h-4 w-4" />
                (800) 555-3867
              </a>
            </div>
          </div>
        </section>

        {/* What fits */}
        <section className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-5">
              What fits in a {page.yards} yard dumpster
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {page.fits.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Narrative sections */}
        <section className="pb-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {page.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Weight & sizing */}
        <section className="py-14 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                Weight allowance & overage
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {page.overage}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                When to size up
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {page.sizeUp}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {page.name} — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related + cities */}
        <section className="py-14 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Related pages
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`/services/${page.relatedService.slug}`}
                    className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    {page.relatedService.label}
                  </Link>
                </li>
                {page.relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <ChevronRight className="h-4 w-4 flex-shrink-0" />
                      {post.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/dumpster-sizes"
                    className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    Compare all dumpster sizes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Rent a {page.yards} yard in your city
              </h2>
              <ul className="space-y-2">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/dumpster-rental/${c.slug}`}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                      {c.name}, {c.stateAbbr}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Book a {page.name.toLowerCase()} today
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Same-day delivery when you call before noon. All-in pricing from $
              {page.startingPrice} — no hidden fees.
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
