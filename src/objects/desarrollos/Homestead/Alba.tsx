import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function Alba(lang: "en" | "es" = "es") {
    const AlbaObject = new Desarrollo();
    AlbaObject.nombre = "alba";
    AlbaObject.titulo = { es: "Alba", en: "Alba" };
    AlbaObject.slogan = { es: "", en: "" };
    AlbaObject.caracteristicas = { edificio: <></>, residencias: <></>, amenidades: <></> };
    AlbaObject.introduccion = [];
    AlbaObject.area = Homestead();
    return AlbaObject;
}
