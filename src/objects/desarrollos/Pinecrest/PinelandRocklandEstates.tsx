import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function  PinelandRocklandEstates() {
    const PinelandRocklandEstatesObject = new Desarrollo();
    PinelandRocklandEstatesObject.nombre = "pineland-rockland-estates";
    PinelandRocklandEstatesObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };
    PinelandRocklandEstatesObject.introduccion = [];
    PinelandRocklandEstatesObject.titulo = "Pineland Rockland Estates";
    PinelandRocklandEstatesObject.subtitulo = "Vivir en cualquier otro lugar no se puede comparar";
    PinelandRocklandEstatesObject.numberOfImages = 0;

    return PinelandRocklandEstatesObject;
}