import { Area } from "../../models/areas/Area";
import React from "react";

export default function PompanoBeach() {
    const PompanoBeachObject = new Area("pompano-beach");
    PompanoBeachObject.titulo = {
        es: "Pompano Beach",
        en: "Pompano Beach"
    };
    PompanoBeachObject.slogan = {
        es: "La bienvenida más cálida de Florida.",
        en: "Florida's Warmest Welcome."
    };
    PompanoBeachObject.descripcion = {
        es: [
            "Pompano Beach, una joya costera en el sur de Florida, ofrece el equilibrio perfecto entre estilo de vida relajado y oportunidades de inversión. Con sus impresionantes playas, excelente clima durante todo el año y un mercado inmobiliario en constante crecimiento, esta ciudad atrae tanto a quienes buscan establecerse como a inversionistas visionarios. Pompano combina encanto local con proyectos de desarrollo moderno, creando un ambiente ideal para vivir, trabajar y construir patrimonio. Ya sea para residencia permanente, casa vacacional o inversión rentable, Pompano Beach es una apuesta segura con vista al mar."
        ],
        en: [
            "Pompano Beach, a coastal gem in South Florida, offers the perfect balance between a relaxed lifestyle and investment opportunities. With its stunning beaches, excellent year-round weather, and a constantly growing real estate market, this city attracts both those looking to settle down and visionary investors. Pompano combines local charm with modern development projects, creating an ideal environment to live, work, and build wealth. Whether for a permanent residence, a vacation home, or a profitable investment, Pompano Beach is a safe bet with an ocean view."
        ]
    };
    PompanoBeachObject.numberOfImages = 15;

    return PompanoBeachObject;
}

