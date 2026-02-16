import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Homestead from "../../areas/Homestead";

export default function OnGrandville(lang: "en" | "es" = "es") {
  const OnGrandvilleObject = new Desarrollo(Homestead());
  OnGrandvilleObject.nombre = "on-grandville";
  OnGrandvilleObject.titulo = { es: "On Grandville", en: "On Grandville" };
  OnGrandvilleObject.numberOfImages = 0;
  OnGrandvilleObject.amenidades = [];
  OnGrandvilleObject.introduccion = [];
  OnGrandvilleObject.residencias = [];
  OnGrandvilleObject.edificio = {
    añoDeConstrucciónOFinalización: 0,
    piesCuadrados: 0,
    ubicación: "14505 SW 260TH ST HOMESTEAD, FL 33032",
    numberOfUnits: 0,
    typeOfUnits: "",
    numberOfModels: 0,
    constructora: "",
    numberOfBathrooms: 0,
    numberOfRooms: 0,
  };
  OnGrandvilleObject.estimatedCompletionYear = 0;
  OnGrandvilleObject.constructora = "Onx";
  OnGrandvilleObject.introduccion = lang === "es" ? [
    "On Grandville es una vibrante comunidad de 165 casas adosadas recientemente construidas. Estas casas se han diseñado maravillosamente y están totalmente hormigonadas. Cada vivienda viene equipada con 4 dormitorios, 3 baños completos, moderna cocina abierta, comedor y sala para invitados, electrodomésticos energéticamente eficientes, balcón, una moderna terraza en la azotea y acceso a espacios comunitarios. Las casas Onx se construyen utilizando características de diseño X+ Construction™ como ventanas y puertas a prueba de huracanes, encimeras de cuarzo y suelos de baldosas de porcelana. La ubicación privilegiada de On Grandville, junto a la US1, facilita el acceso a la autopista Florida Turnpike, a las tiendas y proporcionando rutas directas a las actividades de conveniencia de los alrededores. Estas rutas principales ofrecen acceso directo a los Cayos de Florida, al centro de Dadeland y a las famosas playas y atracciones de Miami",
  ] : [
    "On Grandville is a vibrant community of 165 newly built townhomes. These homes are beautifully designed and fully concrete. Each home comes equipped with 4 bedrooms, 3 full bathrooms, modern open kitchen, dining and guest room, energy-efficient appliances, balcony, a modern rooftop terrace and access to community spaces. Onx homes are built using X+ Construction™ design features such as hurricane-proof windows and doors, quartz countertops and porcelain tile floors. On Grandville's prime location, next to US1, provides easy access to the Florida Turnpike, shops and providing direct routes to surrounding convenience activities. These main routes offer direct access to the Florida Keys, downtown Dadeland and Miami's famous beaches and attractions",
  ];
  OnGrandvilleObject.ubicación = "14505 SW 260th St. Homestead, FL 33032";
  OnGrandvilleObject.area = Homestead();

  OnGrandvilleObject.caracteristicas = [];

  OnGrandvilleObject.numberOfBathrooms = 3;
  OnGrandvilleObject.numberOfParkingSpots = 2;
  OnGrandvilleObject.numberOfRooms = { start: 4, end: 5 };
  OnGrandvilleObject.numberOfUnits = 165;
  OnGrandvilleObject.piesCuadrados = 2153;
  OnGrandvilleObject.typeOfUnits = "Townhouses";
  OnGrandvilleObject.numberOfModels = 3;
  OnGrandvilleObject.banner = true;
  OnGrandvilleObject.numberOfImages = 7;
  OnGrandvilleObject.residencias = new Map();
  OnGrandvilleObject.residencias.set("Estructura", [
    "Construcción de Hormigón",
    "Ventanas a Prueba de Golpes",
    "Paredes con Acabado Texturizado",
    "Paredes con Acabado Liso",
  ]);

  OnGrandvilleObject.residencias.set("Tecnología", [
    "Pre-Cableado de Fibra Óptica de Alta Velocidad de Internet",
    "Timbre",
    "Smart Entry Lock",
    "Exterior Security Cameras",
  ]);
  OnGrandvilleObject.residencias.set("Miscellaneous", [
    "Persianas para Ventanas",
    "Pasamanos de Escalera Blanco o Negro Mate",
    "Estantes de Malla en Vestidor",
    "Armario en Closet Vestidor",
  ]);
  OnGrandvilleObject.residencias.set("Interiores", [
    "Encimeras de Cuarzo ",
    "Moderna Cocina Abierta",
    "Electrodomésticos de Acero Inoxidable",
    "Elegantes Herrajes para Puertas Interiores",
    "Pisos de Porcelanato",
    "Escaleras de Hormigón",
    "Lavadora y Secadora",
    "Vestidor en Dormitorio Principal",
    "Calentador de Agua Eléctrico sin Tanque",
  ]);
  OnGrandvilleObject.residencias.set("Baño", [
    "Espejo Completo",
    "Gabinetes de Tocador Modernos",
    "Encimeras de Cuarzo",
    "Azulejos de Suelo a Techo en la Ducha",
    "Panel de Ducha de Cristal",
  ]);
  OnGrandvilleObject.residencias.set("Exterior", [
    "Terraza en la Azotea",
    "Puerto de Carga para Vehículos Eléctricos",
    "Ventanas y Puertas a Prueba de Huracanes",
  ]);

  OnGrandvilleObject.caracteristicas = OnGrandvilleObject.createCaracteristicas();
  OnGrandvilleObject.amenidades = lang === "es" ? [
    "Patios de juegos",
    "Área de Barbacoas",
    "Parque de Perros",
    "Estacionamiento Privado, de Garaje, y para Visitantes",
  ] : [
    "Playgrounds",
    "Barbecue Area",
    "Dog Park",
    "Private, Garage, and Visitor Parking",
  ];
  // OnGrandville.residencias = [
  //   "Construcción de hormigón",
  //   "Ventanas de impacto",
  //   "Paredes con acabado texturizado",
  //   "Paredes de acabado liso",
  //   "Acceso a la terraza",
  //   "Cobertura extendida de la terraza",
  //   "Cocina de verano con electrodomésticos",
  //   "Pisos de terraza",
  //   "Porcelanato (Primer Piso)",
  //   "Pisos de madera de ingeniería Escaleras y pasillo",
  //   "Alfombra en los dormitorios",
  //   "Pisos de madera de ingeniería Dormitorios 2º piso",
  //   "Porcelanato Todos los pisos",
  //   "Encimeras de cocina de cuarzo",
  //   'Gabinetes de cocina de 30"',
  //   'Gabinetes de 36" Premium',
  //   "Fregadero doble con grifo de diseño",
  //   "Hardware estándar",
  //   "Hardware Premium (KOVA)",
  //   "Electrodomésticos de acero inoxidable Basic",
  //   "Electrodomésticos de acero inoxidable Premium",
  //   "Protector contra salpicaduras",
  //   "Pisos de porcelanato",
  //   "Baldosas de piso a techo en ducha",
  //   "Espejo de tocador estándar",
  //   "Espejo de tocador Premium Accesorios de iluminación estándar",
  //   "Luminarias Premium",
  //   "Hardware estándar",
  //   "Hardware Premium (KOVA)",
  //   "Accesorios de baño",
  //   "Panel de vidrio en la ducha",
  //   "Armario empotrado",
  //   "Listo para la instalación",
  //   "Lavadora y secadora",
  //   "Aislamiento de grado superior",
  //   "Calentador de agua eléctrico",
  //   "Conexión del cargador EV",
  //   "Instalación del cargador de vehículos eléctricos",
  //   "Internet de alta velocidad de fibra óptica precableada",
  //   "Sistema de Domótica",
  //   "Cerradura de entrada inteligente",
  //   "Cámaras de seguridad exteriores",
  //   "Cortinas para ventanas",
  // ];
  OnGrandvilleObject.caracteristicas = OnGrandvilleObject.createCaracteristicas();
  return OnGrandvilleObject;
}
