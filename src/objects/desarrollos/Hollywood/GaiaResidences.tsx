import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Hollywood from "../../areas/Hollywood.tsx";

export default function GaiaResidencesObject(lang: "en" | "es" = "es") {
const GaiaResidences = new Desarrollo(Hollywood());
GaiaResidences.nombre = "gaia-residences";
GaiaResidences.titulo = {
    es: "Gaia Residences",
    en: "Gaia Residences"
};
GaiaResidences.slogan = {
    es: "Un lugar para crecer, una vista que inspira",
    en: "A place to grow, a view that inspires"
};

GaiaResidences.introduccion = [lang === "en" ? "Gaia Residences is a two-tower condominium community in Hollywood with 238 residences featuring stunning views of the Atlantic Ocean and Hollywood Beach Golf Club. Amenities include a pool, outdoor terrace, barbecue stations, zen gardens, spa, yoga studio, sports lounge, and co-working spaces. Located between Miami and Fort Lauderdale, the location combines the energy of city life with the tranquility of a golf retreat." : "Gaia Residences es una comunidad de condominios de dos torres en Hollywood con 238 residencias con impresionantes vistas del Océano Atlántico y el Hollywood Beach Golf Club. Las comodidades incluyen una piscina, terraza al aire libre, estaciones de barbacoa, jardines zen, spa, estudio de yoga, salón deportivo y espacios de trabajo conjunto. Ubicado entre Miami y Fort Lauderdale, la ubicación combina la energía de la vida de la ciudad con la tranquilidad de un refugio de golf."];
GaiaResidences.banner= true;
GaiaResidences.numberOfImages = 17;

GaiaResidences.direccion = '401 N Federal Hwy, Hollywood, FL 33020, Estados Unidos.';
GaiaResidences.estimatedCompletionYear = 2027;
GaiaResidences.numberOfFloors = 21;
GaiaResidences.numberOfUnits = 238;
GaiaResidences.typeOfUnits = 'Condominios';
GaiaResidences.numberOfRooms = '1, 2 y 3 habitaciones';

GaiaResidences.caracteristicas={
    edificio: <>
        <dl>
            <dt>{lang === "en" ? "Address" : "Dirección"}</dt>
            <dd>{GaiaResidences.direccion}</dd>
            <dt>{lang === "en" ? "Year of Construction or Completion" : "Año De Construcción O Finalización"}</dt>
            <dd>{GaiaResidences.estimatedCompletionYear}</dd>
            <dt>{lang === "en" ? "Number of Floors" : "Número De Pisos"}</dt>
            <dd>{GaiaResidences.numberOfFloors}</dd>
            <dt>{lang === "en" ? "Number of Units" : "Número de Unidades"}</dt>
            <dd>{GaiaResidences.numberOfUnits}</dd>
            <dt>{lang === "en" ? "Type of Units" : "Tipo De Unidades"}</dt>
            <dd>{GaiaResidences.typeOfUnits}</dd>
            <dt>{lang === "en" ? "Number of Bedrooms" : "Número de cuartos"}</dt>
            <dd>{GaiaResidences.numberOfRooms as string}</dd>
        </dl>
    </>,
    amenidades:<>
        <ul>
            <li>{lang === "en" ? "Interiors and amenities curated by IDDI with RH furnishings" : "Interiores y comodidades curados por IDDI con muebles de RH"}</li>
            <li>{lang === "en" ? "Exclusive rooftop retreats" : "Retiros exclusivos en la azotea"}</li>
            <li>{lang === "en" ? "Nearly 2 acres of indoor and outdoor lifestyle amenities" : "Cerca de 2 acres de comodidades de estilo de vida interiores y exteriores"}</li>
            <li>{lang === "en" ? "24-hour concierge/reception desk" : "Recepción conserje/recepción 24 horas"}</li>
            <li>{lang === "en" ? "Valet services and electric vehicle charging stations" : "Servicios de valet y estaciones de carga de vehículos eléctricos"}</li>
            <li>{lang === "en" ? "Bicycle storage" : "Almacenamiento de bicicletas"}</li>
            <li>{lang === "en" ? "Heated pool with shelf, poolside cabanas and chaise lounges" : "Piscina climatizada con estante, cabañas junto a la piscina y chaise lounges"}</li>
            <li>{lang === "en" ? "Serene water garden with tranquil daybed" : "Jardín de agua sereno con sofá cama tranquilo"}</li>
            <li>{lang === "en" ? "Pavilion with summer kitchen, private barbecue stations and social seating" : "Pabellón con cocina de verano, estaciones de barbacoa privadas y asientos sociales"}</li>
            <li>{lang === "en" ? "Outdoor dining terraces, wet bar with elegant counter seating" : "Terrazas para comer al aire libre, bar mojado con elegantes asientos en el mostrador"}</li>
            <li>{lang === "en" ? "Tropical hammock zen garden" : "Jardín zen de hamaca tropical"}</li>
            <li>{lang === "en" ? "Residents Club with indoor and outdoor leisure areas" : "Club de Residentes con zonas de ocio interior y exterior"}</li>
            <li>{lang === "en" ? "Billiards lounge with full wet bar and banquette seating" : "Salón de billar con barra húmeda completa y asientos de banquete"}</li>
            <li>{lang === "en" ? "Private indoor dining with butler pantry/prep area and outdoor terrace" : "Comedor interior privado con zona de despensa/preparación de mayordomo y terraza exterior"}</li>
            <li>{lang === "en" ? "Sports lounge with fully equipped wet bar, viewing screens and dedicated social areas" : "Salón deportivo con bar mojado totalmente equipado, pantallas de observación y áreas sociales dedicadas"}</li>
            <li>{lang === "en" ? "Media screening room with sophisticated seating" : "Sala de proyección de medios con asientos sofisticados"}</li>
            <li>{lang === "en" ? "Wet bar with elegant counter seating Indulgent heated spa pool" : "Bar húmedo con elegantes asientos en el mostrador Indulgente calefacción spa de piscina"}</li>
            <li>{lang === "en" ? "Outdoor dining experience" : "Experiencia gastronómica al aire libre"}</li>
            <li>{lang === "en" ? "State-of-the-art indoor fitness area" : "Zona de fitness interior de última generación"}</li>
            <li>{lang === "en" ? "Cutting-edge strength and cardio equipment" : "Equipo de fuerza y cardio de vanguardia"}</li>
            <li>{lang === "en" ? "Tropical outdoor fitness garden" : "Jardín de fitness al aire libre tropical"}</li>
            <li>{lang === "en" ? "Yoga/barre/pilates studio" : "Estudio de yoga/barre/pilates"}</li>
            <li>{lang === "en" ? "Steam room, dry sauna and plunge pools" : "Sala de vapor, sauna seca y piscinas de inmersión"}</li>
            <li>{lang === "en" ? "Grand light-filled lobby with integrated greenery" : "Gran vestíbulo lleno de luz con vegetación integrada"}</li>
            <li>{lang === "en" ? "Co-working lounge" : "Salón de coworking"}</li>
        </ul>
        </>,
    residencias: <>
        <ul>
            <li>{lang === "en" ? "Stunning views of Hollywood Beach Golf Club and the Atlantic Ocean" : "Impresionantes vistas del Hollywood Beach Golf Club y el Océano Atlántico"}</li>
            <li>{lang === "en" ? "Impeccably crafted modern Italian kitchens" : "Cocinas italianas modernas impecablemente elaboradas"}</li>
            <li>{lang === "en" ? "Luxury imported large-format porcelain tile flooring" : "Suelo de baldosas de porcelana de gran formato importado de lujo"}</li>
            <li>{lang === "en" ? "Seamless quartz countertops and bathroom countertops" : "Contrachoques de cuarzo sin costuras y encimeras de baño"}</li>
            <li>{lang === "en" ? "Perfectly integrated Bosch appliances" : "Electrodomésticos Bosch perfectamente integrados"}</li>
            <li>{lang === "en" ? "European soft-close cabinetry" : "Gabinete europeo de cierre automático"}</li>
            <li>{lang === "en" ? "Floor-to-ceiling windows invite natural light and open to panoramic views of the sea, city or greenery" : "Las ventanas de piso a techo invitan a la luz natural y se abren a vistas panorámicas del mar, la ciudad o la vegetación"}</li>
            <li>{lang === "en" ? "Airy living spaces with ceiling heights of 9-13 feet" : "Espacios de vida aireados con alturas de techo de 9-13 pies"}</li>
            <li>{lang === "en" ? "Private terraces extend your living space into the landscape" : "Las terrazas privadas extienden su espacio de vida en el paisaje"}</li>
            <li>{lang === "en" ? "Custom furniture packages available" : "Paquetes de muebles personalizados a medida disponibles"}</li>
            <li>{lang === "en" ? "Backlit mirrors in bathrooms" : "Espejo retroiluminado en los baños"}</li>
        </ul>
    </>
};

return GaiaResidences;
}