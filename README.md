# D-mon Hockey Club Website

A modern, responsive website for D-mon Hockey Club built with React and TypeScript.

## Project info

**URL**: https://lovable.dev/projects/e2aabc45-8df6-4198-b516-5ee2c510f680

## Technology Stack

This project is built with modern web technologies:

### Frontend
- **React 18** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library

### Backend & Database
- **Supabase** - PostgreSQL database, authentication, and real-time subscriptions
- **Supabase Edge Functions** - Serverless functions for API endpoints

### UI Components & Libraries
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful icon library
- **React Router** - Client-side routing
- **React Hook Form** - Form state management
- **TanStack Query** - Data fetching and caching
- **Mapbox GL JS** - Interactive maps
- **Recharts** - Chart visualization library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Bun** - Fast package manager and runtime

## Local Development Setup

### Prerequisites
- Node.js 18+ or Bun
- Git

#### Supabase CLI
Install the [Supabase CLI](https://supabase.com/docs/guides/cli) to manage Edge Functions and secrets.

```bash
npm i -g supabase
```

Authenticate your local environment before running deploy or cron commands:

```bash
supabase login
```

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Or using bun (recommended)
   bun install
   ```

3. **Environment Setup**
   - The project uses Supabase for backend services
   - Environment variables are managed through Supabase Edge Functions
   - No local `.env` file is needed for basic development

4. **Start development server**
   ```bash
   # Using npm
   npm run dev
   
   # Or using bun
   bun dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── pages/              # Route components
│   ├── admin/          # Admin dashboard pages
│   ├── club/           # Club information pages
│   ├── membership/     # Membership-related pages
│   └── sporting/       # Sports-related pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── integrations/       # External service integrations
│   └── supabase/       # Supabase client and types
└── assets/             # Static assets
```

## Key Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Authentication** - User registration and login via Supabase Auth
- **Admin Dashboard** - Content management for teams, announcements, sponsors
- **Interactive Map** - Club location with Mapbox integration
- **Modern UI** - Beautiful, accessible components with dark/light mode
- **SEO Optimized** - Semantic HTML and proper meta tags

## How can I edit this code?

### Use Lovable (Recommended)
Simply visit the [Lovable Project](https://lovable.dev/projects/e2aabc45-8df6-4198-b516-5ee2c510f680) and start prompting. Changes made via Lovable will be committed automatically to this repo.

### Use your preferred IDE
Clone this repo and push changes. Pushed changes will also be reflected in Lovable.

### Edit directly in GitHub
Navigate to files and use the "Edit" button (pencil icon) to make changes.

### Use GitHub Codespaces
Click the "Code" button → "Codespaces" tab → "New codespace" for a cloud development environment.

## Deployment

### Lovable Hosting (Recommended)
1. Open [Lovable](https://lovable.dev/projects/e2aabc45-8df6-4198-b516-5ee2c510f680)
2. Click Share → Publish
3. Your app will be live instantly

### Custom Domain
To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the setup instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain)

### Self-Hosting
The project generates standard web app code that can be deployed anywhere:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to any static hosting service
3. Configure environment variables for Supabase in your hosting environment

### Twizzit Events Sync

To keep the `twizzit_events` table up to date, deploy and schedule the `sync-twizzit-events` edge function. Make sure you're authenticated with Supabase CLI before running these commands:

```bash
supabase login
supabase functions deploy sync-twizzit-events --no-verify-jwt
supabase cron schedule twizzit-sync "0 2 * * *" sync-twizzit-events
```

Ensure the following secrets are configured in each environment:

The Supabase Edge Functions in this project rely on the following secrets. Each item notes the feature that uses it. Configure them for every environment and set them locally when developing Edge Functions:

- `TWIZZIT_USERNAME` – Twizzit account used by `sync-twizzit-events`
- `TWIZZIT_PASSWORD` – Twizzit password for `sync-twizzit-events`
- `TWIZZIT_ORG_ID` – Twizzit organization ID for `sync-twizzit-events`
- `INSTAGRAM_ACCESS_TOKEN` – Instagram feed via `fetch-instagram-posts`
- `MAPBOX_PUBLIC_TOKEN` – Interactive map via `get-mapbox-token`
- `SUPABASE_URL` – Supabase project URL for database access in Edge Functions (e.g., `sync-twizzit-events`)
- `SUPABASE_SERVICE_ROLE_KEY` – Supabase service role key for Edge Functions that write to the database

Set them using the Supabase CLI (example for local development):

```bash
supabase secrets set \
  TWIZZIT_USERNAME="your-username" \
  TWIZZIT_PASSWORD="your-password" \
  TWIZZIT_ORG_ID="your-org-id" \
  INSTAGRAM_ACCESS_TOKEN="your-instagram-token" \
  MAPBOX_PUBLIC_TOKEN="your-mapbox-token" \
  SUPABASE_URL="your-supabase-url" \
  SUPABASE_SERVICE_ROLE_KEY="your-service-role-key" \
  --env local
```

Repeat for other environments (e.g., `--env dev`, `--env prod`) as needed.


## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit and push to your fork
6. Create a pull request

## Support

For questions about the D-mon Hockey Club website, please contact the club administration.

For technical issues with Lovable, visit [Lovable Documentation](https://docs.lovable.dev/).