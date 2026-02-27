import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
const TheStandardResidences = new Desarrollo(MidtownMiami());
TheStandardResidences.area = MidtownMiami();
TheStandardResidences.titulo = "The Standard Residences";
TheStandardResidences.nombre = "the-standard-residences";
TheStandardResidences.introduccion = [
  "The Standard Residences cuenta con 12 pisos, con 228 residencias que van desde estudios hasta configuraciones de 2 dormitorios. Este es el primer proyecto residencial de la famosa marca de hoteles, The Standard. Todas las ubicaciones tienen que ver con el ambiente y la experiencia... Disfruta del ambiente y la cultura Ãºnicos de la marca como nunca antes. Las comodidades incluyen Internet de alta velocidad, amplio vestÃ­bulo, spa para mascotas, terraza en la azotea con piscina y cabaÃ±as, sala de proyecciÃ³n privada, piso social, gimnasio, espacios de trabajo conjunto y mÃ¡s. Las residencias estÃ¡ndar Midtown Miami estÃ¡n a pasos de todo; Midtown es el vecindario mÃ¡s amigable para los peatones de Miami, conectado con el Design District en el norte y Wynwood en el sur. Este increÃ­ble condominio no solo fue diseÃ±ado por la galardonada firma Arquitectonica, sino que tambiÃ©n ofrece increÃ­bles vistas de la ciudad.",
];
TheStandardResidences.numberOfImages = 25;
TheStandardResidences.direccion = "3100 NE 1st Avenue, Miami, FL 33137";
TheStandardResidences.typeOfUnits =
  "Estudios, apartamentos de 1, 2 y 3 habitaciones";
TheStandardResidences.numberOfUnits = 228;
TheStandardResidences.numberOfFloors = 12;
TheStandardResidences.ubicacion = "3100 NE 1st Avenue, Miami, FL 33137";
TheStandardResidences.estimatedCompletionYear = 2025;
TheStandardResidences.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>AÃ±o de apertura</dt>
        <dd>{TheStandardResidences.estimatedCompletionYear}</dd>
        <dt>NÃºmero de pisos</dt>
        <dd>{TheStandardResidences.numberOfFloors}</dd>
        <dt>NÃºmero de unidades</dt>
        <dd>{TheStandardResidences.numberOfUnits}</dd>
        <dt>Tipo de unidades</dt>
        <dd>{TheStandardResidences.typeOfUnits}</dd>
        <dt>ubicacion</dt>
        <dd>
          <address>{TheStandardResidences.ubicacion}</address>
        </dd>
      </dl>
    </>
  ),
  amenidades: (
    <>
      <ul>
        <li>
          12 pisos que incluyen 40,000 pies cuadrados de servicios y 14,000
          pies cuadrados de tiendas minoristas en la planta baja
        </li>
        <li>
          Ascensores de alta velocidad con acceso controlado a la propiedad.
        </li>
        <li>
          Programa de alquiler flexible con estadÃ­a mÃ­nima de 30 dÃ­as, 12 veces
          al aÃ±o
        </li>
        <li>
          Servicio de Internet de alta velocidad y WiFi en toda la propiedad.
        </li>
        <li>
          Amplio vestÃ­bulo con techos altos de doble altura y espacios sociales
          cuidadosamente personalizados, incluido The Standard CafÃ©
        </li>
        <li> Comunidad que admite mascotas con spa de aseo</li>
        <li>
          Terraza en la azotea estilo centro turÃ­stico con jardines tropicales
          que cuenta con una piscina de 60 pies de largo, spa con hidromasaje,
          cabaÃ±as junto a la piscina y duchas de lluvia al aire libre.
        </li>
        <li>
          Restaurante y bar en la azotea de inspiraciÃ³n global con servicio
          junto a la piscina y entrega a pedido a residencias
        </li>
        <li>
          Sala de proyecciÃ³n privada de alta definiciÃ³n con equipos
          audiovisuales de Ãºltima generaciÃ³n.
        </li>
        <li>
          Piso social vibrante con amplio salÃ³n, bar de karaoke y cocina y bar
          gourmet, todos con vista a la cancha de pickleball, ideal para
          cualquier celebraciÃ³n o reuniÃ³n.
        </li>
        <li>
          Piso deportivo con gimnasio de Ãºltima generaciÃ³n totalmente equipado,
          terraza de yoga al aire libre, estudio de yoga y meditaciÃ³n interior,
          saunas de infrarrojos y cancha de pickleball.
        </li>
        <li>
          Piso de trabajo con espacios de coworking, cuatro salas grandes y sala
          de juntas privada con internet de alta velocidad
        </li>
        <li> Espacios para guardar bicicletas.</li>
        <li> VestÃ­bulo atendido las 24 horas y servicios de conserjerÃ­a.</li>
      </ul>
    </>
  ),
  residencias: (
    <>
  <ul>
<li>Los acabados instalados a la medida, diseÃ±ados por Urban Robot, elevan la experiencia humana y brindan un sentido de pertenencia</li>
<li>Los elegantes planos de planta abiertos y los techos de nueve pies (2.74 m) de altura invitan el ingreso de la luz natural a travÃ©s de las puertas corredizas de vidrio enteras </li>
<li>Las cocinas contemporÃ¡neas abiertas con electrodomÃ©sticos de primera lÃ­nea son elegantes y funcionales </li>
<li>El piso de cerÃ¡mica de primera calidad inspirado en madera ofrece una sofisticaciÃ³n atemporal </li>
<li>Los baÃ±os a la medida se destacan por envidiables tocadores dobles y ducha con dos rociadores; todo acentuado por elegantes accesorios en tonos de bronce </li>
<li>Lavadora y secadora de alta eficiencia </li>
<li>Las terrazas privadas al aire libre en ciertas residencias se conjugan a la perfecciÃ³n con la energÃ­a vibrante de Midtown Miami</li>
</ul>
    </>
  ),
};
TheStandardResidences.slogan = "Un estÃ¡ndar superior";
TheStandardResidences.banner = true;

export default TheStandardResidences;

