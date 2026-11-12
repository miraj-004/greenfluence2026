import { Check, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { CHECKLIST } from "@/data/content";
import { toBn } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const KEY = "gf-checklist";

export function PreparationChecklist() {
  const { t, lang } = useLang();
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => {
    try {
      const v = JSON.parse(window.localStorage.getItem(KEY) ?? "[]");
      if (Array.isArray(v)) setDone(v.filter((x) => typeof x === "string"));
    } catch { /* ignore */ }
  }, []);
  const save = (v: string[]) => {
    setDone(v);
    try { window.localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* ignore */ }
  };
  const n = done.length;
  const total = CHECKLIST.length;
  const f = (x: number) => (lang === "bn" ? toBn(x) : String(x));

  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">{t({ en: "Prepare Your Concept Note", bn: "কনসেপ্ট নোট প্রস্তুত করুন" })}</h3>
        <button type="button" onClick={() => save([])} className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-secondary">
          <RotateCcw className="size-4" aria-hidden /> {t({ en: "Reset", bn: "রিসেট" })}
        </button>
      </div>
      <p className="tabular mt-1 text-sm text-muted-foreground" aria-live="polite">
        {t({ en: `Your preparation progress: ${n} of ${total} covered`, bn: `আপনার প্রস্তুতি: ${f(total)}টির মধ্যে ${f(n)}টি সম্পন্ন` })}
      </p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary" aria-hidden>
        <div className="h-full bg-primary transition-[width] duration-200" style={{ width: `${(n / total) * 100}%` }} />
      </div>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {CHECKLIST.map((c) => {
          const on = done.includes(c.id);
          return (
            <li key={c.id}>
              <label className={cn("flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 transition-ui", on ? "border-primary bg-secondary" : "border-border hover:border-input")}>
                <input type="checkbox" className="peer sr-only" checked={on} onChange={() => save(on ? done.filter((x) => x !== c.id) : [...done, c.id])} />
                <span className={cn("flex size-5 shrink-0 items-center justify-center rounded border peer-focus-visible:ring-2 peer-focus-visible:ring-ring", on ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card")} aria-hidden>
                  {on && <Check className="size-3.5" />}
                </span>
                <span>{t(c.label)}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
