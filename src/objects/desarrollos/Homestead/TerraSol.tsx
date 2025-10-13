import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function TerraSol() {
    const TerraSolObject = new Desarrollo();
    TerraSolObject.nombre = "terra-sol";
    TerraSolObject.titulo = "Terra Sol";
    TerraSolObject.slogan = "";
    TerraSolObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    TerraSolObject.introduccion = [];


    return TerraSolObject;
}