import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function TerraSol(lang: "en" | "es" = "es") {
    const TerraSolObject = new Desarrollo();
    TerraSolObject.nombre = "terra-sol";
    TerraSolObject.titulo = { es: "Terra Sol", en: "Terra Sol" };
    TerraSolObject.slogan = { es: "", en: "" };
    TerraSolObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    TerraSolObject.introduccion = [];


    return TerraSolObject;
}