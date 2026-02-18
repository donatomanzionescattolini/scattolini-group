import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function TheWilliam(lang: "en" | "es" = "es") {
    const TheWilliamObject = new Desarrollo(MiamiBeach());

    TheWilliamObject.nombre = "the-william";
    TheWilliamObject.titulo = {
        es: "The William | North Miami Beach",
        en: "The William | North Miami Beach"
    };
    TheWilliamObject.slogan = {
        es: <div className={"text-muted text-md-center font-style-italic font-variant-smallcaps"}>Todo Miami<br/>Perfectamente A
            Tu Alcance</div>,
        en: <div className={"text-muted text-md-center font-style-italic font-variant-smallcaps"}>All of Miami<br/>Perfectly
            Within Your Reach</div>
    };
    TheWilliamObject.introduccion = lang === "en" 
        ? ["The William is an elegant 26-story residence located in one of the city's best-connected districts. With an ideal location near top-tier shops and restaurants, pristine Atlantic beaches, waterways, shopping centers, airports, sports stadiums, and cultural events, it offers a lifestyle of comfort and prestige. Each home offers captivating sunrise and sunset views, while its carefully designed amenities provide spaces for enjoyment and family connection. Just minutes from the stunning Sunny Isles coast, this location represents modern living in a privileged setting."]
        : ["The William es una elegante residencia de 26 pisos, ubicada en uno de los distritos mejor conectados de la ciudad. Con una ubicación ideal cerca de tiendas y restaurantes de primer nivel, playas vírgenes del Atlántico, canales, centros comerciales, aeropuertos, estadios deportivos y eventos culturales, ofrece un estilo de vida de comodidad y prestigio. Cada casa ofrece cautivadoras vistas del amanecer y el atardecer, mientras que sus comodidades cuidadosamente diseñadas brindan espacios para el disfrute y la conexión familiar. A solo minutos de la impresionante costa de Sunny Isles, esta ubicación representa la vida moderna en un entorno privilegiado."];

    TheWilliamObject.estimatedCompletionYear = 2029;
    TheWilliamObject.banner = true;
    TheWilliamObject.numberOfImages = 19;


    TheWilliamObject.direccion = "2040 NE 163rd Street, North Miami Beach, FL 33162";
    TheWilliamObject.numberOfFloors = 26;
    TheWilliamObject.numberOfUnits = 374;
    TheWilliamObject.typeOfUnits = "Studios";
    TheWilliamObject.numberOfRooms = {start: 1, end: 3};
    TheWilliamObject.caracteristicas = {
        edificio: <>
            <dl>
                <dt>{lang === "en" ? "Address" : "Dirección"}</dt>
                <dd>{TheWilliamObject.direccion}</dd>
                <dt>{lang === "en" ? "Number of Floors" : "Número De Pisos"}</dt>
                <dd>{TheWilliamObject.numberOfFloors}</dd>
                <dt>{lang === "en" ? "Number of Units" : "Número de Unidades"}</dt>
                <dd>{TheWilliamObject.numberOfUnits}</dd>
                <dt>{lang === "en" ? "Type of Units" : "Tipo De Unidades"}</dt>
                <dd>{TheWilliamObject.typeOfUnits}</dd>
                <dt>{lang === "en" ? "Number of Rooms" : "Número de Cuartos"}</dt>
                <dd>{TheWilliamObject.numberOfRooms.start} {lang === "en" ? "to" : "a"} {TheWilliamObject.numberOfRooms.end}</dd>

            </dl>
        </>, residencias: <>
            <ul>
                <li>{lang === "en" ? "Studio designs and up to three bedrooms" : "Diseños tipo estudios y hasta tres habitaciones"}</li>
                <li>{lang === "en" ? "Floor-to-ceiling windows to enjoy natural light and views" : "Ventanas de suelo a techo para disfrutar de la luz natural y las vistas"}</li>
                <li>{lang === "en" ? "Spacious balconies with glass railings" : "Balcones amplios con barandales de cristal"}</li>
                <li>{lang === "en" ? "Imported porcelain floors" : "Pisos de porcelana importada"}</li>
                <li>{lang === "en" ? "Washer and dryer in each unit" : "Lavadora y secadora en cada unidad"}</li>
                <br/>
                <li><b>{lang === "en" ? "Kitchens" : "Cocinas"}</b></li>
                <br/>
                <li>{lang === "en" ? "Custom Italkraft cabinets in tobacco walnut finish, accented with tinted glass doors" : "Gabinetes Italkraft personalizados en acabado nogal tabaco, acentuados con puertas de vidrio tintado"}
                </li>
                <li>{lang === "en" ? "Brushed black chrome Hansgrohe fixtures" : "Accesorios Hansgrohe de cromo negro cepillado"}</li>
                <li>{lang === "en" ? "Quartz countertops and backsplash" : "Mesadas y revestimientos de cuarzo"}</li>
                <li>{lang === "en" ? "State-of-the-art kitchen with integrated Bosch appliances" : "Cocina de última generación con un conjunto integrado de electrodomésticos Bosch"}</li>
                <br/>
                <dt>{lang === "en" ? "Bathrooms" : "Baños"}</dt>
                <br/>
                <li>{lang === "en" ? "Contemporary Italkraft cabinets, designed for functionality and elegance" : "Gabinetes contemporáneos de Italkraft, diseñados para la funcionalidad y elegancia"}</li>
                <li>{lang === "en" ? "Brushed black chrome Hansgrohe fixtures" : "Accesorios Hansgrohe de cromo negro cepillado"}</li>
                <li>{lang === "en" ? "Imported porcelain floors and walls" : "Pisos y paredes de porcelanato importado"}</li>
                <li>{lang === "en" ? "Quartz countertops and backsplash" : "Mesadas y revestimientos de cuarzo"}</li>
            </ul>
        </>,
        amenidades: <>
            <ul>
                <li>{lang === "en" ? "A total of nearly 4,000 m2 on two complete floors of amenities and experiences" : "Un total de casi 4,000 m2 en dos pisos completos de amenidades y experiencias"}</li>

                <li>{lang === "en" ? "Lush gardens that evoke a sense of tranquility" : "Jardines exuberantes que evocan una sensación de tranquilidad"}</li>

                <li>{lang === "en" ? "24/7 valet service" : "Servicio de valet 24/7"}</li>

                <li>{lang === "en" ? "Lobby and gallery space" : "Lobby y espacio de galería"}</li>

                <li>{lang === "en" ? "Carefully selected artwork in common areas" : "Obras de arte cuidadosamente seleccionadas en las áreas comunes"}</li>

                <li>{lang === "en" ? "High-speed WiFi in all common areas" : "WiFi de alta velocidad en todas las áreas comunes"}</li>

                <li>{lang === "en" ? "Smart lockers for easy package delivery" : "Lockers inteligentes para facilitar la entrega de paquetes"}</li>

                <li>{lang === "en" ? "Seven floors of secure parking with electric vehicle charging stations" : "Siete pisos de estacionamiento seguro con estaciones de carga para vehículos eléctricos"}</li>

                <li>{lang === "en" ? "Specially designed pet area on the rooftop" : "Área diseñada especialmente para mascotas en la azotea"}</li>

                <li>{lang === "en" ? "Reception with professional staff and concierge" : "Recepción con personal profesional y concierge"}</li>

                <li>{lang === "en" ? "24-hour security" : "Seguridad las 24 horas del día"}</li>
                <li>{lang === "en" 
                    ? "At The William, you have total freedom to express your style, follow your instincts, spend time with the people who matter most to you, and know that you're exactly where you need to be."
                    : "En The William, tienes la total libertad para expresar tu estilo, seguir tus instintos, pasar tiempo con las personas que más te importan y saber que estás exactamente donde tienes que estar."}
                </li>
                <dt>{lang === "en" ? "9th Floor" : "Piso 9"}</dt>

                <li>{lang === "en" ? "Resort-style pool with sun deck" : "Piscina estilo resort con terraza para disfrutar del sol"}</li>

                <li>{lang === "en" ? "Outdoor dining area with grills and kitchen" : "Área de comedor al aire libre con asadores y cocina"}</li>

                <li>{lang === "en" ? "Outdoor bar and terrace with fire pits" : "Bar al aire libre y terraza con fogatas"}</li>

                <li>{lang === "en" ? "Gym" : "Gimnasio"}</li>

                <li>{lang === "en" ? "Yoga studio" : "Estudio de yoga"}</li>

                <li>{lang === "en" ? "Outdoor training and recovery area" : "Zona de entrenamiento y recuperación al aire libre"}</li>

                <li>{lang === "en" ? "Locker rooms" : "Vestidores"}</li>

                <li>{lang === "en" ? "Spa rooms for private reservations" : "Salas de spa para reservas privadas"}</li>

                <li>{lang === "en" ? "Coworking lounge and terrace with library" : "Sala y terraza de coworking y biblioteca"}</li>

                <li>{lang === "en" ? "Indoor lounge and cafe area" : "Salón interior y área de cafetería"}</li>

                <li>{lang === "en" ? "Self-service market" : "Mercado de autoservicio"}</li>

                <li>{lang === "en" ? "Interactive game room and children's playground" : "Sala de juegos interactiva y parque infantil"}</li>
                <dt>{lang === "en" ? "Rooftop 26th Floor" : "Azotea Piso 26"}</dt>

                <li>{lang === "en" ? "Sunset lounge with yoga terrace and hammocks" : "Salón para ver el atardecer con terraza para yoga y hamacas"}</li>

                <li>{lang === "en" ? "Kitchen and outdoor area with barbecues" : "Cocina y area al aire libre con barbacoas"}</li>

                <li>{lang === "en" ? "Pickleball court" : "Cancha de Pickleball"}</li>

                <li>{lang === "en" ? "Living room with bar and games to socialize or simply relax on the rooftop" : "Sala de estar con bar y juegos para socializar o simplemente relajarse en la azotea"}</li>

                <li>{lang === "en" ? "Coral Lounge for meetings and small resident events" : "Coral Lounge para reuniones y pequeños eventos de residentes"}</li>

                <li>{lang === "en" ? "Pet area and canine grooming" : "Área para mascotas y estética canina"}</li>
            </ul>
        </>
    };

    return TheWilliamObject;
}