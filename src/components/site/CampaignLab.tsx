import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CAMPAIGN_EXAMPLES } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { tabTrigger } from "./CompetitionExplorer";

export function CampaignLab() {
  const { t } = useLang();
  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
      <Tabs defaultValue={CAMPAIGN_EXAMPLES[0]!.id}>
        <TabsList className="grid h-auto w-full grid-cols-1 gap-1 rounded-lg bg-secondary p-1 sm:grid-cols-3">
          {CAMPAIGN_EXAMPLES.map((e, i) => (
            <TabsTrigger key={e.id} value={e.id} className={tabTrigger}>
              {t({ en: `Example ${i + 1}`, bn: `উদাহরণ ${i + 1}` })}: {e.brand}
            </TabsTrigger>
          ))}
        </TabsList>
        {CAMPAIGN_EXAMPLES.map((e) => (
          <TabsContent key={e.id} value={e.id} className="mt-5">
            <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {[
                [{ en: "Issue", bn: "সমস্যা" }, t(e.issue)],
                [{ en: "Hypothetical brand", bn: "কাল্পনিক ব্র্যান্ড" }, e.brand],
                [{ en: "Proof-of-Impact Activation", bn: "প্রুফ-অব-ইমপ্যাক্ট অ্যাক্টিভেশন" }, t(e.activation)],
                [{ en: "Proposed measure", bn: "প্রস্তাবিত পরিমাপ" }, t(e.measure)],
              ].map(([k, v], i) => (
                <div key={i} className="bg-card p-5">
                  <dt className="text-sm font-semibold text-muted-foreground">{t(k as { en: string; bn: string })}</dt>
                  <dd className="mt-1 text-lg font-medium">{v as string}</dd>
                </div>
              ))}
            </dl>
          </TabsContent>
        ))}
      </Tabs>
      <p className="mt-4 text-sm text-muted-foreground">
        {t({ en: "These are teaching scenarios with proposed metrics, not real results. Students pick their own real brand and substantiate the link to their problem. Studying a brand does not imply endorsement, sponsorship, or partnership.", bn: "এগুলো প্রস্তাবিত পরিমাপসহ শেখার উদাহরণ, প্রকৃত ফলাফল নয়। শিক্ষার্থীরা নিজেরাই একটি বাস্তব ব্র্যান্ড বেছে নেবে এবং সমস্যার সাথে এর সংযোগ প্রমাণ করবে। কোনো ব্র্যান্ড নিয়ে গবেষণা মানে তাদের সমর্থন, স্পনসরশিপ বা অংশীদারত্ব নয়।" })}
      </p>
    </div>
  );
}
