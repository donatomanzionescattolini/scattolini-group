import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";
import Homestead from "../../areas/Homestead.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function Alba(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("alba", lang);
  const AlbaObject = new Desarrollo();
  AlbaObject.numberOfImages = parseInt(getLocalizedField("numberOfImages", "7"), 10) || 7;
  AlbaObject.banner = getLocalizedField("banner", "true") === "true";
  AlbaObject.nombre = getLocalizedField("nombre", "alba");

  AlbaObject.introduccion = getLocalizedArray("introduccion", [
    getLocalizedField(
      "introduccion.0",
      "Descubra On Alba, una subdivisión acogedora y familiar que ofrece 137 viviendas unifamiliares nuevas dentro de la vibrante comunidad de Onx."
    ),
  ]);
  AlbaObject.titulo = getLocalizedField("titulo", "On Alba");
  AlbaObject.slogan = getLocalizedField("slogan", "Una nueva era de hogares y vecindarios");

  AlbaObject.numberOfBathrooms = { start: 3, end: 4.5 };
  AlbaObject.numberOfUnits = 137;
  AlbaObject.piesCuadrados = 2281;
  AlbaObject.numberOfModels = 5;
  AlbaObject.typeOfUnits = getLocalizedField("typeOfUnits", "viviendas unifamiliares");
  AlbaObject.constructora = getLocalizedField("constructora", "Onx Homes");
  AlbaObject.ubicación = (
    <address>{getLocalizedField("ubicacion", "1100 W Palm Drive Florida City; FL 33034")}</address>
  );
  AlbaObject.estimatedCompletionYear = parseInt(getLocalizedField("estimatedCompletionYear", "2023"), 10) || 2023;
  AlbaObject.numberOfRooms = parseInt(getLocalizedField("numberOfRooms", "5"), 10) || 5;

  const amenidades = new Map();

  amenidades.set("Comunidad y Vecindario", [
    getLocalizedField("amenidades.comunidad.0", "Escuelas cerca de Alba"),
    getLocalizedField("amenidades.comunidad.1", "Escuelas públicas del condado de Miami-Dade SD"),
  ]);
  amenidades.set("Puntos de interés locales", [getLocalizedField("amenidades.puntos.0", "Puerto pequeño (Marina)"), getLocalizedField("amenidades.puntos.1", "Playa")]);
  amenidades.set("Salud y Belleza", [getLocalizedField("amenidades.salud.0", "Canchas de baloncesto y fútbol")]);
  amenidades.set("Servicios y beneficios comunitarios", [
    getLocalizedField("amenidades.servicios.0", "Patio de juegos"),
    getLocalizedField("amenidades.servicios.1", "Parque (acceso al Onx Community Park y a sus servicios)"),
  ]);
  AlbaObject.amenidades = amenidades;
  AlbaObject.residencias = getLocalizedArray("residencias", [
    "Lavadora y secadora compactas",
    " Encimeras de Cuarzo",
  ]);

  AlbaObject.caracteristicas = AlbaObject.createCaracteristicas();
  AlbaObject.area = FloridaCity();

  return AlbaObject;
}
