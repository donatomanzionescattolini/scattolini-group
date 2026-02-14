import {AreaDto} from "../../models/areas/Area.tsx";

export default function Downtown() {
    const downtown = AreaDto("downtown");
    downtown.name = "downtown";
    downtown.titulo = {
        es: "Downtown",
        en: "Downtown"
    };
    downtown.slogan = {
        es: "El Corazón de la Ciudad",
        en: "The Heart of the City"
    };
    downtown.descripcion = {
        es: ["Descubre Downtown Miami, el corazón vibrante y emocionante de la ciudad. Con su impresionante arquitectura, su amplia oferta de restaurantes y tiendas, y su animada vida nocturna, Downtown Miami es el lugar perfecto para aquellos que buscan una experiencia urbana única. Además, hay muchas opciones de propiedades disponibles, desde lujosos condominios con vistas impresionantes hasta modernos lofts y apartamentos. ¡No pierda la oportunidad de invertir en esta emocionante área de Miami!"],
        en: ["Discover Downtown Miami, the vibrant and exciting heart of the city. With its stunning architecture, wide range of restaurants and shops, and lively nightlife, Downtown Miami is the perfect place for those seeking a unique urban experience. Additionally, there are many property options available, from luxurious condominiums with stunning views to modern lofts and apartments. Don't miss the opportunity to invest in this exciting area of Miami!"]
    };
    downtown.numberOfImages = 12;


    return downtown;
}