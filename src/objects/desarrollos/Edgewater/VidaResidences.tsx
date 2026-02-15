import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Edgewater from "../../areas/Edgewater.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function VidaResidences(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("vida", lang);
    const Vida = new Desarrollo();
    Vida.nombre = getLocalizedField("nombre", "vida");
    Vida.direccion = getLocalizedField("direccion", "3050 Biscayne Blvd, Miami, FL 33137");
    Vida.caracteristicas = {
        edificio: (
            <>
                <ul>
                    <li>Pisos: 9</li>
                    <li>Residencias: 121</li>
                    <li>Ubicación: 3050 Biscayne Blvd, Miami, FL 33137</li>
                    <li>Más de 22,000 pies cuadrados de comodidades</li>
                    <li>
                        Amplia piscina de tranquilidad en la azotea con jacuzzi, cabañas
                        y estaciones de parrilla
                    </li>
                    <li>Restaurante/bar privado en la azotea</li>
                    <li>Impresionantes vistas de la Bahía de Biscayne</li>
                    <li>Gimnasio de última generación</li>
                    <li>Conveniente barra de jugos y café</li>
                    <li>Centro de coworking HiTech</li>
                    <li>Acceso controlado a la propiedad</li>
                    <li>
                        Servicios de conserjería las 24 horas del día, los 7 días de la
                        semana
                    </li>
                </ul>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li>
                        Estudio completamente terminado y amueblado, residencias de 1,
                        2, 3 y 4 habitaciones
                    </li>
                    <li>Techos de 9 pies de altura</li>
                    <li>Balcón con cada residencia</li>
                    <li>Pavimentos terminados</li>
                    <li>Cocinas gourmet</li>
                    <li>Electrodomésticos de estilo europeo</li>
                    <li>Duchas de lluvia en baños primarios</li>
                    <li>Tocadores personalizados</li>
                    <li>Lavadora y secadora en residencias</li>
                    <li>Armarios empotrados</li>
                    <li>Paquetes de iluminación contemporánea</li>
                    <li>Sistemas de hogar inteligente</li>
                    <li>Sistema de entrada sin llave</li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    <li>Espacio de Trabajo</li>
                    <li>Spa</li>
                    <li>Rooftop</li>
                    <li>Restaurantes</li>
                    <li>Lounge</li>
                    <li>Áreas al aire libre</li>

                    <li>Gimnasio</li>
                </ul>
            </>
        ),
    };
    Vida.introduccion = getLocalizedArray("introduccion", [
        getLocalizedField("introduccion.0", "Vida = Life"),
    ]);
    Vida.titulo = getLocalizedField("titulo", "Vida Residences");
    Vida.slogan = getLocalizedField("slogan", "Un tramo más allá de lo ordinario...");
    Vida.numberOfImages = parseInt(getLocalizedField("numberOfImages", "24"), 10) || 24;
    Vida.banner = getLocalizedField("banner", "true") === "true";
    Vida.area = Edgewater();

    return Vida;
}