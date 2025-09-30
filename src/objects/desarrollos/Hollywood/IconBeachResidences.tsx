import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Hollywood from "../../areas/Hollywood";

const IconBeachResidences = new Desarrollo(Hollywood());
IconBeachResidences.titulo = "Icon Beach Residences";
IconBeachResidences.nombre = "icon-beach-residences";

IconBeachResidences.introduccion = [
  "Bienvenidos a Icon Beach Residences, un conjunto de residencias que incluyen desde una hasta tres habitaciones y representan un exquisito e innovador estilo de vida frente al mar, con impresionantes vistas al agua, amplios balcones, acceso a una marina y a una gama de servicios pensados para que la vida en casa sea más cómoda y placentera.",
  "Situadas en un tranquilo enclave de la maravillosa y soleada costa de Hollywood, Icon Beach Residences reflejan una visión sofisticada e innovadora de la vida frente al mar, con extraordinarias vistas al océano Atlántico y a los canales de Hollywood Beach. Con una ubicación perfecta, entre la energía cosmopolita de Miami y la serena elegancia de Fort Lauderdale, las residencias ofrecen acceso a una marina y a un club de playa con todos los servicios, además de vistas a los paisajes marinos más espectaculares de Hollywood.",
];
IconBeachResidences.area = Hollywood();
IconBeachResidences.banner = true;
IconBeachResidences.añoDeConstrucciónOFinalización = 2027;
IconBeachResidences.numberOfImages = 40;
IconBeachResidences.numberOfFloors = 37;
IconBeachResidences.numberOfUnits = 350;
IconBeachResidences.typeOfUnits = "condos";
IconBeachResidences.direccion = "3724 S Ocean Dr, Hollywood, FL 33019, USA";
IconBeachResidences.ubicación = "3724 S Ocean Dr, Hollywood, FL 33019, USA";
IconBeachResidences.numberOfRooms = {start: 1, end: 3};
IconBeachResidences.numberOfBathrooms = {start: 1, end: 3.5};



IconBeachResidences.caracteristicas = {
  amenidades: (
    <>
      <ul>
        <li>Amplia y espectacular piscina con solárium y elegantes cabañas</li>
        <li>
          Gimnasio de última generación de 279 metros cuadrados, con salas de
          yoga, bicicletas y avanzados equipos para hacer ejercicios de cardio y
          entrenamiento con pesas.
        </li>
        <li>
          Spa y wellness center para relajarse, con tina de inmersión fría,
          cuarto de sauna y jacuzzi para restablecer el equilibrio del cuerpo y
          la mente
        </li>
        <li>
          Amplio salón de reuniones para los residentes y bar de cocteles al
          aire libre para celebrar y brindar
        </li>
        <li>
          Cine al aire libre para noches de cine con la familia y los amigos
        </li>
        <li>
          Espacio reservable para eventos, con vistas a los canales de Hollywood
          Beach
        </li>
        <li>
          Espacios con un paisajismo impecable, incluyendo una terraza para
          disfrutar del atardecer con un área de césped para hacer yoga y
          ejercicios al aire libre
        </li>
        <li>
          Acceso a una fabulosa marina y uso de un club de playa* con todos los
          servicios y vistas a los hermosos paisajes marinos de Hollywood
        </li>
      </ul>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>
           Extraordinarias vistas del océano Atlántico y de los canales de
          Hollywood Beach
        </li>
        <li> - 38 plantas con 350 viviendas, diseñadas por Meyer Davis</li>
        <li>
          Amplios balcones privados con puertas corredizas de vidrio que van de
          piso a techo
        </li>
        <li>
          Habitaciones principales espaciosas y con buena ventilación, llenas de
          luz natural y decoradas con emblemáticos detalles marítimos en una
          paleta cálida y minimalista
        </li>
        <li>
          Cocinas gourmet de Meyer Davis con gabinetes italianos personalizados,
          amplias islas de cocina y encimeras de porcelana importada, en dos
          combinaciones de colores a elegir
        </li>
        <li>
          Electrodomésticos Bosch y Thermador de alta gama, incluyendo
          refrigerador, placa de inducción, horno, horno rápido y lavavajillas
        </li>
        <li>
          Baños principales estilo spa, equipados con elegantes bañeras y
          accesorios de Kohler y Hansgrohe
        </li>
        <li>Vestidores espaciosos y meticulosamente diseñados</li>
      </ul>
    </>
  ),
  edificio: <><dl>
    <dt>Ubicación</dt><dd>{IconBeachResidences.ubicación}</dd>
    <dt>Número de Pisos</dt><dd>{IconBeachResidences.numberOfFloors}</dd>
    <dt>Número de Unidades</dt><dd>{IconBeachResidences.numberOfUnits}</dd>
    <dt>Tipo de Unidades</dt><dd>{IconBeachResidences.typeOfUnits}</dd>
    <dt>Año de Construcción o Finalización</dt><dd>{IconBeachResidences.añoDeConstrucciónOFinalización }</dd>
    <dt>Número de Habitaciones</dt><dd>1 a 3</dd>
    </dl></>,
};
export default IconBeachResidences;