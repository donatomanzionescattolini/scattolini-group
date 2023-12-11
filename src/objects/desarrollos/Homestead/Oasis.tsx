import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function  Oasis() {
    const OasisObject = new Desarrollo();
    OasisObject.nombre = "parc-square";
    OasisObject.titulo = "";
    OasisObject.subtitulo = "";
    OasisObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    OasisObject.introduccion = [];


    return OasisObject;
}