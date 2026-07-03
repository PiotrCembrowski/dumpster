// ─── SHARED CITY DATA ────────────────────────────────────────────────────────
// Single source of truth for the five service markets. Used by /locations, the
// LocalBusiness schema builder, and cross-linking. Only verifiable geographic
// facts (county, well-known nearby communities) — no invented specifics.

export interface City {
  slug: string;
  name: string; // City name only, e.g. "Bartlesville"
  state: string; // Full state, e.g. "Oklahoma"
  stateAbbr: string; // "OK"
  county: string; // e.g. "Washington County"
  startingPrice: number; // 10-yard starting price used on the city page
  region: string; // Short regional descriptor for areaServed / copy
  nearby: string[]; // Nearby communities already referenced on the city page
  blurb: string; // One-line summary for the /locations card
}

export const cities: City[] = [
  {
    slug: "bartlesville",
    name: "Bartlesville",
    state: "Oklahoma",
    stateAbbr: "OK",
    county: "Washington County",
    startingPrice: 289,
    region: "Washington County and northeast Oklahoma",
    nearby: ["Dewey", "Nowata", "Copan", "Ochelata", "Ramona"],
    blurb:
      "Roll off dumpsters for home cleanouts, roofing, and Washington County job sites.",
  },
  {
    slug: "muskogee",
    name: "Muskogee",
    state: "Oklahoma",
    stateAbbr: "OK",
    county: "Muskogee County",
    startingPrice: 289,
    region: "Muskogee County and eastern Oklahoma",
    nearby: ["Fort Gibson", "Wagoner", "Tahlequah", "Checotah"],
    blurb:
      "Same-day containers for remodels, cleanouts, and contractor work near the Three Rivers.",
  },
  {
    slug: "scottsbluff",
    name: "Scottsbluff",
    state: "Nebraska",
    stateAbbr: "NE",
    county: "Scotts Bluff County",
    startingPrice: 279,
    region: "the Nebraska Panhandle",
    nearby: ["Gering", "Mitchell", "Morrill", "Bayard"],
    blurb:
      "Dumpsters for Panhandle cleanouts, ag and construction debris, and roofing.",
  },
  {
    slug: "pierre",
    name: "Pierre",
    state: "South Dakota",
    stateAbbr: "SD",
    county: "Hughes County",
    startingPrice: 269,
    region: "central South Dakota",
    nearby: ["Fort Pierre", "Blunt", "Onida", "Harrold"],
    blurb:
      "Roll off rental for the capital area — residential, government, and commercial work.",
  },
  {
    slug: "jamestown",
    name: "Jamestown",
    state: "North Dakota",
    stateAbbr: "ND",
    county: "Stutsman County",
    startingPrice: 269,
    region: "the James River Valley",
    nearby: ["Valley City", "Carrington", "Medina", "Buchanan"],
    blurb:
      "Containers for James River Valley cleanouts, renovations, and construction.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
