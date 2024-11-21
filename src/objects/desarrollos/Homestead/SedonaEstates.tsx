import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function SedonaEstates() {
    const SedonaEstates = {} as Desarrollo;
    SedonaEstates.name = "sedona-estates";
    SedonaEstates.title = "Sedona Estates";
    SedonaEstates.subtitulo = "";
    SedonaEstates.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SedonaEstates.introduccion = [];


    return SedonaEstates;
}