import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function coramerrickpark(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("cora-merrick-park", lang);
    const d = new Desarrollo(MidtownMiami());
    d.titulo = getLocalizedField("titulo", "Cora Merrick Park");
    d.nombre = "cora-merrick-park";
    d.introduccion = getLocalizedArray("introduccion", ["Cora Merrick Park redefine la vida urbana en el prestigioso Coral Gables. A pasos de las exclusivas tiendas y restaurantes de Merrick Park, este desarrollo ofrece un estilo de vida sofisticado y conveniente. Con una arquitectura mediterránea contemporánea y acabados de lujo, Cora es el lugar perfecto para quienes buscan elegancia y modernidad."]);
    d.slogan = getLocalizedField("slogan", "Estilo de Vida Sofisticado en Coral Gables");
    d.typeOfUnits = getLocalizedField("typeOfUnits", "1, 2 y 3 habitaciones");
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
                {getLocalizedArray("caracteristicas.residencias.items", ["Pisos de porcelanato de alta calidad", "Cocinas modernas con gabinetes europeos y encimeras de cuarzo", "Electrodomésticos de acero inoxidable Bosch", "Techos de 9 pies de altura", "Balcones privados con vistas a Coral Gables"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", ["Piscina estilo resort con solárium", "Gimnasio de última generación", "Sala club y espacio de entretenimiento", "Seguridad las 24 horas y acceso controlado", "Ubicación privilegiada junto a Merrick Park"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };
    d.banner = true;
    return d;
}
