import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function Alba() {
    const AlbaObject = new Desarrollo();
    AlbaObject.nombre = "alba";
    AlbaObject.titulo = "";
    AlbaObject.subtitulo = "";
    AlbaObject.caracteristicas = {residencias: <></>, edificio: <></>, amenidades: <></>};
    AlbaObject.area = Homestead();
    AlbaObject.introduccion = [];


    return AlbaObject;
}