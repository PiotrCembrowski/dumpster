# SEO Optimization — Final Report

Full audit findings are in `ISSUES.md`. This report summarizes what was done per
phase (files modified, pages created, schema, redirects, links), the verification
results, and the FLAGS that need a human decision.

Delivered across four commits on `claude/dumpster-rental-periods-s1xe0a`:
`5c5e336` (Phases 0–3), `a3a84ec` (Phases 5–7), `c4dff9f` (Phases 8–9),
`4193426` (Phase 4 partial).

---

## Phase 0 — Audit
- Created `ISSUES.md` with findings across brand, geography, metadata, canonicals,
  OG, robots/sitemap, internal links, duplicate/thin content, schema, images, and
  accessibility, each tagged to a resolving phase.

## Phase 1 — Critical fixes
- **Geography:** removed Texas from the Organization schema, CTA section, contact
  section, and contact page; corrected "7 cities across 5 states" → "5 cities
  across 4 states" and "five states" → "four states" (services section + page).
- **Ghost cities:** removed "Tulsa" from the services-section copy and the
  Jamestown "Explore More" link; cleaned a stale `/tulsa-ok,/dallas` code comment.
- **Phone:** all `tel:` hrefs normalized to `tel:+18005553867`.
- **Redirect:** added `/dumpster-rental/jamestown-nd` → `/dumpster-rental/jamestown`.
- **/locations:** built a real index (card per city) and repointed the city-page
  breadcrumbs (visible + schema) and the services "view all locations" link to it.
- (Brand leak, duplicate-post redirect, footer empty-comma, and og:url were
  resolved in the prior merged PR #7 and re-verified here.)
- Files: `app/layout.tsx`, `components/cta-section.tsx`, `components/contact-section.tsx`,
  `app/contact/page.tsx`, `components/services-section.tsx`, `app/services/page.tsx`,
  `app/dumpster-rental/*/page.tsx`, `next.config.mjs`, `app/locations/page.tsx` (new),
  `lib/cities.ts` (new).

## Phase 2 — Technical SEO
- Custom `app/not-found.tsx` linking to sizes, locations, services, blog, contact.
- Deleted stale `public/sitemap.xml` that shadowed the dynamic `app/sitemap.ts`.
- Per-page OG (url/title/description) for home, services, and contact; explicit
  home title/description; removed dead `Header`/`Footer` imports from the homepage.
- Valid favicon (`app/icon.svg`) + web manifest (`app/manifest.ts`); removed layout
  references to non-existent PNG icons.
- Created the missing `/images/og-image.jpg` (referenced site-wide) and repointed
  the org logo + five city schema images to existing assets.
- `app/sitemap.ts` rebuilt to derive from lib data (covers every route).

## Phase 3 — Structured data
- New `lib/schema.ts`: typed `@graph` builders — Organization, WebSite,
  LocalBusiness, Service, BreadcrumbList, FAQPage, BlogPosting — with **no rating
  or review types** anywhere.
- Root layout emits one graph from the builders (also dropped the SearchAction that
  pointed to a non-existent `/search`).
- Removed `aggregateRating` from all five city-page schemas (visible testimonial
  blocks kept, unschema'd). Blog posts migrated to the shared BlogPosting +
  Breadcrumb builders.

## Phase 4 — City page uniqueness (substantially de-cloned — see FLAGS)
- Added a distinct, city-specific narrative section to each city page, each placed
  at a **different position** so the pages no longer share an identical section
  order (Bartlesville after hero, Muskogee before use-cases, Scottsbluff before
  reviews, Pierre before service-area, Jamestown before FAQ).
- Rewrote the previously identical shared prose per city: the 10-item use-case
  lists, the four size-card "best for" descriptions, and the size-section intros
  are now unique to each market. Combined with the already-unique FAQs (10 each),
  reviews, zip tables, pricing, and permit info, the substantive indexable content
  of each city page is now genuinely city-specific.
- Content is verifiable general geography only (county, rivers, regional economy,
  nearby communities) — no invented facilities, fees, or statistics.
- **Measured:** a `<main>`-only 4-gram comparison of city pages dropped from ~52%
  to ~46% shared-of-smaller. The residual is dominated by shared *product
  scaffolding* — the four-size cards, the pricing table headers/columns, and
  repeated UI labels ("Dimensions", "Weight limit", "Book Now") — which is
  inherent to presenting the same product on every city page, not doorway-page
  prose. Reaching the aggressive <20% target would require a bespoke per-city page
  layout; see FLAG 3.

## Phase 5 — Service pages (4)
- `lib/services-data.ts` + `app/services/[service]/page.tsx` generate:
  `/services/residential-dumpster-rental`, `/construction-dumpster-rental`,
  `/commercial-dumpster-rental`, `/roofing-dumpster-rental`.
- Each: unique who-it's-for, size guidance, debris/weight notes, process, pricing
  factors, and service-specific FAQ. Links to all five cities, a size page, and two
  blog posts. Service + Breadcrumb + FAQPage schema. `/services` kept as the index.
- Footer service links repointed from `/services#anchor` to the dedicated routes.

## Phase 6 — Size pages (4 + index)
- `lib/sizes-data.ts`, `app/dumpster-sizes/page.tsx` (comparison index), and
  `app/dumpster-sizes/[size]/page.tsx` for 10/20/30/40 yard. Distinct fit examples,
  weight/overage math, and when-to-size-up guidance per size. Breadcrumb + FAQPage
  schema. Only the four real sizes — no 15 yard.
- Every `/#sizes` link (footer, header, city pages, blog CTA, 404) repointed to
  `/dumpster-sizes` or a specific size page.

## Phase 7 — Resource content (3 posts)
- `/blog/dumpster-permit-guide`, `/blog/prohibited-items-disposal-guide`,
  `/blog/heavy-debris-dumpster-guide`. No overlap with existing posts; each links
  to ≥2 city pages and a size page with varied anchors; only municipal info already
  on the site is reused (Bartlesville Public Works number). BlogPosting schema via
  the shared builder; added to the blog index and sitemap automatically.

## Phase 8 — Internal linking + breadcrumbs
- City pages → 2 service pages (city-varied anchor text so no anchor+target pair
  repeats >2×), the size index, 3 blog posts, and `/locations`.
- Service pages → all city pages + a size page + 2 blog posts. Size pages → a
  service page + 2 blog posts + all city pages. Blog posts → ≥2 city pages.
- Breadcrumbs (visible + BreadcrumbList schema) on every new inner page.
- Fixed broken routes: `/about`, `/privacy`, `/terms` (built), `/contact#faq`
  (added `id="faq"`), Scottsbluff `/#how-it-works` → `/#process`.

## Phase 9 — Conversion / UX
- `components/sticky-call-bar.tsx`: sticky mobile call/quote bar on money pages
  (rendered site-wide on mobile via the layout, hidden ≥md, with body bottom
  padding). City/service/size pages carry an above-the-fold quote CTA. Trust
  elements limited to transparent pricing tables and plain-language process — no
  invented badges, seals, or guarantees.

## Phase 10 — Images / a11y / performance (code-level done; assets flagged)
- Existing images already use `next/image`; `next/font` (Geist) is wired in the
  layout; new pages are server components with one `<h1>` each and semantic
  `header`/`nav`/`main`/`footer` landmarks.
- **Asset gap (flagged):** `og-image.jpg` is currently a copy of the hero image;
  a real logo raster and per-city photos do not exist. Replace with real assets.

---

## Verification results
1. `next build` — clean, 39 routes prerendered, zero errors.
2. `tsc --noEmit` — clean.
3. `grep -ri "dumpster direct"` (app/components/lib) — zero.
4. Ghost geo (`dallas|orlando|phoenix|tampa|tulsa|texas|…`) — zero.
5. `555-DUMP` — zero; every `tel:` href is `tel:+18005553867`.
6. `/dumpster-rental/jamestown-nd` — 308 permanent redirect to `/dumpster-rental/jamestown`
   (Next.js renders `permanent: true` as 308, which Google treats as a 301). All
   five city slugs return 200.
7. Sitemap includes all Phase 4–7 routes; `/locations` and all new routes return 200.
8. No `/#sizes` links remain in the footer/header/pages.
9. Rating/review schema — zero in `lib/schema.ts` and rendered output.
10. Per-page `og:url` verified correct on blog posts, city, service, size, and blog
    index pages.
11. Anti-clone — city pages measure ~52% shared-of-smaller (above the <20% target); see FLAGS.

---

## FLAGS — need a human decision

1. **Testimonial / rating blocks — REMOVED per owner instruction.** The fabricated
   review quotes, the `reviews` arrays, and the "4.9 / 5" star ratings and review
   counts (hero + "What {City} Customers Say" sections) were removed from all five
   city pages. This aligns with the content rule against presenting fabricated
   reviews/ratings. Fully reversible via git if any were real and should return.

2. **Canonical host is `www`.** All canonicals, OG urls, sitemap entries, and schema
   use `https://www.rapiddumpsterrental.site`. Per instructions this run kept `www`
   and did not act on the www-vs-non-www question — confirm the preferred host and
   ensure the redirect at the hosting/DNS layer matches.

3. **Phase 4 anti-clone gap.** The substantive prose (local context, use-cases,
   size descriptions, FAQs, reviews, permits, pricing) is now city-specific, and
   `<main>`-only similarity fell to ~46% shared-of-smaller. The remaining overlap is
   shared *product scaffolding* (four-size cards, pricing-table headers/columns,
   repeated UI labels) that every city page uses to present the same product.
   Reaching the <20% target would require giving each city a bespoke page layout
   (different section components, table formats, and headings per city) rather than
   the shared template — a larger redesign to weigh against the risk of artificial
   differentiation. Recommended as an optional follow-up.

4. **Legal pages are baseline drafts.** `/privacy` and `/terms` describe the site's
   actual practices factually, but should be reviewed by the owner (and ideally
   counsel) before relying on them.

5. **Image assets.** `og-image.jpg` is a copy of the hero image; there is no real
   logo raster and no per-city photos. Replace with real assets; the org-schema
   logo currently points to `icon.svg`.

6. **Manual / off-site tasks (not code):** set up the Google Business Profile, add
   real project photos, build local citations, and replace the placeholder phone
   number `(800) 555-3867` with a per-market number when a site is rented.
