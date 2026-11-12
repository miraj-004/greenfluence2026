import { useEffect, useRef } from "react";
import { useOffscreenPause } from "@/lib/motion";
import { Bee, Butterfly, Flock, Waves } from "./Wildlife";

function Grass({ x, h, delay }: { x: number; h: number; delay: number }) {
  return <path className="anim-sway fill-hill-near" style={{ ["--delay" as string]: `${delay}s`, ["--dur" as string]: `${4 + (x % 3)}s` }} d={`M${x} 600 Q${x + 3} ${600 - h / 2} ${x + 6} ${600 - h} Q${x + 7} ${600 - h / 2} ${x + 10} 600Z`} />;
}

/** Layered illustrated hero landscape with gentle mouse parallax. */
export function Landscape() {
  const ref = useRef<HTMLDivElement>(null);
  useOffscreenPause(ref);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.setProperty("--mx", String(e.clientX / window.innerWidth - 0.5));
        el.style.setProperty("--my", String(e.clientY / window.innerHeight - 0.5));
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  const layer = (depth: number) => ({ transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth / 3}px), 0)`, transition: "transform 600ms cubic-bezier(.2,.7,.2,1)" });
  const blades = Array.from({ length: 70 }, (_, i) => ({ x: i * 21 + (i % 4) * 3, h: 18 + ((i * 37) % 26), d: (i % 7) * 0.4 }));
  return (
    <div ref={ref} aria-hidden className="nature pointer-events-none absolute inset-0 overflow-hidden bg-sky">
      {/* sun + clouds */}
      <div className="absolute right-[12%] top-[10%] size-28 rounded-full bg-gold-soft md:size-40" style={layer(8)} />
      {[{ t: "12%", d: 120, dl: -30, w: 160 }, { t: "22%", d: 160, dl: -90, w: 110 }, { t: "6%", d: 140, dl: -60, w: 90 }].map((c, i) => (
        <div key={i} className="anim-drift absolute left-0" style={{ top: c.t, ["--dur" as string]: `${c.d}s`, ["--delay" as string]: `${c.dl}s` }}>
          <svg width={c.w} height={c.w * 0.35} viewBox="0 0 100 35"><path d="M10 30 Q0 30 4 22 Q2 12 16 14 Q20 2 36 8 Q48 -2 60 10 Q78 6 80 18 Q98 18 92 30Z" className="fill-card opacity-90" /></svg>
        </div>
      ))}
      <Flock top="16%" dur={34} delay={-6} />
      <Flock top="28%" dur={46} delay={-28} count={2} size={14} />
      <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-[78%] w-full">
        <g style={layer(10)}><path d="M-40 380 Q160 250 360 330 T760 300 T1160 290 T1520 320 V600 H-40Z" className="fill-hill-far" /></g>
      </svg>
      <div className="absolute inset-x-0 bottom-[21%] h-[9%]" style={layer(14)}><Waves className="h-full w-[110%] -ml-[5%]" /></div>
      <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-[60%] w-full">
        <g style={layer(20)}>
          <path d="M-40 470 Q200 380 420 450 T880 430 T1500 440 V600 H-40Z" className="fill-hill-mid" />
          {/* distant trees */}
          {[1040, 1080, 1120, 1170, 1210].map((x, i) => (
            <g key={x} className="anim-sway" style={{ ["--delay" as string]: `${i * 0.5}s`, ["--dur" as string]: "7s" }}>
              <rect x={x - 2} y={418 - (i % 2) * 10} width="4" height="22" className="fill-bark" />
              <circle cx={x} cy={410 - (i % 2) * 10} r={16 - (i % 3) * 3} className="fill-hill-near" />
            </g>
          ))}
        </g>
        <g style={layer(34)}>
          <path d="M-40 540 Q260 470 560 525 T1100 515 T1500 520 V600 H-40Z" className="fill-hill-near" />
          {blades.map((b) => <Grass key={b.x} x={b.x} h={b.h} delay={b.d} />)}
        </g>
      </svg>
      <Butterfly className="absolute bottom-[26%] left-[58%] hidden md:block" />
      <Bee className="absolute bottom-[18%] left-[82%]" />
      {/* soft wash so copy stays readable on the left */}
      <div className="absolute inset-0 bg-background/55 md:hidden" />
    </div>
  );
}
