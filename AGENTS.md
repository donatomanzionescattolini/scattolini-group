# AGENTS.md — Scattolini Group

Miami real estate agency website. React 19 + TypeScript + Vite SPA, bilingual (ES/EN), with Firebase Auth/Firestore and AWS S3 media hosting.

## Dev Workflow

```bash
npm install --legacy-peer-deps   # required — peer-dep conflicts exist
npm run dev                      # http://localhost:5173
npm run build                    # production build
npm run lint                     # ESLint (max-warnings 0 — must be clean)
```

Firebase env variables are **optional for browsing** (a placeholder config is used automatically). Full editor functionality requires a `.env` with `VITE_FIREBASE_*` keys (see README).

## Architecture: Two-Tier Content

Content exists in two layers that merge at runtime:

1. **Static (TypeScript objects)** — `src/objects/desarrollos/` and `src/objects/areas/`. Each file exports a `Desarrollo` or `Area` instance. All static developments are registered in `src/objects/desarrollos/Desarrollos.ts` via `desarrolloMap.push(...)`.

2. **Dynamic (Firestore)** — fetched once in `App.tsx` `useEffect`, merged via `replaceDynamicAreas()` / `replaceDynamicDesarrollos()`. Dynamic content overwrites static entries with the same `nombre`/`name`. Components subscribe to DOM custom events `dynamic-areas-updated` and `dynamic-desarrollos-updated` to re-render on updates.

Adding a new static development:
- Create `src/objects/desarrollos/{Area}/{Name}.tsx` exporting a `Desarrollo` instance
- Register it in `desarrolloMap.push(...)` in `Desarrollos.ts`
- Add a route in `src/routes/DesarrollosRoutes.tsx`
- Add translations under `desarrollos.{key}` in `src/i18n.tsx` for both `es` and `en`

## i18n System (custom — not a library)

Translations live entirely in `src/i18n.tsx` as a nested `translations` object for `es`/`en`. Use the hook:

```tsx
const { t, lang } = useTranslation(); // must be inside TranslationProvider
t("pages.contacto.title")             // returns string | string[] | null
```

- Path lookup is flexible: `t("contacto.title")` and `t("pages.contacto.title")` both resolve.
- Falls back to the other language if a key is missing in the current one.
- New browser sessions always start in **Spanish** (see `TranslationProvider` in `i18n.tsx`).
- `getTranslation(path, lang)` is the non-hook version for use outside React.
- Fields on `Desarrollo` objects that vary by language should use `getLocalizedContent(lang)`.

## Data Model Conventions

`Desarrollo` (`src/models/desarrollos/Desarrollo.tsx`) uses `[key: string]: any` — fields are not strictly typed. Before saving to Firestore, always call `sanitizeForFirestore(data)` (in `src/services/database.ts`) to strip React elements, functions, and `undefined` values. Never write JSX directly into Firestore fields.

`Area` (`src/models/areas/Area.tsx`) follows the same pattern.

## Media Storage (AWS S3)

Bucket: `pagina-mama`. Path conventions:
- Development banner: `assets2/desarrollos/{projectName}/banner.jpg`
- Gallery images: `assets2/desarrollos/{projectName}/image-gallery/image (N).jpg`
- PDFs: `assets2/desarrollos/{projectName}/pdfs/{brochure|hoja|planos}.pdf`
- Area thumbnail: `assets2/areas/{areaName}/{projectName}.webp`

Use `src/services/s3.ts` helpers (`uploadFileToS3`, `listDesarrolloMedia`, `uploadGalleryImage`). Requires `VITE_AWS_*` env vars.

## Routing Patterns

- `AreasRoutes()` and `DesarrollosRoutes()` are **called as functions** (not rendered as components) inside `App.tsx`'s `<Routes>`.
- Static area routes are explicit in `src/routes/AreasRoutes.tsx`; unknown area slugs fall to `<DynamicAreaRoute>` at `/areas/:slug` which fetches Firestore on demand.
- Protected editor: `/editor` → wrapped in `<ProtectedRoute>` → requires Firebase Auth login at `/login`.

## Key Files

| File | Purpose |
|------|---------|
| `src/objects/desarrollos/Desarrollos.ts` | Master registry of all static developments |
| `src/objects/areas/Areas.tsx` | Merges static + dynamic areas; `findAreaBySlug()` |
| `src/i18n.tsx` | All translations + `useTranslation` hook |
| `src/services/database.ts` | Firestore CRUD + `sanitizeForFirestore` |
| `src/services/s3.ts` | S3 media upload/list/delete |
| `src/config/firebase.ts` | Firebase init with placeholder fallback |
| `src/routes/AreasRoutes.tsx` | All `/areas/*` routes |
| `src/routes/DesarrollosRoutes.tsx` | All `/desarrollos/*` routes |

