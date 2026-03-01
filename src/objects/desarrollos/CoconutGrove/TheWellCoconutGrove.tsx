import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function thewellcoconutgrove(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("the-well-coconut-grove", lang);
    const d = new Desarrollo(MidtownMiami());
    d.titulo = getLocalizedField("titulo", "The Well Coconut Grove");
    d.nombre = "the-well-coconut-grove";
    d.introduccion = getLocalizedArray("introduccion", ["The Well Coconut Grove es un santuario de bienestar en el histórico barrio de Coconut Grove. Este desarrollo único integra residencias de lujo con un centro de bienestar de clase mundial, ofreciendo un estilo de vida enfocado en la salud y el equilibrio. Con un diseño orgánico y materiales naturales, The Well crea un ambiente de serenidad y sofisticación."]);
    d.slogan = getLocalizedField("slogan", "Tu Santuario de Bienestar Personal");
    d.typeOfUnits = getLocalizedField("typeOfUnits", "2, 3 y 4 habitaciones");
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
                {getLocalizedArray("caracteristicas.residencias.items", ["Diseño biofílico que integra la naturaleza en los espacios habitables", "Sistemas de filtración de aire y agua de última generación", "Iluminación circadiana para mejorar el sueño y el bienestar", "Cocinas con electrodomésticos Sub-Zero y Wolf", "Baños tipo spa con bañeras de inmersión profunda"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", ["Centro de bienestar THE WELL de 20,000 pies cuadrados", "Spa con servicios completos y salas de tratamiento", "Gimnasio y estudio de yoga", "Piscina en la azotea con vistas a la bahía de Biscayne", "Acceso a expertos en salud y bienestar in situ"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };
    d.banner = true;
    return d;
}
