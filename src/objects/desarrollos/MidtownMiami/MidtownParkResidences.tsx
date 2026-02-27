import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";
const MidtownParkResidences = new Desarrollo(MidtownMiami());
MidtownParkResidences.titulo = "Midtown Park Residences";
MidtownParkResidences.nombre = "midtown-park-residences";
MidtownParkResidences.introduccion = [
  "Midtown Park es un animado centro de cinco acres las 24 horas del dÃ­a en Midtown Miami, que une Design District, Wynwood y Edgewater. Este espacio de uso mixto combina oficinas, casas de lujo y Ã¡reas pÃºblicas vibrantes, fomentando la creatividad y la comunidad. Con mÃ¡s de 100,000 pies cuadrados de tiendas y restaurantes a nivel de calle, mejora el ambiente transitable. El desarrollo cuenta con un acre de espacios verdes, incluidos los parques East y West y dos paseos sombreados. Una entrada empedrada en Midtown Boulevard agrega comodidad, mientras que el tercer piso alberga un club de raqueta de ocho canchas para recreaciÃ³n de primer nivel. Las oficinas boutique atraen a firmas creativas, prÃ¡cticas legales y profesionales de las finanzas, enriqueciendo la escena dinÃ¡mica de Midtown.",
];
MidtownParkResidences.slogan =
  "El mejor lugar para estar es ahora es el mejor lugar para vivir";
MidtownParkResidences.numberOfImages = 49;
MidtownParkResidences.ubicacion = "2916 N Miami Ave, Miami, FL 33127 ";
MidtownParkResidences.numberOfFloors = 30;
MidtownParkResidences.numberOfUnits = 290;
MidtownParkResidences.typeOfUnits = "Estudios, 1-5 habitaciones";
MidtownParkResidences.slogan = "La Vida Exuberante Comienza AquÃ­";
MidtownParkResidences.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>ubicacion</dt>
        <dd>{MidtownParkResidences.ubicacion}</dd>
        <dt>AÃ±o de apertura</dt>
        <dd>{MidtownParkResidences.estimatedCompletionYear}</dd>
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
          residencias de una y dos habitaciones, con alturas de techo de mÃ¡s de
          9 pies
        </li>
        <li>
          ColecciÃ³n privada de residencias tipo penthouse con salas de estar en
          esquina de doble altura y techos de 20 pies, diseÃ±os de cuatro y cinco
          habitaciones, terrazas en la azotea, jardines y piscinas privadas.
        </li>
        <li>
          Balcones privados envolventes de gran tamaÃ±o con pisos terminados y
          barandillas de vidrio.
        </li>
        <li>
          Ventanas y puertas corredizas de piso a techo tintadas, resistentes a
          impactos y de bajo consumo energÃ©tico
        </li>
        <li>
          Pisos de porcelanato de madera importada en todas las residencias.
        </li>
        <li>
          Cocinas diseÃ±adas por Meyer Davis Studio con gabinetes italianos,
          encimeras de cuarzo importadas y detalles de tiradores de latÃ³n con
          electrodomÃ©sticos Sub-Zero Wolf integrados y grifos Hansgrohe.
        </li>
        <li>
          BaÃ±os principales con duchas dobles con mampara de vidrio, accesorios
          de latÃ³n Hansgrohe y paredes de cerÃ¡mica Jade exclusivas diseÃ±adas por
          Meyer Davis Studio
        </li>
        <li>
          Las residencias de tres habitaciones y de colecciÃ³n privada incluyen
          lavanderÃ­as completas, baÃ±os de Proper y baÃ±eras independientes.
        </li>
      </ul>
    </>
  ),
  amenidades: (
    <ul>
      <li>
        Impresionante vestÃ­bulo y espacio de galerÃ­a de 5.000 pies cuadrados
        repleto de arte, diseÃ±ado por Meyer Davis Studio, con un espectacular
        techo de 16 pies, una recepciÃ³n escultural con servicio de conserjerÃ­a
        las 24 horas, los 7 dÃ­as de la semana, y 150 pies de frente de vidrio
        con vista a Midtown Boulevard, East Park y los paseos.
      </li>
      <li>
        Conexiones convenientes al spa para mascotas, sala de correo y sala de
        entrega.
      </li>
      <li>
        La cafeterÃ­a de la planta baja junto al vestÃ­bulo ofrece un lugar para
        recargar energÃ­as por la maÃ±ana con cafÃ© y pasteles antes de dirigirse
        al vecindario.
      </li>
      <li>
        Puerta cochera de llegada frente al East Park con estaciÃ³n de valet
        parking y acceso a la variedad de boutiques, restaurantes gourmet y
        cafÃ©s de Midtown Park.
      </li>

      <li>
        Sala East Lounge con cocina de chef, televisores de pantalla grande,
        asientos cÃ³modos y conexiÃ³n a terrazas al aire libre.
      </li>
      <li>SalÃ³n de eventos para reuniones familiares Ã­ntimas y eventos.</li>
      <li>
        SalÃ³n de negocios y coworking con mostradores de cafÃ©, pasteles y jugos
        naturales.
      </li>
      <li>Sala de juegos para niÃ±os junto a la piscina.</li>
      <li>
        Gimnasio de 3.000 pies cuadrados y sala de pilates con equipos de Ãºltima
        generaciÃ³n
      </li>
      <li>
        Spa, vestuarios, baÃ±o de vapor, sauna y conexiÃ³n a terrazas exteriores.
      </li>
      <li>Golf virtual y sala de proyecciones.</li>

      <li>
        Un conserje cultural ofrece una extensa red local y un profundo
        conocimiento de la cultura de Miami, ofreciendo acceso preferencial a
        deportes locales, moda, arte y otros eventos de alto perfil.
      </li>
      <li>
        Un calendario completo de reuniones sociales, fitness, bienestar y mucho
        mÃ¡s.
      </li>
      <li>
        Servicios a domicilio a pedido, como entrega de comestibles, catering,
        servicio culinario personalizado, limpieza, servicio de lavanderÃ­a y
        mÃ¡s.
      </li>
      <li>
        Servicios mientras estÃ¡ fuera, incluido el cuidado de mascotas, cuidado
        de plantas y mantenimiento de rutina del hogar*
      </li>
      <li>Masajes a la carta y tratamientos de spa.</li>
      <li>Entrenamiento personalizado y clases de yoga.</li>
      <li>
        Servicios de chef gourmet para organizar cenas privadas y eventos en el
        sÃ©ptimo piso.
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
        Reconocimiento VIP con cortesÃ­as personalizadas durante toda su estancia
      </li>
      <li>
        Acceso exclusivo a Proper Presents: nuestra serie de eventos culturales
        exclusivos a los que solo se puede asistir con invitaciÃ³n
      </li>
    </ul>
  ),
};

MidtownParkResidences.banner = true;

export default MidtownParkResidences;

