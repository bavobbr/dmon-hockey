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
│   ├── components    # reusable UI components
│   ├── pages         # route components
│   ├── hooks         # custom hooks
│   ├── integrations  # API clients (Supabase, etc.)
│   └── lib           # utilities and helpers
├── supabase          # edge functions and database migrations
├── public            # static assets
├── tests             # Playwright tests
└── ...
```

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
The repository is preconfigured with a Supabase project. To use your own project, edit `src/integrations/supabase/client.ts` and replace `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`.

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

## Scripts
```bash
npm run dev        # start dev server
npm run build      # production build
npm run preview    # preview build
npm run lint       # lint code
npm run test:gui   # run Playwright tests (dev server must be running)
```

## Deployment
Build the project and deploy the `dist` folder to any static host or publish via Lovable.

## Contributing
1. Fork the repo and create a branch.
2. Make and test your changes.
3. Commit, push, and open a pull request.
