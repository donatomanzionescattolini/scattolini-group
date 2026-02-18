import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function SedonaEstates(lang: "en" | "es" = "es") {
    const SedonaEstatesObject = {} as Desarrollo;
    SedonaEstatesObject.nombre = "sedona-estates";
    SedonaEstatesObject.titulo = { es: "Sedona Estates", en: "Sedona Estates" };
    SedonaEstatesObject.slogan = { es: "", en: "" };
    SedonaEstatesObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SedonaEstatesObject.introduccion = [];


    return SedonaEstatesObject;
}