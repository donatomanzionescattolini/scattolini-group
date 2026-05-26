import {Area, AreaDto} from "../../models/areas/Area.tsx";

const miamiRiver: Area = AreaDto("miami-river");
miamiRiver.name = "miami-river";
miamiRiver.titulo = {
    es: "Miami River",
    en: "Miami River"
};
miamiRiver.slogan = {
    es: "El Corazón Histórico de Miami",
    en: "The Historic Heart of Miami"
};
miamiRiver.descripcion = {
    es: [
        "El Miami River no solo es un río histórico en operación, sino que también sirve para enriquecer el estilo de vida de los residentes de la zona metropolitana.",
        "A solo 10 minutos de South Beach, el Distrito del Miami River ofrece fácil acceso a atracciones como el Parque Sewell, las tiendas en Marlins Park, el Estadio de los Marlins, entre otros.",
        "Los primeros habitantes conocidos de la zona alrededor del Miami River fueron los Tequesta. Su ciudad principal en el momento del primer contacto europeo estaba en la orilla norte del río, cerca de la desembocadura.",
        "Antes del desarrollo intensivo de Miami en el siglo XX, los montículos construidos por los Tequesta se extendían a lo largo del río. Las misiones españolas se establecieron brevemente a lo largo del río, en 1567-1570 y en 1743, pero la zona fue abandonada cuando España cedió Florida a Gran Bretaña en 1765.",
        "La zona alrededor del río atrajo colonos en el siglo XIX y en 1856 el Ejército de los EE. UU. intentó excavar un canal en el banco de arena durante las guerras Seminoles, pero fue detenido cuando se decidió que la base militar Fort Dallas no sería permanente.",
        "A principios de la década de 2000, se iniciaron dos proyectos de vías verdes urbanas: Miami Riverwalk y Miami Greenway."
    ],
    en: [
        "The Miami River is not only a historic river in operation but also serves to enrich the lifestyle of residents around the metropolitan area.",
        "Just 10 minutes away from South Beach, the Miami River District offers easy access to attractions like the Sewell Park, the shops at Marlins Park, Marlins Stadium, among others.",
        "The earliest known inhabitants of the area around the Miami River were Tequestas. Its main town at the time of first European contact was on the north bank of the river, near the mouth.",
        "Before the intensive development of Miami in the twentieth century, mounds built by the Tequesta were along the river. Spanish missions were briefly set along the river, in 1567-1570 and in 1743, but the area was abandoned when Spain gave Florida to Britain in 1765.",
        "The area around the River attracted settlers in the nineteenth century and in 1856 the US Army tried to dig a channel in the sandbar during the Seminole wars but was stopped when it was decided that the military base Fort Dallas would not be permanent.",
        "In the early 2000's two projects of urban greenways were initiated: Miami Riverwalk and Miami Greenway."
    ]
};
miamiRiver.numberOfImages = 6;
miamiRiver.imageExtension = "jpg";

export default miamiRiver;

