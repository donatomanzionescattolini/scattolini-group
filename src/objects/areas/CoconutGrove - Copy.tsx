import {AreaDto} from "../../models/areas/Area.tsx";

export default function CoconutGrove() {

    const coconutGroveObject = AreaDto("coconut-grove");
    coconutGroveObject.name = "coconut-grove";
    coconutGroveObject.titulo = "Coconut Grove";
    coconutGroveObject.numberOfImages = 14;
    coconutGroveObject.slogan = "El Neighborhood Original de Miami";
    coconutGroveObject.descripcion = ["  Coconut Grove, también conocido coloquialmente como “The Grove”, es un barrio próspero y el más antiguo de Miami en el condado de Miami-Dade, Florida. Con acres de espacios verdes y una costa brillante que da a la Bahía de Biscayne, el pintoresco paisaje y el ambiente amigable de Coconut Grove hacen de este barrio uno de los principales destinos de estilo de vida de Miami. Un poco bahameño y un poco bohemio, Coconut Grove se inspira en sus primeros colonos bahameños y en una afluencia de habitantes artísticos de décadas pasadas. Como el barrio más antiguo de Miami, la historia y el patrimonio aún resuenan en Coconut Grove. Desde su creación a finales del siglo XIX, Coconut Grove ha sido el hogar de magnates, aventureros, artistas, escritores y músicos por igual con una lista A de residentes que han incluido a David Crosby, Jimmy Buffett, Tennessee Williams, Alexander Graham Bell y Madonna, solo por nombrar algunos. Hoy en día, el pueblo conocido por los lugareños simplemente como “The Grove” sigue siendo un refugio cálido y acogedor del estrés de la vida en la ciudad. La combinación de restaurantes dirigidos por chefs, encantadoras cafeterías en la acera, boutiques elegantes, parques exuberantes y una costa brillante decorada con veleros hacen de Coconut Grove un destino lleno de serenidad escénica y esplendor natural.",
        "                                Si estás buscando invertir o comprar una propiedad en Miami, no puedes dejar de considerar Coconut Grove. Este barrio ofrece una gran variedad de opciones inmobiliarias, desde casas históricas hasta modernos condominios, que se adaptan a todos los gustos y presupuestos. Coconut Grove también tiene una excelente ubicación, cerca del centro de Miami, las playas y el aeropuerto internacional. Además, cuenta con una vibrante vida cultural, gastronómica y comercial, que te hará sentir parte de una comunidad única y diversa. No esperes más y descubre las oportunidades que te ofrece Coconut Grove, el barrio más antiguo y encantador de Miami."];

    return coconutGroveObject;
}

