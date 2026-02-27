import {AreaDto} from "../../models/areas/Area.tsx";

export default function Homestead() {
    const homestead = AreaDto("homestead");
    homestead.name = "homestead";
    homestead.titulo = {
        es: "Homestead",
        en: "Homestead"
    };
    homestead.slogan = {
        es: "Descubre las Oportunidades",
        en: "Discover the Opportunities"
    };
    homestead.descripcion = {
        es: [
            "La Puerta de Entrada al Parque Nacional de los Everglades",
            "Homestead es un lugar hermoso para vivir y trabajar, con días soleados y una temperatura promedio de 75 grados. Ubicado a solo treinta millas al norte de Miami, una de las ciudades más vibrantes y culturalmente ricas del país, Homestead ofrece lo mejor de ambos mundos: la tranquilidad de una pequeña ciudad con todas las comodidades de una gran ciudad."
        ],
        en: [
            "The Gateway to Everglades National Park",
            "Homestead is a beautiful place to live and work, with sunny days and an average temperature of 75 degrees. Located just thirty miles north of Miami, one of the country's most vibrant and culturally rich cities, Homestead offers the best of both worlds: small-town tranquility with all the big-city amenities."
        ]
    };
    homestead.numberOfImages = 11;


    return homestead;
}
