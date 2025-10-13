import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Pinecrest from "../../areas/Pinecrest.tsx";

export default function PineRocklandEstates() {
    const PinelandRocklandEstatesObject = new Desarrollo();
    PinelandRocklandEstatesObject.nombre = "pine-rockland-estates";
    PinelandRocklandEstatesObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };

    PinelandRocklandEstatesObject.edificio = {añoDeConstrucciónOFinalización: 0, constructora: undefined, numberOfBathrooms: undefined, numberOfModels: undefined, numberOfRooms: undefined, numberOfUnits: 0, piesCuadrados: undefined, typeOfUnits: "", ubicación: "7200 SW 73rd Ct, Miami, FL 33143"}
    PinelandRocklandEstatesObject.introduccion = ["\n" +
    "\n" +
    "Belleza impactante. Espectacular diseño. Nuestra nueva y elegante comunidad ofrece una selección de élite de solo 26 casas. Excepcionalmente personalizables y construidas por maestros en su oficio, nuestras casas están diseñadas con los mejores detalles para promover el bienestar a un nivel elemental. Cada casa es la traducción definitiva de la extraordinaria perspectiva y originalidad del propietario: una expresión arquitectónica curada de sus ideas, visión y estilo únicos"];
    PinelandRocklandEstatesObject.titulo = "Pine Rockland Estates";
    PinelandRocklandEstatesObject.slogan = "El estilo de vida que sólo has soñado";
    PinelandRocklandEstatesObject.banner = true;
    PinelandRocklandEstatesObject.numberOfImages = 19;
    PinelandRocklandEstatesObject.area = Pinecrest();
    return PinelandRocklandEstatesObject;
}