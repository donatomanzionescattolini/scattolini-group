import {Area} from "./Area";

export class Desarrollo {
    area?: Area;
    private name: string;
    private address1?: string;
    private address2?: string;
    private city?: string;
    private zipCode?: string;
    private amenidades?: Array<string>;
    private numeroDePisos?: number;
    private numeroDeResidencias?: number;
    private tipoDeResidencias?: string;
    private video?: string | JSX.Element;
    private map?: JSX.Element;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress1(): string {
        return this.address1!;
    }

    public getAddress2() {
        return this.address2 ? this.address2 : "";
    }

    public getCity(): string {
        return this.city
            ? this.city
            : this.getArea()
                ? this.getArea()!.getName()
                : "";
    }

    public getZipCode(): string {
        return this.zipCode ? this.zipCode : "";
    }

    public getArea(): Area | undefined {
        return this.area ? this.area : undefined;
    }

    public getFullAddress() {
        return (
            (this.address1 ? this.getAddress1() + ", " : "") +
            (this.address2 ? this.getAddress2() + ", " : "") +
            this.getCity() +
            ", FL " +
            (this.zipCode ? this.getZipCode() : "")
        );
    }
}
