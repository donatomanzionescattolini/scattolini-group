import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function ParcVillas() {
    const ParcVillasObject = new Desarrollo();
    ParcVillasObject.nombre = "parc-villas";
    ParcVillasObject.titulo = "";
    ParcVillasObject.subtitulo = "";
    ParcVillasObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};
    ParcVillasObject.introduccion = [];

    return ParcVillasObject;
}