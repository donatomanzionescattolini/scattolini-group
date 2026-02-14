import {Area, AreaDto} from "../../models/areas/Area.tsx";

export default function BayHarbor(): Area {

// areasDesarrollos.push(DoralComponent);
    const bayHarbor: Area = AreaDto("bay-harbor");
    bayHarbor.name = "bay-harbor";
    bayHarbor.titulo = {
        es: "Bay Harbor Islands",
        en: "Bay Harbor Islands"
    };
    bayHarbor.slogan = {
        es: "El Tesoro Inadvertido de la Bahía",
        en: "The Bay's Untapped Treasure"
    };
    bayHarbor.descripcion = {
        es: [
            "Descubre el pintoresco y elegante distrito de negocios de Bay Harbor Islands, ubicado a solo dos cuadras en Kane Concourse (96th Street). Los visitantes se sorprenden al encontrar una hermosa explanada con excelentes tiendas, restaurantes, oficinas y arte.",
            "Bay Harbor Islands es un lugar ideal para vivir e invertir. Las dos pequeñas islas en forma de riñón ofrecen un oasis verde para los que quieren escapar del bullicio de la gran ciudad. Vivir en Bay Harbor Islands ofrece a los residentes una sensación urbana, y la mayoría son dueños de sus casas.",
            "En general, Bay Harbor Islands ofrece un gran estilo de vida, cultura y ubicación para los que buscan invertir o vivir en la zona. Experimenta el encanto y la sofisticación de Bay Harbor Islands por ti mismo."
        ],
        en: [
            "Discover the picturesque and elegant business district of Bay Harbor Islands, located just two blocks away on Kane Concourse (96th Street). Visitors are surprised to find a beautiful esplanade with excellent shops, restaurants, offices, and art.",
            "Bay Harbor Islands is an ideal place to live and invest. The two small kidney-shaped islands offer a green oasis for those who want to escape the hustle and bustle of the big city. Living in Bay Harbor Islands offers residents an urban feel, and most are homeowners.",
            "Overall, Bay Harbor Islands offers a great lifestyle, culture, and location for those looking to invest or live in the area. Experience the charm and sophistication of Bay Harbor Islands for yourself."
        ]
    };
    bayHarbor.numberOfImages = 13;


    return bayHarbor;
}