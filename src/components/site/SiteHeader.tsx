import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";
import { RegisterLink } from "./RegisterLink";

const MAIN = [
  { to: "/competition", label: UI.nav.challenge },
  { to: "/roadmap", label: UI.nav.roadmap },
  { to: "/prizes", label: UI.nav.prizes },
] as const;

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language / ভাষা" className="inline-flex rounded-lg border border-input bg-card p-0.5 text-sm">
      {(["en", "bn"] as const).map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className="min-h-9 rounded-md px-2.5 font-medium transition-ui aria-pressed:bg-secondary aria-pressed:text-primary text-muted-foreground"
        >
          {l === "en" ? "English" : "বাংলা"}
        </button>
      ))}
    </div>
  );
}

const navLink = "rounded-md px-3 py-2 text-[0.9375rem] font-medium text-muted-foreground transition-ui hover:text-foreground data-[status=active]:text-primary";

export function SiteHeader() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:shadow-lg">
        {t(UI.skip)}
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container-site flex h-16 items-center gap-4">
          <Link to="/" aria-label={t(UI.home)} className="mr-auto flex items-baseline gap-1.5 text-lg font-bold tracking-tight">
            <span className="text-primary">GreenFluence</span>
            <span className="tabular text-foreground">2026</span>
          </Link>
          <nav aria-label="Main" className="hidden items-center lg:flex">
            {MAIN.map((n) => (
              <Link key={n.to} to={n.to} className={navLink}>
                {t(n.label)}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className={`${navLink} inline-flex items-center gap-1`}>
                {t(UI.nav.eventInfo)} <ChevronDown className="size-4" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-52">
                <DropdownMenuItem asChild><Link to="/event-info" hash="organizers">{t(UI.nav.organizers)}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/event-info" hash="meet">{t(UI.nav.meet)}</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/faq">{t(UI.nav.faq)}</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/join" className={navLink}>{t(UI.nav.join)}</Link>
          </nav>
          <div className="hidden sm:block"><LangSwitch /></div>
          <RegisterLink className="hidden md:inline-flex" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex size-11 items-center justify-center rounded-lg border border-input bg-card lg:hidden" aria-label={t(UI.menu)}>
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,90vw)]">
              <SheetHeader><SheetTitle>{t(UI.menu)}</SheetTitle></SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
                <Link to="/" className="rounded-md px-3 py-3 font-medium hover:bg-secondary" activeOptions={{ exact: true }}>GreenFluence 2026</Link>
                {[...MAIN, { to: "/event-info", label: UI.nav.eventInfo }, { to: "/faq", label: UI.nav.faq }, { to: "/join", label: UI.nav.join }].map((n) => (
                  <Link key={n.to} to={n.to} className="rounded-md px-3 py-3 font-medium hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-primary">
                    {t(n.label)}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4">
                  <LangSwitch />
                  <RegisterLink />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {!open && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden [@media(max-height:480px)]:hidden">
          <RegisterLink className="w-full" />
        </div>
      )}
    </>
  );
}
