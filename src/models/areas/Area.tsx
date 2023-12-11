import {ReactNode} from "react";
import {getDesarrollosForArea} from "../../objects/desarrollos/GetAllDesarrollos.ts";
import Desarrollo from "../desarrollos/Desarrollo.tsx";


export class Area {

    public name: string;
    public titulo: string;
    public slogan: string;
    public descripcion: Array<string>;

    public numberOfImages: number;
    public video?: ReactNode


    constructor(name: string) {
        this.name = name;
    }
}

export function AreaDto(name:string){
    return new Area(name);

}

