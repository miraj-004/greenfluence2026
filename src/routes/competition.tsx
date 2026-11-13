import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CampaignLab } from "@/components/site/CampaignLab";
import { EligibilityChecker } from "@/components/site/EligibilityChecker";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { PreparationChecklist } from "@/components/site/PreparationChecklist";
import { RegisterLink } from "@/components/site/RegisterLink";
import { BRIEF_STEPS, CATEGORIES, SCORES, SDGS, TEAM_RULES, type CategoryId } from "@/data/content";
import { ORG_LINKS } from "@/data/links";
import { useLang } from "@/lib/i18n";
import { canonicalUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

const IDS = ["seedlings", "saplings", "forests"];

const REEL_SCORES = [
  { label: { en: "Judges’ evaluation (core criteria)", bn: "বিচারকদের মূল্যায়ন (মূল মানদণ্ড)" }, weight: 60 },
  { label: { en: "Social-media engagement (Facebook/Instagram post)", bn: "সোশ্যাল মিডিয়া এনগেজমেন্ট (ফেসবুক/ইনস্টাগ্রাম পোস্ট)" }, weight: 30 },
  { label: { en: "Content Quality & Creativity", bn: "কনটেন্টের মান ও সৃজনশীলতা" }, weight: 10 },
];

export const Route = createFileRoute("/competition")({
  validateSearch: (s: Record<string, unknown>): { category?: CategoryId } =>
    typeof s["category"] === "string" && IDS.includes(s["category"]) ? { category: s["category"] as CategoryId } : {},
  head: () => ({
    meta: [
      { title: "The Challenge — GreenFluence 2026" },
      { name: "description", content: "Eligibility, team rules, the campaign brief, SDGs, example campaigns, submissions and judging for GreenFluence 2026." },
      { property: "og:title", content: "The Challenge — GreenFluence 2026" },
      { property: "og:description", content: "Check your category, build your team, and learn what judges look for in GreenFluence 2026." },
      { property: "og:url", content: canonicalUrl("/competition") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/competition") }],
  }),
  component: CompetitionPage,
});

function CompetitionPage() {
  const { t } = useLang();
  const { category } = Route.useSearch();
  const jump = [
    ["eligibility", { en: "Eligibility", bn: "যোগ্যতা" }],
    ["brief", { en: "Campaign brief", bn: "ক্যাম্পেইন ব্রিফ" }],
    ["sdgs", { en: "SDGs", bn: "SDG" }],
    ["campaign-lab", { en: "Campaign Lab", bn: "ক্যাম্পেইন ল্যাব" }],
    ["submissions", { en: "Submissions", bn: "সাবমিশন" }],
    ["judging", { en: "Judging", bn: "মূল্যায়ন" }],
  ] as const;
  return (
    <>
      <PageHeader
        eyebrow={t({ en: "The Challenge", bn: "চ্যালেঞ্জ" })}
        title={t({ en: "Work like a creative agency. Prove your impact.", bn: "ক্রিয়েটিভ এজেন্সির মতো কাজ করুন। প্রভাব প্রমাণ করুন।" })}
        intro={t({ en: "Research a real brand’s sustainability problem, design a solution, invent a hypothetical brand to deliver it, and plan a campaign with a measurable Proof-of-Impact Activation.", bn: "একটি বাস্তব ব্র্যান্ডের টেকসই সমস্যা নিয়ে গবেষণা করুন, সমাধান নকশা করুন, তা বাস্তবায়নে একটি কাল্পনিক ব্র্যান্ড তৈরি করুন এবং পরিমাপযোগ্য প্রুফ-অব-ইমপ্যাক্ট অ্যাক্টিভেশনসহ ক্যাম্পেইন পরিকল্পনা করুন।" })}
        action={<RegisterLink />}
      />
      <nav aria-label={t({ en: "On this page", bn: "এই পাতায়" })} className="border-b border-border bg-card">
        <ul className="container-site flex gap-1 overflow-x-auto py-2">
          {jump.map(([id, l]) => (
            <li key={id}><a href={`#${id}`} className="inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">{t(l)}</a></li>
          ))}
        </ul>
      </nav>

      <Section id="eligibility" title={t({ en: "Eligibility", bn: "যোগ্যতা" })}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-left">
                <thead className="border-b border-border text-sm text-muted-foreground">
                  <tr><th scope="col" className="p-4">{t({ en: "Category", bn: "ক্যাটাগরি" })}</th><th scope="col" className="p-4">{t({ en: "Eligibility", bn: "যোগ্যতা" })}</th></tr>
                </thead>
                <tbody>
                  {CATEGORIES.map((c) => (
                    <tr key={c.id} className={cn("border-b border-border last:border-0 transition-ui", category === c.id && "bg-secondary")}>
                      <th scope="row" className="p-4 align-top">
                        <span className="block font-semibold">{t(c.name)}</span>
                        <span className="text-sm font-normal text-muted-foreground">{t(c.level)}</span>
                        {category === c.id && <span className="mt-1 block text-xs font-semibold text-primary">{t({ en: "Selected", bn: "নির্বাচিত" })}</span>}
                      </th>
                      <td className="p-4 align-top text-muted-foreground">{t(c.eligibility)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div id="team-rules" className="mt-6">
              <h3 className="text-xl font-semibold">{t({ en: "Team rules", bn: "টিমের নিয়ম" })}</h3>
              <ul className="mt-3 space-y-2">
                {TEAM_RULES.map((r, i) => (
                  <li key={i} className="flex gap-3"><span className="tabular mt-0.5 text-sm font-semibold text-primary">{i + 1}</span>{t(r)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-6"><EligibilityChecker {...(category ? { initialCategory: category } : {})} /></div>
        </div>
      </Section>

      <Section id="brief" title={t({ en: "Campaign brief", bn: "ক্যাম্পেইন ব্রিফ" })} className="border-y border-border bg-card py-14 md:py-20">
        <ol className="grid gap-x-8 md:grid-cols-2">
          {BRIEF_STEPS.map((s, i) => (
            <li key={i} className="flex gap-4 border-t border-border py-5">
              <span className="tabular text-2xl font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p>{t(s)}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="sdgs" title={t({ en: "Sustainable Development Goals", bn: "টেকসই উন্নয়ন লক্ষ্যমাত্রা" })} intro={t({ en: "Explain your Primary SDG alignment, then choose two Supporting SDGs from these seven and justify both.", bn: "প্রাথমিক SDG সংযোগ ব্যাখ্যা করুন, তারপর এই সাতটি থেকে দুটি সহায়ক SDG বেছে নিয়ে যৌক্তিকতা দিন।" })}>
        <Accordion type="multiple" className="rounded-xl border border-border bg-card px-5">
          {SDGS.map((g) => (
            <AccordionItem key={g.n} value={String(g.n)}>
              <AccordionTrigger className="min-h-14 text-left text-base">
                <span className="flex items-center gap-4"><span className="tabular w-8 text-lg font-semibold text-primary">{g.n}</span><span className="font-semibold">{t(g.name)}</span></span>
              </AccordionTrigger>
              <AccordionContent className="pl-12 text-base text-muted-foreground">{t(g.desc)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <a href={ORG_LINKS.sdgs} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">
          {t({ en: "UN Sustainable Development Goals", bn: "জাতিসংঘের টেকসই উন্নয়ন লক্ষ্যমাত্রা" })} <ArrowUpRight className="size-[18px]" aria-hidden /><span className="sr-only">(opens in a new tab)</span>
        </a>
        <p className="text-sm text-muted-foreground">{t({ en: "SDG references are for context; the United Nations is not an organizer of GreenFluence 2026.", bn: "SDG উল্লেখ কেবল প্রেক্ষাপটের জন্য; জাতিসংঘ গ্রিনফ্লুয়েন্স ২০২৬-এর আয়োজক নয়।" })}</p>
      </Section>

      <Section id="campaign-lab" title={t({ en: "Campaign Lab", bn: "ক্যাম্পেইন ল্যাব" })} intro={t({ en: "Three example scenarios show how an issue becomes a hypothetical brand, an activation, and a measure.", bn: "তিনটি উদাহরণে দেখুন কীভাবে একটি সমস্যা থেকে কাল্পনিক ব্র্যান্ড, অ্যাক্টিভেশন ও পরিমাপ তৈরি হয়।" })} className="border-y border-border bg-card py-14 md:py-20">
        <CampaignLab />
      </Section>

      <Section id="submissions" title={t({ en: "Submissions", bn: "সাবমিশন" })}>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            {[
              { h: { en: "Round 1 · Concept Note", bn: "রাউন্ড ১ · কনসেপ্ট নোট" }, b: { en: "All registered teams submit one PDF of 10–12 A4 pages, excluding the cover and contents.", bn: "সকল নিবন্ধিত টিম কভার ও সূচিপত্র বাদে ১০–১২ পৃষ্ঠার (A4) একটি পিডিএফ জমা দেবে।" } },
              { h: { en: "Round 2 · Campaign Reel", bn: "রাউন্ড ২ · ক্যাম্পেইন রিল" }, b: { en: "Shortlisted teams show the proposed solution, hypothetical brand, campaign, and how the activation works. Include evidence if the activation has been carried out, or a credible plan when it is still proposed. A smartphone can be used. Follow the organizers’ current instructions for Reel media rules.", bn: "শর্টলিস্টেড টিমগুলো প্রস্তাবিত সমাধান, কাল্পনিক ব্র্যান্ড, ক্যাম্পেইন ও অ্যাক্টিভেশন কীভাবে কাজ করে তা দেখাবে। বাস্তবায়িত হলে প্রমাণ, নয়তো বাস্তবসম্মত পরিকল্পনা দিন। স্মার্টফোন ব্যবহার করা যাবে। রিলের নিয়মের জন্য আয়োজকদের সর্বশেষ নির্দেশনা অনুসরণ করুন।" } },
              { h: { en: "National Grand Finale", bn: "জাতীয় গ্র্যান্ড ফিনালে" }, b: { en: "Finalists prepare a presentation and defend the evidence, feasibility, and impact of their proposal.", bn: "ফাইনালিস্টরা উপস্থাপনা প্রস্তুত করে প্রস্তাবের প্রমাণ, বাস্তবায়নযোগ্যতা ও প্রভাব তুলে ধরবে।" } },
            ].map((x, i) => (
              <div key={i} className="border-l-2 border-primary pl-5">
                <h3 className="text-lg font-semibold">{t(x.h)}</h3>
                <p className="mt-1 text-muted-foreground">{t(x.b)}</p>
              </div>
            ))}
            <Link to="/roadmap" className="inline-block font-semibold text-primary hover:underline">{t({ en: "See how the stages fit together", bn: "ধাপগুলো কীভাবে যুক্ত তা দেখুন" })}</Link>
          </div>
          <div id="checklist" className="lg:col-span-7"><PreparationChecklist /></div>
        </div>
      </Section>

      <Section id="judging" title={t({ en: "Judging", bn: "মূল্যায়ন" })} intro={t({ en: "Judges assess research, stakeholder mapping, SDG alignment, solution feasibility, campaign strategy, storytelling, activation, and measurable impact. Entries should be original, evidence-based, and respectful.", bn: "বিচারকরা গবেষণা, অংশীজন চিহ্নিতকরণ, SDG সংযোগ, সমাধানের বাস্তবায়নযোগ্যতা, ক্যাম্পেইন কৌশল, গল্প বলা, অ্যাক্টিভেশন ও পরিমাপযোগ্য প্রভাব মূল্যায়ন করেন। এন্ট্রি মৌলিক, তথ্যনির্ভর ও সম্মানজনক হতে হবে।" })} className="border-t border-border bg-card py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <Accordion type="single" collapsible className="rounded-xl border border-border px-5 lg:col-span-7">
            <AccordionItem value="scores" className="border-0">
              <AccordionTrigger className="min-h-14 text-base font-semibold">{t({ en: "Concept Note score breakdown (out of 100)", bn: "কনসেপ্ট নোটের নম্বর বণ্টন (১০০-এর মধ্যে)" })}</AccordionTrigger>
              <AccordionContent>
                <table className="w-full text-left text-base">
                  <tbody>
                    {SCORES.map((s, i) => (
                      <tr key={i} className="border-t border-border"><th scope="row" className="py-2.5 font-normal">{t(s.label)}</th><td className="tabular py-2.5 text-right font-semibold">{s.weight}</td></tr>
                    ))}
                    <tr className="border-t-2 border-foreground"><th scope="row" className="py-2.5">{t({ en: "Total", bn: "মোট" })}</th><td className="tabular py-2.5 text-right font-semibold">{SCORES.reduce((a, b) => a + b.weight, 0)}</td></tr>
                  </tbody>
                </table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reel-scores" className="border-0 border-t border-border">
              <AccordionTrigger className="min-h-14 text-base font-semibold">{t({ en: "Reel Submission score breakdown (out of 100)", bn: "রিল সাবমিশনের নম্বর বণ্টন (১০০-এর মধ্যে)" })}</AccordionTrigger>
              <AccordionContent>
                <table className="w-full text-left text-base">
                  <tbody>
                    {REEL_SCORES.map((s, i) => (
                      <tr key={i} className="border-t border-border"><th scope="row" className="py-2.5 font-normal">{t(s.label)}</th><td className="tabular py-2.5 text-right font-semibold">{s.weight}</td></tr>
                    ))}
                    <tr className="border-t-2 border-foreground"><th scope="row" className="py-2.5">{t({ en: "Total", bn: "মোট" })}</th><td className="tabular py-2.5 text-right font-semibold">{REEL_SCORES.reduce((a, b) => a + b.weight, 0)}</td></tr>
                  </tbody>
                </table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="space-y-4 lg:col-span-5">
            <p><strong>{t({ en: "Campaign Reel:", bn: "ক্যাম্পেইন রিল:" })}</strong> <span className="text-muted-foreground">{t({ en: "clarity of the story, strength of the campaign, and how convincingly the activation works.", bn: "গল্পের স্পষ্টতা, ক্যাম্পেইনের শক্তি এবং অ্যাক্টিভেশন কতটা বিশ্বাসযোগ্যভাবে কাজ করে।" })}</span></p>
            <p><strong>{t({ en: "Grand Finale:", bn: "গ্র্যান্ড ফিনালে:" })}</strong> <span className="text-muted-foreground">{t({ en: "how well the team defends its evidence, feasibility, and impact.", bn: "টিম কতটা ভালোভাবে তাদের প্রমাণ, বাস্তবায়নযোগ্যতা ও প্রভাব তুলে ধরে।" })}</span></p>
          </div>
        </div>
      </Section>
    </>
  );
}
