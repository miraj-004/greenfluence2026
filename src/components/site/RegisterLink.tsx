import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FORM_LINKS, isValidFormUrl } from "@/data/links";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-ui hover:bg-primary/90";
export const btnSecondary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-input bg-card px-5 py-2.5 text-[0.9375rem] font-semibold text-foreground transition-ui hover:bg-secondary";

export function RegisterLink({ className, variant = "primary" }: { className?: string; variant?: "primary" | "secondary" }) {
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
      {t(UI.register)}
      <ArrowUpRight className="size-[18px]" aria-hidden />
      <span className="sr-only">{t(UI.newTabSr)}</span>
    </a>
  );
}
