import {Area, AreaDto} from "../../models/areas/Area.tsx";

export default function SouthMiami(): Area {

// areasDesarrollos.push(DoralComponent);
    const southMiami: Area = AreaDto("south-miami");
    southMiami.name = "south-miami";
    southMiami.titulo = "South Miami";
    southMiami.slogan = "La Ciudad de la Vida Agradable";
    southMiami.descripcion = ["Descubre South Miami, un lugar donde la elegancia y la comodidad se encuentran. Con su vibrante comunidad, excelentes escuelas y una variedad de tiendas y restaurantes, South Miami es el lugar perfecto para establecer tu hogar. Disfruta de la tranquilidad de sus calles arboladas y la proximidad a las mejores playas de Florida. ¡Ven y encuentra tu hogar ideal en South Miami, donde cada día es una nueva oportunidad para vivir al máximo!"];
    southMiami.numberOfImages = 28;


    return southMiami;
}