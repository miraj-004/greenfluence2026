import type { CategoryId } from "@/data/content";

/** Botanical drawing per category; grows slightly when its card is hovered (group-hover). */
export function CategoryArt({ id }: { id: CategoryId }) {
  const grow = "origin-bottom transition-transform duration-500 ease-out group-hover:scale-110 group-focus-within:scale-110";
  return (
    <svg viewBox="0 0 160 120" className="h-32 w-full" aria-hidden>
      <ellipse cx="80" cy="112" rx="60" ry="7" className="fill-sage-soft" />
      <path d="M30 112 Q80 100 130 112" className="fill-earth" />
      {id === "seedlings" && (
        <g className={grow} style={{ transformBox: "fill-box" }}>
          <path d="M80 110 V78" className="stroke-hill-near" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 84 C64 84 58 72 60 64 C72 64 80 72 80 84Z" className="fill-sage" />
          <path d="M80 80 C96 80 102 66 100 58 C88 58 80 66 80 80Z" className="fill-hill-near" />
        </g>
      )}
      {id === "saplings" && (
        <g className={grow} style={{ transformBox: "fill-box" }}>
          <path d="M80 110 V56 M80 82 L66 70 M80 72 L94 62" className="stroke-bark" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="80" cy="46" r="18" className="fill-hill-near" />
          <circle cx="64" cy="64" r="11" className="fill-sage" />
          <circle cx="97" cy="56" r="12" className="fill-hill-mid" />
        </g>
      )}
      {id === "forests" && (
        <g className={grow} style={{ transformBox: "fill-box" }}>
          {[{ x: 52, s: 0.8, c: "fill-hill-mid" }, { x: 108, s: 0.85, c: "fill-sage" }, { x: 80, s: 1.1, c: "fill-hill-near" }].map((tr) => (
            <g key={tr.x} transform={`translate(${tr.x} 110) scale(${tr.s})`}>
              <rect x="-3" y="-22" width="6" height="22" className="fill-bark" />
              <path d="M0 -84 L24 -44 H10 L28 -18 H-28 L-10 -44 H-24Z" className={tr.c} />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
