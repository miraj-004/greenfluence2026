# GreenFluence 2026 — "Living Digital Ecosystem" redesign

Upgrade the existing site in place. All pages, content, form links, organizer logos, the Competition Explorer, Check My Team, Roadmap deep links, FAQ search and English/Bangla stay working.

## Visual identity (replaces the current palette and fonts)
- Colours: sage #8AA87B, deep brown #4E3B31, warm ivory #F5F1E7, environmental green #00843D, plus a few natural greens and one restrained ocean blue.
- Fonts: Manrope for headings, Inter for body, Noto Sans Bengali kept for Bangla.
- Premium cards, soft borders, gentle elevation. No glassmorphism, no big gradients.

## Original illustrations (hand-built vector art, no AI images, no video)
- Layered landscape: far hills, near hills, grass, drifting clouds, sea strip with waves.
- Small birds with wing flaps on set flight paths; occasional butterfly, bee and ladybug at fixed spots.
- Leaves swaying at section edges; a plant that grows as you scroll through the roadmap.
- Illustrated Earth that slowly turns; hovering marks shows small environmental details.
- One botanical drawing per category: sprout (Seedlings), young tree (Saplings), forest (Forests).

## Home page sections
1. Sticky nav that tightens and gains a border on scroll, animated active-link underline.
2. Hero: landscape with mouse parallax. Headline "Where Sustainable Ideas Meet Powerful Brands.", your supporting text, "Join the Competition" (team form) and "Explore the Challenge", plus 64 Districts | 3 Categories | 2–3 Students per Team. The Competition Explorer moves to its own section just below.
3. Introduction: editorial text with reveal on scroll.
4. The Challenge: three interactive cards (Real Brand, Hypothetical Brand, Proof-of-Impact Activation).
5. Categories: three cards with their botanical drawings and hover growth.
6. Roadmap: nine stages along a growing vine; milestones light up as you scroll, each links to its `/roadmap?stage=` page.
7. Prizes & Recognition: award cards with animated counters (counting only real numbers: 3 categories, 3 ranks each, 9 awards; no amounts).
8. Organizers: both logos, equal weight, gentle reveal.
9. Participation: Team Registration, Club Partner, Campus Ambassador tiles with prominent buttons to the existing forms.
10. FAQ preview with smooth accordion, link to full FAQ.
11. Illustrated landscape footer with wildlife details, logos and navigation.

Other pages get the new look (headers, cards, roadmap, accordion) without content changes.

## Smartphone cursor
- Small sage-outlined phone that follows the mouse, grows slightly over buttons and cards, shows an arrow on its screen over registration buttons.
- Only on mouse/trackpad devices; normal text and input cursors kept; never blocks clicks; turns off if anything fails or with reduced motion.

## Motion, performance, accessibility
- Reveal-on-scroll, counters and growth via lightweight browser features; GSAP ScrollTrigger only for the roadmap vine and parallax. No scroll-jacking.
- Animations pause off-screen, respect reduced-motion, and a visible "Pause animations" toggle (remembered on the device).
- Only transform/opacity animation, fixed-size illustration boxes (no layout jumps), decorative art hidden from screen readers.

## Things I'll leave out (per your earlier rules)
- Social links in the footer: none have been provided and contacts are excluded from the public site. I'll add them once you send the official accounts.
- No new dates, prizes, sponsors or partners.

## Technical details
- Tokens and fonts updated in `src/styles.css` and root head links; memory palette/font rule updated to the new identity.
- New `src/components/nature/` (Landscape, Birds, Wildlife, Leaves, Waves, GrowingPlant, Earth, CategoryArt) and `src/components/site/PhoneCursor.tsx`, `MotionProvider` (pause + reduced-motion), `Reveal`, `Counter`.
- Add `gsap`; load it client-side only. Hero copy added to `src/data/` bilingual files.
- Existing tests kept passing; screenshot checks at phone, tablet, desktop in both languages, plus reduced-motion and keyboard pass.
