import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import DaniaBeach from "../../areas/DaniaBeach.tsx";

export default function createDaniaProject() {
  const DaniaProjectObject = new Desarrollo();
  DaniaProjectObject.nombre = "dania-project";
  DaniaProjectObject.titulo = {
    es: "Dania Project",
    en: "Dania Project"
  };
  DaniaProjectObject.slogan = {
    es: "Vivienda de lujo en Dania Beach",
    en: "Luxury Living in Dania Beach"
  };
  DaniaProjectObject.caracteristicas = {
    es: {
      edificio: <></>,
      residencias: <></>,
      amenidades: <></>,
    },
    en: {
      edificio: <></>,
      residencias: <></>,
      amenidades: <></>,
    }
  };

  DaniaProjectObject.introduccion = {
    es: [
      "Experimenta la cúspide de la vida de lujo en Dania Beach",
      "El diseño moderno se encuentra con la elegancia costera"
    ],
    en: [
      "Experience the pinnacle of luxury living in Dania Beach",
      "Modern design meets coastal elegance"
    ]
  };
  DaniaProjectObject.area = DaniaBeach();
  DaniaProjectObject.numberOfImages = 5;

  return DaniaProjectObject;
}
