import {AreaDto} from "../../models/areas/Area.tsx";

export default function Doral() {
    const doral = AreaDto("doral");
    doral.name = "doral";
    doral.titulo = {
        es: "Doral",
        en: "Doral"
    };
    doral.slogan = {
        es: "¡Vive, Trabaja, Aprende y Juega!",
        en: "Live, Work, Learn and Play!"
    };
    doral.descripcion = {
        es: [
            "El lema de la ciudad de Doral es “¡vive, trabaja, aprende y juega!”, pues la ciudad se esfuerza por ofrecer a sus residentes y visitantes una alta calidad de vida a través de la entrega de un gobierno eficiente, sostenible, transparente, ético y responsable. Ubicada en el centro-norte del condado de Miami-Dade, Florida, Doral está situada a 5 millas (8 km) al oeste del Aeropuerto Internacional de Miami. Su nombre proviene del famoso resort de golf y spa que se encuentra dentro de sus límites municipales. Doral es una ciudad próspera y diversa, con una gran población venezolana que le da un toque sudamericano a su cultura y gastronomía. Doral también ofrece a sus residentes y visitantes una variedad de opciones de compras y entretenimiento, hermosos parques y campos de golf de primera clase.",
            "Además de su vibrante cultura y emocionantes opciones de entretenimiento, Doral también es conocida por su liderazgo en tecnología y sostenibilidad. La ciudad ha implementado un plan general de Ciudad Inteligente para realizar inversiones en tecnología que permitan una ciudad de próxima generación, tanto económica como ambientalmente. Esto incluye la entrega de servicios centrados en el ciudadano y oportunidades económicas y sociales para sus residentes, visitantes y empresas . Doral también cuenta con un Sistema de Información Geográfica (GIS) que analiza y muestra información geográficamente referenciada . ¡Invertir en bienes raíces en Doral es una excelente oportunidad para formar parte de una ciudad moderna y en constante evolución!"
        ],
        en: [
            "The motto of the city of Doral is 'Live, work, learn and play!', as the city strives to offer its residents and visitors a high quality of life through the delivery of efficient, sustainable, transparent, ethical, and responsible government. Located in north-central Miami-Dade County, Florida, Doral is situated 5 miles (8 km) west of Miami International Airport. Its name comes from the famous golf resort and spa located within its municipal limits. Doral is a thriving and diverse city, with a large Venezuelan population that adds a South American touch to its culture and gastronomy. Doral also offers its residents and visitors a variety of shopping and entertainment options, beautiful parks, and world-class golf courses.",
            "In addition to its vibrant culture and exciting entertainment options, Doral is also known for its leadership in technology and sustainability. The city has implemented a Smart City master plan to make technology investments that enable a next-generation city, both economically and environmentally. This includes the delivery of citizen-centric services and economic and social opportunities for its residents, visitors, and businesses. Doral also has a Geographic Information System (GIS) that analyzes and displays geographically referenced information. Investing in real estate in Doral is an excellent opportunity to be part of a modern and constantly evolving city!"
        ]
    };
    doral.numberOfImages = 12;
    return doral;
}