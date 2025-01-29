import Building from "./Building.tsx";
import {PropertyDeveloper} from "./PropertyDeveloper.tsx";
import {Architect} from "./Architect.tsx";

export default class NewDevelopment {
    constructor(building?: Building) {
        building ? this._building = building : this._building = new Building();
    }

    private _building: Building;

    get building(): Building {
        return this._building;
    }

    set building(value: Building) {
        this._building = value;
    }

    private _propertyDeveloper: PropertyDeveloper = new PropertyDeveloper();

    get propertyDeveloper(): PropertyDeveloper {
        return this._propertyDeveloper;
    }

    set propertyDeveloper(value: PropertyDeveloper) {
        this._propertyDeveloper = value;
    }

    private _architect: Architect = new Architect("Unknown Architect");

    get architect(): Architect {
        return this._architect;
    }

    set architect(value: Architect) {
        this._architect = value;
    }

    private _officialName: string = "";

    get officialName(): string {
        return this._officialName;
    }

    set officialName(value: string) {
        this._officialName = value;
    }

    private _numberOfImages: number = 0;

    get numberOfImages(): number {
        return this._numberOfImages;
    }

    set numberOfImages(value: number) {
        this._numberOfImages = value;
    }

    private _banner: boolean = true;

    get banner(): boolean {
        return this._banner;
    }

    set banner(value: boolean) {
        this._banner = value;
    }

    private _summary: string = ``;

    get summary(): string {
        return this._summary;
    }

    set summary(value: string) {
        this._summary = value;
    }


}












