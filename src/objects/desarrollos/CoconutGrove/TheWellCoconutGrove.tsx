import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import CoconutGrove from "../../areas/CoconutGrove.tsx";

const TheWellCoconutGrove = new Desarrollo(CoconutGrove());
TheWellCoconutGrove.nombre = "the-well-coconut-grove";
TheWellCoconutGrove.titulo = "The Well | Coconut Grove";
TheWellCoconutGrove.banner = true;
TheWellCoconutGrove.slogan =
    <i><h6 className={"text-muted"}>El bienestar vive aquí</h6></i>;
TheWellCoconutGrove.introduccion = ["THE WELL Coconut Grove es tu santuario de bienestar holístico. Aquí, el bienestar es la esencia de tu vida, ofreciéndote tiempo y espacio para relajarte, recargar energías y reconectar con lo que realmente importa: tu bienestar. Ubicado en el frondoso y arbolado vecindario de Coconut Grove, THE WELL está diseñado para apoyar tu estilo de vida equilibrado, permitiéndote vivir, trabajar y disfrutar en armonía con tu salud. Las residencias, que se integran a la perfección con el entorno, incluyen 194 casas únicas, desde cuatro casas adosadas hasta nueve lofts en planta baja, todas con amplios balcones privados, interiores abiertos y luminosos, y detalles personalizados que potencian la vitalidad, aumentan la energía y te ayudan a sentirte en tu mejor momento.\n" +
"\n"];
TheWellCoconutGrove.numberOfImages = 49;
TheWellCoconutGrove.numberOfUnits = 194;
TheWellCoconutGrove.numberOfFloors = 8;
TheWellCoconutGrove.typeOfUnits = "";
TheWellCoconutGrove.estimatedCompletionYear = 2028;
TheWellCoconutGrove.direccion = "2855 Tigertail Avenue, Coconut Grove, Florida 33133";
TheWellCoconutGrove.caracteristicas = {
    amenidades: (
        <>
            <ul>
                <li>Edificio boutique de 8 pisos con fachada de piedra coral que recuerda la arquitectura histórica de Coconut Grove</li>
                <li>Diseño de edificios ecológicos de Florida con certificación Silver y mentalidad sostenible</li>
                <li>194 residencias con 94 planos de planta distintos</li>
                <li>Vestíbulo de llegada de residentes sereno e inmerso en una luz natural difusa</li>
                <li>Diseño interior-exterior abierto y aireado</li>
                <li>Sensación holística de serenidad: aromaterapia sutil y jardines interiores restauradores</li>
                <li>Iluminación natural optimizada en todas partes</li>
                <li>Casas adosadas seleccionadas con acceso directo a la calle y entrada con jardín privado</li>
                <li>Lofts en planta baja con techo de 22' de altura en gran sala y pared de ventanas de doble altura</li>
                <li>Azotea de 40.000 pies cuadrados diseñada como un oasis de bienestar al aire libre con 2 piscinas, baños de agua fría y caliente, cancha de pickleball, Fitness Forest, bar y restaurante</li>
                <li>Club de bienestar de última generación de 13.000 pies cuadrados con cafetería, espacios sociales y de trabajo conjunto, bar de jugos frescos y refrigerios orgánicos</li>
                <li>Servicio de toallas frías y calientes a la llegada y a la salida</li>
                <li>Biblioteca del vestíbulo</li>
                <li>Jardín de hierbas exclusivo para residentes en el jardín del vestíbulo</li>
                <li>El jardín de té cuenta con un exuberante paisaje, un patio interior y exterior y un estanque de reflexión</li>
                <li>El invernadero lleno de luz exclusivo para residentes cuenta con vidrios de doble altura con vista al jardín de té interior y exterior con una silla de recuperación Shiftwave para restablecer el sistema nervioso después de un largo día y un salón de bienestar para trabajar en conjunto y recibir terapia intravenosa</li>
                <li>Centro de fitness exclusivo para residentes y estudio de movimiento para grupos pequeños, perfecto para entrenamiento privado</li>
                <li>Piscina exclusiva para residentes en la azotea con cabañas y tumbonas privadas</li>
                <li>Segunda piscina en la azotea y jacuzzi con cabañas privadas y tumbonas para residentes y miembros del THE WELL Club</li>
                <li>Comedor privado con cocina de catering y barra para eventos</li>
                <li>Seguridad las 24 horas</li>
                <li>Estaciones de carga de vehículos eléctricos disponibles para los residentes</li>
                <li>Servicio de valet parking</li>
                <li>Centro holístico de bienestar y fitness</li>
                <li>Estudio de movimiento consciente con yoga aéreo y pared de gong curativo</li>
                <li>Hermoso baño comunitario con vapor, sauna, baño de agua fría y caldarium</li>
                <li>Cámara hiperbárica</li>
                <li>Salón Vitality</li>
                <li>Estudio de entrenamiento y movimiento EMS</li>
                <li>Membresía a THE WELL Coconut Grove</li>
            </ul>
        </>
    ),
    edificio: <dl>
        <dt>Dirección</dt>
        <dd>{TheWellCoconutGrove.direccion}</dd>
        <dt>Año De Construcción O Finalización</dt>
        <dd>{TheWellCoconutGrove.estimatedCompletionYear}</dd>
        <dt>Número De Pisos</dt>
        <dd>{TheWellCoconutGrove.numberOfFloors}</dd>
        <dt>Número de Unidades</dt>
        <dd>{TheWellCoconutGrove.numberOfUnits}</dd>
    </dl>,
    residencias:
        <dl>
            <dt>Amenidades</dt>
            <dd>
                <ul>
                    <li>Amplios planos de planta (960-4200 pies cuadrados) con amplias ventanas de vidrio diseñadas pensando en la salud y el bienestar</li>
                    <li>Balcones o terrazas privadas en todas las residencias</li>
                    <li>Espacios flexibles en residencias selectas para prácticas de bienestar en el hogar, como meditación, ejercicios o masajes, con la opción de mejorar su experiencia a través de paquetes de bienestar personalizados</li>
                    <li>Pisos de madera de ingeniería neutra en todas partes</li>
                    <li>Los dormitorios principales cuentan con sistemas de vestidores italianos Italkraft con terapia de luz roja incorporada para mejorar la salud, la energía y el bienestar</li>
                    <li>Lavadoras y secadoras Samsung en cada unidad, con lavanderías exclusivas en unidades seleccionadas</li>
                </ul>
            </dd>
            <dt>Cocina</dt>
            <dd>
                <ul>
                    <li>Cocinas diseñadas por Meyer Davis con 2 opciones de diseño de color</li>
                    <li>Gabinetes italianos Italkraft personalizados</li>
                    <li>Islas de cocina o penínsulas en cada residencia con espacio para sentarse</li>
                    <li>Encimeras y salpicaderos de cuarcita</li>
                    <li>Fregadero de cocina Kraus Kore™, conocido por su diseño uniforme, su función y su espacio de trabajo equilibrado con accesorios integrados</li>
                    <li>Grifo extraíble Grohe con opciones de agua filtrada, fría, sin gas y con gas</li>
                    <li>Electrodomésticos Sub-Zero, Wolf y ASKO, incluido un refrigerador para vinos Sub-Zero integrado</li>
                    <li>Accesorios de cocina especiales: hervidor eléctrico, Nutri Bullet, robot de cocina Suvie y freidora de aire</li>
                </ul>
            </dd>
            <dt>Baño Principal</dt>
            <dd>
                <ul>
                    <li>Cabezal de ducha de lluvia Dornbracht con barra deslizante de pared incluida, con ducha de mano o ducha linfática</li>
                    <li>Duchas de vapor en residencias de 3 y 4 dormitorios</li>
                    <li>Bañeras independientes para aliviar músculos y articulaciones cansadas disponibles en unidades seleccionadas</li>
                    <li>Pisos de piedra natural y paredes de piedra revestida detrás de los tocadores principales</li>
                    <li>Tocadores de piedra natural con lavabos dobles y gabinetes italianos Italkraft personalizados</li>
                    <li>Espejos de tocador iluminados</li>
                </ul>
            </dd>
        </dl>
};

export default TheWellCoconutGrove;
