import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MiamiBeach from "../../areas/MiamiBeach";
export default function Palma() {
    const PalmaObject = new Desarrollo();
    PalmaObject.banner = true;
    PalmaObject.nombre = "palma";
    PalmaObject.titulo = "Palma | Miami Beach Residences";
    PalmaObject.numberOfImages = 15;
    PalmaObject.introduccion = ["Palma Residences Miami Beach es una espectacular torre de condominios en el área de North Beach. Este edificio de 13 pisos ofrece 126 apartamentos de lujo con balcones, que varían de 468 pies cuadrados para un apartamento de una habitación a 1,086 pies cuadrados para una unidad de dos habitaciones. Las comodidades de superlujo incluyen una terraza con una plataforma de piscina ajardinada, asientos, cabañas y un bar; 40 espacios de estacionamiento para vehículos y 140 espacios para bicicletas; y 7,000 pies cuadrados de espacio comercial."];
    PalmaObject.slogan = "Una Experiencia Mediterránea que Comienza en Miami Beach";
    PalmaObject.area = MiamiBeach();
    PalmaObject.caracteristicas = {
        edificio: <ul>
        <li>Edificio emblemático de 14 pisos diseñado por Built Form</li>
        <li>Ubicación privilegiada en Miami Beach, a solo unos pasos de la playa</li>
        <li>Edificio ecológico de vanguardia con tecnología SMART y certificación LEED Gold</li>
        <li>Locales comerciales al nivel de planta baja</li>
    </ul>,
        residencias:
            <ul>
                <li>Residencias de lujo en la playa con diseños modernos y abiertos Todas las residencias están completamente terminadas y amobladas por</li>
                <li>el galardonado Studio Ramírez</li>
                <li>Vistas panorámicas al océano y la bahía en algunas residencias Balcones privados para disfrutar el aire libre desde tu hogar Techos de lujo de 9-10 pies que brindan amplitud y luz a tu residencia Puertas corredizas de piso a techo a base de vidrio resistente a impactos Residencias pre-cableadas para internet de alta velocidad y WiFi Sistema de aire acondicionado y calefacción central eficiente en energía Lavadora y secadora apiladas incluidas Amplios armarios para tu guardarropa de estilo playero chic</li>
                <li>COCINA</li>
                <li>Gabinetes europeos importados con accesorios premium Paquete de electrodomésticos Bosch con refrigerador, horno, cocina, microondas y lavavajillas Encimeras y salpicaderos de piedra premium para la experiencia culinaria definitiva Fregadero de acero inoxidable contemporáneo montado debajo del mostrador Grifo elegante con mango de rociado integrado</li>
                <li>BAÑO PRINCIPAL</li>
                <li>Gabinetes europeos importados con herrajes premium y tiradores de cajones Encimeras y salpicaderos de piedra premium Lavabos de porcelana rectangular con elegantes grifos dobles (en algunas residencias) Suelos y paredes de porcelana con acabado personalizado en áreas húmedas Cabinas de ducha de vidrio Accesorios y complementos de estilo europeo premium</li>
            </ul>,
        amenidades: <>
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
            </ul></>
    };
    return PalmaObject;
}