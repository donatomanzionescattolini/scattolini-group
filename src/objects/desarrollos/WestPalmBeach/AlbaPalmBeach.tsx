import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import WestPalmBeach from "../../areas/WestPalmBeach.tsx";
const project = new Desarrollo(WestPalmBeach);
project.nombre = "alba-palm-beach";
project.area = WestPalmBeach;
project.banner = true;
project.numberOfImages = 8;
project.titulo = {
    es: "Alba Palm Beach",
    en: "Alba Palm Beach",
};
project.subtitulo = {
    es: "Residencias de lujo frente al Intracoastal",
    en: "Luxury residences on the Intracoastal",
};
project.slogan = {
    es: "El arte de vivir en Palm Beach",
    en: "The art of living in Palm Beach",
};
project.ubicacion = "630 S Sapodilla Ave, West Palm Beach, FL 33401";
project.constructora = "Kolter Urban";
project.estimatedCompletionYear = "2026";
project.typeOfUnits = "Condominios de 1 a 4 habitaciones / 1-4 Bedroom Condominiums";
project.piesCuadrados = "1,100 - 5,200 SF";
project.introduccion = {
    es: [
        "Alba Palm Beach es una torre residencial de lujo que redefine el estilo de vida en el corazon de West Palm Beach. Desarrollada por Kolter Urban, esta imponente estructura ofrece residencias de diseno impecable con vistas panoramicas al Intracoastal Waterway, el horizonte de la ciudad y el oceano Atlantico.",
        "Cada unidad ha sido disenada con acabados de primer nivel, cocinas de chef equipadas con electrodomesticos Sub-Zero y Wolf, y terrazas privadas que invitan a disfrutar del inigualable clima de Palm Beach. Con precios que comienzan en $1.5 millones, Alba representa una inversion excepcional en uno de los mercados inmobiliarios de mayor crecimiento de Florida.",
    ],
    en: [
        "Alba Palm Beach is a luxury residential tower that redefines the lifestyle at the heart of West Palm Beach. Developed by Kolter Urban, this impressive structure offers impeccably designed residences with panoramic views of the Intracoastal Waterway, the city skyline, and the Atlantic Ocean.",
        "Each unit has been designed with top-tier finishes, chef-ready kitchens equipped with Sub-Zero and Wolf appliances, and private terraces that invite residents to enjoy Palm Beach unparalleled climate. With prices starting at $1.5 million, Alba represents an exceptional investment in one of Florida fastest-growing real estate markets.",
    ],
};
project.caracteristicas = {
    edificio: (
        <ul className="list-disc ml-5">
            <li>630 S Sapodilla Ave, West Palm Beach, FL 33401</li>
            <li>Desarrollado por Kolter Urban / Developed by Kolter Urban</li>
            <li>Entrega estimada 2026 / Estimated delivery 2026</li>
            <li>Vistas al Intracoastal y al skyline / Intracoastal and skyline views</li>
        </ul>
    ),
    residencias: (
        <ul className="list-disc ml-5">
            <li>Residencias de 1 a 4 habitaciones / 1-4 bedroom residences</li>
            <li>1,100 - 5,200 SF de superficie / 1,100 - 5,200 SF of living space</li>
            <li>Electrodomesticos Sub-Zero y Wolf / Sub-Zero and Wolf appliances</li>
            <li>Acabados de marmol y madera / Marble and wood finishes</li>
            <li>Terrazas privadas de gran formato / Large-format private terraces</li>
            <li>Ventanas de piso a techo / Floor-to-ceiling windows</li>
        </ul>
    ),
    amenidades: (
        <ul className="list-disc ml-5">
            <li>Piscina infinity en la terraza / Rooftop infinity pool</li>
            <li>Spa y centro de bienestar / Spa and wellness center</li>
            <li>Gimnasio de ultima generacion / State-of-the-art fitness center</li>
            <li>Concierge y servicio de valet 24/7 / 24/7 concierge and valet</li>
            <li>Salon privado y sala de cine / Private lounge and screening room</li>
            <li>Marina privada / Private marina access</li>
            <li>Estacionamiento cubierto / Covered parking</li>
        </ul>
    ),
};
export default project;
