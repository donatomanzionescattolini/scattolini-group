import { getDesarrolloI18n } from "./useDesarrolloI18n";
import Desarrollo from "../../models/desarrollos/Desarrollo";
import Brickell from "../areas/Brickell";

export default function InternationalizedExample(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("baccarat", lang);

  const desarrolloObject = new Desarrollo(Brickell());
  desarrolloObject.banner = true;
  desarrolloObject.area = Brickell();
  desarrolloObject.nombre = "baccarat";

  desarrolloObject.titulo = getLocalizedField("titulo", "Baccarat Residences");
  desarrolloObject.subtitulo = (
    <p className="text-cursive p-0 m-0">
      <em>{getLocalizedField("subtitulo", "Donde la vida brilla para siempre")}</em>
    </p>
  );

  desarrolloObject.introduccion = getLocalizedArray("introduccion", [
    "Baccarat presenta con orgullo su primera colección de residencias al mercado de Miami.",
    "Iluminada por el brillo infinito del sol, esta torre elevada se mantendra radiante en el paseo maritimo donde el rio se encuentra con la bahia, en el corazon de las brillantes luces de la ciudad.",
    "Residencias penthouse disponibles para vista previa exclusiva.",
  ]);

  desarrolloObject.video = (
    <div className="video-container container-fluid justify-content-center">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/725808410h=2dd1afbdd4&autoplay=1&loop=1&title=0&byline=0&portrait=0"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );

  desarrolloObject.caracteristicas = {
    edificio: (
      <ul>
        <li>{getLocalizedField("caracteristicas.edificio.entrada", "Entrada Porte-cochere")}</li>
        <li>
          {getLocalizedField(
            "caracteristicas.edificio.vestibulo",
            "Vestibulo de entrada exquisitamente decorado con techos altos que conducen a elevadores privados dobles para cada residencia"
          )}
        </li>
      </ul>
    ),
    residencias: (
      <ul>
        <li>
          {getLocalizedField(
            "caracteristicas.residencias.planos",
            "Planos de planta contemporaneos de concepto abierto con residencias y aticos de una, dos, tres y cuatro habitaciones"
          )}
        </li>
      </ul>
    ),
    amenidades: (
      <ul>
        <li>{getLocalizedField("caracteristicas.amenidades.gimnasio", "Gimnasio totalmente equipado de ultima generacion")}</li>
      </ul>
    ),
  };

  desarrolloObject.numberOfImages = 79;

  return desarrolloObject;
}
