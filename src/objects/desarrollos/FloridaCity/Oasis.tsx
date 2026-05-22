import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";


    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("oasis", "es");
    const OasisObject = new Desarrollo();
    OasisObject.nombre = getLocalizedField("nombre", "oasis");
    OasisObject.titulo = getLocalizedField("titulo", "Oasis");
    OasisObject.slogan = getLocalizedField("slogan", "");
    OasisObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };

    OasisObject.introduccion = getLocalizedArray("introduccion", []);
    OasisObject.area = FloridaCity;


export default OasisObject;