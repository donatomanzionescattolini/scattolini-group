import React from "react";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import BayHarbor from "../../areas/BayHarbor.tsx";
import { getDesarrolloI18n } from "../useDesarrolloI18n";

export default function LaBaia(lang: "en" | "es" = "es") {
    const { getLocalizedField, getLocalizedArray } = getDesarrolloI18n("labaia", lang);
    const LaBaiaObject = new Desarrollo();
    LaBaiaObject.nombre = 'la-baia';
    LaBaiaObject.titulo = getLocalizedField("titulo", "La Baia");
    LaBaiaObject.subtitulo = getLocalizedField("subtitulo", "Elegancia frente a la Bahía");
    LaBaiaObject.slogan = getLocalizedField("subtitulo", "Elegancia frente a la Bahía");
    LaBaiaObject.introduccion = getLocalizedArray("introduccion", [
        "La Baia ofrece 57 residencias de lujo en las Islas de Bay Harbor con vistas espectaculares de la Bahía de Biscayne y el Océano Atlántico.",
        "Cada residencia cuenta con techos altos de 9 a 10 pies, terrazas privadas, pisos de madera importada y acabados de mármol.",
        "Disfrute de un estilo de vida exclusivo con amenities de lujo y una ubicación privilegiada."
    ]);

    // Set detailed features for display
    LaBaiaObject.residencias = [
        lang === "es" ? "Techos de 9' en residencias" : "9' ceilings in residences",
        lang === "es" ? "Techos de 10' en Penthouses Superiores" : "10' ceilings in Upper Penthouses",
        lang === "es" ? "Terrazas privadas con vistas despejadas de la Bahía de Biscayne, el Océano Atlántico, Bal Harbour, Miami Beach y el centro de Miami" : "Private terraces with unobstructed views of Biscayne Bay, Atlantic Ocean, Bal Harbour, Miami Beach and downtown Miami",
        lang === "es" ? "Vidrio corredizo de piso a techo resistente a impactos Puertas y ventanas" : "Impact-resistant floor-to-ceiling sliding glass doors and windows",
        lang === "es" ? "Todas las residencias se entregan completamente terminadas" : "All residences delivered fully finished",
        lang === "es" ? "Pisos de madera de tablones anchos importados europeos y piedra de mármol en baños" : "European imported wide-plank hardwood floors and marble stone in bathrooms",
        lang === "es" ? "Accesorios y acabados bien equipados seleccionados por Durukan Design, con sede en Nueva York" : "Well-appointed fixtures and finishes selected by New York-based Durukan Design",
        lang === "es" ? "Estudio/oficina en casa con un baño completo para descansar y un cómodo espacio para \"trabajar desde casa\"" : "Home studio/office with full bathroom for rest and comfortable 'work from home' space",
        lang === "es" ? "Lavandería en la residencia con juego de lavadora y secadora Miele® de tamaño completo y de bajo consumo" : "In-residence laundry with full-size, energy-efficient Miele® washer and dryer set",
        lang === "es" ? "Espacio de doble armario de tamaño generoso, que incluye vestidores en las habitaciones principales" : "Generously sized dual closet space including walk-in closets in primary bedrooms",
        lang === "es" ? "Baño completo adicional o tocador equipado para acomodar a los huéspedes" : "Additional full bathroom or powder room equipped to accommodate guests",
        lang === "es" ? "Espacios de almacenamiento privados adicionales incluidos con cada residencia" : "Additional private storage spaces included with each residence",
        lang === "es" ? "Gabinetes europeos personalizados y despensa de cocina • Paquete de electrodomésticos Miele® que incluye: placa de cocción eléctrica, horno de pared, lavavajillas, refrigerador y microondas" : "Custom European cabinetry and kitchen pantry • Miele® appliance package including: electric cooktop, wall oven, dishwasher, refrigerator and microwave",
        lang === "es" ? "Encimeras de piedra de cuarzo en cocina" : "Quartz stone countertops in kitchen",
        lang === "es" ? "Grifería Hansgrohe® de alta gama en la cocina" : "High-end Hansgrohe® faucets in kitchen",
        lang === "es" ? "Vinotecas Miele® exclusivamente en áticos" : "Miele® wine cellars exclusively in penthouses",
        lang === "es" ? "Gabinetes europeos personalizados en el baño principal" : "Custom European cabinetry in primary bathroom",
        lang === "es" ? "Tocador con lavabos dobles" : "Vanity with dual sinks",
        lang === "es" ? "Accesorios y accesorios de baño de primera calidad" : "Premium bathroom fixtures and accessories",
        lang === "es" ? "Suelo de piedra de mármol natural en baño principal" : "Natural marble stone flooring in primary bathroom",
        lang === "es" ? "Ducha con mampara de vidrio con dos cabezales de ducha tipo lluvia" : "Shower with glass enclosure with two rainfall shower heads"
    ];

    LaBaiaObject.amenidades = [
        lang === "es" ? "20,000 pies cuadrados de comodidades estilo centro turístico; incluyendo más de 8,500 pies cuadrados de exuberantes jardines tropicales y espacios verdes abiertos en todas partes" : "20,000 square feet of resort-style amenities; including over 8,500 square feet of lush tropical gardens and open green spaces throughout",
        lang === "es" ? "Terraza de servicios en la azotea de 10,000 pies cuadrados con área dedicada para niños y área para adultos" : "10,000 square foot rooftop amenity deck with dedicated children's area and adult area",
        lang === "es" ? "Piscina relajante con solárium y tumbonas sumergidas y poco profundas" : "Relaxing pool with sun deck and shallow submerged lounge chairs",
        lang === "es" ? "Amplia terraza junto a la piscina con tumbonas y rincones sombreados" : "Expansive pool deck with lounge chairs and shaded nooks",
        lang === "es" ? "Spa tropical climatizado para adultos en la azotea con vistas a la Bahía de Biscayne y al Océano Atlántico" : "Heated adult tropical spa on rooftop with views of Biscayne Bay and Atlantic Ocean",
        lang === "es" ? "Salas de estar" : "Lounge areas",
        lang === "es" ? "Cocina de verano y comedor al aire libre en la azotea con espectaculares vistas a la bahía" : "Rooftop summer kitchen and outdoor dining with spectacular bay views",
        lang === "es" ? "Rooftop Sunset Lounge con acogedores asientos, hoguera e impresionantes vistas de la puesta de sol" : "Rooftop Sunset Lounge with cozy seating, fire pit and stunning sunset views",
        lang === "es" ? "Rincones privados para sentarse y nidos colgantes para una relajación aislada" : "Private seating nooks and hanging pod nests for secluded relaxation",
        lang === "es" ? "Oficinas comerciales privadas" : "Private business offices",
        lang === "es" ? "Sala Club para Residentes con vista al agua con Salón, sala de cine y bar privado para entretener" : "Residents' Waterfront Club Room with Lounge, cinema room and private bar for entertaining",
        lang === "es" ? "Gimnasio de última generación" : "State-of-the-art fitness center",
        lang === "es" ? "Embarcaderos privados exclusivos para residentes" : "Private boat slips exclusive to residents",
        lang === "es" ? "Acceso directo al mar para paseos en bote y actividades acuáticas a través de Haulover Inlet" : "Direct ocean access for boating and water activities through Haulover Inlet",
        lang === "es" ? "Muelle de lanzamiento de deportes acuáticos con kayaks, inflables y tablas de remo proporcionadas a los residentes" : "Water sports launch dock with kayaks, inflatables and paddle boards provided to residents",
        lang === "es" ? "Terraza Sunrise con asientos en el muelle con vistas a la Bahía de Biscayne" : "Sunrise Deck with dock seating overlooking Biscayne Bay",
        lang === "es" ? "Césped junto al muelle con asientos frente al mar, tumbonas con enrejados florales y hamacas colgantes que ofrecen vistas a la Bahía de Biscayne" : "Dockside lawn with waterfront seating, lounge chairs with floral trellises and hanging hammocks offering Biscayne Bay views",
        lang === "es" ? "Césped dedicado al juego de los niños" : "Dedicated lawn for children's play",
        lang === "es" ? "Áreas de Study Pod ideales para tareas o tutorías" : "Study Pod areas ideal for homework or tutoring"
    ];
    
    LaBaiaObject.caracteristicas = {
        edificio: <dl>
            <dt>{lang === "es" ? "Ubicación" : "Location"}</dt>
            <dd>9481 East Bay Harbor Dr, {lang === "es" ? "Islas de Bay Harbor" : "Bay Harbor Islands"}, FL 33154, {lang === "es" ? "Estados Unidos" : "United States"}
            </dd>
            <dt>{lang === "es" ? "Número de Pisos" : "Number of Floors"}</dt>
            <dd>8</dd>
            <dt>{lang === "es" ? "Número de Residencias" : "Number of Residences"}</dt>
            <dd>57</dd>
        </dl>,
        residencias: LaBaiaObject.displayCaracteristicasResidencias(),
        amenidades: LaBaiaObject.displayAmenidades()
    };
    
    LaBaiaObject.numberOfImages = 66;
    LaBaiaObject.banner = true;
    LaBaiaObject.area = BayHarbor();
    return LaBaiaObject;
}