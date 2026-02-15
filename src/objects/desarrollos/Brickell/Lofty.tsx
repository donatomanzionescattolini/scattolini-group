import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function Lofty(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("lofty", lang);
  const Lofty = new Desarrollo(Brickell());
  Lofty.nombre = "lofty";
  Lofty.titulo = getLocalizedField("titulo", "Lofty Residences Brickell");
  Lofty.caracteristicas = {
    residencias: (
      <ul>
        <br />
        <strong>{getLocalizedField("caracteristicas.residencias.title", "Las Residencias")}</strong>
        <br />
        <li>{getLocalizedField("caracteristicas.residencias.li1", "Residencias urbanas de lujo con diseños abiertos modernos desde 485SF — 930 SF")}</li>
        <li>{getLocalizedField("caracteristicas.residencias.li2", "Todas las residencias se entregan completamente terminadas y amuebladas especialmente seleccionadas por INC.")}</li>
        <li>{getLocalizedField("caracteristicas.residencias.li3", "Vistas panorámicas del río Miami y el horizonte de Miami")}</li>
      </ul>
    ),
    edificio: (
      <>
        <ul>
          <li>{getLocalizedField("caracteristicas.edificio.li1", "Alquileres a corto plazo permitidos por derecho")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.li2", "Vestíbulo de 2 pisos con ventanas de piso a techo")}</li>
          <li>{getLocalizedField("caracteristicas.edificio.li3", "Mostrador de bienvenida las 24 horas con conserje")}</li>
        </ul>
      </>
    ),
    amenidades: (
      <>
        <ul>
          <li>{getLocalizedField("caracteristicas.amenidades.li1", "Piscina exótica del resort con cabañas junto a la piscina")}</li>
          <li>{getLocalizedField("caracteristicas.amenidades.li2", "Bar y parrilla en la terraza de la piscina 24/7")}</li>
          <li>{getLocalizedField("caracteristicas.amenidades.li3", "Sala de coworking y salas de reuniones privadas")}</li>
        </ul>
      </>
    ),
  };
  Lofty.introduccion = getLocalizedArray("introduccion", [
    "Lofty Residences es un elegante condominio de 43 pisos que presenta un nuevo estándar de vida cosmopolita en Brickell."
  ]);

  Lofty.slogan = getLocalizedField("slogan", "Un Nuevo Estándar de Vida Cosmopolita en Brickell");
  Lofty.numberOfImages = parseInt(getLocalizedField("numberOfImages", "55"), 10) || 55;
  Lofty.video = (
    <iframe
      style={{ margin: "auto" }}
      width="700"
      height="394"
      className=" m-auto h-300"
      src={getLocalizedField("video", "https://www.youtube.com/embed/q-aJKA0dycc?si=8fV7LqMsCR8Wfz2s&autoplay=true")}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
  Lofty.banner = getLocalizedField("banner", "true") === "true";
  Lofty.area = Brickell();

  return Lofty;
}