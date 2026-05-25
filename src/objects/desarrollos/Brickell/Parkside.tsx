import {getDesarrolloI18n} from "../useDesarrolloI18n";
import Brickell from "../../areas/Brickell.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo";


    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("parkside", "es");
    const Parkside = new Desarrollo(Brickell);
    Parkside.nombre = "parkside";
    Parkside.titulo = getLocalizedField("titulo", "Parkside");
    Parkside.introduccion = getLocalizedArray(
        "introduccion",
        [
            "Parkside es un exclusivo desarrollo de condominios de lujo ubicado en el corazón de Brickell, Miami."
        ]
    );
    Parkside.banner = getLocalizedField("banner", "true") === "true";
    Parkside.numberOfImages = parseInt(getLocalizedField("numberOfImages", "0"), 10) || 0;
    Parkside.area = Brickell;

export default Parkside;
