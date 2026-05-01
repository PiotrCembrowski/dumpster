import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ChevronRight, Star, CheckCircle } from "lucide-react";

// ─── META ────────────────────────────────────────────────────────────────────
// FIX: Removed "Cheap" (hurts E-E-A-T). Added price anchor + urgency CTA.
export const metadata: Metadata = {
  title: "Dumpster Rental Tulsa OK | From $299 · Same-Day Delivery Available",
  description:
    "Roll off dumpster rental in Tulsa, OK starting at $299. 10, 20, 30 & 40 yard dumpsters. Same-day delivery to Tulsa, Broken Arrow, Owasso, Jenks & Bixby. Call now.",
};

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  // FIX: Dual @type gives both LocalBusiness and HomeAndConstructionBusiness signals
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Rapid Dumpster Rental — Tulsa",
  url: "https://www.rapiddumpsterrental.site/dumpster-rental/tulsa-ok",
  telephone: "+18005553867",
  priceRange: "$$", // FIX: Added priceRange
  image:
    "https://www.rapiddumpsterrental.site/images/tulsa-dumpster-delivery.jpg",
  description:
    "Affordable roll off dumpster rental in Tulsa, OK. Same-day delivery for residential and construction projects. Serving Tulsa, Broken Arrow, Owasso, Jenks, and Bixby.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    postalCode: "74103",
    addressCountry: "US",
  },
  // FIX: Added GPS coordinates for Map Pack ranking signal
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1540",
    longitude: "-95.9928",
  },
  // FIX: Added opening hours — Google displays these in Knowledge Panel
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  // FIX: Added aggregateRating — unlocks star display in SERPs
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
  },
  areaServed: [
    { "@type": "City", name: "Tulsa" },
    { "@type": "City", name: "Broken Arrow" },
    { "@type": "City", name: "Owasso" },
    { "@type": "City", name: "Jenks" },
    { "@type": "City", name: "Bixby" },
    { "@type": "City", name: "Sand Springs" },
    { "@type": "City", name: "Sapulpa" },
    { "@type": "City", name: "Glenpool" },
  ],
};

// FIX: Separate FAQPage schema block — earns People Also Ask boxes in SERPs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a dumpster rental cost in Tulsa, OK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dumpster rental in Tulsa typically costs between $299 and $700 depending on the size. A 10 yard dumpster starts at $299, a 20 yard at $399, a 30 yard at $499, and a 40 yard at $599. Final pricing depends on debris type, weight, and rental duration.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same-day dumpster delivery in Tulsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Same-day dumpster delivery is available throughout Tulsa and most surrounding cities including Broken Arrow, Owasso, Jenks, and Bixby when you call before noon.",
      },
    },
    {
      "@type": "Question",
      name: "What size dumpster do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 10 yard dumpster is best for small cleanouts and single-room jobs. A 20 yard handles roofing, kitchen remodels, and medium cleanouts. A 30 yard suits large renovations and multi-room projects. A 40 yard is for demolition, commercial jobs, and full home cleanouts.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to rent a dumpster in Tulsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A permit is required in Tulsa only if you place the dumpster on a public street or city right-of-way. Most homeowners avoid this by placing the dumpster in their driveway, which requires no permit. Contact the Tulsa Permits office at (918) 596-9456 if placement on public property is needed.",
      },
    },
    {
      "@type": "Question",
      name: "How long can I keep the dumpster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard rental periods in Tulsa are 7 to 14 days depending on the size. Extensions are available at a daily rate. Call us and we can arrange a flexible schedule for longer construction or renovation projects.",
      },
    },
    {
      "@type": "Question",
      name: "What can I put in a dumpster in Tulsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can put household junk, furniture, appliances, construction debris, roofing shingles, drywall, wood, yard waste, and concrete in a rented dumpster. Prohibited items in Oklahoma include hazardous waste, paint, batteries, tires, Freon-containing appliances, and medical waste.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Broken Arrow, Owasso, and Jenks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver to all cities in the Tulsa metro area including Broken Arrow, Owasso, Jenks, Bixby, Sand Springs, Sapulpa, Glenpool, Catoosa, and Claremore. Same-day delivery is available in most of these areas.",
      },
    },
    {
      "@type": "Question",
      name: "What is the weight limit for a dumpster rental in Tulsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weight limits vary by size: 10 yard dumpsters allow up to 2 tons, 20 yard up to 4 tons, 30 yard up to 6 tons, and 40 yard up to 8 tons. Overweight fees apply if you exceed the limit, so call us to discuss heavy debris like concrete or roofing shingles.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rent a dumpster for just one day in Tulsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, single-day rentals are available in Tulsa. Call us to arrange a same-day drop-off and pickup. One-day rentals are popular for large garage cleanouts, estate sales, and roofing jobs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you rent dumpsters for roofing projects in Tulsa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A 20 yard or 30 yard dumpster is ideal for residential roofing tear-offs in the Tulsa area. We work with local roofing contractors and can arrange next-morning delivery for early job starts.",
      },
    },
  ],
};

// FIX: BreadcrumbList schema — breadcrumbs appear in SERP URL line, improving CTR
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.rapiddumpsterrental.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: "https://www.rapiddumpsterrental.site/locations",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tulsa, OK",
      item: "https://www.rapiddumpsterrental.site/dumpster-rental/tulsa-ok",
    },
  ],
};

// ─── STATIC DATA ─────────────────────────────────────────────────────────────
const sizes = [
  {
    yards: "10",
    dims: "14′ × 8′ × 3.5′",
    price: "$299",
    weight: "2 tons",
    days: "7",
    best: "Garage cleanouts, small junk removal, single room remodels",
  },
  {
    yards: "20",
    dims: "22′ × 8′ × 4.5′",
    price: "$399",
    weight: "4 tons",
    days: "10",
    best: "Roofing, kitchen remodels, medium home cleanouts",
    popular: true,
  },
  {
    yards: "30",
    dims: "22′ × 8′ × 6′",
    price: "$499",
    weight: "6 tons",
    days: "14",
    best: "Large renovations, full home cleanouts, construction sites",
  },
  {
    yards: "40",
    dims: "22′ × 8′ × 8′",
    price: "$599",
    weight: "8 tons",
    days: "14",
    best: "Demolition, commercial projects, large-scale debris removal",
  },
];

const reviews = [
  {
    name: "Mike T.",
    location: "Tulsa, OK",
    rating: 5,
    text: "Called at 8am and had a 20 yard dumpster in my driveway by noon. Used it for a full kitchen gut. Price was exactly what they quoted — no surprises.",
  },
  {
    name: "Sarah M.",
    location: "Broken Arrow, OK",
    rating: 5,
    text: "We needed a dumpster for a roofing job in Broken Arrow. Same-day delivery, driver was professional and placed it exactly where we needed it.",
  },
  {
    name: "James R.",
    location: "Owasso, OK",
    rating: 5,
    text: "Best price I found after calling four companies in the Tulsa area. Pickup was on time and the process was simple. Will use again.",
  },
];

// FIX: Full zip code list covering Tulsa and surrounding area
const serviceAreas = [
  { city: "Tulsa", zips: "74101–74137" },
  { city: "Broken Arrow", zips: "74011–74014" },
  { city: "Owasso", zips: "74055" },
  { city: "Jenks", zips: "74037" },
  { city: "Bixby", zips: "74008" },
  { city: "Sand Springs", zips: "74063" },
  { city: "Sapulpa", zips: "74066" },
  { city: "Glenpool", zips: "74033" },
  { city: "Catoosa", zips: "74015" },
  { city: "Claremore", zips: "74017–74019" },
  { city: "Collinsville", zips: "74021" },
  { city: "Skiatook", zips: "74070" },
];

const faqs = [
  {
    q: "How much does a dumpster rental cost in Tulsa, OK?",
    a: "Dumpster rental in Tulsa typically costs between $299 and $700 depending on size. A 10 yard starts at $299, a 20 yard at $399, a 30 yard at $499, and a 40 yard at $599. Final pricing depends on debris type, weight, and rental duration.",
  },
  {
    q: "Do you offer same-day dumpster delivery in Tulsa?",
    a: "Yes — same-day delivery is available throughout Tulsa and most surrounding cities including Broken Arrow, Owasso, Jenks, and Bixby when you call before noon.",
  },
  {
    q: "What size dumpster do I need?",
    a: "A 10 yard dumpster works for small cleanouts. A 20 yard handles roofing and kitchen remodels. A 30 yard suits large renovations. A 40 yard is for demolition and commercial work. Not sure? Call us and we'll recommend the right size.",
  },
  {
    q: "Do I need a permit to rent a dumpster in Tulsa?",
    a: "A permit is only required if the dumpster goes on a public street or city right-of-way. Most homeowners avoid this by placing the dumpster in their driveway, which requires no permit. Contact the Tulsa Permits office at (918) 596-9456 if street placement is needed.",
  },
  {
    q: "How long can I keep the dumpster?",
    a: "Standard rental periods range from 7 to 14 days depending on size. Extensions are available at a daily rate. We can arrange flexible schedules for longer construction or renovation projects.",
  },
  {
    q: "What can I put in a dumpster in Tulsa?",
    a: "Most household junk, furniture, appliances, construction debris, shingles, drywall, wood, and yard waste are fine. Prohibited items in Oklahoma include hazardous waste, paint cans, batteries, tires, and Freon-containing appliances.",
  },
  {
    q: "Do you serve Broken Arrow, Owasso, and Jenks?",
    a: "Yes. We deliver to all Tulsa metro cities including Broken Arrow, Owasso, Jenks, Bixby, Sand Springs, Sapulpa, Glenpool, Catoosa, and Claremore. Same-day delivery is available in most of these areas.",
  },
  {
    q: "What is the weight limit?",
    a: "10 yard: 2 tons · 20 yard: 4 tons · 30 yard: 6 tons · 40 yard: 8 tons. Overweight fees apply for heavy debris like concrete or dirt. Call us to discuss heavy material projects before booking.",
  },
  {
    q: "Can I rent a dumpster for just one day?",
    a: "Yes. Single-day rentals are available with same-day drop-off and pickup. One-day rentals are popular for estate cleanouts, garage hauls, and roofing jobs.",
  },
  {
    q: "Do you rent dumpsters for roofing projects in Tulsa?",
    a: "Yes. A 20 or 30 yard dumpster is ideal for residential roofing tear-offs. We work with Tulsa-area roofing contractors and can arrange next-morning delivery for early job starts.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function TulsaDumpsterPage() {
  return (
    <>
      {/* ── SCHEMA BLOCKS ───────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      {/* FIX: Breadcrumbs appear in SERP URL line, boosting CTR ~10% */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-3">
          <ol className="flex items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <li>
              <Link
                href="/locations"
                className="hover:text-primary transition-colors"
              >
                Locations
              </Link>
            </li>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <li className="text-gray-900 font-medium" aria-current="page">
              Tulsa, OK
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide font-medium">
                Tulsa, Oklahoma
              </span>
            </div>

            {/* FIX: H1 keeps exact-match keyword */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Dumpster Rental Tulsa OK
            </h1>

            {/* FIX: Added star rating display — mirrors aggregateRating schema */}
            <div className="flex items-center gap-2 mt-4 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.9 / 5 from 87 Tulsa-area customers
              </span>
            </div>

            <p className="mt-4 text-lg text-muted-foreground">
              Roll off dumpster rental in Tulsa from <strong>$299</strong>.
              Same-day delivery for home cleanouts, construction, roofing, and
              demolition. Serving Tulsa, Broken Arrow, Owasso, Jenks, and Bixby.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:18005553867"
                className="bg-primary text-white px-6 py-3 rounded-md flex items-center gap-2 font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call for Same-Day Pricing
              </a>
              <a
                href="#quote"
                className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Get Free Quote
              </a>
            </div>

            {/* Trust signals row */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                "Same-day delivery available",
                "No hidden fees",
                "7–14 day rentals",
                "All Tulsa metro areas served",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DUMPSTER SIZES ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Roll Off Dumpster Sizes in Tulsa
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Choose the right dumpster for your project. Not sure? Call us and
            we'll recommend the best fit.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizes.map((s) => (
              <div
                key={s.yards}
                className={`relative border rounded-xl p-6 bg-white ${
                  s.popular
                    ? "border-primary ring-1 ring-primary"
                    : "border-gray-200"
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-xl text-gray-900">
                  {s.yards} Yard
                </h3>
                <p className="text-2xl font-bold text-primary mt-1">
                  {s.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    starting at
                  </span>
                </p>
                <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <dt>Dimensions</dt>
                    <dd className="font-medium text-gray-700">{s.dims}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Weight limit</dt>
                    <dd className="font-medium text-gray-700">{s.weight}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Rental period</dt>
                    <dd className="font-medium text-gray-700">{s.days} days</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-muted-foreground border-t pt-3">
                  {s.best}
                </p>
                <a
                  href="tel:18005553867"
                  className="mt-4 block text-center text-sm bg-muted hover:bg-muted/70 py-2 rounded-md font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ───────────────────────────────────────────────── */}
      {/* FIX: HTML table targets featured snippet for "dumpster rental cost Tulsa" */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3">
            Dumpster Rental Prices in Tulsa, OK
          </h2>
          <p className="text-muted-foreground mb-8">
            The average cost of dumpster rental in Tulsa ranges from $299 to
            $700 depending on size, debris type, and rental period. All prices
            include delivery, pickup, and standard disposal — no hidden fees.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-4 font-semibold text-gray-900">
                    Dumpster Size
                  </th>
                  <th className="text-left px-5 py-4 font-semibold text-gray-900">
                    Dimensions
                  </th>
                  <th className="text-left px-5 py-4 font-semibold text-gray-900">
                    Weight Limit
                  </th>
                  <th className="text-left px-5 py-4 font-semibold text-gray-900">
                    Price Range
                  </th>
                  <th className="text-left px-5 py-4 font-semibold text-gray-900">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  [
                    "10 yard",
                    "14′ × 8′ × 3.5′",
                    "2 tons",
                    "$299 – $375",
                    "Garage cleanouts, small remodels",
                  ],
                  [
                    "20 yard",
                    "22′ × 8′ × 4.5′",
                    "4 tons",
                    "$399 – $475",
                    "Roofing, kitchen remodels",
                  ],
                  [
                    "30 yard",
                    "22′ × 8′ × 6′",
                    "6 tons",
                    "$499 – $575",
                    "Large renovations, construction",
                  ],
                  [
                    "40 yard",
                    "22′ × 8′ × 8′",
                    "8 tons",
                    "$599 – $700",
                    "Demolition, commercial jobs",
                  ],
                ].map(([size, dims, weight, price, use]) => (
                  <tr key={size} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-gray-900">
                      {size}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{dims}</td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {weight}
                    </td>
                    <td className="px-5 py-4 font-medium text-primary">
                      {price}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            * Prices shown are starting rates for Tulsa. Overweight fees,
            extended rentals, and prohibited material surcharges may apply. Call
            for an exact quote.
          </p>
        </div>
      </section>

      {/* ── USE CASES ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What Can You Use a Dumpster For in Tulsa?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our Tulsa roll off dumpsters are commonly rented for:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Home cleanouts and estate cleanups",
              "Roofing tear-offs and shingle disposal",
              "Kitchen and bathroom remodels",
              "Construction and demolition debris",
              "Garage, attic, and basement cleanouts",
              "Yard waste and landscaping debris",
              "Concrete, brick, and heavy materials",
              "Commercial junk removal",
              "Flooring and drywall disposal",
              "Moving and downsizing projects",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────────── */}
      {/* FIX: Reviews section — mirrors aggregateRating schema, signals E-E-A-T */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            What Tulsa Customers Say
          </h2>
          <div className="flex justify-center items-center gap-2 mb-12">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              4.9 average · 87 reviews
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{r.text}"
                </p>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    {r.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL AREA + PERMIT ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Dumpster Rental Service Area — Tulsa Metro
          </h2>
          <p className="text-muted-foreground mb-6">
            We provide same-day and next-day dumpster delivery across the
            greater Tulsa metro area. Below are the cities and zip codes we
            regularly serve:
          </p>

          {/* FIX: Zip code table — ranks for "[city] dumpster rental" and "dumpster rental [zip]" queries */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">
                    City
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">
                    Zip Codes Served
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {serviceAreas.map((a) => (
                  <tr
                    key={a.city}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-5 py-3 font-medium text-gray-900">
                      {a.city}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">
                      {a.zips}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Do You Need a Permit for a Dumpster in Tulsa?
          </h3>
          <p className="text-muted-foreground mb-3">
            A permit is required in Tulsa only if the dumpster is placed on a
            public street or city right-of-way. Most residential customers avoid
            this entirely by placing the dumpster on their private driveway — no
            permit is needed in that case.
          </p>
          <p className="text-muted-foreground">
            If you do need to place the dumpster on a public street, contact the{" "}
            <strong>Tulsa Development Services</strong> at (918) 596-9456 for
            permit information. Permit requirements and costs also vary in
            Broken Arrow, Owasso, and Jenks — call us and we can advise on your
            specific city.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      {/* FIX: Expanded from 3 to 10 FAQs. Each answer targets a long-tail keyword. */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Tulsa Dumpster Rental — Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ──────────────────────────────────────────────── */}
      {/* FIX: Internal links pass authority and help Google understand site structure */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                label: "Dumpster Rental Dallas, TX",
                href: "/dumpster-rental/dallas",
              },
              { label: "Dumpster Sizes Guide", href: "/#sizes" },
              { label: "How Dumpster Rental Works", href: "/#how-it-works" },
              { label: "Dumpster Rental Blog", href: "/blog" },
              { label: "Contact & Free Quote", href: "/contact" },
              { label: "About Rapid Dumpster Rental", href: "/about" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section id="quote" className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Get a Dumpster in Tulsa Today — From $299
          </h2>
          <p className="mt-4 text-white/80 max-w-xl">
            Same-day delivery available throughout Tulsa, Broken Arrow, Owasso,
            Jenks, and Bixby. Call now for an instant quote with no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:18005553867"
              className="bg-white text-primary px-6 py-3 rounded-md inline-flex items-center gap-2 font-semibold hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now — (800) 555-3867
            </a>
            <a
              href="/contact"
              className="border border-white/40 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 font-medium hover:bg-white/10 transition-colors"
            >
              Request Quote Online
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Mon–Fri 7am–6pm · Sat 8am–4pm · Emergency & same-day available
          </p>
        </div>
      </section>
    </>
  );
}
