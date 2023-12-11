import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function LaBaia() {
    const LaBaiaObject = new Desarrollo();
    LaBaiaObject.nombre = 'la-baia';
    LaBaiaObject.caracteristicas = {
        edificio: <dl>
            <dt>Ubicación</dt>
            <dd>9481 East Bay Harbor Dr, Islas de Bay Harbor, FL 33154, Estados Unidos
            </dd>
            <dt>Número de Pisos</dt>
            <dd>8</dd>
            <dt>Número de Residencias</dt>
            <dd>57</dd>
        </dl>, residencias: <>
            <ul>
                <li>Techos de 9' en residencias</li>
                <li>Techos de 10' en Penthouses Superiores</li>
                <li>Terrazas privadas con vistas despejadas de la Bahía de Biscayne, el Océano Atlántico, Bal Harbour,
                    Miami
                    Beach y el centro de Miami
                </li>
                <li>Vidrio corredizo de piso a techo resistente a impactos Puertas y ventanas</li>
                <li>Todas las residencias se entregan completamente terminadas</li>
                <li>Pisos de madera de tablones anchos importados europeos y piedra de mármol en baños</li>
                <li>Accesorios y acabados bien equipados seleccionados por Durukan Design, con sede en Nueva York</li>
                <li>Estudio/oficina en casa con un baño completo para descansar y un cómodo espacio para "trabajar desde
                    casa"
                </li>
                <li>Lavandería en la residencia con juego de lavadora y secadora Miele® de tamaño completo y de bajo
                    consumo
                </li>
                <li>Espacio de doble armario de tamaño generoso, que incluye vestidores en las habitaciones
                    principales
                </li>
                <li>Baño completo adicional o tocador equipado para acomodar a los huéspedes</li>
                <li>Espacios de almacenamiento privados adicionales incluidos con cada residencia</li>
                <li>Gabinetes europeos personalizados y despensa de cocina • Paquete de electrodomésticos Miele® que
                    incluye: placa de cocción eléctrica, horno de pared, lavavajillas, refrigerador y microondas
                </li>
                <li>Encimeras de piedra de cuarzo en cocina</li>
                <li>Grifería Hansgrohe® de alta gama en la cocina</li>
                <li>Vinotecas Miele® exclusivamente en áticos</li>
                <li>Gabinetes europeos personalizados en el baño principal</li>
                <li>Tocador con lavabos dobles</li>
                <li>Accesorios y accesorios de baño de primera calidad</li>
                <li>Suelo de piedra de mármol natural en baño principal</li>
                <li>Ducha con mampara de vidrio con dos cabezales de ducha tipo lluvia</li>
            </ul>
        </>, amenidades: <>
            <ul>
                <li>20,000 pies cuadrados de comodidades estilo centro turístico; incluyendo más de 8,500 pies cuadrados
                    de
                    exuberantes jardines tropicales y espacios verdes abiertos en todas partes
                </li>
                <li>Terraza de servicios en la azotea de 10,000 pies cuadrados con área dedicada para niños y área para
                    adultos
                </li>
                <li>Piscina relajante con solárium y tumbonas sumergidas y poco profundas</li>
                <li>Amplia terraza junto a la piscina con tumbonas y rincones sombreados</li>
                <li>Spa tropical climatizado para adultos en la azotea con vistas a la Bahía de Biscayne y al Océano
                    Atlántico
                </li>
                <li>Salas de estar</li>
                <li>Cocina de verano y comedor al aire libre en la azotea con espectaculares vistas a la bahía</li>
                <li>Rooftop Sunset Lounge con acogedores asientos, hoguera e impresionantes vistas de la puesta de sol
                </li>
                <li>Rincones privados para sentarse y nidos colgantes para una relajación aislada</li>
                <li>Oficinas comerciales privadas</li>
                <li>Sala Club para Residentes con vista al agua con Salón, sala de cine y bar privado para entretener
                </li>
                <li>Gimnasio de última generación</li>
                <li>Embarcaderos privados exclusivos para residentes</li>
                <li>Acceso directo al mar para paseos en bote y actividades acuáticas a través de Haulover Inlet</li>
                <li>Muelle de lanzamiento de deportes acuáticos con kayaks, inflables y tablas de remo proporcionadas a
                    los
                    residentes
                </li>
                <li>Terraza Sunrise con asientos en el muelle con vistas a la Bahía de Biscayne</li>
                <li>Césped junto al muelle con asientos frente al mar, tumbonas con enrejados florales y hamacas
                    colgantes
                    que ofrecen vistas a la Bahía de Biscayne
                </li>
                <li>Césped dedicado al juego de los niños</li>
                <li>Áreas de Study Pod ideales para tareas o tutorías</li>
            </ul>
        </>
    };
    LaBaiaObject.introduccion = ["La Baia Bay North es un edificio íntimo de 8 pisos frente al mar. El equipo de Revuelta Architecture creó un estilo elegante y contemporáneo. Ofrece comodidades de lujo y excelentes vistas al mar. Las 57 residencias están disponibles en configuraciones de uno a cuatro dormitorios; Todas ellas permiten una gran cantidad de luz natural y enmarcan impresionantes vistas a todas las habitaciones. Además, La Baia North cuenta con una ubicación ideal que está conectada con tiendas, restaurantes y opciones de entretenimiento, campos de golf, yates y paseos en bote, aeropuertos cercanos y más.\n" +
    "\n"];
    LaBaiaObject.titulo = "La Baia Norte";
    LaBaiaObject.subtitulo = "";
    LaBaiaObject.numberOfImages = 66;
    LaBaiaObject.banner = true;

    return LaBaiaObject;
}