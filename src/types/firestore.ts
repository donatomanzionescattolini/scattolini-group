// Type definitions for Firestore documents

export interface DesarrolloDocument {
  id: string;
  nombre?: string;
  titulo?: string | { es: string; en: string };
  slogan?: string | { es: string; en: string };
  introduccion?: string[] | { es: string[]; en: string[] };
  ubicacion?: string;
  ubicación?: string;
  numberOfUnits?: number;
  numberOfFloors?: number;
  numberOfImages?: number | string;
  estimatedCompletionYear?: string | number;
  area?: {
    name: string;
    titulo?: string;
  };
  [key: string]: any; // For additional dynamic properties
}

export interface AreaDocument {
  id: string;
  name: string;
  titulo?: string | { es: string; en: string };
  slogan?: string | { es: string; en: string };
  descripcion?: string[] | { es: string[]; en: string[] };
  numberOfImages?: number;
  [key: string]: any; // For additional dynamic properties
}
