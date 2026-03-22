import {Area} from "../models/areas/Area";
import Desarrollo from "../models/desarrollos/Desarrollo";
import {getDesarrolloData} from "../i18n";
import {desarrolloMap} from "../objects/desarrollos/Desarrollos";
import {sanitizeForFirestore, serializeArea, serializeDesarrollo} from "./database";

type Lang = "es" | "en";
type LocalizedValue<T extends string | string[]> = T | { es: T; en: T };

export interface SeedDocument<T extends Record<string, any> = Record<string, any>> {
    id: string;
    data: T;
}

function toSlug(value: string): string {
    return decodeURIComponent(String(value || ""))
        .trim()
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase();
}

function normalizeTranslatedValue<T extends string | string[]>(value: unknown): T | undefined {
    if (typeof value === "string") {
        const trimmed = value.trim();
        if (!trimmed || trimmed.toLowerCase() === "latest") return undefined;
        return trimmed as T;
    }

    if (Array.isArray(value)) {
        const filtered = value
            .filter((item): item is string => typeof item === "string")
            .map((item) => item.trim())
            .filter((item) => Boolean(item) && item.toLowerCase() !== "latest");

        return (filtered.length > 0 ? filtered : undefined) as T | undefined;
    }

    return undefined;
}

function buildLocalizedField<T extends string | string[]>(desarrolloKey: string, field: string, fallback?: T): LocalizedValue<T> | undefined {
    const esData = getDesarrolloData(desarrolloKey, "es") as Record<string, unknown> | null;
    const enData = getDesarrolloData(desarrolloKey, "en") as Record<string, unknown> | null;

    const esValue = normalizeTranslatedValue<T>(esData?.[field]) ?? fallback;
    const enValue = normalizeTranslatedValue<T>(enData?.[field]) ?? esValue ?? fallback;

    if (esValue === undefined && enValue === undefined) return undefined;
    if (esValue !== undefined && enValue !== undefined) {
        if (JSON.stringify(esValue) === JSON.stringify(enValue)) {
            return esValue;
        }
        return {es: esValue, en: enValue};
    }
    return esValue ?? enValue;
}

function createStaticDesarrollo(item: ((lang: Lang) => Desarrollo) | Desarrollo, area: Area, lang: Lang = "es"): Desarrollo {
    const instance = typeof item === "function"
        ? (item as (selectedLang: Lang) => Desarrollo)(lang)
        : item;

    instance.area = area;
    return instance;
}

export function getLegacyAreas(): Area[] {
    const uniqueAreas = new Map<string, Area>();
    desarrolloMap.forEach((entry) => {
        if (!uniqueAreas.has(entry.area.name)) {
            uniqueAreas.set(entry.area.name, entry.area);
        }
    });
    return Array.from(uniqueAreas.values());
}

export function getLegacyDesarrollos(lang: Lang = "es"): Desarrollo[] {
    return desarrolloMap.flatMap((entry) =>
        [...entry.des].map((item) => createStaticDesarrollo(item, entry.area, lang))
    );
}

export function createLegacyAreaSeedDocuments(): SeedDocument[] {
    return getLegacyAreas().map((area) => ({
        id: area.name,
        data: {
            ...serializeArea(area),
            slug: toSlug(area.name),
            source: "legacy-static-file",
        },
    }));
}

export function createLegacyDesarrolloSeedDocuments(): SeedDocument[] {
    return getLegacyDesarrollos("es").map((desarrollo) => {
        const area = desarrollo.area as Area;
        const serialized = serializeDesarrollo(desarrollo);
        const localizedTitulo = buildLocalizedField<string>(desarrollo.nombre, "titulo", serialized.titulo);
        const localizedSlogan = buildLocalizedField<string>(desarrollo.nombre, "slogan", serialized.slogan);
        const localizedSubtitulo = buildLocalizedField<string>(desarrollo.nombre, "subtitulo");
        const localizedIntroduccion = buildLocalizedField<string[]>(desarrollo.nombre, "introduccion", serialized.introduccion);
        const localizedUbicacion = buildLocalizedField<string>(desarrollo.nombre, "ubicacion", serialized.ubicacion ?? serialized["ubicación"]);

        return {
            id: String(desarrollo.nombre || "").trim(),
            data: sanitizeForFirestore({
                ...serialized,
                titulo: localizedTitulo ?? serialized.titulo,
                slogan: localizedSlogan ?? serialized.slogan,
                subtitulo: localizedSubtitulo ?? serialized.subtitulo,
                introduccion: localizedIntroduccion ?? serialized.introduccion,
                ubicacion: localizedUbicacion ?? serialized.ubicacion ?? serialized["ubicación"],
                areaName: area?.name || serialized.areaName,
                area: area ? serializeArea(area) : serialized.area,
                slug: toSlug(desarrollo.nombre),
                source: "legacy-static-file",
            }),
        };
    }).filter((entry) => entry.id && entry.data);
}

export function getLegacyContentSummary() {
    const areas = createLegacyAreaSeedDocuments();
    const desarrollos = createLegacyDesarrolloSeedDocuments();

    return {
        areaCount: areas.length,
        desarrolloCount: desarrollos.length,
        areas,
        desarrollos,
    };
}

