---
name: project-context
description: Use when working on Luigi's personal portfolio project, especially for product context, positioning, content, frontend architecture, React, Angular, technical skills, and side projects.
---

# Project Context

## Identity

Luigi Avitabile is a Frontend Software Engineer.

## Technical Focus

Luigi mainly works with React and the modern frontend ecosystem, and with Angular.

Additional technical details will be added as the project evolves.

## Project Goal

This project is Luigi's personal portfolio website.

The portfolio should highlight:

- Luigi's technical skills.
- The side projects Luigi is currently building.
- Luigi's frontend engineering credibility.
- Future detailed case studies for selected projects.

The project should start from a clean, production-ready technical foundation without locking the portfolio into a definitive visual identity too early.

## Initial Product Structure

The site initially contains these primary sections, each mapped to a separate route:

- Home: `/`
- About me: `/about`
- Projects: `/projects`
- Contacts: `/contacts`

Project detail pages are prepared through the dynamic route `/projects/[slug]` and will be used later for full case studies.

## Technical Baseline

Use the following stack and conventions for this portfolio:

- Next.js 16 with App Router.
- React with TypeScript in strict mode.
- `src` directory structure.
- `@/*` import alias.
- pnpm as the package manager.
- Tailwind CSS.
- shadcn/ui conventions for UI primitives.
- Motion via the `motion` package, imported from `motion/react`.
- Biome for linting and formatting.
- CSS custom properties for design tokens.

Avoid:

- Pages Router.
- JavaScript files for application code.
- npm or Yarn.
- ESLint and Prettier.
- `framer-motion` legacy package.
- Unnecessary UI libraries or superfluous dependencies.

## Architecture Direction

Keep a clear separation between:

- Routing and metadata under `src/app`.
- Layout and UI components under `src/components`.
- Site-wide configuration under `src/config`.
- Local content and placeholder datasets under `src/data`.
- Shared utilities under `src/lib`.
- Shared TypeScript types under `src/types`.

React Server Components should remain the default. Use Client Components only for actual interaction or isolated animations, such as the mobile navigation and lightweight reveal animations.

## Content Direction

Use realistic placeholder content instead of lorem ipsum.

Centralize repeated content such as name, role, description, URL, email, social links, navigation items, and core technologies in `src/config/site.ts` when appropriate.

Current placeholder identity:

- Name: Luigi Avitabile.
- Role: Frontend Software Engineer.

The homepage should introduce Luigi, show core frontend technologies, surface featured projects, and include a call to action toward Contacts.

Projects should be represented by a typed `Project` model with slug, title, summary, description, technologies, image, repository URL, live URL, and featured flag.

## UX, Accessibility, SEO, and Performance

The portfolio should be modern, fast, accessible, responsive, and SEO-friendly.

Preserve these baseline requirements:

- Semantic structure with `header`, `nav`, `main`, `section`, and `footer`.
- A visible keyboard focus state.
- A skip-to-content link.
- Keyboard-accessible navigation.
- Accessible mobile menu with ARIA attributes.
- One primary `h1` per page.
- Coherent heading levels.
- Accessible link names.
- Meaningful image alt text.
- Mobile-first responsive layout.
- `next/image` and `next/font` used where appropriate.
- Avoid avoidable layout shift.
- Keep obvious console errors and warnings out of the app.

SEO should include global metadata, a title template, metadata base, description, Open Graph, Twitter card, sitemap, robots, canonical URLs where appropriate, page-specific metadata, and dynamic project metadata.

Use a clearly identifiable placeholder URL until the real domain is available.

## Design System Direction

Use CSS custom properties for initial design tokens, compatible with the shadcn/ui approach.

At minimum, define tokens for:

- `background`
- `foreground`
- `primary`
- `primary-foreground`
- `secondary`
- `secondary-foreground`
- `muted`
- `muted-foreground`
- `border`
- `accent`
- `destructive`
- `focus-ring`

Support both light mode and dark mode. Do not introduce a theme toggle unless it can be implemented cleanly without unnecessary complexity.

The initial visual base should be minimal and polished, but not a final brand direction. Avoid generic, hard-to-replace design choices.

## Code Quality Direction

Keep the code simple, readable, and production-oriented.

Prefer:

- Small, focused components.
- Type-safe content models.
- Minimal abstractions.
- Clear naming.
- Import aliases.
- Comments only when they add useful context.

Avoid:

- `any`.
- Monolithic components.
- Duplicated configuration or content.
- Unnecessary barrel files.
- Over-engineering.

Core checks should pass before considering work complete:

- `pnpm format`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`

## Future Direction

The next major step is to define:

- Visual identity.
- Real portfolio content.
- Real project data.
- Case study structure and narrative.

Only after that should the interface move from the current minimal foundation toward a definitive design.

## Usage Guidance

When contributing to this project:

- Keep the portfolio focused on frontend engineering credibility.
- Prefer clear, polished presentation of technical strengths and selected projects.
- Preserve room for future additions as Luigi expands the project context.
- Treat the current design as a solid foundation, not as the final art direction.
- Avoid adding dependencies, abstractions, or interactive features without a concrete need.
