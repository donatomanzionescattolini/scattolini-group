import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const ParkSquare = new Desarrollo();
ParkSquare.nombre = "parc-square";
ParkSquare.titulo = "";
ParkSquare.subtitulo = "";
ParkSquare.caracteristicas = {edificio:<></>,residencias:<></>,amenidades:<></>};
ParkSquare.area = Areas().find((area: Area) => area.getName().includes("homestead"));
ParkSquare.introduccion = [];
ParkSquare.area = Homestead;

export default ParkSquare;