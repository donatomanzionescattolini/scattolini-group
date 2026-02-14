import { Area } from "../../models/areas/Area";


export default function DaniaBeach() {

    const DaniaBeachObject = new Area("dania-beach");

    DaniaBeachObject.titulo = {
        es: "Dania Beach",
        en: "Dania Beach"
    };
    DaniaBeachObject.descripcion = {
        es: [
            "¡Descubre el encanto de Dania Beach, el lugar ideal para vivir e invertir! Situada entre Fort Lauderdale y Hollywood, esta ciudad costera ofrece una mezcla de encanto de pueblo pequeño y comodidades modernas. Con su pintoresca playa, un animado puerto deportivo y su cercanía a atracciones como Bass Pro Shops, es perfecta para los amantes de las actividades al aire libre y las familias. Dania Beach también alberga un vibrante distrito de antigüedades, ganándose el título de la \"Capital de Antigüedades del Sur\", lo que la convierte en un destino único para los amantes de las compras y la historia. Comprometida con la vida sostenible, con proyectos certificados por LEED, y con un creciente mercado inmobiliario, Dania Beach es el lugar perfecto para llamar hogar o hacer una inversión inteligente​"
        ],
        en: [
            "Discover the charm of Dania Beach, the ideal place to live and invest! Situated between Fort Lauderdale and Hollywood, this coastal city offers a blend of small-town charm and modern amenities. With its picturesque beach, a lively marina, and proximity to attractions like Bass Pro Shops, it is perfect for outdoor enthusiasts and families. Dania Beach is also home to a vibrant antique district, earning the title of 'Antique Capital of the South,' making it a unique destination for shopping and history lovers. Committed to sustainable living with LEED-certified projects and a growing real estate market, Dania Beach is the perfect place to call home or make a smart investment."
        ]
    };
    DaniaBeachObject.numberOfImages = 22;
    DaniaBeachObject.slogan = {
        es: "Vívela, Disfrútala, Pláyala",
        en: "Live it, Enjoy it, Play it"
    };


    return DaniaBeachObject;


}