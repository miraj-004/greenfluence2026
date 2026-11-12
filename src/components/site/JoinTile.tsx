import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Megaphone, School, Users } from "lucide-react";
import { FORM_LINKS, isValidFormUrl } from "@/data/links";
import { UI } from "@/data/ui";
import { useLang, type L } from "@/lib/i18n";

type Role = "team" | "club" | "ambassador";

const ROLES: Record<Role, { icon: typeof Users; title: L; body: L; action: L }> = {
  team: {
    icon: Users,
    title: { en: "Team Registration", bn: "টিম রেজিস্ট্রেশন" },
    body: { en: "Enter as a team of two or three.", bn: "দুই বা তিনজনের টিম হিসেবে অংশ নিন।" },
    action: { en: "Register Your Team", bn: "টিম রেজিস্ট্রেশন করুন" },
  },
  club: {
    icon: School,
    title: { en: "Club Partner", bn: "ক্লাব পার্টনার" },
    body: { en: "Bring GreenFluence to your student community.", bn: "আপনার শিক্ষার্থী কমিউনিটিতে গ্রিনফ্লুয়েন্স নিয়ে আসুন।" },
    action: { en: "Apply as a Club Partner", bn: "ক্লাব পার্টনার হিসেবে আবেদন করুন" },
  },
  ambassador: {
    icon: Megaphone,
    title: { en: "Campus Ambassador", bn: "ক্যাম্পাস অ্যাম্বাসেডর" },
    body: { en: "Lead GreenFluence outreach on your campus.", bn: "আপনার ক্যাম্পাসে গ্রিনফ্লুয়েন্সের প্রচারে নেতৃত্ব দিন।" },
    action: { en: "Apply as a Campus Ambassador", bn: "ক্যাম্পাস অ্যাম্বাসেডর হিসেবে আবেদন করুন" },
  },
};

export function JoinTile({ role, image }: { role: Role; image?: { src: string; alt: string } }) {
  const { t } = useLang();
  const r = ROLES[role];
  const url = FORM_LINKS[role];
  const Icon = r.icon;
  const inner = (action: string, external: boolean) => (
    <>
      {image && (
        <div className="aspect-[4/3] overflow-hidden border-b border-border bg-muted">
          <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover" onError={(e) => (e.currentTarget.parentElement!.style.display = "none")} />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-5 inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon className="size-5" aria-hidden />
        </span>
        <h3 className="text-xl font-semibold">{t(r.title)}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{t(r.body)}</p>
        <span className="mt-6 inline-flex min-h-11 w-fit items-center gap-1.5 rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-ui group-hover:bg-primary/90">
          {action}
          {external && <ArrowUpRight className="size-[18px]" aria-hidden />}
        </span>
      </div>
    </>
  );
  const cls = "card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card";
  if (!isValidFormUrl(url)) {
    return (
      <Link to="/event-info" hash="updates" className={cls}>
        {inner(t(UI.checkUpdates), false)}
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner(t(r.action), true)}
      <span className="sr-only">{t(UI.newTabSr)}</span>
    </a>
  );
}

export function JoinTiles() {
  const { t } = useLang();
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        <JoinTile role="team" />
        <JoinTile role="club" />
        <JoinTile role="ambassador" />
      </div>
      <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span>{t(UI.newTab)}.</span>
        <span>{t(UI.leaderNote)}</span>
      </p>
    </div>
  );
}
