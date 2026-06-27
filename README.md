# DrivePrep

Bilingual driving test practice app for Pakistan. Learners take 20-question mock exams in **English** or **Urdu**, review answers, and read driving guidelines — no account required.

- **247 text MCQs** (Phase 1 — no sign images)
- **70% pass threshold** · server-side scoring · attempt persistence
- **PWA-ready** (installable, offline fallback)
- **Full-stack Next.js** with PostgreSQL via Prisma

## Tech stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16 (App Router), React 19, Tailwind CSS 4 |
| Backend | Next.js Server Actions |
| Database | PostgreSQL + Prisma 6 |
| Validation | Zod |
| Tests | Vitest |

## Prerequisites

- Node.js 20+
- Docker (for local PostgreSQL)
- npm

## Local setup

```bash
# 1. Clone and install
git clone https://github.com/alihaidar3424/DrivePrep.git
cd DrivePrep
npm install

# 2. Environment
cp .env.example .env

# 3. Start PostgreSQL (host port 5433 — avoids conflict with other Postgres on 5432)
docker compose up -d

# 4. Apply schema and seed (247 questions + 8 guidelines)
npm run db:push
npm run db:seed

# 5. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm test` | Run unit tests |
| `npm run db:push` | Sync Prisma schema to database |
| `npm run db:migrate` | Create/apply migrations (dev) |
| `npm run db:migrate:deploy` | Apply migrations (production) |
| `npm run db:seed` | Seed questions and guidelines |
| `npm run db:studio` | Open Prisma Studio |

## Project structure

```
app/                  # Next.js pages (home, start, quiz, result, review, guidelines)
components/           # UI components (quiz, layout, PWA)
data/                 # Seed source: questions JSON + guidelines TS
lib/                  # Server actions, translations, validations
prisma/               # Schema, migrations, seed script
public/               # PWA icons, service worker
reference/            # Local-only source PDFs, images, design mocks (gitignored)
scripts/              # Build utilities (icon generation)
```

## App routes

| Route | Purpose |
|-------|---------|
| `/` | Home — language selection, start CTA |
| `/start` | Name, phone, privacy note → creates attempt |
| `/quiz/[attemptId]` | 20-question mock exam |
| `/result/[attemptId]` | Score and pass/fail |
| `/review/[attemptId]` | Per-question answer review |
| `/guidelines` | Driving guidelines index |
| `/guidelines/[slug]` | Guideline article |
| `/offline` | PWA offline fallback |
| `/api/health` | Database health check |

## Deployment (Vercel)

1. Import the repo on [Vercel](https://vercel.com).
2. Add **`DATABASE_URL`** (Neon or Supabase PostgreSQL connection string).
3. Deploy — migrations run via `vercel.json` build command.
4. Seed production **once**:

   ```bash
   DATABASE_URL="your-production-url" npm run db:seed
   ```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |

See `.env.example` for local and production examples.

## Reference material

Source PDFs, sign images, design mocks, and dataset build scripts live in **`reference/`** (gitignored). The running app only needs `data/text-questions-bilingual.json` and `data/guidelines.ts`.

## License

Private — all rights reserved.
