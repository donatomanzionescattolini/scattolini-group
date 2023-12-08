import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const SedonaEstates = new Desarrollo();
SedonaEstates.nombre = "sedona-estates";
SedonaEstates.titulo = "";
SedonaEstates.subtitulo = "";
SedonaEstates.caracteristicas ={edificio:<></>,residencias:<></>,amenidades:<></>};
SedonaEstates.area = Areas().find((area: Area) => area.getName().includes("homestead"));
SedonaEstates.introduccion = [];

SedonaEstates.area = Homestead;
export default SedonaEstates;