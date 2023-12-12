import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Homestead from "../../areas/Homestead";

export default function OnGrandville() {
  const OnGrandville = new Desarrollo(Homestead());
  OnGrandville.nombre = "on-grandville";
  OnGrandville.titulo = "On Grandville";
  OnGrandville.numberOfImages = 0;
  OnGrandville.amenidades = [];
  OnGrandville.introduccion = [];
  OnGrandville.residencias = [];
  OnGrandville.edificio = {
    añoDeConstrucciónOFinalización: 0,
    piesCuadrados: 0,
    ubicación: "",
    numberOfUnits: 0,
    typeOfUnits: "",
    numberOfModels: 0,
    constructora: "",
    numberOfBathrooms: 0,
    numberOfRooms: 0,
  };
  OnGrandville.añoDeConstrucciónOFinalización = 0;
  OnGrandville.constructora = "Onx";
  OnGrandville.ubicación =
    "On Grandville es una vibrante comunidad de 165 casas adosadas recientemente construidas. Estas casas se han diseñado maravillosamente y están totalmente hormigonadas. Cada vivienda viene equipada con 4 dormitorios, 3 baños completos, moderna cocina abierta, comedor y sala para invitados, electrodomésticos energéticamente eficientes, balcón, una moderna terraza en la azotea y acceso a espacios comunitarios. Las casas Onx se construyen utilizando características de diseño X+ Construction™ como ventanas y puertas a prueba de huracanes, encimeras de cuarzo y suelos de baldosas de porcelana. La ubicación privilegiada de On Grandville, junto a la US1, facilita el acceso a la autopista Florida Turnpike, a las tiendas y proporcionando rutas directas a las actividades de conveniencia de los alrededores. Estas rutas principales ofrecen acceso directo a los Cayos de Florida, al centro de Dadeland y a las famosas playas y atracciones de Miami";
  OnGrandville.area = Homestead();
  OnGrandville.edificio;
  OnGrandville.caracteristicas = [];
  OnGrandville.numberOfBathrooms = 0;
  OnGrandville.numberOfRooms = 0;
  OnGrandville.numberOfUnits = 0;
  OnGrandville.piesCuadrados = 0;
  OnGrandville.typeOfUnits = "";
  OnGrandville.numberOfModels = 0;

  return OnGrandville;
}
