import {Area} from "../../models/areas/Area";
import {desarrolloMap} from "../desarrollos/Desarrollos";

export const dynamicAreaMap = new Map<string, Area>();
export const DYNAMIC_AREAS_UPDATED_EVENT = "dynamic-areas-updated";

function emitDynamicAreasUpdated() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent(DYNAMIC_AREAS_UPDATED_EVENT));
    }
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

function hydrateArea(areaLike: Partial<Area> & { name?: string }): Area {
    const area = new Area(String(areaLike?.name || ""));
    return Object.assign(area, areaLike);
}

export function registerDynamicAreas(areas: Array<Partial<Area> & { name?: string }>, options?: { emit?: boolean }) {
    areas.forEach((areaLike) => {
        const name = String(areaLike?.name || "").trim();
        if (!name) return;
        dynamicAreaMap.set(name, hydrateArea(areaLike));
    });

    if (options?.emit !== false) {
        emitDynamicAreasUpdated();
    }
}

export function replaceDynamicAreas(areas: Array<Partial<Area> & { name?: string }>) {
    dynamicAreaMap.clear();
    registerDynamicAreas(areas, {emit: false});
    emitDynamicAreasUpdated();
}

export function findAreaBySlug(slug: string): Area | null {
    const target = toSlug(slug);
    return Areas().find((area) => toSlug(area.name) === target) || null;
}

export default function Areas() {
    const merged = new Map<string, Area>();

    [...desarrolloMap.values()].forEach((entry) => {
        merged.set(entry.area.name, hydrateArea(entry.area));
    });

    dynamicAreaMap.forEach((area, key) => {
        merged.set(key, hydrateArea(area));
    });

    return Array.from(merged.values()) as Area[];
}
