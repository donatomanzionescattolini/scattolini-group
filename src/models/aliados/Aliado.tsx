import {useState} from "react";

export class Aliado {
    nombre!: string;

    public Aliado(nombre: string) {
        this.nombre = nombre;
    }
}

export default function aliadosData() {
    const [aliadosArr, setAliadosArr] = useState([]);
}
