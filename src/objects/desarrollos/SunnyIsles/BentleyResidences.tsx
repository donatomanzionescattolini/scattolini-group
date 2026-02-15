import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import SunnyIsles from "../../areas/SunnyIsles.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function BentleyResidences(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("bentley-residences", lang);
    const BentleyResidencesObject = new Desarrollo();

    BentleyResidencesObject.nombre = "bentley-residences";

    BentleyResidencesObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>Pisos</dt>
                    <dd>60</dd>
                    <dt>Unidades</dt>
                    <dd>200 residencias de 1, 2, 3 y 4 dormitorios</dd>
                    <dt>Ubicación</dt>
                    <dd>
                        <address>
                            18401 Collins Ave, Sunny Isles Beach, FL 33160, Estados Unidos
                        </address>
                    </dd>
                </dl>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>200 Amplias residencias</li>
                    <li>Planos de planta de vida interior y exterior sin fisuras</li>
                    <li>
                        Garaje para varios autos en la unidad con un elevador de
                        automóviles directamente a cada residencia
                    </li>
                    <li>Balcón privado</li>
                    <li>Piscina privada, sauna y ducha al aire libre</li>
                    <li>Ventanas de piso a techo con vista al mar y a la bahía</li>
                    <li>
                        Certificación del Consejo de Construcción Ecológica de Florida
                        (FLGC)
                    </li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    <li>Gimnasio de última generación</li>
                    <li>Piscina con cabañas</li>
                    <li>Balneario</li>
                    <li>Restaurante</li>
                    <li>Barra</li>
                    <li>Salón</li>
                    <li>Cine</li>
                    <li>Jardines</li>
                </ul>
            </>
        ),
    };
    BentleyResidencesObject.introduccion = getLocalizedArray("introduccion", [
        getLocalizedField(
            "introduccion.0",
            "Bentley Residences rises 60 floors with unmatched architectural design and reflective silver facade. Residences range from 3,500 to 9,000 sqft, all with ocean views. Amenities include cinema, restaurant, bar, gym, pool, spa, cigar lounge, cabanas and gardens."
        ),
    ]);
    BentleyResidencesObject.video = (
        <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/6FwGK20FXtI?list=TLGGDuU-t1V96uoxNzEwMjAyMw&autoplay=1&controls=0"
            title="Bentley Residences Miami - Lobby"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
    BentleyResidencesObject.titulo = getLocalizedField("titulo", "Bentley Residences");
    BentleyResidencesObject.slogan = getLocalizedField("slogan", "Space you can embrace");
    BentleyResidencesObject.numberOfImages = 47;
    BentleyResidencesObject.banner = true;
    BentleyResidencesObject.area = SunnyIsles();
    BentleyResidencesObject.video = (
        <iframe
            width="1600"
            height="900"
            src="https://www.youtube.com/embed/RmtuXP6nIiI?list=TLGGweicZODCOb8xMTEyMjAyMw&autoplay=1&controls=0"
            title="Bentley Residences Miami - Residences"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
    return BentleyResidencesObject;
}