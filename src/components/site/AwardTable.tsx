import { Link } from "@tanstack/react-router";
import { Award, Medal } from "lucide-react";
import { useState } from "react";
import { CATEGORIES, RANKS, type CategoryId } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function AwardTable() {
  const { t } = useLang();
  const [cat, setCat] = useState<CategoryId>("seedlings");
  const c = CATEGORIES.find((x) => x.id === cat)!;
  return (
    <div className="rounded-xl border border-border bg-card">
      <div role="tablist" aria-label={t({ en: "Category", bn: "ক্যাটাগরি" })} className="grid grid-cols-3 border-b border-border">
        {CATEGORIES.map((k) => (
          <button key={k.id} role="tab" aria-selected={cat === k.id} type="button" onClick={() => setCat(k.id)}
            className={cn("min-h-12 border-b-2 px-2 py-3 text-[0.9375rem] font-semibold transition-ui", cat === k.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground")}>
            {t(k.name)}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="p-5 sm:p-6">
        <p className="text-muted-foreground">
          {t(c.level)} · {t(c.eligibility)}{" "}
          <Link to="/competition" search={{ category: c.id }} hash="eligibility" className="font-semibold text-primary hover:underline">{t({ en: "Eligibility rules", bn: "যোগ্যতার নিয়ম" })}</Link>
        </p>
        <table className="mt-5 w-full border-collapse text-left">
          <caption className="sr-only">{t({ en: `Awards for ${c.name.en}`, bn: `${c.name.bn} ক্যাটাগরির পুরস্কার` })}</caption>
          <thead>
            <tr className="border-b border-border text-sm text-muted-foreground">
              <th scope="col" className="py-2 font-semibold">{t({ en: "Rank", bn: "স্থান" })}</th>
              <th scope="col" className="py-2 font-semibold">{t({ en: "Recognition", bn: "স্বীকৃতি" })}</th>
            </tr>
          </thead>
          <tbody>
            {RANKS.map((r, i) => (
              <tr key={r.id} className={cn("border-b border-border last:border-0", r.champion && "bg-gold-soft")}>
                <th scope="row" className="py-4 pl-3 pr-4 align-top">
                  <span className="flex items-center gap-2 text-lg font-semibold">
                    {r.champion ? <Award className="size-5 text-gold-foreground" aria-hidden /> : <Medal className="size-5 text-muted-foreground" aria-hidden />}
                    <span className="tabular text-muted-foreground">{i + 1}</span>
                    {t(r.name)}
                  </span>
                </th>
                <td className="py-4 pr-3 text-muted-foreground">
                  {t(c.name)} · {t({ en: "category award, announced at the National Grand Finale", bn: "ক্যাটাগরি পুরস্কার, জাতীয় গ্র্যান্ড ফিনালেতে ঘোষিত" })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
