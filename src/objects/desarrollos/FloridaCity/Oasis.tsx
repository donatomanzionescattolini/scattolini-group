import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function Oasis() {
    const OasisObject = new Desarrollo();
    OasisObject.nombre = "oasis";
    OasisObject.titulo = "Oasis";
    OasisObject.subtitulo = "";
    OasisObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };

    OasisObject.introduccion = [];
    OasisObject.area = FloridaCity();

    return OasisObject;
}
