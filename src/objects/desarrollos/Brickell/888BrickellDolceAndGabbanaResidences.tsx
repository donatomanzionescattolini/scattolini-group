import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Brickell from "../../areas/Brickell";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function DolceAndGabbanaResidences(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("888-brickell-dolce-and-gabbana-residences", lang);
  const DolceAndGabbanaResidences = new Desarrollo(Brickell());
  DolceAndGabbanaResidences.titulo = getLocalizedField("titulo", "888 Brickell Dolce & Gabbana Residences");
  DolceAndGabbanaResidences.slogan = getLocalizedField("slogan", "Para Los Nuevos Románticos");
  DolceAndGabbanaResidences.nombre = getLocalizedField("nombre", "888-brickell-dolce-and-gabbana-residences");

  DolceAndGabbanaResidences.introduccion = getLocalizedArray("introduccion", [
    "Adéntrate en la cima del lujo italiano con 888 Brickell by Dolce & Gabbana..."
  ]);
  DolceAndGabbanaResidences.area = Brickell();
  DolceAndGabbanaResidences.banner = getLocalizedField("banner", "true") === "true";
  DolceAndGabbanaResidences.estimatedCompletionYear = parseInt(getLocalizedField("estimatedCompletionYear", "2028"), 10) || 2028;
  DolceAndGabbanaResidences.numberOfImages = parseInt(getLocalizedField("numberOfImages", "21"), 10) || 21;
  DolceAndGabbanaResidences.numberOfFloors = parseInt(getLocalizedField("numberOfFloors", "90"), 10) || 90;
  DolceAndGabbanaResidences.numberOfUnits = parseInt(getLocalizedField("numberOfUnits", "259"), 10) || 259;
  DolceAndGabbanaResidences.direccion = getLocalizedField("direccion", "888 Brickell Ave, Miami, FL 33131, USA");
  DolceAndGabbanaResidences.ubicación = getLocalizedField("ubicacion", DolceAndGabbanaResidences.direccion);
  DolceAndGabbanaResidences.numberOfRooms = { start: parseInt(getLocalizedField("numberOfRooms.start", "1"), 10) || 1, end: parseInt(getLocalizedField("numberOfRooms.end", "4"), 10) || 4 };

  DolceAndGabbanaResidences.caracteristicas = {
  amenidades: (
    <>
      <ul>
        <li>
          De pie arriba con 1.049' (90 pisos), 888 marca una altura récord para
          Miami
        </li>
        <li>
          Un tour arquitectónico-de-forzada revestida de marfil cálido
          travertino y enmarcado con alto brillo, acero negro
        </li>
        <li>Porte cocháre llegada con servicio valet</li>
        <li>
          Figura personalizada 8 colgantes de vidrio murano adornan la fachada
          inferior
        </li>
        <li>vestíbulo de dos pisos con salón, café y bar</li>
        <li>Rolls Royce coche casero</li>
        <li>Flagship restaurante de alta cocina en planta baja</li>
        <li>Corte de pádel de doble altura en cubierta</li>
        <li>Centro de fitness exansivo</li>
        <li>Yoga &amp; Pilates</li>
        <li>Piscinas de inmersión fría y caliente</li>
        <li>Servicio de spa de recuperación, terapia intravenosa y masajes</li>
        <li>Barra de jugo orgánica</li>
        <li>Salón</li>
        <li>Estante solar con sillas de salón</li>
        <li>Bar con servicio en la piscina</li>
        <li>Restaurante interior/al aire libre</li>
        <li>Cabanas privadas</li>
        <li>Servicio de toallas</li>
        <li>Piscina de vuelta</li>
        <li>Espacios de salón</li>
        <li>Salas de reuniones y espacio para eventos</li>
        <li>
          5.000 sf de doble altura, salón libre de columna con terraza al aire
          libre
        </li>
      </ul>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>
          Extraordinarias vistas del Océano Atlántico, Bahía de Biscayne, Centro
          y Miami Beach
        </li>
        <li>Acceso privado de ascensor con llave</li>
        <li>
          Residencias llave en mano con muebles, accesorios y obras de arte
          totalmente personalizados
        </li>
        <li>Losas de techo de hasta 11'</li>
        <li>Juliet balcones en todo</li>
        <li>Gio Ponti inspiró suelos de piedra terrazo</li>
        <li>Cocinas y baños a medida</li>
        <li>
          Divisor de habitación personalizada en madera lacada hoja de plata y
          vidrio helado, también funciona como TV
        </li>
        <li>
          Grandes salas de estar abiertas a la esquina privada de logias de
          esquina con asa eléctrica y nevera
        </li>
        <li>Los armarios de un propietario encerrables en suite principal</li>
        <li>
          Tecnología de hogar inteligente en residencia con acceso al conserje
        </li>
        <li>Miele lavadora y secadora</li>
        <li>Diseño de cocina personalizado</li>
        <li>Suzero-Wolf refrigerador/congelador y vino frigorífico</li>
        <li>Lavavajillas de tela</li>
        <li>El grifo Dornbracht en acabado platino mate matte</li>
        <li>Isla de cocina de ónax blanco de dos niveles</li>
        <li>
          Gama de cocina Bertazzoni, horno de pared y calentamiento cajón en un
          acabado de acero inoxidable
        </li>
        <li>
          Armarios de madera de burla blanqueada inferior con ocultos bordes
          biselados
        </li>
        <li>Estropeado reveses</li>
        <li>Apegar garaje</li>
        <li>Tachada de piedra personalizada en los baños primarios</li>
        <li>Fantini se ducha de lluvia</li>
        <li>Control de ducha termostática</li>
        <li>Acostumbrado la vanidad de cristal de Murano se tejer</li>
      </ul>
    </>
  ),
  edificio: (
    <>
      <dl>
        <dt>Ubicación</dt>
        <dd>{DolceAndGabbanaResidences.ubicación}</dd>
        <dt>Número de Pisos</dt>
        <dd>{DolceAndGabbanaResidences.numberOfFloors}</dd>
        <dt>Número de Unidades</dt>
        <dd>{DolceAndGabbanaResidences.numberOfUnits}</dd>
        <dt>Año de Construcción o Finalización</dt>
        <dd>{DolceAndGabbanaResidences.estimatedCompletionYear}</dd>
        <dt>Número de Habitaciones</dt>
        <dd>{DolceAndGabbanaResidences.numberOfRooms.start} a {DolceAndGabbanaResidences.numberOfRooms.end}</dd>
      </dl>
    </>
  ),
};
  return DolceAndGabbanaResidences;
}