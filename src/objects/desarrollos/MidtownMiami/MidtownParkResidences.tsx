import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";

const MidtownParkResidences = new Desarrollo(MidtownMiami);
MidtownParkResidences.titulo = "Midtown Park Residences";
MidtownParkResidences.nombre = "midtown-park-residences";
MidtownParkResidences.introduccion = [
  "Midtown Park es un animado centro de cinco acres las 24 horas del día en Midtown Miami, que une Design District, Wynwood y Edgewater. Este espacio de uso mixto combina oficinas, casas de lujo y áreas públicas vibrantes, fomentando la creatividad y la comunidad. Con más de 100,000 pies cuadrados de tiendas y restaurantes a nivel de calle, mejora el ambiente transitable. El desarrollo cuenta con un acre de espacios verdes, incluidos los parques East y West y dos paseos sombreados. Una entrada empedrada en Midtown Boulevard agrega comodidad, mientras que el tercer piso alberga un club de raqueta de ocho canchas para recreación de primer nivel. Las oficinas boutique atraen a firmas creativas, prácticas legales y profesionales de las finanzas, enriqueciendo la escena dinámica de Midtown.",
];
MidtownParkResidences.slogan =
  "El mejor lugar para estar es ahora es el mejor lugar para vivir";
MidtownParkResidences.numberOfImages = 49;
MidtownParkResidences.ubicación = "2916 N Miami Ave, Miami, FL 33127 ";
MidtownParkResidences.numberOfFloors = 30;
MidtownParkResidences.numberOfUnits = 290;
MidtownParkResidences.typeOfUnits = "Estudios, 1-5 habitaciones";
MidtownParkResidences.slogan = "La Vida Exuberante Comienza Aquí";
MidtownParkResidences.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>Ubicación</dt>
        <dd>{MidtownParkResidences.ubicación}</dd>
        <dt>Año de apertura</dt>
        <dd>{MidtownParkResidences.añoDeConstrucciónOFinalización}</dd>
        <dt>Numero de pisos</dt>
        <dd>{MidtownParkResidences.numberOfFloors}</dd>
        <dt>Numero de unidades</dt>
        <dd>{MidtownParkResidences.numberOfUnits}</dd>
        <dt>Tipo de unidades</dt>
        <dd>{MidtownParkResidences.typeOfUnits}</dd>
      </dl>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>
          Amplios estudios de concepto abierto, completamente terminados,
          residencias de una y dos habitaciones, con alturas de techo de más de
          9 pies
        </li>
        <li>
          Colección privada de residencias tipo penthouse con salas de estar en
          esquina de doble altura y techos de 20 pies, diseños de cuatro y cinco
          habitaciones, terrazas en la azotea, jardines y piscinas privadas.
        </li>
        <li>
          Balcones privados envolventes de gran tamaño con pisos terminados y
          barandillas de vidrio.
        </li>
        <li>
          Ventanas y puertas corredizas de piso a techo tintadas, resistentes a
          impactos y de bajo consumo energético
        </li>
        <li>
          Pisos de porcelanato de madera importada en todas las residencias.
        </li>
        <li>
          Cocinas diseñadas por Meyer Davis Studio con gabinetes italianos,
          encimeras de cuarzo importadas y detalles de tiradores de latón con
          electrodomésticos Sub-Zero Wolf integrados y grifos Hansgrohe.
        </li>
        <li>
          Baños principales con duchas dobles con mampara de vidrio, accesorios
          de latón Hansgrohe y paredes de cerámica Jade exclusivas diseñadas por
          Meyer Davis Studio
        </li>
        <li>
          Las residencias de tres habitaciones y de colección privada incluyen
          lavanderías completas, baños de Proper y bañeras independientes.
        </li>
      </ul>
    </>
  ),
  amenidades: (
    <ul>
      <li>
        Impresionante vestíbulo y espacio de galería de 5.000 pies cuadrados
        repleto de arte, diseñado por Meyer Davis Studio, con un espectacular
        techo de 16 pies, una recepción escultural con servicio de conserjería
        las 24 horas, los 7 días de la semana, y 150 pies de frente de vidrio
        con vista a Midtown Boulevard, East Park y los paseos.
      </li>
      <li>
        Conexiones convenientes al spa para mascotas, sala de correo y sala de
        entrega.
      </li>
      <li>
        La cafetería de la planta baja junto al vestíbulo ofrece un lugar para
        recargar energías por la mañana con café y pasteles antes de dirigirse
        al vecindario.
      </li>
      <li>
        Puerta cochera de llegada frente al East Park con estación de valet
        parking y acceso a la variedad de boutiques, restaurantes gourmet y
        cafés de Midtown Park.
      </li>

      <li>
        Sala East Lounge con cocina de chef, televisores de pantalla grande,
        asientos cómodos y conexión a terrazas al aire libre.
      </li>
      <li>Salón de eventos para reuniones familiares íntimas y eventos.</li>
      <li>
        Salón de negocios y coworking con mostradores de café, pasteles y jugos
        naturales.
      </li>
      <li>Sala de juegos para niños junto a la piscina.</li>
      <li>
        Gimnasio de 3.000 pies cuadrados y sala de pilates con equipos de última
        generación
      </li>
      <li>
        Spa, vestuarios, baño de vapor, sauna y conexión a terrazas exteriores.
      </li>
      <li>Golf virtual y sala de proyecciones.</li>

      <li>
        Un conserje cultural ofrece una extensa red local y un profundo
        conocimiento de la cultura de Miami, ofreciendo acceso preferencial a
        deportes locales, moda, arte y otros eventos de alto perfil.
      </li>
      <li>
        Un calendario completo de reuniones sociales, fitness, bienestar y mucho
        más.
      </li>
      <li>
        Servicios a domicilio a pedido, como entrega de comestibles, catering,
        servicio culinario personalizado, limpieza, servicio de lavandería y
        más.
      </li>
      <li>
        Servicios mientras está fuera, incluido el cuidado de mascotas, cuidado
        de plantas y mantenimiento de rutina del hogar*
      </li>
      <li>Masajes a la carta y tratamientos de spa.</li>
      <li>Entrenamiento personalizado y clases de yoga.</li>
      <li>
        Servicios de chef gourmet para organizar cenas privadas y eventos en el
        séptimo piso.
      </li>
      <li>
        Como propietario de una residencia adecuada, usted forma parte de una
        comunidad exclusiva con acceso a experiencias exclusivas, momentos
        culturales y comodidades pensadas para definir la vida.
      </li>
      <li>
        Sus beneficios exclusivos incluyen: tarifas preferenciales en
        habitaciones, tratamientos de spa y comidas en toda la cartera de Proper
        Hospitality.
      </li>
      <li>
        Reconocimiento VIP con cortesías personalizadas durante toda su estancia
      </li>
      <li>
        Acceso exclusivo a Proper Presents: nuestra serie de eventos culturales
        exclusivos a los que solo se puede asistir con invitación
      </li>
    </ul>
  ),
};

MidtownParkResidences.banner = true;

export default MidtownParkResidences;
