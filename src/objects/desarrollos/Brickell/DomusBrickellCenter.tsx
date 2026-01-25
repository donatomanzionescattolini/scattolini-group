import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Brickell from "../../areas/Brickell";

const DomusBrickellCenter = new Desarrollo(Brickell());

DomusBrickellCenter.nombre = "domus-brickell-center";
DomusBrickellCenter.titulo = "Domus Brickell Center";
DomusBrickellCenter.numberOfImages = 36;
DomusBrickellCenter.introduccion = [
  "Domus Brickell Center es un desarrollo residencial contemporáneo que ofrece estudios, pisos de uno y dos dormitorios, totalmente amueblados y con estilo, equipados con comodidades de hotel y propiedad flexible, ubicado perfectamente en el vibrante barrio de Brickell en Miami. Esta torre de 35 pisos cuenta con 579 residencias diseñadas por MC+G Architecture y desarrolladas por North Development, una alianza entre Edifica (Perú) y Oak Capital (Miami).",
  "Domus Brickell Center redefine el estilo de vida en Miami al combinar lujo, ubicación y estilo bajo un mismo techo. Proporciona una combinación única de comodidades tipo hotel con la privacidad y conveniencia de una residencia personal. Es una oportunidad ideal para compradores locales, inversionistas internacionales y nómadas digitales que buscan un espacio moderno y flexible con un alto potencial de rentabilidad y administración profesional.",
];
DomusBrickellCenter.numberOfFloors = 35;
DomusBrickellCenter.numberOfUnits = 579;
DomusBrickellCenter.caracteristicas = {
  amenidades: (
    <>
      <p>
        Domus Brickell Center ofrece comodidades únicas para satisfacer las
        necesidades de sus residentes, como una piscina en la azotea, bar, área
        de parrilla, salón, alimentos y bebidas en la planta baja de 143 metros
        cuadrados, amplio lobby con aproximadamente 371 metros cuadrados de
        espacio para reuniones, parlantes con sonido envolvente y ambiente.
        Música, edificio que admite mascotas, estaciones de carga para vehículos
        eléctricos, bicicletas compartidas Domus, sistema de filtración de aire
        especializado en todas las áreas comunes y más...
      </p>
      <ul>
        <li>Salón del vestíbulo "The Cypress Room"</li>
        <li>Café con barista y panadería</li>
        <li>Bar de vinos con terraza cubierta</li>
        <li>Mercado artesanal</li>
        <li>Patio externo en un jardín cubierto</li>
        <li>Gimnasio con equipos de última generación</li>
        <li>
          Piscina en la azotea con vistas panorámicas de la ciudad y la bahia.
        </li>
        <li>Cabañas con camas de día</li>
        <li>Jacuzzi</li>
        <li>Espacio de yoga en la azotea</li>
        <li>Bar en la azotea</li>
        <li>Amplio espacio de coworking</li>
        <li>Sala de reuniones/conferencias</li>
        <li>Sala de bienvenida las 24 horas</li>
        <li>Servicio de valet las 24 horas</li>
        <li>Línea de atención al cliente las 24 horas</li>
        <li>
          Operador hotelero con amplia experiencia para supervisar el manejo de
          las unidades
        </li>
        <li>Equipo de limpieza con experiencia</li>
        <li>en hotelería</li>
        <li>Portal de alquiler para propietarios</li>
      </ul>
    </>
  ),
  residencias: (
    <>
      {" "}
      <p>
        ¡Todas las residencias de lujo en Domus Brickell Center incluyen planos
        de planta espaciosos, techos de más de 2.7 metros, ventanas resistentes
        al impacto del viento, balcones, elegantes gabinetes de cocina,
        electrodomésticos de cocina de acero inoxidable, Agua filtrada por rayos
        ultravioleta y más! Disfrute de vistas espectaculares de los lujosos
        edificios de Brickell y del centro y de todo el horizonte de Miami.
      </p>
      <ul>
        <li>
          Entregados completamente terminados y amueblados Balcón privado en
          todos los departamentos
        </li>{" "}
        <li> Sistema de cerradura inteligente con entrada sin llave</li>{" "}
        <li> Cocina equipada con electrodomésticos marca Bosch</li>{" "}
        <li> Accesorios modernos</li> <li> Cubiertas de cuarzo </li>{" "}
        <li>Lavadora/Secadora</li>{" "}
        <li>Agua filtrada por rayos ultravioleta en todas los departamentos</li>{" "}
      </ul>
    </>
  ),
  edificio: (
    <>
      <dl>
        <dt>Ubicación</dt>
        <dd>1034 SW 2nd Ave, Miami FL 33130</dd>
        <dt>Pisos</dt>
        <dd>35</dd>
        <dt>Número de Residencias</dt>
        <dd>579</dd>
        <dt>Tipos de Residencias</dt>
        <dd>Estudios, 1 y 2 dormitorios</dd>
        <dt>Año de Finalizacion de la Construcción</dt>
        <dd>2027</dd>
      </dl>
      <ul>
        <li>Techos con más de 9 pies de altura en todos los departamentos</li>{" "}
        <li>
          Vestíbulo amplio con aproximadamente 390 metros cuadrados de espacio
          de reunión y ventanas altas de piso a techo
        </li>{" "}
        <li>Altavoces con musica ambiental en el Cypress Room</li>{" "}
        <li>Pet Friendly (acceptamos mascotas)</li>{" "}
        <li>Ventanas resistentes al impacto del viento</li>{" "}
        <li>Estaciones de carga para vehículos eléctricos</li>{" "}
        <li>Bicicletas para el uso de los residentes</li>{" "}
        <li>Aire acondicionado filtrado en todas las </li>{" "}
      </ul>
    </>
  ),
};

DomusBrickellCenter.ubicación = "1034 SW 2nd Ave, Miami FL 33130";
DomusBrickellCenter.banner = true;
DomusBrickellCenter.estimatedCompletionYear = 2027;

export default DomusBrickellCenter;
