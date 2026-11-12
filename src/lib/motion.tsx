import { Pause, Play } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { useLang } from "@/lib/i18n";

const KEY = "gf-motion-paused";
const Ctx = createContext<{ paused: boolean; reduced: boolean; toggle: () => void }>({ paused: false, reduced: false, toggle: () => {} });

export function MotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    try { if (localStorage.getItem(KEY) === "1") setPaused(true); } catch { /* ignore */ }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused || reduced);
  }, [paused, reduced]);
  const toggle = useCallback(() => {
    setPaused((p) => {
      try { localStorage.setItem(KEY, p ? "0" : "1"); } catch { /* ignore */ }
      return !p;
    });
  }, []);
  return <Ctx.Provider value={{ paused, reduced, toggle }}>{children}</Ctx.Provider>;
}

export const useMotion = () => useContext(Ctx);

export function MotionToggle() {
  const { paused, reduced, toggle } = useMotion();
  const { t } = useLang();
  if (reduced) return null;
  return (
    <button type="button" onClick={toggle} aria-pressed={paused}
      className="fixed bottom-24 right-4 z-30 inline-flex size-10 items-center justify-center gap-2 rounded-full md:left-4 md:right-auto md:size-auto md:min-h-10 md:justify-start border border-border bg-card/95 px-3.5 text-xs font-semibold text-foreground shadow-sm transition-ui hover:border-primary md:bottom-5">
      {paused ? <Play className="size-3.5" aria-hidden /> : <Pause className="size-3.5" aria-hidden />}
      <span className="sr-only md:not-sr-only">{paused ? t({ en: "Play animations", bn: "অ্যানিমেশন চালু" }) : t({ en: "Pause animations", bn: "অ্যানিমেশন থামান" })}</span>
    </button>
  );
}

/** Marks an element data-offscreen so its CSS animations pause outside the viewport. */
export function useOffscreenPause<T extends Element>(ref: RefObject<T | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => e && el.setAttribute("data-offscreen", String(!e.isIntersecting)), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}

/** Becomes true once the element has entered the viewport. */
export function useInView<T extends Element>(ref: RefObject<T | null>, threshold = 0.2) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (!e) return; if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
  return seen;
}

export function useScrollProgress<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [p, setP] = useState(0);
  const frame = useRef(0);
  useEffect(() => {
    const calc = () => {
      frame.current = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height))));
    };
    const on = () => { if (!frame.current) frame.current = requestAnimationFrame(calc); };
    calc();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(frame.current); };
  }, [ref]);
  return p;
}
