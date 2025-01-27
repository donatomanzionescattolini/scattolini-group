import Project from "../../../models/desarrollos/NewDevelopment.tsx";
import Downtown from "../../areas/Downtown.tsx";

export default function WaldorfAstoria() {
    const WaldorfAstoriaObject = new Project();


    WaldorfAstoriaObject.nameForProjectFolders = "waldorf-astoria";
    WaldorfAstoriaObject.banner = true;
    WaldorfAstoriaObject.area = Downtown();
    WaldorfAstoriaObject.video = (<iframe height={500} className=" h-300 m-auto autoplay"
                                          src="https://www.youtube.com/embed/ECvGpRYiy3k?si=ntjyJcGsf3V18EYm?autoplay=1"
                                          title="YouTube video player"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                          allowFullScreen></iframe>);
    WaldorfAstoriaObject.traits = {
        building: (
            <ul>
                <li>
                    Diseñado conceptualmente por el arquitecto de renombre mundial
                    Carlos Ott en colaboración con Sieger Suarez Architects
                </li>
                <li>Interiores creados por la firma de diseño BAMO</li>
                <li>Callejón del pavo real</li>
                <li>Piscina con cafetería al aire libre y cabañas privadas</li>
                <li>Bar privado / sala de degustación de vinos</li>
                <li>Restaurante de autor</li>
                <li>Restaurante todo el día Brasserie</li>
                <li>Salas de reuniones y juntas</li>
                <li>Club infantil Waldorf Astoria</li>
                <li>Servicio de aparcacoches las 24 horas</li>
                <li>Spa exclusivo</li>
                <li>
                    Gimnasio de vanguardia con estudios de entrenamiento privados
                </li>
                <li>
                    Porteros las 24 horas y asistentes de recepción del vestíbulo
                </li>
                <li>
                    Porte cochère privado con servicio de aparcacoches las 24 horas y
                    entrada residencial privada
                </li>
                <li>
                    Servicios de conserjería las 24 horas, además de profesionales
                    dedicados en el lugar
                </li>
                <li>Gerente residente residente y seguridad las 24 horas</li>
                <li>
                    Paquete de puerta principal y entrega de servicios a través de la
                    firma Concierge Closet
                </li>
                <li>Sala de entretenimiento</li>
            </ul>
        ),
        residences: (
            <ul>
                <li>Totalmente terminado y amueblado Jr. Suite</li>
                <li>
                    Residencias de 1, 2, 3 y 4 dormitorios totalmente terminadas
                </li>
                <li>
                    Todos los interiores residenciales están diseñados por la
                    galardonada firma de diseño de interiores BAMO
                </li>
                <li>
                    Ventanas de piso a techo de 10 pies con impresionantes vistas del
                    horizonte de la ciudad y el centro de la ciudad, Miami Beach y el
                    Océano Atlántico
                </li>
                <li>
                    Experiencia de tecnología doméstica inteligente para una
                    personalización perfecta con solo tocar un botón. Incluye sistemas
                    integrados de audio, vídeo e iluminación.
                </li>
                <li>
                    Todas las residencias vienen equipadas con un paquete de
                    iluminación contemporáneo, que incluye iluminación empotrada,
                    atenuadores y control de iluminación.
                </li>
                <li>
                    Armarios totalmente empotrados en todas las residencias curados
                    por BAMO
                </li>
                <li>
                    Construido en lavadora y secadora de primera línea en la unidad
                </li>
                <li>
                    Selecciones de pisos incluidas con las especificaciones
                    recomendadas por BAMO
                </li>
                <li>
                    Precableado para comunicaciones de alta velocidad y conexión de
                    datos
                </li>
                <li>Servicio de aparcacoches incluido</li>
                <li>
                    Las cocinas cuentan con gabinetes italianos personalizados
                    seleccionados por BAMO
                </li>
                <li>
                    El paquete de electrodomésticos Subzero y Wolf incluye microondas
                    con panel integrado, lavavajillas, horno de convección incorporado
                    y refrigerador / congelador y almacenamiento de vino
                </li>
                <li>
                    Los baños principales ofrecen duchas de lluvia y tocadores
                    italianos personalizados
                </li>
                <li>
                    Accesorios, características y accesorios de baño Dornbracht y
                    Duravit
                </li>
            </ul>
        ),
        amenities: undefined,
    };
    WaldorfAstoriaObject.introduction = [
        "Waldorf Astoria Miami presenta a la ciudad una de las marcas de hoteles de lujo más prestigiosas del mundo, propiedad de Hilton Hotels. La torre ofrece 100 pisos de residencias. Los arquitectos de la firma Sieger Suárez diseñaron el edificio para parecerse a una pila de cubos de vidrio apilados de manera desigual. Con 1,049 pies de altura, Waldorf Astoria Hotel and Residences Miami es la torre más alta de Miami y el primer rascacielos superalto de Miami. Las residencias tienen vistas espectaculares de la Bahía de Biscayne, el Puerto de Miami, Brickell Avenue, el centro de Miami, Key Biscayne y South Beach. La address perfecta de Waldorf Astoria Miami permite a los residentes vivir a pocos minutos del nuevo Miami World Center, varias atracciones culturales, arte, turismo y moda.",
    ];
    WaldorfAstoriaObject.officialName = "Waldorf Astoria";
    WaldorfAstoriaObject.subtitle = "";
    WaldorfAstoriaObject.numberOfImages = 51;
    return WaldorfAstoriaObject;
}