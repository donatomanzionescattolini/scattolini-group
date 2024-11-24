import {traits} from "./ProjectParams.tsx";
import React, {JSX, ReactNode} from "react";
import {Area} from "../areas/Area.tsx";

class Constructora {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString() {
        return this.name! || "";
    }
}

interface ProjectRangeVal {
    start: number;
    end: number;
}

export default class Project {
    area?: Area;
    numberOfFloors?: number | undefined;
    name?: string;
    traits?: traits | React.ReactNode | React.JSX.Element;
    introduction?: string[];
    title?: string | JSX.Element;
    subtitle?: string | JSX.Element;
    amenities?: string[] | Map<string, string[]>;
    banner?: boolean;
    video?: HTMLVideoElement | HTMLIFrameElement;
    residencias?: string[] | Map<String, string[]>;
    numberOfImages?: number;
    yearOfCompletion?: number;
    piesCuadrados?: number | { start?: number; end?: number } | string;
    address?: string | ReactNode;
    numberOfUnits?: number;
    typeOfUnits?: string;
    numberOfModels?: string | number;
    constructora?: string | Constructora;
    numberOfBathrooms?: number | string | ProjectRangeVal;
    numberOfRooms?: number | { start?: number; end?: number } | string;
    numberOfParkingSpots?: number | { start?: number; end?: number } | string;


    constructor(
        area: Area,
        numberOfFloors?: number,
        name?: string,
        traits?: traits | React.ReactNode | React.JSX.Element,
        introduction?: string[],
        title?: string | JSX.Element,
        subtitle?: string | JSX.Element,
        amenities?: string[] | Map<string, string[]>,
        banner?: boolean,
        video?: HTMLVideoElement | HTMLIFrameElement,
        residencias?: string[] | Map<String, string[]>,
        numberOfImages?: number,
        yearOfCompletion?: number,
        piesCuadrados?: number | { start: number; end: number } | string,
        address?: string | React.ReactNode,
        numberOfUnits?: number,
        typeOfUnits?: string,
        numberOfModels?: string | number,
        constructora?: string | Constructora,
        numberOfBathrooms?: number | string | ProjectRangeVal,
        numberOfRooms?: number | { start: number; end: number } | string,
        numberOfParkingSpots?: number | { start: number; end: number } | string,
        displayAmenidades?: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>
    ) {
        if (area !== undefined) this.area = area;
        if (numberOfFloors !== undefined) this.numberOfFloors = numberOfFloors;
        if (name !== undefined) this.name = name;
        if (traits !== undefined) this.traits = traits;
        if (introduction !== undefined) this.introduction = introduction;
        if (title !== undefined) this.title = title;
        if (subtitle !== undefined) this.subtitle = subtitle;
        if (amenities !== undefined) this.amenities = amenities;
        if (banner !== undefined) this.banner = banner;
        if (video !== undefined) this.video = video;
        if (residencias !== undefined) this.residencias = residencias;
        if (numberOfImages !== undefined) this.numberOfImages = numberOfImages;
        if (yearOfCompletion !== undefined) this.yearOfCompletion = yearOfCompletion;
        if (piesCuadrados !== undefined) this.piesCuadrados = piesCuadrados;
        if (address !== undefined) this.address = address;
        if (numberOfUnits !== undefined) this.numberOfUnits = numberOfUnits;
        if (typeOfUnits !== undefined) this.typeOfUnits = typeOfUnits;
        if (numberOfModels !== undefined) this.numberOfModels = numberOfModels;
        if (constructora !== undefined) this.constructora = constructora;
        if (numberOfBathrooms !== undefined) this.numberOfBathrooms = numberOfBathrooms;
        if (numberOfRooms !== undefined) this.numberOfRooms = numberOfRooms;
        if (numberOfParkingSpots !== undefined) this.numberOfParkingSpots = numberOfParkingSpots;
        if (displayAmenidades !== undefined) this.displayAmenidades = displayAmenidades;
    }

    displayAmenidades =
        () => {


            let el: ReactNode = <></>;
            const els: ReactNode[] = [];
            if (this.amenities instanceof Array) {
                this.amenities.forEach((a) => els.push(<li>{a}</li>));
                el = <ul>{els as ReactNode}</ul>;
            } else if (this.amenities instanceof Map) {
                this.amenities.forEach((am: string[], type: string) => {
                    const amenidadesItem = am.map((a) => <li>{a}</li>);
                    els.push(
                        <>
                            <dt>{type}</dt>
                            <dd>
                                <ul>{amenidadesItem as ReactNode}</ul>
                            </dd>
                        </>
                    );
                });
                el = <dl>{els}</dl>;
                return el;

            } else {
                return this.amenities;
            }
        }

    numberOfUnitsDisplay() {
        return this.numberOfUnits + " " + this.typeOfUnits;
    }

    displayCaracteristicasEdificio() {
        return (
            <dl>
                <dt>Ubicación</dt>
                <dd>{this.address}</dd>
                {this.constructora && <>
                    <dt>Constructora</dt>
                    <dd>{this.constructora.toString()}</dd>
                </>}
                <dt>Año de Construcción</dt>
                <dd>{this.yearOfCompletion}</dd>
                {this.piesCuadrados && <>
                    <dt>Tamaño de viviendas en pies cuadrados</dt>
                    <dd>{this.piesCuadrados as string}</dd>
                </>}
                {this.numberOfModels && <>
                    <dt>Modelos</dt>
                    <dd>{this.numberOfModels}</dd>
                </>}
                <dt>Número de viviendas</dt>
                <dd>{this.numberOfUnits}</dd>
                <dt>Tipo de viviendas</dt>
                <dd>{this.typeOfUnits}</dd>
                <dt>Número de cuartos</dt>
                <dd>
                    {typeof this.numberOfRooms === "number" ||
                    typeof this.numberOfRooms === "string"
                        ? this.numberOfRooms
                        : (this.numberOfRooms as ProjectRangeVal).start + " a " + (this.numberOfRooms as ProjectRangeVal).end}
                </dd>
                <dt>Número de baños</dt>
                {this.numberOfBathrooms && <>
                    <dd>
                        {((typeof this.numberOfBathrooms === "string" ||
                                    typeof this.numberOfBathrooms === "number") &&
                                this.numberOfBathrooms) ||
                            (this.numberOfBathrooms as ProjectRangeVal).start +
                            " a " +
                            (this
                                .numberOfBathrooms as ProjectRangeVal ["end"])}
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
                    {[...this.residencias!.keys()].map((k: String) => <>
                            <dt>{k}</dt>
                            <dd>
                                <ul>
                                    {(this.residencias! as Map<string, string[]>)!.get(String(k))!.map((r) => (
                                        <li>{r}</li>
                                    ))}
                                </ul>
                            </dd>
                        </>
                    )}
                </dl>
            );
        }
    }

    createCaracteristicas()
        :
        React.ReactNode | traits {
        return {
            residences: <>{this.displayCaracteristicasResidencias()}</>,
            building: <>{this.displayCaracteristicasEdificio()}</>,
            amenities: <>{this.displayAmenidades()}</>,
        };
    }
}
