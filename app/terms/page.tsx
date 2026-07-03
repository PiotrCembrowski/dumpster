import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { graph, jsonLdProps, breadcrumbNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service | Rapid Dumpster Rental",
  description:
    "The terms that apply to using the Rapid Dumpster Rental website and requesting a quote.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          graph(
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Terms of Service" },
            ]),
          ),
        )}
      />
      <main className="pt-16">
        <nav aria-label="Breadcrumb" className="border-b border-border bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 mx-1" />
              <li className="text-foreground font-medium" aria-current="page">
                Terms of Service
              </li>
            </ol>
          </div>
        </nav>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: July 3, 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Using this website
              </h2>
              <p>
                This website provides information about our dumpster rental
                services and a form to request a quote. The content is provided
                for general information and may be updated at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Quotes and pricing
              </h2>
              <p>
                Prices shown on this site are starting rates and estimates.
                Final pricing depends on your dumpster size, debris type and
                weight, rental length, and location, and is confirmed when you
                book. Availability, including same-day delivery, is not
                guaranteed and depends on scheduling and location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Weight limits and prohibited items
              </h2>
              <p>
                Each dumpster includes a weight allowance; loads over that
                allowance are subject to a per-ton overage fee disclosed at
                booking. Certain materials — including hazardous waste, liquids,
                tires, batteries, and refrigerant-containing appliances — may not
                be placed in a container. Customers are responsible for keeping
                prohibited items out of the dumpster.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Placement and permits
              </h2>
              <p>
                Customers are responsible for providing a suitable, accessible
                placement location and for obtaining any permit required when a
                container is placed on a public street or right-of-way.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                Questions about these terms? Email{" "}
                <a
                  href="mailto:info@rapiddumpsterrental.site"
                  className="text-primary hover:underline"
                >
                  info@rapiddumpsterrental.site
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+18005553867"
                  className="text-primary hover:underline"
                >
                  (800) 555-3867
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
