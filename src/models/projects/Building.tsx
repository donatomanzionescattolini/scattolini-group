import {Area} from "../areas/Area.tsx";
import {Miami} from "../../objects/areas/Miami.tsx";
import {types} from "sass";
import DoubleRange from "../../utils/DoubleRange";
import Number = types.Number;


export default class Building {
    constructor(area?: Area) {

        area ? this._area = area : this._area = new Area("miami");
    }

    private _area: Area = new Area(Miami().officialName);

    get area(): Area {
        return this._area;
    }

    set area(value: Area) {
        this._area = value;
    }

    private _numberOfFloors: number = 0;

    get numberOfFloors(): number {
        return this._numberOfFloors;
    }

    set numberOfFloors(value: number) {
        this._numberOfFloors = value;
    }

    private _numberOfUnits: number = 0;

    get numberOfUnits(): number {
        return this._numberOfUnits;
    }

    set numberOfUnits(value: number) {
        this._numberOfUnits = value;
    }

    private _typeOfUnits: string = "Units";

    get typeOfUnits(): string {
        return this._typeOfUnits;
    }

    set typeOfUnits(value: string) {
        this._typeOfUnits = value;
    }

    private _address: string = "UNKNOWN";

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    private _yearOfCompletion: Number = new Number(NaN);

    get yearOfCompletion(): Number {
        return this._yearOfCompletion;
    }

    set yearOfCompletion(value: Number) {
        this._yearOfCompletion = value;
    }

    private _sizeInSquareFeet: DoubleRange = new DoubleRange(NaN, NaN);

    get sizeInSquareFeet(): DoubleRange {
        return this._sizeInSquareFeet;
    }

    set sizeInSquareFeet(value: DoubleRange) {
        this._sizeInSquareFeet = value;
    }

}