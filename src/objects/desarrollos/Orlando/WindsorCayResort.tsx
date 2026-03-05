import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Orlando from "../../areas/Orlando.tsx";

const WindsorCayResort = new Desarrollo(Orlando);

WindsorCayResort.nombre = "windsor-cay-resort";
WindsorCayResort.numberOfImages = 141;
WindsorCayResort.area = Orlando;
WindsorCayResort.banner = true;

WindsorCayResort.titulo = {es: "Windsor Cay Resort", en: "Windsor Cay Resort"};
WindsorCayResort.slogan = {es: "", en: ""};
WindsorCayResort.ubicacion = "US 27 and Woodcrest Way, Clermont, FL 34714";
WindsorCayResort.numberOfRooms = "De 5 a 10 habitaciones";

WindsorCayResort.caracteristicas = {
    edificio: <>
        <dl>
            <dt>Área</dt>
            <dd>Orlando</dd>
            <dt>Dirección</dt>
            <dd>{WindsorCayResort.ubicacion}</dd>
            <dt>Por qué Orlando</dt>
            <dd>
                <ul>
                    <li>La ciudad más visitada de los Estados Unidos con un total de 80 millones de visitantes anuales
                    </li>
                    <li>- Temporada de turismo todo el año, con gran variedad de ofertas en línea de alojamientos para
                        vacacionar y sitios para hacer su reserva
                    </li>
                    <li>Fue nombrada una de las ciudades con crecimiento más rápido en los Estados Unidos por la Revista
                        Forbes
                    </li>
                    <li>- Industrias predominantes: Aeronáutica y Defensa, Turismo, Tecnología</li>
                    <li>- Segundo centro de convención más grande de los Estados Unidos</li>
                    <li>Aeropuerto internacional en expansión</li>
                    <li>- Principal puerta de entrada mundial, con alrededor de 135 destinos domésticos e
                        internacionales
                    </li>
                    <li>-Considerado el aeropuerto Número 1 en Florida, es el décimo aeropuerto más concurrido en los
                        Estados Unidos
                    </li>
                    <li>Hogar del famoso Walt Disney World Resort ® y de los parques temáticos, Universal Orlando ® ,
                        SeaWorld Orlando® , LEGOLAND Florida Resort® y muchos más!
                    </li>
                    <li>Entretenimiento y compras de primera clase</li>
                    <li>Clima favorable todo el año</li>
                    <li>Cercanía a las playas de la costa este y oeste</li>
                </ul>
            </dd>
        </dl>
    </>,
    residencias: <ul>
        <li>Techo de Tejas</li>
        <li>Piscina Privada Climatizada</li>
        <li>- 5, 6, 7 Habitaciones con Piscina de 12' x 24'</li>
        <li>- 8, 9 y 10 Habitaciones con Piscina de 12' x 26'</li>
        <li>- Townhomes con Piscina de 7.5' x 18'</li>
        <li>Entradas y Terrazas de Piscina con Adoquines de Ladrillo</li>
        <li>Electrodomésticos de Acero Inoxidable</li>
        <li>Closet de Almacenamiento para Propietarios</li>
        <li>Granito y Azulejos en Todas las Cocinas y Baños</li>
        <li>Persianas Incluidas</li>
        <li>Lanai Cubierto con Cerca de Seguridad para Niños</li>
        <li>Lavadora y Secadora</li>
    </ul>,
    amenidades: <>
        <ul className="list-style-none">
            <li><b>AMENIDADES DEL RESORT EN EL LUGAR</b></li>
            <li>Reconocimiento de Marca Internacional</li>
            <li>Comunidad Cerrada con Vigilancia 24 Horas</li>
            <li>A Minutos de Atracciones de Clase Mundial</li>
            <li>Planos Diseñados para Maximizar Alquileres/Retornos</li>

            <li><b>LA ASOCIACIÓN DE PROPIETARIOS INCLUYE:</b></li>
            <li>Mantenimiento Completo de Jardinería Incluyendo Riego de Césped</li>
            <li>Internet de Alta Velocidad y TV por Cable</li>
            <li>Recolección Diaria de Basura</li>
        </ul>
    </>
};
WindsorCayResort.introduccion = ["Bienvenido a Windsor Cay Resort, la comunidad de alquiler a corto plazo más nueva de Florida Central, donde los sueños vacacionales se hacen realidad.","     Este vibrante resort ofrece amplias viviendas unifamiliares diseñadas para la comodidad, el estilo y la diversión familiar. Los huéspedes pueden disfrutar de una amplia variedad de comodidades increíbles en The Reef Club, como una piscina de resorte de entrada cero, un río tranquilo, una zona de chapoteos infantiles, jacuzzi, minigolf de 9 hoyos, gimnasio y comida en el lugar en el Blue Lagoon Tavern and Grille. Ya sea que estés relajado junto a la piscina, jugando una partida de minigolf o disfrutando de la sala recreativa y nuestro Mercado Diverso, Windsor Cay Resort es la base perfecta para tu escapada a Florida."];


    export default WindsorCayResort;