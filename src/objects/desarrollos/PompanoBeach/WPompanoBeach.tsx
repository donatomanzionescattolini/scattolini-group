import Desarrollo from "../../../models/desarrollos/Desarrollo";
import PompanoBeach from "../../areas/PompanoBeach";

const WPompanoBeach = new Desarrollo(PompanoBeach);
WPompanoBeach.añoDeConstrucciónOFinalización = 2029;
WPompanoBeach.numberOfFloors = 29;
WPompanoBeach.numberOfUnits = 74;
WPompanoBeach.numberOfImages = 18;
WPompanoBeach.subtitulo = "Busca. Descubre. Pertenece.";
WPompanoBeach.numberOfRooms = "2 to 4";
WPompanoBeach.nombre = "w-pompano-beach";
WPompanoBeach.titulo = "W Pompano Beach Hotel & Residences";
WPompanoBeach.ubicación = "20 North Ocean Blvd, Pompano Beach FL 33062";
WPompanoBeach.direccion = "20 North Ocean Blvd, Pompano Beach FL 33062";
WPompanoBeach.area = PompanoBeach;
WPompanoBeach.banner = true;
WPompanoBeach.caracteristicas = {
  edificio: <>
  <dl>
    <dt>Ubicacion</dt>
    <dd>{WPompanoBeach.ubicación}</dd>
    <dt>Número de unidades</dt>
    <dd>{WPompanoBeach.numberOfUnits}</dd>
    <dt>Número de pisos</dt>
    <dd>{WPompanoBeach.numberOfFloors}</dd>
    <dt>Año de finalización</dt>
    <dd>{WPompanoBeach.añoDeConstrucciónOFinalización}</dd>
    <dt>Habitaciones</dt>
    <dd>{WPompanoBeach.numberOfRooms as string}</dd>
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
    <>
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
    </>
  ),
};
WPompanoBeach.introduccion = [
  "Nos complace compartir una oportunidad excepcional: W Pompano Beach Hotel & Residences, la nueva evolución de la icónica marca W. Este refinado destino de lujo combina perfectamente el encanto de una escapada frente almar con la energía de un vibrante centro social, ubicado en una de las playas más hermosas de Florida.",
  " W Pompano Beach ofrece residencias personalizadas y suites de hotel totalmente amuebladas, con dos opciones de propiedad distintas: la serenidad y privacidad de una residencia frente al mar (The Residences) o la comodidad integral de una suite de hotel cinco estrellas (The Suites).",
  " The Residences cuenta con 74 hogares personalizados que van desde 2,400 hasta 3,400 pies cuadrados, además de 3 penthouses con piscinas en la azotea. Las Residencias incluyen una colección privada de amenidades, además de todos los servicios del Hotel W.",
];

export default WPompanoBeach;
