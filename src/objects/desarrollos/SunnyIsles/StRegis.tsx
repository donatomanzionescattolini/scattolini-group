import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import SunnyIsles from "../../areas/SunnyIsles.tsx";

export default function StRegis() {
    const StRegisObject = new Desarrollo();


    StRegisObject.numberOfImages = 52;
    StRegisObject.nombre = "st-regis";
    StRegisObject.titulo = "St. Regis® ";
    StRegisObject.slogan = "Vivir exquisito es vivir extraordinario";
    StRegisObject.introduccion = [
        "Situado a lo largo de la hermosa costa de South  con exquisitas vistas frente a la bahía, The St. Regis Residences, Miami personifica la vida elegante. Refleja las sensibilidades de aquellos que son impulsados por el conocimiento, exigen excelencia, respetan la tradición y valoran la individualidad por encima de todo.",
        "The St. Regis Residences, Miami representa un futuro impulsado por un pasado histórico. Un lugar donde las nuevas generaciones crearán una vida de momentos legendarios, en hogares únicos para personas que perciben sus legados personales innatamente entrelazados con la rica herencia de Miami.",
        "Desarrollado por Grupo Relacionado e Integra Investments, St. Regis Residences ofrece un diseño majestuoso de Robert AM Stern Architects que presenta interiores exclusivos de Rockwell Group y paisajismo de Enzo Enea Group.",
    ];
    StRegisObject.banner = true;
    StRegisObject.area = SunnyIsles();
    StRegisObject.caracteristicas = {
        edificio: (
            <p>
                St. Regis®  se encuentra dentro de una red de conexiones de
                transporte cercanas, lo que brinda fácil acceso al Aeropuerto
                Internacional de Miami, el Puerto de Miami, el Distrito de las Artes
                de Wynwood, el Distrito de Diseño, los teatros y museos
                internacionalmente aclamados del centro y los estadios deportivos de
                renombre mundial.
            </p>
        ),
        residencias: (
            <div>
                <p>
                    Una sola torre de 48 pisos que alberga 150 residencias, incluidos
                    penthouses y sky villas. St. Regis®  es una colección de
                    casas de 2 a 7 habitaciones que miden entre 2,616 y 7,391 pies
                    cuadrados. Pie. Con techos de 10 pies, tecnología inteligente
                    integrada y tocador en cada unidad. Este edificio ofrece mucho
                    espacio interior para comodidades y vistas despejadas del
                    horizonte de Miami, la Bahía de Biscayne y el Océano Atlántico.
                    También ofrece el servicio de mayordomo St. Regis®, servicios de
                    limpieza y privilegios de membresía global
                </p>
                <br></br>
                <br></br>
                <ul>
                    <li className="list-group-item">
                        Una colección de casas de dos a seis dormitorios.
                    </li>
                    <li className="list-group-item">
                        {" "}
                        Ascensor privado y vestíbulo de entrada para cada residencia.
                    </li>
                    <li className="list-group-item">
                        {" "}
                        Entrada de doble puerta en residencias selectas
                    </li>
                    <li className="list-group-item">
                        {" "}
                        Techos de aproximadamente 10'-6" con difusores lineales
                        integrados en la sala de estar
                    </li>
                    <li className="list-group-item">
                        {" "}
                        Pisos de piedra europeos personalizados en todas partes
                    </li>
                    <li className="list-group-item"> puertas de madera europeas</li>
                    <li className="list-group-item">
                        {" "}
                        Todas las casas cuentan con un tocador y un lavadero.
                    </li>
                    <li className="list-group-item"></li>
                    <li className="list-group-item">
                        {" "}
                        Tecnología integrada para el hogar inteligente
                    </li>
                    <li className="list-group-item">
                        {" "}
                        Cocina gourmet con gabinetes italianos personalizados diseñados
                        por Rockwell Group
                    </li>
                    <li className="list-group-item">
                        {" "}
                        Encimeras y salpicaderos de piedra natural.
                    </li>
                    <li className="list-group-item">
                        {" "}
                        Paquetes de electrodomésticos Sub-Zero y Wolf totalmente
                        integrados
                    </li>
                    <li className="list-group-item"> Suites principales y baño</li>
                </ul>
                <img
                    alt={"price list"}
                    src={"https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/st-regis/pricelist.jpg"}
                />
            </div>
        ),

        amenidades: (
            <ul className="list-group list-group-light">
                <li className="list-group-item">
                    Puerta cochera con una instalación de arte encargada y una fuente
                    de agua exclusiva
                </li>
                <li className="list-group-item">
                    {" "}
                    Lobby residencial privado atendido 24 horas al día, 7 días a la
                    semana
                </li>
                <li className="list-group-item"> Conserjería las 24 horas</li>
                <li className="list-group-item">
                    {" "}
                    Servicio de valet parking en el lugar y espacios de
                    estacionamiento sin asistencia con entrada privada
                </li>
                <li className="list-group-item">
                    {" "}
                    Estaciones de carga para vehículos eléctricos
                </li>
                <li className="list-group-item">
                    {" "}
                    Servicio de coche de casa de lujo.
                </li>
                <li className="list-group-item">
                    {" "}
                    Aproximadamente 50000 pies cuadrados de espacio interior y
                    exterior para servicios
                </li>
                <li className="list-group-item">
                    {" "}
                    Restaurante de alta cocina en el hotel a cargo del chef Fabio
                    Trabocchi, galardonado con una estrella Michelin
                </li>
                <li className="list-group-item">
                    {" "}
                    Acceso exclusivo al club de playa
                </li>
                <li className="list-group-item">
                    {" "}
                    Terrenos tipo parque y exuberantes terrazas de la firma suiza de
                    diseño paisajístico Enea Garden Design
                </li>
                <li className="list-group-item">
                    {" "}
                    Sala multimedia de última generación
                </li>

                <li className="list-group-item">
                    {" "}
                    Centro de negocios con cafetería y salas de conferencias
                </li>
                <li className="list-group-item">
                    {" "}
                    Sala de entretenimiento infantil
                </li>
                <li className="list-group-item">
                    {" "}
                    Salón de videojuegos para adolescentes
                </li>
                <li className="list-group-item">
                    {" "}
                    Simulador multideporte programable
                </li>
                <li className="list-group-item">
                    {" "}
                    Salón equipado para todos los servicios de belleza.
                </li>
                <li className="list-group-item">
                    {" "}
                    Servicios de peluquería y paseo de perros en spa para mascotas.
                </li>
                <li className="list-group-item">
                    {" "}
                    Almacenamiento privado seguro y climatizado
                </li>
                <li className="list-group-item"> bicicletas de casa</li>
                <li className="list-group-item"> Puerto deportivo privado</li>
            </ul>
        ),
    };
    return StRegisObject;
}
