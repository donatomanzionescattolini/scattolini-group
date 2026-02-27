export default class Constructora {
    public name: string;
    public descripcion: string;

    constructor(name = "", descripcion = "") {
        this.name = name;
        this.descripcion = descripcion;
    }
}
