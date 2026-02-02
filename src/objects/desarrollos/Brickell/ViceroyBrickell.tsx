import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";

const ViceroyBrickell = new Desarrollo(Brickell());

ViceroyBrickell.nombre = "viceroy-brickell";
ViceroyBrickell.titulo = "Viceroy Brickell";
ViceroyBrickell.introduccion = [""];
ViceroyBrickell.banner = true;

ViceroyBrickell.caracteristicas = {
    edificio: (
        <dl>
            <dt>Dirección</dt>
            <dd>{ViceroyBrickell.direccion}</dd>
            <dt>Año De Construcción O Finalización</dt>
            <dd>{ViceroyBrickell.estimatedCompletionYear}</dd>
            <dt>Número De Pisos</dt>
            <dd>{ViceroyBrickell.numberOfFloors}</dd>
            <dt>Número de Unidades</dt>
            <dd>{ViceroyBrickell.numberOfUnits}</dd>
            <dt>Tipo De Unidades</dt>
            <dd>{ViceroyBrickell.typeOfUnits}</dd>
            <dt>Número de baños</dt>
            <dd>{ViceroyBrickell.numberOfBathrooms as string}</dd>
        </dl>
    ),
    residencias: <>
        <ul>
            <li>Colección de 442 residencias de torre, rematadas por dos niveles de penthouses</li>
            <li>y ancladas por 56 apartamentos urbanos con vista de primera fila al vibrante estilo de vida urbano de
                Brickell.
            </li>
            <li>Planos de planta de concepto abierto con estudios, residencias de uno y dos dormitorios, y tres
                dormitorios en los niveles de penthouse.
            </li>
            <li>Ventanas y puertas corredizas de piso a techo tintadas, energéticamente eficientes y resistentes a
                impactos que dominan el deslumbrante paisaje urbano, el río Miami y la bahía de Biscayne.
            </li>
            <li>Pisos de porcelanato travertino importado en todas las residencias, incluyendo baños y balcones.</li>
            <li>Balcones con barandillas de vidrio en cada unidad, accesibles desde la sala de estar y los
                dormitorios.
            </li>
            <li>Alturas de techo de 9 pies en las residencias de torre, 13 y 19 pies en los apartamentos urbanos, y 11
                pies en el nivel superior de penthouse.
            </li>
            <li>Sistema de puerta de entrada inteligente sin llave para facilitar el acceso a través de una aplicación
                inteligente.
            </li>
            <li>Cocinas diseñadas por Meyer Davis Studio con gabinetes italianos con electrodomésticos empotrados en
                paneles, encimeras de cuarzo importado y protección contra salpicaduras de porcelana completa con
                iluminación bajo el mostrador y detalles de tiradores de latón.
            </li>
            <li>Paquete de electrodomésticos Bosch y Fisher & Paykel que incluye refrigerador/congelador y lavavajillas
                empotrados en gabinetes, placas de cocción eléctricas integradas y hornos rápidos, y lavadoras y
                secadoras GE y Blomberg.
            </li>
            <li>Baños con duchas de vidrio sin marco, grifos Brizo con acabado dorado de lujo y gabinetes italianos,
                todos seleccionados por Meyer Davis Studio.
            </li>
            <li>Tecnología avanzada de "edificio inteligente" precableado para internet de alta velocidad Wi-Fi,
                datos/voz y video satelital por cable.
            </li>
            <li>Closets vestidores en la mayoría de las residencias.</li>
            <li>Sistema de protección contra incendios con rociadores.</li>
            <li>Sistemas de aire acondicionado central y calefacción de alta eficiencia.</li>
        </ul>
    </>,
    amenidades: <>
        <ul>
            <li>Ubicación privilegiada en One Brickell en la entrada de Brickell Avenue y el río Miami con acceso
                directo al paseo marítimo del río.
            </li>
            <li>Impresionante torre de vidrio de 45 pisos con balcones de barandilla de vidrio ondulante y vistas
                panorámicas de la bahía de Biscayne, el río Miami y el horizonte de la ciudad.
            </li>
            <li>Acogedora marquesina que conduce a un impresionante vestíbulo totalmente de vidrio con personal las 24
                horas del día, los 7 días de la semana.
            </li>
            <li>Centro de fitness y bienestar de clase mundial con saunas, salas de tratamiento personalizadas y cine
                cardiovascular con vista al dinámico horizonte de la ciudad.
            </li>
            <li>Estudio simulador multideportivo con golf, fútbol, baloncesto y carreras de F1.</li>
            <li>Impresionante vestíbulo de techo alto con elegante área de descanso para residentes e invitados.</li>
            <li>Sala de proyección con equipos de audio y video de última generación.</li>
            <li>Instalación permanente de colección de arte de calidad museística curada en todos los espacios públicos
                del edificio.
            </li>
            <li>Mercado gourmet virtual.</li>
            <li>Centro de negocios que incluye sala de conferencias y espacios de trabajo privados.</li>
            <li>Comedor privado servido desde las instalaciones de catering en el lugar.</li>
            <li>Bar de vestíbulo de servicio completo administrado por el personal de alimentos y bebidas de Viceroy
                Hotels & Resorts.
            </li>
            <li>Salas de club para residentes con bar, billares, humidores e instalaciones multimedia en el nivel 14.
            </li>
            <li>Bodega y sala de degustación de vinos.</li>
            <li>Seis ascensores de alta velocidad activados por llave.</li>
            <li>Servicio de valet, conserje y seguridad las 24 horas.</li>
            <li>Estaciones de carga para vehículos eléctricos.</li>
            <li>Estacionamiento para bicicletas.</li>
            <li>Terraza de servicios estilo resort en el piso 14, con piscina climatizada, jacuzzi al aire libre y
                cabañas junto a la piscina.
            </li>
            <li>Cafetería con servicio completo y áreas de descanso al aire libre rodeadas de exuberante vegetación.
            </li>
            <li>Cocina de verano y comedor cubierto al aire libre.</li>
            <li>Cancha de bochas.</li>
            <li>Comunidad que admite mascotas con senderos ajardinados.</li>
            <li>Membresía gratuita al club de playa privado Grand Bay Club en la cercana playa de Key Biscayne.
            </li>
        </ul>
    </>
};

export default ViceroyBrickell;