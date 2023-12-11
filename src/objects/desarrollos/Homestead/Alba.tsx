import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function Alba() {
    const AlbaObject = new Desarrollo();
    AlbaObject.numberOfImages = 7;
    AlbaObject.banner = true;
    AlbaObject.nombre = "alba";

    AlbaObject.introduccion = ["Descubra On Alba, una subdivisión acogedora y familiar que ofrece 137 viviendas unifamiliares nuevas dentro de la vibrante comunidad de Onx. Las casas Onx están cuidadosamente diseñadas con una variedad de fachadas y opciones interiores, lo que le permite adaptar la casa de sus sueños a sus preferencias. Cada residencia cuenta con 5 dormitorios, de 3 a 4,5 baños, una cocina abierta contemporánea y una sala de estar equipada con electrodomésticos de bajo consumo, y acceso exclusivo a las comodidades del Onx Community Park.",

        "En Onx Homes, nos enorgullecemos de nuestro estándar, que incluye características de construcción X+ de™ vanguardia, cimientos completamente de concreto, ventanas y puertas a prueba de impactos de huracanes, elegantes encimeras de cuarzo, electrodomésticos de bajo consumo y lujosos pisos de baldosas de porcelana. Nuestro compromiso con estos elementos garantiza que su hogar no solo sea hermoso, sino que también esté construido para resistir los elementos."];
    AlbaObject.titulo = "On Alba";
    AlbaObject.subtitulo = "Una nueva era de hogares y vecindarios";

    AlbaObject.edificio = {
        numberOfBathrooms: {start: 3, end: 4.5}, numberOfUnits: 137, piesCuadrados: 2281, numberOfModels: 5, typeOfUnits: "viviendas unifamiliares", constructora: "Onx Homes", ubicación:
            <address>1100 W Palm Drive Florida City, FL
                33034</address>, añoDeConstrucciónOFinalización: 2023, numberOfRooms: 5
    };

    const amenidades = new Map();

    amenidades.set("Comunidad y Vecindario", ["Escuelas cerca de Alba", "Escuelas públicas del condado de Miami-Dade SD"]);
    amenidades.set("Puntos de interés locales", ["Puerto pequeño (Marina)", "Playa"]);
    amenidades.set("Salud y Belleza", ["Canchas de baloncesto y fútbol"]);
    amenidades.set("Servicios y beneficios comunitarios", ["Patio de juegos", "Parque (acceso al Onx Community Park y a sus servicios)"]);
    AlbaObject.amenidades = amenidades;
    AlbaObject.residencias = ["Lavadora y secadora compactas", " Encimeras de Cuarzo"
        , " Dormitorio y Baño Independientes para Invitados"
        , " Ventanas y Puertas a Prueba de Golpes"
        , " Moderna Cocina Abierta"
        , " Escaleras de Hormigón"
        , " Calentador de Agua Eléctrico"
        , " Vestidor en Dormitorio Principal"
        , " Pisos de Porcelanato"
        , " Electrodomésticos de Acero Inoxidable"
        , " Despensa Empotrada"
        , " Azulejos de Suelo a Techo en la Ducha"
        , " El Baño Principal Incluye Doble Lavabo",
        "Paredes con acabado texturizado",

        "Paredes con acabado liso",

        "Escaleras y pasillos con pisos de madera diseñada",

        "Alfombra en las habitaciones",

        "Pisos de madera diseñados Dormitorios 2do piso",

        "Azulejos de porcelana para todos los pisos",

        "Encimeras de cocina de cuarzo",

        "Gabinetes de cocina de 30"];


    AlbaObject.caracteristicas = {
        residencias: <ul>{AlbaObject.residencias.map(r => <>
            <li>{r}</li>
        </>)}</ul>, edificio: <>{AlbaObject.displayCaracteristicasEdificio()}</>, amenidades: <>{AlbaObject.displayAmenidades()}</>
    };
    AlbaObject.area = Homestead();


    return AlbaObject;
}