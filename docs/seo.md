# SEO Implementation Guide

## Overview

This document describes the SEO implementation for Luigi Avitabile's portfolio at `https://daevel.me`.

## Architecture

The SEO system uses Next.js App Router Metadata API with a server/client split pattern:

- **Server components** (`page.tsx`): Export `metadata` or `generateMetadata` for each route
- **Client components** (`*-content.tsx`): Handle rendering with `"use client"` directive

This pattern is necessary because `"use client"` pages cannot export `metadata`.

## Files

### Core Configuration

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Central site config with URL, name, description, social links |
| `src/app/layout.tsx` | Root metadata: metadataBase, title template, OG, Twitter, robots |

### Route Metadata

| File | Export | Description |
|------|--------|-------------|
| `src/app/about/page.tsx` | `metadata` | Static metadata for /about |
| `src/app/projects/page.tsx` | `metadata` | Static metadata for /projects |
| `src/app/contacts/page.tsx` | `metadata` | Static metadata for /contacts |
| `src/app/projects/[slug]/page.tsx` | `generateMetadata` | Dynamic metadata per project |
| `src/app/privacy-policy/page.tsx` | `metadata` | Static metadata for privacy policy |

### SEO Files

| File | Purpose |
|------|---------|
| `src/app/sitemap.ts` | Dynamic sitemap with all routes |
| `src/app/robots.ts` | Robots.txt (allow all, reference sitemap) |
| `src/app/opengraph-image.tsx` | OG image (1200x630, branded) |
| `src/app/twitter-image.tsx` | Twitter card image (1200x630, branded) |

### Structured Data

| File | Component | Purpose |
|------|-----------|---------|
| `src/components/seo/json-ld.tsx` | `JsonLdPerson` | Person schema for homepage |
| `src/components/seo/json-ld.tsx` | `JsonLdWebSite` | WebSite schema |
| `src/components/seo/json-ld.tsx` | `JsonLdProject` | CreativeWork schema for projects |

## Metadata per Page

### Home (`/`)
- Title: `Luigi Avitabile | Frontend Engineer`
- Description: Portfolio overview
- Structured data: Person schema
- Canonical: `https://daevel.me`

### About (`/about`)
- Title: `About | Luigi Avitabile`
- Description: Skills and approach
- Canonical: `https://daevel.me/about`

### Projects (`/projects`)
- Title: `Projects | Luigi Avitabile`
- Description: Project selection
- Canonical: `https://daevel.me/projects`

### Project Detail (`/projects/[slug]`)
- Title: `{Project Title} | Luigi Avitabile`
- Description: Project-specific with technologies
- OG images: Project hero image
- Canonical: `https://daevel.me/projects/{slug}`

### Contacts (`/contacts`)
- Title: `Contacts | Luigi Avitabile`
- Description: Contact information
- Canonical: `https://daevel.me/contacts`

### Privacy Policy (`/privacy-policy`)
- Title: `Privacy Policy | Luigi Avitabile`
- Description: Privacy notice
- Canonical: `https://daevel.me/privacy-policy`

## Semantic HTML

- Single `<h1>` per page (footer uses `<p>` for site name)
- Proper heading hierarchy: h1 > h2 > h3
- Skip-to-content link
- ARIA labels on navigation
- Meaningful image alt text
- `aria-current="page"` on active nav links

## Social Links

- GitHub: `https://github.com/daevel`
- LinkedIn: `https://www.linkedin.com/in/luigi-avitabile/`
- Instagram: `https://www.instagram.com/elle.evel/`

## Notes

- **No hreflang**: Client-side i18n (en/it) on same URL, not localized URLs
- **No PostHog**: Analytics integration deferred
- **No keyword meta tag**: Not used by modern search engines
- **No verification meta tags**: Add when Search Console/Analytics are configured
