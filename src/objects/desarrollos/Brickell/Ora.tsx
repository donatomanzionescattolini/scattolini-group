import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";

export default function Ora() {
    const OraObject = new Desarrollo();
    OraObject.banner = true;
    OraObject.area = Brickell();

    OraObject.nombre = "ora";
    OraObject.caracteristicas = {
        edificio: (
            <ul>
                <li>
                    76 pisos que se elevan a más de 900 pies sobre el centro de
                    Brickell
                </li>
                <li>
                    Residencias curadas, impecablemente diseñadas por el taller m2
                </li>

                <li>
                    Un oasis en medio de Brickell, el distrito financiero de Miami,
                    inmerso en un exuberante paisaje tropical
                </li>

                <li>
                    Arquitectura fluida concebida para mezclarse con el entorno
                    natural
                </li>

                <li>
                    Membresías de espacio de trabajo creativo totalmente conectadas
                    disponibles para creadores, fundadores y hacedores
                </li>

                <li>
                    Ascensores de alta velocidad dedicados con acceso independiente
                    para propietarios, huéspedes a corto plazo e invitados de
                    restaurantes
                </li>

                <li>Ascensores dedicados para empleados internos</li>

                <li>
                    Administrado, atendido y atendido por la galardonada marca Casa
                    Tua
                </li>

                <li>
                    Diseñado para priorizar la privacidad y mantener las residencias
                    insonorizadas
                </li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>Estudio a residencias de cuatro dormitorios</li>
                <li>
                    Vistas panorámicas de Brickell, Biscayne Bay y Coconut Grove de
                    Miami
                </li>

                <li>
                    Completamente amueblado e impecablemente terminado, incluidos
                    pisos,
                </li>
                <li>
                    iluminación, cocina y baño, por el venerado equipo de diseño
                    italiano en m2atelier
                </li>

                <li>Baños de diseño italiano con accesorios importados</li>

                <li>
                    La tecnología del hogar inteligente permite el control global
                </li>

                <li>Precableado para Internet de alta velocidad y Wi-Fi</li>

                <li>Amplio espacio de guardarropas en todas las residencias</li>

                <li>Techos de diez pies con ventanas de piso a techo</li>

                <li>Amplias terrazas con elegantes barandillas de vidrio</li>

                <li>Lavadora y secadora en cada residencia</li>
            </ul>
        ),
        amenidades: (
            <ul>
                EL SALÓN SOCIAL
                <br></br>
                <li>
                    Justo debajo del parque del cielo, el único espacio de un
                    propietario para reunirse y jugar, reconectarse y recargarse.
                </li>
                <li>Salón del propietario</li>
                <li>Asientos en el interior y al aire libre</li>
                <li>Pantalla LED de gran tamaño</li>
                <li>Sala de deportes virtual con simuladores</li>
                <li>Biblioteca de lectura</li>
                <li>
                    Espacios de trabajo abiertos y compartidos, oficinas privadas,
                    salas de creación de contenido y energía inspirada y dinámica
                </li>
                <br/>
                LA PISCINA
                <br/>
                <li>
                    Expansivo pero íntimo, con impresionantes vistas al mar, ricos
                    paisajes y naturaleza alrededor.
                </li>
                <li>Piscina estilo resort con solárium</li>
                <li>Cabañas de piscina y tumbonas</li>
                <li>
                    Servicio de alimentos y bebidas y toallas junto a la piscina
                </li>
                <li>Vibrante paisaje tropical</li>
                <br/>
                APTITUD
                <br/>
                <li>
                    Un espacio abierto y amplio diseñado para todo tipo de
                    entrenamiento o sesión de entrenamiento.
                </li>
                <li>Equipos de última generación enfocados en el rendimiento</li>
                <li>
                    cardio, entrenamiento de resistencia y acondicionamiento de fuerza
                </li>
                <li>Área de entrenamiento de alta intensidad</li>
                <li>
                    Espacio de entrenamiento multiusos (spinning, yoga, pilates)
                </li>
                <li>Salas privadas para entrenadores virtuales</li>
                <li>Espacios de fitness al aire libre</li>
                <br/>
                BIENESTAR
                <br></br>
                <li>
                    Nuestro Centro de Bienestar es tanto un club social como un lugar
                    para recentrarse, basado en el bienestar general generado por la
                    conexión humana.
                </li>
                <li>Salones de relajación</li>
                <li>Terraza wellness</li>
                <li>Salas de tratamiento individuales</li>
                <li>Vapor, sauna y hammam mixtos</li>
                <li>Vestuarios para él y para ella con duchas</li>
                <li>Sala de tratamiento para parejas</li>
                <li>Sala de estilo con tocadores iluminados</li>
                <li>Barra de zumos y nutriciones</li>
                <li>Escaleras que conectan directamente con el gimnasio</li>
            </ul>
        ),
    };
    OraObject.introduccion = [
        "Presentamos ORA by Casa Tua, un nuevo destino realmente único al que llamar hogar. ORA ofrece residencias de propiedad flexible a corto, mediano y largo plazo, perfectamente ubicadas en Brickell, el Distrito Financiero de Miami. Con residencias cuidadosamente curadas, restaurantes de primer nivel y hermosas áreas sociales dedicadas al arte y la cultura lideradas por la icónica marca Casa Tua, ORA se convertirá en el epicentro de la ciudad.      ",
    ];
    OraObject.titulo =
        <>
            Ora 
            <span className="m-0" style={{fontSize: "12px!important"}}>
            <i> by</i> Casa Tua
          </span>
        </>;

    OraObject.subtitulo = "Residencias con Alma en el Corazón de Miami";
    OraObject.numberOfImages = 14;
    OraObject.video =
        <iframe
            className="embed-responsive  d-flex flex-row justify-content-center"
            width={700}
            height={500}
            src="https://player.vimeo.com/video/806352821?autoplay=true"
            allowFullScreen
            autoFocus
            data-ready="true"
        ></iframe>;
    return OraObject;
}