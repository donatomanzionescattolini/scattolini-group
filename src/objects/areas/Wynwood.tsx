import {Area} from "../../models/areas/Area";

export default function Wynwood() {

    const WynwoodObject = new Area("wynwood");
    WynwoodObject.titulo = {
        es: "Wynwood",
        en: "Wynwood",
    };
    WynwoodObject.name = "wynwood";
    WynwoodObject.numberOfImages = 21;
    WynwoodObject.slogan = {
        es: "Wynwood empieza aquí.",
        en: "Wynwood starts here.",
    };
    WynwoodObject.descripcion = {
        es: ["Wynwood, ubicado en el corazón de Miami, es una de las zonas más vibrantes y codiciadas para el mercado inmobiliario. Conocido por su arte callejero de renombre mundial y su ambiente cultural único, Wynwood ofrece una mezcla perfecta de modernidad y tradición. La zona ha experimentado un crecimiento significativo en los últimos años, convirtiéndose en un epicentro de innovación y creatividad. Invertir en bienes raíces en Wynwood no solo garantiza una ubicación privilegiada, sino también una alta demanda y un potencial de revalorización constante. La proximidad a centros comerciales, restaurantes de alta gama y una vida nocturna activa hace de Wynwood un lugar ideal para aquellos que buscan un estilo de vida dinámico y cosmopolita.", "Vivir en Wynwood es una experiencia inigualable. Sus calles están llenas de galerías de arte, boutiques exclusivas y cafeterías acogedoras, creando un ambiente bohemio y sofisticado. Los residentes disfrutan de una comunidad diversa y acogedora, con eventos culturales y festivales que se celebran durante todo el año. Además, Wynwood ofrece una excelente conectividad con el resto de Miami, facilitando el acceso a las playas, el distrito financiero y otras áreas clave de la ciudad. Con una combinación de comodidades modernas y un entorno artístico, Wynwood se presenta como una opción excepcional tanto para vivir como para invertir en bienes raíces."],
        en: ["Wynwood, located in the heart of Miami, is one of the most vibrant and sought-after areas in the real estate market. Known for its world-famous street art and unique cultural atmosphere, Wynwood offers a perfect blend of modernity and tradition. The neighborhood has experienced significant growth in recent years, becoming a hub of innovation and creativity. Investing in real estate in Wynwood not only guarantees a prime location, but also strong demand and steady appreciation potential. Its proximity to shopping centers, upscale restaurants, and an active nightlife makes Wynwood ideal for those seeking a dynamic and cosmopolitan lifestyle.", "Living in Wynwood is a unique experience. Its streets are filled with art galleries, exclusive boutiques, and cozy cafés, creating a bohemian yet sophisticated atmosphere. Residents enjoy a diverse and welcoming community, with cultural events and festivals taking place throughout the year. In addition, Wynwood offers excellent connectivity to the rest of Miami, making it easy to reach the beaches, the financial district, and other key areas of the city. With a mix of modern conveniences and an artistic setting, Wynwood stands out as an exceptional option both for living and for real estate investment."],
    };
    return WynwoodObject;

}