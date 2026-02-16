

import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Brickell from "../../areas/Brickell";
import { getDesarrolloI18n } from "../useDesarrolloI18n";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

export default function _2200Brickell(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("brickell2200", lang);
  const _2200BrickellObject = new Desarrollo(Brickell());
  _2200BrickellObject.nombre = "2200-brickell";
  _2200BrickellObject.titulo = getLocalizedField("titulo", "2200 Brickell");
  _2200BrickellObject.subtitulo = getLocalizedField("subtitulo", "An Urban Sanctuary in the Heart of Brickell");
  _2200BrickellObject.introduccion = getLocalizedArray("introduccion", [
    getLocalizedField("introduccion.0", "2200 Brickell is a new luxury condominium in South Brickell, designed by Revuelta Architecture and featuring interior design by ODA New York."),
  ]);
  _2200BrickellObject.area = Brickell();
  _2200BrickellObject.caracteristicas = {
    edificio: (
      <>
        <ul>
          <li>{getLocalizedField("caracteristicas.edificio.pisos", "Floors: 5")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.residencias", "Residences: 105")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.ubicacion", "Location: 2200 Brickell Avenue, Miami, FL 33129")}</li>
        </ul>
      </>
    ),
    residencias: (
      <ul style={{ textAlign: "justify" }}>
        <li>{getLocalizedField("caracteristicas.residencias.p1", "Open-concept residences with floor-to-ceiling windows.")}</li>
        <li>{getLocalizedField("caracteristicas.residencias.p2", "Designer kitchens and luxury finishes.")}</li>
      </ul>
    ),
    amenidades: (
      <ul style={{ textAlign: "justify" }}>
        <li>{getLocalizedField("caracteristicas.amenidades.p1", "Resort seating pool")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.p2", "Outdoor fitness / yoga")}</li>
      </ul>
    ),
  } as any;
  _2200BrickellObject.numberOfImages = 41;
  _2200BrickellObject.direccion = getLocalizedField("direccion", "2200 Brickell Avenue, Miami, FL 33129");
  _2200BrickellObject.numberOfRooms = { start: 1, end: 4 };
  _2200BrickellObject.numberOfUnits = 105;
  _2200BrickellObject.typeOfUnits = getLocalizedField("typeOfUnits", "Residences");
  _2200BrickellObject.estimatedCompletionYear = 2025;
  _2200BrickellObject.numberOfFloors = 5;
  const slogan_es = getLocalizedField("slogan", "Where both city dwellers and nature lovers feel at home");
  _2200BrickellObject.slogan = {
    es: slogan_es,
    en: getLocalizedField("slogan", "Where both city dwellers and nature lovers feel at home"),
  } as any;
  _2200BrickellObject.banner = getLocalizedField("banner", "true") === "true";
  return _2200BrickellObject;
}
_2200Brickell.nombre = "2200-brickell";
