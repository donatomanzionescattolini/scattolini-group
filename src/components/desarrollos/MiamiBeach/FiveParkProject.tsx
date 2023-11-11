
import ProjectTemplate from "../ProjectTemplate";
import PropiedadesMiamiBeach from "./PropiedadesMiamiBeach";

export default function FiveParkProject() {
    return (
        <ProjectTemplate
            properties={<PropiedadesMiamiBeach/>}
            nombre={"five-park"}
            direccion="500 Alton Rd, Miami Beach, FL 33139, Estados Unidos"
            caracteristicas={{
                amenidades: (
                    <>
                        <ul className="text-capitalize list ">
                            <li> área de coworking con oficinas privadas y</li>
                            <li>salas de juntas</li>
                            <li>
                                Laboratorio de aprendizaje para niños y club para adolescentes
                            </li>
                            <li> Sala de proyección</li>
                            <li> suites de lujo para huéspedes a corto plazo para amigos</li>
                            <li>y familia</li>
                            <li> Bar y cafetería en la piscina solo para residentes</li>
                            <li> Servicio de conserjería y mayordomo 24 horas</li>
                            <li> servicios de limpieza disponibles</li>
                            <li> Transporte al Beach Club vía eléctrica Small</li>
                            <li> Gimnasio totalmente equipado</li>
                            <li> salas de spa y tratamientos</li>
                            <li>
                                11 La fibra óptica de última generación proporciona alta calidad
                            </li>
                            <li>Servicio de internet y WiFi desde todos los rincones de</li>
                            <li>Residencias y comodidades de Five Park, incluso garaje</li>
                            <li>y espacios de ascensor</li>

                            <li>
                                El Canopy Park adyacente de 3 acres cuenta con un área de juegos
                                MONSTRUM, un gimnasio al aire libre, áreas de pícnic, un parque
                                para perros, jardines con sombra e instalaciones de arte
                            </li>

                            <li>
                                La cubierta de servicios verde y llena de plantas cuenta con
                                impresionantes vistas del atardecer del horizonte y la bahía de
                                Miami, visibles desde las piscinas para adultos y para familias.
                                El amplio espacio también ofrece una relajación inigualable con
                                enrejados con sombra, una terraza al atardecer, numerosas
                                cabañas y salones y una plataforma de meditación
                            </li>

                            <li>
                                Club de playa privado ubicado al sur de la Quinta, con
                                camastros, sombrillas y servicio de toallas
                            </li>
                        </ul>
                    </>
                ),
                edificio: (
                    <>
                        <ul>
                            <li>Pisos: 48</li>
                            <li>Unidades: 98 residencias de 2, 3, 4 y 5 dormitorios</li>
                            <li>Ubicación: 500 Alton Rd, Miami Beach, FL 33139</li>
                        </ul>
                        <ul>
                            <li>Privado, porte-cochere y vestíbulo para residentes</li>
                            <li>Estaciones de carga de vehículos eléctricos</li>
                            <li>
                                El Canopy Park adyacente de 3 acres cuenta con un parque
                                infantil MONSTRUM, un gimnasio al aire libre, áreas de picnic,
                                parque para perros, jardines sombreados e instalaciones
                                artísticas
                            </li>
                            <li>
                                La terraza de servicios verde y llena de plantas cuenta con
                                impresionantes vistas del atardecer del horizonte y la bahía de
                                Miami, visibles desde las piscinas para adultos y familias. El
                                amplio espacio también ofrece una relajación inigualable con
                                enrejados a la sombra, una terraza al atardecer, numerosas
                                cabañas y salones, y una terraza de meditación
                            </li>
                            <li>Club de Playa Privado</li>
                            <li>Zona de coworking con oficinas privadas y salas de juntas</li>
                            <li>
                                Laboratorio de aprendizaje para niños y club para adolescentes
                            </li>
                            <li>Sala de proyecciones</li>
                            <li>Suites de lujo para huéspedes a corto plazo</li>
                            <li>Bar y cafetería en la piscina solo para residentes</li>
                            <li>Servicio de conserjería y mayordomo las 24 horas</li>
                            <li>Gimnasio</li>
                            <li>Salas de spa y tratamiento</li>
                            <li>
                                La fibra óptica de última generación brinda servicio de Internet
                                y WiFi de alta calidad desde todos los rincones de las
                                residencias y servicios de Five Park, incluso los espacios de
                                garaje y ascensor
                            </li>
                        </ul>
                    </>
                ),
                residencias: (
                    <>
                        <ul>
                            <li>Ascensor privado</li>
                            <li>
                                Las aberturas de las puertas corredizas de 10' de ancho permiten
                                el acceso a la terraza desde las salas de estar
                            </li>
                            <li>Techos altos de 10 pies</li>
                            <li>
                                Las residencias cuentan con cocinas diseñadas a medida por
                                Gabellini Sheppard
                            </li>
                            <li>Armarios de cocina de fabricación italiana</li>
                            <li>
                                Gabinetes superiores de vidrio esmerilado de color decorativo
                            </li>
                            <li>Mesas de comedor integradas con tapa de madera</li>
                            <li>
                                Electrodomésticos Gaggenau con rejillas de ventilación con
                                conductos
                            </li>
                            <li>Dormitorios principales con vestidores</li>
                            <li>
                                Los baños principales Gabellini Sheppard diseñados a medida
                                cuentan con tocadores de fabricación italiana y puertas de ducha
                                de vidrio texturizado
                            </li>
                            <li>
                                Los accesorios de baño de diseño vanguardista de Hansgrohe están
                                presentes en los baños secundarios
                            </li>
                            <li>
                                Lavadoras de carga frontal y secadoras con conductos y
                                ventilación para un acceso limpio y silencioso a la lavandería
                            </li>
                            <li>
                                Aplicación personalizada Five Park para una gestión cómoda de
                                los servicios y la experiencia en el hogar
                            </li>
                            <li>
                                Las residencias están preparadas con precableado de platino
                            </li>
                        </ul>
                    </>
                ),
            }}
            introduccion={[
                "Residencias con vista a la bahía yel mar en la torre más innovadora de miami",
                "Un flamante torre residencial llega a Miami Beach con vistas incomparables en todas las direcciones.Amenidades excepcionales a lo largo de 50.000 pies cuadrados (4645 metros cuadrados) con serviciospropios de bienestar, club de playa privado y parque con un terreno de tres acres (más de una hectárea) frente a la puerta de su casa. Una creación verdaderamente impresionante de las mentes de diseño más visionarias del mundo",
            ]}
            titulo={"Five Park"}
            subtitulo={"Vida a un Nivel Superior"}
            numberOfImages={45}
            banner
        />
    );
}
