import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function ParcVillas(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("parc-villas", lang);
  const ParcVillasObject = new Desarrollo();
  ParcVillasObject.nombre = getLocalizedField("nombre", "parc-villas");
  ParcVillasObject.titulo = getLocalizedField("titulo", "Parc Villas");
  ParcVillasObject.slogan = getLocalizedField("slogan", "");
  ParcVillasObject.caracteristicas = {
    edificio: <></>,
    residencias: <></>,
    amenidades: <></>,
  };
  ParcVillasObject.introduccion = getLocalizedArray("introduccion", []);
  ParcVillasObject.area = FloridaCity();
  return ParcVillasObject;
}
