import {AreaDto} from "../../models/areas/Area";

export default function FloridaCity() {
    const floridaDto = AreaDto("florida-city");
    floridaDto.name = "florida-city";
    floridaDto.title = "Florida City";
    floridaDto.descripcion = [
        "Florida City marca el punto más al sur del área metropolitana de Miami, el último bastión de la civilización continental del sur de Florida. Continúe hacia el sur y se encontrará en la ruta estadounidense 1 en dirección a los Cayos de Florida. Aventúrese hacia el oeste y esté entre la famosa extensión natural del Parque Nacional Everglades, un paraíso para los aspirantes a biólogos, observadores de aves y kayakistas por igual. Durante las etapas iniciales del crecimiento de Florida City, el cultivo de tomates y calabazas fue una fuerza impulsora de la economía local. Hoy en día, la agricultura sigue siendo vital para la comunidad y usted puede apoyar a los productores de la zona comprando sus productos en los puestos agrícolas cercanos. También existe la ventaja de residir lo suficientemente cerca de Miami para disfrutar de su esplendor y, al mismo tiempo, tener un escondite más tranquilo para retirarse después de un día entre la multitud y el bullicio.",
    ];
    floridaDto.slogan =
        "Puerta de Entrada a los Cayos de Florida y los Everglades";
    floridaDto.title = "Florida City";
    floridaDto.numberOfImages = 15;
    return floridaDto;
}
