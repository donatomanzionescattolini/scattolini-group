import Developer from "../../../models/constructora/Constructora.tsx";
import Project from "../../../models/desarrollos/NewDevelopment.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function Ella() {
    const EllaObject = new Project(MiamiBeach());
    EllaObject.yearOfCompletion = 2026;
    EllaObject.numberOfRooms = {start: 1, end: 2};
    EllaObject.numberOfUnits = 95;
    EllaObject.typeOfUnits = "Apartamentos";
    EllaObject.address = "6940 Abbot Avenue, Miami Beach, FL 33141";

    EllaObject.nameForProjectFolders = "ella";
    EllaObject.traits = {building: <></>, residences: <></>, amenities: <></>};
    EllaObject.introduction = [];
    EllaObject.officialName = "Ella Miami Beach";
    EllaObject.introduction = ["Ella, un tributo a la espléndida historia de Miami Beach, combina la elegancia vintage con líneas contemporáneas, creando una atmósfera conmovedora que captura el espíritu de Miami Beach.", "Meticulosamente diseñada, Ella ofrece experiencias de vida excepcionales, cumpliendo con los más altos estándares de sofisticación contemporánea.", "Ella establece un nuevo estándar para los desarrollos residenciales de Miami con alquileres a corto plazo. La reconocida firma Arquitectonica, desarrolló una estética atrevida y moderna. Su diseño moderno y eficiente se puede experimentar en todas las comodidades y residencias El edificio ofrece 95 residencias con alquileres a corto plazo que van desde suites de 1 dormitorio hasta 2 dormitorios, con vistas al mar y a la bahía, junto con acabados interiores de lujo."];
    EllaObject.amenities = ["Piscina en la azotea con vistas al horizonte del centro de Miami y al Océano Atlántico", "Inmersión en frío", "Sauna", "Gimnasio", "Pista de pádel / pickleball", "Salón para residentes", "Exuberante terraza de yoga y meditación al aire libre", "Cocina de verano", "Ducha exterior", "Plataforma de observación y salón", "Comedor cubierto al aire libre", "Cruceros de playa de cortesía", "Salón de coworking", "Administración de propiedades in situ", "Garaje de estacionamiento en el lugar", "Aparcamiento de micromovilidad", "Almacenamiento de bicicletas", "Almacenamiento de playa y surf", "Sala de paquetes", "Gran vestíbulo con salón", "Venta minorista in situ", "Paseo cubierto", "Dos ascensores y muelle de carga con fácil entrada y salida"];
    EllaObject.residences = ["Vistas al mar / bahía", "Proximidad a la playa", "Aproximadamente 9' + alturas de techo", "Lavadora/secadora en el apartamento", "Terrazas con outlets", "Muelle de carga para facilitar las mudanzas", "Se permiten alquileres a corto plazo", "Cocinas ItalKraft", "Paquete de electrodomésticos listo para paneles: Paquete de electrodomésticos Jennair, estufa de inducción de 30\", refrigeradores de 24 a 36\", lavaplatos, horno/microondas", "Isla de cocina en residencias selectas", "Garajes para electrodomésticos en residencias selectas", "Armarios de diseño", "Encimeras de piedra", "Herrajes y accesorios de fontanería de Hansgrohe", "Inodoro y lavabo Laufen", "Residencias totalmente amuebladas disponibles en Interiors by Steven G para su compra"];
    EllaObject.traits = {
        building: EllaObject.displayCaracteristicasEdificio(),
        residences: EllaObject.displayAmenities(),
        amenities: EllaObject.displayAmenities()
    };

    EllaObject.banner = true;
    EllaObject.area = MiamiBeach();
    EllaObject.developer = new Developer("Constellation");
    EllaObject.subtitle = "Un Tributo Al Glamuroso Pasado De Miami Beach";
    EllaObject.numberOfImages = 21;
    EllaObject.video = <iframe width="555" height="500" className="object-fit-cover"
                               src="https://www.youtube.com/embed/mIbAaxXmKTI?autoplay=1"
                               title="Ella Miami Beach - Airbnb boutique"
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               allowFullScreen></iframe> as unknown as Element;
    return EllaObject;
}