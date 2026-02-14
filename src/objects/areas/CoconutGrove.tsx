import {AreaDto} from "../../models/areas/Area.tsx";

export default function CoconutGrove() {

    const coconutGroveObject = AreaDto("coconut-grove");
    coconutGroveObject.name = "coconut-grove";
    coconutGroveObject.titulo = {
        es: "Coconut Grove",
        en: "Coconut Grove"
    };
    coconutGroveObject.numberOfImages = 14;
    coconutGroveObject.slogan = {
        es: "El Neighborhood Original de Miami",
        en: "Miami's Original Neighborhood"
    };
    coconutGroveObject.descripcion = {
        es: [
            "Coconut Grove, también conocido coloquialmente como “The Grove”, es un barrio próspero y el más antiguo de Miami en el condado de Miami-Dade, Florida. Con acres de espacios verdes y una costa brillante que da a la Bahía de Biscayne, el pintoresco paisaje y el ambiente amigable de Coconut Grove hacen de este barrio uno de los principales destinos de estilo de vida de Miami. Un poco bahameño y un poco bohemio, Coconut Grove se inspira en sus primeros colonos bahameños y en una afluencia de habitantes artísticos de décadas pasadas. Como el barrio más antiguo de Miami, la historia y el patrimonio aún resuenan en Coconut Grove. Desde su creación a finales del siglo XIX, Coconut Grove ha sido el hogar de magnates, aventureros, artistas, escritores y músicos por igual con una lista A de residentes que han incluido a David Crosby, Jimmy Buffett, Tennessee Williams, Alexander Graham Bell y Madonna, solo por nombrar algunos. Hoy en día, el pueblo conocido por los lugareños simplemente como “The Grove” sigue siendo un refugio cálido y acogedor del estrés de la vida en la ciudad. La combinación de restaurantes dirigidos por chefs, encantadoras cafeterías en la acera, boutiques elegantes, parques exuberantes y una costa brillante decorada con veleros hacen de Coconut Grove un destino lleno de serenidad escénica y esplendor natural.",
            "Si estás buscando invertir o comprar una propiedad en Miami, no puedes dejar de considerar Coconut Grove. Este barrio ofrece una gran variedad de opciones inmobiliarias, desde casas históricas hasta modernos condominios, que se adaptan a todos los gustos y presupuestos. Coconut Grove también tiene una excelente ubicación, cerca del centro de Miami, las playas y el aeropuerto internacional. Además, cuenta con una vibrante vida cultural, gastronómica y comercial, que te hará sentir parte de una comunidad única y diversa. No esperes más y descubre las oportunidades que te ofrece Coconut Grove, el barrio más antiguo y encantador de Miami."
        ],
        en: [
            "Coconut Grove, also known colloquially as “The Grove”, is a thriving neighborhood and the oldest in Miami in Miami-Dade County, Florida. With acres of green space and a sparkling shoreline overlooking Biscayne Bay, Coconut Grove's picturesque landscape and friendly atmosphere make this neighborhood one of Miami's premier lifestyle destinations. A little Bahamian and a little bohemian, Coconut Grove draws inspiration from its early Bahamian settlers and an influx of artistic inhabitants from decades past. As Miami's oldest neighborhood, history and heritage still resonate in Coconut Grove. Since its inception in the late 19th century, Coconut Grove has been home to tycoons, adventurers, artists, writers, and musicians alike with an A-list of residents that have included David Crosby, Jimmy Buffett, Tennessee Williams, Alexander Graham Bell, and Madonna, just to name a few. Today, the village known to locals simply as “The Grove” remains a warm and welcoming haven from the stresses of city life. The combination of chef-led restaurants, charming sidewalk cafes, chic boutiques, lush parks, and a sparkling shoreline decorated with sailboats make Coconut Grove a destination full of scenic serenity and natural splendor.",
            "If you are looking to invest or buy a property in Miami, you cannot fail to consider Coconut Grove. This neighborhood offers a wide variety of real estate options, from historic homes to modern condominiums, that suit all tastes and budgets. Coconut Grove also has an excellent location, close to downtown Miami, the beaches, and the international airport. Furthermore, it has a vibrant cultural, gastronomic, and commercial life, which will make you feel part of a unique and diverse community. Wait no longer and discover the opportunities offered by Coconut Grove, Miami's oldest and most charming neighborhood."
        ]
    };

    return coconutGroveObject;
}

