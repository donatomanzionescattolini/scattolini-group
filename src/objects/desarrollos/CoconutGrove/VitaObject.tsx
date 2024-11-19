import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import CoconutGrove from "../../areas/CoconutGrove.tsx";

export default function Vita() {
    const VitaObject = new Desarrollo();


    VitaObject.nombre = "vita-grove";
    VitaObject.caracteristicas = {
        residencias: (
            <ul>
                <li>Ascensor privado</li>
                <li>
                    Las unidades cuentan con una altura de piso a techo de 11'3" con
                    falsos techos de 10' con acabado transparente en todas las
                    residencias que brindan la capacidad de instalar iluminación
                    empotrada, parlantes y difusores lineales
                </li>
                <li>
                    Las unidades Penthouse cuentan con una altura de piso a techo de
                    12'5" con falsos techos con acabado transparente de 11' en todas
                    las residencias que brindan la capacidad de instalar iluminación
                    empotrada, parlantes y difusores lineales
                </li>
                <li>Puertas correderas de vidrio del fabricante alemán Schüco</li>
                <li>
                    El sistema Crestron Smart Home preinstalado permite el control de
                    iluminación, sistemas audiovisuales y sistemas de calefacción,
                    ventilación y aire acondicionado (HVAC), y tiene disposiciones
                    para el control de los tratamientos de las ventanas
                </li>
                <li>
                    Control de panel táctil en el hogar y control remoto de tabletas o
                    aplicaciones móviles La iluminación empotrada empotrada LED de
                    tenue a cálida en todas las unidades está controlada por un
                    sistema centralizado para escenarios de iluminación
                    personalizables
                </li>
                <li>
                    Electrodomésticos y gabinetes de cocina de primer nivel de
                    Molteni&C que incluyen organizadores incorporados
                </li>
                <li>Insonorización de paredes interiores</li>
                <li>Paneles de yeso resistentes a la humedad en baños</li>
                <li>Difusores de aire lineales</li>
                <li>
                    Los dormitorios principales, los baños principales y las salas de
                    estar se enfrentan a espectaculares vistas al agua sin obstáculos
                    y cuentan con el mejor mármol italiano a juego
                </li>
                <li>Grandes terrazas frente al mar</li>
                <li>
                    Los elegantes gabinetes de cocina de madera y laca y los
                    electrodomésticos ocultos crean una apariencia muy contemporánea
                </li>
                <li>
                    Los paneles integrados y las puertas correderas ocultas ocultan
                    grandes y pequeños aparatos de cocina y refrigeración
                </li>
                <li>
                    Cajones anchos y profundos para un acceso eficaz y fácil
                    almacenamiento
                </li>
                <li>
                    Las luces LED del gabinete interior se iluminan automáticamente
                    cuando Se abren las puertas
                </li>
                <li>
                    Conjunto completo de electrodomésticos de primera línea de Miele,
                    que incluyen enfriador de vino incorporado, refrigerador /
                    congelador y lavavajillas
                </li>
                <li>Grifería cromada pulida by Dornbracht</li>
                <li>
                    Calentadores de agua residenciales con recirculación de agua
                    caliente para agua caliente rápida en el punto de uso
                </li>
                <li>Enrutador/punto(s) de acceso Wi-Fi 6</li>
            </ul>
        ),
        edificio: (
            <ul>
                <li>
                    La privacidad y la exclusividad se ven reforzadas por la entrada
                    de la Gate House, con personal de seguridad de la isla
                </li>
                <li>
                    El paseo marítimo Baywalk de Grove Isle rodea la isla a lo largo
                    de la orilla del agua, creando un entorno similar a un parque y un
                    camino ideal para caminar o correr
                </li>
                <li>
                    Los asientos frente a la bahía y las áreas de entretenimiento
                    permiten a los residentes disfrutar plenamente del entorno frente
                    al mar y de los espectaculares amaneceres y atardeceres
                </li>
                <li>
                    Un restaurante gourmet y bar servirá almuerzos, cenas y cócteles
                    para los residentes, amigos y familiares de Grove Isle
                </li>
                <li>
                    Los residentes de Vita reciben una membresía de la casa para el
                    Grove Isle Club, que cuenta con una piscina frente a la bahía y un
                    bar junto a la piscina
                </li>
                <li>
                    Los servicios privados adicionales en Grove Isle, diseñados para
                    que los residentes aprovechen al máximo la vida frente al mar,
                    incluyen: Marina con muelles para botes , Pistas de tenis
                    iluminadas, Pistas de pickleball y pádel, Parque infantil
                </li>
                <li>
                    Los terrenos elegantemente ajardinados están plantados con una
                    variedad de palmeras nativas de Florida y árboles en flor
                </li>
                <li>
                    Vita ha sido diseñado para cumplir con la Certificación Nacional
                    de Estándares de Construcción Ecológica (NGBS)
                </li>
                <li>
                    Un conserje está disponible para ayudar con una amplia gama de
                    arreglos
                </li>
                <li>
                    La piscina privada frente a la bahía, el bar junto a la piscina y
                    el salón están diseñados para crear un ambiente muy relajante
                    exclusivamente para los residentes de Vita y sus invitados
                </li>
                <li>
                    Sofisticado espacio diseñado en Italia por A++ con una increíble
                    atención al detalle. El área está abierta exclusivamente a los
                    residentes de Vita e incluye un gimnasio de última generación, una
                    sala de estudio dedicada y un spa con vestuarios para hombres y
                    mujeres con saunas y baños de vapor
                </li>
                <li>
                    Los garajes individuales privados y cerrados permiten el
                    estacionamiento de autoservicio y están diseñados con
                    disposiciones para estaciones de carga de vehículos eléctricos y
                    un elevador opcional para un segundo vehículo
                </li>
                <li>
                    Un edificio de aparcacoches ofrece estaciones de carga de
                    vehículos eléctricos
                </li>
                <li>Servicio de valet 24/7</li>
                <li>Almacenamiento de bicicletas convenientemente ubicado</li>
                <li>
                    Wi-Fi en todos los espacios compartidos interiores y exteriores
                </li>
                <li>Una aplicación digital de conserjería</li>
            </ul>
        ),
        amenidades: (
            <>
                <p>
                    Los residentes de Vita disfrutan de acceso a una colección extensa
                    y cuidadosamente seleccionada de comodidades interiores y
                    exteriores, así como servicios personalizados.
                </p>
                <p>
                    Desde la orilla del agua hasta los espacios sociales interiores y
                    más allá, Vita crea el mejor estilo de vida del sur de la Florida.
                </p>

                <p>
                    La casa club de Vita cuenta con una piscina frente a la bahía y un
                    bar junto a la piscina en la planta baja y un restaurante de lujo
                    en el segundo piso donde los comensales disfrutan de vistas
                    panorámicas del agua. El tercer piso de la casa club ofrece un
                    espacio para eventos especiales solo para residentes, así como
                    servicios de bienestar que incluyen el spa, el gimnasio y el
                    estudio de yoga.
                </p>
                <ul className="list ">
                    <li>
                        <strong>Gastrónomo</strong><br/>
                        Un restaurante y bar de alta gama que sirve almuerzos, cenas y
                        cócteles.
                    </li>
                    
                    <li>
                        <strong>Fitness y Bienestar</strong><br/>
                        El gimnasio y centro de bienestar incluye un gimnasio de última
                        generación, una sala de estudio dedicada y un spa.
                    </li>
                    
                    <li>
                        <strong>Deportivo</strong><br/>
                        Canchas de tenis iluminadas para juegos nocturnos, canchas de
                        pickleball y pádel.
                    </li>
                    
                    <li>
                        <strong>Niños</strong><br/>
                        Patio de recreo
                    </li>
                    
                    <li>
                        <strong>Piscina</strong><br/>
                        Una piscina privada frente a la bahía solo para residentes, un
                        bar junto a la piscina y un salón.
                    </li>
                    
                    <li>
                        <strong>Acceso VIP</strong><br/>
                        Membresía de la casa al Vita en Grove Isle Club.
                    </li>
                    
                    <li>
                        <strong>Navegación</strong><br/>
                        Puerto deportivo con muelles para barcos.
                    </li>
                    
                    <li>Vistas panorámicas de la Bahía de Biscayne</li>
                    
                    <li>
                        <strong>Aparcacoches</strong><br/>
                        El servicio de aparcacoches de Vita las 24 horas está siempre
                        disponible para ayudar a los residentes y sus invitados en la
                        entrada cubierta con dosel de cristal
                    </li>
                    
                    <li>
                        <strong>Garaje Cerrado</strong><br/>
                        Garajes privados individuales cerrados con capacidad para cuatro
                        vehículos.
                    </li>
                    
                    <li>
                        <strong>Conserje</strong>

                        

                        <li>Disponible para ayudar con una amplia gama de arreglos.</li>
                    </li>
                    
                    <li>
                        <strong>Vita Linc</strong><br/>
                        Una aplicación de conserjería digital para registrar a los
                        huéspedes y proporcionarles una llave electrónica.
                    </li>
                    
                    <li>
                        <strong>Vestíbulos Privados</strong>
                        <br/>
                        Los ascensores inteligentes proporcionan un acceso seguro a
                        vestíbulos privados
                    </li>

                    <li>
                        <strong>Aparcacoches</strong>
                    </li>
                    

                    <li>
                        Servicio de aparcacoches las 24 horas para los residentes y sus
                        invitados.
                    </li>
                    
                    <li>
                        <strong>WIFI</strong>
                        <br/>
                        Wi-Fi en todos los espacios compartidos interiores y exteriores.
                    </li>
                    
                </ul>
            </>
        ),
    };
    VitaObject.introduccion = [
        "Vita at Grove Isle es un edificio de 7 pisos frente al mar, con amplios balcones. El edificio fue diseñado por la firma de renombre mundial CallisonRTKL: un impresionante condominio curvilíneo envuelve el extremo norte de la isla, junto a la Bahía de Biscayne. Cuando se trata de relajación y entretenimiento, hay muchas comodidades disponibles, que incluyen un salón para residentes, piscina y jacuzzi frente a la bahía, cabañas y más. Las 65 residencias frente al mar ofrecen vistas supremas de la Bahía de Biscayne y un diseño interior moderno, así como accesorios y electrodomésticos finos. La colección de penthouses de dos niveles en Vita cuenta con 14 unidades exageradas, todas ellas con espectaculares terrazas en la azotea con piscinas privadas e impresionantes vistas de la Bahía de Biscayne, Key Biscayne, Coconut Grove y el centro de Miami. Vita at Grove Isle se destaca por su entorno familiar seguro, con algo para que todos disfruten. Su conveniente ubicación está a solo unos pasos de tiendas y restaurantes. La flora y fauna de Coconut Grove define la experiencia con cientos de años de crecimiento y esplendor natural.",
    ];
    VitaObject.titulo = "Vita at Grove Isle";
    VitaObject.numberOfImages = 55;
    VitaObject.banner = true;
    VitaObject.area = CoconutGrove();
    VitaObject.video = <iframe
        height={500}
        className=" h-400 embed-responsive-item m-0 p-0"
        src="https://www.youtube.com/embed/Do7bC2c-Iew?autoplay=1&controls=1"
        title="Vita at Grove Isle Waterfront Residences - Luxury Condos at 5 Grove Isle Dr, Coconut Grove, FL 33133"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>;


    return VitaObject;
}