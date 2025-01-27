import {AreaDto} from "../../models/areas/Area.tsx";

export default function Downtown() {
    const downtown = AreaDto("downtown");
    downtown.nameForProjectFolders = "downtown";
    downtown.officialName = "Downtown";
    downtown.slogan = "El Corazón de la Ciudad";
    downtown.descripcion = ["Descubre Downtown Miami, el corazón vibrante y emocionante de la ciudad. Con su impresionante arquitectura, su amplia oferta de restaurantes y tiendas, y su animada vida nocturna, Downtown Miami es el lugar perfecto para aquellos que buscan una experiencia urbana única. Además, hay muchas opciones de propiedades disponibles, desde lujosos condominios con vistas impresionantes hasta modernos lofts y apartamentos. ¡No pierda la oportunidad de invertir en esta emocionante área de Miami!"];
    downtown.numberOfImages = 12;


    return downtown;
}