import React from "react";

import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Downtown from "../../areas/Downtown.tsx";

export default function CasaBella() {
    const CasaBellaObject: Desarrollo = new Desarrollo();

    CasaBellaObject.banner = true;
    CasaBellaObject.area = Downtown();

    CasaBellaObject.nombre = "casa-bella";
    CasaBellaObject.caracteristicas = {
        edificio: (
            <ul>
                <li>Número de pisos:</li>
                <li>Número de unidades: 306</li>
                <li>Ubicación: 1444 Biscayne Blvd, Miami, FL 33132 ·</li>
                <li>Habitaciones por unidad: 1-5 dormitorios</li>
            </ul>
        ),
        residencias: (
            <ul>
                <li>
                    Todas las residencias cuentan con dos ascensores privados y
                    vestíbulo privado
                </li>
                <li>
                    Los ascensores están equipados con control de acceso biométrico
                    para mejorar la seguridad
                </li>
                <li>
                    La mayoría de las unidades disfrutan de amplios diseños de paso
                    con techos altos de 10 pies y vistas impresionantes de la Bahía de
                    Biscayne, el horizonte del centro de Miami y las impresionantes
                    puestas de sol desde el oeste
                </li>
                <li>
                    Elegantes armarios italianos en cocinas y baños by ITALKRAFT
                </li>
                <li>
                    Una exquisita selección de acabados de gabinete y encimeras, todos
                    seleccionados individualmente por Piero Lissoni
                </li>
                <li>
                    El paquete de electrodomésticos de vidrio negro de primera línea
                    incluye refrigerador / congelador Sub-Zero integrado de 36
                    pulgadas con paneles, microondas de cajón de transición Wolf,
                    lavavajillas silencioso, horno de convección incorporado Wolf,
                    encimera de vidrio cerámico y refrigeración de vino
                </li>
                <li>
                    Fregadero de acero inoxidable de gran tamaño de radio cero con
                    cajón de grifo extraíble de diseño europeo de una sola palanca
                </li>
                <li>
                    Baños principales diseñados por Piero Lissoni con gabinetes y
                    diseño italianos
                </li>
                <li>Espejos retroiluminados de tocador</li>
                <li>
                    Amplias bañeras de hidromasaje y duchas acristaladas sin marco en
                    los baños principales
                </li>
            </ul>
        ),
        amenidades: (
            <ul>
                <li>Salón para adultos</li>
                <li>Sala de juegos</li>
                <li>
                    Sala de juegos para niños, con juegos educativos y pizarra
                    inteligente
                </li>
                <li>Amplia sala de fiestas con vistas a la bahía de Biscayne</li>
                <li>cine</li>
                <li>Sala de vinos</li>
                <li>Colección de arte de calidad museística</li>
                <li>
                    Centro de negocios totalmente equipado, incluyendo sala de
                    conferencias
                </li>
                <li>Espacio de coworking con un cómodo salón</li>
                <li>Spa para mascotas</li>
                <li>360 Wellness Center incluye:</li>
                <li>Gimnasio de primer nivel con vistas a la bahía de Biscayne</li>
                <li>Sala privada de yoga</li>
                <li>Sala de spinning</li>
                <li>
                    Spa de clase mundial, que ofrece un conjunto de servicios a pedido
                </li>
                <li>Salón de belleza con estaciones mani-pedi</li>
            </ul>
        )
    };
    CasaBellaObject.introduccion = [
        "Vuelve a casa con la sofisticación y el lujo italianos ilimitados. Disfruta de impresionantes vistas dondequiera que mires. Rodéese de interiores elevados e inundados de luz, jardines llenos de jardines y comodidades abundantes e inigualables, que incluyen un salón junto a la piscina con una cafetería mediterránea y cócteles artesanales.",
        "CasaBellaObject Residences by B&B Italia ha colaborado con los artistas italianos más célebres para curar su hogar con obras maestras selectas de las colecciones de B&B Italia.",
    ];
    CasaBellaObject.titulo = "Casa Bella Residences";
    CasaBellaObject.direccion = "";
    CasaBellaObject.slogan = "Bienvenido a la cima de la sofisticada vida italiana";
    CasaBellaObject.numberOfImages = 16;

    return CasaBellaObject;
}