import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function SeventyTwoPark(lang: "en" | "es" = "es") {
    const SeventyTwoParkObject = new Desarrollo();


    SeventyTwoParkObject.nombre = "72-park";
    SeventyTwoParkObject.caracteristicas = {
        edificio: lang === "en" ? (
            <ul>
                <li>Floors: 22</li>
                <li>Units: 270 residences with Jr-1, 1, 2, and 3 bedrooms</li>
                <li>Location: 580 72nd St, Miami Beach, FL 33141</li>
                <li>
                    Approved for short-term rentals, granting flexibility and possibilities
                </li>
                <li>
                    Grand double-height lobby with floor-to-ceiling windows that allow natural light
                </li>
                <li>
                    Self-parking available for owners and guests
                </li>
                <li>24-hour reception</li>
                <li>24-hour building security</li>
                <li>
                    Advanced smart building technology offers high-speed fiber optic wireless Internet access in all common areas and residences
                </li>
                <li>
                    Prestigious LEED Gold certification, a testament to the commitment to sustainability
                </li>
                <li>
                    3 high-speed passenger elevators equipped with access control
                </li>
                <li>
                    Abundant culinary options, with multiple restaurants in the building
                </li>
            </ul>
        ) : (
            <ul>
                <li>Pisos: 22</li>
                <li>Unidades: 270 residencias de Jr-1, 1, 2 y 3 dormitorios</li>
                <li>Ubicación: 580 72nd St, Miami Beach, FL 33141</li>
                <li>
                    Aprobado para alquileres a corto plazo, otorgando flexibilidad y
                    Posibilidades
                </li>
                <li>
                    Gran vestíbulo de doble altura con ventanales de piso a techo que
                    dejan pasar la luz natural
                </li>
                <li>
                    Estacionamiento sin asistencia disponible para propietarios e
                    invitados
                </li>
                <li>Recepción 24 horas</li>
                <li>Seguridad en el edificio las 24 horas</li>
                <li>
                    La tecnología avanzada de construcción inteligente ofrece fibra de
                    alta velocidad acceso inalámbrico óptico a Internet en todas las
                    áreas comunes y vivienda
                </li>
                <li>
                    Prestigiosa certificación LEED Gold, un testimonio de la
                    Compromiso con la sostenibilidad
                </li>
                <li>
                    3 ascensores de pasajeros de alta velocidad equipados con control
                    de acceso
                </li>
                <li>
                    Abundan las opciones culinarias, con múltiples restaurantes en El
                    inmueble
                </li>
            </ul>
        ),
        residencias: lang === "en" ? (
            <ul>
                <li>Modern, open designs from 470 to 1,177 square feet</li>
                <li>
                    All residences offer fully furnished options
                </li>
                <li>
                    Panoramic ocean, park, Intracoastal, and Miami skyline views from your own private sanctuary
                </li>
                <li>Spacious 6½-foot-deep private balcony</li>
                <li>
                    Ceiling heights range from 9 to 10 feet, creating an atmosphere of grandeur and spaciousness
                </li>
                <li>
                    Floor-to-ceiling glass sliding doors and impact-resistant glass in all residences allow an abundance of natural light while providing a seamless connection to the outside world
                </li>
                <li>
                    Advanced smart building technology offering high-speed fiber optic wireless Internet, HDTV, keyless entry to all residences with SALTO and smart access controls, and telephone/data lines
                </li>
                <li>
                    Energy-efficient central air conditioning with individual control and heating system
                </li>
                <li>
                    Enjoy a chef's kitchen with a fully integrated European-style appliance package including refrigerator, oven, induction cooktop, speed oven, and dishwasher from Bosch, SMEG, and Fisher & Paykel
                </li>
                <li>
                    Imported European cabinets with premium hardware, elegant imported quartz countertops, backsplashes, and contemporary stainless steel sink with gourmet faucet and integrated sprayer
                </li>
                <li>
                    Escape to your sanctuary within the bathroom, where imported European cabinets with premium hardware radiate elegance
                </li>
                <li>
                    Imported quartz countertops and backsplashes, custom-finished floors and walls in wet areas, and premium Hansgrohe fixtures, hardware, and accessories create a spa-like environment
                </li>
            </ul>
        ) : (
            <ul>
                <li>Diseños modernos y abiertos de 470 a 1,177 pies cuadrados</li>
                <li>
                    Todas las residencias ofrecen opciones completamente amuebladas
                </li>
                <li>
                    Vistas panorámicas al océano, al parque, a la intracosta y al
                    horizonte de Miami desde su propio santuario privado
                </li>
                <li>Amplio balcón privado de 6 1⁄2 pies de profundidad</li>
                <li>
                    Las alturas de los techos varían de 9 a 10 pies, creando una
                    atmósfera de grandeza y amplitud
                </li>
                <li>
                    Las puertas correderas de vidrio de piso a techo y el vidrio
                    resistente a los impactos en todas las residencias permiten una
                    abundancia de luz natural a la vez que proporciona una conexión
                    perfecta con el mundo exterior
                </li>
                <li>
                    Tecnología avanzada de construcción inteligente que ofrece fibra
                    de alta velocidad Internet inalámbrico óptico, HDTV, entrada sin
                    llave a todas las residencias con SALTO y controles de acceso
                    inteligentes, y líneas telefónicas/de datos
                </li>
                <li>
                    Aire acondicionado central de bajo consumo y control individual y
                    sistema de calefacción
                </li>
                <li>
                    Disfrute de la cocina de un chef con un paquete de
                    electrodomésticos de estilo europeo totalmente integrado que
                    incluye refrigerador, horno, placa de inducción, horno rápido y
                    lavavajillas de Bosch, SMEG y Fisher & Paykel
                </li>
                <li>
                    Gabinetes europeos importados con herrajes de primera calidad,
                    elegantes encimeras de cuarzo importado, placas para salpicaduras
                    y fregadero contemporáneo de acero inoxidable con grifo gourmet y
                    rociador integral
                </li>
                <li>
                    Escápate a tu santuario dentro del baño, donde los gabinetes
                    europeos importados con herrajes de primera calidad irradian
                    elegancia
                </li>
                <li>
                    Encimeras y salpicaderos de cuarzo importados, suelos y paredes
                    con acabados a medida en zonas húmedas y herrajes, herrajes y
                    accesorios de primera calidad de Hansgrohe, que crean un ambiente
                    similar al de un spa
                </li>
            </ul>
        ),
        amenidades: lang === "en" ? (
            <ul>
                64,000 square feet of amenities, including:
                <li>
                    Resort-style pool spanning over 150 feet, accompanied by poolside cabanas
                </li>
                <li>
                    Pool terrace with outdoor bar located under a charming pergola, offering towel service and delicious cocktails
                </li>
                <li>
                    Lush landscaping across nearly a full acre of 5th-floor pool terrace and amenity space
                </li>
                <li>
                    5th-floor restaurant, bar, and lounge (with indoor and outdoor seating), providing pool service and offering captivating ocean views
                </li>
                <li>24/7 coworking lounge</li>
                <li>
                    Distinctive double-height enclosed glazing, fully equipped, state-of-the-art fitness center with Technogym equipment and views of the pool and gardens
                </li>
                <li>Yoga lounge</li>
                <li>Children's playroom</li>
                <li>
                    Private outdoor grilling area with pergola surrounded by landscaping
                </li>
                <li>Concierge</li>
                <li>
                    Access to nearby Miami Beach Tennis Center and Normandy Shores golf club
                </li>
                <li>
                    Use the private golf cart shuttle service for quick beach visits. Borrow children's beach toys, boogie boards, paddle boards, bicycles, and more
                </li>
                <li>
                    Owners-only private rooftop features a terrace with panoramic views of the beach, ocean, park, Intracoastal, and Miami skyline, as well as dining areas and grills. Relax in private seating areas, enjoy outdoor movie nights, or gather around the big screen for sporting events
                </li>
                <li>Pet spa on ground floor</li>
            </ul>
        ) : (
            <ul>
                64,000 pies cuadrados de amenidades, que incluyen:
                <li>
                    Piscina estilo centro turístico que se extiende por más de 150
                    pies, acompañada de cabañas junto a la piscina
                </li>
                <li>
                    Terraza de la piscina con bar al aire libre ubicado bajo una
                    encantadora pérgola, que ofrece servicio de toallas y deliciosos
                    cócteles
                </li>
                <li>
                    Exuberante paisaje en casi un acre completo de la terraza de la
                    piscina del 5º piso y espacio de servicios
                </li>
                <li>
                    Restaurante, bar y salón en el 5º piso (con asientos en el
                    interior y al aire libre), que brinda servicio a la piscina y
                    ofrece cautivadoras vistas al mar
                </li>
                <li>Salón de coworking 24/7</li>
                <li>
                    Distintivo acristalamiento cerrado a doble altura, totalmente
                    equipado, gimnasio de última generación con equipos Technogym y
                    vistas a la piscina y los jardines
                </li>
                <li>Salón de yoga</li>
                <li>Sala de juegos para niños</li>
                <li>
                    Área privada de parrilla al aire libre con pérgola rodeada de
                    paisajismo
                </li>
                <li>Conserje</li>
                <li>
                    Acceso al cercano Miami Beach Tennis Center y al club de golf
                    Normandy Shores
                </li>
                <li>
                    Utilice el servicio de transporte privado en carrito de golf para
                    visitas rápidas a la playa. Toma prestados juguetes de playa para
                    niños, tablas de boogie, tablas de remo, bicicletas y más
                </li>
                <li>
                    Solo para propietarios, una azotea privada cuenta con una terraza
                    con vistas panorámicas de la playa, el océano, el parque, la
                    intracosta y el horizonte de Miami, así como áreas de comedor y
                    parrillas. Relájese en las zonas de estar privadas, disfrute de
                    noches de cine al aire libre o reúnase alrededor del televisor
                    grande para eventos deportivos
                </li>
                <li>Spa para mascotas en la planta baja</li>
            </ul>
        ),
    };
    SeventyTwoParkObject.introduccion = [lang === "en"
        ? "Living at 72 Park offers residents the best of both worlds: a quiet, exclusive community with easy access to the city buzz. The building has impressive architectural design, with smooth curves at all corners, glass railings, and floor-to-ceiling glass windows. The open-plan residences were carefully designed to provide comfort and style, offering high ceilings, spacious and bright units, condominium-grade interior finishes, Italian cabinetry, and energy-efficient appliances. Residents enjoy captivating outdoor amenities in a space exceeding 30,000 square feet. This space features an observation deck, outdoor garden, and training pool. Its desirable North Miami Beach location is close to sidewalk cafes, country clubs, Lincoln Road, and Bal Harbour Shops, offering something different to do every day."
        : "Al vivir en 72 Park, se ofrece lo mejor de ambos mundos a los residentes: una comunidad tranquila y exclusiva con fácil acceso al furor de la ciudad. El edificio tiene un diseño arquitectónico impresionante, con curvas suaves en todas las esquinas, barandillas de vidrio y ventanas de vidrio del piso al techo. Las residencias de planta abierta fueron cuidadosamente diseñadas para brindar comodidad y estilo, y ofrecen techos altos, unidades amplias y luminosas, acabados interiores de grado de condominio, gabinetes italianos y electrodomésticos de bajo consumo. Los residentes disfrutan de cautivadoras comodidades al aire libre, en un espacio que supera los 30,000 pies cuadrados. Este espacio cuenta con una plataforma de observación, jardín al aire libre y piscina de entrenamiento. Su ubicación deseable en North Miami Beach está cerca de cafés en la acera, clubes de campo, Lincoln Road y Bal Harbour Shops, lo que ofrece algo diferente para hacer todos los días.",
    ];
    SeventyTwoParkObject.titulo = {
        es: "72 Park",
        en: "72 Park"
    };
    SeventyTwoParkObject.slogan = {
        es: <span className="pb-0 mb-0">
          La vida en Miami Beach <em>redefinida</em>
        </span>,
        en: <span className="pb-0 mb-0">
          Miami Beach living <em>redefined</em>
        </span>
    };
    SeventyTwoParkObject.numberOfImages = 19;
    SeventyTwoParkObject.banner = true;
    SeventyTwoParkObject.area = MiamiBeach();

    return SeventyTwoParkObject;
}
