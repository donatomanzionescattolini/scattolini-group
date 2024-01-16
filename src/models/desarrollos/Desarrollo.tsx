import { caracteristicas } from "./ProjectParams.tsx";
import React, { ReactNode } from "react";
import { Area } from "../areas/Area.tsx";

class Constructora {
  public name: string;

  constructor(name?: string) {
    this.name = name;
  }

  toString() {
    return this.name! || "";
  }
}

class Desarrollo {
  public area: Area;

  public nombre: string;

  public caracteristicas: caracteristicas | React.ReactNode;

  public introduccion: string[];

  public titulo: string | JSX.Element;

  public subtitulo: string | JSX.Element;

  public amenidades?: string[] | Map<string, string[]>;
  public banner?: boolean;
  video?: ReactNode;

  residencias?: string[] | Map<String, string[]>;
  numberOfImages?: number;
  edificio: {
    añoDeConstrucciónOFinalización: number;
    piesCuadrados: number | number[];
    ubicación: string | ReactNode;
    numberOfUnits: number;
    typeOfUnits: string;
    numberOfModels: string | number;
    constructora: string | Constructora;
    numberOfBathrooms: number | string | { start: number; end: number };
    numberOfRooms: number | { start: number; end: number } | string;
  };
  direccion: string;
  añoDeConstrucciónOFinalización: number;
  piesCuadrados: number | { start: number; end: number } | string;
  ubicación: string | ReactNode;
  numberOfUnits: number;
  typeOfUnits: string;
  numberOfModels: string | number;
  constructora: string | Constructora;
  numberOfBathrooms: number | string | { start: number; end: number };
  numberOfRooms: number | { start: number; end: number } | string;
  numberOfParkingSpots: number | { start: number; end: number } | string;
  constructor(area?: Area) {
    this.area = area;
  }

  displayAmenidades() {
    let el: ReactNode = <></>;
    const els: ReactNode[] = [];
    if (this.amenidades instanceof Array) {
      this.amenidades.forEach((a) => els.push(<li>{a}</li>));
      el = <ul>{els}</ul>;
    } else if (this.amenidades instanceof Map) {
      this.amenidades.forEach((am: string[], type: string) => {
        const amenidadesItem = am.map((a) => <li>{a}</li>);
        els.push(
          <>
            <dt>{type}</dt>
            <dd>
              <ul>{amenidadesItem}</ul>
            </dd>
          </>
        );
      });
      el = <dl>{els}</dl>;
    }
    return el;
  }

  numberOfUnitsDisplay() {
    return this.numberOfUnits + " " + this.typeOfUnits;
  }

  displayCaracteristicasEdificio() {
    return (
      <dl>
        <dt>Ubicación</dt>
        <dd>{this.ubicación}</dd>
        {this.constructora &&<>   <dt>Constructora</dt>
       <dd>{this.constructora.toString()}</dd></>}
        <dt>Año de Construcción</dt>
        <dd>{this.añoDeConstrucciónOFinalización}</dd>
        {this.piesCuadrados &&  <><dt>Tamaño de viviendas en pies cuadrados</dt>
        <dd>{this.piesCuadrados as string}</dd></>}
        {this.numberOfModels && <><dt>Modelos</dt>
        <dd>{this.numberOfModels}</dd></>}
        <dt>Número de viviendas</dt>
        <dd>{this.numberOfUnits}</dd>
        <dt>Tipo de viviendas</dt>
        <dd>{this.typeOfUnits}</dd>
        <dt>Número de cuartos</dt>
        <dd>
          {typeof this.numberOfRooms === "number" ||
          typeof this.numberOfRooms === "string"
            ? this.numberOfRooms
            : this.numberOfRooms["start"] + " a " + this.numberOfRooms["end"]}
        </dd>
        <dt>Número de baños</dt>
     {this.numberOfBathrooms && <>   <dd>
          {((typeof this.numberOfBathrooms === "string" ||
            typeof this.numberOfBathrooms === "number") &&
            this.numberOfBathrooms) ||
            this.numberOfBathrooms["start"] +
              " a " +
              this.numberOfBathrooms["end"]}
        </dd>
     </>}
      </dl>
    );
  }
  displayCaracteristicasResidencias() {
    if (this.residencias instanceof Array) {
      return (
        <ul>
          {this.residencias.map((r) => (
            <>
              <li>{r}</li>
            </>
          ))}
        </ul>
      );
    } else {
      return (
        <dl>
          {[...this.residencias.keys()].map((k: string) => (
            <>
              <dt>{k}</dt>
              <dd>
                <ul>
                  {(this.residencias as Map<string, string[]>)
                    .get(k)
                    .map((r) => (
                      <li>{r}</li>
                    ))}
                </ul>
              </dd>
            </>
          ))}
        </dl>
      );
    }
  }
  createCaracteristicas(): React.ReactNode | caracteristicas {
    return {
      residencias: <>{this.displayCaracteristicasResidencias()}</>,
      edificio: <>{this.displayCaracteristicasEdificio()}</>,
      amenidades: <>{this.displayAmenidades()}</>,
    };
  }
}

export default Desarrollo;
