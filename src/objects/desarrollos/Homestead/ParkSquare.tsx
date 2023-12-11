import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function ParkSquare() {
    const ParkSquareObject = new Desarrollo();
    ParkSquareObject.nombre = "parc-square";
    ParkSquareObject.titulo = "";
    ParkSquareObject.subtitulo = "";
    ParkSquareObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    ParkSquareObject.introduccion = [];


    return ParkSquareObject;
}