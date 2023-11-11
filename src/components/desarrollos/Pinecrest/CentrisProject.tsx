
import ProjectTemplate from "../ProjectTemplate";
import PropiedadesPinecrest from "./PropiedadesPinecrest";

export default function CentrisProject() {
    return (
        <ProjectTemplate
            banner
            properties={<PropiedadesPinecrest/>}
            nombre={"centris"}
            caracteristicas={{
                edificio: (
                    <>
                        <dl>
                            <dt>Dirección</dt>
                            <dd>
                                <address> SW 120th Street u0026 SW 82nd Avenue</address>
                            </dd>
                            <dt>Tamaño de la propiedad</dt>
                            <dd>2,115 pies cuadrados</dd>
                        </dl>
                    </>
                ),
                amenidades: (
                    <>
                        <dl>
                            <dt>Lote de niños</dt>

                            <dd>
                                El área de juegos ofrecerá horas de diversión al aire libre para
                                los más pequeños y está convenientemente ubicada junto al área
                                de la piscina
                            </dd>

                            <dt>Parque</dt>

                            <dd>
                                Un parque ubicado en el centro ofrecerá senderos pavimentados y
                                muchas áreas verdes, este será el lugar perfecto para los paseos
                                diarios de usted y su amigo peludo.
                            </dd>

                            <dt>Piscina</dt>
                            <dd>
                                Flota en un tubo, chapotea y refréscate en la piscina o
                                simplemente relájate mientras preparas el almuerzo en la
                                glorieta de la barbacoa.
                            </dd>
                        </dl>
                    </>
                ),
                residencias: (
                    <>
                        <dl>
                            <dt>COLECCIÓN DIAMOND (viviendas unifamiliares)</dt>

                            <p>
                                Diamond Collection ofrece cinco diseños de casas de lujo estilo
                                propiedad en la comunidad del plan maestro Centris, que
                                próximamente llegará a Miami, FL. En el centro de Centris hay
                                una piscina comunitaria rodeada por un pabellón, un parque y un
                                área de juegos infantiles para uso residencial. Con una
                                ubicación ideal, los propietarios están a solo minutos de
                                Kendall, Pinecrest y The Falls. Todos ellos albergan las mejores
                                tiendas, restaurantes, entretenimiento y recreación de Florida.
                            </p>

                            <dt>Modelo Niagra</dt>
                            <dd> 4,032 pies cuadrados | 5 dormitorios | 5,5 baños</dd>

                            <dt>Modelo Ruby</dt>
                            <dd> 4,152 pies cuadrados | 5 dormitorios | 4,5 baños</dd>

                            <dt>Modelo citrino</dt>
                            <dd> 3,442 pies cuadrados | 5 dormitorios | 4 baños</dd>

                            <dt>Modelo de Silverstone</dt>
                            <dd> 4,336 pies cuadrados | 5 dormitorios | 5,5 baños</dd>

                            <dt>Modelo de Florencia</dt>
                            <dd> 3,573 pies cuadrados | 5 dormitorios | 4,5 baños</dd>

                            <dd>————-</dd>

                            <dt>COLECCIÓN SAPPHIRE (casas adosadas)</dt>
                            <dd>
                                <p>
                                    The Sapphire Collection ofrece nuevas casas adosadas de lujo a
                                    la venta en la comunidad del plan maestro Centris,
                                    próximamente en Miami, FL. Perfecto para todo tipo de
                                    familias, los compradores de vivienda tendrán la opción de
                                    elegir entre tres diseños de planos de planta espaciosos. En
                                    el centro de Centris hay una piscina comunitaria rodeada por
                                    una glorieta, un parque y un área de juegos infantiles para
                                    uso residencial. Con una ubicación ideal, esta comunidad está
                                    a solo minutos de Dadeland Mall y The Falls para brindar a los
                                    residentes lo mejor en tiendas, restaurantes y
                                    entretenimiento.
                                </p>
                                <dl>
                                    <dt>Modelo de Ceilán</dt>
                                    <dd> 2,115 pies cuadrados | 3 dormitorios | 2.5 baños</dd>

                                    <dt>Modelo estrella</dt>
                                    <dd> 2,378 pies cuadrados | 4 dormitorios | 3 baños</dd>

                                    <dt>Modelo de Montana</dt>
                                    <dd> 2,203 pies cuadrados | 3 dormitorios | 3,5 baños</dd>
                                </dl>
                            </dd>
                        </dl>
                    </>
                ),
            }}
            introduccion={[
                "Presentamos Centris, una comunidad de casas adosadas y propiedades de lujo nuevas a la venta en Miami, FL. Centris está idealmente ubicado en SW 120th Street y 82nd Avenue, cerca de Pinecrest y The Falls, con fácil acceso a las playas y al centro de Miami. En Centris, los residentes disfrutarán de entrada con acceso controlado para vehículos, un pabellón con piscina, área de juegos infantiles y un parque en el corazón de la comunidad, y cada casa está equipada con accesorios y acabados de lujo, todo sin costo adicional.",
            ]}
            titulo={"Centris"}
            subtitulo={""}
            numberOfImages={36}
        />
    );
}
