import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ChevronRight, Check, ArrowRight, MapPin } from "lucide-react";
import { servicePages, getServicePage } from "@/lib/services-data";
import { cities } from "@/lib/cities";
import {
  graph,
  jsonLdProps,
  serviceNode,
  breadcrumbNode,
  faqPageNode,
  abs,
} from "@/lib/schema";

export function generateStaticParams() {
  return servicePages.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) return { title: "Service Not Found | Rapid Dumpster Rental" };

  const url = abs(`/services/${page.slug}`);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
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
          alt: page.serviceType,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) notFound();

  const schema = graph(
    serviceNode({
      name: page.serviceType,
      description: page.metaDescription,
      path: `/services/${page.slug}`,
      serviceType: page.serviceType,
    }),
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: page.serviceType },
    ]),
    faqPageNode(page.faqs.map((f) => ({ q: f.q, a: f.a }))),
  );

  return (
    <>
      <script {...jsonLdProps(schema)} />

      <main className="pt-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-card">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 mx-1" />
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 mx-1" />
              <li className="text-foreground font-medium" aria-current="page">
                {page.serviceType}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-14 lg:py-20 bg-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Dumpster Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              {page.h1}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {page.heroLede}
            </p>
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
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                (800) 555-3867
              </a>
            </div>
          </div>
        </section>

        {/* Body sections */}
        <section className="py-14 lg:py-20">
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
                {sec.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-2 mt-2">
                    {sec.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recommended sizes */}
        <section className="py-14 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Recommended dumpster sizes
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm bg-card">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-5 py-3 font-semibold text-foreground">
                      Size
                    </th>
                    <th className="px-5 py-3 font-semibold text-foreground">
                      Best for
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {page.sizeGuide.map((row) => (
                    <tr key={row.size}>
                      <td className="px-5 py-3 font-semibold text-foreground whitespace-nowrap">
                        {row.size}
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {row.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              href={`/dumpster-sizes/${page.featuredSize.slug}`}
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
            >
              {page.featuredSize.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Process + pricing factors */}
        <section className="py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5">
                How it works
              </h2>
              <ol className="space-y-4">
                {page.process.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5">
                What affects your price
              </h2>
              <ul className="space-y-3">
                {page.pricingFactors.map((f) => (
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {page.serviceType} — Frequently Asked Questions
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

        {/* Related guides + city links */}
        <section className="py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Related guides
              </h2>
              <ul className="space-y-2">
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
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Available in your city
              </h2>
              <ul className="space-y-2">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/dumpster-rental/${c.slug}`}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                      {page.serviceType} in {c.name}, {c.stateAbbr}
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
              Ready to book {page.serviceType.toLowerCase()}?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Call before noon for same-day delivery. All-in pricing, no hidden
              fees, no obligation.
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
