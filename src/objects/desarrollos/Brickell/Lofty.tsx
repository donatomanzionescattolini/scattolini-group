import Project from "../../../models/desarrollos/Project.tsx";
import Brickell from "../../areas/Brickell.tsx";

export default function Lofty() {
    const Lofty = new Project();
    Lofty.name = "lofty";
    Lofty.title = "Lofty";
    Lofty.traits = {
        residences: (
            <ul>
                <br></br>
                <strong>Las Residencias</strong>
                <br></br>
                <li>
                    Residencias urbanas de lujo con diseños abiertos modernos desde
                    485SF — 930 SF
                </li>

                <li>
                    Todas las residencias se entregan completamente terminadas y
                    amuebladas especialmente seleccionadas por INC.
                </li>

                <li>Vistas panorámicas del río Miami y el horizonte de Miami</li>

                <li>Balcones privados en cada residencia</li>

                <li>Las residencias de esquina ofrecen balcones envolventes</li>

                <li>Techos altos que van desde 2.7 a 3.3 metros de altura</li>
                <br></br>
                <strong>Cocinas</strong>
                <br></br>
                <li>
                    Gabinetes europeos importados con herrajes de primera calidad y
                    tiradores de cajones
                </li>

                <li>
                    Paquete de electrodomésticos de primera línea que incluye
                    refrigerador, horno, placa de cocción, microondas, lavavajillas y
                    triturador de fregadero de acero inoxidable
                </li>

                <li>
                    Barras y placas para salpicaduras elegantes de piedra importada
                </li>

                <li>Fregadero bajo barra de acero inoxidable moderno</li>
                <br></br>
                <strong>Baños</strong>
                <br></br>
                <li>
                    Barras y placas para salpicaduras elegantes de piedra importada
                </li>

                <li>
                    Pisos y paredes con acabados personalizados en áreas húmedas
                </li>

                <li>Mamparas de ducha de vidrio sin marco</li>

                <li>Bañeras amplias y extraprofundas</li>

                <li>
                    Luminarias y accesorios de estilo europeo de primera calidad
                </li>
                <br></br>
                <strong>Otras Características</strong>
                <br></br>
                <li>Armarios para propietarios en cada residencia</li>

                <li>
                    Puertas corredizas de vidrio de piso a techo y vidrio laminado
                    resistente al impacto que atenúa el sonido en todas partes
                </li>

                <li>
                    Cableado de Smart Building de tecnología avanzada para TV HD
                </li>

                <li>
                    Varias líneas telefónicas / de datos y acceso a Internet de ultra
                    alta velocidad
                </li>

                <li>
                    Sistema de calefacción y aire acondicionado central de bajo
                    consumo con control individual
                </li>
            </ul>
        ),
        building: (
            <>
                <ul>
                    <li>Alquileres a corto plazo permitidos por derecho</li>
                    <li>Vestíbulo de 2 pisos con ventanas de piso a techo</li>
                    <li>Mostrador de bienvenida las 24 horas con conserje</li>
                    <li>Servicio de aparcacoches las 24 horas</li>
                    <li>Acceso seguro las 24 horas</li>
                    <li>
                        Edificio inteligente de tecnología avanzada con acceso
                        inalámbrico a Internet de fibra óptica de alta velocidad en
                        todas las áreas comunes
                    </li>
                    <li>Aplicación exclusiva de LOFTY</li>
                    <li>Tecnología de construcción ecológica de vanguardia</li>
                    <li>
                        6 Ascensores de pasajeros de alta velocidad con control de
                        acceso
                    </li>
                    <li>Gestión hotelera in situ</li>
                    <li>
                        Restaurante curado frente al río con terraza al aire libre
                    </li>
                    <li>Piscina exótica del resort con cabañas junto a la piscina</li>
                    <li>Bar y parrilla en la terraza de la piscina 24/7</li>
                    <li>Salón de coworking</li>
                    <li>Salas de reuniones privadas</li>
                    <li>Salón de eventos con terraza exclusiva</li>
                    <li>
                        Gimnasio de última generación totalmente equipado con
                        televisores de alta definición y audio inalámbrico
                    </li>
                    <li>Estudios privados de Peloton</li>
                    <li>Salón de yoga y terraza</li>
                    <li>Experiencia en la azotea LOFTY</li>
                </ul>
            </>
        ),
        amenities: (
            <>
                <ul>
                    <li>Piscina exótica del resort con cabañas junto a la piscina</li>
                    <li>Bar y parrilla en la terraza de la piscina 24/7</li>
                    <li>Sala de coworking Salas de reuniones privadas</li>
                    <li>Salón de eventos con terraza exclusiva</li>
                    <li>
                        Gimnasio de última generación totalmente equipado con
                        televisores de alta definición y audio inalámbrico Estudios
                        PrivatePeloton Salón de yoga y terraza
                    </li>
                    <li>Experiencia en la azotea LOFTY</li>
                </ul>
            </>
        ),
    };
    Lofty.introduction = [
        "Lofty Residences es un elegante condominio de 43 pisos que presenta un nuevo estándar de vida cosmopolita en Brickell. Esta nueva torre residencial cuenta con interiores y vistas espectaculares, con el valor añadido de permitir a los propietarios hacer alquileres a corto plazo. Fue diseñado por la firma de fama mundial, Arquitectonica. La ubicación perfecta de Lofty Residences Brickell permite a los residentes vivir a solo minutos de distancia de varias atracciones culturales, artes, restaurantes, tiendas de lujo, parques y mucho más.",
    ];

    Lofty.title = "Lofty Residences Brickell";
    Lofty.subtitle = "Un Nuevo Estándar de VidaResidences Cosmopolita en Brickell";


    Lofty.numberOfImages = 55;
    Lofty.video = <iframe
        style={{margin: "auto"}}
        width="700"
        height="394"
        className=" m-auto h-300"
        src="https://www.youtube.com/embed/q-aJKA0dycc?si=8fV7LqMsCR8Wfz2s&autoplay=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>;
    Lofty.banner = true;
    Lofty.area = Brickell();


    return Lofty;
}