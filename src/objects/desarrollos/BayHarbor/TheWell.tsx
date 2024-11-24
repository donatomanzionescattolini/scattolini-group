import Project from "../../../models/desarrollos/Project.tsx";
import BayHarbor from "../../areas/BayHarbor.tsx";

export default function TheWell() {
    const TheWellObject = new Project();

    TheWellObject.numberOfImages = 40;
    TheWellObject.banner = true;
    TheWellObject.name = "the-well";
    TheWellObject.traits = {
        building: (
            <>
                <ul>
                    <li>
                        Ubicación:
                        <a
                            className="x-el x-el-a c1-1q c1-1r c1-ay c1-1t c1-1f c1-1u c1-1v c1-90 c1-b c1-8x c1-23 c1-bd c1-be"
                            href="https://maps.google.com/maps/dir//1160+Kane+Concourse+Bay+Harbor+Islands,+FL+33154/@25.8864557,-80.1325728,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d9b284b94826a7:0xdadd1aa9025c8bd8"
                            rel="noopener"
                        >
                            {" "}
                            1160 Kane Concourse, Bay Harbor Islands, FL 33154
                        </a>
                    </li>
                    <li>Pisos: 7</li>
                    <li>Número de residencias: 54 condominios&nbsp;</li>
                    <li>Dormitorios por residencia: 1-4 dormitorios</li>
                    <li>Fecha: 2025</li>
                </ul>
            </>
        ),
        residences: (
            <>
                <ul>
                    <li>
                        <dt>Hogar</dt>
                    </li>
                    <li>
                        {" "}
                        Amplios balcones privados en la mayoría de las residencias
                    </li>
                    <li> Diseños abiertos y llenos de luz</li>
                    <li>
                        {" "}
                        Pisos de madera de ingeniería neutra y gabinetes italianos
                    </li>
                    <li> Ventanas de vidrio de piso a techo</li>
                    <li>
                        {" "}
                        Generosos planos de planta diseñados con un amplio espacio de
                        almacenamiento
                    </li>
                    <li> Rincón de meditación, esterilla de yoga y accesorios</li>
                    <li> Sistema de purificación de aire incorporado</li>
                    <li> Difusores de aromaterapia en cada residencia</li>
                    <li>
                        {" "}
                        Terapia de luz roja incorporada para aumentar la salud, la
                        energía y el bienestar
                    </li>
                    <li> Vestidores terminados en dormitorios primarios</li>
                    <b>
                        <li> Cocina</li>
                    </b>
                    <li>
                        {" "}
                        Fregadero de cocina Kore™ Workstation, conocido por su diseño
                        perfecto, función y espacio de trabajo equilibrado con
                        accesorios integrados
                    </li>
                    <li> Encimeras de cuarzo y protector contra salpicaduras</li>
                    <li> Grifo con opciones de agua fría y carbonatada filtrada</li>
                    <li> Electrodomésticos Sub-Zero y Wolf</li>
                    <li> Vitamix, accesorios para freidoras de aire</li>
                    <li> Nevera de vino incorporada</li>
                    <li> Gabinetes italianos personalizados</li>
                    <li> Amplias islas de cocina con espacio para sentarse</li>
                    <b>
                        <li> Baño Primario</li>
                    </b>
                    <li> Ducha de lluvia con doble presión</li>
                    <li>
                        {" "}
                        Opción de ducha de spa de fusión para ayudar a estimular el
                        sistema linfático, reduciendo la retención de agua y aumentando
                        la energía
                    </li>
                    <li>
                        {" "}
                        Bañeras independientes o incorporadas para aliviar los músculos
                        y articulaciones cansados
                    </li>
                    <li> Suelos y paredes de piedra</li>
                    <li> Gabinetes italianos personalizados</li>
                </ul>
            </>
        ),
        amenities: (
            <>
                <ul>
                    <li>Conserje de bienestar, a un paso o mensaje de texto</li>
                    <li> Servicio de aparcacoches y seguridad las 24 horas</li>
                    <li> Diseño y mantenimiento de plantas en el hogar</li>
                    <li>
                        {" "}
                        Entrega local de CSA para productos orgánicos frescos, pescados
                        y carnes
                    </li>
                    <li>
                        {" "}
                        Ceremonia de limpieza de energía de cada nueva residencia
                    </li>
                    <li> Servicios de limpieza orgánicos y libres de toxinas</li>
                    <li>
                        {" "}
                        Productos de bienestar seleccionados y examinados por THE WELL
                        Practitioners, diseñados para enriquecer su experiencia de
                        bienestar en el hogar y apoyar sus rituales diarios de
                        bienestar, desde aceites esenciales y productos para el cuidado
                        del cuerpo, hasta difusores, cepillos secos y más
                    </li>
                    <li>
                        {" "}
                        Azotea: piscina y bañera de hidromasaje con cabañas privadas,
                        tumbonas y una cocina de verano
                    </li>
                    <li>
                        {" "}
                        Membresía a THE WELL Bay Harbor Islands, centro holístico de
                        bienestar y fitness que ofrece un extenso menú de tratamientos y
                        experiencias para la mente, el cuerpo y el espíritu
                    </li>
                    <li>
                        {" "}
                        Sala de lectura tranquila y acogedora y salón de té para
                        reunirse y reflexionar
                    </li>
                    <li>
                        {" "}
                        La sala de juntas dedicada promueve el equilibrio entre el
                        trabajo y la vida personal
                    </li>
                    <li> Programación infantil y actividades de bienestar</li>
                    <li> Acceso exclusivo a un club de playa privado</li>
                    <li> Coche eléctrico dedicado para excursiones locales</li>
                    <li>
                        {" "}
                        THE WELL Locker: la última colección de tecnología de bienestar,
                        que incluye Theragun, Therabeam, mantas infrarrojas, botas
                        linfáticas, FaceWare Pro y otros, para uso exclusivo de los
                        residentes
                    </li>
                </ul>
            </>
        ),
    };

    TheWellObject.introduction = [
        "Escondido en Bay Harbor Islands y perfectamente alejado del ritmo apresurado de Miami, THE WELL Bay Harbor Islands es el primero de su tipo: un lugar donde puede vivir y jugar en completo bienestar. Inspiradas en la materialidad y la artesanía tradicionales, The Residences incluye 54 condominios hechos a medida y más de 22,000 pies cuadrados de comodidades, incluido un gimnasio y centro de bienestar de última generación. THE WELL Bay Harbor Islands está diseñado para poner el bienestar en el centro de su vida, creando el tiempo y el espacio para desconectarse, reducir el ritmo y reenfocarse en lo que más importa: su bienestar.",
    ];
    TheWellObject.title = "The Well";
    TheWellObject.subtitle = "Bienvenido al Bienestar";
    TheWellObject.area = BayHarbor();
    return TheWellObject;
}