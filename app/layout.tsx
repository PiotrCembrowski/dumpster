import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// ─── FONTS ────────────────────────────────────────────────────────────────────
// FIX: Fonts were prefixed with _ (intentionally unused convention) but still
// being loaded on every request — wasting bandwidth without applying to anything.
// Converted to CSS variable pattern so they actually apply to the document.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ─── SITEWIDE SCHEMA ─────────────────────────────────────────────────────────
// Organization schema belongs in the layout — it applies to every page and
// tells Google the canonical identity of the business across the entire domain.
// WebSite schema enables the sitelinks search box in Google Knowledge Panels.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rapid Dumpster Rental",
  url: "https://www.rapiddumpsterrental.site",
  logo: "https://www.rapiddumpsterrental.site/images/logo.png",
  telephone: "+18005553867",
  email: "info@rapiddumpsterrental.site",
  description:
    "Affordable roll off dumpster rental with same-day delivery. Serving Oklahoma, Texas, Nebraska, South Dakota, and North Dakota.",
  areaServed: ["Oklahoma", "Texas", "Nebraska", "South Dakota", "North Dakota"],
  sameAs: [],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rapid Dumpster Rental",
  url: "https://www.rapiddumpsterrental.site",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.rapiddumpsterrental.site/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // FIX: Brand name corrected from "Dumpster Direct Services"
  // FIX: Price anchor added for CTR improvement in SERPs
  title: "Rapid Dumpster Rental | Same-Day Roll Off Dumpsters From $269",

  // FIX: Description updated — original was generic boilerplate
  description:
    "Roll off dumpster rental starting at $269. Same-day delivery available. 10, 20, 30 & 40 yard dumpsters for home cleanouts, roofing, construction, and demolition. No hidden fees.",

  // FIX: generator: "v0.app" removed.
  // This tag told every crawler and competitor the site was auto-generated,
  // signalling low quality to Google's quality raters. Removed entirely.

  // Open Graph — required for proper link previews on Medium, Substack,
  // Tumblr, and Blogger posts that link back to the site.
  openGraph: {
    type: "website",
    siteName: "Rapid Dumpster Rental",
    title: "Rapid Dumpster Rental | Same-Day Roll Off Dumpsters From $269",
    description:
      "Roll off dumpster rental starting at $269. Same-day delivery for home cleanouts, roofing, construction, and demolition. No hidden fees.",
    url: "https://www.rapiddumpsterrental.site",
    images: [
      {
        url: "https://www.rapiddumpsterrental.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rapid Dumpster Rental — Same-day roll off dumpster delivery",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Rapid Dumpster Rental | Same-Day Roll Off Dumpsters From $269",
    description:
      "Roll off dumpster rental starting at $269. Same-day delivery available. No hidden fees.",
    images: ["https://www.rapiddumpsterrental.site/images/og-image.jpg"],
  },

  // Canonical base URL — Next.js uses this for all relative canonical tags
  metadataBase: new URL("https://www.rapiddumpsterrental.site"),

  // Robots — explicit allow for homepage
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Sitewide schema — injected once on every page via the layout */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      {/* FIX: Font CSS variables applied to body so Tailwind font-sans picks them up */}
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
