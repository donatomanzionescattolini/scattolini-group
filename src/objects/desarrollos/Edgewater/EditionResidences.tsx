import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Edgewater from "../../areas/Edgewater.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function EditionResidences(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("edition-residences", lang);
    const TheEditionResidencesObject = new Desarrollo();
    TheEditionResidencesObject.banner = getLocalizedField("banner", "true") === "true";
    TheEditionResidencesObject.area = Edgewater();

    TheEditionResidencesObject.nombre = getLocalizedField("nombre", "edition-residences");
    TheEditionResidencesObject.caracteristicas = {
        edificio: (
            <pre>
            Ubicación: 2901 Collins Avenue, Miami Beach, FL 33140 26 Unidades
            totales Año de construcción: 2015
          </pre>
        ),
        residencias: (
            <ul>
                <li>Director exclusivo de residencias</li>
                <li>Entrada privada exclusiva para residencias</li>
                <li>Servicios de conserjería las 24 horas</li>
                <li>Servicios de portero</li>
                <li>Servicios de botones</li>
                <li>
                    Periódico,correo,revistas, y entrega de paquetes a su puerta
                </li>
                <li>Servicios de recogida y entrega de lavandería y tintorería</li>
                <li>Coordinación de mudanza con la empresa de mudanzas</li>
                <li>
                    Asistencia de conserjería con reservas de aerolíneas y vuelos
                    privados
                </li>
                <li>
                    Asistencia de conserjería con arreglos de transporte terrestre y
                    al aeropuerto Información y reservas de teatro y entretenimiento
                </li>
                <li>
                    Asistencia de conserjería con reserva de horarios de salida de
                    golf
                </li>
                <li>Organizar el alquiler de electrónica personal</li>
                <li>
                    Equipo audiovisual y servicios de secretaría multilingüe. Manejo
                    de envíos postales locales e internacionales.
                </li>
                <li>
                    Servicios de envío y embalaje Asistencia de conserjería para
                    organizar servicios de cuidado de niños y niñera Asistencia de
                    conserjería para organizar paseos de mascotas y servicios de
                    peluquería
                </li>
                <li>
                    Información y reservas de perreras Llamadas de despertador
                    Servicio para llevar
                </li>
            </ul>
        ),
        amenidades: (
            <ul>
                <li>
                    Acceso prioritario a todas las instalaciones y comodidades del
                    hotel. Reservas de habitaciones con tarifas especiales para
                    residentes en The Miami Beach EDITION; mejoras de habitación según
                    disponibilidad Acceso prioritario a todo el espacio público
                    rentable para eventos privados Acceso a salas de reuniones y
                    centro de negocios Acceso prioritario a restaurantes y bares del
                    hotel Estado de prioridad en reservas de bares y restaurantes del
                    hotel Acceso a todos los eventos públicos
                </li>
                <li>
                    Eventos especiales y otras comodidades disponibles para los
                    huéspedes del hotel. Privilegios de firma VIP residencial y
                    servicios de facturación directa en The Spa.
                </li>
                <li>Restaurantes</li>
                <li>Salón/bares</li>

                <li>Bar de la piscina</li>
                <li>Parrilla de piscina</li>
                <li>
                    Tienda minorista EDITION (y otras instalaciones de entretenimiento
                    dentro de The MiamiBeach EDITION) Reservas prioritarias para
                    cabañas junto a la piscina tumbonas y sombrillas en la playa y la
                    piscina. Reservas prioritarias para todos los deportes acuáticos
                    recreativos. Acceso al gimnasio. Acceso al spa y servicios de
                    salón. Planificación de eventos especiales. Valet parking y
                    reservas de limusinas.
                </li>
            </ul>
        ),
    };
    TheEditionResidencesObject.introduccion = getLocalizedArray("introduccion", [
        getLocalizedField("introduccion.0", "Edition Residences, Miami Edgewater es una celebración del mejor estilo de vida moderno de Miami, uno que solo Edition puede ofrecer."),
    ]);
    TheEditionResidencesObject.titulo = getLocalizedField("titulo", "Edition Residences");
    TheEditionResidencesObject.slogan = getLocalizedField("slogan", "Un desarrollo exclusivo en Miami Beach");
    TheEditionResidencesObject.numberOfImages = parseInt(getLocalizedField("numberOfImages", "29"), 10) || 29;
    return TheEditionResidencesObject;
}