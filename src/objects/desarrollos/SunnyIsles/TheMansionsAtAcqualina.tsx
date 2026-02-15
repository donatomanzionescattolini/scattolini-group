import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import SunnyIsles from "../../areas/SunnyIsles.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function TheMansionsAtAcqualina(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("the-mansions-at-acqualina", lang);
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

    TheMansionsAtAcqualinaObject.nombre = getLocalizedField("nombre", "the-mansions-at-acqualina");
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
    TheMansionsAtAcqualinaObject.introduccion = getLocalizedArray("introduccion", [
        getLocalizedField("introduccion.0", "Ubicado en su propia mansión en el cielo, se calma con los suaves vientos alisios mientras las olas barren la orilla de su prístina playa de arena blanca."),
    ]);
    TheMansionsAtAcqualinaObject.titulo = getLocalizedField("titulo", "The Mansions at Acqualina");
    TheMansionsAtAcqualinaObject.slogan = getLocalizedField("slogan", "Descubre la vida en condominio en Sunny Isles Beach");
    TheMansionsAtAcqualinaObject.numberOfImages = parseInt(getLocalizedField("numberOfImages", "24"), 10) || 24;
    TheMansionsAtAcqualinaObject.banner = getLocalizedField("banner", "true") === "true";
    TheMansionsAtAcqualinaObject.area = SunnyIsles();
    return TheMansionsAtAcqualinaObject;
}