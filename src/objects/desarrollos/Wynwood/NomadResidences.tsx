import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Wynwood from "../../areas/Wynwood";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function NomadResidences(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("nomad-residences", lang);

    const NomadResidencesObject = new Desarrollo(Wynwood());
    NomadResidencesObject.nombre = "nomad-residences";
    NomadResidencesObject.titulo = getLocalizedField("titulo", "Nomad Residences");
    NomadResidencesObject.slogan = getLocalizedField("slogan", "Carácter individual, un mundo de confort");
    NomadResidencesObject.introduccion = getLocalizedArray("introduccion", ["El Nomad Wynwood Residences cuenta con 329 residencias de lujo. Las unidades varían en tamaño desde 478 pies cuadrados hasta 911 pies cuadrados. Fue desarrollado por Related Group, el prestigioso desarrollador detrás de Icon Brickell, SLS Lux, Brickell Heights, Hyde Beach, Baccarat Residences y muchos otros edificios de ultra lujo en el sur de Florida. Diseñado por Arquitectonica y con un elegante diseño interior de Design Agency. Este condominio residencial ubicado en el centro se encuentra en la vibrante área de Wynwood de Miami, Florida. Algunas de las atracciones más importantes son las paredes de Wynwood, las galerías de arte, la alta cocina, las tiendas y los lugares culturales que brindarán a los residentes una experiencia de vida como en ningún otro lugar del sur de la Florida."]);
    NomadResidencesObject.banner = true;
    NomadResidencesObject.ubicación = getLocalizedField("ubicacion", "280 NW 27th Street, Miami, FL 33127");
    NomadResidencesObject.numberOfUnits = 329;
    NomadResidencesObject.numberOfFloors = 9;
    NomadResidencesObject.numberOfImages = 20;
    NomadResidencesObject.caracteristicas = {
        edificio: <>
            <dl>
                <dt>{lang === "es" ? "Ubicación" : "Location"}</dt>
                <dd>{NomadResidencesObject.ubicación}</dd>
                <dt>{lang === "es" ? "Pisos" : "Floors"}</dt>
                <dd>{NomadResidencesObject.numberOfFloors}</dd>
                <dt>{lang === "es" ? "Unidades" : "Units"}</dt>
                <dd>{NomadResidencesObject.numberOfUnits}</dd>
            </dl>
        </>,

        residencias: <>
            <ul>
                <li>{lang === "es" ? "Totalmente amueblado y creativamente seleccionado por NoMad y la galardonada DesignAgency" : "Fully furnished and creatively curated by NoMad and the award-winning DesignAgency"}</li>
                <li>{lang === "es" ? "Puertas correderas de vidrio de piso a techo" : "Floor-to-ceiling glass sliding doors"}</li>
                <li>{lang === "es" ? "Balcones privados en todas las residencias" : "Private balconies in all residences"}</li>
                <li>{lang === "es" ? "Vestidores espaciosos en la mayoría de las residencias" : "Spacious walk-in closets in most residences"}</li>
                <li>{lang === "es" ? "Techos de 9+ pies" : "9+ foot ceilings"}</li>
                <li>{lang === "es" ? "Cocinas modernas y aerodinámicas con electrodomésticos Bosch" : "Modern, streamlined kitchens with Bosch appliances"}</li>
                <li>{lang === "es" ? "Gabinetes importados de diseño italiano" : "Italian-designed imported cabinetry"}</li>
                <li>{lang === "es" ? "Diseños adaptables y abiertos" : "Flexible, open layouts"}</li>
                <li>{lang === "es" ? "Exquisitas encimeras de piedra" : "Exquisite stone countertops"}</li>
                <li>{lang === "es" ? "Accesorios de latón en baños" : "Brass bathroom fixtures"}</li>
                <li>{lang === "es" ? "Amplias duchas de hidromasaje" : "Spacious rain showers"}</li>
                <li>{lang === "es" ? "Lavadora y secadora" : "Washer and dryer"}</li>
            </ul></>,
        amenidades: <><ul>
            <li>{lang === "es" ? "Curaduría y diseño NoMad aclamados a nivel mundial" : "World-acclaimed NoMad curation and design"}</li>
            <li>{lang === "es" ? "Restaurante y bar NoMad en la azotea con ascensor independiente" : "NoMad rooftop restaurant and bar with independent elevator"}</li>
            <li>{lang === "es" ? "Paisajismo inspirado e impecable" : "Inspired and impeccable landscaping"}</li>
            <li>{lang === "es" ? "Piscina en la azotea de servicio completo, terraza y cabañas" : "Full-service rooftop pool, deck, and cabanas"}</li>
            <li>{lang === "es" ? "Conserjería las 24 horas y seguridad del edificio" : "24-hour concierge and building security"}</li>
            <li>{lang === "es" ? "Dos amplios vestíbulos y locales comerciales" : "Two spacious lobbies and retail space"}</li>
            <li>{lang === "es" ? "Servicio de aparcacoches 24/7 y garaje en el edificio" : "24/7 valet service and on-site garage"}</li>
            <li>{lang === "es" ? "Centro de fitness y bienestar de primer nivel, con césped dedicado al fitness al aire libre" : "World-class fitness and wellness center, with lawn dedicated to outdoor fitness"}</li>
            <li>{lang === "es" ? "Zona de parrillas y cine al aire libre" : "Grilling area and outdoor cinema"}</li>
            <li>{lang === "es" ? "Amplia biblioteca y espacios de coworking" : "Expansive library and coworking spaces"}</li>
            <li>{lang === "es" ? "Almacenamiento de bicicletas" : "Bicycle storage"}</li>
            <li>{lang === "es" ? "Cocina en la residencia entregada a pedido" : "In-residence dining delivered on request"}</li>
            <li>{lang === "es" ? "Servicios de check-in dedicados" : "Dedicated check-in services"}</li>
            <li>{lang === "es" ? "Acceso al ascensor con control privado" : "Elevator access with private control"}</li>
            <li>{lang === "es" ? "Climatización inteligente" : "Smart climate control"}</li>
            <li>{lang === "es" ? "Almacenamiento privado" : "Private storage"}</li>
            <li>{lang === "es" ? "Se admiten mascotas" : "Pet-friendly"}</li>
        </ul></>
    }


    return NomadResidencesObject;

}
