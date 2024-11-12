import {Area} from "../../models/areas/Area";


export default function Hollywood() {
    const HollywoodObject = new Area("hollywood");
    HollywoodObject.titulo = "Hollywood";
    HollywoodObject.descripcion = ["Hollywood, Florida, es una joya escondida en la costa sureste. Con sus playas de arena blanca, su vibrante vida nocturna y su amplio acceso a actividades al aire libre, ofrece algo para todos. Invertir aquí no solo garantiza una calidad de vida excepcional, sino también oportunidades de crecimiento económico. Desde la famosa Hollywood Beach Broadwalk hasta las tiendas y restaurantes de lujo, Hollywood es el lugar ideal para vivir y prosperar."];

    HollywoodObject.numberOfImages = 19;
    HollywoodObject.slogan = "La mejor ciudad del sur de Florida para vivir, aprender, trabajar, invertir y divertirse.";


    return HollywoodObject;
}