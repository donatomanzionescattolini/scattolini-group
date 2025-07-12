import Desarrollo from "../../../models/desarrollos/Desarrollo";
import Wynwood from "../../areas/Wynwood";

export default function NomadResidences() {

    const NomadResidencesObject = new Desarrollo(Wynwood());
    NomadResidencesObject.nombre = "nomad-residences";
    NomadResidencesObject.titulo = "Nomad Residences";
    NomadResidencesObject.subtitulo = "Carácter individual, un mundo de confort";
    NomadResidencesObject.introduccion = ["El Nomad Wynwood Residences cuenta con 329 residencias de lujo. Las unidades varían en tamaño desde 478 pies cuadrados hasta 911 pies cuadrados. Fue desarrollado por Related Group, el prestigioso desarrollador detrás de Icon Brickell, SLS Lux, Brickell Heights, Hyde Beach, Baccarat Residences y muchos otros edificios de ultra lujo en el sur de Florida. Diseñado por Arquitectonica y con un elegante diseño interior de Design Agency. Este condominio residencial ubicado en el centro se encuentra en la vibrante área de Wynwood de Miami, Florida. Algunas de las atracciones más importantes son las paredes de Wynwood, las galerías de arte, la alta cocina, las tiendas y los lugares culturales que brindarán a los residentes una experiencia de vida como en ningún otro lugar del sur de la Florida."];
    NomadResidencesObject.banner = true;
    NomadResidencesObject.ubicación = "280 NW 27th Street, Miami, FL 33127"
    NomadResidencesObject.numberOfUnits = 329;
    NomadResidencesObject.numberOfFloors = 9;
    NomadResidencesObject.numberOfImages = 20;
    NomadResidencesObject.caracteristicas = {
        edificio: <>
            <dl>
                <dt>Ubicación</dt>
                <dd>{NomadResidencesObject.ubicación}</dd>
                <dt>Pisos</dt>
                <dd>{NomadResidencesObject.numberOfFloors}</dd>
                <dt>Unidades</dt>
                <dd>{NomadResidencesObject.numberOfUnits}</dd>
            </dl>
        </>,

        residencias: <>
            <ul>
                <li>Totalmente amueblado y creativamente seleccionado por NoMad y la galardonada DesignAgency</li>
                <li>Puertas correderas de vidrio de piso a techo</li>
                <li>Balcones privados en todas las residencias</li>
                <li>Vestidores espaciosos en la mayoría de las residencias</li>
                <li>Techos de 9+ pies</li>
                <li>Cocinas modernas y aerodinámicas con electrodomésticos Bosch</li>
                <li>Gabinetes importados de diseño italiano</li>
                <li>Diseños adaptables y abiertos</li>
                <li>Exquisitas encimeras de piedra</li>
                <li>Accesorios de latón en baños</li>
                <li>Amplias duchas de hidromasaje</li>
                <li>Lavadora y secadora</li>
            </ul></>,
        amenidades: <><ul>
            <li>Curaduría y diseño NoMad aclamados a nivel mundial</li>
            <li>Restaurante y bar NoMad en la azotea con ascensor independiente</li>
            <li>Paisajismo inspirado e impecable</li>
            <li>Piscina en la azotea de servicio completo, terraza y cabañas</li>
            <li>Conserjería las 24 horas y seguridad del edificio</li>
            <li>Dos amplios vestíbulos y locales comerciales</li>
            <li>Servicio de aparcacoches 24/7 y garaje en el edificio</li>
            <li>Centro de fitness y bienestar de primer nivel, con césped dedicado al fitness al aire libre</li>
            <li>Zona de parrillas y cine al aire libre</li>
            <li>Amplia biblioteca y espacios de coworking</li>
            <li>Almacenamiento de bicicletas</li>
            <li>Cocina en la residencia entregada a pedido</li>
            <li>Servicios de check-in dedicados</li>
            <li>Acceso al ascensor con control privado</li>
            <li>Climatización inteligente</li>
            <li>Almacenamiento privado</li>
            <li>Se admiten mascotas</li>
        </ul></>
    }


    return NomadResidencesObject;

}
