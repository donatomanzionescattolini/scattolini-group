import {getDesarrolloI18n} from "../useDesarrolloI18n";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";


    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("park-square", "es");
    const ParkSquareObject = new Desarrollo();
    ParkSquareObject.nombre = getLocalizedField("nombre", "park-square");
    ParkSquareObject.titulo = getLocalizedField("titulo", "Park Square");
    ParkSquareObject.slogan = getLocalizedField("slogan", "");
    ParkSquareObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };
    ParkSquareObject.introduccion = getLocalizedArray("introduccion", []);
    ParkSquareObject.area = FloridaCity;


export default ParkSquareObject;