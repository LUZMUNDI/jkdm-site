# jkdm-site

Astro rebuild of jeet-kune-do-muenchen.de, built from the "JKDM Design System" package
(tokens, components, copy) and the Astro + Decap CMS + Cloudflare Pages architecture
locked in `JKDM_Relaunch_Site_Plan.md`.

## What's here

- `src/components/ds/` — the 19 design-system components, copied over unmodified from
  the JKDM Design System package (Button, NavBar, FeaturedFighter, SelectTile, etc.).
- `src/components/site/` — site-specific wiring: `Shared.jsx` (Section, PageHeader,
  CtaBand, SiteFooter), `SiteHeader.jsx` (nav wired to real routes), and `pages/*.jsx`
  (the actual content for each of the 6 pages, built from `guidelines/copy-de.md`).
- `src/content/instructors/` and `src/content/testimonials/` — CMS-editable roster
  entries feeding Über uns and Stimmen (one JSON file per person).
- `src/content/settings/`, `src/content/homePage/`, `src/content/trainingPage/`,
  `src/content/bookPage/`, `src/content/trialPage/` — **the rest of the site's copy**,
  also CMS-editable: prices, address, footer, CTA band, and every headline/body/button
  on Home, Training, Buch, and Probetraining. Nav labels and layout stay in code — those
  are structural, not content.
- `src/pages/*.astro` — the 6 real routes: `/`, `/ueber-uns`, `/training`, `/stimmen`,
  `/buch`, `/probetraining`.
- `public/admin/` — Decap CMS. Open `/admin` on the deployed site to edit content.
- `public/assets/` — logo, instructor portraits, book cover, student photos.

## Run locally

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built dist/
```

## What's NOT wired up yet (next steps)

1. **Push to GitHub.** `git init`, commit, create a repo, push. Decap CMS and
   Cloudflare Pages both deploy off this repo.
2. **Decap CMS backend.** `public/admin/config.yml` has `repo: OWNER/REPO` as a
   placeholder — replace with the real GitHub repo once it exists. Decap's GitHub
   backend needs a small OAuth app (or use Netlify Identity + git-gateway as an
   alternative) — see https://decapcms.org/docs/github-backend/.
3. **Cloudflare Pages.** Connect the GitHub repo, build command `npm run build`,
   output directory `dist`. Then point the existing `jeet-kune-do-muenchen.de` domain
   at the Pages project.
4. **Probetraining form.** `TrialContent.jsx` currently only confirms locally (no
   network call) — same as the design mockup. Needs a real submission endpoint before
   going live (a Cloudflare Pages Function, or a service like Formspree/Web3Forms).
5. **Content collections still missing:** Blog/Notizen, Fightwear Shop, and
   Gürtelprüfung aren't wired to the CMS yet — see `JKDM_Relaunch_Site_Plan.md`
   section 3a for what those need. Everything else (all page copy, prices, footer,
   instructors, testimonials) is now CMS-editable.
6. **Real photos:** 8 of the 10 Stimmen entries and the "Termine folgen" bits on
   Training are still placeholders (flagged as such in the UI). Swap via Decap CMS
   once real quotes/photos/prices exist.
