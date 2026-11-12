import { useEffect, useRef, useState } from "react";

/** Small smartphone-shaped cursor for fine-pointer devices. Purely decorative; never intercepts clicks. */
export function PhoneCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [mode, setMode] = useState<"idle" | "hover" | "go" | "text">("idle");
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    setOn(true);
    return () => setOn(false);
  }, []);
  useEffect(() => {
    if (!on) return;
    const el = ref.current;
    if (!el) return;
    document.documentElement.classList.add("phone-cursor");
    let x = -100, y = -100, cx = x, cy = y, raf = 0, visible = false;
    const tick = () => {
      cx += (x - cx) * 0.35; cy += (y - cy) * 0.35;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.3 ? requestAnimationFrame(tick) : 0;
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX; y = e.clientY;
      if (!visible) { visible = true; cx = x; cy = y; el.style.opacity = "1"; }
      if (!raf) raf = requestAnimationFrame(tick);
      const tg = e.target as Element | null;
      if (!tg?.closest) return;
      if (tg.closest("input, textarea, select, [contenteditable='true']")) setMode("text");
      else if (tg.closest("a[href*='forms.gle'], [data-cursor='go']")) setMode("go");
      else if (tg.closest("a, button, [role='tab'], [role='button'], label, summary, .card-lift")) setMode("hover");
      else setMode("idle");
    };
    const leave = () => { visible = false; el.style.opacity = "0"; };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      document.documentElement.classList.remove("phone-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      cancelAnimationFrame(raf);
    };
  }, [on]);
  if (!on) return null;
  const scale = mode === "go" ? 1.35 : mode === "hover" ? 1.2 : 1;
  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0" style={{ transition: "opacity 150ms" }}>
      <svg width="18" height="28" viewBox="0 0 18 28" className="-translate-x-[3px] -translate-y-[3px]"
        style={{ transform: `scale(${scale})`, transformOrigin: "3px 3px", transition: "transform 180ms ease, opacity 120ms", opacity: mode === "text" ? 0 : 1 }}>
        <rect x="1" y="1" width="16" height="26" rx="3.5" className="fill-card stroke-sage" strokeWidth="1.6" />
        <rect x="3.2" y="4.2" width="11.6" height="17" rx="1.2" className={mode === "idle" ? "fill-sage-soft" : "fill-primary"} />
        <rect x="7" y="23.2" width="4" height="1.4" rx="0.7" className="fill-sage" />
        {mode === "go" && <path d="M6.5 15.5 L11.5 10.5 M8 10.5 H11.5 V14" className="stroke-primary-foreground" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </div>
  );
}
