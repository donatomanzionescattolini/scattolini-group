import {Area} from "../areas/Area.tsx";
import {caracteristicas} from "../desarrollos/ProjectParams.tsx";
import React from "react";

export class Desarrollo {
    private _area?: Area;

    get area(): Area {
        return this._area;
    }

    set area(value: Area) {
        this._area = value;
    }

    private _nombre: string;

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    private _caracteristicas: caracteristicas | React.ReactNode;

    get caracteristicas(): caracteristicas | React.ReactNode {
        return this._caracteristicas;
    }

    set caracteristicas(value: caracteristicas | React.ReactNode) {
        this._caracteristicas = value;
    }

    private _introduccion: string[];

    get introduccion(): string[] {
        return this._introduccion;
    }

    set introduccion(value: string[]) {
        this._introduccion = value;
    }

    private _titulo: string | JSX.Element;

    get titulo(): string | JSX.Element {
        return this._titulo;
    }

    set titulo(value: string | JSX.Element) {
        this._titulo = value;
    }

    private _subtitulo: string | JSX.Element;

    get subtitulo(): string | JSX.Element {
        return this._subtitulo;
    }

    set subtitulo(value: string | JSX.Element) {
        this._subtitulo = value;
    }

    private _direccion?: string;

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    private _numberOfImages: number;

    get numberOfImages(): number {
        return this._numberOfImages;
    }

    set numberOfImages(value: number) {
        this._numberOfImages = value;
    }

    private _video?: JSX.Element | string;

    get video(): JSX.Element | string {
        return this._video;
    }

    set video(value: JSX.Element | string) {
        this._video = value;
    }

    private _banner?: boolean;

    get banner(): boolean {
        return this._banner;
    }

    set banner(value: boolean) {
        this._banner = value;
    }


}
