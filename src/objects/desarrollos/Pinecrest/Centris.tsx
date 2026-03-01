import Pinecrest from "../../areas/Pinecrest.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n";

export default function Centris(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("centris", lang);
    const CentrisObject = new Desarrollo();
    CentrisObject.banner = true;
    CentrisObject.area = Pinecrest();

    CentrisObject.nombre = "centris";

    CentrisObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>{getLocalizedField("caracteristicas.edificio.direccion", "Dirección")}</dt>
                    <dd>
                        <address> SW 120th Street & SW 82nd Avenue</address>
                    </dd>
                    <dt>{getLocalizedField("caracteristicas.edificio.tamano", "Tamaño de la propiedad")}</dt>
                    <dd>{getLocalizedField("caracteristicas.edificio.tamanoDesc", "2,115 pies cuadrados")}</dd>
                </dl>
            </>
        ),
        amenidades: (
            <>
                <dl>
                    <dt>{getLocalizedField("caracteristicas.amenidades.ninos", "Lote de niños")}</dt>

                    <dd>
                        {getLocalizedField("caracteristicas.amenidades.ninosDesc", "El área de juegos ofrecerá horas de diversión al aire libre para los más pequeños y está convenientemente ubicada junto al área de la piscina")}
                    </dd>

                    <dt>{getLocalizedField("caracteristicas.amenidades.parque", "Parque")}</dt>

                    <dd>
                        {getLocalizedField("caracteristicas.amenidades.parqueDesc", "Un parque ubicado en el centro ofrecerá senderos pavimentados y muchas áreas verdes, este será el lugar perfecto para los paseos diarios de usted y su amigo peludo.")}
                    </dd>

                    <dt>{getLocalizedField("caracteristicas.amenidades.piscina", "Piscina")}</dt>
                    <dd>
                        {getLocalizedField("caracteristicas.amenidades.piscinaDesc", "Flota en un tubo, chapotea y refréscate en la piscina o simplemente relájate mientras preparas el almuerzo en la glorieta de la barbacoa.")}
                    </dd>
                </dl>
            </>
        ),
        residencias: (
            <>
                <dl>
                    <dt>{getLocalizedField("caracteristicas.residencias.diamond", "COLECCIÓN DIAMOND (viviendas unifamiliares)")}</dt>

                    <p>
                        {getLocalizedField("caracteristicas.residencias.diamondDesc", "Diamond Collection ofrece cinco diseños de casas de lujo estilo propiedad en la comunidad del plan maestro Centris, que próximamente llegará a Miami, FL. En el centro de Centris hay una piscina comunitaria rodeada por un pabellón, un parque y un área de juegos infantiles para uso residencial. Con una ubicación ideal, los propietarios están a solo minutos de Kendall, Pinecrest y The Falls. Todos ellos albergan las mejores tiendas, restaurantes, entretenimiento y recreación de Florida.")}
                    </p>

                    {getLocalizedArray("caracteristicas.residencias.diamondModels", [
                        "Modelo Niagra: 4,032 pies cuadrados | 5 dormitorios | 5,5 baños",
                        "Modelo Ruby: 4,152 pies cuadrados | 5 dormitorios | 4,5 baños",
                        "Modelo citrino: 3,442 pies cuadrados | 5 dormitorios | 4 baños",
                        "Modelo de Silverstone: 4,336 pies cuadrados | 5 dormitorios | 5,5 baños",
                        "Modelo de Florencia: 3,573 pies cuadrados | 5 dormitorios | 4,5 baños",
                    ]).map((m, i) => <dd key={i}>{m}</dd>)}

                    <dd>————-</dd>

                    <dt>{getLocalizedField("caracteristicas.residencias.sapphire", "COLECCIÓN SAPPHIRE (casas adosadas)")}</dt>
                    <dd>
                        <p>
                            {getLocalizedField("caracteristicas.residencias.sapphireDesc", "The Sapphire Collection ofrece nuevas casas adosadas de lujo a la venta en la comunidad del plan maestro Centris, próximamente en Miami, FL. Perfecto para todo tipo de familias, los compradores de vivienda tendrán la opción de elegir entre tres diseños de planos de planta espaciosos. En el centro de Centris hay una piscina comunitaria rodeada por una glorieta, un parque y un área de juegos infantiles para uso residencial. Con una ubicación ideal, esta comunidad está a solo minutos de Dadeland Mall y The Falls para brindar a los residentes lo mejor en tiendas, restaurantes y entretenimiento.")}
                        </p>
                        <dl>
                            {getLocalizedArray("caracteristicas.residencias.sapphireModels", [
                                "Modelo de Ceilán: 2,115 pies cuadrados | 3 dormitorios | 2.5 baños",
                                "Modelo estrella: 2,378 pies cuadrados | 4 dormitorios | 3 baños",
                                "Modelo de Montana: 2,203 pies cuadrados | 3 dormitorios | 3,5 baños",
                            ]).map((m, i) => <dd key={i}>{m}</dd>)}
                        </dl>
                    </dd>
                </dl>
            </>
        ),
    };

    CentrisObject.introduccion = getLocalizedArray("introduccion", [
        "Presentamos Centris, una comunidad de casas adosadas y propiedades de lujo nuevas a la venta en Miami, FL. Centris está idealmente ubicado en SW 120th Street y 82nd Avenue, cerca de Pinecrest y The Falls, con fácil acceso a las playas y al centro de Miami. En Centris, los residentes disfrutarán de entrada con acceso controlado para vehículos, un pabellón con piscina, área de juegos infantiles y un parque en el corazón de la comunidad, y cada casa está equipada con accesorios y acabados de lujo, todo sin costo adicional.",
    ]);
    CentrisObject.titulo = getLocalizedField("titulo", "Centris");
    CentrisObject.slogan = getLocalizedField("slogan", "");
    CentrisObject.numberOfImages = 36;
    return CentrisObject;
}

