import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/** Fades content in when it scrolls into view. Content is visible by default (SSR / no-JS). */
export function Reveal({ children, delay = 0, as: Tag = "div", className }: { children: ReactNode; delay?: number; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return; // already on screen: leave visible
    setState("hidden");
    const io = new IntersectionObserver(([e]) => { if (!e) return; if (e.isIntersecting) { setState("shown"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} data-reveal={state === "idle" ? undefined : state} style={{ ["--reveal-delay" as string]: `${delay}ms` }} className={className}>
      {children}
    </Tag>
  );
}

export function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => { if (!e) return;
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1100);
        setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return (
    <div>
      <span ref={ref} className="tabular font-display text-5xl font-extrabold text-primary" aria-hidden>{n}</span>
      <span className="sr-only">{value}</span>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}
