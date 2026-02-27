import {Area, AreaDto} from "../../models/areas/Area.tsx";

export default function SouthMiami(): Area {

// areasDesarrollos.push(DoralComponent);
    const southMiami: Area = AreaDto("south-miami");
    southMiami.name = "south-miami";
    southMiami.titulo = {
        es: "South Miami",
        en: "South Miami"
    };
    southMiami.slogan = {
        es: "La Ciudad de la Vida Agradable",
        en: "The City of Pleasant Living"
    };
    southMiami.descripcion = {
        es: [
            "Descubra la ciudad de la vida placentera, conocida por su ambiente animado y su comunidad acogedora. Aquí, encontrará una combinación de comodidades modernas y encantadores negocios locales que crean un entorno único y atractivo. Downtown South Miami ofrece una variedad de cocinas, como la italiana en Fiola, la estadounidense en Whisk, los mariscos portugueses en Old Lisbon y mucho más.",
            "A pesar de su tamaño relativamente pequeño, South Miami ofrece una gran cantidad de servicios urbanos. Los residentes pueden disfrutar de tiendas boutique, cafés de moda y opciones gastronómicas de lujo a lo largo de Sunset Drive y South Dixie Highway. La zona también alberga varios parques y espacios verdes que brindan oportunidades para la recreación y la relajación al aire libre.",
            "Además, el mercado de condominios en South Miami está en auge y ofrece a los compradores una variedad de opciones, desde modernos edificios de gran altura hasta acogedoras comunidades de casas adosadas. Muchas de estas propiedades cuentan con impresionantes vistas del horizonte de la ciudad o de una exuberante vegetación, lo que brinda a los residentes una experiencia de vida cómoda y lujosa.",
            "¡Ven y encuentra tu hogar ideal en South Miami, y deja que nuestros expertos en bienes raíces te guíen en cada paso del camino hacia tu nueva inversión!"
        ],
        en: [
            "Discover the city of pleasant living, known for its lively atmosphere and welcoming community. Here, you'll find a combination of modern amenities and charming local businesses that create a unique and attractive environment. Downtown South Miami offers a variety of cuisines, such as Italian at Fiola, American at Whisk, Portuguese seafood at Old Lisbon, and much more.",
            "Despite its relatively small size, South Miami offers a wealth of urban amenities. Residents can enjoy boutique shops, trendy cafes, and upscale dining options along Sunset Drive and South Dixie Highway. The area is also home to several parks and green spaces that provide opportunities for outdoor recreation and relaxation.",
            "Additionally, the condominium market in South Miami is booming, offering buyers a variety of options, from modern high-rise buildings to cozy townhouse communities. Many of these properties feature stunning views of the city skyline or lush greenery, providing residents with a comfortable and luxurious living experience.",
            "Come and find your ideal home in South Miami, and let our real estate experts guide you every step of the way toward your new investment!"
        ]
    };
    southMiami.numberOfImages = 38;


    return southMiami;
}