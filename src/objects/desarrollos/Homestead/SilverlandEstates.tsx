import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SilverlandEstates(lang: "en" | "es" = "es") {
    const SilverlandEstatesObject = new Desarrollo();
    SilverlandEstatesObject.nombre = "silverland-estates";
    SilverlandEstatesObject.titulo = { es: "Silverland Estates", en: "Silverland Estates" };
    SilverlandEstatesObject.slogan = { es: "", en: "" };
    SilverlandEstatesObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SilverlandEstatesObject.introduccion = [];
    SilverlandEstatesObject.area = Homestead();

    return SilverlandEstatesObject;
}