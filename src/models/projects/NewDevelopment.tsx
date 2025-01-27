import Building from "./Building.tsx";
import {PropertyDeveloper} from "./PropertyDeveloper.tsx";
import {Architect} from "./Architect.tsx";

export default class NewDevelopment {
    private _building: Building;
    private _propertyDeveloper: PropertyDeveloper = new PropertyDeveloper();

    get building(): Building {
        return this._building;
    }

    set building(value: Building) {
        this._building = value;
    }

    get propertyDeveloper(): PropertyDeveloper {
        return this._propertyDeveloper;
    }

    set propertyDeveloper(value: PropertyDeveloper) {
        this._propertyDeveloper = value;
    }

    get architect(): Architect {
        return this._architect;
    }

    set architect(value: Architect) {
        this._architect = value;
    }

    get officialName(): string {
        return this._officialName;
    }

    set officialName(value: string) {
        this._officialName = value;
    }

    get numberOfImages(): number {
        return this._numberOfImages;
    }

    set numberOfImages(value: number) {
        this._numberOfImages = value;
    }

    get banner(): boolean {
        return this._banner;
    }

    set banner(value: boolean) {
        this._banner = value;
    }

    get summary(): string {
        return this._summary;
    }

    set summary(value: string) {
        this._summary = value;
    }

    private _architect:Architect = new Architect("Unknown Architect");

    constructor(building?: Building) {
        building ?  this._building = building : this._building = new Building();
    }

    private _officialName:string = "";
    private _numberOfImages: number = 0;
    private _banner: boolean = true;
    private _summary: string = ``;






}












