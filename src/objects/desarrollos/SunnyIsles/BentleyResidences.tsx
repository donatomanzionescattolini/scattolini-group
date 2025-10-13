import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import SunnyIsles from "../../areas/SunnyIsles.tsx";

export default function BentleyResidences() {
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
    BentleyResidencesObject.introduccion = [
        "Bentley Residences se eleva 60 pisos con un diseño arquitectónico inigualable que incorpora una pared plateada reflectante artística. Las residencias varían en tamaño de 3,500 a 9,000 pies cuadrados, y todas cuentan con vista al mar. La propiedad es la torre residencial más alta en una playa de Estados Unidos. Las comodidades incluyen un cine, restaurante, bar, gimnasio, piscina, spa, salón de cigarros, cabañas y jardines. La torre ha sido diseñada de acuerdo con la certificación del Florida Green Building Council (FLGC) y otras regulaciones ambientales, lo que garantiza la protección del medio ambiente local y minimiza el impacto en la vida silvestre local. La ubicación de Bentley Residences Miami en la pintoresca Collins Avenue ofrece proximidad a la hermosa playa y al Océano Atlántico",
    ];
    BentleyResidencesObject.video =
        <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/6FwGK20FXtI?list=TLGGDuU-t1V96uoxNzEwMjAyMw&autoplay=1&controls=0"
            title="Bentley Residences Miami - Lobby"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    ;
    BentleyResidencesObject.titulo = "Bentley Residences";
    BentleyResidencesObject.slogan = "Espacio que puedes abrazar";
    BentleyResidencesObject.numberOfImages = 47;
    BentleyResidencesObject.banner = true;
    BentleyResidencesObject.area = SunnyIsles();
    BentleyResidencesObject.video = <iframe width="1600" height="900" src="https://www.youtube.com/embed/RmtuXP6nIiI?list=TLGGweicZODCOb8xMTEyMjAyMw&autoplay=1&controls=0" title="Bentley Residences Miami - Residences" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>;
    return BentleyResidencesObject;
}