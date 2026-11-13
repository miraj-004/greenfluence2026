import { EVENT_LINK } from "@/data/links";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Award, BadgeCheck, Building2, Lightbulb, Target } from "lucide-react";
import { useRef } from "react";
import { CategoryArt } from "@/components/nature/CategoryArt";
import { Earth } from "@/components/nature/Earth";
import { Landscape } from "@/components/nature/Landscape";
import { FallingLeaves } from "@/components/nature/Wildlife";
import { BrandImage } from "@/components/site/BrandImage";
import { CompetitionExplorer } from "@/components/site/CompetitionExplorer";
import { JoinTiles } from "@/components/site/JoinTile";
import { Section } from "@/components/site/PageHeader";
import { RegisterLink, btnPrimary, btnSecondary } from "@/components/site/RegisterLink";
import { Counter, Reveal } from "@/components/site/Reveal";
import { OrganizerRow } from "@/components/site/SiteFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CATEGORIES, CHAPTERS, FAQS, RANKS, STAGES } from "@/data/content";
import { HOME } from "@/data/home";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { useScrollProgress } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GreenFluence 2026 | Bangladesh Student Sustainability Competition" },
      { name: "description", content: "Discover GreenFluence 2026, Bangladesh’s national sustainable brand storytelling and campaign innovation competition for students from all 64 districts." },
      { property: "og:title", content: "GreenFluence 2026 | Bangladesh Student Sustainability Competition" },
      { property: "og:description", content: "Join GreenFluence 2026: Bangladesh’s national student competition for sustainability, brand storytelling and campaign innovation." },
      { property: "og:url", content: "https://greenfluence2026.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://greenfluence2026.lovable.app/" }],
  }),
  component: Home,
});

const BUILD_ICONS = [Building2, Lightbulb, Target];

function Home() {
  const { t } = useLang();
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GreenFluence 2026",
          alternateName: "GreenFluence",
          url: "https://greenfluence2026.lovable.app/",
          description:
            "Bangladesh’s national sustainable brand storytelling and campaign innovation competition for students.",
          inLanguage: ["en", "bn"],
        })}
      </script>
      {/* Hero */}
      <section className="relative isolate min-h-[640px] overflow-hidden border-b border-border md:min-h-[720px]">
        <Landscape />
        <div className="container-site relative grid py-14 md:py-20">
          <div className="max-w-2xl">
            <BrandImage src="/favicon.png" alt="GreenFluence 2026 logo" fallback="GreenFluence 2026" width={64} height={64} className="mb-2 size-32 sm:size-40 lg:size-48" fallbackClassName="max-w-[200px] text-xl sm:text-2xl" />
            <h1 className="h-display">{t(HOME.headline)}</h1>
            <p className="mt-5 max-w-xl text-lg text-foreground/80">{t(HOME.sub)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={EVENT_LINK} target="_blank" rel="noopener noreferrer" className={btnPrimary}>{t(HOME.ctaJoin)} <ArrowUpRight className="size-[18px]" aria-hidden /><span className="sr-only">{t(UI.newTabSr)}</span></a>
              <Link to="/competition" className={btnSecondary}>{t(HOME.ctaExplore)}</Link>
            </div>
            <dl className="mt-10 inline-grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/90 shadow-sm">
              {HOME.stats.map((s) => (
                <div key={s.v} className="px-4 py-3 sm:px-6">
                  <dt className="sr-only">{t(s.l)}</dt>
                  <dd><span className="block font-display text-2xl font-extrabold text-primary">{t(s.v2)}</span><span className="text-xs font-medium text-muted-foreground sm:text-sm">{t(s.l)}</span></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Intro + Earth */}
      <Section id="intro" className="relative py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow mb-3">{t(HOME.introEyebrow)}</p>
            <h2 className="h-section">{t(HOME.introTitle)}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t(HOME.introBody)}</p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5"><Earth /></Reveal>
        </div>
      </Section>

      {/* Explorer */}
      <Section id="explore" title={t(HOME.explorerTitle)} intro={t(HOME.explorerIntro)} className="border-y border-border bg-card py-16 md:py-20">
        <Reveal className="max-w-4xl"><CompetitionExplorer /></Reveal>
      </Section>

      {/* Challenge */}
      <Section id="build" title={t({ en: "The Challenge: what you’ll build", bn: "চ্যালেঞ্জ: আপনি যা তৈরি করবেন" })} className="relative py-16 md:py-24">
        <FallingLeaves className="right-0 top-0 h-56 w-40" />
        <ol className="grid gap-5 md:grid-cols-3">
          {HOME.build.map((b, i) => {
            const Icon = BUILD_ICONS[i] ?? Target;
            return (
              <Reveal as="li" key={i} delay={i * 120} className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-7">
                <span className="tabular font-display text-6xl font-extrabold text-sage-soft transition-colors duration-500 group-hover:text-sage">0{i + 1}</span>
                <span className="absolute right-6 top-7 inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-500 group-hover:rotate-12"><Icon className="size-5" aria-hidden /></span>
                <h3 className="mt-3 text-xl font-bold">{t(b.title)}</h3>
                <p className="mt-2 text-muted-foreground">{t(b.body)}</p>
              </Reveal>
            );
          })}
        </ol>
        <Link to="/competition" hash="campaign-lab" className="mt-8 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:underline">
          {t({ en: "See the full challenge and example campaigns", bn: "পুরো চ্যালেঞ্জ ও উদাহরণ ক্যাম্পেইন দেখুন" })} <ArrowRight className="size-[18px]" aria-hidden />
        </Link>
      </Section>

      {/* Categories */}
      <Section id="categories" title={t({ en: "Three categories, one ecosystem", bn: "তিনটি ক্যাটাগরি, একটি ইকোসিস্টেম" })} className="border-y border-border bg-secondary/50 py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 120}>
              <Link to="/competition" search={{ category: c.id }} hash="eligibility" className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <CategoryArt id={c.id} />
                <p className="eyebrow mt-4">{t(c.level)}</p>
                <h3 className="mt-1 font-display text-2xl font-extrabold">{t(c.name)}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{t(c.eligibility)}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">{t({ en: "Check your team", bn: "আপনার টিম যাচাই করুন" })} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <RoadmapJourney />

      {/* Prizes */}
      <Section id="prizes-preview" title={t({ en: "Prize Pool & Recognition", bn: "প্রাইজ পুল ও স্বীকৃতি" })} className="border-y border-border bg-card py-16 md:py-24">
        <div className="mb-10 grid max-w-xl grid-cols-3 gap-6">
          <Counter value={3} label={t({ en: "Categories", bn: "ক্যাটাগরি" })} />
          <Counter value={3} label={t({ en: "Awards per category", bn: "প্রতি ক্যাটাগরিতে পুরস্কার" })} />
          <Counter value={9} label={t({ en: "Winning teams", bn: "বিজয়ী টিম" })} />
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          <ul className="grid gap-4 sm:grid-cols-3 md:col-span-8">
            {RANKS.map((r, i) => (
              <Reveal as="li" key={r.id} delay={i * 100} className={`card-lift rounded-2xl border p-6 ${r.champion ? "border-gold bg-gold-soft" : "border-border bg-background"}`}>
                <Award className={`size-8 ${r.champion ? "text-gold-foreground" : "text-sage"}`} aria-hidden />
                <p className="mt-4 font-display text-xl font-extrabold">{t(r.name)}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t({ en: "in each category", bn: "প্রতিটি ক্যাটাগরিতে" })}</p>
              </Reveal>
            ))}
          </ul>
          <div className="space-y-3 md:col-span-4">
            <p className="flex gap-2"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />{t({ en: "Certificate of Participation for every team that submits a Round 1 Concept Note", bn: "প্রথম রাউন্ডে কনসেপ্ট নোট জমা দেওয়া প্রতিটি টিমের জন্য অংশগ্রহণ সনদ" })}</p>
            <p className="flex gap-2"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />{t({ en: "Certificate of Excellence for finalist teams", bn: "ফাইনালিস্ট টিমের জন্য শ্রেষ্ঠত্বের সনদ" })}</p>
            <Link to="/prizes" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:underline">{t({ en: "View recognition by category", bn: "ক্যাটাগরি অনুযায়ী স্বীকৃতি দেখুন" })} <ArrowRight className="size-[18px]" aria-hidden /></Link>
          </div>
        </div>
      </Section>

      {/* Organizers */}
      <Section id="organizers" title={t(UI.organizedBy)} className="py-14 md:py-20">
        <Reveal className="rounded-2xl border border-border bg-card p-6 md:p-8"><OrganizerRow /></Reveal>
      </Section>

      {/* Participation */}
      <Section id="join" title={t({ en: "Choose how you’ll join", bn: "কীভাবে যুক্ত হবেন বেছে নিন" })} className="border-t border-border bg-secondary/50 py-16 md:py-24">
        <Reveal><JoinTiles /></Reveal>
      </Section>

      {/* FAQ preview */}
      <Section id="faq-preview" title={t({ en: "Frequently asked questions", bn: "সচরাচর জিজ্ঞাসা" })} className="py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-12">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-5 md:col-span-8">
            {FAQS.slice(0, 5).map((f) => (
              <AccordionItem key={f.id} value={f.id}>
                <AccordionTrigger className="min-h-14 text-left text-base font-semibold">{t(f.q)}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{t(f.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="md:col-span-4">
            <Link to="/faq" className={btnSecondary}>{t({ en: "All questions", bn: "সব প্রশ্ন" })} <ArrowRight className="size-[18px]" aria-hidden /></Link>
          </div>
        </div>
      </Section>

      <section className="border-t border-border bg-card">
        <div className="container-site flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="h-section max-w-2xl">{t({ en: "Your team could take the stage at the National Grand Finale.", bn: "জাতীয় গ্র্যান্ড ফিনালের মঞ্চে থাকতে পারে আপনার টিম।" })}</h2>
          <RegisterLink />
        </div>
      </section>
    </>
  );
}

function RoadmapJourney() {
  const { t } = useLang();
  const ref = useRef<HTMLOListElement>(null);
  const p = useScrollProgress(ref);
  return (
    <Section id="journey" title={t({ en: "The journey: nine stages", bn: "যাত্রাপথ: নয়টি ধাপ" })} intro={t({ en: "Your idea grows from a concept note to the National Grand Finale.", bn: "কনসেপ্ট নোট থেকে জাতীয় গ্র্যান্ড ফিনাল পর্যন্ত বেড়ে ওঠে আপনার আইডিয়া।" })} className="py-16 md:py-24">
      <ol ref={ref} className="relative grid gap-4 pl-12 md:pl-16">
        {/* growing vine */}
        <div aria-hidden className="absolute bottom-4 left-4 top-4 w-1 rounded-full bg-sage-soft md:left-6">
          <div className="absolute inset-x-0 top-0 origin-top rounded-full bg-primary" style={{ height: "100%", transform: `scaleY(${p})` }} />
        </div>
        {STAGES.map((s, i) => {
          const lit = p >= (i + 0.3) / STAGES.length;
          const chapterStart = i === 0 || STAGES[i - 1]?.chapter !== s.chapter;
          return (
            <li key={s.slug} className="relative">
              {chapterStart && <p className="eyebrow mb-2 mt-4">{t(CHAPTERS[s.chapter] ?? CHAPTERS[0]!)}</p>}
              <span aria-hidden className={`absolute -left-[2.35rem] top-[calc(50%+var(--o,0px))] flex size-6 -translate-y-1/2 items-center justify-center rounded-full border-2 transition-all duration-500 md:-left-[2.85rem] ${lit ? "scale-110 border-primary bg-primary" : "border-sage bg-card"}`} style={{ ["--o" as string]: chapterStart ? "1rem" : "0px" }}>
                <svg viewBox="0 0 12 12" className={`size-3 transition-opacity duration-500 ${lit ? "opacity-100" : "opacity-0"}`}><path d="M2 10 C2 5 5 2 10 2 C10 7 7 10 2 10Z" className="fill-primary-foreground" /></svg>
              </span>
              <Link to="/roadmap" search={{ stage: s.slug }} className={`card-lift flex items-start gap-4 rounded-2xl border bg-card p-5 transition-colors duration-500 ${lit ? "border-primary/40" : "border-border"}`}>
                <span className="tabular font-display text-2xl font-extrabold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className="block text-lg font-bold">{t(s.title)}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{t(s.what)}</span>
                </span>
                <ArrowRight className="ml-auto mt-1 size-5 shrink-0 text-primary" aria-hidden />
              </Link>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
