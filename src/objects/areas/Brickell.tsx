import {Area, AreaDto} from "../../models/areas/Area.tsx";

export default function Brickell(): Area {


    const brickell = AreaDto("brickell");

    brickell.name = "brickell";
    brickell.titulo = "Brickell";
    brickell.slogan = "El Distrito Financiero de Miami";
    brickell.descripcion = ["Brickell es el distrito financiero de Miami y de todo el sur de Florida. Con sus rascacielos, sus restaurantes y tiendas de lujo, y su ambiente cosmopolita, Brickell es el lugar ideal para aquellos que buscan una experiencia urbana sofisticada. En Brickell, encontrarás una amplia variedad de opciones de propiedades, desde lujosos condominios con vistas impresionantes hasta modernos lofts y apartamentos", "Brickell es el lugar donde el lujo y la sofisticación se encuentran en Miami. Con el impresionante Brickell City Centre, un complejo de uso mixto que ofrece una experiencia de compras, entretenimiento y gastronomía de primer nivel , podrás disfrutar de una vida urbana cosmopolita en el corazón de la ciudad"];
    brickell.numberOfImages = 10;


    return brickell;
}


