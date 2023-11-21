import {Desarrollo} from "./Desarrollo";
import {ReactNode} from "react";


export class Area {

    private name: string;
    private titulo: string;
    private desarrollos: Desarrollo[] = [];
    private slogan: string;
    private descripcion: Array<string>;
    private propiedadesComponent: ReactNode;
    private numberOfImages:number;

    constructor(name: string,titulo:string, slogan: string, descripcion: Array<string>, propiedadesComponent: JSX.Element, numberOfImages:number) {
        this.titulo=titulo;
        this.name=name;
        this.slogan=slogan;
        this.descripcion=descripcion;
        this.propiedadesComponent=propiedadesComponent;
        this.numberOfImages=numberOfImages;
    }

    public getNumberOfImages(){
        return this.numberOfImages;
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

    getPropiedadesComponent():ReactNode {
        return this.propiedadesComponent;
    }

    getTitulo() {
        return this.titulo;
    }
}
