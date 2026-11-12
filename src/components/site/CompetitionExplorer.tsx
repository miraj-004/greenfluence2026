import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORIES, EXPLORER_LABELS, EXPLORER_STAGES, STAGES, TEAM_RULES, type CategoryId } from "@/data/content";
import { UI, toBn } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const tabsList = "grid h-auto w-full grid-cols-2 rounded-lg bg-secondary p-1";
export const tabTrigger = "min-h-10 rounded-md text-sm font-semibold text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-none whitespace-normal";
export const optionBtn = (selected: boolean) =>
  cn(
    "flex min-h-12 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-ui",
    selected ? "border-primary bg-secondary text-foreground" : "border-border bg-card hover:border-input",
  );

export function CompetitionExplorer() {
  const { t, lang } = useLang();
  const [stage, setStage] = useState(EXPLORER_STAGES[0]!.slug);
  const [cat, setCat] = useState<CategoryId>("seedlings");
  const s = STAGES.find((x) => x.slug === stage)!;
  const n = STAGES.indexOf(s) + 1;
  const ex = EXPLORER_STAGES.find((x) => x.slug === stage)!;
  const c = CATEGORIES.find((x) => x.id === cat)!;
  const num = (v: number) => (lang === "bn" ? toBn(v) : String(v));

  return (
    <section aria-label="Competition Explorer" className="rounded-xl border border-border bg-card p-4 sm:p-6">
      <Tabs defaultValue="roadmap">
        <TabsList className={tabsList}>
          <TabsTrigger value="roadmap" className={tabTrigger}>{t(UI.nav.roadmap)}</TabsTrigger>
          <TabsTrigger value="category" className={tabTrigger}>{t({ en: "Find your category", bn: "আপনার ক্যাটাগরি খুঁজুন" })}</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap" className="mt-5">
          <div className="grid gap-5 sm:grid-cols-5">
            <div className="flex flex-col gap-2 sm:col-span-2" role="radiogroup" aria-label={t(UI.nav.roadmap)}>
              {EXPLORER_STAGES.map((e) => {
                const idx = STAGES.findIndex((x) => x.slug === e.slug) + 1;
                return (
                  <button key={e.slug} type="button" role="radio" aria-checked={stage === e.slug} onClick={() => setStage(e.slug)} className={optionBtn(stage === e.slug)}>
                    <span className="tabular w-6 text-sm font-semibold text-primary">{num(idx).padStart(2, lang === "bn" ? "০" : "0")}</span>
                    <span className="font-medium">{t(EXPLORER_LABELS[e.slug]!)}</span>
                  </button>
                );
              })}
            </div>
            <div className="sm:col-span-3 rounded-lg border border-border p-5" aria-live="polite">
              <p className="tabular text-sm text-muted-foreground">{t(UI.stageOf(n, STAGES.length))}</p>
              <h3 className="mt-1 text-xl font-semibold">{t(s.title)}</h3>
              <dl className="mt-4 space-y-3 text-[0.9375rem]">
                {s.who && <div><dt className="font-semibold">{t(UI.whoTakesPart)}</dt><dd className="text-muted-foreground">{t(s.who)}</dd></div>}
                <div><dt className="font-semibold">{t(UI.deliverable)}</dt><dd className="text-muted-foreground">{t(ex.deliverable)}</dd></div>
              </dl>
              <Link to="/roadmap" search={{ stage: s.slug }} className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:underline">
                {t({ en: "Open this stage on the roadmap", bn: "রোডম্যাপে এই ধাপটি দেখুন" })} <ArrowRight className="size-[18px]" aria-hidden />
              </Link>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="category" className="mt-5">
          <div className="grid gap-5 sm:grid-cols-5">
            <div className="flex flex-col gap-2 sm:col-span-2" role="radiogroup" aria-label={t({ en: "Category", bn: "ক্যাটাগরি" })}>
              {CATEGORIES.map((k) => (
                <button key={k.id} type="button" role="radio" aria-checked={cat === k.id} onClick={() => setCat(k.id)} className={optionBtn(cat === k.id)}>
                  <span className="flex flex-col">
                    <span className="font-medium">{t(k.name)}</span>
                    <span className="text-sm text-muted-foreground">{t(k.level)}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="sm:col-span-3 rounded-lg border border-border p-5" aria-live="polite">
              <h3 className="text-xl font-semibold">{t(c.name)} · {t(c.level)}</h3>
              <p className="mt-2 text-[0.9375rem] text-muted-foreground">{t(c.eligibility)}</p>
              <ul className="mt-4 space-y-1.5 text-[0.9375rem]">
                {TEAM_RULES.slice(0, 2).map((r, i) => (
                  <li key={i} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />{t(r)}</li>
                ))}
              </ul>
              <Link to="/competition" search={{ category: c.id }} hash="eligibility" className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:underline">
                {t({ en: "Check My Team", bn: "আমার টিম যাচাই করুন" })} <ArrowRight className="size-[18px]" aria-hidden />
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
