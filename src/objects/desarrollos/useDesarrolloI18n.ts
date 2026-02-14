import { useTranslation, getTranslation } from "../../i18n";

export function getDesarrolloI18n(desarrolloKey: string, lang: "en" | "es") {
  const getLocalizedField = (field: string, fallback?: string) => {
    return getTranslation(`desarrollos.${desarrolloKey}.${field}`, lang, fallback) as string;
  };
  
  const getLocalizedArray = (field: string, fallback: string[] = []) => {
    const result = [];
    let index = 0;
    let item = getTranslation(`desarrollos.${desarrolloKey}.${field}.${index}`, lang, null);
    
    while (item !== null) {
      result.push(item as string);
      index++;
      item = getTranslation(`desarrollos.${desarrolloKey}.${field}.${index}`, lang, null);
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
