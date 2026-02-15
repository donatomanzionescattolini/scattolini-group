import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function Cipriani(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("cipriani", lang);
  const CiprianiObject = new Desarrollo(Brickell());

  CiprianiObject.banner = getLocalizedField("banner", "true") === "true";
  CiprianiObject.area = Brickell();

  CiprianiObject.nombre = "cipriani";
  CiprianiObject.titulo = getLocalizedField("titulo", "Cipriani Residences");
  CiprianiObject.slogan = getLocalizedField("slogan", "");
  CiprianiObject.numberOfImages = parseInt(getLocalizedField("numberOfImages", "14"), 10) || 14;
  CiprianiObject.introduccion = getLocalizedArray("introduccion", [
    "Brillantemente diseñadas por Arquitectonica y 1508 London, estas elegantes casas ofrecen verdadera comodidad y privacidad, inspiradas en su ubicación y el estilo atemporal de Cipriani."
  ]);

  // Keep detailed caracteristicas JSX as fallback; top-level fields localized above.
  CiprianiObject.caracteristicas = {
    edificio: (
      <div>
        <p>{getLocalizedField("caracteristicas.edificio.p1", "Una adición distintiva al horizonte de Brickell, la torre de vidrio de 80 pisos...")}</p>
        <ul>
          <li>{getLocalizedField("caracteristicas.edificio.li1", "Una elegante torre de 80 pisos con una fachada curva de vidrio en cascada")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.li2", "Una colección de 397 residencias, incluidos áticos excepcionales con piscina privada")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.li3", "Servicios de comedor solo para residentes de Cipriani")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.li4", "Vistas panorámicas de la Bahía de Biscayne, el horizonte de Brickell y Coconut Grove")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.li5", "Personal 24 horas capacitado por Cipriani")}</li>
        </ul>
      </div>
    ),
    residencias: (
      <div>
        <ul>
          <li>{getLocalizedField("caracteristicas.residencias.li1", "Amplias salas de estar con alturas de techo de 10 pies")}</li>
          <li>{getLocalizedField("caracteristicas.residencias.li2", "Puertas y ventanas corredizas de vidrio de piso a techo con magníficas vistas panorámicas.")}</li>
          <li>{getLocalizedField("caracteristicas.residencias.li3", "Acceso a la terraza desde la sala de estar y el dormitorio principal de cada residencia.")}</li>
          <li>{getLocalizedField("caracteristicas.residencias.li4", "Elegantes vestidores en cada dormitorio principal")}</li>
        </ul>
      </div>
    ),
    amenidades: (
      <ul>
        <li>{getLocalizedField("caracteristicas.amenidades.li1", "Entrada privada exclusiva con exuberantes jardines y elegante puerta cochera")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.li2", "Impresionante vestíbulo que conduce a dos hileras de ascensores de alta velocidad sin contacto")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.li3", "Experiencias gastronómicas privadas exclusivas de Cipriani")}</li>
      </ul>
    ),
  };

  return CiprianiObject;
}