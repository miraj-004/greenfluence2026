import { createFileRoute } from "@tanstack/react-router";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { useLang } from "@/lib/i18n";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — GreenFluence 2026" },
      { name: "description", content: "Answers about categories, team size, registration, real and hypothetical brands, activations, and awards." },
      { property: "og:title", content: "FAQ — GreenFluence 2026" },
      { property: "og:description", content: "Searchable answers for GreenFluence 2026 participants." },
      { property: "og:url", content: canonicalUrl("/faq") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/faq") }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t({ en: "FAQ", bn: "প্রশ্নোত্তর" })} title={t({ en: "Questions, answered", bn: "আপনার প্রশ্নের উত্তর" })} />
      <Section><div className="max-w-3xl"><FAQAccordion /></div></Section>
    </>
  );
}
