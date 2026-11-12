import { Link } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { CATEGORIES, type CategoryId } from "@/data/content";
import { checkTeam, type MemberCategory, type TeamResult } from "@/lib/competition";
import { useLang, type L } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { RegisterLink, btnSecondary } from "./RegisterLink";

const fieldset = "rounded-lg border border-border p-4";
const legend = "px-1 text-sm font-semibold";
const chip = (on: boolean) =>
  cn("min-h-11 rounded-lg border px-4 text-[0.9375rem] font-medium transition-ui", on ? "border-primary bg-secondary text-primary" : "border-input bg-card hover:bg-secondary/60");

export function EligibilityChecker({ initialCategory }: { initialCategory?: CategoryId }) {
  const { t } = useLang();
  const [count, setCount] = useState<number | null>(null);
  const [members, setMembers] = useState<MemberCategory[]>(["", "", ""]);
  const [leader, setLeader] = useState<boolean | null>(null);
  const [result, setResult] = useState<TeamResult | null>(null);

  useEffect(() => {
    if (initialCategory) setMembers([initialCategory, "", ""]);
  }, [initialCategory]);

  const setMember = (i: number, v: MemberCategory) => {
    setMembers((m) => m.map((x, j) => (j === i ? v : x)));
    setResult(null);
  };
  const opts: { v: MemberCategory; l: L }[] = [
    ...CATEGORIES.map((c) => ({ v: c.id as MemberCategory, l: c.name })),
    { v: "other", l: { en: "Other or unsure", bn: "অন্যান্য বা নিশ্চিত নই" } },
  ];

  const issueText = (r: Extract<TeamResult, { ok: false }>["issues"][number]): L => {
    switch (r.kind) {
      case "size": return { en: "Choose a team size of 2 or 3 members.", bn: "টিমের সদস্য সংখ্যা ২ বা ৩ নির্বাচন করুন।" };
      case "missing": return { en: `Select an education category for member ${r.member}.`, bn: `সদস্য ${r.member}-এর শিক্ষাস্তর নির্বাচন করুন।` };
      case "unsure": return { en: `Member ${r.member} should review the category rules above before registering.`, bn: `রেজিস্ট্রেশনের আগে সদস্য ${r.member}-কে ওপরের ক্যাটাগরি নিয়ম দেখে নিতে হবে।` };
      case "mixed": return { en: "All members must belong to the same category.", bn: "সব সদস্যকে একই ক্যাটাগরির হতে হবে।" };
      case "leader": return { en: "Choose one Team Leader to handle registration and submissions.", bn: "রেজিস্ট্রেশন ও সাবমিশনের জন্য একজন টিম লিডার নির্বাচন করুন।" };
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
      <h3 className="text-xl font-semibold">{t({ en: "Check My Team", bn: "আমার টিম যাচাই করুন" })}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{t({ en: "Nothing you select here is saved or sent. Official registration happens through the form.", bn: "এখানে নির্বাচিত কিছুই সংরক্ষণ বা পাঠানো হয় না। অফিশিয়াল রেজিস্ট্রেশন ফর্মের মাধ্যমেই হবে।" })}</p>
      <form
        className="mt-5 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setResult(checkTeam({ memberCount: count, members, hasLeader: leader }));
        }}
      >
        <fieldset className={fieldset}>
          <legend className={legend}>{t({ en: "How many members?", bn: "কতজন সদস্য?" })}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((n) => (
              <button key={n} type="button" aria-pressed={count === n} onClick={() => { setCount(n); setResult(null); }} className={cn(chip(count === n), "tabular w-14")}>
                {n === 4 ? "4+" : n}
              </button>
            ))}
          </div>
        </fieldset>

        {(count === 2 || count === 3) &&
          Array.from({ length: count }).map((_, i) => (
            <fieldset key={i} className={fieldset}>
              <legend className={legend}>{t({ en: `Member ${i + 1} education category`, bn: `সদস্য ${i + 1}-এর শিক্ষাস্তর` })}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {opts.map((o) => (
                  <button key={o.v} type="button" aria-pressed={members[i] === o.v} onClick={() => setMember(i, o.v)} className={chip(members[i] === o.v)}>
                    {t(o.l)}
                  </button>
                ))}
              </div>
            </fieldset>
          ))}

        <fieldset className={fieldset}>
          <legend className={legend}>{t({ en: "Has your team chosen a Team Leader?", bn: "আপনার টিম কি একজন টিম লিডার ঠিক করেছে?" })}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {[true, false].map((v) => (
              <button key={String(v)} type="button" aria-pressed={leader === v} onClick={() => { setLeader(v); setResult(null); }} className={chip(leader === v)}>
                {v ? t({ en: "Yes", bn: "হ্যাঁ" }) : t({ en: "Not yet", bn: "এখনো না" })}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap gap-3">
          <button type="submit" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground transition-ui hover:bg-primary/90">
            {t({ en: "Check my team", bn: "যাচাই করুন" })}
          </button>
          <button type="button" className={btnSecondary} onClick={() => { setCount(null); setMembers(["", "", ""]); setLeader(null); setResult(null); }}>
            <RotateCcw className="size-[18px]" aria-hidden /> {t({ en: "Start over", bn: "আবার শুরু" })}
          </button>
        </div>
      </form>

      <div aria-live="polite" className="mt-5">
        {result?.ok && (
          <div className="rounded-lg border border-primary bg-secondary p-5">
            <p className="flex items-center gap-2 font-semibold text-primary"><CheckCircle2 className="size-5" aria-hidden />{t({ en: "Your team fits the rules.", bn: "আপনার টিম নিয়ম অনুযায়ী যোগ্য।" })}</p>
            <p className="mt-1">{t({ en: "Category:", bn: "ক্যাটাগরি:" })} <strong>{t(CATEGORIES.find((c) => c.id === result.category)!.name)}</strong></p>
            <div className="mt-4 flex flex-wrap gap-3">
              <RegisterLink />
              <Link to="/competition" hash="checklist" className={btnSecondary}>{t({ en: "Prepare your entry", bn: "এন্ট্রি প্রস্তুত করুন" })}</Link>
            </div>
          </div>
        )}
        {result && !result.ok && (
          <div className="rounded-lg border border-destructive/50 bg-card p-5">
            <p className="flex items-center gap-2 font-semibold text-destructive"><AlertCircle className="size-5" aria-hidden />{t({ en: "A few things to fix:", bn: "কিছু বিষয় ঠিক করতে হবে:" })}</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              {result.issues.map((i, k) => <li key={k}>{t(issueText(i))}</li>)}
            </ul>
            <a href="#team-rules" className="mt-3 inline-block font-semibold text-primary hover:underline">{t({ en: "Review the team rules", bn: "টিমের নিয়ম দেখুন" })}</a>
          </div>
        )}
      </div>
    </div>
  );
}
