import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function tularesidences(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("tula-residences", lang);
    const d = new Desarrollo(MidtownMiami());
    d.titulo = getLocalizedField("titulo", "Tula Residences");
    d.nombre = "tula-residences";
    d.introduccion = getLocalizedArray("introduccion", ["Tula Residences Miami es un condominio frente al mar de lujo de 21 pisos en el vecindario North Bay Village de Miami. El desarrollo de Tula North Bay Village es un proyecto de Shoma Group y los arquitectos de MSA Architects. El edificio Tula Residences Miami cuenta con solo 19 unidades, que varían de 1 a 4 dormitorios."]);
    d.slogan = getLocalizedField("slogan", "Exclusividad Frente al Mar en North Bay Village");
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
                {getLocalizedArray("caracteristicas.residencias.items", ["Residencias de piso completo para máxima privacidad", "Vistas de 360 grados de la bahía y el océano", "Ascensores privados que abren directamente a la residencia", "Cocinas gourmet con electrodomésticos de grado profesional", "Amplias terrazas envolventes"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", ["Piscina infinita frente a la bahía", "Muelle privado y acceso directo al agua", "Gimnasio y centro de bienestar privado", "Servicio de conserjería personalizado", "Seguridad de vanguardia"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };
    d.banner = true;
    return d;
}
