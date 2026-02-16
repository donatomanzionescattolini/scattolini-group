import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import BayHarbor from "../../areas/BayHarbor.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function LaMaré(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("la-maré", lang);
    const LaMaréObject = new Desarrollo(BayHarbor());

    LaMaréObject.nombre = "la-maré";

    LaMaréObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>{lang === "es" ? "Ubicación" : "Location"}</dt>
                    <dd>
                        <address>
                            {getLocalizedField("ubicacion", "9927 E Bay Harbor Dr, Islas Bay Harbor, FL 33154, Estados Unidos")}
                        </address>
                    </dd>
                    <dt>{lang === "es" ? "Pisos" : "Floors"}</dt>
                    <dd>7</dd>
                    <dt>{lang === "es" ? "Unidades" : "Units"}</dt>
                    <dd>{lang === "es" ? "33 Studio Residences, de 1 a 2 dormitorios" : "33 Studio Residences, 1 to 2 bedrooms"}</dd>
                    <dt>{lang === "es" ? "Fecha Estimada de Finalización" : "Estimated Completion Date"}</dt>
                    <dd>2026</dd>
                </dl>
                <ul>
                    <li>{lang === "es" ? "Hermosa costa ajardinada frente a la bahía" : "Beautiful landscaped waterfront on the bay"}</li>
                    <li>{lang === "es" ? "Grandes terrazas con paredes de cristal perfectas para el entretenimiento" : "Large terraces with glass walls perfect for entertaining"}</li>
                    <li>{lang === "es" ? "Garaje de estacionamiento seguro con amplio estacionamiento" : "Secure parking garage with ample parking"}</li>
                    <li>{lang === "es" ? "Acogedor vestíbulo de entrada y salón con portero las 24 horas" : "Welcoming entrance lobby and lounge with 24-hour doorman"}</li>
                    <li>{lang === "es" ? "Cómodas trasteras privadas para cada residencia" : "Convenient private storage units for each residence"}</li>
                    <li>{lang === "es" ? "8 pisos con 33 residencias amplias, aireadas y llenas de luz, muchas de ellas con vistas a la bahía" : "8 floors with 33 spacious, airy, light-filled residences, many with bay views"}</li>
                    <li>{lang === "es" ? "Distribuciones de planos de planta de 2 a 4 dormitorios que van desde 1,567 a más de 4,200 pies cuadrados." : "2 to 4 bedroom floor plan layouts ranging from 1,567 to over 4,200 square feet."}</li>
                    <li>{lang === "es" ? "Muelles para botes disponibles para residents" : "Boat slips available for residents"}</li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>{lang === "es" ? "Elegantes y grandes alturas de techo de 9'2\" a 10'2\" en residencias selectas" : "Elegant and generous ceiling heights from 9'2\" to 10'2\" in select residences"}</li>
                    <li>{lang === "es" ? "Los ascensores privados llevan a los residentes directamente a sus hogares con un sistema de cerradura con llave" : "Private elevators take residents directly to their homes with a keyed lock system"}</li>
                    <li>{lang === "es" ? "Cocinas Poliform personalizadas con encimeras de piedra con un conjunto de electrodomésticos Miele de primera línea, que incluye sistema de café y nevera para vinos" : "Custom Poliform kitchens with stone countertops with a suite of top-line Miele appliances, including coffee system and wine fridge"}</li>
                    <li>{lang === "es" ? "Elegantes accesorios italianos en cocinas y baños de by Antonio Lupi" : "Elegant Italian fixtures in kitchens and bathrooms by Antonio Lupi"}</li>
                    <li>{lang === "es" ? "Vistas panorámicas de la bahía a través de ventanas de piso a techo de 9 pies" : "Panoramic bay views through 9-foot floor-to-ceiling windows"}</li>
                    <li>{lang === "es" ? "2 amplios áticos, cada uno con piscinas privadas en la azotea" : "2 spacious penthouses, each with private rooftop pools"}</li>
                    <li>{lang === "es" ? "Ducha doble y bañera profunda en los baños principales" : "Double shower and deep soaking tub in master bathrooms"}</li>
                </ul>
            </>
        ),
        amenidades: (
            <dl><dt>{lang === "es" ? "Colección Regency" : "Regency Collection"}</dt>
                <dd><ul>

                    <li>{lang === "es" ? "Espacio al aire libre frente a la bahía con jardines y áreas de descanso" : "Outdoor waterfront space with gardens and relaxation areas"}</li>
                    <li>{lang === "es" ? "Gimnasio de última generación" : "State-of-the-art fitness center"}</li>
                    <li>{lang === "es" ? "Instalaciones de spa con vapor y sauna" : "Spa facilities with steam and sauna"}</li>
                    <li>{lang === "es" ? "Terraza ajardinada de la piscina en la azotea tipo centro turístico con piscina infinita, jacuzzi, tumbonas y tumbonas" : "Resort-style landscaped rooftop pool deck with infinity pool, jacuzzi, loungers and daybeds"}</li>
                    <li>{lang === "es" ? "Bar en la azotea y cocina de verano" : "Rooftop bar and summer kitchen"}</li>
                    <li>{lang === "es" ? "Salón residencial para reuniones grupales y proyecciones" : "Residential lounge for group gatherings and screenings"}</li>
                    <li>{lang === "es" ? "Muelles privados disponibles para los residentes" : "Private boat slips available for residents"}</li>
                    <li>{lang === "es" ? "Vestíbulo de entrada y salón de bienvenida" : "Entrance lobby and welcome lounge"}</li>
                    <li>{lang === "es" ? "Los ascensores semiprivados y privados llevan a los residentes directamente a sus hogares con sistema de cerradura con llave" : "Semi-private and private elevators take residents directly to their homes with keyed lock system"}</li>
                    <li>{lang === "es" ? "Cómodas trasteras privadas para cada residencia" : "Convenient private storage units for each residence"}</li>
                    <li>{lang === "es" ? "Garaje de estacionamiento con 69 espacios de estacionamiento (2 espacios por residencia), así como estacionamiento adicional cerrado y cerrado en la planta baja" : "Parking garage with 69 parking spaces (2 spaces per residence), as well as additional enclosed ground-floor parking"}</li>
                </ul></dd>
                <dt>{lang === "es" ? "Colección Signature" : "Signature Collection"}</dt>
                <dd><ul>
                    <li>{lang === "es" ? "Espacio al aire libre frente a la bahía con paisajismo y áreas de descanso" : "Outdoor waterfront space with landscaping and relaxation areas"}</li>
                    <li>{lang === "es" ? "Bodega" : "Wine cellar"}</li>
                    <li>{lang === "es" ? "Gran habitación para el disfrute de amigos y familiares" : "Great room for enjoyment with friends and family"}</li>
                    <li>{lang === "es" ? "Terraza ajardinada de la piscina en la azotea tipo centro turístico con piscina, jacuzzi, tumbonas, tumbonas, cocina al aire libre y bar / salón" : "Resort-style landscaped rooftop pool deck with pool, jacuzzi, loungers, daybeds, outdoor kitchen and bar/lounge"}</li>
                    <li>{lang === "es" ? "Muelles privados disponibles para los residentes" : "Private boat slips available for residents"}</li>
                    <li>{lang === "es" ? "Vestíbulo de entrada y salón de bienvenida" : "Entrance lobby and welcome lounge"}</li>
                    <li>{lang === "es" ? "Los ascensores semiprivados y privados llevan a los residentes directamente a sus hogares con sistema de cerradura con llave" : "Semi-private and private elevators take residents directly to their homes with keyed lock system"}</li>
                    <li>{lang === "es" ? "Cómodas trasteras privadas para cada residencia" : "Convenient private storage units for each residence"}</li>
                    <li>{lang === "es" ? "Garaje de estacionamiento seguro con amplio estacionamiento" : "Secure parking garage with ample parking"}</li>
                </ul></dd>
            </dl>
        ),
    };
    LaMaréObject.introduccion = getLocalizedArray("introduccion", [
        "La Maré se compone de dos exquisitas torres que ofrecen una experiencia de vida extraordinaria. El Regency Collection es un moderno edificio de cristal definido por su sorprendente belleza, sostenibilidad y refinada sensación de comodidad, con un interior en el que destaca una paleta suave y natural. La Signature Collection, por su parte, es una estructura contemporánea de impresionante diseño con interiores armoniosos.Aquí, la exclusividad es la norma, ya que cada unidad cuenta con ventanas envolventes de suelo a techo que brindan una vista clara de su impresionante estética náutica.Con componentes aerodinámicos, elementos tropicales y el generoso uso de piedra color arena, travertino y maderas aclaradas, los residentes disfrutan de privacidad y se ven envueltos en una atmósfera estilo resort",
    ]);
    LaMaréObject.titulo = getLocalizedField("titulo", "La Maré");
    LaMaréObject.slogan = <p>{lang === "es" ? "Bay Harbor Islands" : "Bay Harbor Islands"}<br/><small><em>{lang === "es" ? "Espacio y comodidad reinventados" : "Space and Comfort Reinvented"}</em></small></p>;
    LaMaréObject.numberOfImages = 24;
    LaMaréObject.banner = true;

    return LaMaréObject;
}
