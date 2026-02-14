# Frontend Architecture

## Overview

Brewfolio's frontend is a **React SPA** built with Vite and TypeScript, living in `src/BRF.Web/`.

## Tech Stack

| Concern            | Library / Tool                 | Why                                                         |
|--------------------|-------------------------------|-------------------------------------------------------------|
| Build              | Vite + TypeScript             | Fast HMR, native ESM, minimal config                       |
| UI components      | Radix UI Themes + Radix Icons | Accessible, themeable component library                     |
| Routing            | React Router v7               | Standard client-side routing                                |
| Server state       | TanStack Query (React Query)  | Caching, background refetching, optimistic updates          |
| Forms              | React Hook Form + Zod         | Performant forms with schema-based validation               |
| HTTP client        | Axios                         | Interceptors, typed responses, easy error handling          |

## Project Structure

```
src/BRF.Web/
├── public/                     # Static assets served as-is
├── src/
│   ├── components/             # Shared/global UI components (Layout, etc.)
│   ├── features/               # Feature modules (mirrors API feature groups)
│   │   ├── beers/
│   │   │   ├── types.ts        # TS interfaces matching API contracts
│   │   │   ├── api.ts          # API call functions (axios + react-query hooks)
│   │   │   ├── pages/          # Route-level page components
│   │   │   └── components/     # Beer-specific UI components
│   │   ├── breweries/
│   │   │   └── ...             # Same structure
│   │   └── venues/
│   │       └── ...             # Same structure
│   ├── lib/                    # Shared utilities (api-client, helpers)
│   ├── App.tsx                 # Route definitions
│   ├── main.tsx                # Entry point (providers, theme)
│   └── index.css               # Global CSS reset
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Key Conventions

### Feature Modules

Each feature group (`beers`, `breweries`, `venues`) mirrors the backend's vertical-slice structure:

- **`types.ts`** — TypeScript interfaces matching the API request/response DTOs.
- **`api.ts`** — Axios call functions + TanStack Query hooks (`useBeers()`, `useCreateBeer()`, etc.).
- **`pages/`** — Route-level components (list page, detail page, create/edit page).
- **`components/`** — Feature-specific UI components (table rows, form fields, cards).

### Hard Boundary Rule

Same as backend: **no cross-feature imports**. A beer component must **not** import from `features/breweries/`. Shared types belong in `lib/` or `components/`.

### API Client

- `src/lib/api-client.ts` exports a pre-configured Axios instance.
- Base URL is `/api` — the Vite dev server proxies this to the .NET backend (`http://localhost:5250`).
- All feature `api.ts` files import from `@/lib/api-client`.

### Path Aliases

`@/` is aliased to `src/` via both Vite (`vite.config.ts`) and TypeScript (`tsconfig.app.json`).

```ts
import { api } from '@/lib/api-client'
```

### Radix UI Theming

The app is wrapped in `<Theme>` from `@radix-ui/themes` in `main.tsx`. Current theme settings:
- Accent color: `amber`
- Gray scale: `sand`
- Border radius: `medium`

To change the theme, edit the `<Theme>` props in `main.tsx`.

## Development

```bash
cd src/BRF.Web

# Start dev server (port 3000, proxies /api → localhost:5250)
npm run dev

# Type-check + build for production
npm run build

# Lint
npm run lint
```

### Running with the API

1. Start SQL Server: `docker compose up -d` (from repo root)
2. Start the API: `dotnet run --project src/BRF.Api`
3. Start the frontend: `cd src/BRF.Web && npm run dev`
4. Open `http://localhost:3000`

## Adding a New Feature Page

1. Add types in `src/features/<group>/types.ts`
2. Add API hooks in `src/features/<group>/api.ts`
3. Create page component in `src/features/<group>/pages/`
4. Add route in `App.tsx`
