import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function tularesidences(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("tula-residences", lang);
    const d = new Desarrollo(MidtownMiami());
    d.titulo = getLocalizedField("titulo", "Tula Residences");
    d.nombre = "tula-residences";
    d.direccion = getLocalizedField("direccion", "7918 West Drive, North Bay Village, FL 33141");
    d.ubicacion = d.direccion;
    d.estimatedCompletionYear = getLocalizedField("estimatedCompletionYear", "Por anunciar");
    d.numberOfFloors = getLocalizedField("numberOfFloors", "21");
    d.numberOfUnits = getLocalizedField("numberOfUnits", "54");
    d.typeOfUnits = getLocalizedField("typeOfUnits", "2, 2 + den y 3 habitaciones");
    d.piesCuadrados = getLocalizedField("piesCuadrados", "1,590 a 2,440 pies cuadrados");
    d.constructora = getLocalizedField("constructora", "Bayshore Grove Capital; Pacific & Orient Properties, LLC");
    d.introduccion = getLocalizedArray("introduccion", [
        "Serenidad con dirección en Miami: 21 pisos frente a la Bahía Biscayne con solo 54 residencias y seis penthouses exclusivos.",
        "Un diseño de esquina con cuatro residencias por piso (niveles 7 al 19), terrazas de vidrio envolventes y conectividad de alta velocidad preinstalada.",
    ]);
    d.slogan = getLocalizedField("slogan", "Un pie en la ciudad. Un pie en la arena.");
    d.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>{getLocalizedField("caracteristicas.edificio.apertura", "Año de apertura")}</dt>
                    <dd>{d.estimatedCompletionYear}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Número de pisos")}</dt>
                    <dd>{d.numberOfFloors}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.unidades", "Número de unidades")}</dt>
                    <dd>{d.numberOfUnits}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.tipo", "Tipo de unidades")}</dt>
                    <dd>{d.typeOfUnits}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.ubicacion", "ubicacion")}</dt>
                    <dd>{d.ubicacion}</dd>
                </dl>
                <ul>
                    {getLocalizedArray("caracteristicas.edificio.items", [
                        "Residencias solo de esquina con cuatro unidades por piso (niveles 7 al 19)",
                        "Seis penthouses exclusivos entre los pisos 20 al 22",
                        "Terrazas de vidrio envolventes en cada residencia",
                        "Arquitectura de modernidad cinética con equilibrio entre uniformidad y singularidad",
                        "Interiores refinados y orgánicos con acabados contemporáneos",
                        "Conectividad preinstalada con fibra óptica y Wi-Fi de alta velocidad",
                        "Vistas a Biscayne Bay y acceso directo al paseo marítimo",
                    ]).map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </>
        ),
        residencias: (
            <ul>
                {getLocalizedArray("caracteristicas.residencias.items", [
                    "Residencias de 2, 2 + den y 3 habitaciones de 1,590 a 2,440 pies cuadrados",
                    "Distribuciones de concepto abierto con techos de 10 pies",
                    "Terrazas privadas amplias",
                    "Cocinas italianas con electrodomésticos Miele integrados",
                    "Lavanderías con cuarto independiente",
                    "Pisos europeos personalizados en toda la residencia",
                    "Penthouses: 3,700 a 4,140 pies cuadrados, cinco habitaciones + den y cinco baños y medio",
                    "Vistas panorámicas a la Bahía Biscayne y al skyline de Miami",
                ]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", [
                    "Piscina estilo resort con deck y cabanas privadas",
                    "Centro de bienestar con gimnasio de última generación",
                    "Spa para mascotas y edificio pet-friendly",
                    "Sala de medios para proyecciones privadas",
                    "Comedor privado con cocina de apoyo para eventos",
                    "Lounge para residentes con vista a la bahía y acceso al paseo marítimo",
                    "Concierge 24 horas",
                    "Skyline club room",
                ]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };
    d.banner = true;
    d.numberOfImages = 16;

    return d;
}
