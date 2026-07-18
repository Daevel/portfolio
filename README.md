# Luigi Avitabile Portfolio

Portfolio personale di Luigi Avitabile, Frontend Software Engineer. Il progetto nasce come base production-ready per presentare profilo professionale, competenze tecniche, side projects e futuri case study.

## Stack

- Next.js 16 con App Router
- React e TypeScript strict
- Tailwind CSS
- shadcn/ui conventions
- Motion tramite `motion`
- Biome per linting e formattazione
- pnpm come package manager

## Requisiti

- Node.js compatibile con Next.js 16
- pnpm 10+

## Installazione

```bash
pnpm install
```

## Avvio locale

```bash
pnpm dev
```

Il server di sviluppo usa Turbopack.

## Script disponibili

- `pnpm dev`: avvia il server locale di sviluppo.
- `pnpm build`: esegue la build production.
- `pnpm start`: avvia la build production.
- `pnpm lint`: esegue i controlli Biome.
- `pnpm lint:fix`: applica i fix automatici Biome.
- `pnpm format`: formatta il codice con Biome.
- `pnpm typecheck`: esegue TypeScript senza emissione file.

## Struttura principale

```text
src/
├── app/              # Routing App Router, metadata, sitemap, robots
├── components/       # Layout, motion components e componenti UI
├── config/           # Configurazione centralizzata del sito
├── data/             # Dataset locale dei progetti
├── lib/              # Utility condivise
└── types/            # Tipi TypeScript condivisi
```

## Build

```bash
pnpm build
```

## Personalizzazione

- Aggiorna nome, descrizione, dominio, email e link social in `src/config/site.ts`.
- Sostituisci i progetti placeholder in `src/data/projects.ts`.
- Sostituisci le immagini placeholder in `public/projects/`.
- Aggiorna `siteConfig.url` con il dominio definitivo prima della pubblicazione.
- Espandi le pagine case study in `src/app/projects/[slug]/page.tsx` quando i contenuti reali saranno disponibili.

## Route iniziali

- `/`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/contacts`
