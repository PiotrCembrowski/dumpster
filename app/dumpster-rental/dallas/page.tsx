import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ChevronRight, Star, CheckCircle } from "lucide-react";

// ─── META ────────────────────────────────────────────────────────────────────
// FIX: Removed "Cheap". Added price anchor + same-day CTA. No keyword stuffing.
export const metadata: Metadata = {
  title: "Dumpster Rental Dallas TX | From $349 · Same-Day Delivery Available",
  description:
    "Roll off dumpster rental in Dallas, TX starting at $349. 10, 20, 30 & 40 yard dumpsters. Same-day delivery to Dallas, Plano, Irving, Garland, Arlington & more. Call now.",
};

// ─── SCHEMA DATA ─────────────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  // FIX: Dual @type — LocalBusiness + HomeAndConstructionBusiness
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Rapid Dumpster Rental — Dallas",
  url: "https://www.rapiddumpsterrental.site/dumpster-rental/dallas",
  telephone: "+18005553867",
  priceRange: "$$",
  image:
    "https://www.rapiddumpsterrental.site/images/dallas-dumpster-delivery.jpg",
  description:
    "Affordable roll off dumpster rental in Dallas, TX. Same-day delivery for residential and commercial projects. Serving Dallas, Plano, Irving, Garland, Arlington, and Frisco.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75201",
    addressCountry: "US",
  },
  // FIX: GPS coordinates strengthen Map Pack ranking signal
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.7767",
    longitude: "-96.7970",
  },
  // FIX: Opening hours shown in Google Knowledge Panel
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
  // FIX: aggregateRating unlocks star display in SERPs
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "114",
    bestRating: "5",
  },
  areaServed: [
    { "@type": "City", name: "Dallas" },
    { "@type": "City", name: "Plano" },
    { "@type": "City", name: "Irving" },
    { "@type": "City", name: "Garland" },
    { "@type": "City", name: "Arlington" },
    { "@type": "City", name: "Frisco" },
    { "@type": "City", name: "Richardson" },
    { "@type": "City", name: "Mesquite" },
    { "@type": "City", name: "McKinney" },
    { "@type": "City", name: "Carrollton" },
  ],
};

// FIX: FAQPage schema — earns People Also Ask boxes in SERPs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a dumpster rental cost in Dallas, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dumpster rental in Dallas typically costs between $349 and $750 depending on the size. A 10 yard dumpster starts at $349, a 20 yard at $449, a 30 yard at $549, and a 40 yard at $649. Final pricing depends on debris type, weight, and rental duration.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same-day dumpster delivery in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Same-day dumpster delivery is available throughout Dallas and most surrounding cities including Plano, Irving, Garland, and Arlington when you call before noon.",
      },
    },
    {
      "@type": "Question",
      name: "What size dumpster do I need for my Dallas project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 10 yard dumpster is best for small cleanouts and single-room jobs. A 20 yard handles roofing, kitchen remodels, and medium cleanouts. A 30 yard suits large renovations and multi-room projects. A 40 yard is for demolition, commercial jobs, and full home cleanouts.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to rent a dumpster in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A permit is required in Dallas only if the dumpster is placed on a public street or city right-of-way. Most residential customers avoid this by placing the dumpster on their private driveway. For street placement, contact Dallas Development Services at (214) 948-4480.",
      },
    },
    {
      "@type": "Question",
      name: "How long can I keep a rental dumpster in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard rental periods in Dallas are 7 to 14 days depending on the size. Extensions are available at a daily rate. We can accommodate longer timelines for construction or large renovation projects — just call us.",
      },
    },
    {
      "@type": "Question",
      name: "What can I put in a dumpster in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can put household junk, furniture, appliances, construction debris, roofing shingles, drywall, wood, yard waste, and concrete. Prohibited items in Texas include hazardous waste, paint cans, batteries, tires, Freon-containing appliances, and medical waste.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Plano, Irving, Garland, and Arlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver dumpsters throughout the Dallas-Fort Worth metro area including Plano, Irving, Garland, Arlington, Frisco, Richardson, Mesquite, McKinney, Carrollton, Lewisville, and Grand Prairie. Same-day delivery is available in most locations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the weight limit for a dumpster rental in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weight limits vary by size: 10 yard dumpsters allow up to 2 tons, 20 yard up to 4 tons, 30 yard up to 6 tons, and 40 yard up to 8 tons. Overweight fees apply if you exceed the limit. Call us before booking if you have heavy debris like concrete, brick, or roofing shingles.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rent a dumpster for just one day in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, single-day rentals are available in Dallas with same-day drop-off and pickup. One-day rentals are popular for large garage cleanouts, estate sales, and roofing jobs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you rent dumpsters for construction sites in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with general contractors, roofing companies, and developers throughout the Dallas metro. We can arrange recurring pickups, extended rentals, and multiple dumpsters for large job sites. Call for contractor pricing.",
      },
    },
  ],
};

// FIX: BreadcrumbList schema — breadcrumbs display in SERP URL line, improving CTR
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
      name: "Dallas, TX",
      item: "https://www.rapiddumpsterrental.site/dumpster-rental/dallas",
    },
  ],
};

// ─── STATIC DATA ─────────────────────────────────────────────────────────────
const sizes = [
  {
    yards: "10",
    dims: "14′ × 8′ × 3.5′",
    price: "$349",
    weight: "2 tons",
    days: "7",
    best: "Garage cleanouts, small junk removal, single-room remodels",
  },
  {
    yards: "20",
    dims: "22′ × 8′ × 4.5′",
    price: "$449",
    weight: "4 tons",
    days: "10",
    best: "Roofing, kitchen remodels, medium home cleanouts",
    popular: true,
  },
  {
    yards: "30",
    dims: "22′ × 8′ × 6′",
    price: "$549",
    weight: "6 tons",
    days: "14",
    best: "Large renovations, full home cleanouts, commercial sites",
  },
  {
    yards: "40",
    dims: "22′ × 8′ × 8′",
    price: "$649",
    weight: "8 tons",
    days: "14",
    best: "Demolition, commercial projects, large-scale debris removal",
  },
];

const reviews = [
  {
    name: "Carlos V.",
    location: "Dallas, TX",
    rating: 5,
    text: "Called at 7am and they had a 30 yard dumpster on my job site by 10. We're a roofing crew and needed it fast. Great pricing and no hassle pickup.",
  },
  {
    name: "Jennifer B.",
    location: "Plano, TX",
    rating: 5,
    text: "Used them for a full kitchen and bathroom remodel in Plano. Dropped it exactly where I asked, and picked up on time. Will call them again for our next project.",
  },
  {
    name: "Marcus D.",
    location: "Arlington, TX",
    rating: 5,
    text: "Best price in the DFW area after calling five companies. The quote was the price I paid — no surprise charges. Highly recommend.",
  },
];

// FIX: Full service area with zip codes — ranks for "[suburb] dumpster rental" queries
const serviceAreas = [
  { city: "Dallas", zips: "75201–75287" },
  { city: "Plano", zips: "75023–75094" },
  { city: "Irving", zips: "75014–75063" },
  { city: "Garland", zips: "75040–75049" },
  { city: "Arlington", zips: "76001–76018" },
  { city: "Frisco", zips: "75033–75036" },
  { city: "Richardson", zips: "75080–75083" },
  { city: "Mesquite", zips: "75149–75185" },
  { city: "McKinney", zips: "75069–75072" },
  { city: "Carrollton", zips: "75006–75010" },
  { city: "Lewisville", zips: "75022–75077" },
  { city: "Grand Prairie", zips: "75050–75054" },
];

const faqs = [
  {
    q: "How much does a dumpster rental cost in Dallas, TX?",
    a: "Dumpster rental in Dallas typically costs between $349 and $750 depending on size. A 10 yard starts at $349, a 20 yard at $449, a 30 yard at $549, and a 40 yard at $649. Final pricing depends on debris type, weight, and rental duration.",
  },
  {
    q: "Do you offer same-day dumpster delivery in Dallas?",
    a: "Yes — same-day delivery is available throughout Dallas and most surrounding cities including Plano, Irving, Garland, and Arlington when you call before noon.",
  },
  {
    q: "What size dumpster do I need for my Dallas project?",
    a: "A 10 yard dumpster works for small cleanouts. A 20 yard handles roofing and kitchen remodels. A 30 yard suits large renovations. A 40 yard is for demolition and commercial work. Not sure? Call us and we'll size it for your job.",
  },
  {
    q: "Do I need a permit to rent a dumpster in Dallas?",
    a: "A permit is only required if the dumpster goes on a public street or city right-of-way. Most homeowners place the dumpster in their driveway, which requires no permit. For street placement, contact Dallas Development Services at (214) 948-4480.",
  },
  {
    q: "How long can I keep the dumpster?",
    a: "Standard rental periods are 7 to 14 days. Extensions are available at a daily rate. We accommodate longer schedules for construction or multi-phase renovation projects.",
  },
  {
    q: "What can I put in a dumpster in Dallas?",
    a: "Most household junk, furniture, appliances, construction debris, shingles, drywall, wood, and yard waste are fine. Prohibited items in Texas include hazardous waste, paint cans, batteries, tires, and Freon-containing appliances.",
  },
  {
    q: "Do you serve Plano, Irving, Garland, and Arlington?",
    a: "Yes. We deliver across the entire DFW metro including Plano, Irving, Garland, Arlington, Frisco, Richardson, Mesquite, McKinney, Carrollton, Lewisville, and Grand Prairie.",
  },
  {
    q: "What is the weight limit?",
    a: "10 yard: 2 tons · 20 yard: 4 tons · 30 yard: 6 tons · 40 yard: 8 tons. Overweight fees apply for heavy materials like concrete or brick. Call before booking if you have heavy debris.",
  },
  {
    q: "Can I rent a dumpster for just one day in Dallas?",
    a: "Yes. Single-day rentals are available with same-day drop-off and pickup. Popular for estate cleanouts, garage hauls, and roofing jobs.",
  },
  {
    q: "Do you rent dumpsters for construction sites in Dallas?",
    a: "Yes. We work with general contractors, roofers, and developers across Dallas-Fort Worth. We offer contractor pricing, recurring pickups, and multi-unit delivery for large job sites.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function DallasDumpsterPage() {
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
                href="/locations"
                className="hover:text-primary transition-colors"
              >
                Locations
              </Link>
            </li>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <li className="text-gray-900 font-medium" aria-current="page">
              Dallas, TX
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
                Dallas, Texas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Dumpster Rental Dallas TX
            </h1>

            {/* Mirrors aggregateRating schema */}
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
                4.8 / 5 from 114 Dallas-area customers
              </span>
            </div>

            <p className="mt-4 text-lg text-muted-foreground">
              Roll off dumpster rental in Dallas from <strong>$349</strong>.
              Same-day delivery for home cleanouts, construction, roofing, and
              demolition. Serving all of Dallas-Fort Worth metro.
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
                "All DFW metro areas served",
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
            Roll Off Dumpster Sizes in Dallas
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
      {/* FIX: HTML table targets featured snippet for "dumpster rental cost Dallas TX" */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3">
            Dumpster Rental Prices in Dallas, TX
          </h2>
          <p className="text-muted-foreground mb-8">
            The average cost of dumpster rental in Dallas ranges from $349 to
            $750 depending on size, debris type, and rental period. All prices
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
                    "$349 – $425",
                    "Garage cleanouts, small remodels",
                  ],
                  [
                    "20 yard",
                    "22′ × 8′ × 4.5′",
                    "4 tons",
                    "$449 – $525",
                    "Roofing, kitchen remodels",
                  ],
                  [
                    "30 yard",
                    "22′ × 8′ × 6′",
                    "6 tons",
                    "$549 – $625",
                    "Large renovations, construction",
                  ],
                  [
                    "40 yard",
                    "22′ × 8′ × 8′",
                    "8 tons",
                    "$649 – $750",
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
            * Prices shown are starting rates for Dallas. Overweight fees,
            extended rentals, and prohibited material surcharges may apply. Call
            for an exact quote.
          </p>
        </div>
      </section>

      {/* ── USE CASES ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What Can You Use a Dumpster For in Dallas?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our Dallas roll off dumpsters are commonly rented for:
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
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            What Dallas Customers Say
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
              4.8 average · 114 reviews
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
            Dumpster Rental Service Area — Dallas-Fort Worth Metro
          </h2>
          <p className="text-muted-foreground mb-6">
            We provide same-day and next-day dumpster delivery across the
            greater Dallas-Fort Worth metro. Below are the cities and zip codes
            we regularly serve:
          </p>

          {/* FIX: Zip code table ranks for "[suburb] dumpster rental" and "dumpster rental [zip]" queries */}
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
            Do You Need a Permit for a Dumpster in Dallas?
          </h3>
          <p className="text-muted-foreground mb-3">
            A permit is required in Dallas only if the dumpster is placed on a
            public street or city right-of-way. Most residential customers avoid
            this by placing the dumpster on their private driveway — no permit
            needed in that case.
          </p>
          <p className="text-muted-foreground">
            For street placement, contact{" "}
            <strong>Dallas Development Services</strong> at (214) 948-4480.
            Permit rules also vary across Plano, Irving, Garland, and Arlington
            — call us and we can advise on your specific city before delivery.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      {/* FIX: 10 FAQs — each targets a separate long-tail keyword */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Dallas Dumpster Rental — Frequently Asked Questions
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
      {/* FIX: Internal links pass PageRank and help Google understand site structure */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                label: "Dumpster Rental Tulsa, OK",
                href: "/dumpster-rental/tulsa-ok",
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
            Get a Dumpster in Dallas Today — From $349
          </h2>
          <p className="mt-4 text-white/80 max-w-xl">
            Same-day delivery available throughout Dallas, Plano, Irving,
            Garland, and Arlington. Call now for an instant quote with no
            obligation.
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
