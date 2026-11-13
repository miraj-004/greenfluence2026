import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Megaphone } from "lucide-react";
import { BrandImage } from "@/components/site/BrandImage";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { ANNOUNCEMENTS } from "@/data/content";
import { ORG_LINKS } from "@/data/links";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/event-info")({
  head: () => ({
    meta: [
      { title: "Event Info — GreenFluence 2026" },
      { name: "description", content: "Who organizes GreenFluence 2026, who takes part, the planned event roles, and where to find official updates." },
      { property: "og:title", content: "Event Info — GreenFluence 2026" },
      { property: "og:description", content: "Organized by Earth’s Ants and the Department of ESDM, Daffodil International University." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventInfoPage,
});

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-1 font-semibold text-primary hover:underline">
      {children} <ArrowUpRight className="size-[18px]" aria-hidden /><span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function EventInfoPage() {
  const { t } = useLang();
  const roles = [
    [{ en: "Judges", bn: "বিচারক" }, { en: "Evaluate submissions and select finalists and winners.", bn: "সাবমিশন মূল্যায়ন করে ফাইনালিস্ট ও বিজয়ী নির্বাচন করেন।" }],
    [{ en: "Mentors", bn: "মেন্টর" }, { en: "Guide finalist teams during the Mentorship & Bootcamp.", bn: "মেন্টরশিপ ও বুটক্যাম্পে ফাইনালিস্ট টিমদের দিকনির্দেশনা দেন।" }],
    [{ en: "Educators", bn: "শিক্ষক" }, { en: "Share academic perspectives on environment and sustainability.", bn: "পরিবেশ ও টেকসইতা নিয়ে একাডেমিক দৃষ্টিভঙ্গি তুলে ধরেন।" }],
    [{ en: "Sustainability practitioners", bn: "টেকসই উন্নয়ন পেশাজীবী" }, { en: "Bring field experience on what works in practice.", bn: "বাস্তবে কী কাজ করে সে বিষয়ে মাঠ পর্যায়ের অভিজ্ঞতা দেন।" }],
    [{ en: "Brand and communications professionals", bn: "ব্র্যান্ড ও যোগাযোগ পেশাজীবী" }, { en: "Offer insight on storytelling, campaigns, and audiences.", bn: "গল্প বলা, ক্যাম্পেইন ও দর্শক নিয়ে পরামর্শ দেন।" }],
    [{ en: "Invited guests", bn: "আমন্ত্রিত অতিথি" }, { en: "Join the National Grand Finale.", bn: "জাতীয় গ্র্যান্ড ফিনালেতে উপস্থিত থাকেন।" }],
  ] as const;
  return (
    <>
      <PageHeader eyebrow={t({ en: "Event Info", bn: "ইভেন্ট তথ্য" })} title={t(UI.tagline)} intro={t({ en: "Who organizes GreenFluence 2026, who takes part, and who you may meet along the way.", bn: "গ্রিনফ্লুয়েন্স ২০২৬ কারা আয়োজন করছে, কারা অংশ নিচ্ছে এবং পথে কাদের সাথে দেখা হতে পারে।" })} />
      <nav aria-label="On this page" className="border-b border-border bg-card">
        <ul className="container-site flex gap-1 overflow-x-auto py-2">
          {[["organizers", UI.nav.organizers], ["participate", UI.whoTakesPart], ["meet", UI.nav.meet], ["updates", { en: "Official updates", bn: "অফিশিয়াল আপডেট" }]].map(([id, l]) => (
            <li key={id as string}><a href={`#${id}`} className="inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">{t(l as typeof UI.tagline)}</a></li>
          ))}
          <li><Link to="/faq" className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">{t(UI.nav.faq)}</Link></li>
        </ul>
      </nav>

      <Section id="organizers" title={t(UI.nav.organizers)}>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-border bg-card p-6">
            <div className="flex h-20 items-center"><BrandImage src="/earths.jpeg" alt="Earth’s Ants logo" fallback="Earth’s Ants" className="size-16 rounded-full object-cover" fallbackClassName="text-sm" loading="lazy" /></div>
            <h3 className="mt-4 text-xl font-semibold">{t(UI.earthsAnts)}</h3>
            <p className="mt-2 flex-1 text-muted-foreground">{t({ en: "A youth-led environmental organization working on environmental learning, youth leadership, and sustainability.", bn: "পরিবেশ শিক্ষা, তরুণ নেতৃত্ব ও টেকসইতা নিয়ে কাজ করা একটি তরুণ-নেতৃত্বাধীন পরিবেশ সংগঠন।" })}</p>
            <Ext href={ORG_LINKS.earthsAnts}>{t({ en: "Visit Earth’s Ants", bn: "আর্থস অ্যান্টস ওয়েবসাইট" })}</Ext>
          </article>
          <article className="flex flex-col rounded-xl border border-border bg-card p-6">
            <div className="flex h-20 items-center"><BrandImage src="/def.jpeg" alt="Department of ESDM, Daffodil International University badge" fallback="ESDM" className="size-16 rounded-full object-cover" fallbackClassName="px-1 text-xs" loading="lazy" /></div>
            <h3 className="mt-4 text-xl font-semibold">{t(UI.esdm)}</h3>
            <p className="mt-2 flex-1 text-muted-foreground">{t({ en: "The academic department focused on environmental science and disaster management.", bn: "পরিবেশ বিজ্ঞান ও দুর্যোগ ব্যবস্থাপনা বিষয়ক একাডেমিক বিভাগ।" })}</p>
            <Ext href={ORG_LINKS.esdm}>{t({ en: "Visit DIU ESDM", bn: "DIU ESDM বিভাগ" })}</Ext>
          </article>
        </div>
      </Section>

      <Section id="participate" title={t(UI.whoTakesPart)} className="border-y border-border bg-card py-14 md:py-20">
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            [{ en: "Student teams", bn: "শিক্ষার্থী টিম" }, { en: "Teams of 2–3 from Seedlings, Saplings, or Forests, from all 64 districts.", bn: "৬৪ জেলা থেকে সিডলিংস, স্যাপলিংস বা ফরেস্টস ক্যাটাগরির ২–৩ জনের টিম।" }],
            [{ en: "Campus ambassadors", bn: "ক্যাম্পাস অ্যাম্বাসেডর" }, { en: "Students who lead GreenFluence outreach on their campus.", bn: "যারা নিজ ক্যাম্পাসে গ্রিনফ্লুয়েন্সের প্রচারে নেতৃত্ব দেয়।" }],
            [{ en: "Club partners", bn: "ক্লাব পার্টনার" }, { en: "Student clubs that bring GreenFluence to their community.", bn: "যে ছাত্র সংগঠনগুলো নিজেদের কমিউনিটিতে গ্রিনফ্লুয়েন্স নিয়ে আসে।" }],
          ].map(([h, b], i) => (
            <li key={i} className="rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold">{t(h!)}</h3>
              <p className="mt-1 text-muted-foreground">{t(b!)}</p>
              <Link to="/join" className="mt-3 inline-block font-semibold text-primary hover:underline">{t({ en: "Ways to join", bn: "যুক্ত হওয়ার উপায়" })}</Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="meet" title={t(UI.nav.meet)}>
        <p className="eyebrow">{t({ en: "Planned roles", bn: "পরিকল্পিত ভূমিকা" })}</p>
        <dl className="mt-4 grid gap-x-8 md:grid-cols-2">
          {roles.map(([h, b], i) => (
            <div key={i} className="border-t border-border py-4">
              <dt className="font-semibold">{t(h)}</dt>
              <dd className="mt-1 text-muted-foreground">{t(b)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-muted-foreground">{t({ en: "The organizers will announce the lineup through official channels.", bn: "আয়োজকরা অফিশিয়াল চ্যানেলের মাধ্যমে অতিথি তালিকা ঘোষণা করবেন।" })}</p>
      </Section>

      <Section id="updates" title={t({ en: "Official updates", bn: "অফিশিয়াল আপডেট" })} className="border-t border-border bg-card py-14 md:py-20">
        {ANNOUNCEMENTS.length === 0 ? (
          <div className="flex items-start gap-4 rounded-xl border border-dashed border-input p-6">
            <Megaphone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
            <div>
              <p className="font-semibold">{t({ en: "Competition announcements will appear here when published.", bn: "ঘোষণা প্রকাশিত হলে এখানে দেখা যাবে।" })}</p>
              <p className="mt-1 text-muted-foreground">{t({ en: "Meanwhile, follow the organizers’ official channels.", bn: "এর মধ্যে আয়োজকদের অফিশিয়াল চ্যানেল অনুসরণ করুন।" })}</p>
              <div className="flex flex-wrap gap-x-6">
                <Ext href={ORG_LINKS.earthsAnts}>Earth’s Ants</Ext>
                <Ext href={ORG_LINKS.esdm}>DIU ESDM</Ext>
              </div>
            </div>
          </div>
        ) : (
          <ul className="space-y-3">{ANNOUNCEMENTS.map((a, i) => <li key={i} className="rounded-xl border border-border p-5"><h3 className="font-semibold">{t(a.title)}</h3><p className="text-muted-foreground">{t(a.body)}</p></li>)}</ul>
        )}
      </Section>
    </>
  );
}
