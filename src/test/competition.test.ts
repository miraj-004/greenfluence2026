import { describe, expect, it } from "vitest";
import { checkTeam, resolveStageIndex } from "@/lib/competition";

describe("team eligibility", () => {
  it("accepts a 2-member same-category team with a leader", () => {
    expect(checkTeam({ memberCount: 2, members: ["saplings", "saplings"], hasLeader: true })).toEqual({ ok: true, category: "saplings" });
  });
  it("accepts 3 members", () => {
    expect(checkTeam({ memberCount: 3, members: ["forests", "forests", "forests"], hasLeader: true }).ok).toBe(true);
  });
  it("rejects a team of 1 or 4", () => {
    for (const n of [1, 4]) {
      const r = checkTeam({ memberCount: n, members: [], hasLeader: true });
      expect(r.ok === false && r.issues.some((i) => i.kind === "size")).toBe(true);
    }
  });
  it("rejects mixed categories", () => {
    const r = checkTeam({ memberCount: 2, members: ["seedlings", "forests"], hasLeader: true });
    expect(r.ok === false && r.issues.some((i) => i.kind === "mixed")).toBe(true);
  });
  it("requires a Team Leader", () => {
    const r = checkTeam({ memberCount: 2, members: ["seedlings", "seedlings"], hasLeader: false });
    expect(r.ok === false && r.issues.some((i) => i.kind === "leader")).toBe(true);
  });
  it("flags an unsure member", () => {
    const r = checkTeam({ memberCount: 2, members: ["seedlings", "other"], hasLeader: true });
    expect(r.ok === false && r.issues.some((i) => i.kind === "unsure" && i.member === 2)).toBe(true);
  });
});

describe("roadmap deep links", () => {
  it("resolves a valid stage", () => expect(resolveStageIndex("evaluation")).toBe(5));
  it("falls back to the first stage", () => expect(resolveStageIndex("nope")).toBe(0));
});
