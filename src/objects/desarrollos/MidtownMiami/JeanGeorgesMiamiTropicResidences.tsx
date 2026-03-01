import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function jeangeorgesmiamitropicresidences(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("jean-georges-miami-tropic-residences", lang);
    const d = new Desarrollo(MidtownMiami());
    d.titulo = getLocalizedField("titulo", "Jean-Georges Miami Tropic Residences");
    d.nombre = "jean-georges-miami-tropic-residences";
    d.introduccion = getLocalizedArray("introduccion", ["Ubicado en el corazón de Midtown Miami, Jean-Georges Miami Tropic Residences es un desarrollo residencial de lujo de 48 pisos que ofrece 329 residencias exquisitamente diseñadas. Este proyecto marca la primera incursión residencial de Jean-Georges Vongerichten en Miami, combinando la elegancia de su marca culinaria con un diseño tropical moderno. Los residentes disfrutarán de impresionantes vistas de la bahía y la ciudad, así como de acceso exclusivo a una variedad de comodidades de primer nivel."]);
    d.slogan = getLocalizedField("slogan", "Elegancia Tropical en el Corazón de Midtown");
    d.typeOfUnits = getLocalizedField("typeOfUnits", "1, 2, 3 y 4 habitaciones");
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
            </>
        ),
        residencias: (
            <ul>
                {getLocalizedArray("caracteristicas.residencias.items", ["Residencias completamente terminadas con techos de 10 pies de altura", "Ventanas de piso a techo resistentes a impactos", "Cocinas de diseño con electrodomésticos Miele y acabados italianos", "Baños principales con acabados de mármol y accesorios premium", "Sistemas de casa inteligente integrados", "Amplias terrazas con vistas panorámicas"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", ["Restaurante Jean-Georges en la planta baja", "Piscina en la azotea con cabañas privadas", "Gimnasio de última generación y spa", "Sala de proyecciones y salón social", "Centro de negocios y espacios de coworking", "Servicio de conserjería las 24 horas y valet parking"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };
    d.banner = true;
    return d;
}
