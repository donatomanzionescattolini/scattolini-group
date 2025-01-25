import {AreaDto} from "../../models/areas/Area.tsx";

export default function NorthBayVillage() {
    const northBayVillage = AreaDto("north-bay-village");
    northBayVillage.name = "north-bay-village";
    northBayVillage.title = "North Bay Village";
    northBayVillage.slogan = "El Corazón de la Bahía";
    northBayVillage.descripcion = ["Si estás buscando un paraíso frente al mar en Miami, no busques más allá de North Bay Village. Esta encantadora comunidad isleña ofrece impresionantes vistas de la bahía y el horizonte de la ciudad, así como fácil acceso a la playa y al centro. North Bay Village tiene una variedad de casas y condominios en venta, desde acogedores estudios hasta lujosos áticos. Puedes disfrutar de las comodidades de una vida estilo resort, como piscinas, spas, gimnasios, marinas y restaurantes. Ya sea que quieras relajarte, jugar o trabajar, North Bay Village lo tiene todo. Ven y descubre por qué este es uno de los mejores lugares para vivir en Miami."];
    northBayVillage.numberOfImages = 12;

    return northBayVillage;
}

