import Project from "../../../models/desarrollos/Project.tsx";
import Pinecrest from "../../areas/Pinecrest.tsx";

export default function PineRocklandEstates() {
    const PinelandRocklandEstatesObject = new Project();
    PinelandRocklandEstatesObject.name = "pine-rockland-estates";
    PinelandRocklandEstatesObject.traits = {
        building: <></>,
        residences: <></>,
        amenities: <></>,
    };

    PinelandRocklandEstatesObject.edificio = {
        añoDeConstrucciónOFinalización: 0,
        constructora: undefined,
        numberOfBathrooms: undefined,
        numberOfModels: undefined,
        numberOfRooms: undefined,
        numberOfUnits: 0,
        piesCuadrados: undefined,
        typeOfUnits: "",
        ubicación: "7200 SW 73rd Ct, Miami, FL 33143"
    }
    PinelandRocklandEstatesObject.introduction = ["\n" +
    "\n" +
    "Belleza impactante. Espectacular diseño. Nuestra nueva y elegante comunidad ofrece una selección de élite de solo 26 casas. Excepcionalmente personalizables y construidas por maestros en su oficio, nuestras casas están diseñadas con los mejores detalles para promover el bienestar a un nivel elemental. Cada casa es la traducción definitiva de la extraordinaria perspectiva y originalidad del propietario: una expresión arquitectónica curada de sus ideas, visión y estilo únicos"];
    PinelandRocklandEstatesObject.title = "Pine Rockland Estates";
    PinelandRocklandEstatesObject.subtitle = "El estilo de vida que sólo has soñado";
    PinelandRocklandEstatesObject.banner = true;
    PinelandRocklandEstatesObject.numberOfImages = 19;
    PinelandRocklandEstatesObject.area = Pinecrest();
    return PinelandRocklandEstatesObject;
}