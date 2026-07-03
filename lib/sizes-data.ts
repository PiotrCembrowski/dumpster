// ─── DUMPSTER SIZE PAGE DATA ─────────────────────────────────────────────────
// One entry per size page. Content is written distinctly per size — different
// fit examples, overage math, and FAQs. Sizes offered: 10, 20, 30, 40 yard only.

export interface SizePage {
  slug: string;
  yards: number;
  name: string; // "10 Yard Dumpster"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  dimensions: string;
  weightTons: number;
  rentalDays: number;
  startingPrice: number;
  popular?: boolean;
  fits: string[];
  bestFor: string;
  sections: { heading: string; paragraphs: string[] }[];
  overage: string;
  sizeUp: string;
  faqs: { q: string; a: string }[];
  relatedService: { label: string; slug: string };
  relatedPosts: { label: string; slug: string }[];
}

export const sizePages: SizePage[] = [
  {
    slug: "10-yard-dumpster-rental",
    yards: 10,
    name: "10 Yard Dumpster",
    metaTitle: "10 Yard Dumpster Rental | Dimensions, Weight & Price",
    metaDescription:
      "10 yard dumpster rental from $269. Dimensions, 2-ton weight limit, what fits, and when to size up. Best for small cleanouts and heavy, dense debris.",
    h1: "10 Yard Dumpster Rental",
    lede:
      "The smallest roll off we offer, and the right call for small cleanouts and heavy, dense debris where weight caps out before volume does.",
    dimensions: "14 ft long × 8 ft wide × 3.5 ft high",
    weightTons: 2,
    rentalDays: 7,
    startingPrice: 269,
    fits: [
      "About 3 pickup-truck loads of debris",
      "A single-room cleanout or a small bathroom remodel",
      "Roughly 8–10 roofing squares of shingles (weight-limited)",
      "A garage or shed purge",
    ],
    bestFor: "Small cleanouts, single rooms, and dense/heavy debris",
    sections: [
      {
        heading: "What the 10 yard is actually for",
        paragraphs: [
          "The 10 yard is a low, compact container that fits almost anywhere — a single driveway lane, a tight side yard, even a small parking spot. Its low walls make it easy to load by hand, which is why it's popular for cleanouts where you're carrying items out one at a time.",
          "It's also the smart choice for heavy material. Concrete, brick, dirt, and shingles are so dense that they hit a container's weight limit long before they fill it. Putting that debris in a small container keeps you from paying for cubic yards you can't legally use.",
        ],
      },
      {
        heading: "Where the 10 yard falls short",
        paragraphs: [
          "The trap with the 10 yard is bulky, light debris. Furniture, cabinets, and general household junk fill the volume fast without ever getting heavy. If your project is a whole-house cleanout or a multi-room remodel, the 10 yard will overflow and you'll end up paying two delivery fees. When the debris is bulky rather than dense, step up to a 20 yard.",
        ],
      },
    ],
    overage:
      "The 10 yard includes a 2-ton (4,000 lb) weight allowance. Go over and you're charged a per-ton overage fee, typically $75–$100 per ton. Two tons sounds like a lot until you're loading concrete or shingles — a small volume of either can reach it, so estimate weight, not just how full the box looks.",
    sizeUp:
      "Size up to the 20 yard when your debris is bulky rather than dense — furniture, cabinetry, or a cleanout spanning more than one room. The price difference is small next to a second delivery fee.",
    faqs: [
      {
        q: "How much does a 10 yard dumpster hold?",
        a: "About 10 cubic yards, or roughly three pickup-truck loads. For a single-room cleanout or a small bathroom remodel, that's usually enough.",
      },
      {
        q: "What's the weight limit on a 10 yard dumpster?",
        a: "Two tons (4,000 lb). Because it's easy to hit that with dense debris, the 10 yard is often the best size for concrete, brick, or dirt even though it's the smallest.",
      },
      {
        q: "Will a 10 yard fit in my driveway?",
        a: "Almost always. At 14 feet long it takes up about one car length and fits a single driveway lane without blocking the road.",
      },
      {
        q: "Is a 10 yard big enough for a garage cleanout?",
        a: "For a standard one- or two-car garage, usually yes. If the garage is packed floor to ceiling or you're adding debris from other rooms, consider a 20 yard.",
      },
    ],
    relatedService: {
      label: "Residential dumpster rental",
      slug: "residential-dumpster-rental",
    },
    relatedPosts: [
      { label: "Heavy debris dumpster guide", slug: "heavy-debris-dumpster-guide" },
      { label: "What can you put in a dumpster?", slug: "what-can-you-put-in-a-dumpster" },
    ],
  },
  {
    slug: "20-yard-dumpster-rental",
    yards: 20,
    name: "20 Yard Dumpster",
    metaTitle: "20 Yard Dumpster Rental | Most Popular Size, Price & Fit",
    metaDescription:
      "20 yard dumpster rental from $369. Dimensions, 4-ton weight limit, what fits, and when to size up. The most popular size for remodels and roofing.",
    h1: "20 Yard Dumpster Rental",
    lede:
      "The most-rented size and the default answer for most homeowners. Enough capacity for a real project without the length that makes bigger containers hard to place.",
    dimensions: "22 ft long × 8 ft wide × 4.5 ft high",
    weightTons: 4,
    rentalDays: 10,
    startingPrice: 369,
    popular: true,
    fits: [
      "About 6 pickup-truck loads of debris",
      "A kitchen remodel or a large multi-room cleanout",
      "A single-layer roof tear-off up to ~2,500 sq ft",
      "Carpet and flooring from a whole floor of a house",
    ],
    bestFor: "Remodels, roofing tear-offs, and medium-to-large cleanouts",
    sections: [
      {
        heading: "Why the 20 yard is the popular pick",
        paragraphs: [
          "The 20 yard hits the balance most projects need. It holds roughly six pickup loads — enough for a kitchen remodel or a large cleanout — while staying short enough to fit a normal driveway without a special truck or street placement.",
          "Its higher walls hold more volume than a 10 yard, but it's still low enough to load without a ramp for most items. For the average homeowner doing one substantial project, this is the container to start from.",
        ],
      },
      {
        heading: "The 20 yard and roofing",
        paragraphs: [
          "Roofing is the one place to watch the 20 yard closely. It carries a 4-ton allowance, which covers a single-layer tear-off on most homes up to about 2,500 square feet. Add a second layer of shingles or old decking and you can blow past four tons while the box still looks like it has room. For two-layer tear-offs, move up to a 30 yard.",
        ],
      },
    ],
    overage:
      "The 20 yard includes a 4-ton (8,000 lb) allowance. That's generous for household and remodel debris but tight for roofing and masonry. Overage runs about $75–$100 per ton over the limit, so if your load leans heavy, confirm the estimate before you fill it.",
    sizeUp:
      "Step up to a 30 yard for whole-home renovations, two-layer roof tear-offs, or any job where debris is both bulky and heavy. Step down to a 10 yard if the load is small or purely dense material like concrete.",
    faqs: [
      {
        q: "What can a 20 yard dumpster hold?",
        a: "About 20 cubic yards, or six pickup-truck loads. It comfortably handles a kitchen remodel, a large cleanout, or a single-layer roof tear-off on most homes.",
      },
      {
        q: "Why is the 20 yard the most popular size?",
        a: "It's the balance point — enough capacity for a real project, but short enough to fit a standard driveway without a longer delivery truck or street placement.",
      },
      {
        q: "Is a 20 yard big enough for a roof?",
        a: "For a single-layer tear-off up to about 2,500 square feet, yes. Two layers or added decking push the weight past the 4-ton allowance, so size up to a 30 yard for those.",
      },
      {
        q: "How long is the rental period on a 20 yard?",
        a: "The base price covers about 10 days. If you need longer, call before pickup and extend at a daily rate.",
      },
    ],
    relatedService: {
      label: "Roofing dumpster rental",
      slug: "roofing-dumpster-rental",
    },
    relatedPosts: [
      { label: "What size dumpster do I need?", slug: "what-size-dumpster-do-i-need-2026" },
      { label: "What size dumpster for a roof replacement?", slug: "what-size-dumpster-for-roof-replacement" },
    ],
  },
  {
    slug: "30-yard-dumpster-rental",
    yards: 30,
    name: "30 Yard Dumpster",
    metaTitle: "30 Yard Dumpster Rental | Big Projects, Price & Weight",
    metaDescription:
      "30 yard dumpster rental from $469. Dimensions, 6-ton weight limit, what fits, and when to size up. Best for large renovations and whole-home cleanouts.",
    h1: "30 Yard Dumpster Rental",
    lede:
      "A large container for renovations and cleanouts that generate debris in waves. High walls, real capacity, and a weight allowance that handles heavier jobs.",
    dimensions: "22 ft long × 8 ft wide × 6 ft high",
    weightTons: 6,
    rentalDays: 14,
    startingPrice: 469,
    fits: [
      "About 9 pickup-truck loads of debris",
      "A whole-home cleanout or a multi-room renovation",
      "A two-layer roof tear-off with decking",
      "Debris from a major remodel spanning several weeks",
    ],
    bestFor: "Large renovations, whole-home cleanouts, and construction",
    sections: [
      {
        heading: "When a project earns the 30 yard",
        paragraphs: [
          "The 30 yard is the size for projects that produce debris continuously — a gut renovation, a whole-home cleanout, or a construction job moving through phases. It holds about nine pickup loads, so it absorbs waves of waste without needing a mid-project swap.",
          "Its six-foot walls mean more vertical capacity than the 20 yard, but it's the same 22-foot footprint, so it still fits most driveways. The extra height is what handles bulky renovation debris — cabinets, framing, and fixtures — without filling up early.",
        ],
      },
      {
        heading: "Two-layer roofs and heavier loads",
        paragraphs: [
          "With a 6-ton allowance, the 30 yard is the right roofing container when a second layer of shingles or old plywood decking is coming off. That combination often doubles the debris weight of a standard tear-off, which is exactly where the 20 yard runs out of allowance. For larger homes or contractors handling both, the 30 yard is the safe middle.",
        ],
      },
    ],
    overage:
      "The 30 yard includes a 6-ton (12,000 lb) allowance — enough for most renovation and construction debris, and for two-layer roof tear-offs. Overage is still charged per ton over the limit, so for very heavy material like concrete, a smaller dedicated container can be more economical.",
    sizeUp:
      "Move up to a 40 yard only when the debris is bulky and high-volume — new construction, large demolition, or commercial cleanouts. If your load is heavy but not bulky, the 30 yard's weight allowance usually serves better than the 40's extra height.",
    faqs: [
      {
        q: "How much does a 30 yard dumpster hold?",
        a: "About 30 cubic yards, or nine pickup-truck loads. It's built for whole-home renovations, large cleanouts, and multi-phase construction.",
      },
      {
        q: "Is a 30 yard good for a two-layer roof?",
        a: "Yes. Its 6-ton allowance handles a two-layer tear-off or a single layer plus decking, where a 20 yard would run past its weight limit.",
      },
      {
        q: "Does a 30 yard fit in a driveway?",
        a: "Usually. It shares the 22-foot footprint of the 20 yard — the difference is height, not length — so placement is similar. Leave room for the delivery truck to tilt it off.",
      },
      {
        q: "What's the rental period on a 30 yard?",
        a: "The base price covers about 14 days, which suits multi-week renovations. Extensions are available by the day if the job runs long.",
      },
    ],
    relatedService: {
      label: "Construction dumpster rental",
      slug: "construction-dumpster-rental",
    },
    relatedPosts: [
      { label: "Construction dumpster rental guide", slug: "construction-dumpster-rental-guide" },
      { label: "How long can you keep a rental dumpster?", slug: "how-long-can-you-keep-a-rental-dumpster" },
    ],
  },
  {
    slug: "40-yard-dumpster-rental",
    yards: 40,
    name: "40 Yard Dumpster",
    metaTitle: "40 Yard Dumpster Rental | Largest Roll Off, Price & Fit",
    metaDescription:
      "40 yard dumpster rental from $569. Dimensions, 8-ton weight limit, what fits, and when it's overkill. Best for construction, demolition, and commercial jobs.",
    h1: "40 Yard Dumpster Rental",
    lede:
      "The largest roll off we offer. Built for high-volume, bulky debris on construction, demolition, and commercial jobs — not for heavy, dense material.",
    dimensions: "22 ft long × 8 ft wide × 8 ft high",
    weightTons: 8,
    rentalDays: 14,
    startingPrice: 569,
    fits: [
      "About 12 pickup-truck loads of debris",
      "New construction or a large demolition project",
      "Commercial cleanouts and warehouse clearing",
      "Bulky, low-density waste like framing, cabinetry, and siding",
    ],
    bestFor: "Construction, demolition, and large commercial projects",
    sections: [
      {
        heading: "What the 40 yard is built for",
        paragraphs: [
          "The 40 yard is about volume. Its eight-foot walls hold roughly twelve pickup loads, which is what large demolition, new construction, and commercial cleanouts need. When debris is bulky but light — framing lumber, cabinetry, siding, packaging — this is the container that keeps a big job to a single haul.",
          "Because of its height, it usually needs a longer delivery truck and a clear, straight approach. On residential lots it can be hard to place; it's most at home on job sites and commercial properties with room to work.",
        ],
      },
      {
        heading: "Why bigger isn't always better",
        paragraphs: [
          "The 40 yard's weight allowance is 8 tons — more than the 30 yard, but not unlimited. Fill a 40 yard with anything dense and you'll hit that limit with the box barely a third full, then pay overage on top. Heavy material belongs in a smaller container sized for weight, not a 40 yard sized for volume. Reach for the 40 only when the debris is bulky and light.",
        ],
      },
    ],
    overage:
      "The 40 yard includes an 8-ton (16,000 lb) allowance. That's the highest we offer, but it's meant for volume, not density. A load of concrete or dirt will exceed it long before the container is full, so keep heavy debris in a 10 or 20 yard and use the 40 for bulky, lighter waste.",
    sizeUp:
      "There's nothing larger — the 40 yard is the top of the roll off range. If a single 40 yard isn't enough, the answer is multiple containers or scheduled swap-outs rather than a bigger box.",
    faqs: [
      {
        q: "How much does a 40 yard dumpster hold?",
        a: "About 40 cubic yards, or twelve pickup-truck loads. It's the largest roll off available and is built for high-volume construction and demolition debris.",
      },
      {
        q: "Is a 40 yard good for concrete or dirt?",
        a: "No. Heavy, dense material hits the 8-ton weight limit with the container barely full, so you'd pay overage on wasted space. Use a 10 or 20 yard for concrete, brick, and dirt.",
      },
      {
        q: "Can a 40 yard go in a residential driveway?",
        a: "It's difficult. At 8 feet tall it needs a longer truck and a clear, straight approach, so it's usually reserved for job sites and commercial lots. For home projects, a 20 or 30 yard is easier to place.",
      },
      {
        q: "When should I choose a 40 yard over a 30 yard?",
        a: "Only when the debris is bulky and high-volume — new construction, large demolition, commercial clearing. If the load is heavy rather than bulky, the 30 yard's allowance usually serves you better.",
      },
    ],
    relatedService: {
      label: "Commercial dumpster rental",
      slug: "commercial-dumpster-rental",
    },
    relatedPosts: [
      { label: "Dumpster rental vs. junk removal", slug: "dumpster-rental-vs-junk-removal" },
      { label: "How much does a dumpster rental cost?", slug: "how-much-does-a-dumpster-rental-cost" },
    ],
  },
];

export function getSizePage(slug: string): SizePage | undefined {
  return sizePages.find((s) => s.slug === slug);
}
