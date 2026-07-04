// ─── STRUCTURED DATA BUILDERS ────────────────────────────────────────────────
// Typed JSON-LD builders. Every page composes the nodes it needs into a single
// @graph via `graph(...)` and renders it in one <script type="application/ld+json">.
//
// RULES (non-negotiable): never emit rating or testimonial schema types.

import type { City } from "./cities";

export const SITE_URL = "https://www.rapiddumpsterrental.site";
export const BRAND = "Rapid Dumpster Rental";
export const PHONE = "+18005553867";
export const EMAIL = "info@rapiddumpsterrental.site";

// Stable @id anchors so nodes can reference each other across the graph.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLd = Record<string, unknown>;

/** Absolute URL from a site-relative path. */
export function abs(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function organizationNode(): JsonLd {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/images/og-image.jpg`,
    telephone: PHONE,
    email: EMAIL,
    description:
      "Affordable roll off dumpster rental with same-day delivery. Serving Oklahoma, Nebraska, South Dakota, and North Dakota.",
    areaServed: ["Oklahoma", "Nebraska", "South Dakota", "North Dakota"],
    sameAs: [],
  };
}

export function websiteNode(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BRAND,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * LocalBusiness for a city page. Deliberately OMITS any rating/testimonial data.
 * `description` includes the city's starting price per the content spec.
 */
export function localBusinessNode(city: City): JsonLd {
  const path = `/dumpster-rental/${city.slug}`;
  return {
    "@type": "LocalBusiness",
    "@id": `${abs(path)}#business`,
    name: BRAND,
    url: abs(path),
    parentOrganization: { "@id": ORG_ID },
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    image: `${SITE_URL}/images/og-image.jpg`,
    description: `Same-day roll off dumpster rental in ${city.name}, ${city.stateAbbr} starting at $${city.startingPrice}. 10, 20, 30 and 40 yard dumpsters for residential, construction, and commercial projects.`,
    areaServed: [
      { "@type": "City", name: city.name, addressRegion: city.stateAbbr },
      ...city.nearby.map((n) => ({
        "@type": "City",
        name: n,
        addressRegion: city.stateAbbr,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
  };
}

export function serviceNode(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): JsonLd {
  return {
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: ["Oklahoma", "Nebraska", "South Dakota", "North Dakota"],
  };
}

export interface Crumb {
  name: string;
  path?: string; // omit on the current page
}

export function breadcrumbNode(crumbs: Crumb[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: abs(c.path) } : {}),
    })),
  };
}

export interface QA {
  q: string;
  a: string;
}

export function faqPageNode(qa: QA[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function blogPostingNode(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}): JsonLd {
  return {
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    image: abs(opts.image),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: BRAND, url: SITE_URL },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(opts.path) },
  };
}

/** Wrap nodes in a single @graph document. */
export function graph(...nodes: JsonLd[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  });
}

/** Convenience: render-ready props for a <script> tag. */
export function jsonLdProps(json: string) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: json },
  };
}
