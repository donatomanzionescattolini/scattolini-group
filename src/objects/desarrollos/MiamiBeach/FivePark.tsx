import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function FivePark(lang: "en" | "es" = "es") {
    const FiveParkObject = new Desarrollo();
    FiveParkObject.nombre = "five-park";

    FiveParkObject.direccion = "500 Alton Rd, Miami Beach, FL 33139, Estados Unidos";
    FiveParkObject.caracteristicas = {
        amenidades: lang === "en" ? (
            <>
                <ul className="text-capitalize list ">
                    <li>Coworking area with private offices and meeting rooms</li>
                    <li>Children's learning lab and teen club</li>
                    <li>Screening room</li>
                    <li>Luxury short-term guest suites for friends and family</li>
                    <li>Residents-only poolside bar and café</li>
                    <li>24-hour concierge and butler service</li>
                    <li>Housekeeping services available</li>
                    <li>Transportation to Beach Club via electric vehicle</li>
                    <li>Fully equipped fitness center</li>
                    <li>Spa and treatment rooms</li>
                    <li>State-of-the-art fiber optics provide high-quality internet and WiFi service from every corner of Five Park residences and amenities, including garage and elevator spaces</li>

                    <li>
                        The adjacent 3-acre Canopy Park features a MONSTRUM playground, outdoor gym, picnic areas, dog park, shaded gardens, and art installations
                    </li>

                    <li>
                        The green, plant-filled amenity deck boasts stunning sunset views of the Miami skyline and bay, visible from adult and family pools. The expansive space also offers unparalleled relaxation with shaded trellises, sunset terrace, numerous cabanas and lounges, and meditation deck
                    </li>

                    <li>
                        Private beach club located south of Fifth, with lounge chairs, umbrellas, and towel service
                    </li>
                </ul>
            </>
        ) : (
            <>
                <ul className="text-capitalize list ">
                    <li> área de coworking con oficinas privadas y</li>
                    <li>salas de juntas</li>
                    <li>
                        Laboratorio de aprendizaje para niños y club para adolescentes
                    </li>
                    <li> Sala de proyección</li>
                    <li> suites de lujo para huéspedes a corto plazo para amigos</li>
                    <li>y familia</li>
                    <li> Bar y cafetería en la piscina solo para residentes</li>
                    <li> Servicio de conserjería y mayordomo 24 horas</li>
                    <li> servicios de limpieza disponibles</li>
                    <li> Transporte al Beach Club vía eléctrica Small</li>
                    <li> Gimnasio totalmente equipado</li>
                    <li> salas de spa y tratamientos</li>
                    <li>
                        11 La fibra óptica de última generación proporciona alta calidad
                    </li>
                    <li>Servicio de internet y WiFi desde todos los rincones de</li>
                    <li>Residencias y comodidades de Five Park, incluso garaje</li>
                    <li>y espacios de ascensor</li>

                    <li>
                        El Canopy Park adyacente de 3 acres cuenta con un área de juegos
                        MONSTRUM, un gimnasio al aire libre, áreas de pícnic, un parque
                        para perros, jardines con sombra e instalaciones de arte
                    </li>

                    <li>
                        La cubierta de servicios verde y llena de plantas cuenta con
                        impresionantes vistas del atardecer del horizonte y la bahía de
                        Miami, visibles desde las piscinas para adultos y para familias.
                        El amplio espacio también ofrece una relajación inigualable con
                        enrejados con sombra, una terraza al atardecer, numerosas
                        cabañas y salones y una plataforma de meditación
                    </li>

                    <li>
                        Club de playa privado ubicado al sur de la Quinta, con
                        camastros, sombrillas y servicio de toallas
                    </li>
                </ul>
            </>
        ),
        edificio: lang === "en" ? (
            <>
                <ul>
                    <li>Floors: 48</li>
                    <li>Units: 98 residences with 2, 3, 4, and 5 bedrooms</li>
                    <li>Location: 500 Alton Rd, Miami Beach, FL 33139</li>
                </ul>
                <ul>
                    <li>Private porte-cochère and residents' lobby</li>
                    <li>Electric vehicle charging stations</li>
                    <li>
                        The adjacent 3-acre Canopy Park features a MONSTRUM playground, outdoor gym, picnic areas, dog park, shaded gardens, and art installations
                    </li>
                    <li>
                        The green, plant-filled amenity terrace boasts stunning sunset views of the Miami skyline and bay, visible from adult and family pools. The expansive space also offers unparalleled relaxation with shaded trellises, sunset terrace, numerous cabanas and lounges, and meditation deck
                    </li>
                    <li>Private Beach Club</li>
                    <li>Coworking area with private offices and meeting rooms</li>
                    <li>
                        Children's learning lab and teen club
                    </li>
                    <li>Screening room</li>
                    <li>Luxury short-term guest suites</li>
                    <li>Residents-only poolside bar and café</li>
                    <li>24-hour concierge and butler service</li>
                    <li>Fitness center</li>
                    <li>Spa and treatment rooms</li>
                    <li>
                        State-of-the-art fiber optics provide high-quality Internet and WiFi service from every corner of Five Park residences and amenities, including garage and elevator spaces
                    </li>
                </ul>
            </>
        ) : (
            <>
                <ul>
                    <li>Pisos: 48</li>
                    <li>Unidades: 98 residencias de 2, 3, 4 y 5 dormitorios</li>
                    <li>Ubicación: 500 Alton Rd, Miami Beach, FL 33139</li>
                </ul>
                <ul>
                    <li>Privado, porte-cochere y vestíbulo para residentes</li>
                    <li>Estaciones de carga de vehículos eléctricos</li>
                    <li>
                        El Canopy Park adyacente de 3 acres cuenta con un parque
                        infantil MONSTRUM, un gimnasio al aire libre, áreas de picnic,
                        parque para perros, jardines sombreados e instalaciones
                        artísticas
                    </li>
                    <li>
                        La terraza de servicios verde y llena de plantas cuenta con
                        impresionantes vistas del atardecer del horizonte y la bahía de
                        Miami, visibles desde las piscinas para adultos y familias. El
                        amplio espacio también ofrece una relajación inigualable con
                        enrejados a la sombra, una terraza al atardecer, numerosas
                        cabañas y salones, y una terraza de meditación
                    </li>
                    <li>Club de Playa Privado</li>
                    <li>Zona de coworking con oficinas privadas y salas de juntas</li>
                    <li>
                        Laboratorio de aprendizaje para niños y club para adolescentes
                    </li>
                    <li>Sala de proyecciones</li>
                    <li>Suites de lujo para huéspedes a corto plazo</li>
                    <li>Bar y cafetería en la piscina solo para residentes</li>
                    <li>Servicio de conserjería y mayordomo las 24 horas</li>
                    <li>Gimnasio</li>
                    <li>Salas de spa y tratamiento</li>
                    <li>
                        La fibra óptica de última generación brinda servicio de Internet
                        y WiFi de alta calidad desde todos los rincones de las
                        residencias y servicios de Five Park, incluso los espacios de
                        garaje y ascensor
                    </li>
                </ul>
            </>
        ),
        residencias: lang === "en" ? (
            <>
                <ul>
                    <li>Private elevator</li>
                    <li>
                        10' wide sliding door openings allow terrace access from living rooms
                    </li>
                    <li>10-foot high ceilings</li>
                    <li>
                        Residences feature custom-designed kitchens by Gabellini Sheppard
                    </li>
                    <li>Italian-made kitchen cabinets</li>
                    <li>
                        Decorative colored frosted glass upper cabinets
                    </li>
                    <li>Integrated dining tables with wood top</li>
                    <li>
                        Gaggenau appliances with ducted venting grilles
                    </li>
                    <li>Master bedrooms with walk-in closets</li>
                    <li>
                        Custom-designed Gabellini Sheppard master bathrooms feature Italian-made vanities and textured glass shower doors
                    </li>
                    <li>
                        Cutting-edge Hansgrohe bathroom fixtures are present in secondary bathrooms
                    </li>
                    <li>
                        Front-loading washers and ducted, vented dryers for clean, quiet laundry access
                    </li>
                    <li>
                        Custom Five Park app for convenient amenity management and home experience
                    </li>
                    <li>
                        Residences are prepared with platinum pre-wiring
                    </li>
                </ul>
            </>
        ) : (
            <>
                <ul>
                    <li>Ascensor privado</li>
                    <li>
                        Las aberturas de las puertas corredizas de 10' de ancho permiten
                        el acceso a la terraza desde las salas de estar
                    </li>
                    <li>Techos altos de 10 pies</li>
                    <li>
                        Las residencias cuentan con cocinas diseñadas a medida por
                        Gabellini Sheppard
                    </li>
                    <li>Armarios de cocina de fabricación italiana</li>
                    <li>
                        Gabinetes superiores de vidrio esmerilado de color decorativo
                    </li>
                    <li>Mesas de comedor integradas con tapa de madera</li>
                    <li>
                        Electrodomésticos Gaggenau con rejillas de ventilación con
                        conductos
                    </li>
                    <li>Dormitorios principales con vestidores</li>
                    <li>
                        Los baños principales Gabellini Sheppard diseñados a medida
                        cuentan con tocadores de fabricación italiana y puertas de ducha
                        de vidrio texturizado
                    </li>
                    <li>
                        Los accesorios de baño de diseño vanguardista de Hansgrohe están
                        presentes en los baños secundarios
                    </li>
                    <li>
                        Lavadoras de carga frontal y secadoras con conductos y
                        ventilación para un acceso limpio y silencioso a la lavandería
                    </li>
                    <li>
                        Aplicación personalizada Five Park para una gestión cómoda de
                        los servicios y la experiencia en el hogar
                    </li>
                    <li>
                        Las residencias están preparadas con precableado de platino
                    </li>
                </ul>
            </>
        ),
    };
    FiveParkObject.introduccion = lang === "en" ? [
        "Bay and ocean view residences in Miami's most innovative tower",
        "A brand new residential tower arrives in Miami Beach with incomparable views in all directions. Exceptional amenities across 50,000 square feet (4,645 square meters) with wellness services, private beach club, and park on three acres of land right outside your door. A truly stunning creation from the world's most visionary design minds"
    ] : [
        "Residencias con vista a la bahía yel mar en la torre más innovadora de miami",
        "Un flamante torre residencial llega a Miami Beach con vistas incomparables en todas las direcciones.Amenidades excepcionales a lo largo de 50.000 pies cuadrados (4645 metros cuadrados) con serviciospropios de bienestar, club de playa privado y parque con un terreno de tres acres (más de una hectárea) frente a la puerta de su casa. Una creación verdaderamente impresionante de las mentes de diseño más visionarias del mundo",
    ];
    FiveParkObject.titulo = {
        es: "Five Park",
        en: "Five Park"
    };
    FiveParkObject.slogan = {
        es: "VidaResidences a un Nivel Superior",
        en: "Residential Living at a Higher Level"
    };
    FiveParkObject.numberOfImages = 45;
    FiveParkObject.banner = true;
    FiveParkObject.area = MiamiBeach();
    return FiveParkObject;
}
