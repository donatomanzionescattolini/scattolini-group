import Desarrollo from "../../../models/desarrollos/Desarrollo";
import PompanoBeach from "../../areas/PompanoBeach";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function EnvyResidence(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("envyResidence", lang);
  const envyResidenceObject = new Desarrollo(PompanoBeach());

  envyResidenceObject.nombre = "envy-residence";
  envyResidenceObject.titulo = getLocalizedField("titulo", "ENVY Pompano Beach");
  envyResidenceObject.subtitulo = getLocalizedField("subtitulo", "Vive más allá de lo ordinario");
  envyResidenceObject.banner = true;
  envyResidenceObject.numberOfImages = 72;
  envyResidenceObject.introduccion = getLocalizedArray("introduccion", [
    "Envy Residences combina la vibra moderno y ubicación estratégica. Construido en 2021, ofrece 214 unidades desde estudios hasta apartamentos de 3 habitaciones. Disfruta de amenidades de primera clase, como piscina estilo resort, gimnasio con pared de escalar, mini golf y áreas sociales. A solo 1.8 millas de la playa y con restricciones de alquiler flexibles, Envy es perfecto para vivir o invertir.",
  ]);
  envyResidenceObject.slogan = getLocalizedField("slogan", "Vive más allá de lo ordinario.");
  envyResidenceObject.direccion = getLocalizedField("direccion", "475 SE 1st St, Pompano Beach, FL 33060");
  envyResidenceObject.ubicación = getLocalizedField("ubicacion", "475 SE 1st St, Pompano Beach, FL 33060");
envyResidenceObject.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>{getLocalizedField("caracteristicas.edificio.ubicacion", "Ubicación")}</dt>
        <dd>{getLocalizedField("direccion", "475 SE 1st St, Pompano Beach, FL 33060")}</dd>

        <dt>{getLocalizedField("caracteristicas.edificio.unidades", "Número de Unidades")}</dt>
        <dd>{getLocalizedField("caracteristicas.edificio.unidadesCount", "213 Residencias")}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Pisos")}</dt>
        <dd>{getLocalizedField("caracteristicas.edificio.pisosCount", "Dos torres de 11 pisos cada una")}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.tipoResidencia", "Tipo de Residencia")}</dt>
        <dd>
          {getLocalizedField("caracteristicas.edificio.tipoResidenciaDesc", "Amplios planos de planta que incluyen estudios y residencias de 1, 2 y 3 habitaciones")}
        </dd>
        <dt>{getLocalizedField("caracteristicas.edificio.apertura", "Año de Apertura")}</dt>
        <dd>{getLocalizedField("caracteristicas.edificio.aperturaYear", "2025")}</dd>
      </dl>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>{getLocalizedField("caracteristicas.residencias.disenos", "Diseños de concepto abierto con ventanas de piso a techo.")}</li>
        <li>{getLocalizedField("caracteristicas.residencias.cocinas", "Cocinas de diseño con electrodomésticos premium.")}</li>
        <li>{getLocalizedField("caracteristicas.residencias.banos", "Baños inspirados en el spa con elegantes acabados.")}</li>
        <li>
          {getLocalizedField("caracteristicas.residencias.balcones", "Balcones privados con impresionantes vistas de la playa de Pompano.")}
        </li>
      </ul>
    </>
  ),
  amenidades: (
    <>
      <ul>
        <li>
          {getLocalizedField("caracteristicas.amenidades.bienestar", "Centro de bienestar: un gimnasio de última generación y espacio de yoga.")}
        </li>
        <li>
          {getLocalizedField("caracteristicas.amenidades.piscina", "Piscina estilo resort: una cubierta de piscina hermosamente ajardinada para la máxima relajación.")}
        </li>
        <li>
          {getLocalizedField("caracteristicas.amenidades.salon", "Sofisticado salón y sala de entretenimiento: un área común elegante para socializar.")}
        </li>
        <li>
          {getLocalizedField("caracteristicas.amenidades.mascotas", "Ventajas para mascotas: un área de mascotas designada para sus amigos peludos.")}
        </li>
        <li>
          {getLocalizedField("caracteristicas.amenidades.parque", "Parque infantil: un espacio divertido y seguro para que los niños jueguen.")}
        </li>
      </ul>
    </>
  ),
};
envyResidenceObject.estimatedCompletionYear = 2025;
envyResidenceObject.numberOfUnits = 213;
envyResidenceObject.numberOfFloors = 11;
envyResidenceObject.typeOfUnits = [
  getLocalizedField("tipos.estudio", "Estudios"),
  getLocalizedField("tipos.habitacion1", "1 Habitación"),
  getLocalizedField("tipos.habitacion2", "2 Habitaciones"),
  getLocalizedField("tipos.habitacion3", "3 Habitaciones"),
].join(", ");
envyResidenceObject.numberOfRooms = {start:1,end: 3}  ;

return envyResidenceObject;
}
