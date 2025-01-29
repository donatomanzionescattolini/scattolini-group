import {ReactNode} from "react";

export class Area {
    public slogan: string = "";
    public description: string = "";

    public numberOfImages: number = 0;
    public video?: ReactNode;
    officialName: string = "";
    private nameForProjectFolders: string;

    constructor(nameForProjectFolders?: string) {
        this.nameForProjectFolders = nameForProjectFolders as string;
    }
}

export function AreaDto(name: string) {
    return new Area(name);
}
