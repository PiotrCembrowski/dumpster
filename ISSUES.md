# ISSUES.md — SEO Audit (Phase 0)

Audit of the rapiddumpsterrental.site codebase. Findings are grouped by area.
Items marked **[P1]**…**[P10]** map to the phase that resolves them. Items marked
**[FLAG]** require a human decision and are deferred to the final report.

## Route map (as found)

```
app/
  layout.tsx                     Root: Header, Footer, Organization + WebSite JSON-LD, sitewide metadata
  page.tsx                       Home (section components)
  robots.ts                      robots
  sitemap.ts                     sitemap (dynamic)
  services/page.tsx              Services index (4 services + 2 extras, #anchor sections)
  contact/layout.tsx             Contact canonical
  contact/page.tsx               Contact (client component)
  blog/page.tsx                  Blog index (reads lib/blog-data.ts)
  blog/[slug]/page.tsx           Blog post (data-driven; BlogPosting JSON-LD)
  dumpster-rental/{city}/page.tsx  5 city pages (LocalBusiness + FAQ + Breadcrumb JSON-LD)
components/  header, footer, hero/services/sizes/process/cta/contact sections, ui/*
lib/  blog-data.ts, utils.ts, schema.ts (to be created)
public/  images/{blog,locations,*.jpg}, placeholder-*, sitemap.xml (stale)
```

Shared header/footer are used site-wide **including** the blog (blog does not
have divergent nav/footer — good). Metadata is per-page via `export const
metadata` / `generateMetadata`. Blog posts are stored as HTML strings in
`lib/blog-data.ts` and rendered through the `[slug]` route.

## Brand integrity

- **[P1]** No rendered "Dumpster Direct" strings remain after PR #7, but confirm
  again across app/components/lib/content (verification step 2).
- **[P1]** `lib/blog-data.ts` comment (~line 614) references `/tulsa-ok` and
  `/dallas` as link targets — stale template comment, misleading. Remove.

## Geography accuracy (site targets 5 cities in 4 states: OK, NE, SD, ND)

- **[P1]** `app/layout.tsx` Organization schema: `description` and `areaServed`
  list **Texas**. Remove — no TX market.
- **[P1]** `components/cta-section.tsx`: copy lists "Oklahoma, **Texas**, …" and
  a badge reads "**7 cities across 5 states**". Correct to 5 cities / 4 states,
  drop Texas.
- **[P1]** `components/contact-section.tsx`: Service Area line lists **Texas**.
- **[P1]** `app/contact/page.tsx` (~line 455): Service Area fallback lists **Texas**.
- **[P1]** `components/services-section.tsx`: card copy names **Tulsa** (ghost
  city) and "Serving … across **five states**". Fix both.
- **[P1]** `app/services/page.tsx` (~line 384): H2 "…across **five states**".
- **[P1]** `app/dumpster-rental/jamestown/page.tsx` "Explore More": links
  "Dumpster Rental **Tulsa, OK**" (ghost city). Replace with a real target.

## Titles / meta descriptions

- Home has **no `<title>`/description** of its own — inherits the layout default
  ("Rapid Dumpster Rental | Same-Day Roll Off Dumpsters From $269"). Acceptable,
  but home should own an explicit title/description. **[P2]**
- Contact has canonical but **no title/description** (inherits layout). **[P2]**
- City page titles include the "· Same-Day Delivery Available" tail — length is
  ~60–75 chars, some exceed 60. Trim in the city rewrite. **[P4]**

## Canonicals / OG / Twitter

- **[P2]** Canonicals are set per page via `alternates.canonical` (relative, resolved
  against `metadataBase` = www). Home, services, contact, blog, blog posts, and
  city pages all have canonicals. Verify none missing after new pages are built.
- OG per-page url/title/description were fixed for blog + city pages in PR #7.
  **Home, services, contact still inherit the layout OG** (homepage url). Give
  services/contact their own OG. **[P2]**
- Twitter card is defined once in the layout; per-page twitter is inherited.
  Acceptable but verify large-image card coverage. **[P2]**

## Robots / sitemap

- **[P2]** `public/sitemap.xml` is a **stale static file** that collides with the
  dynamic `app/sitemap.ts` at `/sitemap.xml`. Delete the static file.
- **[P2]** `app/sitemap.ts` must be extended to cover every route created in
  Phases 4–7 (locations, service pages, size pages, new blog posts). Finish last.
- robots.ts is fine (allow all + sitemap ref).

## Internal links / routes

- **[P1]** Footer "View all locations" → `/locations` **which does not exist**
  (orphan/broken). City-page breadcrumb "Locations" → `/services`. Build a real
  `/locations` index and point both there (also breadcrumb JSON-LD).
- **[P1]** One footer link historically used `/dumpster-rental/jamestown-nd`
  (fixed in PR #7 to `/dumpster-rental/jamestown`); add a 301 for the `-nd`
  variant so any external inbound links resolve.
- **[P6]** Footer size links and header "Dumpster Sizes" point to `/#sizes`
  (anchor, not a page). City "Explore More" and blog CTA also use `/#sizes`.
  Repoint to real `/dumpster-sizes/*` pages once built.
- **[P5]** Footer service links point to `/services#residential` style anchors;
  repoint to dedicated `/services/*` pages once built.
- No `<not-found>` page — Next serves the default 404. Build a custom one. **[P2]**

## Duplicate / thin content

- **[P1]** `/blog/what-size-dumpster-do-i-need` was a thin duplicate of
  `…-2026`; retired + 301 in PR #7. Verify redirect still present.
- **[P4]** City pages share a large common template (same section order, same
  sizes/pricing table structure, near-identical FAQ phrasing). Anti-clone risk —
  rewrite for genuine per-city uniqueness and varied section order.

## Structured data

- **[P3]** No shared schema module. Schema is inline per page and duplicated.
  Centralize in `lib/schema.ts` typed builders emitting an `@graph`.
- **[FLAG]** City pages' inline `localBusinessSchema` includes **`aggregateRating`
  + reviewCount** and the pages render **testimonial/review blocks**. Rule 3/4:
  keep the on-page testimonial blocks but do **not** schema-mark them; the new
  `lib/schema.ts` LocalBusiness must **omit** AggregateRating/Review. The inline
  schema with aggregateRating must be replaced by the ratingless builder output.

## Images / accessibility / performance

- **[P10]** Layout references `/icon-light-32x32.png`, `/icon-dark-32x32.png`,
  `/icon.svg`, `/apple-icon.png` — **none exist in `public/`** (broken favicon).
  Add real icons/manifest or point to existing assets.
- **[P10]** No `manifest.webmanifest`.
- Images already use `next/image` (hero, services, blog). Alt text is generally
  descriptive. City pages use CSS/emoji, few images. Verify alt coverage. **[P10]**
- `next/font` (Geist) is already wired in the layout. Good.
- `app/page.tsx` imports `Header`/`Footer` but never renders them (layout already
  does) — dead imports. Clean up. **[P2]**

## Testimonials / ratings (rule 3 — kept, unschema'd) — see FLAGS

- `app/dumpster-rental/bartlesville/page.tsx` — `reviews` array + "What
  Bartlesville Customers Say" section + `aggregateRating` in schema.
- Same pattern in muskogee, scottsbluff, pierre, jamestown city pages.
- These stay on-page but must not be extended, copied elsewhere, or schema-marked.

## Contact data (rule 2 — must stay exactly)

- Phone (800) 555-3867 / `tel:+18005553867`, email info@rapiddumpsterrental.site —
  consistent across header/footer/sections. City pages use `tel:18005553867`
  (missing `+`) in a few CTAs — normalize to `tel:+18005553867`. **[P1/P4]**
