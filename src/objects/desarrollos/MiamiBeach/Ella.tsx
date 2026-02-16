import React from "react";
import Constructora from "../../../models/constructora/Constructora.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function Ella(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("ella", lang);
    const EllaObject = new Desarrollo();
    EllaObject.estimatedCompletionYear = parseInt(getLocalizedField("caracteristicas.edificio.finalizacion", "2026"), 10) || 2026;
    EllaObject.numberOfRooms = {start: 1, end: 2};
    EllaObject.numberOfUnits = parseInt(getLocalizedField("caracteristicas.edificio.pisos", "95"), 10) || 95;
    EllaObject.typeOfUnits = getLocalizedField("caracteristicas.edificio.unidades", "Apartamentos de 1 a 2 dormitorios");
    EllaObject.ubicación = getLocalizedField("direccion", "6940 Abbot Avenue, Miami Beach, FL 33141");

    EllaObject.nombre = "ella";
    EllaObject.titulo = getLocalizedField("titulo", "Ella Miami Beach");
    EllaObject.subtitulo = getLocalizedField("subtitulo", "Un Tributo Al Glamuroso Pasado De Miami Beach");
    EllaObject.slogan = getLocalizedField("subtitulo", "Un Tributo Al Glamuroso Pasado De Miami Beach");
    EllaObject.introduccion = getLocalizedArray("introduccion", [
        "Ella, un tributo a la espléndida historia de Miami Beach, combina la elegancia vintage con líneas contemporáneas, creando una atmósfera conmovedora que captura el espíritu de Miami Beach.",
        "Meticulosamente diseñada, Ella ofrece experiencias de vida excepcionales, cumpliendo con los más altos estándares de sofisticación contemporánea.",
        "Ella establece un nuevo estándar para los desarrollos residenciales de Miami con alquileres a corto plazo. La reconocida firma Arquitectonica desarrolló una estética atrevida y moderna."
    ]);

    EllaObject.caracteristicas = {
        edificio: EllaObject.displayCaracteristicasEdificio(),
        residencias: EllaObject.displayCaracteristicasResidencias(),
        amenidades: EllaObject.displayAmenidades()
    };

    EllaObject.banner = true;
    EllaObject.area = MiamiBeach();
    EllaObject.constructora = new Constructora(getLocalizedField("caracteristicas.edificio.constructora", "Constellation"));
    EllaObject.numberOfImages = 21;
    EllaObject.video = <iframe width="555" height="500" className="object-fit-cover" src="https://www.youtube.com/embed/mIbAaxXmKTI?autoplay=1" title="Ella Miami Beach - Airbnb boutique" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>;
    return EllaObject;
}