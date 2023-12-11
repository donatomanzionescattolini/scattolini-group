import {caracteristicas} from "./ProjectParams.tsx";
import React, {ReactNode} from "react";
import {Area} from "../areas/Area.tsx";


class Desarrollo {
    public area!: Area;


    public nombre: string;


    public caracteristicas: caracteristicas | React.ReactNode;


    public introduccion: string[];


    public titulo: string | JSX.Element;


    public subtitulo: string | JSX.Element;


    public direccion?: string;

    public numberOfImages: number;
    public banner?: boolean;
    video?: ReactNode;

    constructor() {

    }


}

export default Desarrollo;
