import Project from "../../../models/desarrollos/Project.tsx";
import BayHarbor from "../../areas/BayHarbor.tsx";

export default function LaMaré() {
    const LaMaréObject = new Project(BayHarbor());

    LaMaréObject.name = "la-maré";

    LaMaréObject.traits = {
        building: (
            <>
                <dl>
                    <dt>Ubicación</dt>
                    <dd>
                        <address>
                            LaMaré.9927 E Bay Harbor Dr, Islas Bay Harbor, FL 33154, Estados
                            LaMaré.Unidos
                        </address>
                    </dd>
                    <dt>Pisos</dt>
                    <dd>7</dd>
                    <dt>Unidades</dt>
                    <dd>33 Studio Residences, de 1 a 2 dormitorios</dd>
                    <dt>Fecha Estimada de Finalización</dt>
                    <dd>2026</dd>
                </dl>
                <ul>
                    <li>Hermosa costa ajardinada frente a la bahía</li>
                    <li>Grandes terrazas con paredes de cristal perfectas para el entretenimiento</li>
                    <li>Garaje de estacionamiento seguro con amplio estacionamiento</li>
                    <li>Acogedor vestíbulo de entrada y salón con portero las 24 horas</li>
                    <li>Cómodas trasteras privadas para cada residencia</li>
                    <li>8 pisos con 33 residencias amplias, aireadas y llenas de luz, muchas de ellas con vistas a la
                        bahía
                    </li>
                    <li>Distribuciones de planos de planta de 2 a 4 dormitorios que van desde 1,567 a más de 4,200 pies
                        cuadrados.
                    </li>
                    <li>Muelles para botes disponibles para residents</li>
                </ul>
            </>
        ),
        residences: (
            <>
                <ul>
                    <li>Elegantes y grandes alturas de techo de 9'2" a 10'2" en residencias selectas</li>
                    <li>Los ascensores privados llevan a los residentes directamente a sus hogares con un sistema de
                        cerradura con llave
                    </li>
                    <li>Cocinas Poliform personalizadas con encimeras de piedra con un conjunto de electrodomésticos
                        Miele de primera línea, que incluye sistema de café y nevera para vinos
                    </li>
                    <li>Elegantes accesorios italianos en cocinas y baños de by Antonio Lupi</li>
                    <li>Vistas panorámicas de la bahía a través de ventanas de piso a techo de 9 pies</li>
                    <li>2 amplios áticos, cada uno con piscinas privadas en la azotea</li>
                    <li>Ducha doble y bañera profunda en los baños principales</li>
                </ul>
            </>
        ),
        amenities: (
            <dl>
                <dt>Colección Regency</dt>
                <dd>
                    <ul>

                        <li>Espacio al aire libre frente a la bahía con jardines y áreas de descanso</li>
                        <li>Gimnasio de última generación</li>
                        <li>Instalaciones de spa con vapor y sauna</li>
                        <li>Terraza ajardinada de la piscina en la azotea tipo centro turístico con piscina infinita,
                            jacuzzi, tumbonas y tumbonas
                        </li>
                        <li>Bar en la azotea y cocina de verano</li>
                        <li>Salón residencial para reuniones grupales y proyecciones</li>
                        <li>Muelles privados disponibles para los residentes</li>
                        <li>Vestíbulo de entrada y salón de bienvenida</li>
                        <li>Los ascensores semiprivados y privados llevan a los residentes directamente a sus hogares
                            con sistema de cerradura con llave
                        </li>
                        <li>Cómodas trasteras privadas para cada residencia</li>
                        <li>Garaje de estacionamiento con 69 espacios de estacionamiento (2 espacios por residencia),
                            así como estacionamiento adicional cerrado y cerrado en la planta baja
                        </li>
                    </ul>
                </dd>
                <dt>Colección Signature</dt>
                <dd>
                    <ul>
                        <li>Espacio al aire libre frente a la bahía con paisajismo y áreas de descanso</li>
                        <li>Bodega</li>
                        <li>Gran habitación para el disfrute de amigos y familiares</li>
                        <li>Terraza ajardinada de la piscina en la azotea tipo centro turístico con piscina, jacuzzi,
                            tumbonas, tumbonas, cocina al aire libre y bar / salón
                        </li>
                        <li>Muelles privados disponibles para los residentes</li>
                        <li>Vestíbulo de entrada y salón de bienvenida</li>
                        <li>Los ascensores semiprivados y privados llevan a los residentes directamente a sus hogares
                            con sistema de cerradura con llave
                        </li>
                        <li>Cómodas trasteras privadas para cada residencia</li>
                        <li>Garaje de estacionamiento seguro con amplio estacionamiento</li>
                    </ul>
                </dd>
            </dl>
        ),
    };
    LaMaréObject.introduction = [
        "La Maré se compone de dos exquisitas torres que ofrecen una experiencia de vida extraordinaria. El Regency Collection es un moderno edificio de cristal definido por su sorprendente belleza, sostenibilidad y refinada sensación de comodidad, con un interior en el que destaca una paleta suave y natural. La Signature Collection, por su parte, es una estructura contemporánea de impresionante diseño con interiores armoniosos.Aquí, la exclusividad es la norma, ya que cada unidad cuenta con ventanas envolventes de suelo a techo que brindan una vista clara de su impresionante estética náutica.Con componentes aerodinámicos, elementos tropicales y el generoso uso de piedra color arena, travertino y maderas aclaradas, los residentes disfrutan de privacidad y se ven envueltos en una atmósfera estilo resort",
    ];
    LaMaréObject.title = "La Maré";
    LaMaréObject.subtitle = <p>Bay Harbor Islands<br/><small><em>Espacio y comodidad reinventados</em></small></p>;
    LaMaréObject.numberOfImages = 24;
    LaMaréObject.banner = true;

    return LaMaréObject;
}
