import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const SilverlandEstates = new Desarrollo();
SilverlandEstates.nombre = "silverland-estates";
SilverlandEstates.titulo = "";
SilverlandEstates.subtitulo = "";
SilverlandEstates.caracteristicas ={edificio:<></>,residencias:<></>,amenidades:<></>};
SilverlandEstates.area = Areas().find((area: Area) => area.getName().includes("homestead"));
SilverlandEstates.introduccion = [];
SilverlandEstates.area=Homestead;

export default SilverlandEstates;