import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";

const JeanGeorgesMiamiTropicResidences = new Desarrollo(MidtownMiami);
JeanGeorgesMiamiTropicResidences.nombre = "jean-georges-miami-tropic-residences";
JeanGeorgesMiamiTropicResidences.titulo = "Jean-Georges Tropic Residences";
JeanGeorgesMiamiTropicResidences.area = MidtownMiami;
JeanGeorgesMiamiTropicResidences.introduccion = ["Descubre Jean-Georges Tropic Residences, una joya arquitectónica en el corazón de Midtown Miami. Este exclusivo desarrollo residencial redefine el lujo contemporáneo con su diseño elegante y sofisticado, inspirado en la visión del renombrado chef Jean-Georges Vongerichten. Cada detalle ha sido cuidadosamente pensado para ofrecer un estilo de vida excepcional, desde sus amplias residencias con vistas panorámicas hasta sus amenidades de primer nivel que incluyen un gimnasio de última generación, piscina infinita y espacios sociales diseñados para la comodidad y el entretenimiento.","Ubicado estratégicamente en una de las zonas más vibrantes de Miami, Jean-Georges Tropic Residences ofrece acceso inmediato a una variedad de restaurantes, tiendas y opciones culturales. Vive la experiencia de Midtown Miami con su ambiente dinámico y cosmopolita, todo mientras disfrutas de la tranquilidad y privacidad que este desarrollo exclusivo proporciona. Jean-Georges Tropic Residences es más que un hogar; es un estilo de vida donde el lujo, la comodidad y la ubicación se unen para crear una experiencia residencial inigualable."];
JeanGeorgesMiamiTropicResidences.slogan = "Luxury Living Redefined";
JeanGeorgesMiamiTropicResidences.numberOfImages = 27;
JeanGeorgesMiamiTropicResidences.direccion = "350 NE 24th St, Miami, FL 33137";
JeanGeorgesMiamiTropicResidences.caracteristicas = {
    edificio: (
        <>
            <dl>
                <dt>Año de finalización</dt>
                <dd>2024</dd>
                <dt>Número de pisos</dt>
                <dd>18</dd>
                <dt>Número de unidades</dt>
                <dd>56 residencias</dd>
                <dt>Tipo de unidades</dt>
                <dd>1 a 4 habitaciones</dd>
                <dt>Tamaño de las unidades</dt>
                <dd>Desde 1,000 hasta 3,500 pies cuadrados</dd>
                <dt>Ubicación</dt>
                <dd>
                    <address>350 NE 24th St, Miami, FL 33137</address>
                </dd>
            </dl>
        </>
    ),
    amenidades: (
        <>
            <dl>
                <dt>Piscina infinita en la azotea</dt>
                <dd>Disfruta de vistas panorámicas de la ciudad y la bahía desde la piscina en la azotea.</dd>
                <dt>Gimnasio de última generación</dt>
                <dd>Equipado con máquinas de alta tecnología y áreas para clases de fitness.</dd>
                <dt>Salón social y área de entretenimiento</dt>
                <dd>Espacios diseñados para reuniones y eventos sociales.</dd>
                <dt>Servicio de conserjería 24/7</dt>
                <dd>Atención personalizada para todas tus necesidades diarias.</dd>
                <dt>Estacionamiento subterráneo seguro</dt>
                <dd>Comodidad y seguridad para tu vehículo.</dd>
            </dl>
        </>
    ),  
    residencias: (
        <>
            <dl>
                <dt>Diseño interior de lujo</dt>
                <dd>Acabados de alta calidad, electrodomésticos modernos y amplios espacios abiertos.</dd>\
                <dt>Vistas panorámicas</dt>
                <dd>Disfruta de vistas impresionantes de la ciudad, la bahía y el horizonte de Miami.</dd>
                <dt>Terrazas privadas</dt>
                <dd>Espacios al aire libre para relajarte y disfrutar del clima de Miami.</dd>
                <dt>Seguridad y privacidad</dt>
                <dd>Sistema de seguridad avanzado y acceso controlado para tu tranquilidad.</dd>
            </dl>
        </>
    ),
};

JeanGeorgesMiamiTropicResidences.banner = true;





export default JeanGeorgesMiamiTropicResidences;