import Desarrollo from "../../../models/desarrollos/Desarrollo";
import MidtownMiami from "../../areas/MidtownMiami";

const TheStandardResidences = new Desarrollo(MidtownMiami);
TheStandardResidences.area = MidtownMiami;
TheStandardResidences.titulo = "The Standard Residences";
TheStandardResidences.nombre = "the-standard-residences";
TheStandardResidences.introduccion = ["The Standard Residences es un desarrollo residencial de lujo ubicado en el corazón de Midtown Miami, que ofrece un estilo de vida contemporáneo y sofisticado. Este exclusivo edificio combina diseño moderno con comodidades de primer nivel, creando un ambiente ideal para quienes buscan vivir en una de las zonas más vibrantes y dinámicas de la ciudad. Con una arquitectura elegante y espacios interiores cuidadosamente diseñados, The Standard Residences proporciona un refugio urbano donde la comodidad y el estilo se unen perfectamente."];
TheStandardResidences.numberOfImages = 25;
TheStandardResidences.direccion = "330 NE 24th St, Miami, FL 33137";
TheStandardResidences.caracteristicas = {
    edificio: (
        <>
            <dl>
                <dt>Año de finalización</dt>
                <dd>2024</dd>
                <dt>Número de pisos</dt>
                <dd>18</dd>
                <dt>Número de unidades</dt>
                <dd>120 residencias</dd>
                <dt>Tipo de unidades</dt>
                <dd>Estudios, 1 a 3 habitaciones</dd>
                <dt>Tamaño de las unidades</dt>
                <dd>Desde 500 hasta 2,000 pies cuadrados</dd>
                <dt>Ubicación</dt>
                <dd>
                    <address>330 NE 24th St, Miami, FL 33137</address>
                </dd>
            </dl>
        </>
    ),
    amenidades: (
        <>
            <dl>
                <dt>Piscina en la azotea</dt>
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
    )
};
TheStandardResidences.slogan = "Vive en el Corazón de Midtown Miami";
TheStandardResidences.banner = true;

export default TheStandardResidences;