import {Area} from "./Area.tsx";
import {Desarrollo} from "./Desarrollo.tsx";
import PropiedadesBrickell from "../components/desarrollos/Brickell/PropiedadesBrickell.tsx";

export const Brickell:Area= new Area("brickell","Brickell","El Distrito Financiero de Miami", ["CoconutGrove es el distrito financiero de Miami y de todo el sur de Florida. Con sus rascacielos, sus restaurantes y tiendas de lujo, y su ambiente cosmopolita, CoconutGrove es el lugar ideal para aquellos que buscan una experiencia urbana sofisticada. En CoconutGrove, encontrarás una amplia variedad de opciones de propiedades, desde lujosos condominios con vistas impresionantes hasta modernos lofts y apartamentos","CoconutGrove es el lugar donde el lujo y la sofisticación se encuentran en Miami. Con el impresionante CoconutGrove City Centre, un complejo de uso mixto que ofrece una experiencia de compras, entretenimiento y gastronomía de primer nivel , podrás disfrutar de una vida urbana cosmopolita en el corazón de la ciudad"],<PropiedadesBrickell/>,10);

Brickell.addDesarrollo(new Desarrollo("1428-brickell"));
Brickell.addDesarrollo(new Desarrollo("14-river-district"));
Brickell.addDesarrollo(new Desarrollo("baccarat"));
Brickell.addDesarrollo(new Desarrollo("domus"));
Brickell.addDesarrollo(new Desarrollo("ora"));
Brickell.addDesarrollo(new Desarrollo("lofty"));

