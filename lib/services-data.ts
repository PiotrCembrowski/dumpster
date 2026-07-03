// ─── SERVICE PAGE DATA ───────────────────────────────────────────────────────
// One entry per dedicated service page. Content is written to be genuinely
// distinct per service (different size guidance, debris/weight notes, process
// emphasis, and FAQs) — not a template with swapped nouns.

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ServicePage {
  slug: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLede: string;
  sections: ServiceSection[];
  sizeGuide: { size: string; use: string }[];
  process: string[];
  pricingFactors: string[];
  faqs: { q: string; a: string }[];
  featuredSize: { label: string; slug: string };
  relatedPosts: { label: string; slug: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "residential-dumpster-rental",
    serviceType: "Residential Dumpster Rental",
    metaTitle: "Residential Dumpster Rental | Home Cleanouts From $269",
    metaDescription:
      "Residential dumpster rental for cleanouts, remodels, and yard projects. Driveway-friendly 10–30 yard roll offs, same-day delivery, all-in pricing. From $269.",
    h1: "Residential Dumpster Rental",
    heroLede:
      "Driveway-friendly roll off dumpsters for home cleanouts, remodels, moving, and yard projects. Delivered fast, priced all-in, and sized so you don't pay for space you won't use.",
    sections: [
      {
        heading: "Who residential dumpster rental is for",
        paragraphs: [
          "A residential dumpster makes sense any time a project produces more trash than your curbside cans can handle over a few weeks. The container sits in your driveway, you fill it on your own schedule, and one truck hauls it away when you're done.",
          "The most common reasons homeowners rent are the ones where debris shows up faster than a weekly pickup can clear it — clearing out a house, tearing out a kitchen or bath, or handling a yard that got away from you.",
        ],
        bullets: [
          "Garage, attic, and basement cleanouts",
          "Kitchen and bathroom remodels",
          "Whole-home and estate cleanouts",
          "Moving, downsizing, and decluttering",
          "Yard cleanup, brush, and landscaping debris",
          "Flooring, carpet, and small deck removal",
        ],
      },
      {
        heading: "Getting the container in your driveway",
        paragraphs: [
          "Placement is the part homeowners think about least and regret most. A 10 or 20 yard container fits in a standard two-car driveway without blocking the road. Walk the spot before delivery day: clear it of cars, keep it away from low branches and power lines, and leave the driver a straight approach.",
          "Roll off trucks tilt the container off the back, so the driver needs a few feet of overhead clearance and a firm surface. On soft ground or a delicate driveway, ask about plywood under the wheels. Once a container is set, moving it means a second truck trip — decide where it goes before it lands.",
        ],
      },
    ],
    sizeGuide: [
      { size: "10 yard", use: "Single-room cleanout, small bath remodel, garage purge" },
      { size: "20 yard", use: "Kitchen remodel, large cleanout, flooring for a whole floor" },
      { size: "30 yard", use: "Whole-home cleanout, multi-room renovation, estate clearing" },
      { size: "40 yard", use: "Rarely needed at home — only large tear-outs with bulky volume" },
    ],
    process: [
      "Call or request a quote and describe the project — what you're tossing and when you need it.",
      "We recommend a size and give you a firm, all-in price with delivery and pickup included.",
      "The container is dropped where you point, often the same day if you call before noon.",
      "Fill it over your rental period — 7 to 14 days depending on size.",
      "Call for pickup, or we collect it on the scheduled date. Finish early? Call and we'll grab it sooner.",
    ],
    pricingFactors: [
      "Dumpster size — bigger containers cost more but often beat a second rental.",
      "Debris weight — each size includes a weight allowance; going over adds a per-ton fee.",
      "Rental length — the base price covers 7–14 days; extra days are a flat daily rate.",
      "Debris type — clean, single-material loads (like yard waste only) can price better.",
      "Your city — pricing starts from $269 and varies slightly by market.",
    ],
    faqs: [
      {
        q: "What size dumpster do I need for a home cleanout?",
        a: "A single-room or garage cleanout usually fits a 10 yard. A large cleanout across several rooms fits a 20 yard, and a full-home or estate cleanout typically needs a 30 yard. When you're between sizes, going up one is cheaper than a second delivery.",
      },
      {
        q: "Will a dumpster damage my driveway?",
        a: "Roll off containers are heavy, but damage is rare on a normal concrete or asphalt driveway. If your surface is delicate or freshly sealed, ask us to set boards under the container's rails and wheels when we deliver.",
      },
      {
        q: "How long can I keep a residential dumpster?",
        a: "Standard rental periods run 7 to 14 days depending on the size. If your project runs long, call before your scheduled pickup and we'll extend it at a daily rate.",
      },
      {
        q: "Can I put furniture and appliances in the dumpster?",
        a: "Yes to furniture, and yes to most appliances. Anything with refrigerant (fridges, freezers, AC units) usually needs the refrigerant removed first — tell us what you have and we'll confirm before delivery.",
      },
      {
        q: "Do I need to be home for delivery?",
        a: "Not necessarily. If you tell us exactly where to place the container and the spot is clear, the driver can drop it without you there. For tight driveways, being present helps.",
      },
    ],
    featuredSize: { label: "Compare the 20 yard dumpster", slug: "20-yard-dumpster-rental" },
    relatedPosts: [
      { label: "Dumpster rental for home cleanouts", slug: "dumpster-rental-for-home-cleanout" },
      { label: "What can you put in a dumpster?", slug: "what-can-you-put-in-a-dumpster" },
    ],
  },
  {
    slug: "construction-dumpster-rental",
    serviceType: "Construction Dumpster Rental",
    metaTitle: "Construction Dumpster Rental | Job Site Roll Offs From $269",
    metaDescription:
      "Construction dumpster rental for contractors and remodels. High-capacity 20–40 yard roll offs, heavy debris approved, same-day job site delivery, contractor pricing.",
    h1: "Construction Dumpster Rental",
    heroLede:
      "High-capacity roll off dumpsters built for job site debris — framing, drywall, roofing, and mixed construction waste. Same-day delivery, contractor pricing, and weight allowances that match real workloads.",
    sections: [
      {
        heading: "Built for the pace of a job site",
        paragraphs: [
          "Construction debris shows up in waves. Demo fills a container fast, then framing, drywall, and finish work each add their own load. A construction dumpster stays on site through those phases so debris never piles up where crews are working.",
          "For contractors, the two things that matter are turnaround and weight. We deliver same-day when you call before noon, and every size is quoted with a clear ton allowance so you can plan around it instead of getting surprised at the scale.",
        ],
        bullets: [
          "New construction and framing debris",
          "Remodels, gut jobs, and tenant improvements",
          "Roofing tear-offs and siding",
          "Drywall, lumber, and finish waste",
          "Concrete, brick, and masonry (ask about heavy-debris limits)",
          "Site cleanup and punch-list clearing",
        ],
      },
      {
        heading: "Weight is the real constraint",
        paragraphs: [
          "On construction jobs, weight limits matter more than volume. Drywall, shingles, and anything masonry are dense — a container can hit its weight allowance while it still looks half empty. Every roll off includes a ton allowance, and going over adds a per-ton overage fee.",
          "If your load is heavy — concrete, brick, dirt, or a roofing tear-off — tell us before delivery. Heavy debris sometimes belongs in a dedicated lower-volume container so you're not paying overage on a 40 yard box you couldn't legally fill anyway.",
        ],
      },
    ],
    sizeGuide: [
      { size: "20 yard", use: "Small remodels, single-trade debris, tight sites" },
      { size: "30 yard", use: "Whole-house remodels, framing and drywall phases" },
      { size: "40 yard", use: "New construction, large tear-outs, bulky low-density waste" },
      { size: "10 yard", use: "Heavy, dense debris where weight caps out before volume" },
    ],
    process: [
      "Tell us the job type, debris mix, and site address — we'll size it and quote contractor pricing.",
      "Same-day or scheduled delivery to the job site, placed for crew access and truck clearance.",
      "Swap-outs available: when a container fills, we haul it and drop an empty to keep work moving.",
      "Flexible rental periods for multi-phase jobs — extend by the day as the schedule shifts.",
      "Final pickup on completion, with fast turnaround so the site clears before handover.",
    ],
    pricingFactors: [
      "Container size and how many swap-outs the job needs.",
      "Debris weight — dense loads (masonry, roofing) can trigger per-ton overage.",
      "Rental duration across the phases of the build.",
      "Site access — tight or restricted placement can affect delivery.",
      "Contractor and multi-unit pricing for ongoing or repeat work.",
    ],
    faqs: [
      {
        q: "Do you offer contractor pricing for ongoing jobs?",
        a: "Yes. For contractors running multiple jobs or needing repeat swap-outs, we quote bulk and repeat-customer pricing. Call with your typical volume and we'll set you up.",
      },
      {
        q: "Can you swap a full container for an empty one?",
        a: "Yes. On active job sites we haul the full container and drop an empty in the same visit so crews don't lose time waiting on disposal.",
      },
      {
        q: "What size dumpster is best for construction debris?",
        a: "A 30 yard is the workhorse for most whole-house remodels and framing phases. New construction and bulky low-density waste usually justify a 40 yard. Dense debris like concrete often belongs in a 10 yard so weight caps out safely.",
      },
      {
        q: "Can I mix concrete and general construction debris?",
        a: "Sometimes, but heavy materials fill your weight allowance quickly and can trigger overage. For clean concrete or brick, a dedicated heavy-debris container is usually cheaper. Tell us the mix and we'll advise.",
      },
      {
        q: "How fast can you deliver to a job site?",
        a: "Same-day delivery is available when you call before noon. For scheduled starts, book a day or two ahead and we'll have the container placed before your crew arrives.",
      },
    ],
    featuredSize: { label: "See the 30 yard dumpster", slug: "30-yard-dumpster-rental" },
    relatedPosts: [
      { label: "Construction dumpster rental guide", slug: "construction-dumpster-rental-guide" },
      { label: "Heavy debris: concrete, brick & dirt", slug: "heavy-debris-dumpster-guide" },
    ],
  },
  {
    slug: "commercial-dumpster-rental",
    serviceType: "Commercial Dumpster Rental",
    metaTitle: "Commercial Dumpster Rental | Business & Property Roll Offs",
    metaDescription:
      "Commercial dumpster rental for offices, retail, restaurants, and property managers. Scheduled pickups, bulk pricing, flexible terms, same-day and next-day delivery.",
    h1: "Commercial Dumpster Rental",
    heroLede:
      "Roll off dumpsters for offices, retail, restaurants, and property management. Scheduled service, bulk pricing, and flexible terms for one-time cleanouts or ongoing work.",
    sections: [
      {
        heading: "Service that fits a business schedule",
        paragraphs: [
          "Commercial projects are less about raw debris and more about coordination — delivery windows that don't disrupt customers, placement that keeps parking and access open, and pickups timed around business hours. We plan around your operation, not the other way around.",
          "Whether it's a one-time office cleanout or recurring service for a property you manage, the goal is the same: a container that's there when you need it and gone before it becomes a nuisance.",
        ],
        bullets: [
          "Office and retail cleanouts",
          "Restaurant and tenant remodels",
          "Warehouse and storage clearing",
          "Property management turnovers",
          "Multi-unit residential cleanouts",
          "Ongoing and scheduled disposal",
        ],
      },
      {
        heading: "Placement and access on commercial sites",
        paragraphs: [
          "On a business property, where the container goes affects customers, staff, and code. We place containers to keep fire lanes, ADA access, and parking flow clear, and we can work with your property manager on approved staging areas.",
          "If the container has to sit on a street or shared lot, a permit may be required — the same rule that applies to any placement on public right-of-way. We'll flag it during scheduling so it doesn't hold up delivery.",
        ],
      },
    ],
    sizeGuide: [
      { size: "20 yard", use: "Office cleanouts, small retail refresh, tenant turnover" },
      { size: "30 yard", use: "Restaurant remodels, larger retail buildouts" },
      { size: "40 yard", use: "Warehouse clearing, multi-unit turnovers, bulky volume" },
      { size: "10 yard", use: "Small, dense loads or tight commercial lots" },
    ],
    process: [
      "Share the property type, project scope, and any access or timing constraints.",
      "We schedule delivery in a window that doesn't disrupt customers or staff.",
      "Recurring service available — set a pickup cadence for ongoing needs.",
      "Bulk and multi-container pricing for property managers and repeat work.",
      "Pickup timed around your hours, with permit guidance if placement is on public property.",
    ],
    pricingFactors: [
      "Container size and number of pickups or swap-outs.",
      "One-time versus recurring scheduled service.",
      "Debris weight and type relative to the included allowance.",
      "Placement — street or shared-lot placement may need a permit.",
      "Volume pricing for property managers and multi-site accounts.",
    ],
    faqs: [
      {
        q: "Can you schedule recurring pickups for our property?",
        a: "Yes. For property managers and businesses with ongoing needs, we set a recurring pickup cadence and bulk pricing so disposal runs on a predictable schedule.",
      },
      {
        q: "Will delivery disrupt our customers or parking?",
        a: "We plan delivery windows and placement around your hours and access. Tell us your constraints — fire lanes, ADA access, peak times — and we'll work within them.",
      },
      {
        q: "Do we need a permit for a commercial dumpster?",
        a: "Only if the container sits on a public street or right-of-way. On your own lot, no permit is needed. If street placement is unavoidable, we'll point you to the local requirement during scheduling.",
      },
      {
        q: "Can you handle a multi-unit or turnover cleanout?",
        a: "Yes. Turnovers and multi-unit cleanouts are a common commercial use. Depending on volume we'll recommend a single large container or scheduled swap-outs.",
      },
      {
        q: "Do you offer bulk pricing for multiple containers?",
        a: "Yes. Multi-container and multi-site work qualifies for volume pricing. Call with your scope and we'll quote the account, not just the container.",
      },
    ],
    featuredSize: { label: "Compare the 40 yard dumpster", slug: "40-yard-dumpster-rental" },
    relatedPosts: [
      { label: "Dumpster rental vs. junk removal", slug: "dumpster-rental-vs-junk-removal" },
      { label: "How much does a dumpster rental cost?", slug: "how-much-does-a-dumpster-rental-cost" },
    ],
  },
  {
    slug: "roofing-dumpster-rental",
    serviceType: "Roofing Dumpster Rental",
    metaTitle: "Roofing Dumpster Rental | Shingle Disposal & Tear-Off Roll Offs",
    metaDescription:
      "Roofing dumpster rental for shingle tear-offs. Weight-first sizing, same-day delivery, driveway placement, and honest overage guidance. From $269.",
    h1: "Roofing Dumpster Rental",
    heroLede:
      "Roll off dumpsters sized for shingle weight, not just volume. Fast delivery for tear-off day, driveway placement, and clear weight limits so you don't get surprised at the scale.",
    sections: [
      {
        heading: "Roofing is a weight problem, not a volume problem",
        paragraphs: [
          "Shingles are one of the densest things you can throw in a roll off. A tear-off can hit a container's weight limit while the box still looks half full. That's why roofing dumpsters are sized by tonnage first and cubic yards second.",
          "As a rough guide, a single-layer tear-off on a 2,000 square foot roof produces two to three tons of debris; two layers can double that. Add old decking and the number climbs again. The right size is the one whose weight allowance covers your tear-off — ask about the per-ton overage before you book.",
        ],
        bullets: [
          "Asphalt and composition shingle tear-offs",
          "Single- and multi-layer removals",
          "Decking, underlayment, and flashing",
          "Contractor and homeowner re-roofs",
          "Storm and repair debris",
        ],
      },
      {
        heading: "Timing and placement for tear-off day",
        paragraphs: [
          "Roofing debris comes off fast, usually in a day or two, then the container often sits until pickup. Book the container for the morning tear-off starts, not days ahead — roofing gets delayed by weather, and you don't want to pay for idle days.",
          "Placement matters because crews toss debris off the roofline. Position the container close to the eave you're working, clear of power lines and cars, so the crew isn't carrying shingles across the yard. Driveway placement covers most residential re-roofs and needs no permit.",
        ],
      },
    ],
    sizeGuide: [
      { size: "10 yard", use: "Small or single-layer roof under ~1,500 sq ft" },
      { size: "20 yard", use: "Standard single-layer re-roof, 1,500–2,500 sq ft" },
      { size: "30 yard", use: "Two-layer tear-off or larger roof with decking" },
      { size: "40 yard", use: "Commercial or very large roofs, heavy tonnage" },
    ],
    process: [
      "Tell us the roof size and how many layers are coming off — that sets the weight tier.",
      "We match a container whose ton allowance covers the tear-off and quote it all-in.",
      "Delivery for the morning work starts, placed near the roofline for crew access.",
      "Tear off, load, and we haul it — usually a short rental since debris comes fast.",
      "Overage is charged by the ton only if the load exceeds the allowance; we tell you the rate upfront.",
    ],
    pricingFactors: [
      "Roof size and number of shingle layers (this drives weight).",
      "Weight allowance of the chosen container and the per-ton overage rate.",
      "Whether decking or other heavy material is included.",
      "Rental length — most roofing rentals are short.",
      "Your city — starting prices vary slightly by market.",
    ],
    faqs: [
      {
        q: "What size dumpster do I need for a roof tear-off?",
        a: "For a standard single-layer re-roof between 1,500 and 2,500 square feet, a 20 yard usually does it. Two layers or added decking push you to a 30 yard. The deciding factor is weight, not how full the box looks.",
      },
      {
        q: "How much does a roofing tear-off weigh?",
        a: "A single layer of asphalt shingles on a 2,000 square foot roof runs about two to three tons. Two layers can reach four to six tons. Old plywood decking adds more. Match the container's ton allowance to that estimate.",
      },
      {
        q: "Can I put shingles in a regular dumpster?",
        a: "Yes — standard asphalt and composition shingles go in a normal roll off. The constraint is weight, so confirm the ton allowance covers your tear-off before booking.",
      },
      {
        q: "Do I need a permit for a roofing dumpster?",
        a: "Only if it sits on a public street. Driveway placement, which works for most residential re-roofs, needs no permit. If you have no driveway and must use the street, check with your city's public works before delivery.",
      },
      {
        q: "How long do I need the dumpster for a roof?",
        a: "Most roofing jobs generate their debris in one to two days, so a short rental is plenty. If the job runs long or uncovers decking damage, call before pickup and we'll extend it.",
      },
    ],
    featuredSize: { label: "See the 20 yard dumpster", slug: "20-yard-dumpster-rental" },
    relatedPosts: [
      { label: "What size dumpster for a roof replacement?", slug: "what-size-dumpster-for-roof-replacement" },
      { label: "Heavy debris dumpster guide", slug: "heavy-debris-dumpster-guide" },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
