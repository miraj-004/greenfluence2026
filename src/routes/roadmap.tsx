import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { RegisterLink } from "@/components/site/RegisterLink";
import { RoadmapExplorer } from "@/components/site/RoadmapExplorer";
import { STAGES } from "@/data/content";
import { resolveStageIndex } from "@/lib/competition";
import { useLang } from "@/lib/i18n";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/roadmap")({
  validateSearch: (s: Record<string, unknown>): { stage?: string } => (typeof s["stage"] === "string" ? { stage: s["stage"] } : {}),
  head: () => ({
    meta: [
      { title: "Roadmap — GreenFluence 2026" },
      { name: "description", content: "Your road to the National Grand Finale: nine stages from Concept Note to Campaign Reel to the final pitch." },
      { property: "og:title", content: "Roadmap — GreenFluence 2026" },
      { property: "og:description", content: "Explore all nine stages of GreenFluence 2026, from Concept Note Submission to the National Grand Finale." },
      { property: "og:url", content: canonicalUrl("/roadmap") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/roadmap") }],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  const { t } = useLang();
  const { stage } = Route.useSearch();
  const navigate = useNavigate({ from: "/roadmap" });
  const index = resolveStageIndex(stage);
  return (
    <>
      <PageHeader
        eyebrow={t({ en: "Roadmap", bn: "রোডম্যাপ" })}
        title={t({ en: "Your Road to the National Grand Finale", bn: "জাতীয় গ্র্যান্ড ফিনালের পথে আপনার যাত্রা" })}
        intro={t({ en: "Nine stages in three chapters. Select a stage to see who takes part, what happens, and your next move.", bn: "তিন অধ্যায়ে নয়টি ধাপ। কারা অংশ নেবে, কী হবে এবং আপনার পরবর্তী পদক্ষেপ জানতে একটি ধাপ নির্বাচন করুন।" })}
        action={<RegisterLink />}
      />
      <Section>
        <RoadmapExplorer index={index} onSelect={(i) => navigate({ search: { stage: STAGES[i]!.slug }, replace: true, resetScroll: false })} />
        <p className="mt-6 text-sm text-muted-foreground">{t({ en: "Stage status and announcements are published only through official organizer channels.", bn: "ধাপের অবস্থা ও ঘোষণা কেবল আয়োজকদের অফিশিয়াল চ্যানেলে প্রকাশ করা হয়।" })}</p>
      </Section>
    </>
  );
}
