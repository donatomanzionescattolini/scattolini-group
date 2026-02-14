import { Area } from "../../models/areas/Area";




export default function Hollywood() {
    const HollywoodObject = new Area("hollywood");
    HollywoodObject.titulo = {
        es: "Hollywood",
        en: "Hollywood"
    };
    HollywoodObject.descripcion = {
        es: [
            "Hollywood, Florida, es una joya escondida en la costa sureste. Con sus playas de arena blanca, su vibrante vida nocturna y su amplio acceso a actividades al aire libre, ofrece algo para todos. Invertir aquí no solo garantiza una calidad de vida excepcional, sino también oportunidades de crecimiento económico. Desde la famosa Hollywood Beach Broadwalk hasta las tiendas y restaurantes de lujo, Hollywood es el lugar ideal para vivir y prosperar."
        ],
        en: [
            "Hollywood, Florida, is a hidden gem on the southeast coast. With its white sand beaches, vibrant nightlife, and ample access to outdoor activities, it offers something for everyone. Investing here not only guarantees an exceptional quality of life but also opportunities for economic growth. From the famous Hollywood Beach Broadwalk to luxury shops and restaurants, Hollywood is the ideal place to live and thrive."
        ]
    };

    HollywoodObject.numberOfImages = 19;
    HollywoodObject.slogan = {
        es: "La mejor ciudad del sur de Florida para vivir, aprender, trabajar, invertir y divertirse.",
        en: "The best city in South Florida to live, learn, work, invest and have fun."
    };


    return HollywoodObject;
}