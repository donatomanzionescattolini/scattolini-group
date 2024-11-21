import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SilverlandEstates() {
    const SilverlandEstates = new Desarrollo();
    SilverlandEstates.name = "silverland-estates";
    SilverlandEstates.title = "Silverland Estates";
    SilverlandEstates.subtitulo = "";
    SilverlandEstates.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SilverlandEstates.introduccion = [];
    SilverlandEstates.area = Homestead();

    return SilverlandEstates;
}