import Project from "../../../models/desarrollos/Project.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function Nexo() {
    const NexoObject = new Project();
    NexoObject.name = "nexo";
    NexoObject.title = "Nexo";
    NexoObject.subtitle = "Bienvenido a la vida conectada.";
    NexoObject.banner = true;
    NexoObject.area = MiamiBeach();
    NexoObject.yearOfCompletion = 2025;
    NexoObject.numberOfUnits = 254;
    NexoObject.typeOfUnits = "Residencias de Estudios";
    NexoObject.numberOfRooms = {start: 1, end: 4};
    NexoObject.address = "13899 Biscayne Blvd, North Miami Beach, FL 33181, Estados Unidos";
    NexoObject.introduction = ["Nexo Residences está diseñado para la élite, con su arquitectura moderna única y sus sofisticados acabados interiores, el edificio cuenta con una belleza sin esfuerzo. Cuenta con el programa de alquiler sin restricciones, lo que permite a sus residentes maximizar la inversión con plataformas famosas para estadías a corto plazo, estacionales y a largo plazo como AirBnB. El arquitecto del edificio es la galardonada firma Frankel Benayoun Architects Inc. El diseño interior y el paisajismo fueron concebidos por Urban Robot. Sus lujosas 254 residencias, que van desde estudios hasta opciones de 4 dormitorios, también cuentan con impresionantes vistas de la ciudad. Nexo North Miami Beach incluye todas las comodidades, desde una piscina estilo centro turístico con servicio de toallas hasta un gimnasio de alta tecnología. La conveniente ubicación del edificio permite la proximidad al centro de Miami y Aventura, Sunny Isles y más."];
    NexoObject.residences = ["Flexibilidad de alquiler a corto plazo, estacional y a largo plazo sin restricciones", "Totalmente terminado y bellamente amueblado", "Acceso con llave inteligente", "Tecnología de gestión del hogar inteligente precableada", "Pisos de porcelanato importado", "Armarios empotrados en el dormitorio, incluido el armario del propietario dedicado y con cerradura", "Lavadora y secadora", "Ventanas de piso a techo con tratamientos para ventanas", "Amplios balcones con barandillas de vidrio", "Cocinas de estilo europeo totalmente equipadas", "Encimeras de cuarzo", "Luminarias de color negro mate", "Electrodomésticos de primera línea", "Baños con gabinetes modernos y pisos de porcelanato importado", "Azulejo de ducha texturizado", "Sin limitaciones de anuncios (AirBnB, Vrbo, etc.)", "Gestión profesional in situ para garantizar una llegada y salida sin problemas para los residentes e invitados", "El conserje digital integrado ofrece gestión de reservas residenciales, limpieza y comunicación con los huéspedes", "Conserje en el lugar dedicado a las necesidades de los residentes y huéspedes"];
    NexoObject.amenities = ["Quince pisos con 254 residencias listas para mudarse", "Experiencia de entrega y llegada a Porte Cochère", "Salón de dos pisos en el vestíbulo de llegadas con recepción y conserje", "Centro tecnológico de última generación de dos pisos con cafetería, espacios de coworking y centro de negocios", "WiFi en todas las zonas comunes", "Zona de estar al aire libre con sombrillas", "Parque infantil y plaza", "Almacenamiento de bicicletas", "Vestuario inteligente de autoservicio para entregas", "Estaciones de carga para coches eléctricos", "Dos entradas cerradas con servicio de aparcacoches disponibles para los huéspedes", "Se admiten mascotas", "Salón social multiusos y espacio privado para eventos con cocina dedicada", "Gimnasio interior y exterior con estudio de yoga y entrenador virtual", "Vestuarios para él y para ella", "Piscina estilo centro turístico con solárium, dos spas y tumbonas cubiertas", "Bar terraza al aire libre", "Cocinas de verano con barbacoa y zona de estar", "Cubierta de observatorio al aire libre con vistas de 360º"];
    NexoObject.traits = {
        building: NexoObject.displayCaracteristicasEdificio(),
        residences: NexoObject.displayAmenities(),
        amenities: NexoObject.displayAmenities()
    };

    NexoObject.banner = true;
    NexoObject.video = <iframe width="500" height="300" className="object-fit-cover"
                               src="https://www.youtube.com/embed/E9S3zVDO1vs?autoplay=1"
                               title="Nexo Residences - North Miami Beach (2024) por Julieta Lepre"
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               allowFullScreen></iframe>;
    NexoObject.numberOfImages = 41;
    return NexoObject;
}