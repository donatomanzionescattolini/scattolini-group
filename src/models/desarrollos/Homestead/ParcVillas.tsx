import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const ParcVillas = new Desarrollo();
ParcVillas.nombre = "parc-villas";
ParcVillas.titulo = "";
ParcVillas.subtitulo = "";
ParcVillas.caracteristicas = {edificio:<></>,residencias:<></>,amenidades:<></>};
ParcVillas.area = Areas().find((area: Area) => area.getName().includes("homestead"));
ParcVillas.introduccion = [];
ParcVillas.area = Homestead;

export default ParcVillas;