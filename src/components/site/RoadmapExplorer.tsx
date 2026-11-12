import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type KeyboardEvent } from "react";
import { CHAPTERS, STAGES } from "@/data/content";
import { UI, toBn } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function RoadmapExplorer({ index, onSelect }: { index: number; onSelect: (i: number) => void }) {
  const { t, lang } = useLang();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const num = (n: number) => (lang === "bn" ? toBn(n) : String(n));
  const s = STAGES[index]!;

  const onKey = (e: KeyboardEvent, i: number) => {
    let next = -1;
    if (e.key === "ArrowDown") next = Math.min(i + 1, STAGES.length - 1);
    if (e.key === "ArrowUp") next = Math.max(i - 1, 0);
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = STAGES.length - 1;
    if (next >= 0) {
      e.preventDefault();
      onSelect(next);
      refs.current[next]?.focus();
    }
  };

  const Detail = ({ compact }: { compact?: boolean }) => (
    <div className={cn(!compact && "rounded-xl border border-border bg-card p-6 md:p-8")}>
      {!compact && <p className="tabular text-sm text-muted-foreground" aria-live="polite">{t(UI.stageOf(index + 1, STAGES.length))} · {t(CHAPTERS[s.chapter]!)}</p>}
      {!compact && <h2 className="mt-2 h-section">{t(s.title)}</h2>}
      <dl className={cn("grid gap-5", compact ? "mt-1" : "mt-6")}>
        {s.who && <div><dt className="font-semibold">{t(UI.whoTakesPart)}</dt><dd className="mt-1 text-muted-foreground">{t(s.who)}</dd></div>}
        {s.panel && <div><dt className="font-semibold">{t({ en: "Responsible panel", bn: "দায়িত্বপ্রাপ্ত প্যানেল" })}</dt><dd className="mt-1 text-muted-foreground">{t(s.panel)}</dd></div>}
        <div><dt className="font-semibold">{t(UI.whatHappens)}</dt><dd className="mt-1 text-muted-foreground">{t(s.what)}</dd></div>
        <div>
          <dt className="font-semibold">{t(UI.nextMove)}</dt>
          <dd className="mt-1 text-muted-foreground">{t(s.next)}</dd>
          <dd>
            <Link to={s.link.to} {...(s.link.hash ? { hash: s.link.hash } : {})} className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:underline">
              {t(s.link.label)} <ArrowRight className="size-[18px]" aria-hidden />
            </Link>
          </dd>
        </div>
      </dl>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
        <button type="button" disabled={index === 0} onClick={() => onSelect(index - 1)} className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-input bg-card px-4 font-medium transition-ui hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-45">
          <ChevronLeft className="size-[18px]" aria-hidden /> {t(UI.previous)}
        </button>
        <span className="tabular text-sm text-muted-foreground">{num(index + 1)} / {num(STAGES.length)}</span>
        <button type="button" disabled={index === STAGES.length - 1} onClick={() => onSelect(index + 1)} className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-input bg-card px-4 font-medium transition-ui hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-45">
          {t(UI.next)} <ChevronRight className="size-[18px]" aria-hidden />
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 md:grid-cols-12">
      <ol className="md:col-span-5 lg:col-span-5">
        {CHAPTERS.map((ch, c) => (
          <li key={c} className="mb-6">
            <p className="eyebrow mb-2">{t({ en: `Chapter ${c + 1}`, bn: `অধ্যায় ${toBn(c + 1)}` })} · {t(ch)}</p>
            <ol className="relative">
              {STAGES.map((st, i) => {
                if (st.chapter !== c) return null;
                const sel = i === index;
                return (
                  <li key={st.slug} className="relative pl-12">
                    <span className="absolute left-[19px] top-0 h-full w-px bg-border" aria-hidden />
                    <button
                      ref={(el) => { refs.current[i] = el; }}
                      type="button"
                      aria-current={sel ? "step" : undefined}
                      aria-expanded={sel}
                      onClick={() => onSelect(i)}
                      onKeyDown={(e) => onKey(e, i)}
                      className={cn("group relative my-1 flex min-h-12 w-full items-center rounded-lg px-4 py-3 text-left transition-ui", sel ? "bg-secondary" : "hover:bg-secondary/60")}
                    >
                      <span className={cn("tabular absolute -left-12 flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-ui", sel ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card text-foreground")}>
                        {num(i + 1)}
                      </span>
                      <span className={cn("font-medium", sel && "text-primary")}>{t(st.title)}</span>
                    </button>
                    {sel && (
                      <div className="mb-3 rounded-lg border border-border bg-card p-4 md:hidden">
                        <Detail compact />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
      <div className="hidden md:col-span-7 md:block">
        <div className="sticky top-24"><Detail /></div>
      </div>
    </div>
  );
}
