# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

D-mon Hockey Club website - a React SPA for managing club content, events, teams, sponsors, and member information. Built with Vite + React 18 + TypeScript, using Supabase as the backend.

## Development Commands

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint

# Run all Playwright tests (dev server must be running)
npm run test:gui

# Run tests in headed mode (shows browser)
npm run test:gui:headed

# Run a specific test file
npm run test:gui:home
```

## Architecture

### Frontend Stack
- **Framework**: Vite + React 18.3.1 + TypeScript
- **Routing**: React Router v6 (client-side SPA, all routes in `src/App.tsx`)
- **State Management**:
  - Auth Context (`src/hooks/useAuth.tsx`) for authentication/authorization
  - TanStack Query for server state management
  - Local state with `useState` and custom hooks
- **UI**: shadcn/ui components (Radix UI + Tailwind CSS) in `src/components/ui/`
- **Styling**: Tailwind CSS with custom color palette and dark mode support

### Backend & Data
- **Backend**: Supabase (PostgreSQL database, auth, storage, edge functions)
- **Database Types**: Auto-generated in `src/integrations/supabase/types.ts` (do not manually edit)
- **Supabase Client**: Configured in `src/integrations/supabase/client.ts`
  - Uses env vars `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`
  - Falls back to hardcoded values for the existing Supabase project
- **Edge Functions**: Located in `supabase/functions/` directory
  - `sync-twizzit-events` - Daily sync of events from Twizzit API (scheduled at 2 AM)
  - `sync-twizzit-teams` - Team data synchronization
  - `fetch-instagram-posts` - Instagram feed integration
  - `get-mapbox-token` - Mapbox token retrieval
  - Others for admin/utility tasks

### Authentication & Authorization

**Role Hierarchy** (from `src/hooks/useAuth.tsx`):
- `admin` - Full access to all admin features
- `moderator` - Access to content management (announcements, teams, sponsors, field closures)
- `member` - Default role for authenticated users

**Role Checks**:
- `isAdmin` = user role is 'admin'
- `isModerator` = user role is 'moderator' OR 'admin'

**Protected Routes** (in `src/App.tsx`):
- Use `<ProtectedRoute requireModerator>` for moderator+ access
- Use `<ProtectedRoute requireAdmin>` for admin-only access
- Auth state managed by `AuthProvider` context wrapper
- User roles stored in `user_roles` table, fetched on auth state change

**ProtectedRoute Component** (`src/components/ProtectedRoute.tsx`):
- Shows loading spinner while auth state is loading
- Redirects to `/auth` if not authenticated
- Redirects to `/` if authenticated but insufficient permissions

### Routing Structure

Routes are organized by domain in `src/App.tsx`:

- **Public**: `/`, `/auth`, `/events`, `/nieuws`, `/socials`, `/shop`
- **Club**: `/club/*` (field, teams, board, values, media, history, sponsors, sfeer, privacy, field-status)
- **Membership**: `/membership/*` (info, register, indoor-registration, insurance, contact)
- **Sporting**: `/sporting/*` (training, how-to-play, rules/*, stick-guide, coaches-info, hockey-principles, indoor-hockey, rules-agent)
- **Admin** (protected): `/admin/*` (dashboard, announcements, teams, sponsors, board-members, field-closures, users)

Each page component is in `src/pages/` with admin pages in `src/pages/admin/`.

### Database Schema (Key Tables)

The `src/integrations/supabase/types.ts` file contains auto-generated TypeScript types. Key tables include:

- `announcements` - Club news/announcements (requires author_id, content, title)
- `teams` - Team listings (name, category, age_group, training info)
- `sponsors` - Sponsor information (tiered: diamond, gold, silver, bronze)
- `board_members` - Board member profiles (name, position, contact info)
- `user_roles` - User role assignments (user_id, role)
- `field_closures` - Hockey field closure tracking
- `events` - Events synced from Twizzit (via edge function)
- `instagram_posts` - Instagram feed cache

**Important**: Never manually edit `types.ts` - it's auto-generated from the Supabase schema.

### Forms & Validation

- **Forms**: React Hook Form (`react-hook-form`)
- **Validation**: Zod schemas
- **Rich Text**: React Quill for WYSIWYG editing (announcements, content)
  - Sanitized with DOMPurify before rendering

### Component Organization

```
src/components/
├── ui/              # 49 shadcn/ui components (Button, Card, Dialog, etc.)
├── admin/           # Admin-specific components
├── AppSidebar.tsx   # Main navigation sidebar
├── AppHeader.tsx    # Top header with menu trigger
└── ProtectedRoute.tsx  # Route protection wrapper
```

**UI Component Pattern**: shadcn/ui uses compound components with Radix UI primitives. Components are styled with Tailwind and use `cn()` utility (`clsx` + `tailwind-merge`) for conditional classes.

### Key Libraries

- **Forms**: React Hook Form + Zod
- **Data Fetching**: TanStack Query (React Query)
- **Maps**: Mapbox GL v3.14.0
- **Charts**: Recharts v2.15.4
- **Rich Text**: React Quill v2.0.0
- **Dates**: date-fns + date-fns-tz + React Day Picker
- **Icons**: Lucide React
- **Notifications**: Sonner (toast library)
- **Carousel**: Embla Carousel
- **Markdown**: React Markdown

## Deployment

Deployed on Vercel with these settings (from `vercel.json`):
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: All routes rewrite to `/index.html`

Required environment variables for Vercel:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## Supabase Edge Functions

Edge functions require the Supabase CLI and secrets configuration. Example setup:

```bash
supabase login
supabase secrets set TWIZZIT_USERNAME=... TWIZZIT_PASSWORD=... \
  TWIZZIT_ORG_ID=... INSTAGRAM_ACCESS_TOKEN=... \
  MAPBOX_PUBLIC_TOKEN=... SUPABASE_URL=... \
  SUPABASE_SERVICE_ROLE_KEY=... --env local
```

Deploy and schedule functions:
```bash
supabase functions deploy sync-twizzit-events --no-verify-jwt
supabase cron schedule twizzit-sync "0 2 * * *" sync-twizzit-events
```

## Important Patterns

**Supabase Client Usage**:
```typescript
import { supabase } from "@/integrations/supabase/client";
```

**Auth Context**:
```typescript
import { useAuth } from "@/hooks/useAuth";
const { user, session, userRole, isAdmin, isModerator, loading } = useAuth();
```

**React Query for Data Fetching** (common in admin pages):
```typescript
import { useQuery, useMutation } from "@tanstack/react-query";
```

**Toast Notifications**:
```typescript
import { useToast } from "@/hooks/use-toast";
const { toast } = useToast();
```

**Styling Utility**:
```typescript
import { cn } from "@/lib/utils";
// Combines clsx + tailwind-merge for conditional classes
```

## Testing

End-to-end tests use Playwright and are located in `tests/gui/`. The dev server must be running before executing tests.
