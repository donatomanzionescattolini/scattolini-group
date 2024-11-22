import Project from "../../../models/desarrollos/Project.tsx";
import Downtown from "../../areas/Downtown.tsx";

export default function Cipriani() {
    const CiprianiObject = new Project();

    CiprianiObject.banner = true;
    CiprianiObject.area = Downtown();

    CiprianiObject.name = "cipriani";
    CiprianiObject.title = "Cipriani Residences";
    CiprianiObject.subtitle = "";
    CiprianiObject.numberOfImages = 14;
    CiprianiObject.introduction = [
        "\n" +
        "Brillantemente diseñadas por Arquitectonica y 1508 London, estas elegantes casas ofrecen verdadera comodidad y privacidad, inspiradas en su ubicación y el estilo atemporal de Cipriani. Los espacios interiores y exteriores abrazan el paisaje bañado por el sol, mientras que la estética náutica de la marca informa sutilmente la fachada curva.\n",
        "Vivir en Cipriani Residences Miami es disfrutar de esos estándares de servicio exclusivos establecidos por primera vez en Harry's Bar en 1931 y perfeccionados a lo largo de cuatro generaciones. Se satisfacen los gustos individuales y se anticipan las necesidades con una comprensión intuitiva de cuándo y dónde se requiere su atención.",
    ];
    CiprianiObject.traits = {
        building: (
            <div>
                <p>
                    Una adición distintiva al horizonte de Brickell, la torre de
                    vidrio de 80 pisos tiene una forma curva y orgánica que cae en
                    cascada hacia el paseo marítimo a un ritmo fácil. El diseño cómodo
                    y sofisticado se extiende a los interiores y aporta una sensación
                    de lujo y un sutil estilo italiano a cada aspecto de la
                    experiencia de vida.
                </p>
                <ul>
                    <li>
                        Una elegante torre de 80 pisos con una fachada curva de vidrio
                        en cascada
                    </li>
                    <li>
                        " "; Una colección de 397 residencias, incluidos áticos excepcionales
                        con piscina privada
                    </li>
                    <li> Servicios de comedor solo para residentes de Cipriani</li>
                    <li>
                        " "; Vistas panorámicas de la Bahía de Biscayne, el horizonte de
                        Brickell y Coconut Grove
                    </li>
                    <li> Personal 24 horas capacitado por Cipriani</li>
                </ul>
            </div>
        ),
        residencias: (
            <div>
                <ul>
                    <li>Amplias salas de estar con alturas de techo de 10 pies</li>
                    <li>
                        " "; Puertas y ventanas corredizas de vidrio de piso a techo con
                        magníficas vistas panorámicas.
                    </li>
                    <li>
                        " "; Acceso a la terraza desde la sala de estar y el dormitorio
                        principal de cada residencia.
                    </li>
                    <li> Elegantes vestidores en cada dormitorio principal</li>
                    <li> Se incluye una exquisita selección de opciones de pisos.</li>
                    <li> Entrada directa al ascensor para residencias selectas</li>
                    <li>
                        " "; Cocina abierta y comedor con gabinetes italianos personalizados
                        inspirados en el famoso estilo de Cipriani
                    </li>
                    <li>
                        " "; Electrodomésticos de primera línea de Wolf Sub-Zero, que
                        incluyen estufa, refrigerador integrado, congelador, enfriador
                        de vino y lavavajillas
                    </li>
                    <li>
                        " "; Baños principales con grandes bañeras independientes y duchas
                        con mampara de vidrio; tocadores con gabinetes italianos de
                        primera calidad, encimeras de piedra importada, espejos
                        retroiluminados; habitación separada con inodoro
                    </li>
                    <li>
                        " "; Amplias salas de lavandería con lavadora y secadora grandes, con
                        fregadero en la mayoría de las residencias.
                    </li>
                    <li>
                        " "; Sistemas de aire acondicionado y calefacción centrales de alta
                        eficiencia y control individual, con difusores lineales en las
                        áreas principales para garantizar una integración perfecta
                    </li>
                    <li>
                        " "; Innovadora infraestructura de tecnología inteligente que permite
                        la domótica
                    </li>
                    <li>
                        " "; Sistema de interfaz inteligente para servicios esenciales del
                        edificio, como conserjería, valet y seguridad.
                    </li>
                </ul>
            </div>
        ),

        amenities: (
            <ul>
                <li>
                    Entrada privada exclusiva con exuberantes jardines y elegante
                    puerta cochera
                </li>
                <li>
                    Impresionante vestíbulo que conduce a dos hileras de ascensores de
                    alta velocidad sin contacto
                </li>
                <li>Experiencias gastronómicas privadas exclusivas de Cipriani</li>
                <li>
                    Servicio de comidas a domicilio y catering las 24 horas de
                    Cipriani, exclusivo para residentes
                </li>
                <li>
                    Comedores privados disponibles para reserva, atendidos por
                    Cipriani
                </li>
                <li>
                    Terraza elevada del complejo con dos piscinas, un maravilloso spa
                    al aire libre, cabañas junto a la piscina y una terraza para tomar
                    sol con hermosos jardines
                </li>
                <li>
                    Servicios de alimentos y bebidas junto a la piscina atendidos por
                    Cipriani.
                </li>
                <li>Spa holístico con sauna y salas de tratamientos.</li>
                <li>
                    Salón de lujo para residentes para eventos especiales y reuniones
                    íntimas
                </li>
                <li>Gimnasio de última generación</li>
                <li>Simulador de golf</li>
                <li>cancha de pickleball</li>
                <li>
                    Salón privado disponible para reservar para servicios de belleza
                    personales.
                </li>
                <li>
                    Sala de proyección con equipamiento audiovisual de última
                    generación.
                </li>
                <li>Biblioteca para residentes tranquila y espaciosa</li>
                <li>Atractiva sala de juegos para niños</li>
                <li>
                    Centro de bienestar elevado de cuatro niveles y salón con vista al
                    horizonte de Brickell
                </li>
                <li>Complejo que admite mascotas con parque para perros</li>
                <li>
                    Acceso a Internet de alta velocidad en todas las áreas públicas.
                </li>
                <li>Estaciones de carga de vehículos eléctricos disponibles</li>
                <li>Trasteros climatizados</li>
            </ul>
        ),
    };
    return CiprianiObject;
}