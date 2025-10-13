import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import CoralGables from "../../areas/CoralGables.tsx";

export default function TheAvenue() {
    const TheAvenueObject = new Desarrollo();
    TheAvenueObject.nombre = "the-avenue";
    TheAvenueObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>Ubicación</dt>
                    <dd>
                        <address>
                            1321 San Lorenzo Avenue, Coral Gables, FL 33146, Estados
                            Unidos
                        </address>
                    </dd>
                    <dt>Número de Pisos</dt>
                    <dd>Edificio boutique de lujo de 8 pisos</dd>
                    <dt>Unidades</dt>
                    <dd>
                        54 modernas habitaciones de hotel y residencias de 1 y 2
                        dormitorios
                    </dd>
                    <dt>Fecha Estimada de Finalización</dt>
                    <dd>2024</dd>
                </dl>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>
                        Residencias totalmente amuebladas listas para ser ocupadas de
                        inmediato
                    </li>
                    <li>
                        Se entrega completamente terminado, comisariado por Adriana
                        Hoyos Design Studio
                    </li>
                    <li>Diseños bien pensados y lujosos con techos de 9 a 11 pies</li>
                    <li>Residencias penthouse disponibles con techos abovedados</li>
                    <li>Los dormitorios principales cuentan con baños en suite</li>
                    <li>Terrazas privadas en todas las residencias</li>
                    <li>
                        Armarios seguros para el propietario para artículos personales
                    </li>
                    <li>
                        Listo para el hogar inteligente, cableado para HDTV, líneas de
                        datos e Internet de fibra
                    </li>
                    <li>
                        Sistema de aire acondicionado y calefacción central de bajo
                        consumo
                    </li>
                    <li>
                        Cocinas europeas con encimeras de piedra, salpicadero, Sub-Zero
                        refrigeradores y estufas Wolf; y gabinetes italianos importados
                        con herrajes de primera calidad
                    </li>
                    <li>Grifería y accesorios de baño premium de estilo europeo</li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    <li>
                        Recepción 24 horas, servicio de aparcacoches, conserjería y
                        seguridad
                    </li>
                    <li>
                        Sala de paquetes para recibir las entregas del propietario
                    </li>
                    <li>
                        Oficina de gestión de alquileres a corto plazo en el lugar
                    </li>
                    <li>
                        WiFi de fibra óptica ultrarrápida en todas las zonas comunes
                    </li>
                    <li>
                        Terraza de piscina ajardinada estilo centro turístico en el
                        nivel 9
                    </li>
                    <li>Tumbonas y tumbonas junto a la piscina</li>
                    <li>Jardín de hamacas</li>
                    <li>Ducha de lluvia al aire libre</li>
                    <li>Cocinas de verano y comedor familiar</li>
                    <li>Vistas despejadas de 360 grados de Coral Gables</li>
                </ul>
            </>
        ),
    };
    TheAvenueObject.introduccion = [
        "Creado por el estudio de arquitectura líder Bermello Ajamil & Partners, The Avenue cobra vida con un diseño inspirado en el clasicismo mediterráneo. Descubra un edificio esculpido y atemporal que encajará perfectamente en The City Beautiful mientras se destaca como una dirección emblemática",

        "Cada residencia se completa con acabados de buen gusto y muebles y decoración seleccionados por expertos de Adriana Hoyos Design Studio. Después de redefinir el lujo tropical durante casi tres décadas, el equipo ahora dejará su huella en la mejor dirección de Coral Gables",

        'Todos los partidos. Todos los acabados. Cada mueble. The Avenue es lo que significa estar verdaderamente "listo para mudarse".',
    ];
    TheAvenueObject.titulo = "The Avenue";
    TheAvenueObject.slogan = "La esencia de la avenida Coral Gables";
    TheAvenueObject.numberOfImages = 27;
    TheAvenueObject.banner = true;
    TheAvenueObject.area = CoralGables();

    return TheAvenueObject;
}