import Homestead from "../../areas/Homestead.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";


    const SalernoEstatesObject = new Desarrollo();
    SalernoEstatesObject.nombre = "salerno-estates";
    SalernoEstatesObject.titulo = {es: "Salerno Estates", en: "Salerno Estates"};
    SalernoEstatesObject.slogan = {es: "", en: ""};
    SalernoEstatesObject.area = Homestead;
    SalernoEstatesObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };

    SalernoEstatesObject.introduccion = [];


export default SalernoEstatesObject;