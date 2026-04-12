# Brewfolio — AI Agent Context

> This file is the authoritative source of truth for any AI agent working in this repo.
> Read this before touching any code. It captures decisions made during planning so you never need to re-derive them from conversation history.

---

## What Is Brewfolio?

A **craft beer discovery and personal logging platform** for enthusiasts.

Three pillars:
1. **Catalog** — Admin-curated database of breweries, beers, and venues. Public, no login required.
2. **Personal Log** — Users record beers they've tried (check-ins). Login required. Private, solo journaling experience.
3. **News / Articles** — Admin-published articles, news, brewery spotlights.

Target: web app, **mobile-first responsive** (also desktop).

---

## Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Backend     | .NET 10, FastEndpoints, EF Core (code-first)    |
| Database    | PostgreSQL (Docker, Raspberry Pi 5)             |
| Frontend    | Next.js 15 (App Router), Tailwind CSS           |
| Infra       | Docker Compose (API + DB; FE added later)       |

### Key package decisions
- **FastEndpoints** — all API routes use feature-folder FastEndpoints, NOT minimal API or MVC controllers
- **EF Core** — code-first, migrations in `BRF.Api`, DbContext in `BRF.Infrastructure` (or directly in Api for MVP)
- **Next.js App Router** — use Server Components for public catalog pages (SEO/performance), Client Components only where interactivity is needed

---

## Project Structure

```
Brewfolio/
├── CLAUDE.md                        ← you are here
├── docker-compose.yml               ← API + Postgres services
├── Brewfolio.slnx
└── src/
    ├── BRF.Api/                     ← .NET 10 backend
    │   ├── Features/
    │   │   ├── Breweries/
    │   │   │   ├── GetBrewery/      ← Endpoint.cs + Request.cs + Response.cs
    │   │   │   ├── ListBreweries/
    │   │   │   └── CreateBrewery/
    │   │   ├── Beers/
    │   │   ├── Venues/
    │   │   ├── BeerLogs/
    │   │   └── Articles/
    │   │       ├── GetArticle/
    │   │       └── ListArticles/
    │   ├── Domain/                  ← EF Core entities
    │   ├── Data/                    ← DbContext, migrations
    │   ├── Program.cs
    │   └── Dockerfile
    └── BRF.Web/                     ← Next.js 15 frontend
        ├── app/                     ← App Router pages
        │   ├── (catalog)/           ← public catalog routes
        │   ├── (log)/               ← personal log routes (auth-gated later)
        │   └── (news)/              ← articles/news
        ├── components/              ← shared + Stitch-generated components
        │   └── ui/                  ← drop Stitch components here
        └── lib/                     ← API client, utils
```

---

## Data Model

### Entities (EF Core, PostgreSQL)

```
Brewery
  Id          Guid PK
  Name        string
  Country     string
  City        string
  Description string?
  CreatedAt   DateTime

Beer
  Id          Guid PK
  Name        string
  Style       string
  Abv         decimal?        -- alcohol by volume
  Description string?
  BreweryId   Guid FK → Brewery
  CreatedAt   DateTime

Venue
  Id          Guid PK
  Name        string
  Type        VenueType enum  -- Pub | Taproom | BottleShop | Other
  City        string
  Description string?
  CreatedAt   DateTime

BeerLog
  Id          Guid PK
  UserId      string          -- plain string placeholder; no auth in MVP
  BeerId      Guid FK → Beer
  VenueId     Guid? FK → Venue  -- optional
  LoggedAt    DateTime
  Notes       string?
  Rating      int?            -- 1–5, private

Article
  Id          Guid PK
  Title       string
  Content     string          -- plain text MVP; rich text later
  AuthorId    string          -- plain string placeholder; no auth in MVP
  Tag         string          -- category label (e.g. "Brewing", "Guide")
  PublishedAt DateTime
  CreatedAt   DateTime
```

### Relationships
- `Brewery` 1 → N `Beer`
- `Beer` N → M `Venue` *(deferred — no join table in MVP)*
- `BeerLog` N → 1 `Beer`, N → 1 `Venue` (optional)

---

## MVP Scope

### IN for MVP
- [ ] CRUD endpoints for Brewery, Beer, Venue, BeerLog, Article (FastEndpoints)
- [ ] EF Core entities + DbContext + initial migration
- [ ] PostgreSQL via Docker Compose
- [ ] Next.js scaffold with App Router
- [ ] Public catalog pages: list + detail for Brewery, Beer, Venue
- [ ] BeerLog pages (no auth guard — UserId is a hardcoded string for now)
- [ ] Article list + detail pages

### DEFERRED (do not build now)
- Auth / login (ASP.NET Identity or similar) — UserId is a string placeholder until then
- Private rating visibility enforcement
- Social / community features (feeds, follows, likes)
- Map / geo features for venues
- Beer ↔ Venue many-to-many join table
- Rich text editor for articles
- Brewery-submitted news
- Mobile app
- Image uploads

---

## Architecture Conventions

### Backend (FastEndpoints)
- One file per concern per feature: `[Action][Entity]Endpoint.cs`, `[Action][Entity]Request.cs`, `[Action][Entity]Response.cs`
- Each feature lives in its own subfolder: `Features/<Entity>/<FeatureName>/` (e.g. `Features/Articles/GetArticle/`)
- Namespace matches folder path: `BRF.Api.Features.<Entity>.<FeatureName>`
- No service layer for MVP — endpoints call DbContext directly (keep it simple, refactor later)
- Use `async`/`await` throughout
- Return `Results<Ok<T>, NotFound>` style typed results

### Frontend (Next.js)
- App Router with route groups: `(catalog)`, `(log)`, `(news)`
- Fetch data in Server Components using direct `fetch` against the API
- API base URL from env var `NEXT_PUBLIC_API_URL`
- Stitch-generated components go in `components/ui/` — do not modify them, compose them
- Tailwind for all custom styling

### Database
- All PKs are `Guid` (generated by app, not DB)
- Soft deletes: not for MVP, hard delete is fine
- Timestamps: `CreatedAt` on all entities, UTC

---

## Local Development

### Running the stack
```bash
# Start DB (and API when Compose is complete)
docker-compose up -d

# Run API locally
cd src/BRF.Api
dotnet run

# Run FE locally
cd src/BRF.Web
npm run dev
```

### Environment variables
- API: connection string in `appsettings.Development.json` → `ConnectionStrings:Default`
- FE: `NEXT_PUBLIC_API_URL=http://localhost:5000`

---

## Design System

- UI components are generated via **Stitch** (Anthropic's design tool) and provided by the user
- Drop generated components into `src/BRF.Web/components/ui/`
- Do not generate custom UI from scratch — wait for Stitch components or ask the user
- Tailwind CSS is the styling foundation

---

## What To Ask The User Before Building New Features

1. Is this in MVP scope or deferred?
2. Does a Stitch design exist for any new UI?
3. Any new entities or relations needed in the data model?

---

## Hosting

- Raspberry Pi 5, Docker containers
- PostgreSQL + API in Docker Compose
- FE will be added to Compose or served statically (TBD)
