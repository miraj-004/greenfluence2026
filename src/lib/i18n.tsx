import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "bn";
export type L = { en: string; bn: string };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

const KEY = "gf-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "bn" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  const t = useCallback((v: L) => v[ctx.lang], [ctx.lang]);
  return { ...ctx, t };
}
