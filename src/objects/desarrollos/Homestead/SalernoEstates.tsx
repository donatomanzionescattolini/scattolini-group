import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SalernoEstates() {
    const SalernoEstates = new Desarrollo();
    SalernoEstates.name = "salerno-estates";
    SalernoEstates.title = "Salerno Estates";
    SalernoEstates.subtitulo = "";
    SalernoEstates.area = Homestead();
    SalernoEstates.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };

    SalernoEstates.introduccion = [];

    return SalernoEstates;
}
