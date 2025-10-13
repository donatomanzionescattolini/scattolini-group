import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";

const JeanGeorgesMiamiTropicResidences = new Desarrollo(MidtownMiami);
JeanGeorgesMiamiTropicResidences.nombre =
  "jean-georges-miami-tropic-residences";
JeanGeorgesMiamiTropicResidences.titulo = "Jean-Georges Miami Tropic Residences";
JeanGeorgesMiamiTropicResidences.añoDeConstrucciónOFinalización = 2028;
JeanGeorgesMiamiTropicResidences.numberOfFloors=49;
JeanGeorgesMiamiTropicResidences.numberOfUnits =    329;
JeanGeorgesMiamiTropicResidences.numberOfRooms= {start:1, end:4};
JeanGeorgesMiamiTropicResidences.area = MidtownMiami;
JeanGeorgesMiamiTropicResidences.ubicación= "3501 N Miami Ave, Miami, FL 33127, USA";
JeanGeorgesMiamiTropicResidences.introduccion = [
  "Descubre Jean-Georges Tropic Residences, una joya arquitectónica en el corazón de Midtown Miami. Este exclusivo desarrollo residencial redefine el lujo contemporáneo con su diseño elegante y sofisticado, inspirado en la visión del renombrado chef Jean-Georges Vongerichten. Cada detalle ha sido cuidadosamente pensado para ofrecer un estilo de vida excepcional, desde sus amplias residencias con vistas panorámicas hasta sus amenidades de primer nivel que incluyen un gimnasio de última generación, piscina infinita y espacios sociales diseñados para la comodidad y el entretenimiento.",
  "Ubicado estratégicamente en una de las zonas más vibrantes de Miami, Jean-Georges Tropic Residences ofrece acceso inmediato a una variedad de restaurantes, tiendas y opciones culturales. Vive la experiencia de Midtown Miami con su ambiente dinámico y cosmopolita, todo mientras disfrutas de la tranquilidad y privacidad que este desarrollo exclusivo proporciona. Jean-Georges Tropic Residences es más que un hogar; es un estilo de vida donde el lujo, la comodidad y la ubicación se unen para crear una experiencia residencial inigualable.",
];
JeanGeorgesMiamiTropicResidences.numberOfImages  = 30;
JeanGeorgesMiamiTropicResidences.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>Año de apertura</dt>
        <dd>{JeanGeorgesMiamiTropicResidences.añoDeConstrucciónOFinalización}</dd>
        <dt>Número de pisos</dt>
        <dd>{JeanGeorgesMiamiTropicResidences.numberOfFloors}</dd>
        <dt>Número de unidades</dt>
        <dd>{JeanGeorgesMiamiTropicResidences.numberOfUnits}</dd>
        <dt>Número de cuartos</dt>
        <dd>{JeanGeorgesMiamiTropicResidences.numberOfRooms.start + " - " + JeanGeorgesMiamiTropicResidences.numberOfRooms.end}</dd>
        <dt>Ubicación</dt>
        <dd>
          <address>{JeanGeorgesMiamiTropicResidences.ubicación}</address>
        </dd>
      </dl>
    </>
  ),
  amenidades: (
    <>
      <ul>
        <li>
          Restaurante privado en el nivel de la piscina para los residentes y
          programación de alimentos y bebidas gourmet en todo el edificio por el
          chef de renombre mundial Jean-Georges.
        </li>
        <li>
          Diseñado por Yabu Pushelberg, el abundante suelo y los niveles de
          servicios están inmersos en el follaje inspirado en el paisaje
          tropical de Miami.
        </li>
        <li>
          Menús especiales de entretenimiento y catering, almacenamiento de
          despensa y servicios de comedor en la residencia seleccionados por
          Jean-Georges.
        </li>
        <li>
          Porte-cochère privado en el segundo nivel con valet dedicado y entrega
          sin problemas.
        </li>
        <li>
          Mentalidad sostenible con el diseño de Florida Green Building
          Coalition.
        </li>
        <li>
          Venta minorista única en la planta baja con las cocinas abc
          inaugurales de Jean-Georges en Miami.
        </li>
        <li>
          Cruce peatonal que conduce directamente al Design District de Miami.
        </li>
        <li>Impresionante vestíbulo diseñado por Yabu Pushelberg</li>
        <li>Sala de correo</li>
        <li>Conserjería y servicio de aparcacoches 24/7</li>
        <li>Estudio de grabación de podcasts</li>
        <li>Business Lounge y Coworking con Salas de Conferencias</li>
        <li>Sala multifunción</li>
        <li>Galería</li>
        <li>Cocina del chef</li>
        <li>Salón de residentes</li>
        <li>Bar de jugos</li>
        <li>Baño de vapor</li>
        <li>Sauna de infrarrojos</li>
        <li>Wet Spa Hot &amp; Cold Plunge</li>
        <li>Estudio de fitness</li>
        <li>Estudio de yoga</li>
        <li>Jardín curativo</li>
        <li>Salas de masajes</li>
        <li>Piscina y terraza estilo centro turístico</li>
        <li>Teatro al aire libre y salón y cocina al aire libre</li>
        <li>Comedor y bar interior / exterior</li>
        <li>Habitación de niños</li>
        <li>Sala de juegos</li>
        <li>Simulador de golf</li>
        <li>Sky Bar Lounge</li>
        <li>Biblioteca de archivos</li>
      </ul>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>Vestíbulos de ascensores residenciales privados y semiprivados</li>
        <li>Amplios balcones con barandillas de vidrio</li>
        <li>
          Vistas inmersivas de 180 grados de la Bahía de Biscayne, el Distrito
          de Diseño de Miami y el centro de la ciudad
        </li>
        <li>
          Espacios abiertos y espaciosos con techos de 10 a 11 pies y ventanas
          de vidrio de piso a techo
        </li>
        <li>
          Cocinas residenciales inspiradas en el chef Jean-Georges, galardonado
          con una estrella Michelin
        </li>
        <li>Armarios terminados en el dormitorio principal</li>
        <li>Disposiciones para cortinas motorizadas</li>
        <li>Encimera superior con losa de piedra natural</li>
        <li>
          Protector contra salpicaduras de mosaico de azulejos de cerámica
          rojo-marrón Yohen Border
        </li>
        <li>
          Paquete de electrodomésticos de acero inoxidable Gaggenau con
          refrigerador y lavavajillas integrados en el panel
        </li>
        <li>
          Ducha y bañeras con baldosas cerámicas verticales en tonos arcilla
          rosa
        </li>
        <li>
          Accesorios de plomería de acabado premium de níquel cepillado Gessi
        </li>
        <li>Encimeras de granito rojo volcán</li>
        <li>
          Gabinetes de tocador de madera italiana con acabado en madera de playa
          clara
        </li>
      </ul>
    </>
  ),
};

JeanGeorgesMiamiTropicResidences.banner = true;

export default JeanGeorgesMiamiTropicResidences;
