import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../areas/Brickell.tsx";
import { getDesarrolloI18n } from "./useDesarrolloI18n";

export default function InternationalizedExample(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("baccarat", lang);

    const desarrolloObject = Object.getPrototypeOf(Desarrollo);
    desarrolloObject.banner = true;
    desarrolloObject.area = Brickell();
    desarrolloObject.nombre = "baccarat";
    
    // Use internationalized content with fallbacks
    desarrolloObject.titulo = getLocalizedField("titulo", "Baccarat Residences");
    desarrolloObject.subtitulo = (
        <p className="text-cursive p-0 m-0">
            <em>{getLocalizedField("subtitulo", "Donde la vida brilla para siempre")}</em>
        </p>
    );
    desarrolloObject.introduccion = getLocalizedArray("introduccion", [
        "Baccarat presenta con orgullo su primera colección de residencias al mercado de Miami.",
        "Iluminada por el brillo infinito del sol, esta torre elevada se mantendrá radiante en el paseo marítimo donde el río se encuentra con la bahía, en el corazón de las brillantes luces de la ciudad.",
        "Penthouse residences disponibles para vista previa exclusiva."
    ]);
    
    // Keep existing non-textual content
    desarrolloObject.video = <div className={"video-container container-fluid justify-content-center"}><div style={{"padding":"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/725808410?h=2dd1afbdd4&autoplay=1&loop=1&title=0&byline=0&portrait=0" style={{"position":"absolute",top:0,left:0,width:"100%",height:"100%"}}frameBorder={0} allow={"autoplay; fullscreen; picture-in-picture"} allowFullScreen/></div><script src="https://player.vimeo.com/api/player.js"/></div>;
    desarrolloObject.caracteristicas = {
        edificio: (
            <ul>
                <li>{getLocalizedField("caracteristicas.edificio.entrada", "Entrada Porte-cochère")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.vestibulo", "Vestíbulo de entrada exquisitamente decorado con grandes techos altos que conducen directamente a tres bancos de ascensores privados dobles a cada residencia")}</li>
                {/* Add more internationalized features as needed */}
            </ul>
        ),
        residencias: (
            <ul>
                <li>{getLocalizedField("caracteristicas.residencias.planos", "Planos de planta contemporáneos de concepto abierto y fluidos con residencias y áticos de una, dos, tres y cuatro habitaciones")}</li>
                {/* Add more internationalized features as needed */}
            </ul>
        ),
        amenidades: (
            <ul>
                <li>{getLocalizedField("caracteristicas.amenidades.gimnasio", "Gimnasio totalmente equipado de última generación")}</li>
                {/* Add more internationalized features as needed */}
            </ul>
        ),
    };
    desarrolloObject.numberOfImages = 79;

    return desarrolloObject;
}
