# SIRIS Academy — Landing Page

Marketing landing page for **SIRIS Academy**, an investor/trader education product.
The page presents four content pillars (Courses, The Tape / market news, The Playbook /
strategies, The Floor / community) and **captures waiting-list leads** ahead of the
course-track launch on **August 1, 2026**.

Built as a 1:1, pixel-faithful recreation of the design handoff prototype
(`../design_handoff_siris_academy_landing/`), which remains the visual source of truth.

---

## ⚠️ Compliance constraint — read before editing copy

**SIRIS Academy is an independent education provider and is strictly separated from
SIRIS Broker** (a regulated entity that cannot market freely). This separation is a hard
legal requirement, not a style choice.

Do **not** add any copy, links, logins, account tiers, or imagery that connect the Academy
to the broker. The footer disclaimer must remain **verbatim**:

```
INDEPENDENT EDUCATION PROVIDER · NOT A BROKER OR INVESTMENT ADVISER · EDUCATIONAL CONTENT ONLY
```

There is intentionally **no "SIRIS Client" tier** in Pricing. Keep it that way.

---

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**, Turbopack dev server
- **Plain global CSS** — `app/globals.css`. No Tailwind, no CSS-in-JS. The prototype is one
  monolithic stylesheet with deep descendant selectors; we kept that structure for fidelity.
- **IBM Plex** (Mono / Sans / Serif) self-hosted via `next/font/google` — see `app/fonts.ts`.
  No external font `<link>`; nothing loads from Google at runtime.
- Static marketing site (SSG). The only server surface is the lead-capture API route.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000  (use PORT=3001 npm run dev to change port)
```

Other scripts:

```bash
npm run build        # production build (SSG) — must pass before deploy
npm run start        # serve the production build locally
npm run lint         # ESLint — currently clean
```

Requires Node 20+ (Next 16 baseline).

## Project structure

```
app/
  layout.tsx         Root layout: fonts, site-wide dot-grid texture, inline SVG <defs>,
                     metadata, mounts <UiProvider> (modal + toast + scroll-reveal).
  page.tsx           Section composition (server component).
  globals.css        The entire design system: :root tokens, base, every section's styles.
  fonts.ts           IBM Plex font loading → CSS variables.
  api/leads/route.ts Lead-capture API endpoint (see "Lead capture" below).

components/
  Nav, Ticker, Hero, StatBar, Courses, TheTape, Playbook, TheFloor,
  Pricing, CtaBanner, Footer           One component per page section.
  Seal, SvgDefs, CountUp               Shared presentational pieces.
  UiProvider                           App-wide React context: openJoinModal() / showToast().
  JoinModal, Toast                     The two app-wide singletons.

lib/
  leads.ts           submitToSIRISHub() — the single lead-capture seam.
  useClock.ts         Live UTC clock (nav).
  useCountUp.ts       Scroll-triggered count-up animation.
  useScrollReveal.ts  Self-recovering scroll reveal (see note below).
```

## Lead capture — the one thing to wire up for launch

All form submissions flow through a single seam so the backend can be swapped without
touching any component:

```
JoinModal / newsletter form
  → lib/leads.ts  submitToSIRISHub(type, payload)
      • always writes a local copy to localStorage["siris_academy_leads"] (nothing lost pre-API)
      • POSTs the record to /api/leads
  → app/api/leads/route.ts
      • validates type ∈ {waiting_list, newsletter} and email
      • if process.env.SIRISHUB_ENDPOINT is set → forwards the JSON there
      • otherwise → console.log("[lead]", …)   (dev fallback)
      • returns { ok: true, id }
```

**To go live:** set `SIRISHUB_ENDPOINT` to the real intake URL (see `.env.example`). That is
the only change required to start delivering leads — no component edits. If the downstream
forward fails, the route still returns `ok` and the lead is kept in the browser's
localStorage, so submissions are never silently dropped.

Lead record shape:

```jsonc
{
  "id": "SA-...",                 // generated client-side, e.g. SA-MPVPUA3I
  "type": "waiting_list",         // or "newsletter"
  "name": "...", "email": "...",  // waiting_list: name + email + optional phone/note
  "source": "landing",
  "submittedAt": "2026-...Z",
  "userAgent": "..."
}
```

## Content that is intentionally placeholder

These are deliberate placeholders structured so real data can swap in — they are **not**
real claims and should be confirmed before launch:

- Hero / stat-bar numbers: `600+` waiting list, `24` courses, etc.
- Ticker quotes and all market figures.
- Course names, instructors, durations, prices in the Courses table and Pricing cards.
- The Tape headlines and The Floor schedule / online counts.

## Design fidelity guardrails (from the handoff — keep these true)

- **Border-radius 0** everywhere; 1px hairline borders; no shadows except on modal + toast.
- Headlines are **IBM Plex Mono, uppercase** — not serif. Serif is used sparingly.
- **Red `#FF2E3C` is the only accent.** Tokens live in `:root` in `globals.css`; the palette
  is themeable there, but don't introduce new colors ad hoc.
- The dot-grid texture is **fixed** (does not scroll), site-wide.
- Responsive breakpoints: **900px** (nav links + clock hide), **820px** (multi-column
  sections collapse to one column, some table columns hide), **760px** (stat bar → 2×2),
  **560px** (newsletter capture stacks).
- **Scroll reveal is self-recovering** (`lib/useScrollReveal.ts`): content is visible by
  default in CSS; the hidden state only applies under `html.js-reveal .reveal:not(.in)`, and a
  safety timeout reveals anything left after 1.2s. **Never make content hidden-by-default** —
  that's the contract that prevents a blank page if JS fails.

## Deployment

The app is a standard Next.js project and deploys anywhere Next 16 runs:

- **Vercel** (simplest): import the repo, set `SIRISHUB_ENDPOINT` as an env var, deploy.
- **Node host / container**: `npm run build` then `npm run start` behind a reverse proxy.
- The page itself is static; only `/api/leads` needs a Node runtime (don't export as a pure
  static `next export` unless the lead route is moved to an external function).

Pre-launch checklist:

- [ ] Set `SIRISHUB_ENDPOINT` and verify a real submission lands downstream.
- [ ] Replace placeholder content (see list above) with confirmed copy.
- [ ] Confirm the compliance disclaimer is intact and no broker links were introduced.
- [ ] Add real `metadata` (title / description / OG image) in `app/layout.tsx`.
- [ ] `npm run build` and `npm run lint` both clean.
- [ ] Add a favicon / social share image if the placeholder isn't final.

## Notes for AI coding agents

This project pins **Next.js 16**, which has breaking changes vs. older versions. See
`AGENTS.md` — read the relevant guide in `node_modules/next/dist/docs/` before changing
framework-level code.
