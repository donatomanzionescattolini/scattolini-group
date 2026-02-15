import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function Oasis(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("oasis", lang);
  const OasisObject = new Desarrollo();
  OasisObject.nombre = getLocalizedField("nombre", "oasis");
  OasisObject.titulo = getLocalizedField("titulo", "Oasis");
  OasisObject.slogan = getLocalizedField("slogan", "");
  OasisObject.caracteristicas = {
    edificio: <></>,
    residencias: <></>,
    amenidades: <></>,
  };

  OasisObject.introduccion = getLocalizedArray("introduccion", []);
  OasisObject.area = FloridaCity();

  return OasisObject;
}
