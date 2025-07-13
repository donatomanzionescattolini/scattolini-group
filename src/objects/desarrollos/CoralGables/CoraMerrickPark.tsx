import Desarrollo from "../../../models/desarrollos/Desarrollo";
import CoralGables from "../../areas/CoralGables";

const CoraMerrickPark = new Desarrollo();
CoraMerrickPark.nombre = "cora-merrick-park";

CoraMerrickPark.titulo = "Cora Merrick Park";
CoraMerrickPark.ubicación="4241 Aurora Street, Coral Gables, FL 33146";
CoraMerrickPark.direccion = "4241 Aurora Street, Coral Gables, FL 33146";
CoraMerrickPark.area = CoralGables();
CoraMerrickPark.banner = true;
CoraMerrickPark.caracteristicas = {
  edificio: <><dl>
   <dt>Dirección</dt>
    <dd>4241 Aurora Street, Coral Gables, FL 33146</dd>
    <dt>Año de Finalización</dt>
    <dd>2028</dd>
    <dt>Unidades</dt>
    <dd>74</dd>
    <dt>Habitaciones</dt>
    <dd>1 a 3</dd>
    <dt>Numero de Pisos</dt>
    <dd>12</dd>
    <dt>Tipo de Residencia</dt>
    <dd>Condominio</dd>
    <dt>Estilo de Residencia</dt>
    <dd>Contemporáneo</dd>
    </dl></>,
  residencias:<><ul>
  <li >Diseño mediterráneo contemporáneo</li>
  <li >De una a tres habitaciones con residencias de estudio, que van desde 678 a 2,651 pies cuadrados</li>
  <li >Combinaciones de unidades flexibles disponibles para crear espacios habitables más grandes y personalizados</li>
  <li >Alturas de techo de 10'</li>
  <li >Diseños llenos de luz con ventanas del piso al techo</li>
  <li >Amplios balcones privados</li>
  <li >Espaciosas terrazas, hasta 1,118 pies cuadrados, disponibles 
en planos de planta selectos</li>
  <li >Sistemas avanzados de purificación de aire y agua</li>
  <li >Encimeras de piedra con accesorios de diseñador</li>
  <li >Amplias islas de cocina</li>
  <li >Gabinetes italianos de diseño</li>
  <li >Conjunto de electrodomésticos Sub-Zero/Wolf</li>
  <li >Sofisticados suelos de piedra en toda la vivienda</li>
  <li >Armarios de diseñador terminados</li>
  <li >La terapia de luz roja incorporada en 
Baños principales para mejorar el bienestar</li>
</ul></>,
  amenidades: <>
      <ul>
        <li>La primera pista de pádel de Coral Gable</li>
        <li>Spa con sauna, baño de vapor y baño de agua fría y caliente</li>
        <li>Gimnasio de última generación</li>
        <li>
          Terraza con piscina al aire libre que incluye cabañas privadas y
          cocina al aire libre
        </li>
        <li>Terraza de yoga</li>
        <li>Salones de coworking</li>
        <li>Sala de conferencias</li>
        <li>Salas de estar con cocina interior</li>
        <li>Salón de té</li>
        <li>Guardabicicletas</li>
        <li>Sala de conferencias</li>
        <li>Gimnasio con equipo de bienestar y recuperación</li>
        <li>Gran vestíbulo</li>
        <li>Parque exuberante de 5,000 pies cuadrados</li>
        <li>Cora busca obtener la Certificación de Construcción WELL</li>
        <li>Sistemas avanzados de purificación de aire y agua</li>
        <li>
          El diseño biofílico de Arquitectonica integra la naturaleza y los
          materiales naturales, inspirando comunidad y movimiento
        </li>
        <li>
          El diseño acústico de Cora promueve la comodidad y la tranquilidad,
          reduciendo el ruido y mejorando la productividad
        </li>
        <li>
          La innovadora tecnología de iluminación maximiza la luz natural y
          proporciona una iluminación equilibrada para espacios vibrantes y bien
          iluminados
        </li>
        <li>
          Cora Materiales no tóxicos con pinturas, recubrimientos y selladores
          con bajo contenido de COV para mejorar la calidad del aire y reducir
          la exposición a toxinas
        </li>
        <li>
          {" "}
          Los productos de bienestar seleccionados en todas las áreas comunes
          respaldan las elecciones saludables
        </li>
        <li>
          Tecnología de monitoreo de salud en el hogar inteligente de vanguardia
        </li>
      </ul>
    </>
};
CoraMerrickPark.numberOfImages = 45;
CoraMerrickPark.introduccion = [
  "Cora Merrick Park es un condominio residencial de lujo. Su fachada presenta acentos clásicos de bronce, estuco texturizado y piedra oolita combinados con elegantes columnas tradicionales. Cora ofrece solo 12 pisos con 74 residencias súper exclusivas de 1 a 3 recámaras, con acabados espectaculares y apartamentos totalmente amueblados diseñados por el famoso Robot Urbano. Las comodidades de primera línea proporcionarán una piscina, gimnasio, sauna, sala club, centro de negocios, áreas sociales y mucho más. Los residentes de Cora están perfectamente conectados con las tiendas en Merrick Park, restaurantes al aire libre y opciones de bienestar.",
];
CoraMerrickPark.numberOfFloors = 12;
CoraMerrickPark.numberOfUnits = 74;
CoraMerrickPark.añoDeConstrucciónOFinalización = 2028;
CoraMerrickPark.numberOfRooms = "1 a 3";
CoraMerrickPark.subtitulo=<p>Estilo Boutique<br/>de lujo y serenidad</p>;
export default CoraMerrickPark;