import { useRef } from "react";
import { useOffscreenPause } from "@/lib/motion";
import { Butterfly, Flock, Ladybug } from "./Wildlife";

export function FooterLandscape() {
  const ref = useRef<HTMLDivElement>(null);
  useOffscreenPause(ref);
  return (
    <div ref={ref} aria-hidden className="nature pointer-events-none relative h-40 overflow-hidden md:h-48">
      <Flock top="18%" dur={40} delay={-12} count={2} size={14} />
      <svg viewBox="0 0 1440 200" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 size-full">
        <path d="M0 120 Q240 60 480 110 T960 100 T1440 110 V200 H0Z" className="fill-hill-far" />
        <path d="M0 160 Q300 110 620 150 T1440 140 V200 H0Z" className="fill-hill-mid" />
        {[180, 220, 1180, 1230, 1270].map((x, i) => (
          <g key={x} className="anim-sway" style={{ ["--delay" as string]: `${i * 0.6}s`, ["--dur" as string]: "8s" }}>
            <rect x={x - 3} y={118 + (i % 2) * 6} width="6" height="34" className="fill-bark" />
            <circle cx={x} cy={110 + (i % 2) * 6} r={22 - (i % 3) * 4} className="fill-hill-near" />
          </g>
        ))}
        <path d="M0 185 Q360 160 720 182 T1440 178 V200 H0Z" className="fill-hill-near" />
      </svg>
      <Butterfly className="absolute bottom-16 left-[38%]" />
      <Ladybug className="absolute bottom-3 left-[72%]" />
    </div>
  );
}
