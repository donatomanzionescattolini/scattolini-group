import BayHarbor from "../../areas/BayHarbor.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
export default function Origin() {
    const OriginObject = new Desarrollo();


    OriginObject.video =

        <iframe
            className=" mx-auto"
            height={500}
            src="https://www.youtube.com/embed/9eegKJbb5vQautoplay=1&controls=0"
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
                        Piscina panorÁmica en la azotea con cocinas de verano junto a la
                        piscina y bar
                    </li>
                    <li>Gimnasio con equipos de última generaci�n</li>
                    <li>
                        Servicios personalizados, seguridad las 24 horas y tecnología
                        avanzada
                    </li>
                    <li>
                        Estacionamiento sin asistencia designado para todas las
                        residencias
                    </li>
                    <li>Estaciones de carga para vehículos el�ctricos</li>
                    <li>
                        Fibra hasta el hogar para video e Internet de alta velocidad
                    </li>
                    <li>
                        Unidades de almacenamiento convenientemente ubicadas en cada
                        piso residencial
                    </li>
                    <li>
                        Marina con 8 muelles para botes que van desde 25 a 40 pies
                    </li>
                    <li>
                        Acceso directo al Océano AtlÁntico a través de la ensenada de
                        Haulover, así como acceso directo a las vías navegables
                        intracosteras de Miami y Fort Lauderdale
                    </li>
                    <li>Cabañas privadas frente al mar</li>
                    <li>
                        Muelle de lanzamiento de deportes acuÁticos para kayaks y tablas
                        de paddle surf
                    </li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>
                        Puertas y ventanas corredizas de vidrio resistentes a los
                        impactos del piso al techo
                    </li>
                    <li>
                        Sistema de aire acondicionado y calefacción de bajo consumo: con
                        termostatos Nest
                    </li>
                    <li>
                        Amplios diseños de piso con alturas de techo de hasta 9 pies
                    </li>
                    <li>PH Residences cuenta con techos de 11 pies</li>
                    <li>
                        Cocinas italianas importadas totalmente equipadas con
                        electrodom�sticos de última generaci�n
                    </li>
                    <li>Baños modernos con mÁrmol italiano y gabinetes europeos</li>
                    <li>Pisos de porcelana italiana en toda la casa</li>
                    <li>Balcones privados panorÁmicos en cada residencia</li>
                    <li>Vestidores de gran tamaño</li>
                    <li>Amplio vestidor principal</li>
                    <li>Lavadora y secadora de tamaño completo de carga frontal</li>
                    <li>
                        Fibra hasta el hogar para video e Internet de alta velocidad
                    </li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul className="list list-unstyled">
                    <strong>Club Acqua</strong>
                    <br/>
                    <li>
                        El Club NÁutico provee almacenamiento de paddleboard y kayak con
                        espacio de limpieza, para disfrutar tranquilamente de las
                        cristalinas aguas del canal intracostero y los canales cercanos.
                    </li>
                    <br/>
                    <strong>Muelle Privado</strong>
                    <br/>
                    <li>
                        Una marina con 9 espacios para botes desde 25 hasta 40 pies,
                        acceso directo al Océano AtlÁntico, cabañas privadas costeras y
                        un espacio para kayaks y paddleboards.
                    </li>
                    <br/>
                    <strong>Parque para Mascotas</strong>
                    <br/>
                    <li>
                        Con un parque para perros y estación de baño para mascotas. Cada
                        amigo peludo podrÁ disfrutar de un espacio para correr y
                        divertirse libremente.
                    </li>
                    <br/>
                    <strong>Piscina en la Terraza</strong>
                    <br/>
                    <li>
                        El nivel de la terraza incluye una piscina, sillas asoleadoras,
                        un bar y diversas Áreas sociales para relajarte.
                    </li>
                </ul>
            </>
        ),
    };
    OriginObject.introduccion = [
        // "Origin es un edificio boutique elegante que combina el inigualable estilo de vida de Miami, fant�sticas amenidades y planos de gran tama�o. A tan solo pasos de las blancas playas de Miami y las reconocidas tiendas Bal Harbour, Origin es un paraíso urbano cerca de cada comodidad de la ciudad. Una exclusiva colecci�n de 27 residencias costeras dise�adas para la familia moderna, que evocan sofisticaci�n y bienestar",
        "Una exquisita colección de 27 residencias de lujo de edición limitada frente al mar, en colaboración con Artefacto, los proveedores de la sofisticada vida del Sur de la Florida",
        "Este elegante edificio residencial boutique personifica lo último en estilo de vida de Miami, seductoras vistas y amplios planos de planta. A pocos pasos de las prístinas playas de Miami y de las mundialmente conocidas tiendas de Bal Harbour, ORIGIN es lo último en vida urbana isle�a, a la vez que se encuentra a pocos pasos de todas las comodidades de la vida en la ciudad",
        "Artefacto decodifica un estilo de vida que goza de gran prestigio entre los grandes nombres de la arquitectura y la decoraci�n, creando el epítome de la vida c�lida y contempor�nea.",
    ];
    OriginObject.titulo = "Origin Residences";
    OriginObject.slogan = "Sofisticada VidaResidences Isleña";
    OriginObject.numberOfImages = 52;
    OriginObject.area = BayHarbor();
    return OriginObject;
}

