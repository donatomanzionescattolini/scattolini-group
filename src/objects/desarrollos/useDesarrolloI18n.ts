import { useTranslation, getTranslation } from "../../i18n";

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

export function getDesarrolloI18n(desarrolloKey: string, lang: "en" | "es") {
  const keyCandidates = buildKeyCandidates(desarrolloKey);

  const resolvePath = (field: string, fallback?: string | null) => {
    for (const candidate of keyCandidates) {
      const value = getTranslation(`desarrollos.${candidate}.${field}`, lang, null);
      if (value !== null && value !== `desarrollos.${candidate}.${field}`) {
        return value;
      }
    }
    return fallback !== undefined ? fallback : null;
  };

  const getLocalizedField = (field: string, fallback?: string) => {
    const value = resolvePath(field, fallback ?? null);
    if (value === null) return fallback !== undefined ? fallback : `desarrollos.${desarrolloKey}.${field}`;
    return value as string;
  };
  
  const getLocalizedArray = (field: string, fallback: string[] = []) => {
    const result: string[] = [];
    let index = 0;
    let item = resolvePath(`${field}.${index}`, null);
    
    while (item !== null) {
      result.push(item as string);
      index++;
      item = resolvePath(`${field}.${index}`, null);
    }
    
    return result.length > 0 ? result : fallback;
  };
  
  return {
    getLocalizedField,
    getLocalizedArray,
    lang
  };
}

export function useDesarrolloI18n(desarrolloKey: string) {
  const { lang } = useTranslation();
  return getDesarrolloI18n(desarrolloKey, lang);
}
