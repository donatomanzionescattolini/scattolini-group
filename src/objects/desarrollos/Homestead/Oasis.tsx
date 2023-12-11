import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function Oasis() {
    const OasisObject = new Desarrollo();
    OasisObject.nombre = "oasis";
    OasisObject.titulo = "Oasis";
    OasisObject.subtitulo = "";
    OasisObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    OasisObject.introduccion = [];


    return OasisObject;
}