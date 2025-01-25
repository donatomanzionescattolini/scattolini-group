import {AreaDto} from "../../models/areas/Area.tsx";

export default function Pinecrest() {
    const pinecrest = AreaDto("pinecrest");

    pinecrest.name = "pinecrest";
    pinecrest.title = "Pinecrest";
    pinecrest.slogan = "";
    pinecrest.descripcion = ["Bienvenido a Pinecrest, considerada una de las areas residenciales mas hermosas del Sur de la Florida. Pinecrest es una comunidad altamente habitable con un excelente gobierno, finanzas estables, calles seguras, instalaciones recreativas y de infraestructura excepcionales, un carácter residencial de alta calidad con un paisaje exuberante, excelentes escuelas, valiosos activos culturales y operaciones sostenibles.", "Pinecrest es un lugar maravilloso para vivir y disfrutar de todo lo que el sur de Florida tiene para ofrecer. Con una amplia variedad de propiedades residenciales disponibles, desde casas unifamiliares hasta condominios de lujo, Pinecrest ofrece algo para todos. ¡Ven a descubrir todo lo que Pinecrest tiene para ofrecer y encuentra tu hogar perfecto en esta hermosa comunidad!"];
    pinecrest.numberOfImages = 5;


    return pinecrest;
}