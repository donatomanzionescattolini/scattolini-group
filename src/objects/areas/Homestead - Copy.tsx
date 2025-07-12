import {AreaDto} from "../../models/areas/Area.tsx";

export default function Homestead() {
    const homestead = AreaDto("homestead");
    homestead.name = "homestead";
    homestead.titulo = "Homestead";
    homestead.slogan = "Descubre las Oportunidades";
    homestead.descripcion = ["La Puerta de Entrada al Parque Nacional de los Everglades", "Homestead es un lugar hermoso para vivir y trabajar, con días soleados y una temperatura promedio de 75 grados. Ubicado a solo treinta millas al norte de Miami, una de las ciudades más vibrantes y culturalmente ricas del país, Homestead ofrece lo mejor de ambos mundos: la tranquilidad de una pequeña ciudad con todas las comodidades de una gran ciudad."];
    homestead.numberOfImages = 11;


    return homestead;
}
