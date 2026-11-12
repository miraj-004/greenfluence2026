# GreenFluence 2026 — Public Website

Build the public event website exactly as described in the GreenFluence 2026 Lovable prompt. No logins, portals or database: all registration goes to the three Google Forms.

## Pages
- `/` Home: split hero (copy + working Competition Explorer with Roadmap / Find your category tabs), organizer attribution row, "What you'll build", Prize preview, three join tiles, closing call to action.
- `/competition` The Challenge: eligibility table, Check My Team tool, 7-step campaign brief, 7 SDG rows, Campaign Lab (LoopBack / ReCircuit / PortionWise), Concept Note checklist, Reel and Finale info, judging with score breakdown.
- `/roadmap` Nine-stage interactive roadmap in three chapters, detail pane, Previous/Next, shareable `?stage=` links, phone accordion.
- `/prizes` Award table per category (Champion, 1st/2nd Runner-up), certificates, Grand Finale card, status line.
- `/event-info` Organizers (equal weight, with logos), who takes part, planned roles, official updates empty state.
- `/join` Three registration tiles linking to Google Forms in a new tab.
- `/faq` Searchable FAQ with clear-search and no-match state.
- Friendly not-found page.

## Shared
- Header with wordmark, nav, English / বাংলা switch, Register Your Team; accessible mobile menu; sticky phone register button; footer with full organizer names.
- English and Bangla for all main copy; language and checklist ticks remembered on the device only.
- No dates, fees, prize amounts, contacts or guest names shown.

## Visuals and assets
- Flat off-white / dark green palette from the brief, Geist + Noto Sans Bengali, 12-column grid, no gradients, no AI images.
- Use your supplied logos only: Earth's Ants logos and DIU logo (from the zip) in organizer rows/footer; favicon from the Earth's Ants mark (or a GreenFluence mark if you prefer). The video and photo are treated as design reference only, not embedded.
- The concept note and blueprint documents are not published.

## Technical details
- TanStack routes per page, each with its own title/description metadata.
- Typed local data files for categories, stages, awards, SDGs, FAQs, form links and locale copy; reusable components CompetitionExplorer, EligibilityChecker, RoadmapExplorer, CampaignLab, PreparationChecklist, AwardTable, JoinTile, FAQAccordion.
- Logos uploaded as CDN assets; tests for team-eligibility rules (2–3 members, same category, leader required) and roadmap deep-link fallback.
- Final pass: screenshot checks at phone, tablet and desktop sizes, in both languages.
