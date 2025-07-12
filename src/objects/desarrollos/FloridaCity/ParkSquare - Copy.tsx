import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function ParkSquare() {
  const ParkSquareObject = new Desarrollo();
  ParkSquareObject.nombre = "park-square";
  ParkSquareObject.titulo = "Park Square";
  ParkSquareObject.subtitulo = "";
  ParkSquareObject.caracteristicas = {
    edificio: <></>,
    residencias: <></>,
    amenidades: <></>,
  };

  ParkSquareObject.introduccion = [];
  ParkSquareObject.area = FloridaCity();

  return ParkSquareObject;
}
