import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FORM_LINKS, isValidFormUrl } from "@/data/links";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-ui hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_10px_24px_-12px_var(--primary)] active:translate-y-0";
export const btnSecondary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-input bg-card px-6 py-2.5 text-[0.9375rem] font-semibold text-foreground transition-ui hover:-translate-y-0.5 hover:border-primary hover:bg-secondary active:translate-y-0";

export function RegisterLink({ className, variant = "primary", label }: { className?: string; variant?: "primary" | "secondary"; label?: { en: string; bn: string } }) {
  const { t } = useLang();
  const cls = cn(variant === "primary" ? btnPrimary : btnSecondary, className);
  if (!isValidFormUrl(FORM_LINKS.team)) {
    return (
      <Link to="/event-info" hash="updates" className={cls}>
        {t(UI.checkUpdates)}
      </Link>
    );
  }
  return (
    <a href={FORM_LINKS.team} target="_blank" rel="noopener noreferrer" className={cls}>
      {t(label ?? UI.register)}
      <ArrowUpRight className="size-[18px]" aria-hidden />
      <span className="sr-only">{t(UI.newTabSr)}</span>
    </a>
  );
}
