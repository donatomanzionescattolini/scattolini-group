import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function ParkSquare() {
    const ParkSquareObject = new Desarrollo();
    ParkSquareObject.nombre = "park-square";
    ParkSquareObject.titulo = "Park Square";
    ParkSquareObject.subtitulo = "";
    ParkSquareObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    ParkSquareObject.introduccion = [];


    return ParkSquareObject;
}