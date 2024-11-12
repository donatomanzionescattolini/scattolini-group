import {Area, AreaDto} from "../../models/areas/Area.tsx";

export default function SouthMiami(): Area {

// areasDesarrollos.push(DoralComponent);
    const southMiami: Area = AreaDto("south-miami");
    southMiami.name = "south-miami";
    southMiami.titulo = "South Miami";
    southMiami.slogan = "La Ciudad de la Vida Agradable";
    southMiami.descripcion = ["Descubra la ciudad de la vida placentera, conocida por su ambiente animado y su comunidad acogedora. Aquí, encontrará una combinación de comodidades modernas y encantadores negocios locales que crean un entorno único y atractivo. Downtown South Miami ofrece una variedad de cocinas, como la italiana en Fiola, la estadounidense en Whisk, los mariscos portugueses en Old Lisbon y mucho más.", "A pesar de su tamaño relativamente pequeño, South Miami ofrece una gran cantidad de servicios urbanos. Los residentes pueden disfrutar de tiendas boutique, cafés de moda y opciones gastronómicas de lujo a lo largo de Sunset Drive y South Dixie Highway. La zona también alberga varios parques y espacios verdes que brindan oportunidades para la recreación y la relajación al aire libre.", "Además, el mercado de condominios en South Miami está en auge y ofrece a los compradores una variedad de opciones, desde modernos edificios de gran altura hasta acogedoras comunidades de casas adosadas. Muchas de estas propiedades cuentan con impresionantes vistas del horizonte de la ciudad o de una exuberante vegetación, lo que brinda a los residentes una experiencia de vida cómoda y lujosa.", " ¡Ven y encuentra tu hogar ideal en South Miami, y deja que nuestros expertos en bienes raíces te guíen en cada paso del camino hacia tu nueva inversión!"];
    southMiami.numberOfImages = 38;


    return southMiami;
}