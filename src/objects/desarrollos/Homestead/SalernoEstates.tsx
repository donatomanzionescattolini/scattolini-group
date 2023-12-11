import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function SalernoEstates() {
    const SalernoEstates = new Desarrollo();
    SalernoEstates.nombre = "salerno-estates";
    SalernoEstates.titulo = "";
    SalernoEstates.subtitulo = "";
    SalernoEstates.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SalernoEstates.introduccion = [];


    return SalernoEstates;
}