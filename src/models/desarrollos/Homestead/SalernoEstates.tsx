import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const SalernoEstates = new Desarrollo();
SalernoEstates.nombre = "salerno-estates";
SalernoEstates.titulo = "";
SalernoEstates.subtitulo = "";
SalernoEstates.caracteristicas ={edificio:<></>,residencias:<></>,amenidades:<></>};
SalernoEstates.area = Areas().find((area: Area) => area.getName().includes("homestead"));
SalernoEstates.introduccion = [];
SalernoEstates.area = Homestead;

export default SalernoEstates;