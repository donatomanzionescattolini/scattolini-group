# Project cleanup & internationalization changes

This README summarizes the cleanup, optimizations, and internationalization additions I implemented and how to test them locally.

What I changed

- Consolidated duplicate components and styles
  - `src/Home.tsx` is now the single source of truth for the Home component. `src/components/Home.tsx` re-exports it.
  - `src/components/Home.scss` now imports `../Home.scss` to avoid duplicate rules.
- Nav improvements
  - `src/components/Nav.tsx`: improved resize handling (debounced), fixed search handlers to avoid stale state, added language switcher.
  - `src/components/NavComponent.jsx` replaced with a harmless placeholder (deprecated) to avoid duplicate logic.
- Performance
  - Lazy-loaded main route components via `React.lazy` + `Suspense` (`src/App.tsx`) to reduce initial bundle size.
  - `src/index.tsx`: ensure videos are muted for autoplay reliability and set images to `loading="lazy"` by default.
- Internationalization
  - Added `src/i18n.tsx` — a small provider and hook-based translation system (no external dependencies).
  - Translations currently include `es` and `en` for nav, hero, footer, and WhatsApp placeholders.
  - `src/App.tsx` wraps the app in `TranslationProvider`; Nav has a language toggle that persists to `localStorage`.
- SEO and accessibility
  - `index.html`: added `canonical`, `hreflang` for `es` and `en`, and `theme-color`. The `lang` attribute is updated dynamically when users switch language (via `i18n` provider).
  - The i18n provider updates `document.documentElement.lang` on language change.

Files added/modified (high level)

- Added: `src/i18n.tsx`
- Added: `README_CLEANUP.md` (this file)
- Modified: `src/App.tsx`, `src/index.tsx`, `src/Home.tsx`, `src/components/Nav.tsx`, `src/components/Home.tsx`, `src/components/Home.scss`, `index.html`, `src/components/Footer.tsx`, `src/components/NavComponent.jsx` (deprecated placeholder)

How to run locally

1. Install dependencies (if not already):

```powershell
npm install
```

1. Start dev server:

```powershell
npm run dev
```

3. Open `http://localhost:5173` (default Vite port) and verify:
- The nav language toggle switches language between ES/EN and persists across reloads.
- The WhatsApp widget and hero text reflect the selected language.
- Routes lazy-load (network tab shows code-splitting chunks).

Notes & next steps

- I kept the changes conservative: I did not remove large numbers of files automatically. If you want, I can run a full unused-file scan (imports referencing files) and produce a safe delete plan — I will not remove files without your confirmation.
- I recommend adding small loading skeletons for key pages to further improve perceived performance.
- Consider adding server-side rendering (or prerendering important pages) for the best SEO — especially for property pages.
- Consider a content management approach (headless CMS) to manage properties/desarrollos rather than hard-coded objects; that simplifies editing and SEO.

If you'd like, next I can:
- Produce a proposed delete list of unused files (I will verify imports and usages before proposing removal).
- Add a small i18n helper to translate static content in other components (I already wired the main ones). 
- Add tests or a simple smoke-test script that checks that key routes return 200 when served locally (requires running dev server).

If you want me to continue, tell me which of the next steps you'd like me to perform next (e.g., run unused-file scan and propose deletions, or wire remaining components to i18n).
