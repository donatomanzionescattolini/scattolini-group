import {getDesarrolloI18n} from "../useDesarrolloI18n";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import NorthBayVillage from "../../areas/NorthBayVillage.tsx";
import React from "react";

export default function ShomaBay(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("shoma-bay", lang);
    const ShomaBayObject = new Desarrollo();
    ShomaBayObject.nombre = getLocalizedField("nombre", "shoma-bay");

    ShomaBayObject.direccion = getLocalizedField("direccion", "1850 John F Kennedy Causeway, North Bay Village, FL 33141");
    ShomaBayObject.ubicacion = ShomaBayObject.direccion;
    ShomaBayObject.numberOfFloors = getLocalizedField("numberOfFloors", "24");
    ShomaBayObject.numberOfUnits = getLocalizedField("numberOfUnits", "333");
    ShomaBayObject.typeOfUnits = getLocalizedField("typeOfUnits", "1 a 3 habitaciones");
    ShomaBayObject.constructora = getLocalizedField("constructora", "Shoma Group");
    ShomaBayObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Número de pisos")}</dt>
                    <dd>{ShomaBayObject.numberOfFloors}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.unidades", "Número de unidades")}</dt>
                    <dd>{ShomaBayObject.numberOfUnits}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.tipo", "Tipo de unidades")}</dt>
                    <dd>{ShomaBayObject.typeOfUnits}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.ubicacion", "Ubicación")}</dt>
                    <dd>{ShomaBayObject.ubicacion}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.desarrollador", "Desarrollador")}</dt>
                    <dd>{ShomaBayObject.constructora}</dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.disenoInteriores", "Diseño de interiores")}</dt>
                    <dd>{getLocalizedField("interiorDesign", "Adriana Hoyos Design Studio")}</dd>
                </dl>
                <ul>
                    {getLocalizedArray("caracteristicas.edificio.items", [
                        "Shoma Bay es el primero de su clase: un oasis frente al agua diseñado para integrar vida, trabajo, bienestar y diversión.",
                        "North Bay Village ofrece un respiro de las áreas metropolitanas de Miami, rodeada por la Bahía de Biscayne y vistas panorámicas al agua.",
                        "Vistas de 360 grados al agua entre Miami y Miami Beach.",
                        "Proyecto concebido para ofrecer una experiencia vibrante y sofisticada en una de las zonas más emocionantes del sur de Florida.",
                        "Diseño icónico y elegante que resalta la belleza natural de North Bay Village.",
                        "Lobby majestuoso con concierge y experiencia de llegada residencial privada.",
                        "Seguridad 24 horas con sistema de videovigilancia.",
                        "Porte cochère residencial privado y garaje cerrado con puerta automática.",
                        "Control de acceso mediante tecnología biométrica y ascensores de alta velocidad.",
                    ]).map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </>
        ),
        residencias: (
            <ul>
                {getLocalizedArray("caracteristicas.residencias.items", [
                    "Magníficas vistas panorámicas de agua sobre la Bahía de Biscayne.",
                    "Puertas de vidrio deslizantes de piso a techo.",
                    "Pisos de porcelanato moderno.",
                    "Diseños abiertos y luminosos con techos de más de 9 pies en las unidades típicas, más de 10 pies en los lower penthouses y doble altura en los penthouses.",
                    "Ventanas eficientes en energía, de piso a techo.",
                    "Tecnología de casa inteligente con cerradura de puerta inteligente.",
                    "Armarios empotrados de gran tamaño (excepto estudios).",
                    "Pre-cableado para datos de alta velocidad con salidas de carga USB y USB-C.",
                    "Lavadora y secadora Samsung.",
                    "Armarios maestros construidos para todas las unidades.",
                    "Paredes y pisos aislados acústicamente.",
                    "Cocinas con gabinetes italianos modernos, encimeras Dekton, accesorios de cromo, sistema de filtración de agua y electrodomésticos premium Miele.",
                    "Residencias lower penthouse y penthouse con colección exclusiva de electrodomésticos Gaggenau: refrigerador y congelador de puerta francesa panel-ready, lavavajillas panel-ready, horno empotrado y cocina de inducción.",
                    "Baños con gabinetes italianos modernos, accesorios de cromo, tocadores de diseñador, pisos de porcelana de 24” x 48” y colección exclusiva Roca con espejos retroiluminados y duchas de lluvia sin marco.",
                    "Lower penthouses y penthouses con colección de baño exclusiva Armani, duchas de lluvia sin marco y tinas de inmersión de diseñador en unidades selectas.",
                ]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
        amenidades: (
            <ul>
                {getLocalizedArray("caracteristicas.amenidades.items", [
                    "Jardín Zen con fogatas y césped de práctica de putt.",
                    "Rooftop con piscina temperada, cabañas, áreas de relajación y cocina de verano con vistas panorámicas al agua.",
                    "Salón exclusivo para propietarios con bar, simulador de golf y juegos de realidad virtual.",
                    "Spa exclusivo para residentes con hammam, sauna seca, sala de vapor y duchas sensoriales.",
                    "Centro de yoga y estudio de pilates.",
                    "Club de vino y salón de tabaco.",
                    "Cinema.",
                    "Amplio gimnasio de última generación con equipos True Palladium, bicicletas Echelon y máquinas de remo Hydrow Rower.",
                    "Lounge de negocios de calibre empresarial con área de co-working, oficinas privadas y biblioteca.",
                    "Club de niños con tecnología avanzada.",
                    "Salas de tratamiento y salón para peinados, retoques y estaciones de manicura-pedicura.",
                    "Rolls-Royce house car con servicio de chofer de cortesía.",
                    "Sala refrigerada para delivery de comestibles.",
                    "Pebbles Spa para mascotas.",
                    "Buzón de correspondencia y sistema de paquetería móvil.",
                    "Almacenamiento para residentes, estaciones de carga para vehículos eléctricos y almacenamiento para bicicletas y tablas de paddle.",
                    "Lounge de café Nespresso y servicio de reciclaje.",
                ]).map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        ),
    };
    ShomaBayObject.introduccion = getLocalizedArray("introduccion", [
        getLocalizedField("introduccion.0", "Shoma Bay es el primero de su clase: un lugar donde puedes vivir y disfrutar en lujo. Un oasis diseñado para quienes desean integrar en un solo lugar su estilo de vida, trabajo, bienestar y diversión."),
        getLocalizedField("introduccion.1", "North Bay Village es una joya oculta que ofrece un respiro de las áreas metropolitanas de Miami. Situada en medio de la Bahía de Biscayne y rodeada de hermosas vistas al agua, combina serenidad isleña con acceso inmediato a Miami y Miami Beach."),
        getLocalizedField("introduccion.2", "“Curamos cuidadosamente este proyecto para ofrecer una experiencia vibrante y sofisticada en una de las ciudades más emocionantes del mundo.” — Masoud Shojaee, CEO y Presidente de la Junta Directiva de Shoma Group."),
        getLocalizedField("introduccion.3", "“Hemos creado un diseño icónico y elegante que resalta la belleza natural de North Bay Village. Nuestro objetivo fue conectar el estilo de vida y el lujo con el confort y el bienestar como verdadera esencia.” — Adriana Hoyos, Directora Creativa de Adriana Hoyos Design Studio."),
        getLocalizedField("introduccion.4", "El concepto de diseño interior fue desarrollado para satisfacer las necesidades y expectativas de residentes que buscan lujo, bienestar, vida activa, espacios al aire libre y entornos amigables para las mascotas. Los materiales fueron seleccionados para garantizar calidad, durabilidad y un diseño atemporal."),
        getLocalizedField("introduccion.5", "Todas las instalaciones de Shoma Bay están concebidas con un enfoque holístico de la vida y dirigidas a quienes buscan integrar sus estilos de vida, trabajo, bienestar y diversión en uno solo. Cada espacio fue conceptualizado para elevar la experiencia diaria."),
        getLocalizedField("introduccion.6", "Ya sea en su lounge de negocios de calibre empresarial, en su spa con hammam, sauna seca, sala de vapor y duchas sensoriales, o en su rooftop con piscina temperada y vistas panorámicas al agua, Shoma Bay redefine el lujo contemporáneo en North Bay Village."),
        getLocalizedField("introduccion.7", "Dirigido por Shoma Group y con interiores firmados por Adriana Hoyos Design Studio, el proyecto une a uno de los desarrolladores inmobiliarios más destacados del sur de Florida con una firma de diseño galardonada para crear una propuesta residencial sofisticada, funcional y memorable."),
    ]);
    ShomaBayObject.banner = getLocalizedField("banner", "true") === "true";
    ShomaBayObject.area = NorthBayVillage();
    ShomaBayObject.titulo = getLocalizedField("titulo", "Shoma Bay");
    ShomaBayObject.slogan = getLocalizedField("slogan", "El primero de su clase: lujo, bienestar y estilo de vida frente al agua.");
    ShomaBayObject.numberOfImages = parseInt(getLocalizedField("numberOfImages", "16"), 10) || 16;
    ShomaBayObject.video =
        <div className="d-flex flex-row p-0 m-0 h-100 embed-responsive justify-content-center">
            <iframe
                width={"100%"}
                height={500}
                src="https://www.youtube.com/embed/UIfivX8efkQautoplay=true"
                title="Shoma Bay North Bay Village... Presented by Ashton Coleman"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                autoFocus
            ></iframe>
        </div>
    ;
    return ShomaBayObject;
}

