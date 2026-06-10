import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rapiddumpsterrental.site";
  const lastModified = new Date("2026-06-09");

  const cityPages = [
    "bartlesville",
    "muskogee",
    "scottsbluff",
    "pierre",
    "jamestown",
  ].map((city) => ({
    url: `${baseUrl}/dumpster-rental/${city}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts = [
    "how-much-does-a-dumpster-rental-cost",
    "what-size-dumpster-do-i-need",
    "what-can-you-put-in-a-dumpster",
    "dumpster-rental-for-home-cleanout",
    "construction-dumpster-rental-guide",
    "what-size-dumpster-do-i-need-2026",
    "what-size-dumpster-for-roof-replacement",
    "dumpster-rental-vs-junk-removal",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
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
    ...cityPages,
    ...blogPosts,
  ];
}
