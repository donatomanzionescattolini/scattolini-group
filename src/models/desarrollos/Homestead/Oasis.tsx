import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const Oasis = new Desarrollo();
Oasis.nombre = "parc-square";
Oasis.titulo = "";
Oasis.subtitulo = "";
Oasis.caracteristicas = {edificio:<></>,residencias:<></>,amenidades:<></>};
Oasis.area = Areas().find((area: Area) => area.getName().includes("homestead"));
Oasis.introduccion = [];

Oasis.area  = Homestead;
export default Oasis;