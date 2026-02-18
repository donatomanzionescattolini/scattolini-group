import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MiamiBeach from "../../areas/MiamiBeach";

export default function Palma(lang: "en" | "es" = "es") {
    const PalmaObject = new Desarrollo();
    PalmaObject.banner = true;
    PalmaObject.nombre = "palma";
    PalmaObject.titulo = {
        es: "Palma | Miami Beach Residences",
        en: "Palma | Miami Beach Residences"
    };
    PalmaObject.numberOfImages = 15;
    PalmaObject.introduccion = [lang === "en"
        ? "Palma Residences Miami Beach is a spectacular condominium tower in the North Beach area. This 13-story building offers 126 luxury apartments with balconies, ranging from 468 square feet for a one-bedroom apartment to 1,086 square feet for a two-bedroom unit. Super-luxury amenities include a terrace with a landscaped pool deck, seating, cabanas, and a bar; 40 vehicle parking spaces and 140 bicycle spaces; and 7,000 square feet of commercial space."
        : "Palma Residences Miami Beach es una espectacular torre de condominios en el área de North Beach. Este edificio de 13 pisos ofrece 126 apartamentos de lujo con balcones, que varían de 468 pies cuadrados para un apartamento de una habitación a 1,086 pies cuadrados para una unidad de dos habitaciones. Las comodidades de superlujo incluyen una terraza con una plataforma de piscina ajardinada, asientos, cabañas y un bar; 40 espacios de estacionamiento para vehículos y 140 espacios para bicicletas; y 7,000 pies cuadrados de espacio comercial."];
    PalmaObject.slogan = {
        es: "Una Experiencia Mediterránea que Comienza en Miami Beach",
        en: "A Mediterranean Experience Beginning in Miami Beach"
    };
    PalmaObject.area = MiamiBeach();
    PalmaObject.caracteristicas = {
        edificio: lang === "en" ? <ul>
            <li>Iconic 14-story building designed by Built Form</li>
            <li>Prime location in Miami Beach, just steps from the beach</li>
            <li>Cutting-edge eco-friendly building with SMART technology and LEED Gold certification</li>
            <li>Commercial spaces at ground floor level</li>
        </ul> : <ul>
            <li>Edificio emblemático de 14 pisos diseñado por Built Form</li>
            <li>Ubicación privilegiada en Miami Beach, a solo unos pasos de la playa</li>
            <li>Edificio ecológico de vanguardia con tecnología SMART y certificación LEED Gold</li>
            <li>Locales comerciales al nivel de planta baja</li>
        </ul>,
        residencias: lang === "en" ?
            <ul>
                <li>Luxury beachfront residences with modern, open designs. All residences are fully finished and furnished by</li>
                <li>award-winning Studio Ramírez</li>
                <li>Panoramic ocean and bay views in select residences. Private balconies to enjoy the outdoors from your home. Luxury 9-10 foot ceilings that provide spaciousness and light to your residence. Floor-to-ceiling sliding glass doors with impact-resistant glass. Residences pre-wired for high-speed internet and WiFi. Energy-efficient central air conditioning and heating system. Stacked washer and dryer included. Spacious closets for your chic beachfront wardrobe</li>
                <li>KITCHEN</li>
                <li>Imported European cabinets with premium hardware. Bosch appliance package with refrigerator, oven, stove, microwave, and dishwasher. Premium stone countertops and backsplashes for the ultimate culinary experience. Contemporary stainless steel undermount sink. Elegant faucet with integrated spray handle</li>
                <li>MASTER BATHROOM</li>
                <li>Imported European cabinets with premium hardware and drawer pulls. Premium stone countertops and backsplashes. Rectangular porcelain sinks with elegant dual faucets (in select residences). Custom-finished porcelain floors and walls in wet areas. Glass shower enclosures. Premium European-style fixtures and accessories</li>
            </ul> :
            <ul>
                <li>Residencias de lujo en la playa con diseños modernos y abiertos Todas las residencias están completamente terminadas y amobladas por</li>
                <li>el galardonado Studio Ramírez</li>
                <li>Vistas panorámicas al océano y la bahía en algunas residencias Balcones privados para disfrutar el aire libre desde tu hogar Techos de lujo de 9-10 pies que brindan amplitud y luz a tu residencia Puertas corredizas de piso a techo a base de vidrio resistente a impactos Residencias pre-cableadas para internet de alta velocidad y WiFi Sistema de aire acondicionado y calefacción central eficiente en energía Lavadora y secadora apiladas incluidas Amplios armarios para tu guardarropa de estilo playero chic</li>
                <li>COCINA</li>
                <li>Gabinetes europeos importados con accesorios premium Paquete de electrodomésticos Bosch con refrigerador, horno, cocina, microondas y lavavajillas Encimeras y salpicaderos de piedra premium para la experiencia culinaria definitiva Fregadero de acero inoxidable contemporáneo montado debajo del mostrador Grifo elegante con mango de rociado integrado</li>
                <li>BAÑO PRINCIPAL</li>
                <li>Gabinetes europeos importados con herrajes premium y tiradores de cajones Encimeras y salpicaderos de piedra premium Lavabos de porcelana rectangular con elegantes grifos dobles (en algunas residencias) Suelos y paredes de porcelana con acabado personalizado en áreas húmedas Cabinas de ducha de vidrio Accesorios y complementos de estilo europeo premium</li>
            </ul>,
        amenidades: lang === "en" ? <>
            <ul>
                <li>Reception</li>
                <li>Double-height lobby with floor-to-ceiling windows</li>
                <li>24-hour secure access to building, amenities, garage, and private residential areas</li>
                <li>Resort-style pool with luxurious lounge chairs and cabanas</li>
                <li>Outdoor summer kitchen with bar and event area on pool terrace</li>
                <li>Residents' lounge at pool level with indoor and outdoor seating for private events</li>
                <li>State-of-the-art fully equipped fitness center with Technogym and views of the resort-style pool</li>
                <li>Hot tub and cold plunge pools</li>
                <li>Smart building with advanced technology and high-speed fiber optic internet access</li>
                <li>WiFi in all common areas.</li>
            </ul>
        </> : <>
            <ul>
                <li>Recepción</li>
                <li>Vestíbulo de doble altura con ventanas de piso a techo</li>
                <li>Acceso seguro las 24 horas al edificio, amenidades, garaje y áreas residenciales privadas</li>
                <li>Piscina estilo resort con sillones y cabañas lujosas</li>
                <li>Cocina de verano al aire libre con bar y área de eventos en la terraza de la piscina</li>
                <li>Salón para residentes en el nivel de la piscina con asientos en el interior y exterior</li>
                <li>para eventos privados</li>
                <li>Centro de ejercicio de última generación totalmente equipado con Technogym y vistas</li>
                <li>a la piscina de estilo resort</li>
                <li>Jacuzzi de hidromasaje y piscinas de inmersión fría</li>
                <li>Edificio inteligente con tecnología avanzada y acceso a internet de fibra óptica de alta velocidad</li>
                <li>WiFi en todas las áreas comunes.</li>
            </ul>
        </>
    };
    return PalmaObject;
}