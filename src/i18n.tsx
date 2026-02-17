

import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";
import esTranslations from "./locales/es.json";
import enTranslations from "./locales/en.json";

type Lang = "es" | "en";

type Translations = {
    [key: string]: string | string[] | Translations;
};

const translations: Record<Lang, any> = {
    es: esTranslations,
    en: enTranslations,
};

interface I18nContextValue {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (path: string, fallback?: string | null) => string | string[] | null;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function TranslationProvider({children, defaultLang = "es" as Lang}: {
    children: ReactNode;
    defaultLang?: Lang
}) {
    const initial = ((): Lang => {
        try {
            const saved = localStorage.getItem("scattolini_lang");
            if (saved === "en" || saved === "es") return saved;
        } catch (e) {
            /* ignore */
        }
        return defaultLang;
    })();

    const [lang, setLangState] = useState<Lang>(initial);

    useEffect(() => {
        try {
            localStorage.setItem("scattolini_lang", lang);
        } catch (e) {
            // ignore
        }
        // update document lang attribute for SEO/accessibility
        try {
            document.documentElement.lang = lang;
        } catch (e) {
            // ignore (SSR or unavailable)
        }
    }, [lang]);

    const t = useMemo(() => {
        return (path: string, fallback?: string | null): string | string[] | null => {
            const keys = path.split(".");
            let cur: any = translations[lang];
            for (const k of keys) {
                if (cur && typeof cur === "object" && k in cur) {
                    cur = cur[k];
                } else {
                    return fallback !== undefined ? (fallback as string) : path;
                }
            }
            if (cur === null) return null;
            return (typeof cur === "string" || Array.isArray(cur)) ? cur : (fallback !== undefined ? (fallback as string) : path);
        };
    }, [lang]);

    const setLang = (l: Lang) => setLangState(l);
    const value = useMemo(() => ({lang, setLang, t}), [lang, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function getTranslation(path: string, lang: Lang, fallback?: string | null): string | string[] | null {
    const keys = path.split(".");
    let cur: any = translations[lang];
    for (const k of keys) {
        if (cur && typeof cur === "object" && k in cur) {
            cur = cur[k];
        } else {
            return fallback !== undefined ? (fallback as string) : path;
        }
    }
    if (cur === null) return null;
    return (typeof cur === "string" || Array.isArray(cur)) ? cur : (fallback !== undefined ? (fallback as string) : path);
}

export function useTranslation() {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useTranslation must be used within TranslationProvider");
    }
    return {t: ctx.t, lang: ctx.lang, setLang: ctx.setLang};
}

export function getDesarrolloData(desarrolloKey: string, lang: Lang) {
    const desarrolloData = translations[lang].desarrollos?.[desarrolloKey];
    return desarrolloData || null;
}
