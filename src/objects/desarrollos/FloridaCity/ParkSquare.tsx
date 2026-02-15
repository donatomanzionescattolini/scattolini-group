import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function ParkSquare(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("park-square", lang);
  const ParkSquareObject = new Desarrollo();
  ParkSquareObject.nombre = getLocalizedField("nombre", "park-square");
  ParkSquareObject.titulo = getLocalizedField("titulo", "Park Square");
  ParkSquareObject.slogan = getLocalizedField("slogan", "");
  ParkSquareObject.caracteristicas = {
    edificio: <></>,
    residencias: <></>,
    amenidades: <></>,
  };
  ParkSquareObject.introduccion = getLocalizedArray("introduccion", []);
  ParkSquareObject.area = FloridaCity();

  return ParkSquareObject;
}
