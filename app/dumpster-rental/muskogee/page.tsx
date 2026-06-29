import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ChevronRight, Star, CheckCircle } from "lucide-react";

// ─── META ────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Dumpster Rental Muskogee OK | From $289 · Same-Day Delivery Available",
  description:
    "Roll off dumpster rental in Muskogee, OK starting at $289. 10, 20, 30 & 40 yard dumpsters. Same-day delivery to Muskogee, Fort Gibson, Wagoner, Tahlequah & surrounding areas. Call now.",
  alternates: {
    canonical: "/dumpster-rental/muskogee",
  },
  // FIX (Task 4): og:url set to this page's own canonical URL instead of
  // inheriting the homepage root from the layout's openGraph.
  openGraph: {
    type: "website",
    siteName: "Rapid Dumpster Rental",
    title:
      "Dumpster Rental Muskogee OK | From $289 · Same-Day Delivery Available",
    description:
      "Roll off dumpster rental in Muskogee, OK starting at $289. 10, 20, 30 & 40 yard dumpsters. Same-day delivery to Muskogee, Fort Gibson, Wagoner, Tahlequah & surrounding areas.",
    url: "https://www.rapiddumpsterrental.site/dumpster-rental/muskogee",
    images: [
      {
        url: "https://www.rapiddumpsterrental.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dumpster Rental Muskogee, OK — Rapid Dumpster Rental",
      },
    ],
  },
};

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Rapid Dumpster Rental — Muskogee",
  url: "https://www.rapiddumpsterrental.site/dumpster-rental/muskogee",
  telephone: "+18005553867",
  priceRange: "$$",
  image:
    "https://www.rapiddumpsterrental.site/images/muskogee-ok-dumpster-delivery.jpg",
  description:
    "Affordable roll off dumpster rental in Muskogee, OK. Same-day delivery for residential and commercial projects. Serving Muskogee, Fort Gibson, Wagoner, Tahlequah, and surrounding Muskogee County communities.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muskogee",
    addressRegion: "OK",
    postalCode: "74401",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "35.7479",
    longitude: "-95.3697",
  },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
  },
  areaServed: [
    { "@type": "City", name: "Muskogee" },
    { "@type": "City", name: "Fort Gibson" },
    { "@type": "City", name: "Wagoner" },
    { "@type": "City", name: "Tahlequah" },
    { "@type": "City", name: "Checotah" },
    { "@type": "City", name: "Warner" },
    { "@type": "City", name: "Oktaha" },
    { "@type": "City", name: "Haskell" },
  ],
};

// FAQPage schema — earns People Also Ask boxes in SERPs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a dumpster rental cost in Muskogee, OK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dumpster rental in Muskogee typically costs between $289 and $625 depending on the size. A 10 yard dumpster starts at $289, a 20 yard at $389, a 30 yard at $489, and a 40 yard at $589. Final pricing depends on debris type, weight, and rental duration.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same-day dumpster delivery in Muskogee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Same-day dumpster delivery is available throughout Muskogee and surrounding communities including Fort Gibson, Wagoner, and Tahlequah when you call before noon.",
      },
    },
    {
      "@type": "Question",
      name: "What size dumpster do I need for my Muskogee project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 10 yard dumpster is best for small cleanouts and single-room jobs. A 20 yard handles roofing, kitchen remodels, and medium home cleanouts. A 30 yard suits large renovations and full home cleanouts. A 40 yard is for demolition, commercial jobs, and large-scale debris removal.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to rent a dumpster in Muskogee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A permit is required in Muskogee only if the dumpster is placed on a public street or city right-of-way. Most residential customers avoid this by placing the dumpster on their private driveway, which requires no permit. For street placement, contact Muskogee Public Works at (918) 684-6260.",
      },
    },
    {
      "@type": "Question",
      name: "How long can I keep a rental dumpster in Muskogee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard rental periods in Muskogee are 7 to 14 days depending on the size. Extensions are available at a daily rate. We can accommodate longer timelines for construction or large renovation projects — just call us.",
      },
    },
    {
      "@type": "Question",
      name: "What can I put in a dumpster in Muskogee, Oklahoma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can put household junk, furniture, appliances, construction debris, roofing shingles, drywall, wood, yard waste, and concrete. Prohibited items in Oklahoma include hazardous waste, paint cans, batteries, tires, Freon-containing appliances, and medical waste.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Fort Gibson, Wagoner, and Tahlequah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver throughout Muskogee County and surrounding areas including Fort Gibson, Wagoner, Tahlequah, Checotah, Warner, Oktaha, and Haskell. Same-day delivery is available in most of these communities.",
      },
    },
    {
      "@type": "Question",
      name: "What is the weight limit for a dumpster rental in Muskogee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weight limits vary by size: 10 yard dumpsters allow up to 2 tons, 20 yard up to 4 tons, 30 yard up to 6 tons, and 40 yard up to 8 tons. Overweight fees apply if you exceed the limit. Call us before booking if you have heavy debris like concrete, brick, or roofing shingles.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rent a dumpster for just one day in Muskogee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, single-day rentals are available in Muskogee with same-day drop-off and pickup. One-day rentals are popular for estate cleanouts, garage hauls, and roofing jobs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you rent dumpsters for port and commercial projects near Muskogee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Muskogee is home to one of Oklahoma's few inland ports and has an active commercial and industrial sector. We serve contractors, commercial facilities, and industrial clients with extended rentals, larger containers, and multi-unit delivery. Call for commercial and contractor pricing.",
      },
    },
  ],
};

// BreadcrumbList schema — breadcrumbs appear in SERP URL line, improving CTR
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
      item: "https://www.rapiddumpsterrental.site/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Muskogee, OK",
      item: "https://www.rapiddumpsterrental.site/dumpster-rental/muskogee",
    },
  ],
};

// ─── STATIC DATA ─────────────────────────────────────────────────────────────
const sizes = [
  {
    yards: "10",
    dims: "14′ × 8′ × 3.5′",
    price: "$289",
    weight: "2 tons",
    days: "7",
    best: "Garage cleanouts, small junk removal, single-room remodels",
  },
  {
    yards: "20",
    dims: "22′ × 8′ × 4.5′",
    price: "$389",
    weight: "4 tons",
    days: "10",
    best: "Roofing, kitchen remodels, medium home cleanouts",
    popular: true,
  },
  {
    yards: "30",
    dims: "22′ × 8′ × 6′",
    price: "$489",
    weight: "6 tons",
    days: "14",
    best: "Large renovations, full home cleanouts, construction sites",
  },
  {
    yards: "40",
    dims: "22′ × 8′ × 8′",
    price: "$589",
    weight: "8 tons",
    days: "14",
    best: "Demolition, commercial projects, large-scale debris removal",
  },
];

const reviews = [
  {
    name: "Travis W.",
    location: "Muskogee, OK",
    rating: 5,
    text: "Called first thing in the morning for a full home cleanout in Muskogee. Dumpster was delivered same day and the driver was professional and courteous. Exactly what they quoted, no extra charges at pickup.",
  },
  {
    name: "Rhonda S.",
    location: "Fort Gibson, OK",
    rating: 5,
    text: "Needed a dumpster delivered to Fort Gibson for a big estate cleanout. They handled the rural delivery without any issue. Great pricing and easy scheduling. Definitely recommend.",
  },
  {
    name: "Dennis K.",
    location: "Muskogee, OK",
    rating: 5,
    text: "Used them for a roofing project on a rental property I own in Muskogee. The 20 yard container handled all the shingles with room to spare. On-time pickup and the whole process was simple.",
  },
];

// Zip code table — ranks for "[community] dumpster rental" and "dumpster rental [zip]" queries
const serviceAreas = [
  { city: "Muskogee", zips: "74401–74403" },
  { city: "Fort Gibson", zips: "74434" },
  { city: "Wagoner", zips: "74467" },
  { city: "Tahlequah", zips: "74464–74465" },
  { city: "Checotah", zips: "74426" },
  { city: "Warner", zips: "74469" },
  { city: "Oktaha", zips: "74450" },
  { city: "Haskell", zips: "74436" },
  { city: "Webbers Falls", zips: "74470" },
  { city: "Muskogee County (rural)", zips: "74401–74470" },
];

const faqs = [
  {
    q: "How much does a dumpster rental cost in Muskogee, OK?",
    a: "Dumpster rental in Muskogee typically costs between $289 and $625 depending on size. A 10 yard starts at $289, a 20 yard at $389, a 30 yard at $489, and a 40 yard at $589. Final pricing depends on debris type, weight, and rental duration.",
  },
  {
    q: "Do you offer same-day dumpster delivery in Muskogee?",
    a: "Yes — same-day delivery is available throughout Muskogee and most surrounding communities including Fort Gibson, Wagoner, and Tahlequah when you call before noon.",
  },
  {
    q: "What size dumpster do I need for my Muskogee project?",
    a: "A 10 yard dumpster works for small cleanouts. A 20 yard handles roofing and kitchen remodels. A 30 yard suits large renovations. A 40 yard is for demolition and commercial work. Not sure? Call us and we'll recommend the right size.",
  },
  {
    q: "Do I need a permit to rent a dumpster in Muskogee?",
    a: "A permit is only required if the dumpster goes on a public street or city right-of-way. Most homeowners place the dumpster in their driveway, which requires no permit. For street placement in Muskogee, contact Public Works at (918) 684-6260.",
  },
  {
    q: "How long can I keep the dumpster?",
    a: "Standard rental periods are 7 to 14 days. Extensions are available at a daily rate. We accommodate longer schedules for construction or multi-phase renovation projects.",
  },
  {
    q: "What can I put in a dumpster in Muskogee, Oklahoma?",
    a: "Most household junk, furniture, appliances, construction debris, shingles, drywall, wood, and yard waste are fine. Prohibited items in Oklahoma include hazardous waste, paint cans, batteries, tires, and Freon-containing appliances.",
  },
  {
    q: "Do you serve Fort Gibson, Wagoner, and Tahlequah?",
    a: "Yes. We deliver throughout Muskogee County including Fort Gibson, Wagoner, Tahlequah, Checotah, Warner, Oktaha, Haskell, and Webbers Falls. Same-day delivery is available in most of these communities.",
  },
  {
    q: "What is the weight limit?",
    a: "10 yard: 2 tons · 20 yard: 4 tons · 30 yard: 6 tons · 40 yard: 8 tons. Overweight fees apply for heavy materials like concrete or brick. Call before booking if you have heavy debris.",
  },
  {
    q: "Can I rent a dumpster for just one day in Muskogee?",
    a: "Yes. Single-day rentals are available with same-day drop-off and pickup. Popular for estate cleanouts, garage hauls, and roofing jobs.",
  },
  {
    q: "Do you rent dumpsters for port and commercial projects near Muskogee?",
    a: "Yes. We serve commercial and industrial clients near the Port of Muskogee and throughout the area with extended rentals, larger containers, and multi-unit delivery for job sites. Call for commercial and contractor pricing.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function MuskogeeDumpsterPage() {
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
                href="/services"
                className="hover:text-primary transition-colors"
              >
                Locations
              </Link>
            </li>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <li className="text-gray-900 font-medium" aria-current="page">
              Muskogee, OK
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
                Muskogee, Oklahoma
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Dumpster Rental Muskogee OK
            </h1>

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
                4.9 / 5 from 47 Muskogee-area customers
              </span>
            </div>

            <p className="mt-4 text-lg text-muted-foreground">
              Roll off dumpster rental in Muskogee from <strong>$289</strong>.
              Same-day delivery for home cleanouts, construction, roofing, and
              commercial projects. Serving Muskogee, Fort Gibson, Wagoner,
              Tahlequah, and all of Muskogee County.
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

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                "Same-day delivery available",
                "No hidden fees",
                "7–14 day rentals",
                "All Muskogee County areas served",
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
            Roll Off Dumpster Sizes in Muskogee
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
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3">
            Dumpster Rental Prices in Muskogee, OK
          </h2>
          <p className="text-muted-foreground mb-8">
            The average cost of dumpster rental in Muskogee ranges from $289 to
            $625 depending on size, debris type, and rental period. All prices
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
                    "$289 – $359",
                    "Garage cleanouts, small remodels",
                  ],
                  [
                    "20 yard",
                    "22′ × 8′ × 4.5′",
                    "4 tons",
                    "$389 – $459",
                    "Roofing, kitchen remodels",
                  ],
                  [
                    "30 yard",
                    "22′ × 8′ × 6′",
                    "6 tons",
                    "$489 – $559",
                    "Large renovations, construction",
                  ],
                  [
                    "40 yard",
                    "22′ × 8′ × 8′",
                    "8 tons",
                    "$589 – $659",
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
            * Prices shown are starting rates for Muskogee. Overweight fees,
            extended rentals, and prohibited material surcharges may apply. Call
            for an exact quote.
          </p>
        </div>
      </section>

      {/* ── USE CASES ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What Can You Use a Dumpster For in Muskogee?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our Muskogee roll off dumpsters are commonly rented for:
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
              "Commercial and port facility cleanouts",
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
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            What Muskogee Customers Say
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
              4.9 average · 47 reviews
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

      {/* ── SERVICE AREA + ZIP CODES ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Dumpster Rental Service Area — Muskogee County & Surrounding
            Communities
          </h2>
          <p className="text-muted-foreground mb-6">
            We provide same-day and next-day dumpster delivery throughout
            Muskogee and Muskogee County. Below are the communities and zip
            codes we regularly serve:
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">
                    City / Community
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
            Do You Need a Permit for a Dumpster in Muskogee?
          </h3>
          <p className="text-muted-foreground mb-3">
            A permit is required in Muskogee only if the dumpster is placed on a
            public street or city right-of-way. Most residential customers avoid
            this entirely by placing the dumpster on their private driveway — no
            permit needed in that case.
          </p>
          <p className="text-muted-foreground">
            For street placement, contact <strong>Muskogee Public Works</strong>{" "}
            at (918) 684-6260. Permit requirements vary in Fort Gibson, Wagoner,
            and Tahlequah — call us before delivery and we can advise on your
            specific location.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Muskogee Dumpster Rental — Frequently Asked Questions
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
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                label: "Dumpster Rental Bartlesville, OK",
                href: "/dumpster-rental/bartlesville",
              },
              { label: "Dumpster Sizes Guide", href: "/#sizes" },
              { label: "Contact & Free Quote", href: "/contact" },
              { label: "All Locations", href: "/services" },
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

      {/* ── RELATED GUIDES (Task 9) ─────────────────────────────────────── */}
      <section className="py-16 bg-muted border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Related Guides
          </h2>
          <p className="text-muted-foreground mb-6">
            Planning your project? These guides help you size, fill, and
            schedule your dumpster rental.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "What Size Dumpster Do I Need?",
                href: "/blog/what-size-dumpster-do-i-need-2026",
              },
              {
                label: "What Can You Put in a Dumpster?",
                href: "/blog/what-can-you-put-in-a-dumpster",
              },
              {
                label: "How Long Can You Keep a Rental Dumpster?",
                href: "/blog/how-long-can-you-keep-a-rental-dumpster",
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="block border border-gray-200 rounded-xl p-5 bg-white hover:border-primary hover:shadow-sm transition-all"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-primary">
                  <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  {g.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section id="quote" className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Get a Dumpster in Muskogee Today — From $289
          </h2>
          <p className="mt-4 text-white/80 max-w-xl">
            Same-day delivery available throughout Muskogee, Fort Gibson,
            Wagoner, Tahlequah, and surrounding Muskogee County communities.
            Call now for an instant quote with no obligation.
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
