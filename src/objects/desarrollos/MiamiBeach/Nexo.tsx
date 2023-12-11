import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function Nexo() {
    const NexoObject = new Desarrollo();
    NexoObject.nombre = "nexo";
    NexoObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};
    NexoObject.introduccion = [];
    NexoObject.titulo = "Nexo";
    NexoObject.banner = true;
    NexoObject.area = MiamiBeach();

    return NexoObject;
}