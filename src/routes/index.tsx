import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, Building2, Lightbulb, Target } from "lucide-react";
import gfLogo from "@/assets/greenfluence-logo.png.asset.json";
import { CompetitionExplorer } from "@/components/site/CompetitionExplorer";
import { JoinTiles } from "@/components/site/JoinTile";
import { Section } from "@/components/site/PageHeader";
import { RegisterLink, btnSecondary } from "@/components/site/RegisterLink";
import { OrganizerRow } from "@/components/site/SiteFooter";
import { RANKS } from "@/data/content";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GreenFluence 2026 — Build a brand for a problem worth solving" },
      { name: "description", content: "A nationwide sustainable brand storytelling and digital campaign competition for students from all 64 districts of Bangladesh." },
      { property: "og:title", content: "GreenFluence 2026 — Build a brand for a problem worth solving" },
      { property: "og:description", content: "Student teams research a real brand’s sustainability problem, invent a hypothetical brand, and design a campaign with measurable impact." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLang();
  const build = [
    { icon: Building2, title: { en: "A real brand", bn: "একটি বাস্তব ব্র্যান্ড" }, body: { en: "Pick a brand operating in Bangladesh and research one genuine sustainability problem connected to it.", bn: "বাংলাদেশে কার্যক্রম পরিচালনাকারী একটি ব্র্যান্ড বেছে নিয়ে এর সাথে যুক্ত একটি প্রকৃত টেকসই সমস্যা নিয়ে গবেষণা করুন।" } },
    { icon: Lightbulb, title: { en: "A hypothetical brand", bn: "একটি কাল্পনিক ব্র্যান্ড" }, body: { en: "Invent a new brand with a clear purpose to carry out your practical solution.", bn: "আপনার বাস্তবসম্মত সমাধান বাস্তবায়নে সুস্পষ্ট উদ্দেশ্যসহ একটি নতুন ব্র্যান্ড তৈরি করুন।" } },
    { icon: Target, title: { en: "A Proof-of-Impact Activation", bn: "একটি প্রুফ-অব-ইমপ্যাক্ট অ্যাক্টিভেশন" }, body: { en: "Plan an action people can join, and show how you would measure what changes.", bn: "মানুষ অংশ নিতে পারে এমন একটি কাজের পরিকল্পনা করুন এবং পরিবর্তন কীভাবে মাপবেন তা দেখান।" } },
  ];
  return (
    <>
      <section className="border-b border-border">
        <div className="container-site grid gap-10 py-10 md:py-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <img src={gfLogo.url} alt="GreenFluence 2026 logo" width={200} height={110} className="mb-6 h-20 w-auto sm:h-24" />
            <h1 className="h-display">{t({ en: "Build a brand for a problem worth solving.", bn: "টেকসই সমস্যার সমাধানে গড়ে তুলুন নতুন এক ব্র্যান্ড।" })}</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {t({ en: "A nationwide sustainable brand storytelling and digital campaign competition for students in Bangladesh. Start with a real brand, design a solution to a sustainability challenge, and show how your campaign could change what people do.", bn: "বাংলাদেশের শিক্ষার্থীদের জন্য টেকসই ব্র্যান্ড স্টোরিটেলিং ও ডিজিটাল ক্যাম্পেইনের একটি জাতীয় প্রতিযোগিতা। একটি বাস্তব ব্র্যান্ড দিয়ে শুরু করুন, টেকসই চ্যালেঞ্জের সমাধান নকশা করুন, এবং দেখান আপনার ক্যাম্পেইন কীভাবে মানুষের আচরণ বদলাতে পারে।" })}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <RegisterLink />
              <Link to="/roadmap" className={btnSecondary}>{t(UI.exploreRoadmap)}</Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t({ en: "Open to students from all 64 districts · 3 competition categories · 2–3 students per team", bn: "৬৪ জেলার শিক্ষার্থীদের জন্য উন্মুক্ত · ৩টি ক্যাটাগরি · প্রতি টিমে ২–৩ জন" })}
            </p>
          </div>
          <div className="lg:col-span-7">
            <CompetitionExplorer />
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card">
        <div className="container-site py-6">
          <p className="mb-3 text-sm font-semibold">{t(UI.organizedBy)}</p>
          <OrganizerRow compact />
        </div>
      </div>

      <Section id="build" title={t({ en: "What you’ll build", bn: "আপনি যা তৈরি করবেন" })}>
        <ol className="grid gap-4 md:grid-cols-3">
          {build.map((b, i) => (
            <li key={i} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="tabular text-sm font-semibold text-primary">0{i + 1}</span>
                <b.icon className="size-5 text-primary" aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{t(b.title)}</h3>
              <p className="mt-2 text-muted-foreground">{t(b.body)}</p>
            </li>
          ))}
        </ol>
        <Link to="/competition" hash="campaign-lab" className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:underline">
          {t({ en: "See the full challenge and example campaigns", bn: "পুরো চ্যালেঞ্জ ও উদাহরণ ক্যাম্পেইন দেখুন" })} <ArrowRight className="size-[18px]" aria-hidden />
        </Link>
      </Section>

      <Section id="prizes-preview" title={t({ en: "Prize Pool & Recognition", bn: "প্রাইজ পুল ও স্বীকৃতি" })} className="border-y border-border bg-card py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-12">
          <ul className="grid gap-3 md:col-span-7">
            {RANKS.map((r) => (
              <li key={r.id} className={`flex min-h-14 items-center gap-3 rounded-lg border px-5 ${r.champion ? "border-gold bg-gold-soft" : "border-border"}`}>
                <Award className={`size-5 ${r.champion ? "text-gold-foreground" : "text-muted-foreground"}`} aria-hidden />
                <span className="text-lg font-semibold">{t(r.name)}</span>
                <span className="ml-auto text-sm text-muted-foreground">{t({ en: "in each category", bn: "প্রতিটি ক্যাটাগরিতে" })}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-3 md:col-span-5">
            <p className="flex gap-2"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />{t({ en: "Certificate of Participation for every team that submits a Round 1 Concept Note", bn: "প্রথম রাউন্ডে কনসেপ্ট নোট জমা দেওয়া প্রতিটি টিমের জন্য অংশগ্রহণ সনদ" })}</p>
            <p className="flex gap-2"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />{t({ en: "Certificate of Excellence for finalist teams", bn: "ফাইনালিস্ট টিমের জন্য শ্রেষ্ঠত্বের সনদ" })}</p>
            <Link to="/prizes" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:underline">{t({ en: "View recognition by category", bn: "ক্যাটাগরি অনুযায়ী স্বীকৃতি দেখুন" })} <ArrowRight className="size-[18px]" aria-hidden /></Link>
          </div>
        </div>
      </Section>

      <Section id="join" title={t({ en: "Choose how you’ll join", bn: "কীভাবে যুক্ত হবেন বেছে নিন" })}>
        <JoinTiles />
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
