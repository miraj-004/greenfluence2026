import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function FAQAccordion() {
  const { t } = useLang();
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return FAQS;
    return FAQS.filter((f) => [f.q.en, f.q.bn, f.a.en, f.a.bn, f.topic.en, f.topic.bn].some((x) => x.toLowerCase().includes(s)));
  }, [q]);
  return (
    <div>
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">{t({ en: "Search questions", bn: "প্রশ্ন খুঁজুন" })}</label>
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <input id="faq-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t({ en: "Search: team size, brand, activation…", bn: "খুঁজুন: টিম, ব্র্যান্ড, অ্যাক্টিভেশন…" })}
          className="min-h-12 w-full rounded-lg border border-input bg-card pl-12 pr-12 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring" />
        {q && (
          <button type="button" onClick={() => setQ("")} aria-label={t({ en: "Clear search", bn: "খোঁজা মুছুন" })} className="absolute right-1 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-md hover:bg-secondary">
            <X className="size-5" aria-hidden />
          </button>
        )}
      </div>
      <p className="sr-only" aria-live="polite">{t({ en: `${list.length} questions shown`, bn: `${list.length}টি প্রশ্ন দেখানো হচ্ছে` })}</p>
      {list.length === 0 ? (
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <p className="font-semibold">{t({ en: "No questions match your search.", bn: "আপনার খোঁজার সাথে কোনো প্রশ্ন মেলেনি।" })}</p>
          <p className="mt-1 text-muted-foreground">{t({ en: "Try another word, or explore these topics:", bn: "অন্য শব্দ দিয়ে চেষ্টা করুন, অথবা এই বিষয়গুলো দেখুন:" })}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => setQ("")} className="min-h-11 rounded-lg border border-input px-4 font-medium hover:bg-secondary">{t({ en: "Show all questions", bn: "সব প্রশ্ন দেখুন" })}</button>
            <Link to="/competition" hash="eligibility" className="inline-flex min-h-11 items-center rounded-lg border border-input px-4 font-medium hover:bg-secondary">{t({ en: "Eligibility", bn: "যোগ্যতা" })}</Link>
            <Link to="/roadmap" className="inline-flex min-h-11 items-center rounded-lg border border-input px-4 font-medium hover:bg-secondary">{t({ en: "Roadmap", bn: "রোডম্যাপ" })}</Link>
            <Link to="/join" className="inline-flex min-h-11 items-center rounded-lg border border-input px-4 font-medium hover:bg-secondary">{t({ en: "Registration", bn: "রেজিস্ট্রেশন" })}</Link>
          </div>
        </div>
      ) : (
        <Accordion type="multiple" className="mt-6 rounded-xl border border-border bg-card px-5">
          {list.map((f) => (
            <AccordionItem key={f.id} value={f.id}>
              <AccordionTrigger className="min-h-14 text-left text-base font-semibold">{t(f.q)}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                <p>{t(f.a)}</p>
                {f.link && <Link to={f.link.to} {...(f.link.hash ? { hash: f.link.hash } : {})} className="mt-2 inline-block font-semibold text-primary hover:underline">{t({ en: "Learn more", bn: "আরও জানুন" })}</Link>}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
