import {caracteristicas} from "./ProjectParams.tsx";
import React, {ReactNode} from "react";
import {Area} from "../areas/Area.tsx";


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

    residencias?: string[];
    numberOfImages?: number;
    edificio: { añoDeConstrucciónOFinalización: number, piesCuadrados: number | number[], ubicación: string | ReactNode, numberOfUnits: number, typeOfUnits: string, numberOfModels: string | number, constructora: string | Constructora, numberOfBathrooms: number | string | { start: number, end: number }, numberOfRooms: number | { start: number, end: number } | string };
    direccion: string;

    constructor(area?: Area) {
        this.area = area;
    }

    displayAmenidades() {
        let el: ReactNode = <></>;
        const els: ReactNode[] = [];
        if (this.amenidades instanceof Array) {
            this.amenidades.forEach(a => els.push(<li>{a}</li>));
            el = <ul>{els}</ul>

        } else if (this.amenidades instanceof Map) {

            this.amenidades.forEach((am: string[], type: string) => {
                const amenidadesItem = am.map(a => <li>{a}</li>);
                els.push(<>
                    <dt>{type}</dt>
                    <dd>
                        <ul>{amenidadesItem}</ul>
                    </dd>
                </>);


            })
            el = <dl>{els}</dl>;


        }
        return el;

    }

    numberOfUnitsDisplay() {
        return this.edificio.numberOfUnits + " " + this.edificio.typeOfUnits
    }

    displayCaracteristicasEdificio() {
        return <dl>
            <dt>Ubicación</dt>
            <dd>{this.edificio.ubicación}</dd>
            <dt>Constructora</dt>
            <dd>{this.edificio.constructora.toString()}</dd>
            <dt>Año de Construcción</dt>
            <dd>{this.edificio.añoDeConstrucciónOFinalización}</dd>
            <dt>Tamaño de viviendas en pies cuadrados</dt>
            <dd>{this.edificio.piesCuadrados}</dd>
            <dt>Modelos</dt>
            <dd>{this.edificio.numberOfModels}</dd>
            <dt>Número de viviendas</dt>
            <dd>{this.edificio.numberOfUnits}</dd>
            <dt>Tipo de viviendas</dt>
            <dd>{this.edificio.typeOfUnits}</dd>
            <dt>Número de cuartos</dt>
            <dd>{((typeof this.edificio.numberOfRooms === 'number' || typeof this.edificio.numberOfRooms === 'string') ? this.edificio.numberOfRooms : this.edificio.numberOfRooms["start"] + " a " + this.edificio.numberOfRooms["end"])}</dd>
            <dt>Número de baños</dt>
            <dd>{this.edificio.numberOfBathrooms["start"] + " a " + this.edificio.numberOfBathrooms["end"]}</dd>
        </dl>


    }
}

export default Desarrollo;
