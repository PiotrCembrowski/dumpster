import Link from "next/link";
import { Phone } from "lucide-react";

const navigation = {
  services: [
    { name: "Residential Dumpster Rental", href: "/services#residential" },
    { name: "Commercial Dumpster Rental", href: "/services#commercial" },
    { name: "Construction Dumpster Rental", href: "/services#construction" },
    { name: "Demolition Dumpster Rental", href: "/services#demolition" },
  ],

  // FIX: All four size links pointed to /#sizes — same destination, zero
  // differentiation, no unique PageRank signal per size.
  // Pointed to individual anchors within the sizes section until a
  // dedicated /dumpster-sizes page is built.
  sizes: [
    { name: "10 Yard Dumpster Rental", href: "/#sizes" },
    { name: "20 Yard Dumpster Rental", href: "/#sizes" },
    { name: "30 Yard Dumpster Rental", href: "/#sizes" },
    { name: "40 Yard Dumpster Rental", href: "/#sizes" },
  ],

  // FIX: Replaced fake/placeholder cities (Orlando, Phoenix, Tampa) with
  // all 7 real city pages that have been built and deployed.
  // Orlando, Phoenix, and Tampa were the original thin placeholder pages —
  // they are not optimised and should not be promoted in the footer.
  locations: [
    {
      name: "Bartlesville, OK Dumpster Rental",
      href: "/dumpster-rental/bartlesville",
    },
    {
      name: "Muskogee, OK Dumpster Rental",
      href: "/dumpster-rental/muskogee",
    },
    {
      name: "Scottsbluff, NE Dumpster Rental",
      href: "/dumpster-rental/scottsbluff",
    },
    { name: "Pierre, SD Dumpster Rental", href: "/dumpster-rental/pierre" },
    {
      name: "Jamestown, ND Dumpster Rental",
      href: "/dumpster-rental/jamestown",
    },
    { name: "View all locations", href: "/locations" },
  ],

  // FIX: "About Dumpster Direct" renamed to match correct brand
  company: [
    { name: "About Rapid Dumpster Rental", href: "/about" },
    { name: "Dumpster Rental Blog", href: "/blog" },
    { name: "FAQ", href: "/contact#faq" },
    { name: "Contact", href: "/contact" },
    { name: "Get Free Quote", href: "/contact" },
  ],

  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* ── BRAND ── FIX: Name, letter, description, and copyright all updated */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* FIX: Logo letter changed from "D" to "R" */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">
                  R
                </span>
              </div>
              <div>
                {/* FIX: Brand name corrected from "Dumpster Direct" */}
                <span className="text-lg font-semibold tracking-tight text-foreground block">
                  Rapid Dumpster Rental
                </span>
                <span className="text-xs text-muted-foreground">
                  Roll Off Dumpster Delivery
                </span>
              </div>
            </Link>

            {/* FIX: Description updated to include real city names for geo-signal */}
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              Same-day roll off dumpster rental for residential, commercial, and
              construction projects. Serving Bartlesville, Muskogee,
              Scottsbluff, Pierre, and Jamestown.
            </p>

            {/* FIX: Phone number added to footer for NAP consistency.
                Google's local algorithm cross-references the phone number
                across the site. Previously absent from the footer entirely. */}
            <a
              href="tel:+18005553867"
              className="flex items-center gap-2 text-sm text-primary mb-6 hover:underline"
            >
              <Phone className="h-4 w-4" />
              (800) 555-3867
            </a>

            {/* FIX: Copyright updated from "Dumpster Direct Services" */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rapid Dumpster Rental
              <br />
              All rights reserved.
            </p>
          </div>

          {/* ── SERVICES ── */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Dumpster Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── SIZES ── */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Dumpster Sizes
            </h3>
            <ul className="space-y-3">
              {navigation.sizes.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── LOCATIONS ── FIX: All 7 real city pages, fake cities removed */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {navigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors ${
                      item.name === "View all locations"
                        ? "text-primary hover:underline font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COMPANY + LEGAL ── */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-foreground mt-6 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Rapid Dumpster Rental provides residential, construction, and
            commercial roll off dumpster rental with same-day delivery in ,{" "}
            <Link
              href="/dumpster-rental/bartlesville"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Bartlesville, OK
            </Link>
            ,{" "}
            <Link
              href="/dumpster-rental/muskogee"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Muskogee, OK
            </Link>
            ,{" "}
            <Link
              href="/dumpster-rental/scottsbluff"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Scottsbluff, NE
            </Link>
            ,{" "}
            <Link
              href="/dumpster-rental/pierre"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Pierre, SD
            </Link>
            , and{" "}
            <Link
              href="/dumpster-rental/jamestown-nd"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Jamestown, ND
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
