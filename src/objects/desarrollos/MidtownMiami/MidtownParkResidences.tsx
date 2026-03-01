import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function MidtownParkResidences(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("midtown-park-residences", lang);
    const MidtownParkResidencesObject = new Desarrollo(MidtownMiami());
    MidtownParkResidencesObject.titulo = getLocalizedField("titulo", "Midtown Park Residences");
    MidtownParkResidencesObject.nombre = "midtown-park-residences";
    MidtownParkResidencesObject.introduccion = getLocalizedArray("introduccion", [
        "Midtown Park es un animado centro de cinco acres las 24 horas del día en Midtown Miami, que une Design District, Wynwood y Edgewater. Este espacio de uso mixto combina oficinas, casas de lujo y áreas públicas vibrantes, fomentando la creatividad y la comunidad. Con más de 100,000 pies cuadrados de tiendas y restaurantes a nivel de calle, mejora el ambiente transitable. El desarrollo cuenta con un acre de espacios verdes, incluidos los parques East y West y dos paseos sombreados. Una entrada empedrada en Midtown Boulevard agrega comodidad, mientras que el tercer piso alberga un club de raqueta de ocho canchas para recreación de primer nivel. Las oficinas boutique atraen a firmas creativas, prácticas legales y profesionales de las finanzas, enriqueciendo la escena dinámica de Midtown.",
    ]);
    MidtownParkResidencesObject.slogan = getLocalizedField("slogan", "La Vida Exuberante Comienza Aquí");
    MidtownParkResidencesObject.numberOfImages = 49;
    MidtownParkResidencesObject.ubicacion = getLocalizedField("ubicacion", "2916 N Miami Ave, Miami, FL 33127 ");
    MidtownParkResidencesObject.numberOfFloors = 30;
    MidtownParkResidencesObject.numberOfUnits = 290;
    MidtownParkResidencesObject.typeOfUnits = getLocalizedField("typeOfUnits", "Estudios, 1-5 habitaciones");
    MidtownParkResidencesObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>{getLocalizedField("caracteristicas.edificio.ubicacion", "ubicacion")}</dt>
                    <dd>{MidtownParkResidencesObject.ubicacion}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.apertura", "Año de apertura")}</dt>
                    <dd>{MidtownParkResidencesObject.estimatedCompletionYear}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Numero de pisos")}</dt>
                    <dd>{MidtownParkResidencesObject.numberOfFloors}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.unidades", "Numero de unidades")}</dt>
                    <dd>{MidtownParkResidencesObject.numberOfUnits}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.tipo", "Tipo de unidades")}</dt>
                    <dd>{MidtownParkResidencesObject.typeOfUnits}</dd>
                </dl>
            </>
        ),
        residencias: (
            <>
                <ul>
                    {getLocalizedArray("caracteristicas.residencias.items", [
                        "Amplios estudios de concepto abierto, completamente terminados, residencias de una y dos habitaciones, con alturas de techo de más de 9 pies",
                        "Colección privada de residencias tipo penthouse with salas de estar en esquina de doble altura and techos de 20 pies, diseños de cuatro and cinco habitaciones, terrazas en la azotea, jardines and piscinas privadas.",
                        "Balcones privados envolventes de gran tamaño with pisos terminados and barandillas de vidrio.",
                        "Ventanas and puertas corredizas de piso a techo tintadas, resistentes a impactos and de bajo consumo energético",
                        "Pisos de porcelanato de madera importada en todas las residencias.",
                        "Cocinas diseñadas por Meyer Davis Studio with gabinetes italianos, encimeras de cuarzo importadas and detalles de tiradores de latón with electrodomésticos Sub-Zero Wolf integrados and grifos Hansgrohe.",
                        "Baños principales with duchas dobles with mampara de vidrio, accesorios de latón Hansgrohe and paredes de cerámica Jade exclusivas diseñadas por Meyer Davis Studio",
                        "Las residencias de tres habitaciones and de colección privada incluyen lavanderías completas, baños de Proper and bañeras independientes.",
                    ]).map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", [
                    "Impresionante vestíbulo and espacio de galería de 5.000 pies cuadrados repleto de arte, diseñado por Meyer Davis Studio, with un espectacular techo de 16 pies, una recepción escultural with servicio de conserjería las 24 horas, los 7 días de la semana, and 150 pies de frente de vidrio with vista a Midtown Boulevard, East Park and los paseos.",
                    "Conexiones convenientes al spa para mascotas, sala de correo and sala de entrega.",
                    "La cafetería de la planta baja junto al vestíbulo ofrece un lugar para recargar energías por la mañana with café and pasteles antes de dirigirse al vecindario.",
                    "Puerta cochera de llegada frente al East Park with estación de valet parking and acceso a la variedad de boutiques, restaurantes gourmet and cafés de Midtown Park.",
                    "Sala East Lounge with cocina de chef, televisores de pantalla grande, asientos cómodos and conexión a terrazas al aire libre.",
                    "Salón de eventos para reuniones familiares íntimas and eventos.",
                    "Salón de negocios and coworking with mostradores de café, pasteles and jugos naturales.",
                    "Sala de juegos para niños junto a la piscina.",
                    "Gimnasio de 3.000 pies cuadrados and sala de pilates with equipos de última generación",
                    "Spa, vestuarios, baño de vapor, sauna and conexión a terrazas exteriores.",
                    "Golf virtual and sala de proyecciones.",
                    "Un conserje cultural ofrece una extensa red local and un profundo conocimiento de la cultura de Miami, ofreciendo acceso preferencial a deportes locales, fashion, art and otros eventos de alto perfil.",
                    "Un calendario completo de reuniones sociales, fitness, wellness and mucho más.",
                    "Servicios a domicilio a pedido, como entrega de groceries, catering, servicio culinario personalizado, limpieza, servicio de lavandería and más.",
                    "Servicios mientras está fuera, incluido el cuidado de mascotas, cuidado de plantas and mantenimiento de rutina del hogar*",
                    "Masajes a la carta and tratamientos de spa.",
                    "Entrenamiento personalizado and clases de yoga.",
                    "Servicios de chef gourmet para organizar cenas privadas and eventos en el séptimo piso.",
                    "Como propietario de una residencia adecuada, usted forma parte de una comunidad exclusiva with acceso a experiencias exclusivas, momentos culturales and comodidades pensadas para definir la vida.",
                    "Sus beneficios exclusivos incluyen: tarifas preferenciales en habitaciones, tratamientos de spa and comidas en toda la cartera de Proper Hospitality.",
                    "Reconocimiento VIP with cortesías personalizadas durante toda su estancia",
                    "Acceso exclusivo a Proper Presents: nuestra serie de eventos culturales exclusivos a los que solo se puede asistir with invitación",
                ]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };

    MidtownParkResidencesObject.banner = true;

    return MidtownParkResidencesObject;
}
