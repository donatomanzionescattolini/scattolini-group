import Project from "../../../models/desarrollos/Project.tsx";
import Downtown from "../../areas/Downtown.tsx";

export default function W11() {
    const W11Object = new Project();
    W11Object.banner = true;
    W11Object.area = Downtown();

    W11Object.name = "w11";
    W11Object.numberOfImages = 12;
    W11Object.title = "West Eleventh Residences";
    W11Object.subtitle = "Lleva la vida a una nueva dirección nunca antes imaginada";
    W11Object.introduction = [
        "La vida moderna está en perpetuo movimiento. Siempre estamos encendidos la mudanza. Las residencias en West Eleventh fueron creadas con esa noción en mente. Una experiencia con verdadera flexibilidad de vida para dueños",

        "West Eleventh Residences ofrece las primeras residencias de condominios de lujo administradas de manera centralizada que brindan a los propietarios la opción de hospedar 365 días en Airbnb.",

        "West Eleventh ha reinventado la propiedad de viviendas en condominios de lujo al brindar una verdadera flexibilidad de vida. Cada residencia completamente amueblada ofrece un lugar al que llamar hogar y la " +
        "oportunidad de ser anfitrión exclusivo en Airbnb.",
        "Todas las comodidades fueron consideradas en West Eleventh, desde las infinitas indulgencias disponibles en el entretenimiento experiencial de tres niveles y el salón culinario hasta un nivel de comodidades vibrante con una piscina estilo centro turístico con áreas de salón privadas. Todo esto, anclado por una presencia callejera que emana naturalmente la energía del emocionante vecindario circundante del edificio.  ",
    ];
    W11Object.traits = {
        amenities: <></>,
        building: (
            <>
                <ul>
                    <li>44 Historias / 659 residencias de estudios y 1 dormitorio</li>
                    <li>1050 N Miami Ave, Miami, FL 33136, Estados Unidos</li>
                    <li>
                        Gestión totalmente centralizada de la propiedad y servicios de
                        alojamiento
                    </li>
                    <li>
                        Posibilidad de hospedar 365 días en Airbnb. El alojamiento está
                        sujeto a las leyes locales y otras restricciones
                    </li>
                    <li>
                        Vistas del horizonte de Miami, la Bahía de Biscayne y el Océano
                        Atlántico
                    </li>
                    <li>
                        30,000 SF Tri-Level Experiential Entertainment and Culinary Hall
                    </li>
                    <li>Restaurante de autor</li>
                    <li>
                        Vibrante nivel de comodidades con una piscina estilo centro
                        turístico con áreas de salón privadas
                    </li>
                    <li>Centro de fitness y bienestar de última generación</li>
                    <li>Espacio de vestíbulo residencial moderno y de alto diseño</li>
                    <li>Colección curada de instalaciones de arte personalizadas</li>
                    <li>
                        Cuenta con la última tecnología de "construcción inteligente"
                    </li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>
                        Selecciones de pisos incluidas con las especificaciones
                        recomendadas por Cotofana Designs
                    </li>
                    <li>
                        Armarios totalmente empotrados en los dormitorios principales con
                        todas las estanterías y cajones preinstalados para una comodidad
                        absoluta
                    </li>
                    <li>Tonos personalizados</li>
                    <li>Construido en lavadora y secadora de primera línea</li>
                    <li>
                        Cada residencia ofrece un nivel de eficiencia sin precedentes a
                        través de una experiencia de tecnología de hogar inteligente PMG
                        para una personalización perfecta con solo tocar un botón.
                    </li>
                    <li>
                        Todas las residencias vienen equipadas con un paquete de
                        iluminación contemporáneo, que incluye iluminación empotrada,
                        atenuadores y control de iluminación.
                    </li>
                    <li>
                        Precableado para comunicaciones de alta velocidad, múltiples
                        líneas telefónicas y cable
                    </li>
                    <li>Balcones franceses en residencias selectas</li>
                    <li>
                        Cocinas totalmente integradas con encimeras personalizadas,
                        salpicaduras y un fregadero contemporáneo de montaje inferior
                    </li>
                    <li>
                        El paquete de electrodomésticos de primera línea incluye
                        microondas, lavavajillas, horno empotrado y refrigerador
                    </li>
                    <li>
                        Gabinetes de cocina y baño importados y personalizados por
                        Italkraft
                    </li>
                    <li>Accesorios, características y accesorios de baño WaterWorks</li>
                    <li>
                        Encimeras de baño personalizadas y pisos y paredes terminados en
                        áreas húmedas
                    </li>
                    <li>Duchas acristaladas</li>
                </ul>
            </>
        )
    };

    return W11Object;
}