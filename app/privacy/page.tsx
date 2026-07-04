import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { graph, jsonLdProps, breadcrumbNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Rapid Dumpster Rental",
  description:
    "How Rapid Dumpster Rental collects and uses the information you submit through our quote form and website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          graph(
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Privacy Policy" },
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
                Privacy Policy
              </li>
            </ol>
          </div>
        </nav>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-headings:text-foreground prose-p:text-muted-foreground">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: July 3, 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Information we collect
              </h2>
              <p>
                When you submit our quote request form, we collect the
                information you provide: your name, email address, phone number,
                the dumpster size or service you&apos;re interested in, and any
                project details you include. We only collect what you choose to
                send us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                How we use it
              </h2>
              <p>
                We use your information for one purpose: to respond to your
                request, provide a quote, and arrange service. We do not sell
                your information, and we don&apos;t send marketing you
                didn&apos;t ask for.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Service providers
              </h2>
              <p>
                Our quote form is delivered to us through a third-party form
                service, and our website is hosted on a third-party platform
                that may collect anonymous, aggregate usage statistics (such as
                page views) to help us understand site performance. These
                providers process data on our behalf and under their own privacy
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Cookies and analytics
              </h2>
              <p>
                We may use basic analytics to measure how the site is used. This
                data is aggregated and does not identify you personally.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                Questions about this policy, or want your information removed?
                Email{" "}
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
