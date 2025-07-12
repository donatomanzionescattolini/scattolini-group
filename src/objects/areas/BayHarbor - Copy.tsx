import {Area, AreaDto} from "../../models/areas/Area.tsx";

export default function BayHarbor(): Area {

// areasDesarrollos.push(DoralComponent);
    const bayHarbor: Area = AreaDto("bay-harbor");
    bayHarbor.name = "bay-harbor";
    bayHarbor.titulo = "Bay Harbor Islands";
    bayHarbor.slogan = "El Tesoro Inadvertido de la Bahía";
    bayHarbor.descripcion = ["Descubre el pintoresco y elegante distrito de negocios de Bay Harbor Islands, ubicado a solo dos cuadras en Kane Concourse (96th Street). Los visitantes se sorprenden al encontrar una hermosa explanada con excelentes tiendas, restaurantes, oficinas y arte.", "Bay Harbor Islands es un lugar ideal para vivir e invertir. Las dos pequeñas islas en forma de riñón ofrecen un oasis verde para los que quieren escapar del bullicio de la gran ciudad. Vivir en Bay Harbor Islands ofrece a los residentes una sensación urbana, y la mayoría son dueños de sus casas.", "En general, Bay Harbor Islands ofrece un gran estilo de vida, cultura y ubicación para los que buscan invertir o vivir en la zona. Experimenta el encanto y la sofisticación de Bay Harbor Islands por ti mismo."];
    bayHarbor.numberOfImages = 13;


    return bayHarbor;
}