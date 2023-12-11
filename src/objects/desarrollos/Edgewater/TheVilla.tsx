import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Edgewater from "../../areas/Edgewater.tsx";

export default function TheVilla() {
    const TheVillaObject = new Desarrollo();


    TheVillaObject.nombre = "the-villa";
    TheVillaObject.titulo = 'The Villa'
    TheVillaObject.video =
        <iframe
            height="500"
            src="https://www.youtube.com/embed/tn194BN9-8U?autoplay=1&controls=0"
            title="Villa Miami Residences (2027) - EdgewaterComponent Miami"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="embed-responsive video-js vjs-default-skin "
            style={{marginLeft: "auto", marginRight: "auto"}}
        ></iframe>
    ;
    TheVillaObject.caracteristicas = {
        amenidades: (
            <ul>
                <li>
                    Experiencia de spa inspirada en los spas termales italianos que
                    contiene piscinas de inmersión, salas de vapor y sauna, y un
                    extenso menú de tratamientosGimnasio espacioso y lleno de luz con
                    equipos Technogym de última generación y estudios de yoga, pilates
                    y boxeo totalmente equipados
                </li>
                <li>
                    Amplios salones de recuperación para mujeres y hombresTerraza de
                    la piscina al aire libre con todos los servicios con salones y
                    tumbonas
                </li>

                <li>Club para residentes con biblioteca y salones íntimos</li>
                <li>
                    Sala de juntas y espacios de trabajo privadosSala de
                    entretenimiento con varias áreas de juego que incluyen billar,
                    póquer y tejo
                </li>
                <li>Sala de proyecciones y multimediaSalón familiar dedicado</li>

                <li>
                    El propio restaurante MFG de la villa, concebido como una
                    experiencia culinaria de inspiración italiana que abarca dos
                    niveles para incluir cenas frente a la bahía y comedores privados
                    exclusivos para residentes Alimentos y bebidas seleccionados por
                    MFG en todo el edificio
                </li>
                <li>Bar de jugos y cafetería solo para residentes</li>

                <li>
                    Servicios de chef privado en casa y clases de cocina Reservas
                    preferenciales, servicio de conserjería y privilegios de cobro en
                    todos los restaurantes MFG, así como acceso VIP y prioritario e
                    invitaciones a eventos
                </li>
                <li>
                    Cocinas y comedores a pedido, así como catering privado y en el
                    lugar por parte de los chefs de MFG Opciones de aprovisionamiento
                    y almacenamiento de comestibles en la residencia Servicio de
                    alimentos y bebidas junto a la piscina
                </li>
            </ul>
        ),
        edificio: (
            <ul>
                <li>Pisos: 55</li>
                <li>Número de unidades: residencias de 3, 4 y 5 dormitorios</li>
                <li>Ubicación: 700 NE 29th St, Miami, FL 33137</li>
                <hr className="hr hr-blurry w-50 mx-auto"/>

                <li>
                    55 pisos, incluidos 49 niveles residenciales y tres niveles de
                    comodidades de estilo de vida de club privado diseñadas por
                    Charles & Co.
                </li>
                <li>
                    Infinitas vistas de 360° del amanecer y el atardecer que abarcan
                    la bahía, el océano, el centro de Miami y Miami Beach
                </li>
                <li>
                    Diseño icónico del edificio que combina un exoesqueleto único de
                    bronce fundido anclado por un podio de servicios de vidrio
                    multifacético inspirado en piedras preciosas
                </li>
                <li>
                    Las residencias de Villa Piano de piso completo van de cuatro a
                    cinco dormitorios
                </li>
                <li>
                    Las residencias de Villa Mezzo de media planta van de tres a
                    cuatro dormitorios
                </li>
                <li>
                    20,000 pies cuadrados de comodidades de clase mundial atendidas
                    por MFG
                </li>
                <li>
                    Jardines estilo Piazza conectados con el próximo Miami Baywalk y
                    el paseo marítimo, con una cómoda accesibilidad a las tiendas y
                    restaurantes del Design District
                </li>
                <li>Exuberantes jardines privados diseñados por Enzo Enea</li>
                <li>Fachada de bahía premium que rodea dos lados del edificio</li>
                <li>
                    Embarcación flotante con piscina inspirada en el lago de Como en
                    la Bahía de Biscayne, junto a la cala
                </li>
                <li>Muelle privado con embarcadero</li>
                <li>Acceso al helipuerto para llegadas y salidas sin problemas</li>
                <li>Garaje privado con estaciones de carga eléctrica</li>
                <li>
                    Un estilo de vida sin fisuras y de siguiente nivel imaginado y
                    totalmente atendido por el aclamado equipo de MFG. Una filosofía
                    de opulencia sin límites en la que todas las necesidades se
                    anticipan y se atienden
                </li>
                <li>Administrador de fincas in situ y curador interno</li>
                <li>Porte-cochere con servicio de aparcacoches las 24 horas</li>
                <li>Seguridad las 24 horas y servicios de recepción</li>
                <li>Bóvedas privadas y cajas de seguridad en las instalaciones</li>
                <li>
                    El propio restaurante MFG de la villa, concebido como una
                    experiencia culinaria de inspiración italiana que abarca dos
                    niveles para incluir cenas frente a la bahía y comedores privados
                    exclusivos para los residentes
                </li>
                <li>MFG seleccionó alimentos y bebidas en todo el edificio</li>
                <li>Bar de jugos y cafetería solo para residentes</li>
                <li>Servicios de chef privado a domicilio y clases de cocina</li>
                <li>
                    Cocinas y comedores bajo demanda, así como catering privado y en
                    el lugar
                </li>
                <li>Servicio de alimentos y bebidas junto a la piscina</li>
                <li>
                    Experiencia de spa inspirada en los spas termales italianos que
                    contiene piscinas de inmersión, salas de vapor y sauna, y un
                    amplio menú de tratamientos
                </li>
                <li>
                    Gimnasio espacioso y lleno de luz con equipos Technogym de última
                    generación y estudios de yoga, pilates y boxeo totalmente
                    equipados
                </li>
                <li>
                    Terraza con piscina al aire libre con todos los servicios y
                    tumbonas
                </li>
            </ul>
        ),
        residencias: (
            <>
                <ul>
                    <li>
                        Vistas panorámicas de la Bahía de Biscayne y el Océano Atlántico
                    </li>
                    <li>
                        Los vestíbulos de entrada se abren a amplios planos de planta
                        con alturas de techo de 10 a 11 pies
                    </li>
                    <li>
                        Las ventanas energéticas del piso al techo brindan vistas
                        despejadas
                    </li>
                    <li>
                        Amplias terrazas al amanecer y al atardecer en todas las
                        residencias
                    </li>
                    <li>
                        Elección de pisos de madera o porcelana complementados con
                        carpintería personalizada para puertas, gabinetes y molduras
                    </li>
                    <li>
                        Cocinas de chef diseñadas a medida por Mario Carbone para
                        reunirse, ser anfitrión y cocinar a nivel de chef
                    </li>
                    <li>
                        Estufas de combustible dual CornuFé con estufas de gas y hornos
                        de convección eléctricos, cocinas de pasta de calidad
                        profesional y llenadora de ollas montada
                    </li>
                    <li>
                        Dos hornos de convección + vapor incorporados y refrigeración
                        integrada de Wolf y Sub-Zero
                    </li>
                    <li>Encimeras y salpicaderos en piedra Taj Mahal Quartzite</li>
                    <li>
                        Gabinetes italianos personalizados con vidrio estriado, isla de
                        madera y la opción de acabado lacado verde o crema
                    </li>
                    <li>
                        Despensas con microondas incorporado y estanterías generosas
                    </li>
                    <li>
                        Carta de materiales complementarios de latón, laca, acero
                        inoxidable y vidrio estriado
                    </li>
                    <li>
                        Refrigeración y almacenamiento de vino incorporados con
                        estanterías personalizadas y control de temperatura
                    </li>
                    <li>
                        Amplias suites principales con vistas panorámicas, sala de estar
                        y acceso directo al balcón
                    </li>
                    <li>
                        Elegantes vestidores de estilo atelier con estanterías y
                        almacenamiento
                    </li>
                    <li>
                        Los baños principales en suite cuentan con paredes y mostrador
                        de porcelana Greige Onyx, pisos de porcelana travertino y
                        puertas de ducha de vidrio estriado
                    </li>
                    <li>
                        La bañera de gran tamaño a lo largo de la pared de la ventana
                        ofrece vistas panorámicas del agua
                    </li>
                    <li>Grifería y molduras de baño Dornbracht y Duravit</li>
                    <li>Tocadores de madera italiana personalizados</li>
                    <li>
                        Hogar inteligente precableado para preferencias individuales de
                        control de iluminación y sombreado en todo momento
                    </li>
                    <li>
                        Todos los electrodomésticos de cocina de CornuFé, Wolf y
                        Sub-Zero con electrodomésticos de lavandería de Electrolux
                    </li>
                </ul>
            </>
        ),
    };
    TheVillaObject.introduccion = [
        "Las vibrantes vistas a la bahía y la ciudad, combinadas con 55 pisos de espacios indulgentes, definen este exclusivo desarrollo de condominio, compuesto por un total de 70 unidades que van desde 2,939 a 6,143 pies cuadrados. Con opciones de tres a cinco amplias habitaciones, cada detalle arquitectónico y de diseño se adapta de forma única para crear un entorno lujoso y sin fisuras para los residentes. El renombrado equipo MFG se dedica a proporcionar un estilo de vida de alto nivel, anticipándose y respondiendo a cada necesidad con una filosofía de opulencia sin límites. Prepárese para sumergirse en una experiencia de primer nivel completamente incomparable.",
    ];

    TheVillaObject.subtitulo =
        <p className="text-lowercase w-50 mx-auto">
            <span className="text-capitalize">¡El</span> rascacielos residencial
            más sorprendente de" "; <span className="text-capitalize">EdgewaterComponent, Miami </span>finalmente
            está aquí!
            <br></br>
        </p>
    ;
    TheVillaObject.numberOfImages = 70;
    TheVillaObject.banner = true;
    TheVillaObject.area = Edgewater();
    return TheVillaObject;

}