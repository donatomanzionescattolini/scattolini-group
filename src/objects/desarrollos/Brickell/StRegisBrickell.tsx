import Brickell from "../../areas/Brickell.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function StRegisBrickell(lang: "en" | "es" = "es") {
    const {getLocalizedField} = getDesarrolloI18n("st-regis-brickell", lang);
    const StRegisBrickellObject = new Desarrollo(Brickell());
    StRegisBrickellObject.nombre = "st-regis-brickell";
    StRegisBrickellObject.titulo = getLocalizedField("titulo", "St Regis Brickell");
    StRegisBrickellObject.banner = true;
    StRegisBrickellObject.numberOfImages = 61;

    StRegisBrickellObject.slogan = getLocalizedField("slogan", "");
    StRegisBrickellObject.area = Brickell();

    StRegisBrickellObject.direccion = getLocalizedField("direccion", "");
    StRegisBrickellObject.numberOfUnits = 0;
    StRegisBrickellObject.typeOfUnits = getLocalizedField("typeOfUnits", "");
    StRegisBrickellObject.numberOfFloors = 0;

    StRegisBrickellObject.caracteristicas = {
        edificio: <>
            <dl>
                <dt>{getLocalizedField("caracteristicas.edificio.direccion", "Dirección")}</dt>
                <dd>{StRegisBrickellObject.direccion}</dd>

                <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Numero de Pisos")}</dt>
                <dd>{StRegisBrickellObject.numberOfFloors}</dd>
                <dt>{getLocalizedField("caracteristicas.edificio.unidades", "Numero de Unidades")}</dt>
                <dd>{StRegisBrickellObject.numberOfUnits}</dd>
                <dt>{getLocalizedField("caracteristicas.edificio.tipo", "Tipo de Unidades")}</dt>
                <dd>{StRegisBrickellObject.typeOfUnits}</dd>

            </dl>
        </>,
        residencias: <></>,
        amenidades: <></>,
    };

    StRegisBrickellObject.introduccion = [];

    return StRegisBrickellObject;
}
