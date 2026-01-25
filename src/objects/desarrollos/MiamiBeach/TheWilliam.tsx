import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";


const TheWilliam = new Desarrollo(MiamiBeach());

TheWilliam.nombre = "the-william";
TheWilliam.titulo = "The William | North Miami Beach";
TheWilliam.slogan =
    <div className={"text-muted text-md-center font-style-italic font-variant-smallcaps"}>Todo Miami<br/>Perfectamente A
        Tu Alcance</div>;
TheWilliam.introduccion = ["The William es una elegante residencia de 26 pisos, ubicada en uno de los distritos mejor conectados de la ciudad. Con una ubicación ideal cerca de tiendas y restaurantes de primer nivel, playas vírgenes del Atlántico, canales, centros comerciales, aeropuertos, estadios deportivos y eventos culturales, ofrece un estilo de vida de comodidad y prestigio. Cada casa ofrece cautivadoras vistas del amanecer y el atardecer, mientras que sus comodidades cuidadosamente diseñadas brindan espacios para el disfrute y la conexión familiar. A solo minutos de la impresionante costa de Sunny Isles, esta ubicación representa la vida moderna en un entorno privilegiado."];

TheWilliam.estimatedCompletionYear = 2029;
TheWilliam.banner = true;
TheWilliam.numberOfImages = 19;


TheWilliam.direccion = "2040 NE 163rd Street, North Miami Beach, FL 33162";
TheWilliam.numberOfFloors = 26;
TheWilliam.numberOfUnits = 374;
TheWilliam.typeOfUnits = "Studios";
TheWilliam.numberOfRooms = {start: 1, end: 3};
TheWilliam.caracteristicas = {
    edificio: <>
        <dl>
            <dt>Dirección</dt>
            <dd>{TheWilliam.direccion}</dd>
            <dt>A</dt>
            <dd>{TheWilliam.direccion}</dd>
            <dt>Número De Pisos</dt>
            <dd>{TheWilliam.numberOfFloors}</dd>
            <dt>Número de Unidades</dt>
            <dd>{TheWilliam.numberOfUnits}</dd>
            <dt>Tipo De Unidades</dt>
            <dd>{TheWilliam.typeOfUnits}</dd>
            <dt>Número de Cuartos</dt>
            <dd>{TheWilliam.numberOfRooms.start} a {TheWilliam.numberOfRooms.end}</dd>

        </dl>
    </>, residencias: <>
        <ul>
            <li>Diseños tipo estudios y hasta tres habitaciones</li>
            <li>Ventanas de suelo a techo para disfrutar de la luz natural y las vistas</li>
            <li>Balcones amplios con barandales de cristal</li>
            <li>Pisos de porcelana importada</li>
            <li>Lavadora y secadora en cada unidad</li>
            <br/>
            <li><b>Cocinas</b></li>
            <br/>
            <li>Gabinetes Italkraft personalizados en acabado nogal tabaco, acentuados con puertas de vidrio tintado
            </li>
            <li>Accesorios Hansgrohe de cromo negro cepillado</li>
            <li>Mesadas y revestimientos de cuarzo</li>
            <li>Cocina de última generación con un conjunto</li>
            <li>integrado de electrodomésticos Bosch</li>
            <br/>
            <dt>Baños</dt>
            <br/>
            <li>Gabinetes contemporáneos de Italkraft,</li>
            <li>diseñados para la funcionalidad y elegancia</li>
            <li>Accesorios Hansgrohe de cromo negro cepillado</li>
            <li>Pisos y paredes de porcelanato importado</li>
            <li>Mesadas y revestimientos de cuarzo</li>
        </ul>
    </>,
    amenidades: <>
        <ul>
            <li>Un total de casi 4,000 m2 en dos pisos</li>
            <li>completos de amenidades y experiencias</li>

            <li>Jardines exuberantes que evocan una sensación de tranquilidad</li>

            <li>Servicio de valet 24/7</li>

            <li>Lobby y espacio de galería</li>

            <li>Obras de arte cuidadosamente seleccionadas en las áreas comunes</li>

            <li>WiFi de alta velocidad en todas las áreas comunes</li>

            <li>Lockers inteligentes para facilitar la entrega de paquetes</li>

            <li>Siete pisos de estacionamiento seguro con estaciones de carga para vehículos eléctricos</li>

            <li>Área diseñada especialmente para mascotas en la azotea</li>

            <li>Recepción con personal profesional y concierge</li>

            <li>Seguridad las 24 horas del día</li>
            <li>En The William, tienes la total libertad para expresar tu estilo, seguir tus instintos, pasar tiempo con
                las personas que más te importan y saber que estás exactamente donde tienes que estar.
            </li>
            <dt>Piso 9</dt>

            <li>Piscina estilo resort con terraza para disfrutar del sol</li>

            <li>Área de comedor al aire libre con asadores y cocina</li>

            <li>Bar al aire libre y terraza con fogatas</li>

            <li>Gimnasio</li>

            <li>Estudio de yoga</li>

            <li>Zona de entrenamiento y recuperación al aire libre</li>

            <li>Vestidores</li>

            <li>Salas de spa para reservas privadas</li>

            <li>Sala y terraza de coworking y biblioteca</li>

            <li>Salón interior y área de cafetería</li>

            <li>Mercado de autoservicio</li>

            <li>Sala de juegos interactiva y parque infantil</li>
            <dt>Azotea Piso 26</dt>

            <li>Salón para ver el atardecer con terraza para yoga y hamacas</li>

            <li>Cocina y area al aire libre con barbacoas</li>

            <li>Cancha de Pickleball</li>

            <li>Sala de estar con bar y juegos para socializar o simplemente relajarse en la azotea</li>

            <li>Coral Lounge para reuniones y pequeños eventos de residentes</li>

            <li>Área para mascotas y estética canina</li>
        </ul>
    </>
};

export default TheWilliam;