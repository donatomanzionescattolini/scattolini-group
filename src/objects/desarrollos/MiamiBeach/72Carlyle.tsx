import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function SeventyTwoCarlyle(lang: "en" | "es" = "es") {
    const SeventyTwoCarlyleObject = new Desarrollo(MiamiBeach());

    SeventyTwoCarlyleObject.nombre = "72-carlyle";
    SeventyTwoCarlyleObject.titulo = {
        es: "72 Carlyle - Miami Beach Residences",
        en: "72 Carlyle - Miami Beach Residences"
    };

    SeventyTwoCarlyleObject.slogan = {
        es: "La Riviera Italiana en Miami Beach",
        en: "The Italian Riviera in Miami Beach"
    };

    SeventyTwoCarlyleObject.introduccion = [lang === "en" 
        ? "72 Carlyle Miami Beach features 134 luxury residences in a 239,424 square foot tower. Renowned architect Piero Lissoni developed a bold and modern aesthetic. Amenities include a pool, fitness center, lush gardens, and social lounge. Its efficient modern design can be appreciated in all amenities and residences. 72 Carlyle Miami Beach sets a new standard for Miami residential developments. Its prime location in North Miami Beach, near cafes, country clubs, Lincoln Road, and Bal Harbour Shops, offers something different to do every day."
        : "72 Carlyle Miami Beach cuenta con 134 residencias de lujo en una torre de 239,424 pies cuadrados. El reconocido arquitecto Piero Lissoni desarrolló una estética audaz y moderna. Las comodidades incluyen piscina, gimnasio, exuberantes jardines y salón social. Su eficiente diseño moderno se puede apreciar en todas las comodidades y residencias. 72 Carlyle Miami Beach establece un nuevo estándar para los desarrollos residenciales de Miami. Su privilegiada ubicación en North Miami Beach, cerca de cafeterías, clubes de campo, Lincoln Road y Bal Harbour Shops, ofrece algo diferente que hacer cada día."];

SeventyTwoCarlyleObject.banner = true;
    SeventyTwoCarlyleObject.numberOfImages = 20;

    SeventyTwoCarlyleObject.direccion = "72 Carlyle Ave, Miami Beach, FL 33139";
    SeventyTwoCarlyleObject.numberOfFloors = 21;
    SeventyTwoCarlyleObject.numberOfUnits = 134;
    SeventyTwoCarlyleObject.typeOfUnits = lang === "en" ? "Luxury Condominiums" : "Condominios de lujo";
    SeventyTwoCarlyleObject.estimatedCompletionYear = 2027;

    SeventyTwoCarlyleObject.caracteristicas = {
        edificio: <>
            <dl>
                <dt>{lang === "en" ? "Address" : "Dirección"}</dt>
                <dd>{SeventyTwoCarlyleObject.direccion}</dd>
                <dt>{lang === "en" ? "Construction Year or Completion" : "Año De Construcción O Finalización"}</dt>
                <dd>{SeventyTwoCarlyleObject.estimatedCompletionYear}</dd>
                <dt>{lang === "en" ? "Number of Floors" : "Número De Pisos"}</dt>
                <dd>{SeventyTwoCarlyleObject.numberOfFloors}</dd>
                <dt>{lang === "en" ? "Number of Units" : "Número de Unidades"}</dt>
                <dd>{SeventyTwoCarlyleObject.numberOfUnits}</dd>
                <dt>{lang === "en" ? "Type of Units" : "Tipo De Unidades"}</dt>
                <dd>{SeventyTwoCarlyleObject.typeOfUnits}</dd>
            </dl>
        </>, amenidades: lang === "en" ? <>
            <ul>
                <li>134 condominium residences and penthouses with one to four bedrooms.</li>
                <li>Spectacular panoramic and direct ocean, Intracoastal canal, and park views</li>
                <li>Double-height lobby framed by floor-to-ceiling windows</li>
                <li>24-hour attended reception</li>
                <li>Private porte-cochère with valet parking and EV charging access</li>
                <li>Smart building integrated with high-speed wireless fiber optic internet access in all common areas</li>
                <li>24-hour monitoring at all building access points</li>
                <li>Over 45,000 square feet of exclusive indoor and outdoor residential amenities, designed and curated by Piero Lissoni. Resort-style pool with lush gardens and cabanas overlooking the Intracoastal canal</li>
                <li>Luxurious outdoor exhibition padel courts</li>
                <li>Lido terrace and gastronomic pergola for outdoor socializing</li>
                <li>Three interconnected social suites that can be combined for larger events, including the aperitif lounge with multiple seating areas and a wine cellar with chef's table</li>
                <li>Social lounge, available for private celebrations and events</li>
                <li>Gymnasium technical studio, a state-of-the-art fully equipped exercise center</li>
                <li>Yoga studio, ideal for private training sessions</li>
                <li>Resident spa with treatment space, steam room, and sauna</li>
                <li>Hot and cold outdoor plunge pools</li>
                <li>Lissoni library with floor-to-ceiling bookshelves</li>
                <li>Co-working space with private meeting rooms</li>
                <li>Wraparound children's playroom</li>
                <li>Luxurious panoramic rooftop terrace with gardens on the top floor of the building, dining areas, bar, and ocean, park, Intracoastal canal, and Miami skyline views</li>
            </ul>
        </> : <>
            <ul>
                <li>134 residencias en condominio y penthouses de una a cuatro habitaciones.</li>
                <li>Espectaculares vistas panorámicas y directas del océano, el canal Intracostero y el parque</li>
                <li>Vestíbulo de doble altura enmarcado por ventanas desde el piso al techo</li>
                <li>Recepción atendida las 24 horas</li>
                <li>Puerta cochera privada con valet parking y acceso a carga de EVs</li>
                <li>Edificio inteligente integrado con acceso a internet por fibra óptica inalámbrica de alta velocidad en
                    todas las áreas comunes
                </li>
                <li>Monitoreo las 24 horas en todos los puntos de acceso al edificio</li>
                <li>Más de 45,000 pies cuadrados de exclusivas comodidades residenciales interiores y exteriores, diseñadas
                    y seleccionadas por Piero Lissoni Piscina de resort con lujosos jardines y cabañas con vistas al canal
                    Intracostero
                </li>
                <li>Lujosas pistas de pádel de exhibición en exteriores</li>
                <li>Terraza Lido y pérgola gastronómica para socializar al aire libre</li>
                <li>Tres suites sociales interconectadas que pueden combinarse para eventos más grandes, incluyendo el salón
                    de aperitivos con múltiples áreas para sentarse y una bodega de vinos con mesa del chef
                </li>
                <li>Salón social, disponible para celebraciones y eventos privados</li>
                <li>Estudio técnico de gimnasia, un centro de ejercitación totalmente equipado de última generación</li>
                <li>Estudio de yoga, ideal para sesiones de entrenamiento privadas</li>
                <li>Spa para residentes con espacio reservado para tratamientos, sala de vapor y sauna</li>
                <li>Piscinas de inmersión exteriores calientes y frías</li>
                <li>Biblioteca Lissoni con estanterías de piso al techo</li>
                <li>Espacio de co-working con salas de reuniones privadas</li>
                <li>Salón de juegos envolvente para niños</li>
                <li>Lujosa terraza panorámica con jardines en el último piso del edificio, áreas de comedor, bar y vistas
                    del océano, parques, el canal Intracostero y el horizonte de Miami
                </li>
            </ul>
        </>, residencias: lang === "en" ? 
            <ul>
                <dt>Meticulously detailed condominium residences designed by Piero Lissoni</dt>
                <li>Each residence offers a spacious private terrace, select homes feature an outdoor bar</li>
                <li>Spectacular panoramic and direct ocean, Intracoastal canal, and park views</li>
                <li>Elevated ceilings up to 10 feet in height</li>
                <li>Floor-to-ceiling impact-resistant glass sliding doors at all openings</li>
                <li>High-speed elevators with access control</li>
                <li>Eleven exceptional penthouse residences located on the top two floors</li>
                <li>Private elevator landings with direct access (in select residences)</li>
                <li>Dramatic designs offer 14-foot-high ceilings and wraparound glass walls leading to private terraces</li>
                <li>Select penthouses with Lissoni-designed entertainment terraces featuring private pool, ample seating spaces, outdoor kitchen, wine cooler, and sink</li>
                <li>Carefully curated with custom Italian cabinetry and contemporary hardware</li>
                <li>Suite with premium integrated Gaggenau appliances</li>
                <li>Under-counter wine cellar with temperature control and glass panels</li>
                <li>Elegant imported marble countertops and backsplashes</li>
                <li>Gourmet sink and faucet</li>
                <li>Most units offer five-fixture bathrooms, double vanity, freestanding tub, and separate rain shower with glass enclosure.</li>
                <li>Vanity with European-made imported double carved sink with exclusive fixtures</li>
                <li>Elegant imported marble countertops and backsplashes</li>
            </ul>
        :
            <ul>
                <dt>Condominio de residencias meticulosamente detalladas, diseñadas por Piero Lissoni</dt>
                <li>Cada residencia ofrece una amplia terraza privada, las viviendas selectas cuentan con un bar en
                    exteriores
                </li>
                <li>Espectaculares vistas panorámicas y directas del océano, el canal Intracostero y el parque</li>
                <li>Techos elevados de hasta 10 pies de altura</li>
                <li>Puertas corredizas de vidrio resistente a los impactos de piso a techo en todas las aberturas</li>
                <li>Ascensores de alta velocidad con control de acceso</li>
                <li>Eleven excepcionales residencias en penthouses ubicadas en los dos pisos superiores</li>
                <li>Rellanos de ascensor privados con acceso directo (en residencias selectas)</li>
                <li>Los diseños dramáticos ofrecen techos de 14 pies de altura y paredes de vidrio envolventes que dan a
                    terrazas privadas
                </li>
                <li>Selectos penthouses con terrazas para eventos sociales diseñadas por Lissoni con piscina privada,
                    amplios espacios para sentarse, cocina exterior, refrigerador de vinos y lavabo
                </li>
                <li>Cuidadosamente curados con ebanistería italiana a medida y herrajes contemporáneos</li>
                <li>Suite con electrodomésticos integrados Gaggenau de primera calidad</li>
                <li>Cava de vinos bajo mesada con control de temperatura y paneles de vidrio</li>
                <li>Mesadas y salpicaderos elegantes de mármol importado</li>
                <li>Fregadero y grifería gourmet</li>
                <li>La mayoría de las unidades ofrecen baños con cinco accesorios, tocador doble, una tina independiente y
                    una ducha con efecto lluvia separada y mampara de vidrio.
                </li>
                <li>Tocador con lavabo doble tallado importado de fabricación europea con accesorios exclusivos</li>
                <li>Mesadas y salpicaderos elegantes de mármol importado</li>
            </ul>
    };

    return SeventyTwoCarlyleObject;
}