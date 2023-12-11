import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

import Brickell from "../../areas/Brickell.tsx";

export default function  BaccaratResidences() {


    const baccaratResidencesObject = Object.getPrototypeOf(Desarrollo);
 baccaratResidencesObject.banner=true;     baccaratResidencesObject.area = Brickell();

    baccaratResidencesObject.nombre = "baccarat";
    baccaratResidencesObject.caracteristicas = {
        edificio: (
            <ul>
                <li>Entrada Porte-cochère</li>
                <li>
                    Vestíbulo de entrada exquisitamente decorado con grandes techos
                    altos que conducen directamente a tres bancos de ascensores
                    privados dobles a cada residencia
                </li>
                <li>
                    Amenidades elevadas del nivel 12 cubierta del complejo cargada con
                    una espectacular piscina salina climatizada de entrada cero, spa
                    al aire libre, cabañas junto a la piscina, área de cocina de
                    verano y terraza bellamente ajardinada
                </li>
                <li>
                    Gran Salón de diseño glamoroso, establecido como el lugar ideal
                    tanto para reuniones íntimas como para grandes celebraciones
                </li>
                <li>
                    Lujosa sala club con bar y billar, cocina de catering e
                    instalaciones multimedia
                </li>
                <li>
                    Gimnasio totalmente equipado de última generación curado por
                    Altitude Fitness con teatro cardiovascular, sala de spinning,
                    salas de yoga y meditación, todas con vista al área del complejo
                    de la cubierta de la piscina
                </li>
                <li>
                    Spa Hammam con instalaciones de vapor y sauna para hombres y
                    mujeres, lujosas salas de tratamiento y tienda de spa
                </li>
                <li>
                    Sala de proyección privada con equipo audiovisual de vanguardia y
                    asientos estilo teatro
                </li>
                <li>
                    Sala de juegos con instalaciones multimedia y sala de juegos para
                    niños
                </li>
                <li>
                    Centro de negocios con instalaciones para conferencias y espacios
                    de trabajo privados
                </li>
                <li>Bodega y sala de degustación</li>
                <li>Estaciones de carga de vehículos eléctricos</li>
                <li>Espacios para guardar bicicletas</li>
                <li>
                    Conserje muy atento, con correo conveniente y mostrador de
                    recepción
                </li>
                <li>
                    Servicio de aparcacoches gratuito las 24 horas y estacionamiento
                    opcional en espacios asignados en garaje cubierto y seguro
                </li>
                <li>
                    Servicios de seguridad atendidos las 24 horas y acceso controlado
                </li>
                <li>
                    Supervisión residencial que incluye cuidado de mascotas, cuidado
                    de plantas y mantenimiento fuera del hogar
                </li>
                <li>
                    Puerto deportivo privado con atraque de más de 300 pies lineales
                    con yate residente para servicios de reserva a pedido y taxi
                    acuático privado
                </li>
                <li>Membresía del Beach Club a 1 Hotel South Beach</li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>
                    Planos de planta contemporáneos de concepto abierto y fluidos con
                    residencias y áticos de una, dos, tres y cuatro habitaciones,
                    todos ofrecidos con una selección de exquisitos acabados de
                    decoración y listos para su ocupación inmediata
                </li>
                <li>Acceso al ascensor activado con llave privada</li>
                <li>
                    Puertas y ventanas corredizas de vidrio de piso a techo, tintadas
                    y resistentes a los impactos energéticamente eficientes
                </li>
                <li>
                    Amplias terrazas privadas de ocho pies de profundidad accesibles
                    desde las áreas de estar y dormitorio principal de cada
                    residencia, y envuelven terrazas en unidades de esquina, con
                    barandillas de vidrio para vistas sin obstáculos
                </li>
                <li>
                    Generosos techos altos de diez pies de acabado liso en pisos
                    típicos que se elevan a once y doce pies en niveles de ático
                </li>
                <li>Cocinas gourmet</li>
                <li>
                    Electrodomésticos de cocina de primera línea que incluyen:
                    refrigerador / congelador Sub-Zero con dispensador interno de agua
                    fría y máquina de hielo, almacenamiento de vino Sub-Zero, estufa
                    de inducción Wolf, horno contemporáneo y horno de vapor Wolf serie
                    M, lavavajillas Cove con gabinetes integrados y campana extractora
                    oculta de velocidad variable
                </li>
                <li>
                    Sistemas de aire acondicionado y calefacción centrales de alta
                    eficiencia y controlados individualmente
                </li>
                <li>
                    Generosos baños principales con bañeras independientes y duchas de
                    lluvia acristaladas sin marco, habitación separada con inodoro,
                    gabinetes italianos premium, tocadores de piedra importada con
                    baños dobles y espejos decoradores
                </li>
                <li>
                    Amplios vestidores "para él y para ella" equipados con gabinetes
                    italianos en cada dormitorio principal de la residencia
                </li>
                <li>
                    Puertas interiores de madera maciza para una mejor insonorización
                    y eficiencia energética
                </li>
                <li>
                    Salas de lavandería con lavadora y secadora de gran capacidad, y
                    lavabo de servicios públicos y gabinetes de almacenamiento en la
                    mayoría de las residencias
                </li>
                <li>Sistema de protección contra incendios por rociadores</li>
                <li>
                    Tecnología avanzada "edificio inteligente" precableado para
                    Internet Wi-Fi de alta velocidad, datos/voz y video satelital por
                    cable
                </li>
                <li>
                    Tecnología de interfaz para servicios de construcción como
                    conserjería, valet, seguridad y servicios en el hogar como audio,
                    video, iluminación, tratamientos de ventanas, Internet y satélite
                </li>
            </ul>
        ),
        amenidades: (
            <ul>
                <li>Gimnasio totalmente equipado de última generación</li>
                <li>Puerto deportivo privado</li>
                <li>Lujosa sala club</li>
                <li>Sala de proyección privada</li>
                <li>Bodega y sala de degustación</li>
                <li>Terraza de la piscina</li>
                <li>
                    Servicios de seguridad atendidos las 24 horas y acceso controlado
                </li>
                <li>
                    Amplio paseo marítimo exuberantemente ajardinado a lo largo del
                    río Miami que conecta con el parque Miami Circle National Historic
                    Landmark
                </li>
                <li>
                    Terraza elevada frente al mar con piscina infinita que ofrece
                    vistas incomparables del río Miami y la Bahía de Biscayne
                </li>
                <li>
                    Amenidades elevadas del nivel 12 cubierta del complejo cargada con
                    una espectacular piscina salina climatizada de entrada cero, spa
                    al aire libre, cabañas junto a la piscina, área de cocina de
                    verano y terraza bellamente ajardinada
                </li>
                <li>
                    Centro de negocios con instalaciones para conferencias y espacios
                    de trabajo privados
                </li>
            </ul>
        ),
    };
    baccaratResidencesObject.introduccion = [
        "Baccarat presenta con orgullo su primera colección de residencias al mercado de Miami.",
        "Iluminada por el brillo infinito del sol, esta torre elevada se mantendrá radiante en el paseo marítimo donde el río se encuentra con la bahía, en el corazón de las brillantes luces de la ciudad. Combinando la vitalidad brillante y el dinamismo magnético de Brickel con un diseño iluminado y un servicio ingenioso, los residentes pueden esperar un estilo de vida infundido con delicias inesperadas y brillantez inspirada",
        "Penthouse residences disponibles para vista previa exclusiva.",
    ]
    baccaratResidencesObject.titulo = "Baccarat Residences";
    baccaratResidencesObject.subtitulo =
        <p className="text-cursive p-0 m-0">
            <em>Donde la vida brilla para siempre</em>
        </p>;
    baccaratResidencesObject.numberOfImages = 79;

    return baccaratResidencesObject;
}