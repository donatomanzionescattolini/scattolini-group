import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const TerraSol = new Desarrollo();
TerraSol.nombre = "terra-sol";
TerraSol.titulo = "";
TerraSol.subtitulo = "";
TerraSol.caracteristicas ={edificio:<></>,residencias:<></>,amenidades:<></>};
TerraSol.area = Areas().find((area: Area) => area.getName().includes("homestead"));
TerraSol.introduccion = [];

TerraSol.area = Homestead;
export default TerraSol;