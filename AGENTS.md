# Brewfolio — Agent Instructions

> For full context read `CLAUDE.md`. This file is a quick-reference summary for AI agents and coding assistants.

## What is this?
Craft beer discovery and personal logging platform. Three pillars: Catalog (public), My Log (personal journal), News/Articles.

## Tech Stack
| Layer    | Technology |
|----------|-----------|
| Backend  | .NET 10 · FastEndpoints · EF Core · PostgreSQL |
| Frontend | Next.js 15 App Router · Tailwind CSS v4 · TypeScript |
| Infra    | Docker Compose on Raspberry Pi 5 |

## Backend — Key Rules
- **FastEndpoints only** — no MVC, no `app.MapGet()`
- Feature folders: `src/BRF.Api/Features/<Entity>/<FeatureName>/` (e.g. `Features/Articles/GetArticle/`)
- Per endpoint: `<Action><Entity>Endpoint.cs` + `Request.cs` + `Response.cs` — all inside the feature subfolder
- Namespace follows folder depth: `BRF.Api.Features.<Entity>.<FeatureName>`
- No service layer — call `AppDbContext` directly from endpoints
- PKs are app-generated `Guid`; every entity has `CreatedAt` (UTC)
- Return `Results<Ok<T>, NotFound>`

## Frontend — Key Rules
- App Router, Server Components by default, `"use client"` only for interactivity
- Route groups: `(catalog)`, `(log)`, `(news)` inside `src/brf-web/app/`
- Tailwind v4: `@import "tailwindcss"` — no `@tailwind` directives
- Fonts loaded via `<link>` in `layout.tsx`, not via CSS `@import url()`

## Design System
- Light theme: `bg-white` / `bg-stone-50`
- Accent: `orange-600`
- Font: **Public Sans**
- Icons: **Material Symbols Outlined** — `<span className="material-symbols-outlined">icon_name</span>`
- No dark mode, no inline hex colors, no Epilogue font
- **Only `stone-*` palette** — never `gray-*`, `slate-*`, `zinc-*`, `neutral-*`
- **h1 (hero/list):** `text-4xl md:text-5xl font-black tracking-tight text-stone-900`
- **h1 (compact/sidebar):** `text-3xl font-black tracking-tight text-stone-900`
- **h2 (section):** `text-2xl font-black tracking-tight text-stone-900`
- **Subtitle:** `text-stone-500 text-lg`
- **Labels:** `text-xs text-stone-400 uppercase tracking-widest font-bold`
- Always `font-black` on headings — never `font-bold` / `font-extrabold`
- Use `<PageHeader>` for every list page header — centered hero (default) or `compact` for sidebar contexts
- Use `<Badge>`, `<StarRating>`, `<ErrorState>` shared components — don't inline alternatives

## Deferred — Do Not Build
Auth, image uploads, Beer↔Venue join table, rich text, social features, map/geo.

## Data Model (short)
```
Brewery → Beer (breweryId FK)
Venue (type: Pub|Taproom|BottleShop|Other)
BeerLog → Beer + Venue? (userId is a plain string placeholder, no auth yet)
Article (authorId is a plain string placeholder)
```

## Full Context
See `CLAUDE.md` for full data model, architecture decisions, MVP scope, and local dev instructions.
