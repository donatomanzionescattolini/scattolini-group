import React from 'react'
import Desarrollo from '../../../models/desarrollos/Desarrollo'
import SouthMiami from '../../areas/SouthMiami';

export default function SomiWalk() {
    const SomiWalkObject = new Desarrollo();
    SomiWalkObject.area = SouthMiami();
    SomiWalkObject.nombre = "somi-walk";
    SomiWalkObject.titulo = "Somi Walk";
    SomiWalkObject.caracteristicas = {
      amenidades:<><ul>
      <li>Piscina estilo resort con cabañas</li>
      <li>Centro de negocios con espacios de</li>
      <li>coworking</li>
      <li>Dos canchas de pickleball interiores</li>
      <li>Gimnasio de última generación</li>
      <li>Sala de medios equipada con un</li>
      <li>televisor inteligente de 60'' y sonido</li>
      <li>envolvente</li>
      <li>Cocina adyacente y mesa de billar</li>
      <li>profesional para entretenimiento sin</li>
      <li>interrupciones.</li>
      </ul></>,
      edificio:<><ul><li>Pisos: 15</li>
      <li>Residencias: 291</li><li>Ubicación: 7090 SW 59TH PLACE

SOUTH MIAMI FL</li></ul></>,
      residencias:<><ul>
      <li>Entregadas llave en mano</li>
      <li>Cocinas gourmet con gabinetes personalizados</li>
      <li>Electrodomésticos de acero inoxidable,</li>
      <li>incluyendo refrigerador/congelador, lavavajillas,</li>
      <li>cocina y microondas</li>
      <li>Closets completamente equipados</li>
      <li>Duchas tipo lluvia en los baños principales y</li>
      <li>tocadores personalizados</li>
      <li>Paquetes de iluminación contemporánea con</li>
      <li>iluminación empotrada, atenuadores y control de</li>
      <li>iluminación</li>
      <li>Persianas solares incluidas en la sala de estar</li>
      <li>junto con persianas blackout en el dormitorio</li>
      <li>Lavadora y secadora apilables</li>
      <li>Pre-cableado para comunicación y conexión de</li>
      <li>datos de alta velocidad</li>
      <li>Acceso inteligente con entrada sin llave</li>
      </ul></>,
    }; 
        SomiWalkObject.numberOfImages = 10;
    SomiWalkObject.banner = true;
    SomiWalkObject.subtitulo = "El Estilo de Vida Encaminable";
    SomiWalkObject.introduccion = ["Experimente el codiciado estilo de vida transitable en Somi Walk, ubicado a solo dos cuadras de la Universidad de Miami y Coral Gables. En esta zona de altos ingresos, Fresh Market y Whole Foods son los elementos básicos del vecindario, lo que refleja la afluencia de la comunidad. La próxima remodelación de Sunset Place agregará aún más opciones de restaurantes y tiendas cercanas. Con la casa nueva de menor precio en South Miami a partir de $3.5 millones, Somi Walk está ubicada en un destino privilegiado de rápido crecimiento, que atrae a las mejores empresas por su ubicación y calidad de vida inmejorables.",""]
    SomiWalkObject.ubicación= "7090 SW 59TH PLACE, SOUTH MIAMI FL"
    return SomiWalkObject;
}
