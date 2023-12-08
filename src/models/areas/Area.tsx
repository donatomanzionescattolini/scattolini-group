import {Desarrollo} from "../desarrollos/Desarrollo.tsx";


export class Area {

    private name: string;
    private titulo: string;
    private desarrollos: Desarrollo[] | string[] = [];
    private slogan: string;
    private descripcion: Array<string>;

    private numberOfImages: number;

    constructor(name: string, titulo: string, slogan: string, descripcion: Array<string>, numberOfImages: number) {
        this.titulo = titulo;
        this.name = name;
        this.slogan = slogan;
        this.descripcion = descripcion;

        this.numberOfImages = numberOfImages;
    }

    public getNumberOfImages() {
        return this.numberOfImages;
    }

    public getName(): string {
        return (this.name || "unknown");
    }

    public setName(name: string) {

        this.name = name;
    }

    public getDesarrollos(): Desarrollo[] {
        return (this.desarrollos) ? this.desarrollos as Desarrollo[] : new Array<Desarrollo>() as Desarrollo[];
    }

    public setDesarrollos(desarrollos: Desarrollo[] | string[]): void {
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


    addDesarrollos(nombres: string[] | Desarrollo[]) {
        if (!this.desarrollos) {
            this.desarrollos = new Array<Desarrollo>();
        } else { /* empty */
        }
        for (let i = 0; i < nombres.length; i++) {
            let newDesarrollo = new Desarrollo();
            newDesarrollo.nombre=nombres[i] as string;
            (this.desarrollos as Desarrollo[]).push(newDesarrollo);
        }



    }

    getSlogan() {
        return this.slogan;
    }

    getDescripcion(): Array<string> {
        return this.descripcion;
    }

    getTitulo() {
        return this.titulo;
    }

    private setSlogan(slogan: string) {
        this.slogan = slogan;
    }
}
