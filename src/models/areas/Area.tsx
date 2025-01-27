import {ReactNode} from "react";

export class Area {
    public slogan: string = "";
    public description: string = "";

    public numberOfImages: number=0;
    public video?: ReactNode;
    private nameForProjectFolders: string;
    officialName:string = "";

    constructor(nameForProjectFolders?: string) {
        this.nameForProjectFolders =nameForProjectFolders as string;
    }
}

export function AreaDto(name: string) {
    return new Area(name);
}
