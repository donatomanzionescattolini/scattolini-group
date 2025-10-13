import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function SeventyTwoPark() {
    const SeventyTwoParkObject = new Desarrollo();


    SeventyTwoParkObject.nombre = "72-park";
    SeventyTwoParkObject.caracteristicas = {
        edificio: (
            <ul>
                <li>Pisos: 22</li>
                <li>Unidades: 270 residencias de Jr-1, 1, 2 y 3 dormitorios</li>
                <li>Ubicación: 580 72nd St, Miami Beach, FL 33141</li>
                <li>
                    Aprobado para alquileres a corto plazo, otorgando flexibilidad y
                    Posibilidades
                </li>
                <li>
                    Gran vestíbulo de doble altura con ventanales de piso a techo que
                    dejan pasar la luz natural
                </li>
                <li>
                    Estacionamiento sin asistencia disponible para propietarios e
                    invitados
                </li>
                <li>Recepción 24 horas</li>
                <li>Seguridad en el edificio las 24 horas</li>
                <li>
                    La tecnología avanzada de construcción inteligente ofrece fibra de
                    alta velocidad acceso inalámbrico óptico a Internet en todas las
                    áreas comunes y vivienda
                </li>
                <li>
                    Prestigiosa certificación LEED Gold, un testimonio de la
                    Compromiso con la sostenibilidad
                </li>
                <li>
                    3 ascensores de pasajeros de alta velocidad equipados con control
                    de acceso
                </li>
                <li>
                    Abundan las opciones culinarias, con múltiples restaurantes en El
                    inmueble
                </li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>Diseños modernos y abiertos de 470 a 1,177 pies cuadrados</li>
                <li>
                    Todas las residencias ofrecen opciones completamente amuebladas
                </li>
                <li>
                    Vistas panorámicas al océano, al parque, a la intracosta y al
                    horizonte de Miami desde su propio santuario privado
                </li>
                <li>Amplio balcón privado de 6 1⁄2 pies de profundidad</li>
                <li>
                    Las alturas de los techos varían de 9 a 10 pies, creando una
                    atmósfera de grandeza y amplitud
                </li>
                <li>
                    Las puertas correderas de vidrio de piso a techo y el vidrio
                    resistente a los impactos en todas las residencias permiten una
                    abundancia de luz natural a la vez que proporciona una conexión
                    perfecta con el mundo exterior
                </li>
                <li>
                    Tecnología avanzada de construcción inteligente que ofrece fibra
                    de alta velocidad Internet inalámbrico óptico, HDTV, entrada sin
                    llave a todas las residencias con SALTO y controles de acceso
                    inteligentes, y líneas telefónicas/de datos
                </li>
                <li>
                    Aire acondicionado central de bajo consumo y control individual y
                    sistema de calefacción
                </li>
                <li>
                    Disfrute de la cocina de un chef con un paquete de
                    electrodomésticos de estilo europeo totalmente integrado que
                    incluye refrigerador, horno, placa de inducción, horno rápido y
                    lavavajillas de Bosch, SMEG y Fisher & Paykel
                </li>
                <li>
                    Gabinetes europeos importados con herrajes de primera calidad,
                    elegantes encimeras de cuarzo importado, placas para salpicaduras
                    y fregadero contemporáneo de acero inoxidable con grifo gourmet y
                    rociador integral
                </li>
                <li>
                    Escápate a tu santuario dentro del baño, donde los gabinetes
                    europeos importados con herrajes de primera calidad irradian
                    elegancia
                </li>
                <li>
                    Encimeras y salpicaderos de cuarzo importados, suelos y paredes
                    con acabados a medida en zonas húmedas y herrajes, herrajes y
                    accesorios de primera calidad de Hansgrohe, que crean un ambiente
                    similar al de un spa
                </li>
            </ul>
        ),
        amenidades: (
            <ul>
                64,000 pies cuadrados de amenidades, que incluyen:
                <li>
                    Piscina estilo centro turístico que se extiende por más de 150
                    pies, acompañada de cabañas junto a la piscina
                </li>
                <li>
                    Terraza de la piscina con bar al aire libre ubicado bajo una
                    encantadora pérgola, que ofrece servicio de toallas y deliciosos
                    cócteles
                </li>
                <li>
                    Exuberante paisaje en casi un acre completo de la terraza de la
                    piscina del 5º piso y espacio de servicios
                </li>
                <li>
                    Restaurante, bar y salón en el 5º piso (con asientos en el
                    interior y al aire libre), que brinda servicio a la piscina y
                    ofrece cautivadoras vistas al mar
                </li>
                <li>Salón de coworking 24/7</li>
                <li>
                    Distintivo acristalamiento cerrado a doble altura, totalmente
                    equipado, gimnasio de última generación con equipos Technogym y
                    vistas a la piscina y los jardines
                </li>
                <li>Salón de yoga</li>
                <li>Sala de juegos para niños</li>
                <li>
                    Área privada de parrilla al aire libre con pérgola rodeada de
                    paisajismo
                </li>
                <li>Conserje</li>
                <li>
                    Acceso al cercano Miami Beach Tennis Center y al club de golf
                    Normandy Shores
                </li>
                <li>
                    Utilice el servicio de transporte privado en carrito de golf para
                    visitas rápidas a la playa. Toma prestados juguetes de playa para
                    niños, tablas de boogie, tablas de remo, bicicletas y más
                </li>
                <li>
                    Solo para propietarios, una azotea privada cuenta con una terraza
                    con vistas panorámicas de la playa, el océano, el parque, la
                    intracosta y el horizonte de Miami, así como áreas de comedor y
                    parrillas. Relájese en las zonas de estar privadas, disfrute de
                    noches de cine al aire libre o reúnase alrededor del televisor
                    grande para eventos deportivos
                </li>
                <li>Spa para mascotas en la planta baja</li>
            </ul>
        ),
    };
    SeventyTwoParkObject.introduccion = [
        "Al vivir en 72 Park, se ofrece lo mejor de ambos mundos a los residentes: una comunidad tranquila y exclusiva con fácil acceso al furor de la ciudad. El edificio tiene un diseño arquitectónico impresionante, con curvas suaves en todas las esquinas, barandillas de vidrio y ventanas de vidrio del piso al techo. Las residencias de planta abierta fueron cuidadosamente diseñadas para brindar comodidad y estilo, y ofrecen techos altos, unidades amplias y luminosas, acabados interiores de grado de condominio, gabinetes italianos y electrodomésticos de bajo consumo. Los residentes disfrutan de cautivadoras comodidades al aire libre, en un espacio que supera los 30,000 pies cuadrados. Este espacio cuenta con una plataforma de observación, jardín al aire libre y piscina de entrenamiento. Su ubicación deseable en North Miami Beach está cerca de cafés en la acera, clubes de campo, Lincoln Road y Bal Harbour Shops, lo que ofrece algo diferente para hacer todos los días.",
    ];
    SeventyTwoParkObject.titulo = "72 Park";
    SeventyTwoParkObject.slogan =
        <span className="pb-0 mb-0">
          La vida en Miami Beach <em>redefinida</em>
        </span>
    ;SeventyTwoParkObject.numberOfImages = 19;
    SeventyTwoParkObject.banner = true;
    SeventyTwoParkObject.area = MiamiBeach();

    return SeventyTwoParkObject;
}
