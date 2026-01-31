# D-mon Hockey Club Website

Modern, responsive website for D-mon Hockey Club built with React and TypeScript.

## Key Features
- Announcements, teams and sponsor listings backed by Supabase
- Twizzit event sync and Instagram feed via scheduled edge functions
- Interactive maps and charts with Mapbox GL and Recharts
- Role-based admin area for managing club content

## Tech Stack
### Core
- React 18 + Vite
- TypeScript
- Tailwind CSS with shadcn/ui (Radix UI primitives, Lucide icons)
- Supabase for database, authentication, storage and edge functions

### Libraries
- React Router for routing
- React Hook Form + Zod for forms and validation
- TanStack Query for data fetching and caching
- Mapbox GL for maps
- Recharts for charts

### Tooling
- ESLint and PostCSS
- Playwright end-to-end tests
- Bun or Node.js runtime

## Requirements
- Node.js 18+ or Bun
- Git
- (Optional) [Supabase CLI](https://supabase.com/docs/guides/cli) for edge functions

## Project Structure
```text
├── src
│   ├── components       # reusable UI components (shadcn/ui)
│   ├── pages            # route components
│   │   ├── lidmaatschap # membership pages (Dutch URLs)
│   │   ├── sportief     # sporting pages (Dutch URLs)
│   │   ├── club         # club pages
│   │   └── admin        # admin dashboard (protected routes)
│   ├── hooks            # custom hooks (useAuth, etc.)
│   ├── config           # app configuration (route mappings)
│   ├── integrations     # API clients (Supabase)
│   └── lib              # utilities and helpers
├── supabase             # edge functions and database migrations
├── public               # static assets
├── tests                # Playwright end-to-end tests
└── ...
```

### Routing

The app uses **Dutch URLs** as the primary routes with automatic redirects from legacy English URLs:

**Dutch URLs** (primary):
- `/lidmaatschap/*` - Membership pages
- `/sportief/*` - Sporting pages
- `/club/*` - Club pages

**English URLs** (redirect to Dutch):
- `/membership/*` → `/lidmaatschap/*`
- `/sporting/*` → `/sportief/*`
- Old club URLs redirect to new Dutch versions

Route mappings are defined in `src/config/routeMappings.ts` for SEO-friendly 301-style redirects.

## Setup
1. **Clone and install**
   ```bash
   git clone https://github.com/<owner>/dmon-hockey.git
   cd dmon-hockey
   npm install # or bun install
   ```
2. **Start the dev server**
   ```bash
   npm run dev # or bun dev
   ```
   Open http://localhost:5173 in your browser.

## Supabase Configuration
The repository is preconfigured with a Supabase project. The app works out‑of‑the‑box using those defaults.

If you want to point to a different Supabase project, set these Vite env variables (used by `src/integrations/supabase/client.ts`):

```bash
# .env
VITE_SUPABASE_URL="https://<project-ref>.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="<anon-or-public-key>"
```

Env vars are optional because the client falls back to the repo’s current Supabase URL and anon key.

Edge functions require the Supabase CLI and secrets. Example:
```bash
supabase login
supabase secrets set TWIZZIT_USERNAME=... TWIZZIT_PASSWORD=... TWIZZIT_ORG_ID=... \
  INSTAGRAM_ACCESS_TOKEN=... MAPBOX_PUBLIC_TOKEN=... SUPABASE_URL=... \
  SUPABASE_SERVICE_ROLE_KEY=... --env local
```
Schedule the Twizzit sync:
```bash
supabase functions deploy sync-twizzit-events --no-verify-jwt
supabase cron schedule twizzit-sync "0 2 * * *" sync-twizzit-events
```

## Development

### Running the Development Server

```bash
npm run dev
# or
bun dev
```

This starts the Vite development server at **http://localhost:5173** with:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh on file changes
- TypeScript type checking

### Building for Production

```bash
# Production build (optimized and minified)
npm run build

# Development build (faster, includes source maps)
npm run build:dev

# Preview the production build locally
npm run preview
```

The build output is placed in the `dist/` directory and is ready for deployment.

**Build verification**: After building, check that there are no TypeScript errors or missing imports.

### Code Quality

```bash
# Run ESLint to check code quality
npm run lint
```

### Testing

The project uses **Playwright** for end-to-end testing.

**⚠️ Important**: The dev server must be running before you can run tests.

```bash
# Terminal 1: Start the dev server
npm run dev

# Terminal 2: Run tests
npm run test:gui              # Run all tests (headless mode)
npm run test:gui:headed       # Run tests with visible browser window
npm run test:gui:home         # Run specific test file (home page)
```

**Test locations**: All tests are in the `tests/gui/` directory.

**Before deploying**: Ensure all tests pass to avoid breaking production.

## Deployment

### Vercel
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: handled via `vercel.json` rewrite to `index.html`
- Environment variables (Project Settings → Environment Variables):
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`

After setting env vars, trigger a new deployment. Ensure your Supabase project allows your Vercel domain in Auth redirect URLs and any Edge Function CORS as applicable.

### Static hosts
Build the project and deploy the `dist` folder to any static host.

## Contributing
1. Fork the repo and create a branch.
2. Make and test your changes.
3. Commit, push, and open a pull request.
