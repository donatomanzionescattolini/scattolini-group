import Constructora from "../../../models/constructora/Constructora.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Edgewater from "../../areas/Edgewater.tsx";

export default function ElleResidences() {

    const ElleObject = new Desarrollo();
    ElleObject.nombre = "Elle Residences ";
    ElleObject.area= Edgewater();
    ElleObject.constructora = [new Constructora("Vertical Developments"),new Constructora("Urban Network Capital Group")];
    ElleObject.
    ElleObject.añoDeConstrucciónOFinalización=  2027;
    ElleObject.numberOfUnits = 180;
    ElleObject.typeOfUnits = "Pied-à-Terre";
    ElleObject.piesCuadrados = {start: 610, end:995};
    ElleObject.numberOfRooms = {start: 1, end: 2};


    ElleObject.caracteristicas = {
        edificio: (
            <>
                <ul>

                    <li>180 Residencias</li>
                    <li>De 1 a 2 dormitorios</li>
                    <li>Ubicación: 3618 NE 5th Ave, Miami, FL 33137, USA</li>
                    <li><ul> <b>Distancias</b>
                        <li> Tiendas Bal Harbour: a 7 minutos en coche</li><li>Centro comercial Aventura: 15 minutos en coche  Brickell: 20 minutos en coche  Aeropuerto de Miami: 20 minutos en coche  Playa Sur: 12 minutos en coche  Wynwood: 20 minutos en coche</li>
                    </ul></li>


                </ul>
            </>
        ),
        residencias: (
            <>
                <p className="lead text-justify">Sea dueño de su pied-à-terre en el corazón de Miami.
                    Inspiradas en las páginas de ELLE Decor, las residencias combinan la elegancia francesa moderna y contemporánea de mediados de siglo con un toque de lujo tropical, para darle un nuevo giro a la vida en el sur de Florida.</p>
                <ul>
                    <li>Planos de planta bien pensados ​​con techos altos, vistas al agua y al horizonte</li>
                    <li>Grandes suites en el último piso con techos de 11 pies</li>
                    <li>Ventanas y puertas de impacto de piso a techo</li>
                    <li>Cocinas elegantes con el conjunto de electrodomésticos Miele</li>
                    <li>Gabinetes y carpintería italiana importada de Italkraft</li>
                    <li>Exquisitas encimeras de cuarzo</li>
                    <li>Accesorios y acabados de latón modernos</li>
                    <li>Sistemas inteligentes de control climático</li>
                    <li>Lavadora/secadora de alta eficiencia</li>
                    <li>Armarios empotrados</li>
                    <li>Opción de utilizar plataformas de alquiler flexibles o utilizar un programa de alquiler totalmente gestionado</li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    <li><p className="lead">Descubra una colección de comodidades de estilo de vida seleccionadas para una vida elegante y sin esfuerzo. No es sólo un pied-à-terre. ELLE es su salón, cafetería, club de piscina, parque infantil y más.</p></li>
                    <ul>
                        <b>Vestíbulo</b>
                        <li>Gran lobby de doble altura</li>
                        <li>Servicios de check-in para huéspedes</li>
                        <li>Servicio de aparcacoches</li>
                        <li>conserjería las 24 horas</li>
                        <li>Seguridad y control las 24 horas</li>
                        <li>Limpieza y mantenimiento las 24 horas.</li>
                        <li>oficina de gestión</li>
                        <li>Sala de correo y paquetes</li>
                        <li>Boutique minorista</li>
                        <li>Casa de bicicletas y almacenamiento de bicicletas.</li>
                        <li>Wi-Fi de alta velocidad</li>
                    </ul>
                    <ul>
                        <b>Terraza</b><br />
                        <li>Terraza estilo centro turístico inspirada en la Riviera francesa</li>
                        <li>Piscina del resort con exposición de norte a sur</li>
                        <li>Cabañas privadas y tumbonas</li>
                        <li>Cocina de verano gourmet con bar y sala de estar al aire libre</li>
                        <li>cine al aire libre</li>
                        <li>Canchas de tejo y petanca</li>
                        <li>Gimnasio de última generación con programación de fitness de marca</li>
                        <li>Gimnasio al aire libre y césped para yoga con jardín de meditación, spa y baño de agua fría</li>
                        <li>Spa con sauna, vapor, ducha de sensaciones y pared de sal</li>
                        <li>Sala privada para tratamientos de salón y bienestar.</li>
                    </ul>


                    <ul>
                        <b>La Azotea de Sommet</b>
                        <li>Piscina del centro vacacional con vistas despejadas al norte, este y oeste</li>
                        <li>Terraza con cabañas privadas</li>
                        <li>Maison Club para residentes con biblioteca, sala de escucha, salón con bar y espacio de entretenimiento</li>
                        <li>Sala de cine</li>
                    </ul>
                    <br />
                    <strong>Gymnasio moderno</strong>
                    <br />
                    <li>
                        Puerto Deportivo Acuático con Servicio de Kayak y Paddle Board
                        y almacenamiento</li>
                    <li>Acceso a Baywalk a lo largo del agua</li>
                    <li>Restaurante con vistas a la bahía</li>
                    <li>Café con vistas a la bahía y terrazas al aire libre</li>
                    <li>Servicios de valet parking</li>
                    <li>Conserje personal y recepcionista las 24 horas</li>
                    <li>Sala de paquetes para entregas</li>
                    <li>Pozo de fuego</li>
                    <li>Piscina lounge</li>
                    <li>Zonas de solárium</li>
                    <li>Spa con hidromasaje y terraza solarium privada</li>
                    <li>Jardín de meditación</li>
                    <li>
                        Servicio de tabla de paddle surf con guarda y acceso a privado
                    </li>
                    <li>Muelle en Bayside</li>
                    <li>Divanes junto a la piscina</li>
                    <li>Zona del observatorio del telescopio</li>
                    <li>Parque para perros</li>
                    <br />
                    <strong>Vestíbulo del Cielo</strong>
                    <br />
                    <li>Sala de estar exclusiva para adultos con exterior</li>
                    <li>terraza con vistas a la bahía</li>
                    <li>Ascensor y vestíbulo privados</li>
                    <li>Sala privada de bodega</li>
                    <li>
                        Espacios de trabajo privados + centro de negocios + sala de
                        conferencias
                    </li>
                    <br />
                    <strong>Al Aire Libre</strong>
                    <br />
                    <li>Piscina de tamaño semiolímpico</li>
                    <li>Spa con hidromasaje al aire libre</li>
                    <li>Divanes junto a la piscina</li>
                    <li>Zona de chapoteo para niños</li>
                    <li>Zona de juegos infantiles</li>
                    <li>Minigolf</li>
                    <br />
                    <strong>Interior</strong>
                    <br />
                    <li>Salón de fiestas con cocina privada y exterior</li>
                    <li>patio con zona de barbacoa</li>
                    <li>Barbacoa al aire libre con comedor privado</li>
                    <li>Teatro con audiovisuales profesionales y teatro</li>
                    <li>asientos de estilo</li>
                    <li>
                        Sala de juegos para niños con área de juegos al aire libre
                    </li>
                    <li>Salón para adolescentes y centro de juegos</li>
                    <br />
                    <strong>Gimnasio y Spa</strong>
                    <br />
                    <li>
                        Gimnasio de última generación con vistas al nivel del jardín
                    </li>
                    <li>con zona de ejercicio exterior</li>
                    <li>Canchas de tenis</li>
                    <li>Pista de pádel</li>
                    <li>Cancha de baloncesto</li>
                    <li>
                        Área de salón de yoga con jardín de meditación al aire libre
                    </li>
                    <li>Zona de relajación Spa</li>
                    <li>Salas y servicios de masajes exclusivos</li>
                    <li>Sauna</li>
                    <li>Baño de vapor</li>
                    <li>Terraza solárium con cabañas</li>
                </ul>
            </>
        ),
    };

    ElleObject.titulo = " Elle Residences";
    ElleObject.introduccion = ["Viva en la pasarela de los distritos culturales, de moda y de diseño de Miami en ELLE Residences , inspirado en 80 años de moda y decoración que marcan tendencia, completamente terminado, perfectamente amueblado y listo para vivir"];

    ElleObject.direccion = "3618 NE 5th Ave, Miami, FL 33137, USA";
    ElleObject.añoDeConstrucciónOFinalización = 2022;

    ElleObject.subtitulo = "El Nuevo Hogar del Alto Estilo";
    ElleObject.numberOfImages =27 ;
    ElleObject.banner = true;
    ElleObject.area = Edgewater();
    return ElleObject;
}