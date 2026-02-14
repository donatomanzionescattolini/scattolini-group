import {AreaDto} from "../../models/areas/Area.tsx";

export default function NorthBayVillage() {
    const northBayVillage = AreaDto("north-bay-village");
    northBayVillage.name = "north-bay-village";
    northBayVillage.titulo = {
        es: "North Bay Village",
        en: "North Bay Village"
    };
    northBayVillage.slogan = {
        es: "El Corazón de la Bahía",
        en: "The Heart of the Bay"
    };
    northBayVillage.descripcion = {
        es: [
            "Si estás buscando un paraíso frente al mar en Miami, no busques más allá de North Bay Village. Esta encantadora comunidad isleña ofrece impresionantes vistas de la bahía y el horizonte de la ciudad, así como fácil acceso a la playa y al centro. North Bay Village tiene una variedad de casas y condominios en venta, desde acogedores estudios hasta lujosos áticos. Puedes disfrutar de las comodidades de una vida estilo resort, como piscinas, spas, gimnasios, marinas y restaurantes. Ya sea que quieras relajarte, jugar o trabajar, North Bay Village lo tiene todo. Ven y descubre por qué este es uno de los mejores lugares para vivir en Miami."
        ],
        en: [
            "If you are looking for a waterfront paradise in Miami, look no further than North Bay Village. This charming island community offers stunning views of the bay and city skyline, as well as easy access to the beach and downtown. North Bay Village has a variety of homes and condominiums for sale, from cozy studios to luxurious penthouses. You can enjoy resort-style living amenities like pools, spas, gyms, marinas, and restaurants. Whether you want to relax, play, or work, North Bay Village has it all. Come and discover why this is one of the best places to live in Miami."
        ]
    };
    northBayVillage.numberOfImages = 12;

    return northBayVillage;
}

