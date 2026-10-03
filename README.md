# KOVentus — Vertical Axis Wind Turbine Brochure Site

A production-ready, single-page commercial brochure and product catalogue for **KOVentures Ltd** (trading as **KOVentus**), a UK-based provider of Vertical Axis Wind Turbines (VAWTs) for commercial, industrial, and public sector customers working toward Net Zero targets.

The site presents the full KOVentus product range, technical specifications, system configurations (on-grid, off-grid, hybrid), mounting options, UK-wide productivity analysis, and a validated customer enquiry form.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design System](#design-system)
- [Content & Assets](#content--assets)
- [SEO & Metadata](#seo--metadata)
- [Enquiry Form](#enquiry-form)
- [Deployment](#deployment)
- [Security](#security)
- [Quality & Conventions](#quality--conventions)
- [License & Contact](#license--contact)

---

## Overview

| | |
|---|---|
| **Product** | KOVentus VAWT brochure / product catalogue |
| **Company** | KOVentures Ltd, United Kingdom |
| **Type** | Single-page marketing site (SSR-ready SPA) |
| **Audience** | Commercial, industrial, and public sector buyers |
| **Live site** | [koventus.lovable.app](https://koventus.lovable.app) |

The page is organised as a scrolling brochure: hero with headline stats, product specification tables (small and medium turbine ranges), system configuration cards with wiring schematics, mast mounting options, city-by-city annual energy production and CO₂ savings analysis, and a contact/enquiry section.

## Features

- **Product catalogue** — full spec tables for the small range (100 W–1000 W) and medium range (2 kW–50 kW).
- **System configurations** — on-grid, off-grid, and hybrid on/off-grid schematics rendered as technical diagrams inside each configuration card.
- **Mast mounting options** — concrete, steel, and lattice mounting guidance.
- **UK productivity analysis** — estimated annual energy production and CO₂ savings across major UK cities.
- **Validated enquiry form** — client-side validation (Zod + React Hook Form) with inline error states for name, email, phone, and message; on submit, opens the visitor's mail client pre-addressed to `contact@koventures.co.uk` with the enquiry pre-filled.
- **Responsive layout** — mobile-first Tailwind CSS v4 layout that adapts from phone to desktop.
- **SEO & social metadata** — per-route titles, descriptions, Open Graph, and Twitter card tags.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start v1](https://tanstack.com/start) (React 19, SSR-ready, file-based routing) |
| Router | [TanStack Router](https://tanstack.com/router) |
| Build tool | [Vite 8](https://vite.dev) + Nitro (Cloudflare Workers target) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config) + `tw-animate-css` |
| UI components | [shadcn/ui](https://ui.shadcn.com) patterns on [Radix UI](https://www.radix-ui.com) primitives |
| Forms & validation | React Hook Form + [Zod](https://zod.dev) |
| Notifications | [Sonner](https://sonner.emilkowal.ski) |
| Icons | [Lucide React](https://lucide.dev) |
| Language | TypeScript (strict) |
| Package manager | [Bun](https://bun.sh) |
| Lint / format | ESLint 9 (flat config) + Prettier |

## Project Structure

```
.
├── src/
│   ├── assets/                  # Optimised imagery (hero, turbines, system diagrams)
│   ├── components/              # Reusable UI components (shadcn/ui)
│   ├── hooks/                   # Shared React hooks
│   ├── lib/                     # Utilities (cn, error capture/reporting)
│   ├── routes/
│   │   ├── __root.tsx           # App shell: fonts, global metadata, <Outlet />
│   │   └── index.tsx            # The brochure page (all sections, forms, data)
│   ├── routeTree.gen.ts         # Auto-generated route tree — do not edit
│   ├── router.tsx               # Router + query client bootstrap
│   ├── server.ts                # SSR entry (error wrapper)
│   ├── start.ts                 # Start client/server configuration
│   └── styles.css               # Tailwind v4 entry + design tokens
├── public/                      # Static assets served as-is
├── .lovable/                    # Lovable project metadata
├── eslint.config.js             # ESLint flat config
├── vite.config.ts               # Build config (Lovable TanStack preset)
└── package.json
```

> **Note on routing:** routes are file-based under `src/routes/`. `routeTree.gen.ts` is regenerated automatically — never edit it by hand.

## Getting Started

### Prerequisites

- **Bun** ≥ 1.1 (recommended) or Node.js ≥ 20
- No environment variables are required — the site is fully static in content and needs no backend or database.

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

The site runs at `http://localhost:8080` with hot module replacement enabled.

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start the dev server with HMR |
| `bun run build` | Production build (Nitro / Cloudflare Workers target) |
| `bun run build:dev` | Development-mode build (used for prerender checks) |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Lint with ESLint |
| `bun run format` | Format all files with Prettier |

## Design System

The visual identity is defined as semantic design tokens in `src/styles.css` using OKLCH colors — **never hardcode color utilities in components**, as that bypasses theming.

| Token | Value | Usage |
|---|---|---|
| `--primary` | `oklch(0.32 0.08 160)` Deep Forest | Headers, primary buttons, emphasis |
| `--accent` | `oklch(0.72 0.18 135)` Vibrant Leaf | Accents, highlights, focus rings |
| `--background` | `oklch(0.99 0.005 130)` | Page background |
| `--font-display` | Fraunces (serif) | Headings and display type |
| `--font-sans` | Inter Tight | Body text |
| `--gradient-hero` | Forest gradient | Hero overlay |
| `--shadow-elegant` | Soft forest shadow | Cards and elevated surfaces |

Supporting tokens (card, muted, border, destructive, ring) follow the same green-tinted OKLCH family for a cohesive clean-energy palette.

## Content & Assets

- All product copy, specifications, and productivity data live in `src/routes/index.tsx` as typed data arrays, making content updates straightforward without touching layout code.
- Imagery in `src/assets/`: hero and field photography of VAWTs, the hybrid solar-plus-VAWT system, and cropped technical schematics for on-grid, off-grid, and hybrid configurations (`diagram-ongrid.png`, `diagram-offgrid.png`, `diagram-hybrid-grid.png`).
- Images are bundled via standard ES6 imports and optimised by Vite at build time.

## SEO & Metadata

- Route-level `head()` configuration provides unique `<title>`, description, `og:title`, `og:description`, `og:type`, and `twitter:card` tags.
- Fonts (Fraunces, Inter Tight) load via `<link>` tags in the root route head — remote stylesheets are never `@import`ed in CSS (a Tailwind v4 / Lightning CSS requirement).
- Contact details used across the site:
  - **Email:** contact@koventures.co.uk
  - **Phone:** +44 07380123266

## Enquiry Form

The form enforces:

| Field | Rule |
|---|---|
| Name | Required |
| Email | Required, valid email format |
| Phone | Required, valid phone format |
| Company | Optional |
| Message | Required |

Errors render inline beneath each field. On successful validation, the browser's mail client opens with a pre-addressed, pre-filled message to `contact@koventures.co.uk` — no backend service is involved.

## Deployment

The project builds to the **Cloudflare Workers** runtime via Nitro:

```bash
bun run build
bun run preview   # local production preview
```

Deployment is managed through [Lovable](https://lovable.dev); publishing from the Lovable editor ships the latest build to the live site. Do not run builds or typechecks manually inside the Lovable environment — the platform handles them automatically.

> **Runtime note:** server code runs in a serverless Worker environment (no real filesystem, no child processes). This site currently ships no server functions, but any future backend logic must follow Worker-compatible patterns.

## Security

- Dependency security is actively monitored; known-vulnerable transitive dependencies are pinned to patched versions via `overrides` in `package.json` (e.g. `seroval`).
- The site is public and read-only: it collects no analytics, stores no personal data, and performs no server-side write operations.
- The enquiry form never transmits data to a server — it only opens the visitor's own mail client.
- Never hardcode secrets in source; secrets belong in environment variables read inside server handlers only.

## Quality & Conventions

- **TypeScript strict mode** throughout; typechecks run automatically in CI/Lovable.
- **ESLint + Prettier** enforce consistent style (`bun run lint`, `bun run format`).
- **Component conventions:** functional components only, Radix primitives wrapped by shadcn/ui-style components, `cn()` from `src/lib/utils.ts` for class merging.
- **Design token rule:** all colors, gradients, and shadows come from `src/styles.css` tokens — hardcoded color utilities (`text-white`, `bg-[#...]`) are not used.
- **Branch hygiene:** this repository is connected to Lovable — avoid force-pushing or rewriting published history, as it desyncs Lovable's project history.

## License & Contact

© KOVentures Ltd, United Kingdom. All rights reserved.

- **Email:** contact@koventures.co.uk
- **Phone:** +44 07380123266
- **Live site:** [koventus.lovable.app](https://koventus.lovable.app)
