import { useEffect, useRef, type ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro, action }: { eyebrow?: string; title: string; intro?: string; action?: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // Route-level heading focus for screen readers after navigation.
    ref.current?.focus({ preventScroll: true });
  }, []);
  return (
    <header className="border-b border-border bg-card">
      <div className="container-site grid gap-6 py-12 md:grid-cols-12 md:items-end md:py-16">
        <div className="md:col-span-8">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 ref={ref} tabIndex={-1} className="h-display outline-none">
            {title}
          </h1>
          {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        </div>
        {action && <div className="md:col-span-4 md:flex md:justify-end">{action}</div>}
      </div>
    </header>
  );
}

export function Section({ id, title, intro, children, className }: { id?: string; title?: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={id && title ? `${id}-h` : undefined} className={className ?? "py-14 md:py-20"}>
      <div className="container-site">
        {title && (
          <div className="mb-8 max-w-3xl">
            <h2 id={id ? `${id}-h` : undefined} className="h-section">
              {title}
            </h2>
            {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
