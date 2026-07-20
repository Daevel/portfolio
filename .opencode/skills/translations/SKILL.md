---
name: translations
description: Use when working with translations, adding new UI text, modifying components with t() calls, or before committing changes. Ensures it.json and en.json stay in sync and all visible strings are translated.
---

# Translations Skill

## Purpose

This skill ensures the i18n system stays consistent, complete, and up to date across both locales (it, en). It must be checked before every commit and whenever new UI text is added or modified.

## Files to Monitor

- `src/i18n/it.json` — Italian translations
- `src/i18n/en.json` — English translations
- `src/i18n/types.ts` — Translation type definition
- `src/i18n/context.tsx` — TranslationProvider and useTranslation hook

## Workflow: Before Every Commit

Before committing, run these checks in order:

### 1. Structural Sync Check

Verify that `it.json` and `en.json` have identical key structures.

- Read both JSON files.
- Compare every key path recursively.
- If any key exists in one file but not the other, report the missing keys and add them to the missing file with a placeholder value matching the existing language.

### 2. Type Sync Check

Verify that `src/i18n/types.ts` matches the JSON structure.

- Compare every key path in `it.json` against the `Translation` type.
- If a key exists in JSON but not in the type, add it to the type.
- If a key exists in the type but not in JSON, remove it from the type.
- The type must be an exact mirror of the JSON structure.

### 3. Component Usage Check

Verify that every `t()` call in components references a valid key.

- Search all `.tsx` files for `t.` calls (e.g., `t.home.h1Title`).
- For each call, verify the key path exists in `it.json`.
- Report any broken references.

### 4. Completeness Check

Verify that every user-visible string in components uses `t()` and `.toUpperCase()`.

- Scan all `.tsx` files in `src/app` and `src/components` for hardcoded user-facing strings (text in JSX between tags, excluding class names, URLs, and technical identifiers).
- If a hardcoded string is found that should be translated, report it with the file path and line number.

### 5. Uppercase Convention Check

Verify that all `t()` values rendered in JSX are wrapped with `.toUpperCase()`.

- Search for `t.` calls in JSX that are NOT followed by `.toUpperCase()`.
- Exceptions allowed: `t.notFound.code` (numeric "404"), values used inside `alt` attributes, `aria-label`, `title`, or other attribute values where uppercase may not be appropriate.

## Workflow: When Adding New Text

When adding new user-visible text to any component:

1. Add the new key to `src/i18n/types.ts` under the appropriate namespace.
2. Add the Italian translation to `src/i18n/it.json`.
3. Add the English translation to `src/i18n/en.json`.
4. Use `t().toUpperCase()` in the component.
5. Run the full sync check.

## Workflow: Before Pushing

Before pushing, additionally verify:

### Context and Skills Freshness

- Read `src/config/site.ts` and check if navigation items, technologies, or site metadata have changed.
- If `siteConfig.navigation` keys have changed, verify they match `t.navigation` keys in the JSON files.
- If new routes or pages have been added, verify that corresponding translation keys exist.
- Read the project-context skill at `.opencode/skills/project-context/SKILL.md` and verify it still accurately describes the project structure, stack, and conventions.

### Build Verification

After all checks pass, run:

```
pnpm format && pnpm typecheck && pnpm lint && pnpm build
```

All must pass before pushing.

## Conflict Resolution

If `it.json` and `en.json` diverge:

- The Italian file is the source of structure (key hierarchy).
- The English file must match the Italian file's structure exactly.
- If a new section is added in Italian, create the corresponding English section with appropriate translations.
- Never leave a key with an empty string value in either file.

## Reporting

After running checks, report:

- Number of keys in each locale.
- Any missing keys (per locale).
- Any broken `t()` references in components.
- Any hardcoded strings not yet using `t()`.
- Any `t()` calls missing `.toUpperCase()`.
- Pass/fail status for each check.
