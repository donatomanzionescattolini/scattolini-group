import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function Ella() {
    const EllaObject = new Desarrollo();
    EllaObject.nombre = "ella";
    EllaObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};
    EllaObject.introduccion = [];
    EllaObject.titulo = "Ella";
    EllaObject.banner = true;
    EllaObject.area = MiamiBeach();


    return EllaObject;
}