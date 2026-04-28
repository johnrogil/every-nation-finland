# AGENTS.md — Every Nation Finland

**Project:** Every Nation Finland — A web application showcasing Every Nation churches and communities across Finland.

**Tech Stack:** React 18 + TypeScript + Vite (frontend); Express (backend); Tailwind CSS + Shadcn/ui (UI); Wouter (routing); pnpm (package manager).

## Quick Start

```bash
# Install dependencies
pnpm install

# Development (both frontend and backend watch)
pnpm run dev

# Type checking
pnpm run check

# Build for production
pnpm run build

# Start production server
pnpm run start

# Format code
pnpm run format
```

## Project Structure

```
client/              # React frontend (Vite)
  src/
    pages/           # Route pages (Home, CityPage, Maintenance, NotFound)
    components/
      ui/            # Shadcn/ui components (auto-generated, don't edit manually)
      [other]        # Custom components (ErrorBoundary, Navbar, Map, etc.)
    contexts/        # React Context providers (ThemeContext)
    hooks/           # Custom hooks (useComposition, useMobile, usePersistFn)
    lib/             # Utilities (cities.ts data, utils.ts helpers)

server/              # Express server (serves static files, handles routing)
  index.ts           # Main server file - serves dist/public in production

shared/              # Code shared between client and server
  const.ts           # Shared constants (COOKIE_NAME, ONE_YEAR_MS)

components.json      # Shadcn/ui config - defines path aliases and style settings
vite.config.ts       # Vite config - includes Manus debug collector, JSX location plugin
tsconfig.json        # TypeScript config with path aliases (@/*, @shared/*)
```

## Path Aliases

```typescript
@/*              → client/src/*             # Client-side imports
@shared/*        → shared/*                  # Shared code imports
```

Use these consistently. Example: `import { COOKIE_NAME } from "@shared/const"`.

## Key Conventions

### Component Structure

- **Shadcn/ui components** live in `client/src/components/ui/` — these are generated and should not be edited manually. Regenerate them using the Shadcn CLI if needed.
- **Custom components** go in `client/src/components/` alongside the ui folder.
- Export components as default exports for consistency with routing patterns.

### Pages & Routing

- Page components live in `client/src/pages/` and are used with Wouter routes.
- **Maintenance Mode** is controlled by `MAINTENANCE_MODE` flag in [App.tsx](client/src/App.tsx#L11) — when `true`, all routes show the Maintenance page.
  - Always toggle this back to `false` before committing if you enable it for testing.
- Fallback 404 route is at the end of the Switch statement.

### Styling

- **Tailwind CSS** is the primary styling tool — no separate CSS modules.
- **Shadcn/ui** is installed in "new-york" style with CSS variables for theming.
- Theme context is managed in [ThemeContext.tsx](client/src/contexts/ThemeContext.tsx) — extend this for new theme variants.
- The design follows **Nordic Minimalism** approach: deep navy (#0A1628), electric blue (#1A56DB), white backgrounds, Playfair Display + DM Sans typography.

### Backend Server

- The Express server is minimal — it serves static files and handles client-side routing with a catch-all `GET *` route.
- In production, it serves from `dist/public/`. In development, it serves from `dist/public/`.
- The build process outputs:
  - **Frontend:** Vite bundles to `dist/` (Vite dist folder)
  - **Backend:** esbuild bundles `server/index.ts` to `dist/index.js` (executable entry point)

### Build & Deployment

- **Build command** (`pnpm run build`):
  1. Runs `vite build` → creates frontend bundle in `dist/`
  2. Runs `esbuild` → bundles `server/index.ts` to `dist/index.js`
  3. Result: Single `dist/` folder ready for production
- **Start command** (`pnpm run start`):
  - Sets `NODE_ENV=production` and runs `node dist/index.js`
  - Server looks for static files in `dist/public/`

## Important Notes

### Manus Runtime Integration

The Vite config includes a custom Manus debug collector plugin (`vitePluginManusRuntime`) that captures browser logs, network requests, and session replay data. This is useful for debugging in development but does not affect production builds.

### TypeScript Path Resolution

- `allowImportingTsExtensions: true` allows direct imports of `.ts` files during development
- `moduleResolution: "bundler"` uses Node-style resolution
- `baseUrl: "."` allows path aliases to work correctly

### OAuth Integration

Client-side OAuth configuration is in [const.ts](client/src/const.ts) — it constructs login URLs using environment variables:
- `VITE_OAUTH_PORTAL_URL` — OAuth provider URL
- `VITE_APP_ID` — Application ID for the provider

These should be set in `.env` file at the root.

## Common Tasks

### Adding a New Page

1. Create a component in `client/src/pages/YourPage.tsx`
2. Add a route in the `Router()` function in [App.tsx](client/src/App.tsx)
3. Import and use the page component

### Adding a New UI Component

Use the Shadcn CLI to generate components:
```bash
npx shadcn-ui@latest add [component-name]
```

This generates components in `client/src/components/ui/` with proper theming support.

### Debugging Layout Issues

- Check `Map.tsx` and `Navbar.tsx` for structure-specific patterns
- Use browser DevTools with Tailwind CSS debugging enabled
- Check theme context if styles don't apply as expected

### Type Checking

- Run `pnpm run check` before committing — this runs `tsc --noEmit`
- TypeScript config is strict (`"strict": true`), so all types must be explicitly defined

## Potential Pitfalls

- **Maintenance mode gotcha:** The `MAINTENANCE_MODE` flag in [App.tsx](client/src/App.tsx) overrides all routes. Never commit with this set to `true`.
- **Path alias confusion:** Make sure to use `@/` for client-side imports and `@shared/` for shared code. Don't mix relative imports with alias imports in the same file.
- **Vite environment variables:** Must be prefixed with `VITE_` to be exposed to the client. Server-only env vars won't be available in the browser.
- **Shadcn/ui regeneration:** Don't manually edit files in `client/src/components/ui/` — regenerate them with the CLI if you need updates.
- **Build order:** The build process runs Vite first, then esbuild. Make sure `dist/` exists before esbuild runs (it should be automatic, but watch for this if build fails).

## File Exemplars

- **Router pattern:** [App.tsx](client/src/App.tsx) — shows routing setup with Wouter and error boundary
- **Context usage:** [ThemeContext.tsx](client/src/contexts/ThemeContext.tsx) — shows React Context for state management
- **Component structure:** [Navbar.tsx](client/src/components/Navbar.tsx) — shows typical custom component pattern
- **Server setup:** [server/index.ts](server/index.ts) — shows Express setup and static file serving
- **Build config:** [vite.config.ts](vite.config.ts) — shows Vite plugins and Manus integration

---

**Last updated:** April 2026 | **Project Lead:** Every Nation Finland
