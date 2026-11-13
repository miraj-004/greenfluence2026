import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Mic } from "lucide-react";
import { AwardTable } from "@/components/site/AwardTable";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { RegisterLink } from "@/components/site/RegisterLink";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: "Prize Pool & Recognition — GreenFluence 2026" },
      { name: "description", content: "Champion, 1st Runner-up and 2nd Runner-up in each category, plus certificates for participants and finalists." },
      { property: "og:title", content: "Prize Pool & Recognition — GreenFluence 2026" },
      { property: "og:description", content: "How GreenFluence 2026 recognizes teams across Seedlings, Saplings and Forests." },
      { property: "og:url", content: canonicalUrl("/prizes") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/prizes") }],
  }),
  component: PrizesPage,
});

function PrizesPage() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t({ en: "Recognition", bn: "স্বীকৃতি" })} title={t({ en: "Prize Pool & Recognition", bn: "প্রাইজ পুল ও স্বীকৃতি" })} intro={t(UI.furtherPrizes)} action={<RegisterLink />} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7"><AwardTable /></div>
          <div className="grid gap-4 lg:col-span-5">
            {[
              { title: { en: "Certificate of Participation", bn: "অংশগ্রহণ সনদ" }, body: { en: "For teams that complete and submit the Round 1 Concept Note.", bn: "প্রথম রাউন্ডে কনসেপ্ট নোট সম্পন্ন করে জমা দেওয়া টিমগুলোর জন্য।" } },
              { title: { en: "Certificate of Excellence", bn: "শ্রেষ্ঠত্বের সনদ" }, body: { en: "For finalist teams.", bn: "ফাইনালিস্ট টিমগুলোর জন্য।" } },
            ].map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <BadgeCheck className="size-5 text-primary" aria-hidden />
                <h2 className="mt-3 text-xl font-semibold">{t(c.title)}</h2>
                <p className="mt-1 text-muted-foreground">{t(c.body)}</p>
              </div>
            ))}
            <div className="rounded-xl border border-primary bg-secondary p-6">
              <Mic className="size-5 text-primary" aria-hidden />
              <h2 className="mt-3 text-xl font-semibold">{t({ en: "National Grand Finale", bn: "জাতীয় গ্র্যান্ড ফিনালে" })}</h2>
              <p className="mt-1">{t({ en: "Finalists present their campaign to judges and defend its evidence, feasibility, and impact. Category award winners are announced here.", bn: "ফাইনালিস্টরা বিচারকদের সামনে ক্যাম্পেইন উপস্থাপন করে এবং এর প্রমাণ, বাস্তবায়নযোগ্যতা ও প্রভাব তুলে ধরে। এখানেই ক্যাটাগরি বিজয়ীদের নাম ঘোষণা করা হয়।" })}</p>
              <Link to="/roadmap" search={{ stage: "grand-finale" }} className="mt-3 inline-block font-semibold text-primary hover:underline">{t({ en: "See the road to the Finale", bn: "ফিনালের পথ দেখুন" })}</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
