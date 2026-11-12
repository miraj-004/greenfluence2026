# GreenFluence 2026 — content fixes and always-on animations

## Roadmap stages
- **Shortlist Announcement**: remove "Who takes part". What happens: "Judges and panelists review the submitted concept notes, select the strongest concepts, and shortlist teams based on their evaluation."
- **Reel Submission**: Who takes part becomes "Shortlisted teams".
- **Evaluation** renamed "Evaluation & Final Team Selection": remove "Who takes part"; text covers judges evaluating reels and selecting the final teams; adds "Responsible panel: Judge Panels".
- Applies on the Roadmap page, the homepage vine and the Competition Explorer (English and Bangla).

## Judging section (Competition page)
- Keep the Concept Note score breakdown as is.
- Add a separate "Reel Submission score breakdown (out of 100)": Judges' evaluation 60, Social-media engagement (Facebook/Instagram post) 30, Content Quality & Creativity 10.

## Homepage and navigation
- "Get Involved" becomes "Join Us" everywhere (menu, Join page title).
- Headline becomes "National Sustainable Brand Storytelling & Campaign Innovation Competition" (page title too).
- "Join the Competition" opens https://www.facebook.com/events/1315991003475935/ in a new tab.
- GreenFluence logo made noticeably larger in the header and on the homepage so it reads from a distance.

## Animations always on
- Remove the Pause animations button and the saved paused setting.
- Animations no longer stop on phones or when the device asks for reduced motion; they run all the time (offscreen pausing removed too, as it causes the stalled look on mobile).

## Globe
- Add more Bangladesh sustainability hotspots (about 10 total), e.g. coastal salinity, Sundarbans mangroves, river erosion, Dhaka air quality, plastic in rivers, textile waste water, arsenic in groundwater, flash floods in Sylhet, Chattogram ship-breaking, sustainable farming.

## Technical details
- Edit `src/data/content.ts` (make `who` optional; add `panel`), `RoadmapExplorer`, `CompetitionExplorer`, `competition.tsx`, `src/data/home.ts`, `src/data/ui.ts`, `join.tsx`, `index.tsx` head, `src/data/links.ts` (add event link), header logo sizing, `Earth.tsx`.
- `src/lib/motion.tsx`: drop toggle/paused/reduced; remove `.motion-paused`, offscreen and reduced-motion animation overrides in `src/styles.css`. Update AGENTS.md motion rule.
- Run existing tests.
