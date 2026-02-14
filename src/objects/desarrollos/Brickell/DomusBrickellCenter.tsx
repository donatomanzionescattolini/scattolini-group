import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Brickell from "../../areas/Brickell";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function DomusBrickellCenter(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("domusBrickellCenter", lang);
  const domusBrickellCenterObject = new Desarrollo(Brickell());

  domusBrickellCenterObject.nombre = "domus-brickell-center";
  domusBrickellCenterObject.titulo = getLocalizedField("titulo", "Domus Brickell Center");
  domusBrickellCenterObject.subtitulo = getLocalizedField("subtitulo", "La cima del lujo en el corazón de Brickell");
  domusBrickellCenterObject.numberOfImages = 36;
domusBrickellCenterObject.introduccion = getLocalizedArray("introduccion", [
  "Domus Brickell Center es un desarrollo residencial contemporáneo que ofrece estudios, pisos de uno y dos dormitorios, totalmente amueblados y con estilo, equipados con comodidades de hotel y propiedad flexible, ubicado perfectamente en el vibrante barrio de Brickell en Miami. Esta torre de 35 pisos cuenta con 579 residencias diseñadas por MC+G Architecture y desarrolladas por North Development, una alianza entre Edifica (Perú) y Oak Capital (Miami).",
  "Domus Brickell Center redefine el estilo de vida en Miami al combinar lujo, ubicación y estilo bajo un mismo techo. Proporciona una combinación única de comodidades tipo hotel con la privacidad y conveniencia de una residencia personal. Es una oportunidad ideal para compradores locales, inversionistas internacionales y nómadas digitales que buscan un espacio moderno y flexible con un alto potencial de rentabilidad y administración profesional.",
]);
domusBrickellCenterObject.numberOfFloors = 35;
domusBrickellCenterObject.numberOfUnits = 579;
domusBrickellCenterObject.caracteristicas = {
  amenidades: (
    <>
      <p>
        {getLocalizedField("caracteristicas.amenidades.descripcion", "Domus Brickell Center ofrece comodidades únicas para satisfacer las necesidades de sus residentes, como una piscina en la azotea, bar, área de parrilla, salón, alimentos y bebidas en la planta baja de 143 metros cuadrados, amplio lobby con aproximadamente 371 metros cuadrados de espacio para reuniones, parlantes con sonido envolvente y ambiente. Música, edificio que admite mascotas, estaciones de carga para vehículos eléctricos, bicicletas compartidas Domus, sistema de filtración de aire especializado en todas las áreas comunes y más...")}
      </p>
      <ul>
        <li>{getLocalizedField("caracteristicas.amenidades.salonVestibulo", "Salón del vestíbulo 'The Cypress Room'")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.cafe", "Café con barista y panadería")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.vinos", "Bar de vinos con terraza cubierta")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.mercado", "Mercado artesanal")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.patio", "Patio externo en un jardín cubierto")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.gimnasio", "Gimnasio con equipos de última generación")}</li>
        <li>
          {getLocalizedField("caracteristicas.amenidades.piscinaAzotea", "Piscina en la azotea con vistas panorámicas de la ciudad y la bahia.")}
        </li>
        <li>{getLocalizedField("caracteristicas.amenidades.cabanas", "Cabañas con camas de día")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.jacuzzi", "Jacuzzi")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.yoga", "Espacio de yoga en la azotea")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.barAzotea", "Bar en la azotea")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.coworking", "Amplio espacio de coworking")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.reuniones", "Sala de reuniones/conferencias")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.bienvenida", "Sala de bienvenida las 24 horas")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.valet", "Servicio de valet las 24 horas")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.atencion", "Línea de atención al cliente las 24 horas")}</li>
        <li>
          {getLocalizedField("caracteristicas.amenidades.operador", "Operador hotelero con amplia experiencia para supervisar el manejo de las unidades")}
        </li>
        <li>{getLocalizedField("caracteristicas.amenidades.limpieza", "Equipo de limpieza con experiencia")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.hoteleria", "en hotelería")}</li>
        <li>{getLocalizedField("caracteristicas.amenidades.portal", "Portal de alquiler para propietarios")}</li>
      </ul>
    </>
  ),
  residencias: (
    <>
      {" "}
      <p>
        {getLocalizedField("caracteristicas.residencias.descripcion", "¡Todas las residencias de lujo en Domus Brickell Center incluyen planos de planta espaciosos, techos de más de 2.7 metros, ventanas resistentes al impacto del viento, balcones, elegantes gabinetes de cocina, electrodomésticos de cocina de acero inoxidable, Agua filtrada por rayos ultravioleta y más! Disfrute de vistas espectaculares de los lujosos edificios de Brickell y del centro y de todo el horizonte de Miami.")}
      </p>
      <ul>
        <li>
          {getLocalizedField("caracteristicas.residencias.terminados", "Entregados completamente terminados y amueblados Balcón privado en todos los departamentos")}
        </li>{" "}
        <li> {getLocalizedField("caracteristicas.residencias.cerradura", "Sistema de cerradura inteligente con entrada sin llave")}</li>{" "}
        <li> {getLocalizedField("caracteristicas.residencias.cocinaEquipada", "Cocina equipada con electrodomésticos marca Bosch")}</li>{" "}
        <li> {getLocalizedField("caracteristicas.residencias.accesorios", "Accesorios modernos")}</li> <li> {getLocalizedField("caracteristicas.residencias.cubiertas", "Cubiertas de cuarzo")}</li>{" "}
        <li>{getLocalizedField("caracteristicas.residencias.lavadora", "Lavadora/Secadora")}</li>{" "}
        <li>{getLocalizedField("caracteristicas.residencias.aguaFiltrada", "Agua filtrada por rayos ultravioleta en todas los departamentos")}</li>{" "}
      </ul>
    </>
  ),
  edificio: (
    <>
      <dl>
        <dt>{getLocalizedField("caracteristicas.edificio.ubicacion", "Ubicación")}</dt>
        <dd>{getLocalizedField("direccion", "1034 SW 2nd Ave, Miami FL 33130")}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.pisos", "Pisos")}</dt>
        <dd>{getLocalizedField("caracteristicas.edificio.pisosCount", "35")}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.residencias", "Número de Residencias")}</dt>
        <dd>{getLocalizedField("caracteristicas.edificio.residenciasCount", "579")}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.tiposResidencias", "Tipos de Residencias")}</dt>
        <dd>{getLocalizedField("caracteristicas.edificio.tiposResidenciasDesc", "Estudios, 1 y 2 dormitorios")}</dd>
        <dt>{getLocalizedField("caracteristicas.edificio.finalizacion", "Año de Finalizacion de la Construcción")}</dt>
        <dd>{getLocalizedField("caracteristicas.edificio.finalizacionYear", "2027")}</dd>
      </dl>
      <ul>
        <li>{getLocalizedField("caracteristicas.edificio.techos", "Techos con más de 9 pies de altura en todos los departamentos")}</li>{" "}
        <li>
          {getLocalizedField("caracteristicas.edificio.vestibuloAmplio", "Vestíbulo amplio con aproximadamente 390 metros cuadrados de espacio de reunión y ventanas altas de piso a techo")}
        </li>{" "}
        <li>{getLocalizedField("caracteristicas.edificio.altavoces", "Altavoces con musica ambiental en el Cypress Room")}</li>{" "}
        <li>{getLocalizedField("caracteristicas.edificio.petFriendly", "Pet Friendly (acceptamos mascotas)")}</li>{" "}
        <li>{getLocalizedField("caracteristicas.edificio.ventanas", "Ventanas resistentes al impacto del viento")}</li>{" "}
        <li>{getLocalizedField("caracteristicas.edificio.estaciones", "Estaciones de carga para vehículos eléctricos")}</li>{" "}
        <li>{getLocalizedField("caracteristicas.edificio.bicicletas", "Bicicletas para el uso de los residentes")}</li>{" "}
        <li>{getLocalizedField("caracteristicas.edificio.aire", "Aire acondicionado filtrado en todas las ")}</li>{" "}
      </ul>
    </>
  ),
};

domusBrickellCenterObject.ubicación = getLocalizedField("ubicacion", "1034 SW 2nd Ave, Miami FL 33130");
domusBrickellCenterObject.banner = true;
domusBrickellCenterObject.estimatedCompletionYear = 2027;

return domusBrickellCenterObject;
}
