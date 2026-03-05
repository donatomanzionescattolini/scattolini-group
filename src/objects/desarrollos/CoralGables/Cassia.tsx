import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import CoralGables from "../../areas/CoralGables.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function Cassia(lang: "en" | "es" = "es") {
    const {getLocalizedField} = getDesarrolloI18n("cassia", lang);
    const CassiaObject = new Desarrollo(CoralGables());
    CassiaObject.nombre = "cassia";
    CassiaObject.titulo = getLocalizedField("titulo", "Cassia");
    CassiaObject.banner = true;

    CassiaObject.slogan = getLocalizedField("slogan", "Una nueva era de lujo clásico");
    CassiaObject.area = CoralGables();

    CassiaObject.direccion = getLocalizedField("direccion", "Merrick Park District, Coral Gables");
    CassiaObject.numberOfUnits = 174;
    CassiaObject.typeOfUnits = getLocalizedField("typeOfUnits", "1, 2 y 3 Dormitorios");
    CassiaObject.numberOfFloors = 12;
    CassiaObject.constructora = "Merrick 250, LLC";
    CassiaObject.desarrollador = "Merrick 250, LLC";
    CassiaObject.salesMarketing = "Alta Developers, LLC";

    CassiaObject.caracteristicas = {
        edificio: (
            <dl>
                <dt>{getLocalizedField("caracteristicas.edificio.direccion", "Dirección")}</dt>
                <dd>{CassiaObject.direccion}</dd>
                <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Número de Pisos")}</dt>
                <dd>{CassiaObject.numberOfFloors}</dd>
                <dt>{getLocalizedField("caracteristicas.edificio.unidades", "Número de Unidades")}</dt>
                <dd>{CassiaObject.numberOfUnits}</dd>
                <dt>{getLocalizedField("caracteristicas.edificio.desarrollador", "Desarrollador")}</dt>
                <dd>Merrick 250, LLC</dd>
                <dt>{getLocalizedField("caracteristicas.edificio.espacioAmenidades", "Espacio de Amenidades")}</dt>
                <dd>{getLocalizedField("caracteristicas.edificio.espacioAmenidadesValor", "Más de 1 hectárea de instalaciones interiores y exteriores")}</dd>
            </dl>
        ),
        residencias: (
            <ul>
                <li>{getLocalizedField("caracteristicas.residencias.muebles", "Completamente amueblados con RH")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.cocina", "Cocinas italianas con electrodomésticos Bosch")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.ventanas", "Ventanales de cielo a techo")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.tech", "Termostatos inteligentes y televisores incluidos")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.pisos", "Elegantes pisos importados de gran formato")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.persianas", "Persianas opacas en dormitorios y salas")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.armarios", "Armarios personalizados en habitación principal")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.armariosSeguridad", "Armarios con cerradura para propietarios")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.backsplash", "Impresionantes backsplashes y superficies elegantes")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.gabinetes", "Gabinetes importados con cierre automático")}</li>
            </ul>
        ),
        amenidades: (
            <dl>
                <dt>{getLocalizedField("caracteristicas.amenidades.spa.titulo", "SPA")}</dt>
                <dd>
                    <ul>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.piscina", "Piscina interior")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.loungeRelax", "Lounge de relajación")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.vapor", "Baño de vapor")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.sauna", "Sauna")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.masajes", "Cabinas para masajes y tratamientos")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.banosDobles", "Baños de spa para dos")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.lockers", "Lockers y duchas completamente equipados")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.spa.vestidores", "Vestidores")}</li>
                    </ul>
                </dd>
                <dt>{getLocalizedField("caracteristicas.amenidades.fitness.titulo", "Centro de Fitness de Vanguardia")}</dt>
                <dd>
                    <ul>
                        <li>{getLocalizedField("caracteristicas.amenidades.fitness.gym", "Gimnasio completamente equipado")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.fitness.yoga", "Estudio de yoga / Barre fitness")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.fitness.tech", "Tecnología a pedido")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.fitness.equipamiento", "Equipamiento para ejercicios de cardio y fuerza")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.fitness.autoservicio", "Autoservicio 24 horas")}</li>
                    </ul>
                </dd>
                <dt>{getLocalizedField("caracteristicas.amenidades.piscina.titulo", "Piscina en Altura al Estilo Resort")}</dt>
                <dd>
                    <ul>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.temperada", "Piscina temperada")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.cabinas", "Cabinas")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.espacioRelax", "Espacio de relajación")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.reposeras", "Reposeras")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.quincho", "Quincho/asador y parrilla")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.comedorExterior", "Comedores al aire libre")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.meson", "Mesón y comedores de interior")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.lounge", "Lounge estilo tropical junto a la piscina")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.cocinaPrivada", "Cocina y comedor privado para celebraciones")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.loungeAmplio", "Amplio espacio de lounge")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.entretenimiento", "Centro de entretenimiento")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.piscina.paisajismo", "Sereno paisajismo con exuberante vegetación")}</li>
                    </ul>
                </dd>
                <dt>{getLocalizedField("caracteristicas.amenidades.negocios.titulo", "Centro de Negocios")}</dt>
                <dd>
                    <ul>
                        <li>{getLocalizedField("caracteristicas.amenidades.negocios.coworking", "Co-working Lounge")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.negocios.salaReuniones", "Sala de reuniones")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.negocios.zoom", "Oficinas para zoom")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.negocios.proyecciones", "Sala de proyecciones")}</li>
                    </ul>
                </dd>
                <dt>{getLocalizedField("caracteristicas.amenidades.lobby.titulo", "Gran Lobby")}</dt>
                <dd>
                    <ul>
                        <li>{getLocalizedField("caracteristicas.amenidades.lobby.cieloDoble", "Impresionante cielo de doble altura")}</li>
                        <li>{getLocalizedField("caracteristicas.amenidades.lobby.espacios", "Espacios sofisticados")}</li>
                    </ul>
                </dd>
            </dl>
        ),
    };

    CassiaObject.introduccion = [
        getLocalizedField("introduccion.0", "Conozca una nueva dimensión del lujo, donde la versatilidad se encuentra con el refinamiento. Cassia aporta una nueva perspectiva al exclusivo estilo de vida de Coral Gables, ofreciendo residencias llave en mano completamente amuebladas por RH. Disfrute de la flexibilidad de alquilar su hogar mientras está de viaje o dejarlo para su uso personal exclusivo."),
        getLocalizedField("introduccion.1", "Siguiendo la visión de George Merrick, quien fundó Coral Gables con veredas color rosa, vibrantes jardines y una arquitectura impresionante, llega con orgullo Cassia y sus 174 residencias. Apartamentos espaciosos de una, dos y tres habitaciones, completamente amueblados con RH, ofrecen una fusión perfecta de comodidad y elegancia y están listos para ser habitados de inmediato. Una dirección cautivadora en el centro del Distrito Merrick Park, en el corazón de Coral Gables, rodeado de hermosos jardines y seleccionadas piezas de arte."),
    ];

    CassiaObject.unidadesDisponibles = [
        { tipo: "1 Dormitorio / 1 Baño", cantidad: 50, sqft: "662 - 745", m2: "62 - 69" },
        { tipo: "1 Dormitorio / 1 Baño + Estudio", cantidad: 8, sqft: "715", m2: "66" },
        { tipo: "2 Dormitorios / 1 Baño", cantidad: 15, sqft: "854 - 865", m2: "79 - 80" },
        { tipo: "2 Dormitorios / 2 Baños", cantidad: 85, sqft: "996 - 1184", m2: "92 - 109" },
        { tipo: "3 Dormitorios / 3 Baños", cantidad: 16, sqft: "1413 - 1461", m2: "131 - 135" },
    ];

    CassiaObject.propiedadFlexible = getLocalizedField("propiedadFlexible", "Disfrute de la flexibilidad de alquilar su hogar cuando no esté o mantenerlo exclusivamente para su uso personal.");
    CassiaObject.disenoInterior = "IDDI";
    CassiaObject.mobiliario = "RH";
    CassiaObject.numberOfImages = 9;
    return CassiaObject;
}