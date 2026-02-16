import Desarrollo from "../../../models/desarrollos/Desarrollo";
import PompanoBeach from "../../areas/PompanoBeach";

export default function WPompanoBeach(lang: "en" | "es" = "es") {
  const WPompanoBeachObject = new Desarrollo(PompanoBeach);
  WPompanoBeachObject.estimatedCompletionYear = 2029;
  WPompanoBeachObject.numberOfFloors = 29;
  WPompanoBeachObject.numberOfUnits = 74;
  WPompanoBeachObject.numberOfImages = 18;
  WPompanoBeachObject.slogan = {
    es: "Busca. Descubre. Pertenece.",
    en: "Seek. Discover. Belong."
  };
  WPompanoBeachObject.numberOfRooms = "2 to 4";
  WPompanoBeachObject.nombre = "w-pompano-beach";
  WPompanoBeachObject.titulo = {
    es: "W Pompano Beach Hotel & Residences",
    en: "W Pompano Beach Hotel & Residences"
  };
  WPompanoBeachObject.ubicación = "20 North Ocean Blvd, Pompano Beach FL 33062";
  WPompanoBeachObject.direccion = "20 North Ocean Blvd, Pompano Beach FL 33062";
  WPompanoBeachObject.area = PompanoBeach;
  WPompanoBeachObject.banner = true;
  WPompanoBeachObject.caracteristicas = lang === "en" ? {
    edificio: <>
    <dl>
      <dt>Location</dt>
      <dd>{WPompanoBeachObject.ubicación}</dd>
      <dt>Number of Units</dt>
      <dd>{WPompanoBeachObject.numberOfUnits}</dd>
      <dt>Number of Floors</dt>
      <dd>{WPompanoBeachObject.numberOfFloors}</dd>
      <dt>Completion Year</dt>
      <dd>{WPompanoBeachObject.estimatedCompletionYear}</dd>
      <dt>Bedrooms</dt>
      <dd>{WPompanoBeachObject.numberOfRooms}</dd>
    </dl>
    </>,
    residencias: (
      <>
        <ul>
          <li>Private elevator entry to each residence</li>
          <li>24-hour lobby and valet service</li>
          <li>9.5' ceiling heights with floor-to-ceiling windows</li>
          <li>
            Breathtaking ocean and Intracoastal views, visible from all residences
          </li>
          <li>
            Spacious private outdoor balconies up to 8.5' deep
          </li>
          <li>
            Imported Italian kitchen cabinetry and natural stone countertops
          </li>
          <li>
            Custom-designed master bathroom by Meyer Davis featuring soaking tub,
            Kohler toilets and fixtures
          </li>
          <li>
            Powder room, living room, laundry and pantry available in each residence
          </li>
          <li>
            Wolf/Sub-Zero kitchen appliance package including: 30" refrigerator,
            24" freezer, 18" wine refrigerator, 36" gas range, 30" oven, 30" speed
            oven, 30" coffee preparation system, 24" dishwasher
          </li>
          <li>Pre-wired high-speed fiber optic WiFi</li>
        </ul>
      </>
    ),
    amenidades: (
        <ul>
          <br />
          <dl>
            <dt>
              <b>Amenities for All</b>
            </dt>
          </dl>
          <li>Dedicated lobby and reception</li>
          <li>Concierge services</li>
          <li>
            The Living Room: a social hub and gathering space with cultural events,
            live music, a refined speakeasy bar, culinary tastings and more.
          </li>
          <li>
            60,000 square foot WET® Pool Deck with resort-style pool, jacuzzi,
            private cabanas, pickleball and paddle courts
          </li>
          <li>WET® Pool Deck Bar & Restaurant</li>
          <li>FIT® Fitness Center and Yoga Studio</li>
          <li>
            6,800 square foot AWAY® Spa featuring dedicated suites for customized
            massages and wellness treatments, cold plunge, jacuzzi, sauna and steam
            rooms, and nail services
          </li>
          <li>
            Game room with F1 racing and world-class multi-sport simulator
          </li>
          <br />
          <dl>
            <dt>
              <b>Exclusive Amenities for Resident Owners</b>
            </dt>
          </dl>
          <li>Private residents-only lobby</li>
          <li>
            12,000 square foot outdoor pool deck with dedicated spa, private cabanas
            and chef's grilling station
          </li>
          <li>State-of-the-art fitness center with sauna and steam rooms</li>
          <li>Owner's club lounge</li>
          <li>Business center and meeting rooms</li>
          <li>Great room with individual wine storage</li>
          <li>Smart package and mail room</li>
        </ul>
    ),
  } : {
    edificio: <>
    <dl>
      <dt>Ubicacion</dt>
      <dd>{WPompanoBeachObject.ubicación}</dd>
      <dt>Número de unidades</dt>
      <dd>{WPompanoBeachObject.numberOfUnits}</dd>
      <dt>Número de pisos</dt>
      <dd>{WPompanoBeachObject.numberOfFloors}</dd>
      <dt>Año de finalización</dt>
      <dd>{WPompanoBeachObject.estimatedCompletionYear}</dd>
      <dt>Habitaciones</dt>
      <dd>{WPompanoBeachObject.numberOfRooms}</dd>
    </dl>
    </>,
    residencias: (
      <>
        <ul>
          <li>Entrada en ascensor privado a cada residencia</li>
          <li>Lobby y servicio de aparcacoches las 24 horas</li>
          <li>Alturas de techo de 9.5" con ventanas de piso a techo</li>
          <li>
            Impresionantes vistas del océano y del Canal Intracostero, visibles
            desde todas las residencias
          </li>
          <li>
            Balcones amplios y privados al aire libre de hasta 8.5' de profundidad
          </li>
          <li>
            Gabinetes de cocina italianos importados y encimeras de piedra natural
          </li>
          <li>
            Baño principal diseñado a medida por Meyer Davis equipado con bañera,
            inodoros Kohler y accesorios
          </li>
          <li>
            Tocador, sala de estar, lavandería y despensa disponibles en cada
            residencia
          </li>
          <li>
            Paquete de electrodomésticos de cocina Wolf/Sub-Zero que incluye:
            refrigerador de 30", congelador de 24", refrigerador de vino de 18",
            estufa de gas de 36", horno de 30", horno de 30", horno de velocidad
            de 30", sistema de preparación de café de 30", lavavajillas de 24"
          </li>
          <li>WiFi de fibra óptica de alta velocidad precableado</li>
        </ul>
      </>
    ),
    amenidades: (
        <ul>
          <br />
          <dl>
            <dt>
              <b> Amenidades para todos</b>
            </dt>
          </dl>
          <li>Vestíbulo y recepción dedicados</li>
          <li>Servicios de botones</li>
          <li>
            The Living Room: un centro social y espacio de reunión con eventos
            culturales, música en vivo, un refinado bar clandestino, degustaciones
            culinarias y más.
          </li>
          <li>
            Terraza de la piscina WET® de 60,000 pies cuadrados con piscina estilo
            centro turístico, jacuzzi, cabañas privadas, canchas de pickleball y
            pádel
          </li>
          <li>WET® Pool Deck Bar & Restaurante</li>
          <li>Gimnasio y estudio de yoga FIT®</li>
          <li>
            AWAY® Spa de 6,800 pies cuadrados con suites dedicadas a masajes
            personalizados y tratamientos de bienestar, inmersión fría, jacuzzi,
            sauna y baños de vapor, y servicios de uñas
          </li>
          <li>
            Sala de juegos con carreras de F1 y simulador multideporte de clase
            mundial
          </li>
          <br />
          <dl>
            <dt>
              <b>Amenidades exclusivas para propietarios residentes</b>
            </dt>
          </dl>
          <li>Vestíbulo privado solo para residentes</li>
          <li>
            Terraza de la piscina al aire libre de 12,000 pies cuadrados con spa
            dedicado, cabañas privadas y estación de parrillas del chef
          </li>
          <li>Gimnasio de última generación con sauna y baños de vapor</li>
          <li>Salón del club del propietario</li>
          <li>Centro de negocios y salas de reuniones</li>
          <li>Gran sala con almacenamiento individual de vinos</li>
          <li>Sala inteligente de paquetes y correo</li>
        </ul>
    ),
  };
  WPompanoBeachObject.introduccion = lang === "en" ? [
    "We are pleased to share an exceptional opportunity: W Pompano Beach Hotel & Residences, the new evolution of the iconic W brand. This refined luxury destination seamlessly combines the charm of a beachfront getaway with the energy of a vibrant social hub, located on one of Florida's most beautiful beaches.",
    "W Pompano Beach offers custom residences and fully furnished hotel suites, featuring two distinct ownership options: the serenity and privacy of a beachfront residence (The Residences) or the comprehensive convenience of a five-star hotel suite (The Suites).",
    "The Residences features 74 custom homes ranging from 2,400 to 3,400 square feet, plus 3 penthouses with rooftop pools. The Residences include a private collection of amenities, in addition to all W Hotel services.",
  ] : [
    "Nos complace compartir una oportunidad excepcional: W Pompano Beach Hotel & Residences, la nueva evolución de la icónica marca W. Este refinado destino de lujo combina perfectamente el encanto de una escapada frente almar con la energía de un vibrante centro social, ubicado en una de las playas más hermosas de Florida.",
    " W Pompano Beach ofrece residencias personalizadas y suites de hotel totalmente amuebladas, con dos opciones de propiedad distintas: la serenidad y privacidad de una residencia frente al mar (The Residences) o la comodidad integral de una suite de hotel cinco estrellas (The Suites).",
    " The Residences cuenta con 74 hogares personalizados que van desde 2,400 hasta 3,400 pies cuadrados, además de 3 penthouses con piscinas en la azotea. Las Residencias incluyen una colección privada de amenidades, además de todos los servicios del Hotel W.",
  ];

  return WPompanoBeachObject;
}
