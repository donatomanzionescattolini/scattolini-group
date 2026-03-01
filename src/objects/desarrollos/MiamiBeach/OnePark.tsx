import MiamiBeach from "../../areas/MiamiBeach.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function OnePark(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("one-park", lang);
    const OneParkObject = new Desarrollo();
    OneParkObject.nombre = "one-park";

    OneParkObject.caracteristicas = {
        edificio: (
            <>
                <ul className="list">
                    <li>{getLocalizedField("caracteristicas.edificio.unidades", "Unidades: 299 residencias de primera calidad y lujo")}</li>
                    <li>{getLocalizedField("caracteristicas.edificio.pisos", "Pisos: 33")}</li>
                    <li>{getLocalizedField("caracteristicas.edificio.ubicacion", "Ubicación: 2411 Laguna Circle, North Miami, FL 3318")}</li>
                    <li>{getLocalizedField("caracteristicas.edificio.arquitectura", "Arquitectura de primer nivel.")}</li>
                    <li>
                        {getLocalizedField("caracteristicas.edificio.diseno", "Distinguida torre de 33 pisos diseñada por el galardonado estudio Arquitectonica.")}
                    </li>

                    <li>{getLocalizedField("caracteristicas.edificio.penthouse", "Tres plantas de residencias penthouse.")}</li>
                    <li>{getLocalizedField("caracteristicas.edificio.ascensor", "Acceso en ascensor de alta velocidad a residencias.")}</li>
                    <li>
                        {getLocalizedField("caracteristicas.edificio.ascensorDirecto", "Acceso directo en ascensor de alta velocidad a las residencias de esquina.")}
                    </li>
                    <li>{getLocalizedField("caracteristicas.edificio.hall", "Hall de entrada residencial privado y porte-cochere.")}</li>
                    <li>
                        {getLocalizedField("caracteristicas.edificio.garaje", "Garaje de estacionamiento seguro, con estaciones de carga de vehículos eléctricos.")}
                    </li>
                    <li>{getLocalizedField("caracteristicas.edificio.seguridad", "Seguridad profesional y videovigilancia las 24 horas.")}</li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul className="list">
                    {getLocalizedArray("caracteristicas.residencias.items", [
                        "Acceso en ascensor de alta velocidad a residencias",
                        "Acceso directo en ascensor de alta velocidad a las residencias de esquina",
                        "Entrada cerrada y estacionamiento en garaje seguro con estaciones de carga de vehículos eléctricos",
                        "Porte Cochère residencial privado de entrega y vestíbulo",
                        "Seguridad profesional y videovigilancia las 24 horas",
                        "Vistas panorámicas que abarcan el Parque Estatal del Río Oleta, el Océano Atlántico, el horizonte de Miami y la Laguna SoLé",
                        "Planos de planta abiertos espaciosos y completamente terminados con alturas de techo de más de 9 pies",
                        "Balcones envolventes privados de gran tamaño, con piso terminado, con barandillas de vidrio sin costuras",
                        "Suite principal con puertas de núcleo sólido y vestidores grandes para él y para ella",
                        "Paredes insonorizadas en todas partes",
                        "Preparado para la tecnología inteligente",
                        "Gabinetes de cocina italianos de Ital Kraft",
                        "Encimeras y salpicaderos de piedra",
                        "Electrodomésticos Sub-Zero y Wolf",
                        "Lavadora y secadora silenciosas de carga frontal",
                        "Tocadores de baño italianos de Ital Kraft",
                        "Grifería de baño de estilo europeo",
                        "Duchas sin marco, con mampara de vidrio y cabezales de ducha de mano",
                        "Baño principal con cuarto húmedo y bañera profunda en unidades selectas",
                    ]).map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    {getLocalizedArray("caracteristicas.amenidades.items", [
                        "Gimnasio de última generación totalmente equipado, con vista a ONE Beach Club",
                        "Lujoso spa para hombres y mujeres con salas de tratamiento de masajes, sauna y vapor",
                        "Estudio de simulador de golf",
                        "Lujoso salón social con bar, sala de billar, cocina de catering y centro multimedia",
                        "Sala de juegos para adolescentes",
                        "6º piso Salón social interior / exterior con vista a ONE Beach Club",
                        "Salón de negocios ejecutivo con espacio de coworking",
                        "ONE Café con café y servicio diario de prensa",
                        "Amplia terraza social en el sexto piso con piscina y spa con vista al mar",
                        "Cocina de verano junto a la piscina",
                        "Zona de juegos infantiles",
                        "Senderos para pasear perros",
                        "ONE Jardin y exuberantes senderos ajardinados que conducen a ONE Beach Club",
                        "Parques infantiles con canchas profesionales de tenis y pickleball",
                        "Jardín de medio acre diseñado por el arquitecto paisajista de renombre internacional Enzo Enea con pasarelas exuberantemente ajardinadas que conducen a través de ONE Jardin a ONE Beach Club",
                        "Club de playa privado con playas de arena y Crystal Lagoon™ de siete acres",
                        "Kayak, paddle boarding, botes de remos, colchonetas de agua, inflables, snorkel",
                        "Cabañas de playa",
                        "Lugares de picnic",
                        "Servicio de bocadillos, toallas y bebidas estilo conserjería",
                        "Asistentes de piscina y servicio de toallas",
                        "Clases de bienestar, que incluyen yoga, pilates y spinning para la búsqueda de una vida saludable",
                    ]).map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </>
        ),
    };
    OneParkObject.introduccion = getLocalizedArray("introduccion", [
        "One Park Tower by Turnberry es un moderno condominio residencial, que cuenta con 303 residencias de lujo en configuraciones de 1, 2 y 3 dormitorios. Una de sus principales características es su programa de alquiler flexible, que permite una estancia mínima de 30 días 12 veces al año. El diseño minimalista de Arquitectonica en esta torre de 31 pisos permite que entre mucha luz natural en todas las residencias y áticos. El aclamado estudio Meyer Davis trabajó en el diseño interior de One Park Tower; y el hermoso diseño paisajístico es obra maestra de Enzo Enea. Cada residencia tiene su propia filosofía de diseño, manteniendo un enfoque de diseño muy minimalista y un ambiente relajante como en cualquier otro lugar del sur de Florida. Este edificio está ubicado en SoLé Mia, una comunidad planificada ubicada en North Miami, Florida, que cuenta con una laguna privada y una playa privada. La mejor característica de One Park Tower es la ubicación: el condominio está a pocos minutos de Bay Harbor Islands y Sunny Isles Beach.",
    ]);
    OneParkObject.titulo = getLocalizedField("titulo", "One Park");
    OneParkObject.slogan = getLocalizedField("slogan", "by Turnberry");
    OneParkObject.numberOfImages = 27;
    OneParkObject.banner = true;
    OneParkObject.area = MiamiBeach();
    OneParkObject.direccion = getLocalizedField("direccion", "2411 Laguna Circle, North Miami, FL 33181");
    return OneParkObject;
}
