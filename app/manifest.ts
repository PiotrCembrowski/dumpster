import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rapid Dumpster Rental",
    short_name: "Rapid Dumpster",
    description:
      "Same-day roll off dumpster rental. 10, 20, 30 & 40 yard dumpsters with transparent pricing.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0c",
    theme_color: "#E0B33C",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}
