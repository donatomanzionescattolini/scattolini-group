import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function OnePark() {
    const OneParkObject = new Desarrollo();
    OneParkObject.name = "one-park";

    OneParkObject.caracteristicas = {
        edificio: (
            <>
                <ul className="list">
                    <li>Unidades: 299 residencias de primera calidad y lujo</li>
                    <li>Pisos: 33</li>
                    <li>Ubicación: 2411 Laguna Circle, North Miami, FL 3318</li>
                    <li>Arquitectura de primer nivel.</li>
                    <li>
                        Distinguida torre de 33 pisos diseñada por el galardonado
                        estudio Arquitectonica.
                    </li>

                    <li>Tres plantas de residencias penthouse.</li>
                    <li>Acceso en ascensor de alta velocidad a residencias.</li>
                    <li>
                        Acceso directo en ascensor de alta velocidad a las residencias
                        de esquina.
                    </li>
                    <li>Hall de entrada residencial privado y porte-cochere.</li>
                    <li>
                        Garaje de estacionamiento seguro, con estaciones de carga de
                        vehículos eléctricos.
                    </li>
                    <li>Seguridad profesional y videovigilancia las 24 horas.</li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul className="list">
                    <li>Acceso en ascensor de alta velocidad a residencias</li>
                    <li>
                        Acceso directo en ascensor de alta velocidad a las residencias
                        de esquina
                    </li>
                    <li>
                        Entrada cerrada y estacionamiento en garaje seguro con
                        estaciones de carga de vehículos eléctricos
                    </li>
                    <li>Porte Cochère residencial privado de entrega y vestíbulo</li>
                    <li>Seguridad profesional y videovigilancia las 24 horas</li>
                    <li>
                        Vistas panorámicas que abarcan el Parque Estatal del Río Oleta,
                        el Océano Atlántico, el horizonte de Miami y la Laguna SoLé
                    </li>
                    <li>
                        Planos de planta abiertos espaciosos y completamente terminados
                        con alturas de techo de más de 9 pies
                    </li>
                    <li>
                        Balcones envolventes privados de gran tamaño, con piso
                        terminado, con barandillas de vidrio sin costuras
                    </li>
                    <li>
                        Suite principal con puertas de núcleo sólido y vestidores
                        grandes para él y para ella
                    </li>
                    <li>Paredes insonorizadas en todas partes</li>
                    <li>Preparado para la tecnología inteligente</li>
                    <li>Gabinetes de cocina italianos de Ital Kraft</li>
                    <li>Encimeras y salpicaderos de piedra</li>
                    <li>Electrodomésticos Sub-Zero y Wolf</li>
                    <li>Lavadora y secadora silenciosas de carga frontal</li>
                    <li>Tocadores de baño italianos de Ital Kraft</li>
                    <li>Grifería de baño de estilo europeo</li>
                    <li>
                        Duchas sin marco, con mampara de vidrio y cabezales de ducha de
                        mano
                    </li>
                    <li>
                        Baño principal con cuarto húmedo y bañera profunda en unidades
                        selectas
                    </li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    <li>
                        Gimnasio de última generación totalmente equipado, con vista a
                        ONE Beach Club
                    </li>
                    <li>
                        Lujoso spa para hombres y mujeres con salas de tratamiento de
                        masajes, sauna y vapor
                    </li>
                    <li>Estudio de simulador de golf</li>
                    <li>
                        Lujoso salón social con bar, sala de billar, cocina de catering
                        y centro multimedia
                    </li>
                    <li>Sala de juegos para adolescentes</li>
                    <li>
                        6º piso Salón social interior / exterior con vista a ONE Beach
                        Club
                    </li>
                    <li>Salón de negocios ejecutivo con espacio de coworking</li>
                    <li>ONE Café con café y servicio diario de prensa</li>
                    <li>
                        Amplia terraza social en el sexto piso con piscina y spa con
                        vista al mar
                    </li>
                    <li>Cocina de verano junto a la piscina</li>
                    <li>Zona de juegos infantiles</li>
                    <li>Senderos para pasear perros</li>
                    <li>
                        ONE Jardin y exuberantes senderos ajardinados que conducen a ONE
                        Beach Club
                    </li>
                    <li>
                        Parques infantiles con canchas profesionales de tenis y
                        pickleball
                    </li>
                    <li>
                        Jardín de medio acre diseñado por el arquitecto paisajista de
                        renombre internacional Enzo Enea con pasarelas exuberantemente
                        ajardinadas que conducen a través de ONE Jardin a ONE Beach Club
                    </li>
                    <li>
                        Club de playa privado con playas de arena y Crystal Lagoon™ de
                        siete acres
                    </li>
                    <li>
                        Kayak, paddle boarding, botes de remos, colchonetas de agua,
                        inflables, snorkel
                    </li>
                    <li>Cabañas de playa</li>
                    <li>Lugares de picnic</li>
                    <li>
                        Servicio de bocadillos, toallas y bebidas estilo conserjería
                    </li>
                    <li>Asistentes de piscina y servicio de toallas</li>
                    <li>
                        Clases de bienestar, que incluyen yoga, pilates y spinning para
                        la búsqueda de una vida saludable
                    </li>
                </ul>
            </>
        ),
    };
    OneParkObject.introduccion = [
        "One Park Tower by Turnberry es un moderno condominio residencial, que cuenta con 303 residencias de lujo en configuraciones de 1, 2 y 3 dormitorios. Una de sus principales características es su programa de alquiler flexible, que permite una estancia mínima de 30 días 12 veces al año. El diseño minimalista de Arquitectonica en esta torre de 31 pisos permite que entre mucha luz natural en todas las residencias y áticos. El aclamado estudio Meyer Davis trabajó en el diseño interior de One Park Tower; y el hermoso diseño paisajístico es obra maestra de Enzo Enea. Cada residencia tiene su propia filosofía de diseño, manteniendo un enfoque de diseño muy minimalista y un ambiente relajante como en cualquier otro lugar del sur de Florida. Este edificio está ubicado en SoLé Mia, una comunidad planificada ubicada en North Miami, Florida, que cuenta con una laguna privada y una playa privada. La mejor característica de One Park Tower es la ubicación: el condominio está a pocos minutos de Bay Harbor Islands y Sunny Isles Beach.      ",
    ];
    OneParkObject.title = "One Park";
    OneParkObject.subtitulo = <em>by Turnberry</em>;
    OneParkObject.numberOfImages = 27;
    OneParkObject.banner = true;
    OneParkObject.area = MiamiBeach();
    OneParkObject.direccion = "2411 Laguna Circle, North Miami, FL 33181";
    return OneParkObject;
}