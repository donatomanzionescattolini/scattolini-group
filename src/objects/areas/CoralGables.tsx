import {AreaDto} from "../../models/areas/Area.tsx";

export default function CoralGables() {
    const coralGables = AreaDto("coral-gables");

    coralGables.name = "coral-gables";
    coralGables.titulo = {
        es: "Coral Gables",
        en: "Coral Gables"
    };
    coralGables.slogan = {
        es: "La Ciudad Hermosa",
        en: "The City Beautiful"
    };
    coralGables.descripcion = {
        es: [
            "Ubicada a 7 millas (11 km) al suroeste del centro de Miami, Coral Gables es conocida por sus avenidas bordeadas de árboles, sus mansiones cubiertas de hiedra y sus lugares históricos, como el mundialmente famoso Hotel Biltmore y la piscina Venetian. No es en vano la llamen “La Ciudad Hermosa”, pues su pintoresca arquitectura de estilo mediterráneo, exuberante vegetación, experiencias de compras y restaurantes de clase mundial hacen de Coral Gables un destino turístico popular.",
            "Coral Gables también goza de un clima cálido durante todo el año y es donde la Universidad de Miami tiene su encantador campus, un lugar rodeado de pinos perfecto para aquellos que buscan una educación superior.",
            "En resumen, Coral Gables es una de las mejores ciudades para vivir en Florida y ofrece a sus residentes una mezcla de ambiente urbano y suburbano. La mayoría de los residentes son propietarios de sus viviendas que echaron raices entre los restaurantes, cafeterías y parques en la ciudad.",
            "¡No pierdas la oportunidad de invertir en bienes raíces en esta hermosa ciudad!"
        ],
        en: [
            "Located 7 miles (11 km) southwest of downtown Miami, Coral Gables is known for its tree-lined avenues, ivy-covered mansions, and historic landmarks like the world-famous Biltmore Hotel and the Venetian Pool. It's not for nothing that it's called 'The City Beautiful,' as its picturesque Mediterranean-style architecture, lush greenery, and world-class shopping and dining experiences make Coral Gables a popular tourist destination.",
            "Coral Gables also enjoys a warm climate year-round and is where the University of Miami has its charming campus, a pine-surrounded location perfect for those seeking higher education.",
            "In summary, Coral Gables is one of the best cities to live in Florida, offering its residents a blend of urban and suburban atmospheres. Most residents are homeowners who have put down roots among the city's restaurants, cafes, and parks.",
            "Don't miss the opportunity to invest in real estate in this beautiful city!"
        ]
    };
    coralGables.numberOfImages = 11;


    return coralGables;
}
