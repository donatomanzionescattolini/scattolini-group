import ProjectTemplate from "../ProjectTemplate";
import PropiedadesDowntown from "./PropiedadesDowntown";

export default function TheElserProject() {
    return (
        <ProjectTemplate
            caracteristicas={{
                edificio: (
                    <ul>
                        <li>
                            Enorme terraza de la piscina con televisor gigante, bar y parrilla
                        </li>
                        <li>Plataforma de yoga al aire libre y césped de teatro</li>
                        <li>
                            Gimnasio moderno de dos niveles y estudio de fitness con C diario
                        </li>
                        <li>Vestíbulo con bar de cócteles y restaurante de Jaguar Sun</li>
                        <li>Laboratorio de coworking de dos niveles</li>
                        <li>
                            Cafetería de esquina y espacio para reuniones de Cafe Domino
                        </li>
                    </ul>
                ),
                residencias: (
                    <ul>
                        <li>Todas las ventanas se abren a balcones con vistas altísimas</li>
                        <li>
                            Espejos de tocador retroiluminados con grandes cajones de
                            almacenamiento
                        </li>
                        <li>
                            Iluminación cenital y azulejos de porcelana con vetas de madera en
                            todas partes
                        </li>
                        <li>Encimeras de cuarzo con gabinetes italianos personalizados</li>
                        <li>
                            Electrodomésticos con acabado pizarra y lavadora y secadora de
                            tamaño completo
                        </li>
                        <li>
                            Cerraduras de puertas y termostatos inteligentes con wi-fi
                            ultrarrojo preinstalado
                        </li>
                    </ul>
                ),
                amenidades: (
                    <ul className="list list-unstyled">
                        <strong>Piscina Estilo Resort</strong>
                        <br/>
                        <li>
                            Una piscina de 132 pies de largo al mejor estilo resort con
                            salones privados y vistas hacia Downtown Miami y Biscayne Bay,
                            además de una pantalla LED de 16 pies y zona de parrilla.
                        </li>
                        <br/>
                        <strong>Restaurante y Bar de Cócteles</strong>
                        <br/>
                        <li>
                            Society Residences incluye un restaurante y bar de cocteles por
                            Jaguar Sun®, quienes se caracterizan por sus mezclas novedosas,
                            platos de pasta y pequeños bocadillos en un ambiente acogedor y
                            minimalista.
                        </li>
                        <br/>
                        <strong>Bienestar y Actividades Físicas</strong>
                        <br/>
                        <li>
                            El área de bienestar ofrece un gimnasio moderno de doble nivel,
                            clases de entrenamiento físico, eventos sociales, zona exterior de
                            yoga y sauna.
                        </li>
                        <br/>
                        <strong>Tienda de Café</strong>
                        <br/>
                        <li>
                            Cafe Domino® ofrece una experiencia única en la zona de café. Los
                            residentes también encontrarán servicio de wifi en todas las áreas
                            sociales.
                        </li>
                    </ul>
                ),
            }}
            direccion=""
            properties={<PropiedadesDowntown/>}
            nombre={"the-elser"}
            introduccion={[
                "The Elser Hotel and Residences, comparte el mismo lugar bullicioso y las vistas Illuminosas de Biscayne Bay que se disfrutaron anteriormente a principios de 1900 en Elser Pier",
                "El legado y el asombroso éxito de este muelle, como una de las primeras atracciones populares en el corredor del centro, ayudaron a liderar la transformación en la próspera metrópolis frente a la bahía que conocemos hoy",
                "The Elser Hotel and Residences, ofrece un estilo de vida dinámico y animado para los creadores de todas las tendencias. El Elser es una torre de condominios de lujo en el centro de Miami que cuenta con increíbles estudios, configuraciones de 1 a 3 dormitorios. Desarrollado por el prestigioso New York and Miami Developer Property Markets Group. Las casas están amuebladas y diseñadas de manera eficiente para vivir a lo grande, con capacidades de alquileres a corto plazo. Las comodidades incluyen un enorme gimnasio moderno y un estudio de fitness, una enorme terraza con piscina, un laboratorio de trabajo compartido, un restaurante y bar en el vestíbulo y eventos comunitarios diarios. La ubicación perfecta del Elser permite a los residentes vivir a poca distancia de algunos de los principales puntos de acceso de Miami, incluido el nuevo Miami World Center, el FTX Arena, el Museo de Arte de Ciencia y Pérez y más... a pocos minutos de las playas de Miami, los aeropuertos internacionales, la terminal de cruceros y varias atracciones culturales, artísticas, turísticas y de moda.",
            ]}
            banner
            titulo={"The Elser Residences"}
            subtitulo={"Lugar bullicioso y vistas brillantes de la bahía de Biscayne"}
            numberOfImages={44}
            video={
                <iframe
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/BaD-8BLN9nM?autoplay=1&controls=0"
                    title="Episode 15: The Elser in Downtown Miami (Short-term Rentals Allowed)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            }
        />
    );
}
