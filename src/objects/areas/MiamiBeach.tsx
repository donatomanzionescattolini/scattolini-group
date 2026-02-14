import {AreaDto} from "../../models/areas/Area.tsx";

export default function MiamiBeach() {
    const miamiBeach = AreaDto("miami-beach");
    miamiBeach.name = "miami-beach";
    miamiBeach.titulo = {
        es: "Miami Beach",
        en: "Miami Beach"
    };
    miamiBeach.slogan = {
        es: "La Ciudad Mágica",
        en: "The Magic City"
    };
    miamiBeach.descripcion = {
        es: [
            "Miami Beach es un lugar increíble para invertir en bienes raíces. Con su clima cálido durante todo el año, hermosas playas, vida nocturna vibrante y restaurantes de primera clase, Miami Beach se ha convertido en uno de los destinos más lujosos del mundo . Además, el reciente desarrollo al norte de South Beach y la adición de 23.000 condominios en Downtown Miami en los últimos 10 años, han hecho que Miami se vuelva cada vez más aburguesada, lo que la convierte en un lugar cada vez más apropiado para tener una residencia permanente o un segundo o tercer hogar.",
            "Los individuos de alto valor neto (HNWIs) y los individuos de valor ultra alto (UHNWIs) están invirtiendo cada vez más en propiedades en Miami Beach y en bienes raíces de lujo en Miami . Una inversión inmobiliaria en Miami vale la pena debido a la gran demanda de la ciudad y su revalorización, lo que significa que es más asequible comprar una propiedad y alquilarla, ya que brinda una ventaja a los inversores y propietarios de inmuebles.",
            "Invertir en bienes raíces en Miami Beach es una excelente oportunidad para preservar y hacer crecer su riqueza mientras disfruta de todo lo que esta hermosa ciudad tiene para ofrecer."
        ],
        en: [
            "Miami Beach is an incredible place to invest in real estate. With its year-round warm climate, beautiful beaches, vibrant nightlife and world-class restaurants, Miami Beach has become one of the most luxurious destinations in the world. Additionally, recent development north of South Beach and the addition of 23,000 condominiums in Downtown Miami over the last 10 years have made Miami increasingly gentrified, making it an increasingly appropriate place to have a residence permanent or a second or third home.",
            "High net worth individuals (HNWIs) and ultra high net worth individuals (UHNWIs) are increasingly investing in Miami Beach properties and Miami luxury real estate. A real estate investment in Miami is worth it because of the city's high demand and appreciation, meaning it is more affordable to buy a property and rent it out as it provides an advantage to real estate investors and owners.",
            "Investing in Miami Beach real estate is an excellent opportunity to preserve and grow your wealth while enjoying all that this beautiful city has to offer."
        ]
    };
    miamiBeach.numberOfImages = 15;


    return miamiBeach;
}

