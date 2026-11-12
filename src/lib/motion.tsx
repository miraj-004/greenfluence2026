import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

/** Animations always run; kept as a passthrough so layout code stays unchanged. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

/** No-op: animations are never paused offscreen. */
export function useOffscreenPause<T extends Element>(_ref: RefObject<T | null>) {}

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
      setP(Math.min(1, Math.max(0, (window.innerHeight * 0.75 - r.top) / r.height)));
    };
    const on = () => { if (!frame.current) frame.current = requestAnimationFrame(calc); };
    calc();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(frame.current); };
  }, [ref]);
  return p;
}
