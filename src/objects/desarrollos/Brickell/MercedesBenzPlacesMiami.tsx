import React from 'react'
import Desarrollo from '../../../models/desarrollos/Desarrollo'
import Brickell from '../../areas/Brickell'
import { getDesarrolloI18n } from '../useDesarrolloI18n'

export default function MercedesBenzPlacesMiami(lang: "en" | "es" = "es") {
  const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n('mercedes-benz-places-miami', lang)
  const MercedesBenzPlacesObject = new Desarrollo(Brickell());
  MercedesBenzPlacesObject.area = Brickell();
  MercedesBenzPlacesObject.titulo = getLocalizedField('titulo', 'Mercedes-Benz Places Miami');
  MercedesBenzPlacesObject.slogan = getLocalizedField('slogan', 'Miami, Living, Elevated');
  MercedesBenzPlacesObject.caracteristicas = {
    edificio: <><ul><li>Pisos: 64</li><li>Residencias: 791</li><li>Ubicación: 1133 SW 2nd Ave, Miami, FL 3313</li></ul></>,
    residencias: <><ul>
      <b><big>Interiores</big></b>
      <li>    Ventanas de piso a techo de hasta 10'</li>
      <li>    Terrazas de 5' de profundidad</li>
      <li>    Pisos de madera de nogal diseñados en todas partes</li>
      <li>    Lavadora y secadora Miele</li>
      <li>    Luminarias personalizadas en acabado cromado</li>
      <li>    Tecnología integrada en el hogar </li>
      <b>Cocina</b>
      <li>    Cocinas diseñadas a medida por Woods Bagot que cuentan con zócalos y rejillas de cromo pulido e iluminación oculta debajo de los gabinetes.</li>
      <li>    Gabinetes de roble rojo teñidos de blanco intenso</li>
      <li>    Metal envuelto en un acabado oscuro.</li>
      <li>    Encimeras de piedra negra</li>
      <li>    Islas totalmente personalizadas con gabinetes lacados en negro y mostrador de comedor.</li>
      <li>    Salpicadero de espejo grabado y teñido con pantalla de tecnología integrada</li>
      <li>    Accesorios de plomería personalizados en acabado cromado.</li>
      <li>    Conjunto totalmente integrado de electrodomésticos Miele que incluye: refrigerador, placa de inducción, horno de convección, lavavajillas, refrigerador para vinos* y horno rápido</li>
      <b>Bano Principal</b>
      <li>    Ducha de mármol Nero Marquina o Bianco Gioia con cabezal de ducha de lluvia totalmente integrado, repisa de mármol Bianco Gioia iluminada y puertas de vidrio estriado</li>
      <li>    Tocador flotante con encimeras de mármol Bianco Gioia y puertas con incrustaciones de nogal gris pizarra acanaladas y tiradores personalizados</li>
      <li>    Grifería y sistemas de ducha personalizados</li>
      <li>    Lavabos, inodoros y bañeras Duravit</li>
      <li>    Botiquines*</li>
    </ul></>, amenidades: <>
    <p className="text-justify">Los espacios comunes de varios niveles que abarcan más de 130.000 pies cuadrados reúnen a los residentes y la comunidad.</p><ul>
<li>Piscina exclusiva en la azotea para residentes</li>
<li>    Cafetería</li>
<li>    Dos restaurantes de autor</li>
<li>    Bar de cócteles</li>
<li>    Piscinas solárium y jardín con servicio de toallas y comida y bebida</li>
<li>    Salas de estar para residentes</li>
<li>    Espacios de coworking y biblioteca</li>
<li>    Sala de proyección</li>

<li>    Simulador de coches de carreras Mercedes-Benz personalizado</li>
<li>    Habitación de niño</li>
<li>    Cocina del chef con comedor privado.</li>
<li>    Cocina y comedor al aire libre</li>
<li>    Coches de la casa Mercedes-Benz</li>
<li>    Conserjería y valet parking 24 horas al día, 7 días a la semana</li>
<li>    Estaciones de carga para vehículos eléctricos</li>
<li>    Estudio de grabación</li>
</ul></>
  };



  
  MercedesBenzPlacesObject.introduccion = getLocalizedArray('introduccion', [
    'Sumérgete en el estilo de vida elevado que es la esencia de cada residencia en Mercedes-Benz Places Miami.'
  ])
  MercedesBenzPlacesObject.nombre = getLocalizedField('nombre', 'mercedes-benz-places-miami')
  MercedesBenzPlacesObject.banner = getLocalizedField('banner', 'true') === 'true'
  MercedesBenzPlacesObject.numberOfImages = parseInt(getLocalizedField('numberOfImages', '17'), 10) || 17

  return MercedesBenzPlacesObject;

}
