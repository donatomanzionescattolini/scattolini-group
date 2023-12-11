import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";

export default function  FourteenRiverDistrict() {
    const FourteenRiverDistrictObject = new Desarrollo();

    FourteenRiverDistrictObject.nombre = "14-river-district";    FourteenRiverDistrictObject.banner=true;     FourteenRiverDistrictObject.area = Brickell();

    FourteenRiverDistrictObject.caracteristicas = {
        edificio: (
            <ul>
                <li>Piscina estilo resort y cabañas</li>
                <li>Amplios centros de coworking</li>
                <li>Canchas de pickleball cubiertas</li>
                <li>Gimnasio de última generación</li>
                <li>
                    Amplio salón y área multimedia para reunirse con amigos y
                    relajarse
                </li>
                <li>
                    A pocos pasos del centro comercial River Landing y restaurantes en
                    el río Miami
                </li>
                <li>Una plaza de aparcamiento incluida</li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>Cocinas gourmet con gabinetes personalizados</li>
                <li>
                    Electrodomésticos de acero inoxidable, incluyendo
                    refrigerador/congelador y lavaplatos, estufa y microondas
                </li>
                <li>Armarios totalmente empotrados</li>
                <li>
                    Duchas de lluvia en baños primarios y tocadores personalizados
                </li>
                <li>
                    Paquetes de iluminación contemporáneos, que incluyen iluminación
                    empotrada, atenuadores y control de iluminación
                </li>
                <li>Techos altos de 8.8'</li>
                <li>Lavadora y secadora apilables</li>
                <li>
                    Precableado para comunicación de alta velocidad y conexión de
                    datos
                </li>
                <li>Acceso inteligente mediante entrada sin llave</li>
                <li>Paquete de muebles disponible</li>
            </ul>
        ),
        amenidades: (
            <ul>
                <li>
                    Los espacios comunes de River District 14 están bellamente
                    diseñados con eficiencia y facilidad de acceso. Con su diversa
                    selección de comodidades, River District 14 ofrece oportunidades
                    para socializar, hacer ejercicio, trabajar en equipo o simplemente
                    relajarse.{" "}
                </li>
                <li>
                    Piscina y Cabañas: En un día caluroso, disfrute del patio al aire
                    libre donde puede nadar o cocinar a la parrilla.
                </li>
                <li>
                    Centros de Coworking: Espacios de oficina flexibles disponibles
                    para residentes e invitados.
                </li>
                <li>
                    Canchas de pickleball: Dos canchas cubiertas de pickleball
                    disponibles para residentes e invitados.
                </li>
                <li>Comodidades</li>
                <li>Gimnasio de última generación</li>
                <li>
                    Manténgase en forma y activo con nuestro gimnasio completamente
                    equipado y canchas de pickleball.
                </li>
                <li>
                    Amplio salón y área multimedia para reunirse con amigos y
                    relajarse.
                </li>
                <li>
                    Tiendas & Restaurantes: A poca distancia a pie del centro
                    comercial River Landing y de los restaurantes en el río Miami.
                </li>
                <li>
                    Estacionamiento: Una plaza de parking incluida en la compra de tu
                    residencia.
                </li>
            </ul>
        ),
    };
    FourteenRiverDistrictObject.introduccion = [
        "Ubicado en el borde del segundo distrito de salud pública más grande del país y a las puertas del río Miami y celebrando las tiendas, restaurantes y entretenimiento del centro de Miami, River District 14 establece un estándar más alto para lo que debería ser un vecindario.",
        "A pocos pasos de la orilla del río y a minutos de la Bahía de Biscayne en barco, río El Distrito 14 ofrece un estilo de vida completo con todas las comodidades necesarias en las cercanías, incluidos restaurantes, tiendas, parques y taxis acuáticos.",
    ];
    FourteenRiverDistrictObject.titulo = "14 River District";
    FourteenRiverDistrictObject.subtitulo = "";
    FourteenRiverDistrictObject.numberOfImages = 27;
    FourteenRiverDistrictObject.direccion = "1420 NW 14th Ave, Miami, FL 33125, Estados Unidos"
    return FourteenRiverDistrictObject;
}