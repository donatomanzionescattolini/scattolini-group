import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Orlando from "../../areas/Orlando.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function WindsorCayResort(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("windsor-cay-resort", lang);
    const resort = new Desarrollo(Orlando());
    resort.nombre = "windsor-cay-resort";
    resort.numberOfImages = 141;
    resort.area = Orlando();
    resort.banner = true;
    resort.titulo = getLocalizedField("titulo", "Windsor Cay Resort");
    resort.slogan = getLocalizedField("slogan", "Vacation homes designed for resort living and strong rental appeal");
    resort.caracteristicas = {
        edificio: (
            <ul className="list-disc ml-5">
                <li>{getLocalizedField("caracteristicas.edificio.resort", "Amenidades del resort en el lugar")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.marca", "Reconocimiento de marca internacional")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.seguridad", "Comunidad cerrada con vigilancia 24 horas")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.atracciones", "A minutos de atracciones de clase mundial")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.planos", "Planos diseñados para maximizar alquileres y retornos")}</li>
            </ul>
        ),
        residencias: (
            <ul className="list-disc ml-5">
                <li><b>{getLocalizedField("caracteristicas.residencias.titulo", "Características principales de la casa")}</b></li>
                <li>{getLocalizedField("caracteristicas.residencias.techo", "Techo de tejas")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.piscina", "Piscina privada climatizada")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.hab567", "5, 6 y 7 habitaciones con piscina de 12' x 24'")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.hab8910", "8, 9 y 10 habitaciones con piscina de 12' x 26'")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.townhomes", "Townhomes con piscina de 7.5' x 18'")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.entradas", "Entradas y terrazas de piscina con adoquines de ladrillo")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.electrodomesticos", "Electrodomésticos de acero inoxidable")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.closet", "Closet de almacenamiento para propietarios")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.granito", "Granito y azulejos en todas las cocinas y baños")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.persianas", "Persianas incluidas")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.lanai", "Lanai cubierto con cerca de seguridad para niños")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.lavadora", "Lavadora y secadora")}</li>
            </ul>
        ),
        amenidades: (
            <ul className="list-disc ml-5">
                <li><b>{getLocalizedField("caracteristicas.hoa.titulo", "La asociación de propietarios incluye:")}</b></li>
                <li>{getLocalizedField("caracteristicas.hoa.jardineria", "Mantenimiento completo de jardinería incluyendo riego de césped")}</li>
                <li>{getLocalizedField("caracteristicas.hoa.internet", "Internet de alta velocidad y TV por cable")}</li>
                <li>{getLocalizedField("caracteristicas.hoa.basura", "Recolección diaria de basura")}</li>
            </ul>
        )
    };
    resort.introduccion = getLocalizedArray("introduccion", [
        "Windsor Cay Resort ofrece casas vacacionales en Orlando diseñadas para combinar estilo de resort, comodidad familiar y un fuerte atractivo para alquileres vacacionales.",
        "La comunidad reúne amenidades en el lugar, seguridad 24 horas y ubicaciones pensadas para aprovechar al máximo la cercanía a las atracciones más reconocidas de la zona."
    ]);
    return resort;
}
