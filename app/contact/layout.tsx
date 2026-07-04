import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Rapid Dumpster Rental | Free Same-Day Dumpster Quote",
  description:
    "Get a free dumpster rental quote. Call (800) 555-3867 or send your project details for same-day roll off delivery across OK, NE, SD, and ND.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    siteName: "Rapid Dumpster Rental",
    title: "Contact Rapid Dumpster Rental | Free Same-Day Dumpster Quote",
    description:
      "Get a free dumpster rental quote. Call (800) 555-3867 or send your project details for same-day roll off delivery.",
    url: "https://www.rapiddumpsterrental.site/contact",
    images: [
      {
        url: "https://www.rapiddumpsterrental.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Rapid Dumpster Rental",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}