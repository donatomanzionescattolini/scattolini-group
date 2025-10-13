import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";

const TheStandardResidences = new Desarrollo(MidtownMiami);
TheStandardResidences.area = MidtownMiami;
TheStandardResidences.titulo = "The Standard Residences";
TheStandardResidences.nombre = "thestandardresidences";
TheStandardResidences.introduccion = [
  "The Standard Residences es un desarrollo residencial de lujo ubicado en el corazón de Midtown Miami, que ofrece un estilo de vida contemporáneo y sofisticado. Este exclusivo edificio combina diseño moderno con comodidades de primer nivel, creando un ambiente ideal para quienes buscan vivir en una de las zonas más vibrantes y dinámicas de la ciudad. Con una arquitectura elegante y espacios interiores cuidadosamente diseñados, The Standard Residences proporciona un refugio urbano donde la comodidad y el estilo se unen perfectamente.",
];
TheStandardResidences.numberOfImages = 25;
TheStandardResidences.direccion = "3100 NE 1st Avenue, Miami, FL 33137";
TheStandardResidences.typeOfUnits =
  "Estudios, apartamentos de 1, 2 y 3 habitaciones";
TheStandardResidences.numberOfUnits = 228;
TheStandardResidences.numberOfFloors = 12;
TheStandardResidences.ubicación = "3100 NE 1st Avenue, Miami, FL 33137";
TheStandardResidences.añoDeConstrucciónOFinalización = 2025;
TheStandardResidences.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>Año de apertura</dt>
        <dd>{TheStandardResidences.añoDeConstrucciónOFinalización}</dd>
        <dt>Número de pisos</dt>
        <dd>{TheStandardResidences.numberOfFloors}</dd>
        <dt>Número de unidades</dt>
        <dd>{TheStandardResidences.numberOfUnits}</dd>
        <dt>Tipo de unidades</dt>
        <dd>{TheStandardResidences.typeOfUnits}</dd>
        <dt>Ubicación</dt>
        <dd>
          <address>{TheStandardResidences.ubicación}</address>
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
          Programa de alquiler flexible con estadía mínima de 30 días, 12 veces
          al año
        </li>
        <li>
          Servicio de Internet de alta velocidad y WiFi en toda la propiedad.
        </li>
        <li>
          Amplio vestíbulo con techos altos de doble altura y espacios sociales
          cuidadosamente personalizados, incluido The Standard Café
        </li>
        <li> Comunidad que admite mascotas con spa de aseo</li>
        <li>
          Terraza en la azotea estilo centro turístico con jardines tropicales
          que cuenta con una piscina de 60 pies de largo, spa con hidromasaje,
          cabañas junto a la piscina y duchas de lluvia al aire libre.
        </li>
        <li>
          Restaurante y bar en la azotea de inspiración global con servicio
          junto a la piscina y entrega a pedido a residencias
        </li>
        <li>
          Sala de proyección privada de alta definición con equipos
          audiovisuales de última generación.
        </li>
        <li>
          Piso social vibrante con amplio salón, bar de karaoke y cocina y bar
          gourmet, todos con vista a la cancha de pickleball, ideal para
          cualquier celebración o reunión.
        </li>
        <li>
          Piso deportivo con gimnasio de última generación totalmente equipado,
          terraza de yoga al aire libre, estudio de yoga y meditación interior,
          saunas de infrarrojos y cancha de pickleball.
        </li>
        <li>
          Piso de trabajo con espacios de coworking, cuatro salas grandes y sala
          de juntas privada con internet de alta velocidad
        </li>
        <li> Espacios para guardar bicicletas.</li>
        <li> Vestíbulo atendido las 24 horas y servicios de conserjería.</li>
      </ul>
    </>
  ),
  residencias: (
    <>
  <ul>
<li>Los acabados instalados a la medida, diseñados por Urban Robot, elevan la experiencia humana y brindan un sentido de pertenencia</li>
<li>Los elegantes planos de planta abiertos y los techos de nueve pies (2.74 m) de altura invitan el ingreso de la luz natural a través de las puertas corredizas de vidrio enteras </li>
<li>Las cocinas contemporáneas abiertas con electrodomésticos de primera línea son elegantes y funcionales </li>
<li>El piso de cerámica de primera calidad inspirado en madera ofrece una sofisticación atemporal </li>
<li>Los baños a la medida se destacan por envidiables tocadores dobles y ducha con dos rociadores; todo acentuado por elegantes accesorios en tonos de bronce </li>
<li>Lavadora y secadora de alta eficiencia </li>
<li>Las terrazas privadas al aire libre en ciertas residencias se conjugan a la perfección con la energía vibrante de Midtown Miami</li>
</ul>
    </>
  ),
};
TheStandardResidences.slogan = "Un estándar superior";
TheStandardResidences.banner = true;

export default TheStandardResidences;
