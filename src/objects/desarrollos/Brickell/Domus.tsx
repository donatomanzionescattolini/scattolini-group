import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function Domus(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("domus", lang);
    const Domus = new Desarrollo(Brickell());
    Domus.nombre = "domus";
    Domus.titulo = getLocalizedField("titulo", "Domus FLATS");
    Domus.area = Brickell();
    Domus.caracteristicas = {
        edificio: (
            <ul>
                <li>Vestíbulo</li>
                <li>Mini Mercado</li>
                <li>Aparcacoches</li>
                <li>Aparcamiento de bicicletas</li>
                <li>Cafetería</li>
                <li>Salón Jardín</li>
                <li>Coworking</li>
                <li>Habitación de paquetes</li>
                <li>Gimnasio</li>
                <li>Yoga y Pilates</li>
                <li>Piscina</li>
                <li>Jacuzzi</li>
                <li>Sauna</li>
                <li>Zona de barbacoa</li>
                <li>Bar de vinos y cervezas</li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>Residencias 100% amuebladas</li>
                <li>72 estacionamientos comunes</li>
                <li>Alquileres a corto plazo</li>
                <li>Plataforma digital (Airbnb, Booking, etc.)</li>
                <li>Centro de llamadas 24/7</li>
            </ul>
        ),
        amenidades: (
            <>
                <p>
                    Domus Brickell ofrece un espacio ideal para socializar y
                    establecer contactos, con 500 metros cuadrados de áreas comunes
                    modernas y acogedoras adecuadas para cualquier ocasión. Desde su
                    vestíbulo, perfecto para reuniones de negocios y relajación, hasta
                    el minimercado, el espacio de trabajo, la cafetería y el hermoso
                    jardín, Domus Brickell Park ofrece un refugio tranquilo sin tener
                    que salir de casa. Por supuesto, la experiencia solo se completa
                    con disfrutar de su impresionante piscina en la azotea, con vistas
                    únicas de Brickell.
                </p>
                <ul>
                    <li>Más de 4.200 pies cuadrados de lobby de hospitalidad</li>
                    <li>La habitación del pavo real</li>
                    <li>Parque de bolsillo cubierto al aire libre</li>
                    <li>Cafetería y panadería con terraza cubierta</li>
                    <li>Mercado artesanal que ofrece opciones gourmet</li>
                    <li>Exuberante salón en el jardín</li>
                    <li>Bar de vinos y cervezas</li>
                    <li>Gimnasio con equipos de última generación</li>
                    <li>Baño de vapor</li>
                    <li>Terraza de la piscina en la azotea con cabañas</li>
                    <li>Jacuzzi</li>
                </ul>
            </>
        ),
    };

    Domus.introduccion = getLocalizedArray("introduccion", [
        "Bienvenido a Domus, una colección de FLATS (Apartamentos Flexibles para Estancias Temporales) diseñada para adaptarse a tu vida."
    ]);
    Domus.banner = getLocalizedField("banner", "true") === "true";
    Domus.video = (
        <iframe id="ytplayer" width="720" height="405"
                src={getLocalizedField("video", "https://www.youtube.com/embed/M_9_sCBNLDQ?autoplay=1&controls=0")}
                frameBorder={0} allowFullScreen/>
    );
    Domus.titulo = getLocalizedField("titulo", "Domus FLATS");
    Domus.slogan = getLocalizedField("slogan", "");
    Domus.numberOfImages = parseInt(getLocalizedField("numberOfImages", "7"), 10) || 7;
    return Domus;
}