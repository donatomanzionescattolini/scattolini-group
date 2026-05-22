import Homestead from "../../areas/Homestead.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";


    const SilverlandEstatesObject = new Desarrollo();
    SilverlandEstatesObject.nombre = "silverland-estates";
    SilverlandEstatesObject.titulo = {es: "Silverland Estates", en: "Silverland Estates"};
    SilverlandEstatesObject.slogan = {es: "", en: ""};
    SilverlandEstatesObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};

    SilverlandEstatesObject.introduccion = [];
    SilverlandEstatesObject.area = Homestead;


export default SilverlandEstatesObject;