import {AreaDto} from "../../models/areas/Area.tsx";

export default function Doral() {
    const doral = AreaDto("doral");
    doral.name = "doral";
    doral.title = "Doral";
    doral.slogan = "¡Vive, Trabaja, Aprende y Juega!";
    doral.descripcion = ["El lema de la ciudad de Doral es “¡vive, trabaja, aprende y juega!”, pues la ciudad se esfuerza por ofrecer a sus residentes y visitantes una alta calidad de vida a través de la entrega de un gobierno eficiente, sostenible, transparente, ético y responsable. Ubicada en el centro-norte del condado de Miami-Dade, Florida, Doral está situada a 5 millas (8 km) al oeste del Aeropuerto Internacional de Miami. Su nombre proviene del famoso resort de golf y spa que se encuentra dentro de sus límites municipales. Doral es una ciudad próspera y diversa, con una gran población venezolana que le da un toque sudamericano a su cultura y gastronomía. Doral también ofrece a sus residentes y visitantes una variedad de opciones de compras y entretenimiento, hermosos parques y campos de golf de primera clase.", "Además de su vibrante cultura y emocionantes opciones de entretenimiento, Doral también es conocida por su liderazgo en tecnología y sostenibilidad. La ciudad ha implementado un plan general de Ciudad Inteligente para realizar inversiones en tecnología que permitan una ciudad de próxima generación, tanto económica como ambientalmente. Esto incluye la entrega de servicios centrados en el ciudadano y oportunidades económicas y sociales para sus residentes, visitantes y empresas . Doral también cuenta con un Sistema de Información Geográfica (GIS) que analiza y muestra información geográficamente referenciada . ¡Invertir en bienes raíces en Doral es una excelente oportunidad para formar parte de una ciudad moderna y en constante evolución!"];
    doral.numberOfImages = 12;
    return doral;
}