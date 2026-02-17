import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Hollywood from "../../areas/Hollywood";

export default function IconBeachResidencesObject(lang: "en" | "es" = "es") {
const IconBeachResidences = new Desarrollo(Hollywood());
IconBeachResidences.titulo = {
    es: "Icon Beach Residences",
    en: "Icon Beach Residences"
};
IconBeachResidences.nombre = "icon-beach-residences";

IconBeachResidences.introduccion = [
  lang === "en" ? "Welcome to Icon Beach Residences, a collection of one to three-bedroom residences representing an exquisite and innovative oceanfront lifestyle, with stunning water views, spacious balconies, access to a marina, and a range of amenities designed to make home life more comfortable and enjoyable." : "Bienvenidos a Icon Beach Residences, un conjunto de residencias que incluyen desde una hasta tres habitaciones y representan un exquisito e innovador estilo de vida frente al mar, con impresionantes vistas al agua, amplios balcones, acceso a una marina y a una gama de servicios pensados para que la vida en casa sea más cómoda y placentera.",
  lang === "en" ? "Located in a tranquil enclave of the wonderful and sunny Hollywood coast, Icon Beach Residences reflect a sophisticated and innovative vision of oceanfront living, with extraordinary views of the Atlantic Ocean and the Hollywood Beach canals. Perfectly positioned between the cosmopolitan energy of Miami and the serene elegance of Fort Lauderdale, the residences offer access to a full-service marina and beach club, as well as views of Hollywood's most spectacular seascapes." : "Situadas en un tranquilo enclave de la maravillosa y soleada costa de Hollywood, Icon Beach Residences reflejan una visión sofisticada e innovadora de la vida frente al mar, con extraordinarias vistas al océano Atlántico y a los canales de Hollywood Beach. Con una ubicación perfecta, entre la energía cosmopolita de Miami y la serena elegancia de Fort Lauderdale, las residencias ofrecen acceso a una marina y a un club de playa con todos los servicios, además de vistas a los paisajes marinos más espectaculares de Hollywood.",
];
IconBeachResidences.area = Hollywood();
IconBeachResidences.banner = true;
IconBeachResidences.estimatedCompletionYear = 2027;
IconBeachResidences.numberOfImages = 40;
IconBeachResidences.numberOfFloors = 37;
IconBeachResidences.numberOfUnits = 350;
IconBeachResidences.typeOfUnits = "condos";
IconBeachResidences.direccion = "3724 S Ocean Dr, Hollywood, FL 33019, USA";
IconBeachResidences.ubicación = "3724 S Ocean Dr, Hollywood, FL 33019, USA";
IconBeachResidences.numberOfRooms = {start: 1, end: 3};
IconBeachResidences.numberOfBathrooms = {start: 1, end: 3.5};
IconBeachResidences.caracteristicas = {
  amenidades: (
    <>
      <ul>
        <li>{lang === "en" ? "Spacious and spectacular pool with sundeck and elegant cabanas" : "Amplia y espectacular piscina con solárium y elegantes cabañas"}</li>
        <li>{lang === "en" ? "State-of-the-art 3,000 sq ft fitness center with yoga and cycling rooms, and advanced cardio and weight training equipment" : "Gimnasio de última generación de 279 metros cuadrados, con salas de yoga, bicicletas y avanzados equipos para hacer ejercicios de cardio y entrenamiento con pesas."}</li>
        <li>{lang === "en" ? "Relaxing spa and wellness center with cold plunge pool, sauna room and jacuzzi to restore body and mind balance" : "Spa y wellness center para relajarse, con tina de inmersión fría, cuarto de sauna y jacuzzi para restablecer el equilibrio del cuerpo y la mente"}</li>
        <li>{lang === "en" ? "Spacious residents lounge and outdoor cocktail bar for celebrations and toasts" : "Amplio salón de reuniones para los residentes y bar de cocteles al aire libre para celebrar y brindar"}</li>
        <li>{lang === "en" ? "Outdoor cinema for movie nights with family and friends" : "Cine al aire libre para noches de cine con la familia y los amigos"}</li>
        <li>{lang === "en" ? "Reservable event space with views of the Hollywood Beach canals" : "Espacio reservable para eventos, con vistas a los canales de Hollywood Beach"}</li>
        <li>{lang === "en" ? "Spaces with impeccable landscaping, including a terrace to enjoy the sunset with a lawn area for yoga and outdoor exercises" : "Espacios con un paisajismo impecable, incluyendo una terraza para disfrutar del atardecer con un área de césped para hacer yoga y ejercicios al aire libre"}</li>
        <li>{lang === "en" ? "Access to a fabulous marina and use of a full-service beach club* with views of Hollywood's beautiful seascapes" : "Acceso a una fabulosa marina y uso de un club de playa* con todos los servicios y vistas a los hermosos paisajes marinos de Hollywood"}</li>
      </ul>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>{lang === "en" ? "Extraordinary views of the Atlantic Ocean and Hollywood Beach canals" : "Extraordinarias vistas del océano Atlántico y de los canales de Hollywood Beach"}</li>
        <li>{lang === "en" ? "38 floors with 350 residences, designed by Meyer Davis" : "- 38 plantas con 350 viviendas, diseñadas por Meyer Davis"}</li>
        <li>{lang === "en" ? "Spacious private balconies with floor-to-ceiling sliding glass doors" : "Amplios balcones privados con puertas corredizas de vidrio que van de piso a techo"}</li>
        <li>{lang === "en" ? "Spacious and well-ventilated master bedrooms, filled with natural light and decorated with iconic maritime details in a warm and minimalist palette" : "Habitaciones principales espaciosas y con buena ventilación, llenas de luz natural y decoradas con emblemáticos detalles marítimos en una paleta cálida y minimalista"}</li>
        <li>{lang === "en" ? "Meyer Davis gourmet kitchens with custom Italian cabinetry, spacious kitchen islands and imported porcelain countertops, in two color schemes to choose from" : "Cocinas gourmet de Meyer Davis con gabinetes italianos personalizados, amplias islas de cocina y encimeras de porcelana importada, en dos combinaciones de colores a elegir"}</li>
        <li>{lang === "en" ? "High-end Bosch and Thermador appliances, including refrigerator, induction cooktop, oven, speed oven and dishwasher" : "Electrodomésticos Bosch y Thermador de alta gama, incluyendo refrigerador, placa de inducción, horno, horno rápido y lavavajillas"}</li>
        <li>{lang === "en" ? "Spa-style master bathrooms equipped with elegant bathtubs and Kohler and Hansgrohe fixtures" : "Baños principales estilo spa, equipados con elegantes bañeras y accesorios de Kohler y Hansgrohe"}</li>
        <li>{lang === "en" ? "Spacious and meticulously designed walk-in closets" : "Vestidores espaciosos y meticulosamente diseñados"}</li>
      </ul>
    </>
  ),
  edificio: <><dl>
    <dt>{lang === "en" ? "Location" : "Ubicación"}</dt><dd>{IconBeachResidences.ubicación}</dd>
    <dt>{lang === "en" ? "Number of Floors" : "Número de Pisos"}</dt><dd>{IconBeachResidences.numberOfFloors}</dd>
    <dt>{lang === "en" ? "Number of Units" : "Número de Unidades"}</dt><dd>{IconBeachResidences.numberOfUnits}</dd>
    <dt>{lang === "en" ? "Type of Units" : "Tipo de Unidades"}</dt><dd>{IconBeachResidences.typeOfUnits}</dd>
    <dt>{lang === "en" ? "Year of Construction or Completion" : "Año de Construcción o Finalización"}</dt><dd>{IconBeachResidences.estimatedCompletionYear }</dd>
    <dt>{lang === "en" ? "Number of Bedrooms" : "Número de Habitaciones"}</dt><dd>{lang === "en" ? "1 to 3" : "1 a 3"}</dd>
    </dl></>,
};
return IconBeachResidences;
}