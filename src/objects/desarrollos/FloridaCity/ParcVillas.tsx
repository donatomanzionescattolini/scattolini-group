import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function ParcVillas() {
    const ParcVillasObject = new Desarrollo();
    ParcVillasObject.nombre = "parc-villas";
    ParcVillasObject.titulo = "Parc Villas";
    ParcVillasObject.subtitulo = "";
    ParcVillasObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };
    ParcVillasObject.introduccion = [];
    ParcVillasObject.area = FloridaCity();
    return ParcVillasObject;
}
