import React from "react";
import { AreaDto } from "../../models/areas/Area";

export default function FloridaCity() {
  const floridaDto = AreaDto("florida-city");
  floridaDto.name = "florida-city";
  floridaDto.titulo = {
    es: "Florida City",
    en: "Florida City"
  };
  floridaDto.descripcion = {
    es: [
      "Florida City marca el punto más al sur del área metropolitana de Miami, el último bastión de la civilización continental del sur de Florida. Continúe hacia el sur y se encontrará en la ruta estadounidense 1 en dirección a los Cayos de Florida. Aventúrese hacia el oeste y esté entre la famosa extensión natural del Parque Nacional Everglades, un paraíso para los aspirantes a biólogos, observadores de aves y kayakistas por igual. Durante las etapas iniciales del crecimiento de Florida City, el cultivo de tomates y calabazas fue una fuerza impulsora de la economía local. Hoy en día, la agricultura sigue siendo vital para la comunidad y usted puede apoyar a los productores de la zona comprando sus productos en los puestos agrícolas cercanos. También existe la ventaja de residir lo suficientemente cerca de Miami para disfrutar de su esplendor y, al mismo tiempo, tener un escondite más tranquilo para retirarse después de un día entre la multitud y el bullicio.",
    ],
    en: [
      "Florida City marks the southernmost point of the Miami metropolitan area, the last bastion of mainland South Florida civilization. Continue south and you'll find yourself on US Route 1 heading toward the Florida Keys. Venture west and you're among the famous natural expanse of Everglades National Park, a haven for aspiring biologists, birdwatchers, and kayakers alike. During the initial stages of Florida City's growth, tomato and squash farming was a driving force of the local economy. Today, agriculture remains vital to the community, and you can support area growers by purchasing their products at nearby farm stands. There's also the advantage of residing close enough to Miami to enjoy its splendor while having a quieter hideaway to retreat to after a day among the crowds and bustle.",
    ]
  };
  floridaDto.slogan = {
    es: "Puerta de Entrada a los Cayos de Florida y los Everglades",
    en: "Gateway to the Florida Keys and the Everglades"
  };
  floridaDto.numberOfImages = 15;
  return floridaDto;
}
