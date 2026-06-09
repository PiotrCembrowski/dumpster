# PRD — Sitemap Regeneration and Route Alignment

## Original Problem Statement
Update `/public/sitemap.xml` to remove broken/deprecated URLs, include all working SEO-indexable pages, ensure all URLs are valid (HTTP 200, non-redirect-chain, indexable), match actual App Router structure, set required priority/changefreq bands, update `<lastmod>` to current date, validate XML, and confirm accessibility at `https://www.rapiddumpsterrental.site/sitemap.xml`.

## Architecture Decisions
- Treated `/app/public/sitemap.xml` as authoritative static sitemap source.
- Used live HTTP validation against production domain before/after update.
- Kept canonical sitemap host on `https://www.rapiddumpsterrental.site` because non-www resolves via redirect.
- Mapped sitemap entries directly to existing App Router routes and dynamic blog slugs from `lib/blog-data.ts`.

## What’s Implemented
- Regenerated `/app/public/sitemap.xml` with only valid, indexable, direct-200 URLs.
- Removed all 404/deprecated/stale route formats (including old location slug variants and missing pages).
- Included homepage, services, contact, all working location pages, blog index, and all blog resource pages.
- Applied required sitemap weight rules:
  - homepage: `priority 1.0`, `changefreq weekly`
  - service pages: `priority 0.9`, `changefreq monthly`
  - location pages: `priority 0.8`, `changefreq monthly`
  - resource pages: `priority 0.7`, `changefreq monthly`
- Updated `<lastmod>` to `2026-06-09` for modified entries.
- XML validated successfully and production sitemap endpoint confirmed reachable.

## Prioritized Backlog
### P0
- Add explicit canonical link rendering in final HTML for all indexable routes (currently no explicit `<link rel="canonical">` is emitted at runtime despite metadata updates).
- Remove remaining stale references in non-critical content comments/image naming that may cause maintenance confusion.

### P1
- Add automated sitemap generation from App Router + blog slugs to avoid manual drift.
- Add CI check for sitemap URL health (200/no-redirect/noindex guard).

### P2
- Add sitemap index support if content expands (e.g., city/page count growth).
- Add `robots.txt` with sitemap declaration if not yet present.

## Next Tasks
1. Deploy and verify updated sitemap source is fully propagated to production cache.
2. Confirm explicit canonical tags in live HTML source after route metadata stabilization.
3. Submit refreshed sitemap in Google Search Console and monitor crawl anomalies.
