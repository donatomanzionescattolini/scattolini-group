import {Area} from "../../models/areas/Area";


export default function DaniaBeach() {

    const DaniaBeachObject = new Area("dania-beach");

    DaniaBeachObject.title = "Dania Beach";
    DaniaBeachObject.descripcion = ["¡Descubre el encanto de Dania Beach, el lugar ideal para vivir e invertir! Situada entre Fort Lauderdale y Hollywood, esta ciudad costera ofrece una mezcla de encanto de pueblo pequeño y comodidades modernas. Con su pintoresca playa, un animado puerto deportivo y su cercanía a atracciones como Bass Pro Shops, es perfecta para los amantes de las actividades al aire libre y las familias. Dania Beach también alberga un vibrante distrito de antigüedades, ganándose el título de la \"Capital de Antigüedades del Sur\", lo que la convierte en un destino único para los amantes de las compras y la historia. Comprometida con la vida sostenible, con proyectos certificados por LEED, y con un creciente mercado inmobiliario, Dania Beach es el lugar perfecto para llamar hogar o hacer una inversión inteligente​"];
    DaniaBeachObject.numberOfImages = 22;
    DaniaBeachObject.slogan = "Vívela, Disfrútala, Pláyala";


    return DaniaBeachObject;


}