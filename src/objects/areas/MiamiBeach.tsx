import {AreaDto} from "../../models/areas/Area.tsx";

export default function MiamiBeach() {
    const miamiBeach = AreaDto("miami-beach");
    miamiBeach.name = "miami-beach";
    miamiBeach.titulo = "Miami Beach";
    miamiBeach.slogan = "La Ciudad Mágica";
    miamiBeach.descripcion = ["Miami Beach es un lugar increíble para invertir en bienes raíces. Con su clima cálido durante todo el año, hermosas playas, vida nocturna vibrante y restaurantes de primera clase, Miami Beach se ha convertido en uno de los destinos más lujosos del mundo . Además, el reciente desarrollo al norte de South Beach y la adición de 23.000 condominios en Downtown Miami en los últimos 10 años, han hecho que Miami se vuelva cada vez más aburguesada, lo que la convierte en un lugar cada vez más apropiado para tener una residencia permanente o un segundo o tercer hogar.", "Los individuos de alto valor neto (HNWIs) y los individuos de valor ultra alto (UHNWIs) están invirtiendo cada vez más en propiedades en Miami Beach y en bienes raíces de lujo en Miami . Una inversión inmobiliaria en Miami vale la pena debido a la gran demanda de la ciudad y su revalorización, lo que significa que es más asequible comprar una propiedad y alquilarla, ya que brinda una ventaja a los inversores y propietarios de inmuebles.", "Invertir en bienes raíces en Miami Beach es una excelente oportunidad para preservar y hacer crecer su riqueza mientras disfruta de todo lo que esta hermosa ciudad tiene para ofrecer."];
    miamiBeach.numberOfImages = 15;


    return miamiBeach;
}

