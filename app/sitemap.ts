import { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { servicePages } from "@/lib/services-data";
import { sizePages } from "@/lib/sizes-data";
import { blogPosts } from "@/lib/blog-data";

// Sitemap is derived from the same data the pages render from, so new cities,
// services, sizes, and posts appear automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rapiddumpsterrental.site";
  const lastModified = new Date("2026-07-03");

  const cityUrls = cities.map((c) => ({
    url: `${baseUrl}/dumpster-rental/${c.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceUrls = servicePages.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sizeUrls = sizePages.map((s) => ({
    url: `${baseUrl}/dumpster-sizes/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogUrls = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dumpster-sizes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [
    ...staticUrls,
    ...cityUrls,
    ...serviceUrls,
    ...sizeUrls,
    ...blogUrls,
  ];
}
