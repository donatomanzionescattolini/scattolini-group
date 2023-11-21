import {Desarrollo} from "./Desarrollo";


export class Area {

    private name?: string;
    private desarrollos?: Desarrollo[] = [];
    private slogan?: string;
    private descripcion: Array<string>;
    private propiedadesComponent: Element;

    constructor(name: string, slogan:string, descripcion:Array<string>, propiedadesComponent:Element) {
        this.name=name;
        this.slogan=slogan;
        this.descripcion=descripcion;
        this.propiedadesComponent=propiedadesComponent;

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
        } else { /* empty */ }
        for (let i = 0; i < nombres.length; i++) {
            this.desarrollos.push(new Desarrollo(nombres[i]));
        }


    }

    getSlogan() {
        return this.slogan;
    }

    private setSlogan(slogan: string) {
        this.slogan=slogan;
    }

    getDescripcion(): Array<string> {
        return this.descripcion;
    }

    getPropiedadesComponent() {
        return this.propiedadesComponent;
    }
}
