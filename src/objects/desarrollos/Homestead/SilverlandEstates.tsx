import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function  SilverlandEstates() {
    const SilverlandEstates = new Desarrollo();
    SilverlandEstates.nombre = "silverland-estates";
    SilverlandEstates.titulo = "";
    SilverlandEstates.subtitulo = "";
    SilverlandEstates.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SilverlandEstates.introduccion = [];
    SilverlandEstates.area = Homestead();

    return SilverlandEstates;
}