import { ReactNode } from "react";

export class Area {
  public name: string;
  public titulo: string;
  public slogan: string;
  public descripcion: Array<string>;

  public numberOfImages: number;
  public video?: ReactNode;

  constructor(name: string) {
    this.name = name;
  }
}

export function AreaDto(name: string) {
  return new Area(name);
}
