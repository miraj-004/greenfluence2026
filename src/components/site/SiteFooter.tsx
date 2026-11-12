import { Link } from "@tanstack/react-router";
import eaLogo from "@/assets/earths-ants-logo.png.asset.json";
import esdmBadge from "@/assets/esdm-badge.jpg.asset.json";
import { UI } from "@/data/ui";
import { useLang } from "@/lib/i18n";

export function OrganizerRow({ compact }: { compact?: boolean }) {
  const { t } = useLang();
  return (
    <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
      <div className="flex items-center gap-4">
        <img src={eaLogo.url} alt="Earth’s Ants logo" width={180} height={52} className="h-12 w-auto shrink-0" loading="lazy" />
        <span className="text-sm text-muted-foreground">{t(UI.earthsAnts)}</span>
      </div>
      <div className="flex items-center gap-4">
        <img src={esdmBadge.url} alt="Department of ESDM, Daffodil International University badge" width={48} height={48} className="size-12 shrink-0 rounded-full" loading="lazy" />
        <span className="text-sm text-muted-foreground">{t(UI.esdm)}</span>
      </div>
    </div>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  const links = [
    { to: "/competition", l: UI.nav.challenge },
    { to: "/roadmap", l: UI.nav.roadmap },
    { to: "/prizes", l: UI.nav.prizes },
    { to: "/event-info", l: UI.nav.eventInfo },
    { to: "/join", l: UI.nav.join },
    { to: "/faq", l: UI.nav.faq },
  ] as const;
  return (
    <footer className="border-t border-border bg-card pb-24 md:pb-0">
      <div className="container-site grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg font-bold"><span className="text-primary">GreenFluence</span> 2026</p>
          <p className="mt-2 text-sm text-muted-foreground">{t(UI.tagline)}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t(UI.footerScope)}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {links.map((n) => (
              <li key={n.to}><Link to={n.to} className="inline-block py-1.5 text-sm hover:text-primary">{t(n.l)}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-border pt-8 md:col-span-12">
          <p className="mb-4 text-sm font-semibold">{t(UI.organizedBy)}</p>
          <OrganizerRow />
        </div>
      </div>
    </footer>
  );
}
