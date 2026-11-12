import { createFileRoute } from "@tanstack/react-router";
import { JoinTiles } from "@/components/site/JoinTile";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Get Involved — GreenFluence 2026" },
      { name: "description", content: "Register your team, apply as a Club Partner, or become a Campus Ambassador for GreenFluence 2026." },
      { property: "og:title", content: "Get Involved — GreenFluence 2026" },
      { property: "og:description", content: "Three ways to join GreenFluence 2026: team registration, club partners, and campus ambassadors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t({ en: "Get Involved", bn: "যুক্ত হোন" })} title={t({ en: "Choose how you’ll join", bn: "কীভাবে যুক্ত হবেন বেছে নিন" })} intro={t({ en: "Registration and applications happen on the organizers’ official Google Forms.", bn: "রেজিস্ট্রেশন ও আবেদন আয়োজকদের অফিশিয়াল গুগল ফর্মে সম্পন্ন হয়।" })} />
      <Section><JoinTiles /></Section>
    </>
  );
}
