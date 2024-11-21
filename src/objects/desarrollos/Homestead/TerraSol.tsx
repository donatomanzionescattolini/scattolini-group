import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function TerraSol() {
    const TerraSolObject = new Desarrollo();
    TerraSolObject.name = "terra-sol";
    TerraSolObject.title = "Terra Sol";
    TerraSolObject.subtitulo = "";
    TerraSolObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    TerraSolObject.introduccion = [];


    return TerraSolObject;
}