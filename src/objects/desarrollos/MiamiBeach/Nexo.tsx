import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function Nexo(lang: "en" | "es" = "es") {
    const NexoObject = new Desarrollo();
    NexoObject.nombre = "nexo";
    NexoObject.titulo = {
        es: "Nexo",
        en: "Nexo"
    };
    NexoObject.slogan = {
        es: "Bienvenido a la vida conectada.",
        en: "Welcome to Connected Living."
    };
    NexoObject.banner = true;
    NexoObject.area = MiamiBeach();
    NexoObject.estimatedCompletionYear=2025;
    NexoObject.numberOfUnits=254;
    NexoObject.typeOfUnits = lang === "en" ? "Studio Residences" : "Residencias de Estudios";
    NexoObject.numberOfRooms={start: 1, end: 4};
    NexoObject.ubicación="13899 Biscayne Blvd, North Miami Beach, FL 33181, Estados Unidos";
    NexoObject.introduccion = [lang === "en"
        ? "Nexo Residences is designed for the elite, with its unique modern architecture and sophisticated interior finishes, the building features effortless beauty. It features an unrestricted rental program, allowing residents to maximize their investment with famous platforms for short-term, seasonal, and long-term stays such as AirBnB. The building's architect is the award-winning firm Frankel Benayoun Architects Inc. Interior design and landscaping were conceived by Urban Robot. Its luxurious 254 residences, ranging from studios to 4-bedroom options, also feature stunning city views. Nexo North Miami Beach includes all amenities, from a resort-style pool with towel service to a high-tech fitness center. The building's convenient location allows proximity to downtown Miami and Aventura, Sunny Isles, and more."
        : "Nexo Residences está diseñado para la élite, con su arquitectura moderna única y sus sofisticados acabados interiores, el edificio cuenta con una belleza sin esfuerzo. Cuenta con el programa de alquiler sin restricciones, lo que permite a sus residentes maximizar la inversión con plataformas famosas para estadías a corto plazo, estacionales y a largo plazo como AirBnB. El arquitecto del edificio es la galardonada firma Frankel Benayoun Architects Inc. El diseño interior y el paisajismo fueron concebidos por Urban Robot. Sus lujosas 254 residencias, que van desde estudios hasta opciones de 4 dormitorios, también cuentan con impresionantes vistas de la ciudad. Nexo North Miami Beach incluye todas las comodidades, desde una piscina estilo centro turístico con servicio de toallas hasta un gimnasio de alta tecnología. La conveniente ubicación del edificio permite la proximidad al centro de Miami y Aventura, Sunny Isles y más."];
    NexoObject.residencias = lang === "en" ? [
        "Short-term, seasonal, and long-term rental flexibility without restrictions",
        "Fully finished and beautifully furnished",
        "Smart key access",
        "Pre-wired smart home management technology",
        "Imported porcelain flooring",
        "Built-in bedroom closets, including dedicated and lockable owner's closet",
        "Washer and dryer",
        "Floor-to-ceiling windows with window treatments",
        "Spacious balconies with glass railings",
        "Fully equipped European-style kitchens",
        "Quartz countertops",
        "Matte black fixtures",
        "Premium appliances",
        "Bathrooms with modern cabinets and imported porcelain flooring",
        "Textured shower tile",
        "No listing limitations (AirBnB, Vrbo, etc.)",
        "Professional on-site management to ensure smooth check-in and check-out for residents and guests",
        "Integrated digital concierge offers residential booking management, cleaning, and guest communication",
        "On-site concierge dedicated to residents' and guests' needs"
    ] : [
        "Flexibilidad de alquiler a corto plazo, estacional y a largo plazo sin restricciones",
        "Totalmente terminado y bellamente amueblado",
        "Acceso con llave inteligente",
        "Tecnología de gestión del hogar inteligente precableada",
        "Pisos de porcelanato importado",
        "Armarios empotrados en el dormitorio, incluido el armario del propietario dedicado y con cerradura",
        "Lavadora y secadora",
        "Ventanas de piso a techo con tratamientos para ventanas",
        "Amplios balcones con barandillas de vidrio",
        "Cocinas de estilo europeo totalmente equipadas",
        "Encimeras de cuarzo",
        "Luminarias de color negro mate",
        "Electrodomésticos de primera línea",
        "Baños con gabinetes modernos y pisos de porcelanato importado",
        "Azulejo de ducha texturizado",
        "Sin limitaciones de anuncios (AirBnB, Vrbo, etc.)",
        "Gestión profesional in situ para garantizar una llegada y salida sin problemas para los residentes e invitados",
        "El conserje digital integrado ofrece gestión de reservas residenciales, limpieza y comunicación con los huéspedes",
        "Conserje en el lugar dedicado a las necesidades de los residentes y huéspedes"
    ];
    NexoObject.amenidades = lang === "en" ? [
        "Fifteen floors with 254 move-in ready residences",
        "Porte Cochère delivery and arrival experience",
        "Two-story arrival lobby lounge with reception and concierge",
        "State-of-the-art two-story tech center with café, coworking spaces, and business center",
        "WiFi in all common areas",
        "Outdoor seating area with umbrellas",
        "Children's playground and plaza",
        "Bike storage",
        "Smart self-service wardrobe for deliveries",
        "Electric car charging stations",
        "Two gated entrances with valet service available for guests",
        "Pet-friendly",
        "Multi-use social lounge and private event space with dedicated kitchen",
        "Indoor and outdoor gym with yoga studio and virtual trainer",
        "His and hers locker rooms",
        "Resort-style pool with sundeck, two spas, and covered loungers",
        "Outdoor terrace bar",
        "Summer kitchens with BBQ and seating area",
        "Outdoor observatory deck with 360º views"
    ] : [
        "Quince pisos con 254 residencias listas para mudarse",
        "Experiencia de entrega y llegada a Porte Cochère",
        "Salón de dos pisos en el vestíbulo de llegadas con recepción y conserje",
        "Centro tecnológico de última generación de dos pisos con cafetería, espacios de coworking y centro de negocios",
        "WiFi en todas las zonas comunes",
        "Zona de estar al aire libre con sombrillas",
        "Parque infantil y plaza",
        "Almacenamiento de bicicletas",
        "Vestuario inteligente de autoservicio para entregas",
        "Estaciones de carga para coches eléctricos",
        "Dos entradas cerradas con servicio de aparcacoches disponibles para los huéspedes",
        "Se admiten mascotas",
        "Salón social multiusos y espacio privado para eventos con cocina dedicada",
        "Gimnasio interior y exterior con estudio de yoga y entrenador virtual",
        "Vestuarios para él y para ella",
        "Piscina estilo centro turístico con solárium, dos spas y tumbonas cubiertas",
        "Bar terraza al aire libre",
        "Cocinas de verano con barbacoa y zona de estar",
        "Cubierta de observatorio al aire libre con vistas de 360º"
    ];
    NexoObject.caracteristicas={edificio:NexoObject.displayCaracteristicasEdificio(),residencias:NexoObject.displayCaracteristicasResidencias(),amenidades:NexoObject.displayAmenidades()};;
    NexoObject.banner=true;
    NexoObject.video=<iframe width="500" height="300" className="object-fit-cover" src="https://www.youtube.com/embed/E9S3zVDO1vs?autoplay=1"  title="Nexo Residences - North Miami Beach (2024) por Julieta Lepre" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>;
    NexoObject.numberOfImages=41;
    return NexoObject;
}