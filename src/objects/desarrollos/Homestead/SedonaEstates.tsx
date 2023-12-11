import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function SedonaEstates() {
    const SedonaEstates = {} as Desarrollo;
    SedonaEstates.nombre = "sedona-estates";
    SedonaEstates.titulo = "Sedona Estates";
    SedonaEstates.subtitulo = "";
    SedonaEstates.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SedonaEstates.introduccion = [];


    return SedonaEstates;
}