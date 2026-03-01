import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function thestandardresidences(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("the-standard-residences", lang);
    const d = new Desarrollo(MidtownMiami());
    d.titulo = getLocalizedField("titulo", "The Standard Residences");
    d.nombre = "the-standard-residences";
    d.introduccion = getLocalizedArray("introduccion", ["The Standard Residences cuenta con 12 pisos, con 228 residencias que van desde estudios hasta configuraciones de 2 dormitorios. Este es el primer proyecto residencial de la famosa marca de hoteles, The Standard. Todas las ubicaciones tienen que ver con el ambiente y la experiencia... Disfruta del ambiente y la cultura únicos de la marca como nunca antes. Las comodidades incluyen Internet de alta velocidad, amplio vestíbulo, spa para mascotas, terraza en la azotea con piscina y cabañas, sala de proyección privada, piso social, gimnasio, espacios de trabajo conjunto y más. Las residencias estándar Midtown Miami están a pasos de todo; Midtown es el vecindario más amigable para los peatones de Miami, conectado con el Design District en el norte y Wynwood en el sur. Este increíble condominio no solo fue diseñado por la galawardada firma Arquitectonica, sino que también ofrece increíbles vistas de la ciudad."]);
    d.slogan = getLocalizedField("slogan", "Un estándar superior");
    d.typeOfUnits = getLocalizedField("typeOfUnits", "Estudios, apartamentos de 1, 2 y 3 habitaciones");
    d.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>{getLocalizedField("caracteristicas.edificio.apertura", "Año de apertura")}</dt>
                    <dd>{d.estimatedCompletionYear}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Número de pisos")}</dt>
                    <dd>{d.numberOfFloors}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.unidades", "Número de unidades")}</dt>
                    <dd>{d.numberOfUnits}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.tipo", "Tipo de unidades")}</dt>
                    <dd>{d.typeOfUnits}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.ubicacion", "ubicacion")}</dt>
                    <dd>{d.ubicacion}</dd>
                </dl>
            </>
        ),
        residencias: (
            <ul>
                {getLocalizedArray("caracteristicas.residencias.items", ["Los acabados instalados a la medida, diseñados por Urban Robot, elevan la experiencia humana y brindan un sentido de pertenencia", "Los elegantes planos de planta abiertos y los techos de nueve pies (2.74 m) de altura invitan el ingreso de la luz natural a través de las puertas corredizas de vidrio enteras", "Las cocinas contemporáneas abiertas con electrodomésticos de primera línea son elegantes y funcionales", "El piso de cerámica de primera calidad inspirado en madera ofrece una sofisticación atemporal", "Los baños a la medida se destacan por envidiables tocadores dobles y ducha con dos rociadores; todo acentuado por elegantes accesorios en tonos de bronce", "Lavadora y secadora de alta eficiencia", "Las terrazas privadas al aire libre en ciertas residencias se conjugan a la perfección con la energía vibrante de Midtown Miami"]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", ["12 pisos que incluyen 40,000 pies cuadrados de servicios y 14,000 pies cuadrados de tiendas minoristas en la planta baja", "Ascensores de alta velocidad con acceso controlado a la propiedad.", "Programa de alquiler flexible con estadía mínima de 30 días, 12 veces al año", "Servicio de Internet de alta velocidad and WiFi en toda la propiedad.", "Amplio vestíbulo con techos altos de doble altura and espacios sociales cuidadosamente personalizados, incluido The Standard Café", "Comunidad que admite mascotas con spa de aseo", "Terraza en la azotea estilo centro turístico con jardines tropicales que cuenta con una piscina de 60 pies de largo, spa con hidromasaje, cabañas junto a la piscina and duchas de lluvia al aire libre.", "Restaurante and bar en la azotea de inspiración global con servicio junto a la piscina and entrega a pedido a residencias", "Sala de proyección privada de alta definición con equipos audiovisuales de última generación.", "Piso social vibrante con amplio salón, bar de karaoke and cocina and bar gourmet, todos con vista a la cancha de pickleball, ideal para cualquier celebración o reunión.", "Piso deportivo con gimnasio de última generación totalmente equipado, terraza de yoga al aire libre, estudio de yoga and meditación interior, saunas de infrarrojos and cancha de pickleball.", "Piso de trabajo con espacios de coworking, cuatro salas grandes and sala de juntas privada con internet de alta velocidad", "Espacios para guardar bicicletas.", "Vestíbulo atendido las 24 horas and servicios de conserjería."]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };
    d.banner = true;
    return d;
}
