import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function Oasis() {
    const OasisObject = new Desarrollo();
    OasisObject.name = "oasis";
    OasisObject.title = "Oasis";
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
