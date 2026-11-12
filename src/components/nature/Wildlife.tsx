/** Small reusable SVG creatures. All decorative (aria-hidden by parents). */
export function Bird({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 24 12" className="overflow-visible">
      <path className="anim-flap fill-none stroke-bark" strokeWidth="1.6" strokeLinecap="round" d="M1 6 Q6 0 12 6 Q18 0 23 6" />
    </svg>
  );
}

export function Flock({ top, dur, delay, count = 3, size = 18 }: { top: string; dur: number; delay: number; count?: number; size?: number }) {
  return (
    <div className="anim-fly absolute left-0" style={{ top, ["--dur" as string]: `${dur}s`, ["--delay" as string]: `${delay}s` }}>
      <div className="relative">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="absolute" style={{ left: i * 22 - (i % 2) * 8, top: (i % 2) * 10 + i * 3, animationDelay: `${i * 0.12}s` }}>
            <Bird size={size - i * 2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Butterfly({ className = "" }: { className?: string }) {
  return (
    <svg width="26" height="22" viewBox="0 0 26 22" className={`anim-flutter ${className}`} style={{ ["--dur" as string]: "11s" }}>
      <g className="anim-wing">
        <path d="M13 11 C6 0 0 3 2 9 C3 13 9 13 13 11Z" className="fill-gold" />
        <path d="M13 11 C20 0 26 3 24 9 C23 13 17 13 13 11Z" className="fill-gold" />
        <path d="M13 12 C8 20 3 18 5 14 C7 12 11 12 13 12Z" className="fill-ocean" />
        <path d="M13 12 C18 20 23 18 21 14 C19 12 15 12 13 12Z" className="fill-ocean" />
      </g>
      <rect x="12.2" y="6" width="1.6" height="11" rx="0.8" className="fill-bark" />
    </svg>
  );
}

export function Bee({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" className={`anim-flutter ${className}`} style={{ ["--dur" as string]: "6s" }}>
      <g className="anim-wing"><ellipse cx="8" cy="4" rx="4" ry="3" className="fill-card opacity-80" /><ellipse cx="12" cy="4" rx="4" ry="3" className="fill-card opacity-80" /></g>
      <ellipse cx="10" cy="10" rx="7" ry="4.5" className="fill-gold" />
      <path d="M8 6 V14 M12 6 V14" className="stroke-bark" strokeWidth="1.6" />
    </svg>
  );
}

export function Ladybug({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" className={className}>
      <circle cx="9" cy="4" r="3" className="fill-bark" />
      <ellipse cx="9" cy="10" rx="7" ry="5.5" className="fill-destructive" />
      <path d="M9 5 V15.5" className="stroke-bark" strokeWidth="1" />
      <circle cx="6" cy="9" r="1.2" className="fill-bark" /><circle cx="12" cy="9" r="1.2" className="fill-bark" /><circle cx="6.5" cy="12.5" r="1" className="fill-bark" /><circle cx="11.5" cy="12.5" r="1" className="fill-bark" />
    </svg>
  );
}

export function Leaf({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" className={className} style={style}>
      <path d="M2 18 C2 8 8 2 18 2 C18 12 12 18 2 18Z" className="fill-sage" />
      <path d="M3 17 L15 5" className="stroke-hill-near" strokeWidth="1" />
    </svg>
  );
}

/** A few leaves drifting down at a section edge. */
export function FallingLeaves({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`nature pointer-events-none absolute overflow-hidden ${className}`}>
      {[0, 1, 2].map((i) => (
        <Leaf key={i} className="anim-fall absolute" style={{ left: `${15 + i * 30}%`, top: 0, ["--dur" as string]: `${11 + i * 3}s`, ["--delay" as string]: `${i * 4}s` } as React.CSSProperties} />
      ))}
    </div>
  );
}

export function Waves({ className = "" }: { className?: string }) {
  const row = (d: string, cls: string, dur: number) => (
    <div className="anim-wave absolute inset-0 flex w-[200%]" style={{ ["--dur" as string]: `${dur}s` }}>
      {[0, 1].map((k) => (
        <svg key={k} viewBox="0 0 720 40" preserveAspectRatio="none" className="h-full w-1/2"><path d={d} className={cls} /></svg>
      ))}
    </div>
  );
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {row("M0 14 Q90 4 180 14 T360 14 T540 14 T720 14 V40 H0Z", "fill-ocean-soft", 22)}
      {row("M0 22 Q90 12 180 22 T360 22 T540 22 T720 22 V40 H0Z", "fill-ocean opacity-70", 14)}
    </div>
  );
}
