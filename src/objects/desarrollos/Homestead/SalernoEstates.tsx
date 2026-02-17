import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SalernoEstates(lang: "en" | "es" = "es") {
  const SalernoEstatesObject = new Desarrollo();
  SalernoEstatesObject.nombre = "salerno-estates";
  SalernoEstatesObject.titulo = { es: "Salerno Estates", en: "Salerno Estates" };
  SalernoEstatesObject.slogan = { es: "", en: "" };
  SalernoEstatesObject.area = Homestead();
  SalernoEstatesObject.caracteristicas = {
    edificio: <></>,
    residencias: <></>,
    amenidades: <></>,
  };

  SalernoEstatesObject.introduccion = [];

  return SalernoEstatesObject;
}
