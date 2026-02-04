import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Hollywood from "../../areas/Hollywood.tsx";

const GaiaResidences = new Desarrollo(Hollywood());
GaiaResidences.nombre = "gaia-residences";
GaiaResidences.titulo = "Gaia Residences";
GaiaResidences.slogan="Un lugar para crecer, una vista que inspira";

GaiaResidences.introduccion = ["Gaia Residences es una comunidad de condominios de dos torres en Hollywood con 238 residencias con impresionantes vistas del Océano Atlántico y el Hollywood Beach Golf Club. Las comodidades incluyen una piscina, terraza al aire libre, estaciones de barbacoa, jardines zen, spa, estudio de yoga, salón deportivo y espacios de trabajo conjunto. Ubicado entre Miami y Fort Lauderdale, la ubicación combina la energía de la vida de la ciudad con la tranquilidad de un refugio de golf."];
GaiaResidences.banner= true;
GaiaResidences.numberOfImages = 17;

GaiaResidences.direccion = '401 N Federal Hwy, Hollywood, FL 33020, Estados Unidos.';
GaiaResidences.estimatedCompletionYear = 2027;
GaiaResidences.numberOfFloors = 21;
GaiaResidences.numberOfUnits = 238;
GaiaResidences.typeOfUnits = 'Condominios';
GaiaResidences.numberOfRooms = '1, 2 y 3 habitaciones';

GaiaResidences.caracteristicas={
    edificio: <>
        <dl>
            <dt>Dirección</dt>
            <dd>{GaiaResidences.direccion}</dd>
            <dt>Año De Construcción O Finalización</dt>
            <dd>{GaiaResidences.estimatedCompletionYear}</dd>
            <dt>Número De Pisos</dt>
            <dd>{GaiaResidences.numberOfFloors}</dd>
            <dt>Número de Unidades</dt>
            <dd>{GaiaResidences.numberOfUnits}</dd>
            <dt>Tipo De Unidades</dt>
            <dd>{GaiaResidences.typeOfUnits}</dd>
            <dt>Número de cuartos</dt>
            <dd>{GaiaResidences.numberOfRooms as string}</dd>
        </dl>
    </>,
    amenidades:<>
        <ul>
            <li>Interiores y comodidades curados por IDDI con muebles de RH</li>
            <li>Retiros exclusivos en la azotea</li>
            <li>Cerca de 2 acres de comodidades de estilo de vida interiores y exteriores</li>
            <li>Recepción conserje/recepción 24 horas</li>
            <li>Servicios de valet y estaciones de carga de vehículos eléctricos</li>
            <li>Almacenamiento de bicicletas</li>
            <li>Piscina climatizada con estante, cabañas junto a la piscina y chaise lounges</li>
            <li>Jardín de agua sereno con sofá cama tranquilo</li>
            <li>Pabellón con cocina de verano, estaciones de barbacoa privadas y asientos sociales</li>
            <li>Terrazas para comer al aire libre, bar mojado con elegantes asientos en el mostrador</li>
            <li>Jardín zen de hamaca tropical</li>
            <li>Club de Residentes con zonas de ocio interior y exterior</li>
            <li>Salón de billar con barra húmeda completa y asientos de banquete</li>
            <li>Comedor interior privado con zona de despensa/preparación de mayordomo y terraza exterior</li>
            <li>Salón deportivo con bar mojado totalmente equipado, pantallas de observación y áreas sociales dedicadas</li>
            <li>Sala de proyección de medios con asientos sofisticados</li>
            <li>Bar húmedo con elegantes asientos en el mostrador Indulgente calefacción spa de piscina</li>
            <li>Experiencia gastronómica al aire libre</li>
            <li>Zona de fitness interior de última generación</li>
            <li>Equipo de fuerza y cardio de vanguardia</li>
            <li>Jardín de fitness al aire libre tropical</li>
            <li>Estudio de yoga/barre/pilates</li>
            <li>Sala de vapor, sauna seca y piscinas de inmersión</li>
            <li>Gran vestíbulo lleno de luz con vegetación integrada</li>
            <li>Salón de coworking</li>
        </ul>
        </>,
    residencias: <>
        <ul>
            <li>Impresionantes vistas del Hollywood Beach Golf Club y el Océano Atlántico</li>
            <li>Cocinas italianas modernas impecablemente elaboradas</li>
            <li>Suelo de baldosas de porcelana de gran formato importado de lujo</li>
            <li>Contrachoques de cuarzo sin costuras y encimeras de baño</li>
            <li>Electrodomésticos Bosch perfectamente integrados</li>
            <li>Gabinete europeo de cierre automático</li>
            <li>Las ventanas de piso a techo invitan a la luz natural y se abren a vistas panorámicas del mar, la ciudad o la vegetación</li>
            <li>Espacios de vida aireados con alturas de techo de 9-13 pies</li>
            <li>Las terrazas privadas extienden su espacio de vida en el paisaje</li>
            <li>Paquetes de muebles personalizados a medida disponibles</li>
            <li>Espejo retroiluminado en los baños</li>
        </ul>
    </>
};

export default GaiaResidences;