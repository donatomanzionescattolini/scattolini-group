import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import NorthBayVillage from "../../areas/NorthBayVillage.tsx";

export default function ShomaBay() {
    const ShomaBayObject = new Desarrollo();
    ShomaBayObject.nombre = "shoma-bay";

    ShomaBayObject.direccion = "1850 John F Kennedy Causeway, North Bay Village, FL 33141";
    ShomaBayObject.caracteristicas = {
        edificio: (
            <ul>
                <li>Número de pisos: 24</li>
                <li>Número de unidades: 333</li>
                <li>
                    Ubicación: 1850 John F Kennedy Causeway, North Bay Village, FL
                    33141{" "}
                </li>
                <li>Habitaciones por unidad: 1-3</li>

                <li>Salón del vestíbulo</li>
                <li>Área de juego</li>
                <li>Spa para mascotas</li>
                <li>Biblioteca</li>
                <li>Área de Co-working</li>
                <li>Piscina con vista al mar</li>
                <li>Cabañas Piscina</li>
                <li>Cocina de verano</li>
                <li>Club infantil</li>
                <li>Balneario</li>
                <li>Sky Lounge con bar, juego y película</li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>Amplios planos de planta</li>
                <li>Termostatos digitales programables</li>
                <li>Entrada digital</li>
                <li>Lavadora y secadoras de tamaño completo de carga frontal</li>
                <li>Balcones privados</li>
                <li>Cocinas de calibre chef</li>
                <li>Encimeras de cuarzo</li>
                <li>Gabinetes italianos con iluminación debajo del gabinete</li>
                <li>Estaciones de carga USB</li>
                <li>Grifería de cocina multifunción</li>
                <li>Electrodomésticos de acero inoxidable de alta eficiencia</li>
                <li>Baños inspirados en el spa</li>
                <li>Tocadores de diseño con espejos iluminados</li>
                <li>
                    Paredes húmedas de porcelana de altura completa en duchas y
                    bañeras
                </li>
            </ul>
        ),
        amenidades: (
            <ul>
                <li>Jardin Zen</li>
                <li>Bodega para Vinos</li>
                <li>Club de Habanos</li>
                <li>Piscina Climatizada</li>
                <li>Plaza para Comidas (Shoma Bazzar)</li>
                <li>Salon de Yoga</li>
                <li>Spa, Sauna y Baño Turco</li>
                <li>Sala de Cine</li>
                <li>Salon de Juegos para Niños</li>
                <li>Terraza Tropical y Solarium</li>
                <li>Spa y Parque para Mascotas</li>
                <li>Gimnasio Equipado Technogym de Alta Tecnología</li>
                <li>Simulador de Golf</li>
                <li>Servicio de Estacionamiento Valet Parking</li>
                <li>Centro de Negocios y Espacios de co-working</li>
            </ul>
        ),
    };
    ShomaBayObject.introduccion = [
        "Escondido en North Bay Village y perfectamente alejado del ritmo apresurado de Miami, Shoma Bay es el primero de su tipo, un lugar donde puedes vivir y jugar con lujo. Un lugar diseñado para aquellos que anhelan integrar su vida, trabajo, bienestar y estilo de vida de juego.",
        "Cada accesorio es intencional, cada detalle está meticulosamente atendido, los espacios de vida muestran lo último en sofisticación contemporánea al tiempo que reflejan las raíces clásicas de la histórica ciudad de Nueva York. ",
    ];
    ShomaBayObject.banner = true;
    ShomaBayObject.area = NorthBayVillage();
    ShomaBayObject.titulo = "Shoma Bay";
    ShomaBayObject.subtitulo = "";
    ShomaBayObject.numberOfImages = 16;
    ShomaBayObject.video =
        <div className="d-flex flex-row p-0 m-0 h-100 embed-responsive justify-content-center">
            <iframe
                width={"100%"}
                height={500}
                src="https://www.youtube.com/embed/UIfivX8efkQ?autoplay=true"
                title="Shoma Bay North Bay Village... Presented by Ashton Coleman"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                autoFocus
            ></iframe>
        </div>
    ;
    return ShomaBayObject;
}