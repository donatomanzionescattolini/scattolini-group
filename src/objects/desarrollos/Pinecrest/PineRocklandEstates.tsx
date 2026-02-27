import Pinecrest from "../../areas/Pinecrest.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
export default function PineRocklandEstates() {
    const PinelandRocklandEstatesObject = new Desarrollo();
    PinelandRocklandEstatesObject.nombre = "pine-rockland-estates";
    PinelandRocklandEstatesObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    };

    PinelandRocklandEstatesObject.edificio = {añDeConstruccionOFinalizacion: 0, constructora: undefined, numberOfBathrooms: undefined, numberOfModels: undefined, numberOfRooms: undefined, numberOfUnits: 0, piesCuadrados: undefined, typeOfUnits: "", ubicacion: "7200 SW 73rd Ct, Miami, FL 33143"}
    PinelandRocklandEstatesObject.introduccion = ["\n" +
    "\n" +
    "Belleza impactante. Espectacular dise�o. Nuestra nueva y elegante comunidad ofrece una selecci�n de �lite de solo 26 casas. Excepcionalmente personalizables y construidas por maestros en su oficio, nuestras casas est�n dise�adas con los mejores detalles para promover el bienestar a un nivel elemental. Cada casa es la traducci�n definitiva de la extraordinaria perspectiva y originalidad del propietario: una expresi�n arquitect�nica curada de sus ideas, visi�n y estilo únicos"];
    PinelandRocklandEstatesObject.titulo = "Pine Rockland Estates";
    PinelandRocklandEstatesObject.slogan = "El estilo de vida que sólo has soñado";
    PinelandRocklandEstatesObject.banner = true;
    PinelandRocklandEstatesObject.numberOfImages = 19;
    PinelandRocklandEstatesObject.area = Pinecrest();
    return PinelandRocklandEstatesObject;
}

