import {Area} from "../areas/Area.tsx";
import {Miami} from "../../objects/areas/Miami.tsx";
import { DoubleRange } from "typescript/lib/lib.dom";
import {types} from "sass";
import Number = types.Number;



export default  class Building {
    get area(): Area {
        return this._area;
    }

    set area(value: Area) {
        this._area = value;
    }

    get numberOfFloors(): number {
        return this._numberOfFloors;
    }

    set numberOfFloors(value: number) {
        this._numberOfFloors = value;
    }

    get numberOfUnits(): number {
        return this._numberOfUnits;
    }

    set numberOfUnits(value: number) {
        this._numberOfUnits = value;
    }

    get typeOfUnits(): string {
        return this._typeOfUnits;
    }

    set typeOfUnits(value: string) {
        this._typeOfUnits = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get yearOfCompletion(): Number {
        return this._yearOfCompletion;
    }

    set yearOfCompletion(value: Number) {
        this._yearOfCompletion = value;
    }

    get sizeInSquareFeet(): DoubleRange {
        return this._sizeInSquareFeet;
    }

    set sizeInSquareFeet(value: DoubleRange) {
        this._sizeInSquareFeet = value;
    }
    constructor(area?: Area) {

        area ? this._area = area : this._area = new Area("miami");
    }

    private _area: Area = new Area(Miami().officialName);
    private _numberOfFloors: number = 0;
    private _numberOfUnits: number = 0;
    private _typeOfUnits: string = "Units";
    private _address: string = "UNKNOWN";
    private _yearOfCompletion: Number = new Number(NaN);
    private _sizeInSquareFeet: DoubleRange = new DoubleRange(NaN, NaN);

}