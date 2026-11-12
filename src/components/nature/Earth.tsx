import { useState } from "react";
import { useLang, type L } from "@/lib/i18n";

const SPOTS: { id: string; x: number; y: number; label: L }[] = [
  { id: "salinity", x: 88, y: 150, label: { en: "Coastal salinity damaging farms and drinking water", bn: "উপকূলীয় লবণাক্ততায় কৃষি ও খাবার পানির ক্ষতি" } },
  { id: "sundarbans", x: 64, y: 138, label: { en: "Protecting the Sundarbans mangroves", bn: "সুন্দরবনের ম্যানগ্রোভ রক্ষা" } },
  { id: "erosion", x: 96, y: 92, label: { en: "River erosion displacing families", bn: "নদীভাঙনে পরিবার বাস্তুচ্যুত" } },
  { id: "air", x: 104, y: 112, label: { en: "Dhaka’s air quality and brick kilns", bn: "ঢাকার বায়ুমান ও ইটভাটা" } },
  { id: "plastic", x: 120, y: 124, label: { en: "Plastic waste in rivers and canals", bn: "নদী ও খালে প্লাস্টিক বর্জ্য" } },
  { id: "textile", x: 78, y: 112, label: { en: "Textile and dyeing wastewater", bn: "টেক্সটাইল ও ডাইং কারখানার বর্জ্য পানি" } },
  { id: "arsenic", x: 58, y: 96, label: { en: "Arsenic in groundwater", bn: "ভূগর্ভস্থ পানিতে আর্সেনিক" } },
  { id: "floods", x: 136, y: 62, label: { en: "Flash floods in Sylhet and the haor", bn: "সিলেট ও হাওরে আকস্মিক বন্যা" } },
  { id: "shipbreaking", x: 150, y: 128, label: { en: "Ship-breaking pollution in Chattogram", bn: "চট্টগ্রামে জাহাজভাঙা শিল্পের দূষণ" } },
  { id: "cyclone", x: 118, y: 166, label: { en: "Cyclones and sea-level rise in the Bay of Bengal", bn: "বঙ্গোপসাগরে ঘূর্ণিঝড় ও সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি" } },
  { id: "farming", x: 74, y: 60, label: { en: "Drought and sustainable farming in the north", bn: "উত্তরাঞ্চলে খরা ও টেকসই কৃষি" } },
  { id: "hills", x: 166, y: 100, label: { en: "Deforestation in the Chittagong Hill Tracts", bn: "পার্বত্য চট্টগ্রামে বন উজাড়" } },
];

const LAND = "M10 60 q20 -25 45 -10 q15 10 10 30 q-10 20 -30 15 q-25 -5 -25 -35Z M90 40 q25 -10 40 5 q10 20 -10 30 q-20 5 -30 -10Z M70 120 q20 -10 35 5 q5 20 -15 25 q-20 0 -20 -30Z M150 70 q15 -5 25 10 q0 20 -15 20 q-15 -10 -10 -30Z";

/** Illustrated Earth: land slowly scrolls behind a round window; markers reveal issue themes. */
export function Earth() {
  const { t } = useLang();
  const [active, setActive] = useState<string | null>(null);
  const cur = SPOTS.find((s) => s.id === active);
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <svg viewBox="0 0 200 200" className="nature w-full" aria-hidden>
        <defs><clipPath id="gf-globe"><circle cx="100" cy="100" r="88" /></clipPath></defs>
        <circle cx="100" cy="100" r="96" className="fill-sage-soft" />
        <circle cx="100" cy="100" r="88" className="fill-ocean" />
        <g clipPath="url(#gf-globe)">
          <g className="anim-map">
            {[0, 200, 400].map((o) => <path key={o} d={LAND} transform={`translate(${o} 0)`} className="fill-hill-mid" />)}
          </g>
          <ellipse cx="72" cy="62" rx="40" ry="22" className="fill-card opacity-15" />
        </g>
        <circle cx="100" cy="100" r="88" className="fill-none stroke-card/40" strokeWidth="1" />
      </svg>
      {SPOTS.map((s) => (
        <button key={s.id} type="button" onMouseEnter={() => setActive(s.id)} onFocus={() => setActive(s.id)} onMouseLeave={() => setActive(null)} onBlur={() => setActive(null)} onClick={() => setActive(active === s.id ? null : s.id)}
          aria-label={t(s.label)} className="absolute flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{ left: `${s.x / 2}%`, top: `${s.y / 2}%` }}>
          <span className={`block size-3 rounded-full border-2 border-card bg-gold transition-ui ${active === s.id ? "scale-150" : ""}`} />
        </button>
      ))}
      <p aria-live="polite" className="mt-4 min-h-6 text-center text-sm font-semibold text-primary">{cur ? t(cur.label) : t({ en: "Tap a point on the globe", bn: "পৃথিবীর একটি বিন্দুতে চাপ দিন" })}</p>
    </div>
  );
}
