import {AreaDto} from "../../models/areas/Area.tsx";

export default function Pinecrest() {
    const pinecrest = AreaDto("pinecrest");

    pinecrest.name = "pinecrest";
    pinecrest.titulo = {
        es: "Pinecrest",
        en: "Pinecrest"
    };
    pinecrest.slogan = {
        es: "Calidad de Vida y Paisajes Exuberantes",
        en: "Quality of Life and Lush Landscapes"
    };
    pinecrest.descripcion = {
        es: [
            "Bienvenido a Pinecrest, considerada una de las áreas residenciales más hermosas del sur de Florida. Pinecrest es una comunidad altamente habitable con un excelente gobierno, finanzas estables, calles seguras, instalaciones recreativas y de infraestructura excepcionales, un carácter residencial de alta calidad con un paisaje exuberante, excelentes escuelas, valiosos activos culturales y operaciones sostenibles.",
            "Pinecrest es un lugar maravilloso para vivir y disfrutar de todo lo que el sur de Florida tiene para ofrecer. Con una amplia variedad de propiedades residenciales disponibles, desde casas unifamiliares hasta condominios de lujo, Pinecrest ofrece algo para todos. ¡Ven a descubrir todo lo que Pinecrest tiene para ofrecer y encuentra tu hogar perfecto en esta hermosa comunidad!"
        ],
        en: [
            "Welcome to Pinecrest, considered one of the most beautiful residential areas in South Florida. Pinecrest is a highly livable community with excellent government, stable finances, safe streets, exceptional recreational and infrastructure facilities, high-quality residential character with lush landscaping, excellent schools, valuable cultural assets, and sustainable operations.",
            "Pinecrest is a wonderful place to live and enjoy everything South Florida has to offer. With a wide variety of residential properties available, from single-family homes to luxury condominiums, Pinecrest offers something for everyone. Come discover all that Pinecrest has to offer and find your perfect home in this beautiful community!"
        ]
    };
    pinecrest.numberOfImages = 5;


    return pinecrest;
}