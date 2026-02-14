import { ReactNode } from "react";

export class Area {
  public name: string;
  public titulo: string | { es: string, en: string };
  public slogan: string | { es: string, en: string };
  public descripcion: Array<string> | { es: Array<string>, en: Array<string> };

  public numberOfImages: number;
  public video?: ReactNode;

  constructor(name: string) {
    this.name = name;
  }
}

export function AreaDto(name: string) {
  return new Area(name);
}
