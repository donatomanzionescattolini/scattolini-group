import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function ViceroyBrickell(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("viceroy-brickell", lang);
  const Viceroy = new Desarrollo(Brickell());
  Viceroy.nombre = "viceroy-brickell";
  Viceroy.titulo = getLocalizedField("titulo", "Viceroy Brickell");
  Viceroy.introduccion = getLocalizedArray(
    "introduccion",
    [
      "Viceroy Residences Brickell es una nueva torre de condominios de lujo en construcción en una de las ubicaciones más espectaculares de Miami: Brickell."
    ]
  );
  Viceroy.direccion = getLocalizedField("direccion", "77 SE 5th St, Miami, FL 33131, USA");
  Viceroy.estimatedCompletionYear = parseInt(getLocalizedField("estimatedCompletionYear", "2026"), 10) || 2026;
  Viceroy.numberOfFloors = parseInt(getLocalizedField("numberOfFloors", "45"), 10) || 45;
  Viceroy.numberOfUnits = parseInt(getLocalizedField("numberOfUnits", "498"), 10) || 498;
  Viceroy.typeOfUnits = getLocalizedField("typeOfUnits", "Luxury Condominiums");
  Viceroy.numberOfRooms = getLocalizedField("numberOfRooms", "Studios, 1 & 2 Bedrooms");
  Viceroy.banner = getLocalizedField("banner", "true") === "true";
  Viceroy.numberOfImages = parseInt(getLocalizedField("numberOfImages", "35"), 10) || 35;

  Viceroy.caracteristicas = {
    edificio: (
      <dl>
        <dt>{getLocalizedField("caracteristicas.edificio.direccionLabel", "Dirección")}</dt>
        <dd>{Viceroy.direccion}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.añoLabel", "Año De Construcción O Finalización")}</dt>
        <dd>{Viceroy.estimatedCompletionYear}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.pisosLabel", "Número De Pisos")}</dt>
        <dd>{Viceroy.numberOfFloors}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.unidadesLabel", "Número de Unidades")}</dt>
        <dd>{Viceroy.numberOfUnits}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.tipoLabel", "Tipo De Unidades")}</dt>
        <dd>{Viceroy.typeOfUnits}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.cuartosLabel", "Número de cuartos")}</dt>
        <dd>{Viceroy.numberOfRooms as string}</dd>
      </dl>
    ),
    residencias: <>
      <ul>
        <li>{getLocalizedField("caracteristicas.residencias.p1", "Collection of tower residences topped by two levels of penthouses.")}</li>
        <li>{getLocalizedField("caracteristicas.residencias.p2", "Floor plans offer studios, 1–3 bedroom residences and penthouses.")}</li>
      </ul>
    </>,
    amenidades: <>
      <ul>
        <li>{getLocalizedField("caracteristicas.amenidades.p1", "Prime location at One Brickell with direct access to the riverwalk.")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.p2", "Resort-style terrace and world-class wellness facilities.")}</li>
      </ul>
    </>
  };

  return Viceroy;
}