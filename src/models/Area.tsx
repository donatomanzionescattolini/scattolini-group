import {Desarrollo} from "./Desarrollo";


export class Area {

    private name?: string;
    private desarrollos?: Desarrollo[] = [];

    constructor(name: string) {
        this.setName(name);
        this.setDesarrollos(new Array<Desarrollo>());


    }

    public getName(): string {
        return (this.name || "unknown");
    }

    public setName(name: string) {

        this.name = name;
    }

    public getDesarrollos(): Desarrollo[] {
        return (this.desarrollos) ? this.desarrollos : new Array<Desarrollo>();
    }

    public setDesarrollos(desarrollos: Desarrollo[]): void {
        this.desarrollos = desarrollos;
    }

    addDesarrollo(desarrollo: Desarrollo) {
        if (this.desarrollos) {

            this.getDesarrollos().push(desarrollo);
        } else {
            this.setDesarrollos(new Array<Desarrollo>());
            this.getDesarrollos().push(desarrollo);

        }
        desarrollo.area = this;


    }

    addDesarrollos(nombres: string[]) {
        if (!this.desarrollos) {
            this.desarrollos = new Array<Desarrollo>();
        } else {

        }
        for (let i = 0; i < nombres.length; i++) {
            this.desarrollos.push(new Desarrollo(nombres[i]));
        }


    }
}
