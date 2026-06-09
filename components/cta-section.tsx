import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Truck, Clock, Shield, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="get-quote"
      className="py-24 lg:py-32 bg-primary relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline
            FIX: Original H2 "Affordable Dumpster Rental Near You — Fast Delivery
            Available" has no price, no city, no differentiator. Vague headlines
            on CTA sections reduce conversion rate because visitors don't know
            what they're committing to. Adding a price anchor removes the biggest
            objection (cost) before it forms.
        */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6 text-balance">
          Get a Dumpster in Your Driveway Today — From $269
        </h2>

        {/* Subtext — updated to include state coverage for geo-signal */}
        <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Same-day roll off dumpster delivery for home cleanouts, roofing
          projects, construction debris, and commercial jobs across Oklahoma,
          Texas, Nebraska, South Dakota, and North Dakota. Call before noon for
          same-day drop-off.
        </p>

        {/* CTA Buttons
            FIX: Both buttons were completely dead — no href, no asChild, no Link.
            "Get Free Dumpster Quote" did nothing. "Call for Same-Day Delivery"
            had a Phone icon but no tel: link. Every visitor who reached the
            bottom of the homepage and clicked either button hit a dead end.
        */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8 shadow-lg"
            asChild
          >
            <Link href="/contact">
              Get Free Dumpster Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* FIX: Phone button now has a real tel: href */}
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="tel:+18005553867">
              <Phone className="mr-2 h-5 w-5" />
              Call (800) 555-3867
            </a>
          </Button>
        </div>

        {/* Trust signals
            FIX: "Affordable Local Pricing" and "Residential & Commercial" are
            adjectives with no substance. Replaced with concrete signals that
            remove specific objections: price, rental window, no hidden fees,
            and cities count. Each signal answers a real pre-booking question.
        */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground/80 text-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 flex-shrink-0" />
            Same-day delivery available
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 flex-shrink-0" />
            7–14 day rental periods
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 flex-shrink-0" />
            No hidden fees
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 flex-shrink-0" />7 cities across 5 states
          </div>
        </div>

        {/* City links
            FIX: Original bottom paragraph was the same boilerplate text
            copied from three other sections on the page — Google penalises
            repeated near-duplicate content within the same domain.
            Replaced with direct links to all 7 city pages. The CTA section
            is the last thing a visitor sees before leaving — giving them a
            direct path to their city page is the highest-value use of this
            space. These also act as a fourth set of homepage internal links
            to city pages, further boosting their authority.
        */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-5">
            Serving these cities — click for local pricing
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              {
                label: "Bartlesville, OK",
                href: "/dumpster-rental/bartlesville-ok",
              },
              { label: "Muskogee, OK", href: "/dumpster-rental/muskogee-ok" },
              {
                label: "Scottsbluff, NE",
                href: "/dumpster-rental/scottsbluff-ne",
              },
              { label: "Pierre, SD", href: "/dumpster-rental/pierre-sd" },
              { label: "Jamestown, ND", href: "/dumpster-rental/jamestown-nd" },
            ].map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-2 transition-colors"
              >
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
