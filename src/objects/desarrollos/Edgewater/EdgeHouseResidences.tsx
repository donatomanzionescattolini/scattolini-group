import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Edgewater from "../../areas/Edgewater";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function EdgeHouseResidences(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("edge-house-residences", lang);
  const EdgeHouseResidences = new Desarrollo(Edgewater());
  EdgeHouseResidences.nombre = getLocalizedField("nombre", "edge-house-residences");
  EdgeHouseResidences.titulo = getLocalizedField("titulo", "Edge House Residences");
  EdgeHouseResidences.introduccion = getLocalizedArray("introduccion", [
    getLocalizedField("introduccion.0", "Edge House Residencias, una torre de 60 pisos de lujo e innovación en El barrio Edgewater de Miami."),
  ]);
  EdgeHouseResidences.banner = getLocalizedField("banner", "true") === "true";
  EdgeHouseResidences.slogan = getLocalizedField("slogan", "Tuyo Para Disfrutar, Tuyo Para Compartir");
  EdgeHouseResidences.numberOfImages = parseInt(getLocalizedField("numberOfImages", "44"), 10) || 44;
  EdgeHouseResidences.direccion = getLocalizedField("direccion", "1825 NE 4TH Avenue, Miami, FL 33132");
  EdgeHouseResidences.numberOfFloors = parseInt(getLocalizedField("numberOfFloors", "57"), 10) || 57;
  EdgeHouseResidences.numberOfRooms = getLocalizedField("numberOfRooms", "Estudios y 1, 2 y 3 dormitorios");
  EdgeHouseResidences.estimatedCompletionYear = parseInt(getLocalizedField("estimatedCompletionYear", "2028"), 10) || 2028;
  EdgeHouseResidences.numberOfUnits = parseInt(getLocalizedField("numberOfUnits", "592"), 10) || 592;
  EdgeHouseResidences.area = Edgewater();
  EdgeHouseResidences.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>Ubicación</dt>
        <dd>{EdgeHouseResidences.ubicación}</dd>
        <dt>Número de Unidades</dt>
        <dd>{EdgeHouseResidences.numberOfUnits}</dd>
        <dt>Número de pisos</dt>
        <dd>{EdgeHouseResidences.numberOfFloors}</dd>
        <dt>Número de cuartos</dt>
        <dd>{EdgeHouseResidences.numberOfRooms}</dd>
        <dt>Año de Apertura</dt>
        <dd>{EdgeHouseResidences.estimatedCompletionYear}</dd>
        <dt>Tipo de Unidad</dt>
        <dd>Condominios</dd>
        <dt>Constructora</dt>
        <dd>Grupo T&C</dd>
      </dl>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>
          Selección de residencias de 2 y 3 dormitorios con opción de “lock-out
        </li>
        <li>
          Totalmente terminadas y amuebladas, diseñadas por la reconocida
          interiorista Adriana Hoyo
        </li>
        <li>Techos de 2.74 metros de altura</li>
        <li>
          Ventanas de piso a techo y puertas corredizas de vidrio con cristal
          laminado de alta calidad para aislamiento acústico y resistencia al
          impact{" "}
        </li>
        <li>Terrazas privadas al aire libre con impresionantes vista</li>
        <li>
          Cocinas equipadas con muebles italianos, electrodomésticos Bosch y
          encimeras de cuarzo
        </li>
        <li>Closets empotrados con iluminación integrad</li>
        <li>Lavadora y secadora de alta eficiencia</li>
      </ul>
    </>
  ),
  amenidades: (
    <>
      <ul>
        <li>Recepción y conserjería con servicios personalizado</li>
        <li>Lobby con salón y café-bar, con techos de doble altura</li>
        <li>Mercado gourmet abierto 24/7</li>
        <li>Sala de paquetes inteligente de LUXER ONE</li>
        <li>Dos piscinas estilo resort con vista al horizonte de Miami</li>
        <li>
          Cabañas y tumbonas, plataforma para tomar el sol, jacuzzi y duchas al
          aire libre
        </li>
        <li>Bar en la piscina con servicio completo</li>
        <li>Spa con sauna, baño de vapor y área de relajación</li>
        <li>Salas de tratamiento de bienestar privadas</li>
        <li>Gimnasio completamente equipado y estudio de yoga</li>
        <li>Jardín zen con estanque de reflexión y deck de meditación</li>
        <li>
          Salón para residentes a nivel de la piscina, con asientos interiores y
          exteriores
        </li>
        <li>Sky bar y lounge con vistas despejadas a la Bahía de Biscayne</li>
        <li>Espacios de co-working flexibles y salas de reuniones privadas</li>
        <li>
          Sala de podcast con equipo profesional y paneles acústicos
          insonorizados
        </li>
        <li>Área de juegos para niños</li>
        <li>Putting green de golf</li>
        <li>Cocina al aire libre con parrilla y asientos de lounge</li>
        <li>Jardinería exuberante</li>
        <li>Almacenamiento para bicicletas</li>
      </ul>
    </>
  ),
};
return EdgeHouseResidences;
}

