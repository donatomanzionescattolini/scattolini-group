import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Edgewater from "../../areas/Edgewater.tsx";

export default function AriaReserve() {

    const AriaReserveObject = new Desarrollo();
    AriaReserveObject.nombre = "aria-reserve";
    AriaReserveObject.caracteristicas = {
        edificio: (
            <>
                <ul>
                    <li>62 Pisos</li>
                    " ";
                    <li>800 residencias de 1, 2, 3 y 4 dormitorios</li>
                    <li>Ubicación: 708 NE 24th St, Miami, FL 33137</li>
                </ul>
            </>
        ),
        residencias: (
            <ul>
                <strong>Todas las Residencias</strong>
                <br/>
                <li>
                    Las torres gemelas frente al mar más altas de Estados Unidos.
                </li>
                <li>
                    Residencias de 1 a 4 dormitorios con oficina en casa que van desde
                    1059 a 2584 pies cuadrados.
                </li>
                <li>
                    Cada residencia cuenta con ventanas de piso a techo con vistas
                    directas a la bahía y al océano." ";
                </li>
                <li>Todas las residencias cuentan con habitaciones con baño.</li>
                <li>
                    Amplias terrazas al aire libre de hasta 11 pies de profundidad.
                </li>

                <br/>
                <strong>Residencias PanorámicasPisos 3 al 50</strong>
                <br/>
                <li>Amplios diseños abiertos con techos de 10 pies</li>
                <br/>
                <strong>Skyview ResidencesPiso 51 al 56</strong>
                <br/>
                <li>Amplios diseños abiertos con techos de 11 pies.</li>
                <li>Dos ascensores de alta velocidad.</li>
                <li>
                    Amplias terrazas con vista a la Bahía de Biscayne que conectan con
                    las áreas de estar y con el suite principal
                </li>
                <li>
                    Diseño fluido único que brinda a cada residencia vistas al mar
                    orientadas al este también como vistas del atardecer orientadas al
                    oeste desde los dormitorios.
                </li>
                <li>
                    Todas las unidades cuentan con espacio para una oficina, estudio,
                    estudio o sala multimedia." ";
                </li>

                <li>Incluye bóvedas de garaje privadas únicas para 2+3 coches</li>
            </ul>
        ),
        amenidades: (
            <>
                <ul>
                    <br/>
                    <strong>Nivel de la Bahía</strong>
                    <br/>
                    <li>
                        Puerto Deportivo Acuático con Servicio de Kayak y Paddle Board
                    </li>
                    <li>y almacenamiento</li>
                    <li>Acceso a Baywalk a lo largo del agua</li>
                    <li>Restaurante con vistas a la bahía</li>
                    <li>Café con vistas a la bahía y terrazas al aire libre</li>
                    <li>Servicios de valet parking</li>
                    <li>Conserje personal y recepcionista las 24 horas</li>
                    <li>Sala de paquetes para entregas</li>
                    <li>Pozo de fuego</li>
                    <li>Piscina lounge</li>
                    <li>Zonas de solárium</li>
                    <li>Spa con hidromasaje y terraza solarium privada</li>
                    <li>Jardín de meditación</li>
                    <li>
                        Servicio de tabla de paddle surf con guarda y acceso a privado
                    </li>
                    <li>Muelle en Bayside</li>
                    <li>Divanes junto a la piscina</li>
                    <li>Zona del observatorio del telescopio</li>
                    <li>Parque para perros</li>
                    <br/>
                    <strong>Vestíbulo del Cielo</strong>
                    <br/>
                    <li>Sala de estar exclusiva para adultos con exterior</li>
                    <li>terraza con vistas a la bahía</li>
                    <li>Ascensor y vestíbulo privados</li>
                    <li>Sala privada de bodega</li>
                    <li>
                        Espacios de trabajo privados + centro de negocios + sala de
                        conferencias
                    </li>
                    <br/>
                    <strong>Al Aire Libre</strong>
                    <br/>
                    <li>Piscina de tamaño semiolímpico</li>
                    <li>Spa con hidromasaje al aire libre</li>
                    <li>Divanes junto a la piscina</li>
                    <li>Zona de chapoteo para niños</li>
                    <li>Zona de juegos infantiles</li>
                    <li>Minigolf</li>
                    <br/>
                    <strong>Interior</strong>
                    <br/>
                    <li>Salón de fiestas con cocina privada y exterior</li>
                    <li>patio con zona de barbacoa</li>
                    <li>Barbacoa al aire libre con comedor privado</li>
                    <li>Teatro con audiovisuales profesionales y teatro</li>
                    <li>asientos de estilo</li>
                    <li>
                        Sala de juegos para niños con área de juegos al aire libre
                    </li>
                    <li>Salón para adolescentes y centro de juegos</li>
                    <br/>
                    <strong>Gimnasio y Spa</strong>
                    <br/>
                    <li>
                        Gimnasio de última generación con vistas al nivel del jardín
                    </li>
                    <li>con zona de ejercicio exterior</li>
                    <li>Canchas de tenis</li>
                    <li>Pista de pádel</li>
                    <li>Cancha de baloncesto</li>
                    <li>
                        Área de salón de yoga con jardín de meditación al aire libre
                    </li>
                    <li>Zona de relajación Spa</li>
                    <li>Salas y servicios de masajes exclusivos</li>
                    <li>Sauna</li>
                    <li>Baño de vapor</li>
                    <li>Terraza solárium con cabañas</li>
                </ul>
            </>
        ),
    };
    AriaReserveObject.introduccion = [
        "Aria Reserve es un nuevo proyecto residencial de torres gemelas en la increíble zona de Edgewater, Miami. Con vista a la Bahía de Biscayne, las torres ofrecerán comodidades incomparables para sus residentes, junto con residencias cuidadosamente diseñadas en configuraciones de una a cuatro habitaciones. Cada una de las dos torres de Aria Reserve Miami contará con 62 pisos y un total de 800 residencias",
        "El famoso estudio de arquitectura Arquitectonica, creó un patrón de ondas icónico y minimalista a través de los balcones de las torres. Todas las residencias tienen ventanas de piso a techo y balcones espaciosos. Al estar ubicado en la zona de Edgewater en Miami, las vistas desde los pisos superiores del complejo son de las mejores de esta ciudad. Aria Reserve Miami estará frente a la Bahía de Biscayne, a 5 minutos del centro de Miami y Brickell, y a 15 minutos del Aeropuerto Internacional de Miami y las playas"
    ];
    AriaReserveObject.titulo = " Aria Reserve";
    AriaReserveObject.direccion = "708 NE 24th St, Miami, FL 33137"
//   video={
//     <iframe
//       width="1280"
//       height="720"
//       src="https://www.youtube.com/embed/vc0iS1oavek?autoplay=1&controls=0"
//       title="ARIA RESERVE MIAMIRendering Short Video"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       allowFullScreen
//     ></iframe>
//   }
    AriaReserveObject.subtitulo = " ";
    AriaReserveObject.numberOfImages = 59;
    AriaReserveObject.banner = true;
    AriaReserveObject.area = Edgewater();
    return AriaReserveObject;
}