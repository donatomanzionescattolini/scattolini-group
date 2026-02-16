import Constructora from "../../../models/constructora/Constructora.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function Ella(lang: "en" | "es" = "es") {
    const EllaObject = new Desarrollo();
    EllaObject.estimatedCompletionYear=2026;
    EllaObject.numberOfRooms={start:1,end:2};
    EllaObject.numberOfUnits=95;
    EllaObject.typeOfUnits= lang === "en" ? "Apartments" : "Apartamentos";
    EllaObject.ubicación = "6940 Abbot Avenue, Miami Beach, FL 33141";

    EllaObject.nombre = "ella";
    EllaObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};
    EllaObject.introduccion = [];
    EllaObject.titulo = {
        es: "Ella Miami Beach",
        en: "Ella Miami Beach"
    };
    EllaObject.introduccion = lang === "en" ? [
        "Ella, a tribute to Miami Beach's splendid history, combines vintage elegance with contemporary lines, creating a moving atmosphere that captures the spirit of Miami Beach.",
        "Meticulously designed, Ella offers exceptional living experiences, meeting the highest standards of contemporary sophistication.",
        "Ella sets a new standard for Miami residential developments with short-term rentals. The renowned Arquitectonica firm developed a bold and modern aesthetic. Its modern and efficient design can be experienced in all amenities and residences. The building offers 95 residences with short-term rentals ranging from 1-bedroom suites to 2-bedrooms, with ocean and bay views, along with luxury interior finishes."
    ] : [
        "Ella, un tributo a la espléndida historia de Miami Beach, combina la elegancia vintage con líneas contemporáneas, creando una atmósfera conmovedora que captura el espíritu de Miami Beach.",
        "Meticulosamente diseñada, Ella ofrece experiencias de vida excepcionales, cumpliendo con los más altos estándares de sofisticación contemporánea.",
        "Ella establece un nuevo estándar para los desarrollos residenciales de Miami con alquileres a corto plazo. La reconocida firma Arquitectonica, desarrolló una estética atrevida y moderna. Su diseño moderno y eficiente se puede experimentar en todas las comodidades y residencias El edificio ofrece 95 residencias con alquileres a corto plazo que van desde suites de 1 dormitorio hasta 2 dormitorios, con vistas al mar y a la bahía, junto con acabados interiores de lujo."
    ];
    EllaObject.amenidades = lang === "en" ? [
        "Rooftop pool overlooking Miami's downtown skyline and the Atlantic Ocean",
        "Cold plunge",
        "Sauna",
        "Fitness center",
        "Padel / pickleball court",
        "Residents lounge",
        "Lush outdoor yoga and meditation terrace",
        "Summer kitchen",
        "Outdoor shower",
        "Observation deck and lounge",
        "Outdoor covered dining",
        "Complimentary beach cruisers",
        "Coworking lounge",
        "On-site property management",
        "On-site parking garage",
        "Micro-mobility parking",
        "Bike storage",
        "Beach and surf storage",
        "Package room",
        "Grand lobby with lounge",
        "On-site retail",
        "Covered walkway",
        "Two elevators and loading dock for easy move-in and move-out"
    ] : [
        "Piscina en la azotea con vistas al horizonte del centro de Miami y al Océano Atlántico",
        "Inmersión en frío",
        "Sauna",
        "Gimnasio",
        "Pista de pádel / pickleball",
        "Salón para residentes",
        "Exuberante terraza de yoga y meditación al aire libre",
        "Cocina de verano",
        "Ducha exterior",
        "Plataforma de observación y salón",
        "Comedor cubierto al aire libre",
        "Cruceros de playa de cortesía",
        "Salón de coworking",
        "Administración de propiedades in situ",
        "Garaje de estacionamiento en el lugar",
        "Aparcamiento de micromovilidad",
        "Almacenamiento de bicicletas",
        "Almacenamiento de playa y surf",
        "Sala de paquetes",
        "Gran vestíbulo con salón",
        "Venta minorista in situ",
        "Paseo cubierto",
        "Dos ascensores y muelle de carga con fácil entrada y salida"
    ];
    EllaObject.residencias = lang === "en" ? [
        "Ocean / bay views",
        "Beach proximity",
        "Approximately 9'+ ceiling heights",
        "In-unit washer/dryer",
        "Terraces with outlets",
        "Loading dock for easy moving",
        "Short-term rentals allowed",
        "ItalKraft kitchens",
        "Panel-ready appliance package: Jennair appliance package, 30\" induction range, 24 to 36\" refrigerators, dishwasher, oven/microwave",
        "Kitchen island in select residences",
        "Appliance garages in select residences",
        "Designer closets",
        "Stone countertops",
        "Hansgrohe plumbing fixtures and hardware",
        "Laufen toilet and sink",
        "Fully furnished residences available from Interiors by Steven G for purchase"
    ] : [
        "Vistas al mar / bahía",
        "Proximidad a la playa",
        "Aproximadamente 9' + alturas de techo",
        "Lavadora/secadora en el apartamento",
        "Terrazas con outlets",
        "Muelle de carga para facilitar las mudanzas",
        "Se permiten alquileres a corto plazo",
        "Cocinas ItalKraft",
        "Paquete de electrodomésticos listo para paneles: Paquete de electrodomésticos Jennair, estufa de inducción de 30\", refrigeradores de 24 a 36\", lavaplatos, horno/microondas",
        "Isla de cocina en residencias selectas",
        "Garajes para electrodomésticos en residencias selectas",
        "Armarios de diseño",
        "Encimeras de piedra",
        "Herrajes y accesorios de fontanería de Hansgrohe",
        "Inodoro y lavabo Laufen",
        "Residencias totalmente amuebladas disponibles en Interiors by Steven G para su compra"
    ];
    EllaObject.caracteristicas = {edificio: EllaObject.displayCaracteristicasEdificio(), residencias: EllaObject.displayCaracteristicasResidencias(), amenidades: EllaObject.displayAmenidades()};
    
    EllaObject.banner = true;
    EllaObject.area = MiamiBeach();
    EllaObject.constructora=new Constructora("Constellation");
    EllaObject.slogan = {
        es: "Un Tributo Al Glamuroso Pasado De Miami Beach",
        en: "A Tribute to Miami Beach's Glamorous Past"
    };
    EllaObject.numberOfImages = 21;
    EllaObject.video = <iframe width="555" height="500" className="object-fit-cover" src="https://www.youtube.com/embed/mIbAaxXmKTI?autoplay=1"  title="Ella Miami Beach - Airbnb boutique"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>;
    return EllaObject;
}