import type { CategoryId } from "@/data/content";
import { STAGES } from "@/data/content";

export type MemberCategory = CategoryId | "other" | "";

export type TeamIssue =
  | { kind: "size" }
  | { kind: "missing"; member: number }
  | { kind: "unsure"; member: number }
  | { kind: "mixed" }
  | { kind: "leader" };

export type TeamResult = { ok: true; category: CategoryId } | { ok: false; issues: TeamIssue[] };

/** Team rules: 2–3 members, all in one category, a Team Leader chosen. */
export function checkTeam(input: {
  memberCount: number | null;
  members: MemberCategory[];
  hasLeader: boolean | null;
}): TeamResult {
  const issues: TeamIssue[] = [];
  const count = input.memberCount;
  if (count !== 2 && count !== 3) {
    issues.push({ kind: "size" });
  } else {
    const members = input.members.slice(0, count);
    members.forEach((m, i) => {
      if (!m) issues.push({ kind: "missing", member: i + 1 });
      else if (m === "other") issues.push({ kind: "unsure", member: i + 1 });
    });
    const known = new Set(members.filter((m) => m && m !== "other"));
    if (known.size > 1) issues.push({ kind: "mixed" });
  }
  if (input.hasLeader !== true) issues.push({ kind: "leader" });
  if (issues.length) return { ok: false, issues };
  return { ok: true, category: input.members[0] as CategoryId };
}

/** Valid stage slug → its index; anything else → first stage. */
export function resolveStageIndex(slug: unknown): number {
  const i = STAGES.findIndex((s) => s.slug === slug);
  return i < 0 ? 0 : i;
}
