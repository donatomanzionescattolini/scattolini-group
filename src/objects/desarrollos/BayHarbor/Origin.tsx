import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import BayHarbor from "../../areas/BayHarbor.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function Origin(lang: "en" | "es" = "es") {
    const { getLocalizedField } = getDesarrolloI18n("origin", lang);
    const OriginObject = new Desarrollo();


    OriginObject.video =

        <iframe
            className=" mx-auto"
            height={500}
            src="https://www.youtube.com/embed/9eegKJbb5vQ?autoplay=1&controls=0"
            title="Sophisticated Waterfront Living : Origin Residences by artefacto | Bay Harbor Islands"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>;
    OriginObject.banner = true;
    OriginObject.nombre = "origin";
    OriginObject.caracteristicas = {
        edificio: (
            <>
                <ul>
                    <li>
                        {lang === "es" ? "Piscina panorámica en la azotea con cocinas de verano junto a la piscina y bar" : "Rooftop panoramic pool with poolside summer kitchens and bar"}
                    </li>
                    <li>{lang === "es" ? "Gimnasio con equipos de última generación" : "State-of-the-art fitness center"}</li>
                    <li>
                        {lang === "es" ? "Servicios personalizados, seguridad las 24 horas y tecnología avanzada" : "Personalized services, 24-hour security, and advanced technology"}
                    </li>
                    <li>
                        {lang === "es" ? "Estacionamiento sin asistencia designado para todas las residencias" : "Designated self-parking for all residences"}
                    </li>
                    <li>{lang === "es" ? "Estaciones de carga para vehículos eléctricos" : "Electric vehicle charging stations"}</li>
                    <li>
                        {lang === "es" ? "Fibra hasta el hogar para video e Internet de alta velocidad" : "Fiber to the home for high-speed video and Internet"}
                    </li>
                    <li>
                        {lang === "es" ? "Unidades de almacenamiento convenientemente ubicadas en cada piso residencial" : "Conveniently located storage units on each residential floor"}
                    </li>
                    <li>
                        {lang === "es" ? "Marina con 8 muelles para botes que van desde 25 a 40 pies" : "Marina with 8 boat slips ranging from 25 to 40 feet"}
                    </li>
                    <li>
                        {lang === "es" ? "Acceso directo al Océano Atlántico a través de la ensenada de Haulover, así como acceso directo a las vías navegables intracosteras de Miami y Fort Lauderdale" : "Direct access to the Atlantic Ocean via Haulover Inlet, as well as direct access to Miami and Fort Lauderdale intracoastal waterways"}
                    </li>
                    <li>{lang === "es" ? "Cabañas privadas frente al mar" : "Private waterfront cabanas"}</li>
                    <li>
                        {lang === "es" ? "Muelle de lanzamiento de deportes acuáticos para kayaks y tablas de paddle surf" : "Water sports launching dock for kayaks and paddleboards"}
                    </li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>
                        {lang === "es" ? "Puertas y ventanas corredizas de vidrio resistentes a los impactos del piso al techo" : "Impact-resistant floor-to-ceiling glass sliding doors and windows"}
                    </li>
                    <li>
                        {lang === "es" ? "Sistema de aire acondicionado y calefacción de bajo consumo: con termostatos Nest" : "Energy-efficient air conditioning and heating system with Nest thermostats"}
                    </li>
                    <li>
                        {lang === "es" ? "Amplios diseños de piso con alturas de techo de hasta 9 pies" : "Spacious floor plans with ceiling heights up to 9 feet"}
                    </li>
                    <li>{lang === "es" ? "PH Residences cuenta con techos de 11 pies" : "PH Residences feature 11-foot ceilings"}</li>
                    <li>
                        {lang === "es" ? "Cocinas italianas importadas totalmente equipadas con electrodomésticos de última generación" : "Fully equipped imported Italian kitchens with state-of-the-art appliances"}
                    </li>
                    <li>{lang === "es" ? "Baños modernos con mármol italiano y gabinetes europeos" : "Modern bathrooms with Italian marble and European cabinetry"}</li>
                    <li>{lang === "es" ? "Pisos de porcelana italiana en toda la casa" : "Italian porcelain flooring throughout"}</li>
                    <li>{lang === "es" ? "Balcones privados panorámicos en cada residencia" : "Panoramic private balconies in each residence"}</li>
                    <li>{lang === "es" ? "Vestidores de gran tamaño" : "Oversized walk-in closets"}</li>
                    <li>{lang === "es" ? "Amplio vestidor principal" : "Spacious master walk-in closet"}</li>
                    <li>{lang === "es" ? "Lavadora y secadora de tamaño completo de carga frontal" : "Full-size front-loading washer and dryer"}</li>
                    <li>
                        {lang === "es" ? "Fibra hasta el hogar para video e Internet de alta velocidad" : "Fiber to the home for high-speed video and Internet"}
                    </li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul className="list list-unstyled">
                    <strong>{lang === "es" ? "Club Acqua" : "Acqua Club"}</strong>
                    <br/>
                    <li>
                        {lang === "es" ? "El Club Náutico provee almacenamiento de paddleboard y kayak con espacio de limpieza, para disfrutar tranquilamente de las cristalinas aguas del canal intracostero y los canales cercanos." : "The Nautical Club provides paddleboard and kayak storage with cleaning space, to peacefully enjoy the crystal-clear waters of the intracoastal waterway and nearby canals."}
                    </li>
                    <br/>
                    <strong>{lang === "es" ? "Muelle Privado" : "Private Dock"}</strong>
                    <br/>
                    <li>
                        {lang === "es" ? "Una marina con 9 espacios para botes desde 25 hasta 40 pies, acceso directo al Océano Atlántico, cabañas privadas costeras y un espacio para kayaks y paddleboards." : "A marina with 9 boat slips from 25 to 40 feet, direct access to the Atlantic Ocean, private coastal cabanas, and space for kayaks and paddleboards."}
                    </li>
                    <br/>
                    <strong>{lang === "es" ? "Parque para Mascotas" : "Pet Park"}</strong>
                    <br/>
                    <li>
                        {lang === "es" ? "Con un parque para perros y estación de baño para mascotas. Cada amigo peludo podrá disfrutar de un espacio para correr y divertirse libremente." : "With a dog park and pet bathing station. Every furry friend can enjoy a space to run and play freely."}
                    </li>
                    <br/>
                    <strong>{lang === "es" ? "Piscina en la Terraza" : "Rooftop Pool"}</strong>
                    <br/>
                    <li>
                        {lang === "es" ? "El nivel de la terraza incluye una piscina, sillas asoleadoras, un bar y diversas áreas sociales para relajarte." : "The rooftop level includes a pool, lounge chairs, a bar, and various social areas to relax."}
                    </li>
                </ul>
            </>
        ),
    };
    OriginObject.introduccion = [
        lang === "es" ? "Una exquisita colección de 27 residencias de lujo de edición limitada frente al mar, en colaboración con Artefacto, los proveedores de la sofisticada vida del Sur de la Florida" : "An exquisite collection of 27 limited-edition waterfront luxury residences, in collaboration with Artefacto, purveyors of sophisticated South Florida living",
        lang === "es" ? "Este elegante edificio residencial boutique personifica lo último en estilo de vida de Miami, seductoras vistas y amplios planos de planta. A pocos pasos de las prístinas playas de Miami y de las mundialmente conocidas tiendas de Bal Harbour, ORIGIN es lo último en vida urbana isleña, a la vez que se encuentra a pocos pasos de todas las comodidades de la vida en la ciudad" : "This elegant boutique residential building epitomizes the ultimate Miami lifestyle, seductive views, and spacious floor plans. Steps from pristine Miami beaches and world-renowned Bal Harbour shops, ORIGIN is the ultimate in island urban living, while being steps from all city life amenities",
        lang === "es" ? "Artefacto decodifica un estilo de vida que goza de gran prestigio entre los grandes nombres de la arquitectura y la decoración, creando el epítome de la vida cálida y contemporánea." : "Artefacto decodes a lifestyle that enjoys great prestige among the great names in architecture and decoration, creating the epitome of warm, contemporary living.",
    ];
    OriginObject.titulo = getLocalizedField("titulo", "Origin Residences");
    OriginObject.slogan = getLocalizedField("slogan", "Sofisticada Vida Isleña");
    OriginObject.numberOfImages = 52;
    OriginObject.area = BayHarbor();
    return OriginObject;
}
