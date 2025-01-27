import {AreaDto} from "../../models/areas/Area.tsx";

export default function CoralGables() {
    const coralGables = AreaDto("coral-gables");

    coralGables.nameForProjectFolders = "coral-gables";
    coralGables.officialName = "Coral Gables";
    coralGables.slogan = "La Ciudad Hermosa";
    coralGables.descripcion = ["Ubicada a 7 millas (11 km) al suroeste del centro de Miami, Coral Gables es conocida por sus avenidas bordeadas de árboles, sus mansiones cubiertas de hiedra y sus lugares históricos, como el mundialmente famoso Hotel Biltmore y la piscina Venetian. No es en vano la llamen “La Ciudad Hermosa”, pues su pintoresca arquitectura de estilo mediterráneo, exuberante vegetación, experiencias de compras y restaurantes de clase mundial hacen de Coral Gables un destino turístico popular.", "Coral Gables también goza de un clima cálido durante todo el año y es donde la Universidad de Miami tiene su encantador campus, un lugar rodeado de pinos perfecto para aquellos que buscan una educación superior.", "En resumen, Coral Gables es una de las mejores ciudades para vivir en Florida y ofrece a sus residentes una mezcla de ambiente urbano y suburbano. La mayoría de los residentes son propietarios de sus viviendas que echaron raices entre los restaurantes, cafeterías y parques en la ciudad.", "\t\t¡No pierdas la oportunidad de invertir en bienes raíces en esta hermosa ciudad!"];
    coralGables.numberOfImages = 11;


    return coralGables;
}
