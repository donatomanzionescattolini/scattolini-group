import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import SunnyIsles from "../../areas/SunnyIsles.tsx";

export default function TheMansionsAtAcqualina() {
    const TheMansionsAtAcqualinaObject = new Desarrollo();

    TheMansionsAtAcqualinaObject.video =
        <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/JGatjfTjo2c?autoplay=1&controls=0"
            title="The Mansions at Acqualina"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    ;

    TheMansionsAtAcqualinaObject.nombre = "the-mansions-at-acqualina";
    TheMansionsAtAcqualinaObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>Pisos</dt>
                    <dd>47</dd>
                    <dt>Unidades</dt>
                    <dd>79</dd>
                    <dt>Fecha de finalización</dt>
                    <dd>2015</dd>
                    <dt>Ubicación</dt>
                    <dd>
                        <address>
                            17749 Collins Avenue, Sunny Isles Beach, FL 33160
                        </address>
                    </dd>
                </dl>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    <li>Gimnasio con equipos de última generación</li>
                    <li>Cabañas privadas junto a la piscina</li>
                    <li>Hammam Spa</li>
                    <li>Centro Infantil</li>
                    <li>Virtual Golf</li>
                    <li>Comedor al aire libre y spa</li>
                    <li>Piscina reflectante de la puesta del sol y pozo de fuego</li>
                    <li>Lujosa gran sala para eventos privados</li>
                    <li>Conserjería, seguridad y valet las 24 horas</li>
                    <li>Parque para perros</li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>Jacuzzi privado en la terraza</li>
                    <li>Planos de planta de 2 pisos</li>
                    <li>
                        Múltiples balcones con vistas al mar y al interior de la costa
                    </li>
                    <li>Cocina de verano al aire libre</li>
                    <li>Balcones con vistas al mar y al interior de la costa</li>
                    <li>
                        Ventanas de piso a techo, teñidas en bronce, resistentes a los
                        impactos y puertas corredizas de vidrio
                    </li>
                    <li>Controles de clima inteligentes con termostatos digitales</li>
                    <li>Chimenea sin ventilación en la sala de estar</li>
                    <li>Servicio de Monitoreo de Alarmas de Intrusión</li>
                    <li>Encimeras y salpicaderos de piedra importada</li>
                    <li>
                        Bañera independiente a medida con accesorios de fontanería
                        Dornbracht
                    </li>
                </ul>
            </>
        ),
    };
    TheMansionsAtAcqualinaObject.introduccion = [
        "Ubicado en su propia mansión en el cielo, se calma con los suaves vientos alisios mientras las olas barren la orilla de su prístina playa de arena blanca. Y, mientras contempla el espectacular amanecer desde su terraza privada, se da cuenta de lo que pocos sabrán: esto es lo que es vivir el mejor estilo de vida del mundo, en la mejor residencia del mundo",
        "La grandeza en el arte, la arquitectura y el estilo de vida es nuestro compromiso en Acqualina Resort and Spa on the Beach. Las mansiones de Acqualina llevan esto a un nivel aún más elevado. Aquí descubrirá residencias lujosamente decoradas en un edificio icónico exquisitamente alto. Las comodidades incomparables y los servicios de clase mundial incluyen una terraza de piscina con un diseño elegante y rica en comodidades, impresionantes espacios públicos, once santuarios privados al aire libre para propietarios de viviendas y trece áreas de servicios interiores excepcionales. Todas sus necesidades están cubiertas en un entorno idílico que equilibra la belleza de la naturaleza con la ciudad más dinámica del mundo.",
    ];
    TheMansionsAtAcqualinaObject.titulo = "The Mansions at Acqualina";
    TheMansionsAtAcqualinaObject.subtitulo = "Descubre la vida en condominio en Sunny Isles Beach";
    TheMansionsAtAcqualinaObject.numberOfImages = 24;
    TheMansionsAtAcqualinaObject.banner = true;
    TheMansionsAtAcqualinaObject.area = SunnyIsles();
    return TheMansionsAtAcqualinaObject;
}