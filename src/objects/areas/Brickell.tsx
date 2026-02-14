import {Area, AreaDto} from "../../models/areas/Area.tsx";

export default function Brickell(): Area {


    const brickell = AreaDto("brickell");

    brickell.name = "brickell";
    brickell.titulo = {
        es: "Brickell",
        en: "Brickell"
    };
    brickell.slogan = {
        es: "El Distrito Financiero de Miami",
        en: "Miami's Financial District"
    };
    brickell.descripcion = {
        es: [
            "Brickell es el distrito financiero de Miami y de todo el sur de Florida. Con sus rascacielos, sus restaurantes y tiendas de lujo, y su ambiente cosmopolita, Brickell es el lugar ideal para aquellos que buscan una experiencia urbana sofisticada. En Brickell, encontrarás una amplia variedad de opciones de propiedades, desde lujosos condominios con vistas impresionantes hasta modernos lofts y apartamentos",
            "Brickell es el lugar donde el lujo y la sofisticación se encuentran en Miami. Con el impresionante Brickell City Centre, un complejo de uso mixto que ofrece una experiencia de compras, entretenimiento y gastronomía de primer nivel , podrás disfrutar de una vida urbana cosmopolita en el corazón de la ciudad"
        ],
        en: [
            "Brickell is the financial district of Miami and all of South Florida. With its skyscrapers, luxury restaurants and shops, and cosmopolitan atmosphere, Brickell is the ideal place for those seeking a sophisticated urban experience. In Brickell, you will find a wide variety of property options, from luxurious condominiums with stunning views to modern lofts and apartments.",
            "Brickell is where luxury and sophistication meet in Miami. With the impressive Brickell City Centre, a mixed-use complex offering a world-class shopping, entertainment and dining experience, you can enjoy a cosmopolitan urban life in the heart of the city."
        ]
    };
    brickell.numberOfImages = 10;


    return brickell;
}


