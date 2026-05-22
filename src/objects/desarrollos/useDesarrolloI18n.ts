import {useMemo} from "react";
import {getDesarrolloData, useTranslation} from "../../i18n";

type Lang = "en" | "es";

function toKebabCase(value: string) {
    return value
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();
}

function toCompact(value: string) {
    return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function buildKeyCandidates(desarrolloKey: string) {
    const kebab = toKebabCase(desarrolloKey);
    const compact = toCompact(desarrolloKey);
    const candidates = [desarrolloKey, kebab, compact, desarrolloKey.toLowerCase()]
        .filter(Boolean);

    return [...new Set(candidates)];
}

function getNestedValue(source: unknown, path: string): unknown {
    if (!source || typeof source !== "object") return undefined;
    const keys = path.split(".");
    let cur: unknown = source;
    for (const key of keys) {
        if (cur && typeof cur === "object" && key in (cur as Record<string, unknown>)) {
            cur = (cur as Record<string, unknown>)[key];
            continue;
        }
        return undefined;
    }
    return cur;
}

function resolveArrayValue(value: unknown): string[] {
    if (Array.isArray(value)) {
        return value.filter((item): item is string => typeof item === "string");
    }
    if (value && typeof value === "object") {
        return Object.entries(value as Record<string, unknown>)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([, item]) => item)
            .filter((item): item is string => typeof item === "string");
    }
    return [];
}

export function getDesarrolloI18n(desarrolloKey: string, lang: Lang) {
    const keyCandidates = buildKeyCandidates(desarrolloKey);
    const fallbackLang: Lang = lang === "es" ? "en" : "es";

    const recordsByLang: Record<Lang, Array<Record<string, unknown>>> = {
        [lang]: [],
        [fallbackLang]: [],
    } as Record<Lang, Array<Record<string, unknown>>>;

    for (const candidate of keyCandidates) {
        const current = getDesarrolloData(candidate, lang);
        if (current && typeof current === "object") {
            recordsByLang[lang].push(current as Record<string, unknown>);
        }
        const fallback = getDesarrolloData(candidate, fallbackLang);
        if (fallback && typeof fallback === "object") {
            recordsByLang[fallbackLang].push(fallback as Record<string, unknown>);
        }
    }

    const resolvePath = (field: string, fallback?: string | null) => {
        for (const record of recordsByLang[lang]) {
            const value = getNestedValue(record, field);
            if (value !== undefined && value !== null) return value;
        }
        for (const record of recordsByLang[fallbackLang]) {
            const value = getNestedValue(record, field);
            if (value !== undefined && value !== null) return value;
        }
        return fallback !== undefined ? fallback : null;
    };

    const getLocalizedField = (field: string, fallback?: string) => {
        const value = resolvePath(field, fallback ?? null);
        if (value === null) return fallback !== undefined ? fallback : `desarrollos.${desarrolloKey}.${field}`;
        return value as string;
    };

    const getLocalizedArray = (field: string, fallback: string[] = []) => {
        const directValue = resolvePath(field, null);
        const parsed = resolveArrayValue(directValue);
        if (parsed.length > 0) return parsed;

        const indexed: string[] = [];
        let index = 0;
        let item = resolvePath(`${field}.${index}`, null);

        while (item !== null) {
            if (typeof item === "string") indexed.push(item);
            index++;
            item = resolvePath(`${field}.${index}`, null);
        }

        return indexed.length > 0 ? indexed : fallback;
    };

    return {
        getLocalizedField,
        getLocalizedArray,
        lang
    };
}

export function useDesarrolloI18n(desarrolloKey: string) {
    const {lang} = useTranslation();
    return useMemo(() => getDesarrolloI18n(desarrolloKey, lang), [desarrolloKey, lang]);
}

