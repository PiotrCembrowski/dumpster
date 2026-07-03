import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Rapid Dumpster Rental",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Dumpster Sizes", href: "/#sizes" },
  { label: "Service Locations", href: "/locations" },
  { label: "Our Services", href: "/services" },
  { label: "Dumpster Rental Blog", href: "/blog" },
  { label: "Get a Free Quote", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="pt-16 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          We couldn&apos;t find that page
        </h1>
        <p className="text-muted-foreground mb-10">
          The page may have moved or never existed. Here are the pages people
          look for most — or call us and we&apos;ll point you the right way.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto text-left">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              {l.label}
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="tel:+18005553867"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call (800) 555-3867
          </a>
        </div>
      </div>
    </main>
  );
}
