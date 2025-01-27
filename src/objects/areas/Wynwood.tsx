import {Area} from "../../models/areas/Area";

export default function Wynwood() {

    const WynwoodObject = new Area("wynwood");
    WynwoodObject.officialName = "Wynwood";
    WynwoodObject.nameForProjectFolders = "wynwood";
    WynwoodObject.numberOfImages = 21;
    WynwoodObject.slogan = "Wynwood empieza aquí.";
    WynwoodObject.descripcion = ["Wynwood, ubicado en el corazón de Miami, es una de las zonas más vibrantes y codiciadas para el mercado inmobiliario. Conocido por su arte callejero de renombre mundial y su ambiente cultural único, Wynwood ofrece una mezcla perfecta de modernidad y tradición. La zona ha experimentado un crecimiento significativo en los últimos años, convirtiéndose en un epicentro de innovación y creatividad. Invertir en bienes raíces en Wynwood no solo garantiza una address privilegiada, sino también una alta demanda y un potencial de revalorización constante. La proximidad a centros comerciales, restaurantes de alta gama y una vida nocturna activa hace de Wynwood un lugar ideal para aquellos que buscan un estilo de vida dinámico y cosmopolita.", "Vivir en Wynwood es una experiencia inigualable. Sus calles están llenas de galerías de arte, boutiques exclusivas y cafeterías acogedoras, creando un ambiente bohemio y sofisticado. Los residentes disfrutan de una comunidad diversa y acogedora, con eventos culturales y festivales que se celebran durante todo el año. Además, Wynwood ofrece una excelente conectividad con el resto de Miami, facilitando el acceso a las playas, el distrito financiero y otras áreas clave de la ciudad. Con una combinación de comodidades modernas y un entorno artístico, Wynwood se presenta como una opción excepcional tanto para vivir como para invertir en bienes raíces."];
    return WynwoodObject;

}