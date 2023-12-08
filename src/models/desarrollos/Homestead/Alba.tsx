import {Desarrollo} from "../Desarrollo.tsx";
import Areas from "../../areas/Areas.tsx";
import {Area} from "../../areas/Area.tsx";
import {Homestead} from "../../areas/Homestead.tsx";


const Alba = new Desarrollo();
Alba.nombre = "alba";
Alba.titulo = "";
Alba.subtitulo = "";
Alba.caracteristicas = {residencias:<></>,edificio:<></>,amenidades:<></>};
Alba.area = Areas().find((area: Area) => area.getName().includes("homestead"));
Alba.introduccion = [];

Alba.area = Homestead;
export default Alba;