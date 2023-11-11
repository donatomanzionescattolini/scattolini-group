import PropiedadesDowntown from "./PropiedadesDowntown";
import ProjectTemplate from "../ProjectTemplate";

export default function AstonMartinProject() {
    return (
        <ProjectTemplate
            banner
            properties={<PropiedadesDowntown/>}
            nombre={"aston-martin"}
            video={
                <iframe
                    width="100%"
                    height="700"
                    title="aston martin"
                    src="https://www.youtube.com/embed/q_oHUNtwq38?wmode=opaque&autoplay=true&enablejsapi=true"
                    style={{opacity: 1, margin: "auto"}}
                ></iframe>
            }
            direccion="300 Biscayne Boulevard Way"
            caracteristicas={{
                edificio: (
                    <ul className="list-unstyled">
                        <li>
                            <b>Ubicación:</b> 300 Biscayne Boulevard Way
                        </li>

                        <li>
                            <b>Número de residencias:</b> 391 Residencias en Condominio
                        </li>

                        <li>
                            <b>Número de pisos:</b> 66 Pisos
                        </li>

                        <li>
                            <b>Dormitorios por residencia:</b> Residencias de 1-5 dormitorios,
                            dúplex, áticos y áticos triples
                        </li>

                        <li>
                            <b>Clasificación de residencias:</b>

                            <ul>
                                <li>Niveles 3-14: River Residences</li>
                                <li> Niveles 15-45: Residencias panorámicas</li>
                                <li> Niveles 46-51: Sky Residences</li>
                                <li> Niveles 56-62: Áticos</li>
                                <li> Niveles 63-65: Ático Triple</li>
                            </ul>
                        </li>
                    </ul>
                ),
                residencias: (
                    <ul className="list-unstyled">
                        <li>
                            <h5>Tamaños</h5>

                            <ul>
                                <li>Ático Superior - 18,811 SF</li>
                                <li> Sky Penthouses - 8,977 a 10,463 SF</li>
                                <li> 5 dormitorios - 3.764 a 3.994 pies cuadrados</li>
                                <li> 4 dormitorios - 3.235 a 4.434 pies cuadrados</li>
                                <li> 3 dormitorios - 2.236 a 3.075 pies cuadrados</li>
                                <li> 2 dormitorios - 1.317 a 2.143 pies cuadrados</li>
                                <li> 1 dormitorio - 754 a 1,001 SF</li>
                                <li> Estudios - 698 SF</li>
                            </ul>
                        </li>
                        <li>
                            <br></br>
                        </li>
                        <li>
                            <h5>Características</h5>
                            <ul>
                                <li>
                                    Vistas panorámicas de la Bahía de Biscayne, el océano y el
                                    icónico horizonte de Miami.
                                </li>
                                <li> 10 pies de altura de techo en residencias.</li>
                                <li> Altura de techo de 12 pies en áticos.</li>
                                <li>
                                    {" "}
                                    Ventanas de piso a techo y puertas corredizas de vidrio en
                                    todas las residencias.
                                </li>
                                <li>
                                    {" "}
                                    Cocinas de primera línea con gabinetes y electrodomésticos
                                    europeos.
                                </li>
                                <li> Baños con gabinetes europeos.</li>
                                <li>
                                    {" "}
                                    Pisos de mármol de primera calidad en toda la sala de estar,
                                    cocina y baños.
                                </li>
                                <li>
                                    {" "}
                                    Balcones privados terminados con pisos de porcelanato de alta
                                    gama y barandillas de vidrio.
                                </li>
                            </ul>
                        </li>
                    </ul>
                ),
                amenidades: (
                    <ul className="list-unstyled">
                        <li>
                            <h5>Amenidades y Servicios Generales</h5>
                            <ul>
                                <li>
                                    {" "}
                                    Edificio de servicio completo con servicios de conserjería y
                                    hospitalidad.
                                </li>
                                <li>
                                    {" "}
                                    Instalaciones de Super Yacht Marina, servicio de aparcacoches
                                    las 24 horas y opción de estacionamiento de autoservicio.
                                </li>
                                <li>
                                    {" "}
                                    Estaciones de carga para coches eléctricos, bicicletas y
                                    espacios de almacenamiento privado.
                                </li>
                                <li>
                                    {" "}
                                    Conexión digital al conserje y todas las comodidades del
                                    edificio desde cada residencia.
                                </li>
                                <li> Se admiten mascotas.</li>
                            </ul>
                        </li>
                        <li>
                            <br></br>
                        </li>
                        <li>
                            <h5>Amenidades Sky</h5>
                        </li>
                        <li>
                            <p>
                                42,275 pies cuadrados de amenidades divididas en 4 pisos,
                                conectados por una monumental escalera de vidrio.
                            </p>
                        </li>
                        <li>
                            {" "}
                            <i> Nivel 52</i>
                            <ul>
                                <li> Galería de Arte Curada</li>
                                <li> Centro de negocios</li>
                                <li> Sala de Conferencias</li>
                                <li> Sala de juegos para niños</li>
                                <li> Centro para adolescentes</li>
                                <li> Sala de juegos</li>
                                <li> Área de Venta</li>
                            </ul>
                        </li>
                        <li>
                            {" "}
                            <i> Nivel 53</i>
                            <ul>
                                <li> Salón de fitness y spa</li>
                                <li> BALNEARIO</li>
                                <li> Gimnasio (nivel inferior)</li>
                                <li> Sala de hilatura</li>
                                <li> Sala de boxeo</li>
                                <li> Suites de tratamiento</li>
                                <li> Sauna</li>
                                <li> Sala de meditación</li>
                                <li> Salón de belleza</li>
                                <li> Barbería</li>
                            </ul>
                        </li>

                        <li>
                            {" "}
                            <i> Nivel 54</i>
                            <ul>
                                <li> Gimnasio (nivel superior)</li>
                                <li> Virtual Golf</li>
                                <li> Cines 1 y 2</li>

                                <li>
                                    {" "}
                                    <i> Nivel 55</i>
                                </li>

                                <li> Piscina infinita</li>
                                <li> Terraza de la piscina</li>
                                <li> Cabañas Piscina</li>
                                <li> Sky Bar y Lounge</li>
                                <li> Conserje de piscina</li>
                                <li> Gran Salón</li>
                                <li> Cocina del chef de última generación</li>
                                <li> Comedor Privado</li>
                            </ul>
                        </li>
                    </ul>
                ),
            }}
            introduccion={[
                "Durante más de un siglo, el nombre Aston Martin ha sido sinónimo de excelencia en el campo del diseño de automóviles y es una de las marcas más emblemáticas y reconocibles del mundo.  Para su visión de las Residencias Aston Martin en el centro de Miami, Florida, Aston Martin combina una estética de diseño brillante con una ubicación ideal para crear la dirección más llamativa y codiciada de Miami.",
                "Cada aspecto de las residencias Aston Martin en 300 Biscayne Boulevard Way ha sido cuidadosamente considerado para proporcionar el equilibrio perfecto entre la maximización del espacio, la luz y las vistas óptimas, y las necesidades del estilo de vida cosmopolita moderno de hoy.      ",
                "Situado en una de las últimas parcelas de la propiedad frente al mar de Miami en desarrollarse, Aston Martin Residences es una sinfonía de vidrio curvilíneo y acero, que se eleva 66 pisos hacia el cielo. ",
            ]}
            titulo={"Aston Martin Residences"}
            subtitulo={""}
            numberOfImages={29}
        />
    );
}
