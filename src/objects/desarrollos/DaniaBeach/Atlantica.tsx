import Project from "../../../models/desarrollos/Project.tsx";
import DaniaBeach from "../../areas/DaniaBeach";


export default function Atlantica() {


    const AtlanticaObject = new Project();
    AtlanticaObject.area = DaniaBeach();
    AtlanticaObject.banner = true;
    AtlanticaObject.traits = {
        building: <dl>
            <dt>Dirección</dt>
            <dd>
                <address>624 NE 2nd St, Dania Beach, Florida 33304</address>
            </dd>
            <dt>Tipo de Residencias</dt>
            <dd>Condominios</dd>

            <dt>Número de Habitaciones</dt>
            <dd>Una habitación, dos habitaciones, o dos habitaciones más un estudio</dd>
            <dt>Destinos Populares</dt>
            <dd>
                <p>Experimenta la conveniencia de vivir cerca de destinos populares no solo en Dania Beach, sino en toda
                    el área del Sur de la Florida. Desde andar en bicicleta hasta la playa, pasear hasta el Casino de
                    Dania Beach y explorar el centro de Fort Lauderdale o el Hard Rock Hotel; ¡todo está a solo unos
                    momentos de distancia!</p>
                <ul>
                    <li>Hard Rock Hotel & Casino</li>
                    <li>Aeropuerto Internacional de Fort Lauderdale</li>
                    <li>Puerto Everglades</li>
                    <li>Downtown de Fort Lauderdale</li>
                    <li>Parque Frost</li>
                    <li>Dania Pointe</li>
                    <li>Marina Harbor Towne</li>
                    <li>Centro de Naturaleza Anne Kolb</li>
                    <li>Casino de Dania Beach</li>
                </ul>
            </dd>
        </dl>,
        residencias: <ul>
            <li>Cocinas elegantes, completas con encimeras de</li>
            <li>granito.</li>
            <li>Suelos de baldosas de porcelana lujosos.</li>
            <li>Acabados y accesorios de diseñador.</li>
            <li>Varias opciones de planos de planta espaciosos.</li>
            <li>Gabinetes con tecnología de cierre suave.</li>
            <li>Electrodomésticos eficientes en energía.</li>
            <li>Tratamientos para ventanas.</li>
            <li>Ventiladores de techo.</li>
            <li>Lavadora y secadora en la unidad</li>
        </ul>,
        amenities: <>
            <p>Descubre amenidades únicas, diseñadas cuidadosamente para mejorar tu estilo de vida costero mientras
                agregan conveniencia a tu rutina diaria.</p>
            <ul>
                <li>Relájate con amigos y familiares junto a la piscina en un día caluroso de Florida.</li>

                <li>Mantente activo y lleno de energía en nuestro moderno gimnasio.</li>
                <li>Socializa y relájate en nuestro acogedor club social.</li>

                <li>Disfruta del aire fresco con tu amigo peludo ennuestro parque para perros en el lugar.</li>

                <li>Comodidades con control de acceso.</li>
            </ul>
        </>
    };


    AtlanticaObject.name = "atlantica";
    AtlanticaObject.title = "Atlantica at Dania Beach"
    AtlanticaObject.introduction = ["Condominios listos para mudarse ahora en venta a unos cuantos pasos de la playa", "Presentamos Atlantica Dania Beach: condominios listos para mudarse ubicados a solo minutos de la playa. Experimenta una vida contemporánea con acabados de diseñador, espacios abiertos y diseños únicos adaptados para cualquier estilo de vida. Disfruta de una variedad de exclusivas comodidades y aprovecha los destinos populares que están a la vuelta de la esquina, incluyendo el centro de Fort Lauderdale y el renombrado Hard RockHotel. Emprende tu próxima aventura en Atlantica Dania Beach."];
    AtlanticaObject.subtitle = "Una Nueva Aventura Te Espera";
    AtlanticaObject.numberOfImages = 38;

    return AtlanticaObject;


}