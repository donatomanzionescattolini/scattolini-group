import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";

const JeanGeorgesMiamiTropicResidences = new Desarrollo(MidtownMiami());
JeanGeorgesMiamiTropicResidences.nombre =
    "jean-georges-miami-tropic-residences";
JeanGeorgesMiamiTropicResidences.titulo = "Jean-Georges Miami Tropic Residences";
JeanGeorgesMiamiTropicResidences.estimatedCompletionYear = 2028;
JeanGeorgesMiamiTropicResidences.numberOfFloors = 49;
JeanGeorgesMiamiTropicResidences.numberOfUnits = 329;
JeanGeorgesMiamiTropicResidences.numberOfRooms = {start: 1, end: 4};
JeanGeorgesMiamiTropicResidences.area = MidtownMiami();
JeanGeorgesMiamiTropicResidences.ubicacion = "3501 N Miami Ave, Miami, FL 33127, USA";
JeanGeorgesMiamiTropicResidences.introduccion = [
    "Descubre Jean-Georges Tropic Residences, una joya arquitectÃ³nica en el corazÃ³n de Midtown Miami. Este exclusivo desarrollo residencial redefine el lujo contemporÃ¡neo con su diseÃ±o elegante y sofisticado, inspirado en la visiÃ³n del renombrado chef Jean-Georges Vongerichten. Cada detalle ha sido cuidadosamente pensado para ofrecer un estilo de vida excepcional, desde sus amplias residencias con vistas panorÃ¡micas hasta sus amenidades de primer nivel que incluyen un gimnasio de Ãºltima generaciÃ³n, piscina infinita y espacios sociales diseÃ±ados para la comodidad y el entretenimiento.",
    "Ubicado estratÃ©gicamente en una de las zonas mÃ¡s vibrantes de Miami, Jean-Georges Tropic Residences ofrece acceso inmediato a una variedad de restaurantes, tiendas y opciones culturales. Vive la experiencia de Midtown Miami con su ambiente dinÃ¡mico y cosmopolita, todo mientras disfrutas de la tranquilidad y privacidad que este desarrollo exclusivo proporciona. Jean-Georges Tropic Residences es mÃ¡s que un hogar; es un estilo de vida donde el lujo, la comodidad y la ubicacion se unen para crear una experiencia residencial inigualable.",
];
JeanGeorgesMiamiTropicResidences.numberOfImages = 30;
JeanGeorgesMiamiTropicResidences.caracteristicas = {
    edificio: (
        <>
            <dl>
                <dt>AÃ±o de apertura</dt>
                <dd>{JeanGeorgesMiamiTropicResidences.estimatedCompletionYear}</dd>
                <dt>NÃºmero de pisos</dt>
                <dd>{JeanGeorgesMiamiTropicResidences.numberOfFloors}</dd>
                <dt>NÃºmero de unidades</dt>
                <dd>{JeanGeorgesMiamiTropicResidences.numberOfUnits}</dd>
                <dt>NÃºmero de cuartos</dt>
                <dd>{JeanGeorgesMiamiTropicResidences.numberOfRooms.start + " - " + JeanGeorgesMiamiTropicResidences.numberOfRooms.end}</dd>
                <dt>ubicacion</dt>
                <dd>
                    <address>{JeanGeorgesMiamiTropicResidences.ubicacion}</address>
                </dd>
            </dl>
        </>
    ),
    amenidades: (
        <>
            <ul>
                <li>
                    Restaurante privado en el nivel de la piscina para los residentes y
                    programaciÃ³n de alimentos y bebidas gourmet en todo el edificio por el
                    chef de renombre mundial Jean-Georges.
                </li>
                <li>
                    DiseÃ±ado por Yabu Pushelberg, el abundante suelo y los niveles de
                    servicios estÃ¡n inmersos en el follaje inspirado en el paisaje
                    tropical de Miami.
                </li>
                <li>
                    MenÃºs especiales de entretenimiento y catering, almacenamiento de
                    despensa y servicios de comedor en la residencia seleccionados por
                    Jean-Georges.
                </li>
                <li>
                    Porte-cochÃ¨re privado en el segundo nivel con valet dedicado y entrega
                    sin problemas.
                </li>
                <li>
                    Mentalidad sostenible con el diseÃ±o de Florida Green Building
                    Coalition.
                </li>
                <li>
                    Venta minorista Ãºnica en la planta baja con las cocinas abc
                    inaugurales de Jean-Georges en Miami.
                </li>
                <li>
                    Cruce peatonal que conduce directamente al Design District de Miami.
                </li>
                <li>Impresionante vestÃ­bulo diseÃ±ado por Yabu Pushelberg</li>
                <li>Sala de correo</li>
                <li>ConserjerÃ­a y servicio de aparcacoches 24/7</li>
                <li>Estudio de grabaciÃ³n de podcasts</li>
                <li>Business Lounge y Coworking con Salas de Conferencias</li>
                <li>Sala multifunciÃ³n</li>
                <li>GalerÃ­a</li>
                <li>Cocina del chef</li>
                <li>SalÃ³n de residentes</li>
                <li>Bar de jugos</li>
                <li>BaÃ±o de vapor</li>
                <li>Sauna de infrarrojos</li>
                <li>Wet Spa Hot &amp; Cold Plunge</li>
                <li>Estudio de fitness</li>
                <li>Estudio de yoga</li>
                <li>JardÃ­n curativo</li>
                <li>Salas de masajes</li>
                <li>Piscina y terraza estilo centro turÃ­stico</li>
                <li>Teatro al aire libre y salÃ³n y cocina al aire libre</li>
                <li>Comedor y bar interior / exterior</li>
                <li>HabitaciÃ³n de niÃ±os</li>
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
                <li>VestÃ­bulos de ascensores residenciales privados y semiprivados</li>
                <li>Amplios balcones con barandillas de vidrio</li>
                <li>
                    Vistas inmersivas de 180 grados de la BahÃ­a de Biscayne, el Distrito
                    de DiseÃ±o de Miami y el centro de la ciudad
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
                    Protector contra salpicaduras de mosaico de azulejos de cerÃ¡mica
                    rojo-marrÃ³n Yohen Border
                </li>
                <li>
                    Paquete de electrodomÃ©sticos de acero inoxidable Gaggenau con
                    refrigerador y lavavajillas integrados en el panel
                </li>
                <li>
                    Ducha y baÃ±eras con baldosas cerÃ¡micas verticales en tonos arcilla
                    rosa
                </li>
                <li>
                    Accesorios de plomerÃ­a de acabado premium de nÃ­quel cepillado Gessi
                </li>
                <li>Encimeras de granito rojo volcÃ¡n</li>
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

