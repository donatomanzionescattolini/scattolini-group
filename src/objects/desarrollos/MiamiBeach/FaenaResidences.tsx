import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

export default function FaenaResidences(lang: "en" | "es" = "es") {
    const FaenaResidencesObject = new Desarrollo(MiamiBeach());
    FaenaResidencesObject.nombre = "faena-residences";
    FaenaResidencesObject.titulo = {
        es: "Faena Residences Miami Beach",
        en: "Faena Residences Miami Beach"
    };
    FaenaResidencesObject.slogan = {
        es: "",
        en: ""
    };
    FaenaResidencesObject.introduccion = [lang === "en"
        ? "Faena House Miami Beach features 47 supreme luxury units in an extraordinary 18-story condominium. Alan Faena's vision and Foster+Partners' architectural design conceived a new and transformative neighborhood in perfect harmony with its oceanfront setting; innovative architectural advances allow panoramic views from ocean to bay. Located on the most extensive white sand beach in all of Miami Beach, Faena is just a ten-minute drive from Bal Harbour Shops, Miami Design District, and South Beach."
        : "Faena House Miami Beach cuenta con 47 unidades de lujo supremo en un extraordinario condominio de 18 pisos. La visión de Alan Faena y el diseño arquitectónico de Foster+Partners concibieron un nuevo y transformador vecindario en perfecta armonía con su entorno frente al mar; los innovadores avances arquitectónicos permiten vistas panorámicas desde el océano hasta la bahía. Ubicado en la franja de arena blanca más extensa de todo Miami Beach, Faena se encuentra a solo diez minutos en coche de Bal Harbour Shops, el Distrito de Diseño de Miami y South Beach.\n\n"];
    FaenaResidencesObject.banner = true;
    FaenaResidencesObject.numberOfImages = 22;


    FaenaResidencesObject.direccion = "3315 Collins Avenue, Miami Beach, FL 33140";
    FaenaResidencesObject.numberOfUnits = 47;
    FaenaResidencesObject.numberOfFloors = 16;
    FaenaResidencesObject.typeOfUnits = lang === "en" ? "Condominiums" : "Condominios";
    FaenaResidencesObject.estimatedCompletionYear = 2016;
    FaenaResidencesObject.numberOfRooms = lang === "en" ? "1, 2, 3, 4, and 5 bedrooms" : "1, 2, 3, 4 y 5 dormitorios";
    FaenaResidencesObject.caracteristicas = {
        edificio: <>
            <dl>
                <dt>{lang === "en" ? "Address" : "Dirección"}</dt>
                <dd>{FaenaResidencesObject.direccion}</dd>
                <dt>{lang === "en" ? "Construction Year or Completion" : "Año De Construcción O Finalización"}</dt>
                <dd>{FaenaResidencesObject.estimatedCompletionYear}</dd>
                <dt>{lang === "en" ? "Number of Floors" : "Número De Pisos"}</dt>
                <dd>{FaenaResidencesObject.numberOfFloors}</dd>
                <dt>{lang === "en" ? "Number of Units" : "Número de Unidades"}</dt>
                <dd>{FaenaResidencesObject.numberOfUnits}</dd>
                <dt>{lang === "en" ? "Type of Units" : "Tipo De Unidades"}</dt>
                <dd>{FaenaResidencesObject.typeOfUnits}</dd>
                <dt>{lang === "en" ? "Number of Bedrooms" : "Número de cuartos"}</dt>
                <dd>{FaenaResidencesObject.numberOfRooms as string}</dd>

            </dl>
        </>,
        amenidades: lang === "en" ? <><ul>
            <li>Spectacular triple-height lobby with tranquil pools flowing through the area.</li>
            <li>High-speed elevators</li>
            <li>Porte-cochère entrance</li>
            <li>24-hour doorman, valet parking, security, and concierge services.</li>
            <li>Spa with separate sauna and steam room for men and women.</li>
            <li>Fitness center with direct ocean views.</li>
            <li>Beach Club with cabana service. Landscaped pool, children's pool, and playroom</li>


        </ul></> : <><ul>
            <li>Espectacular vestíbulo de triple altura, con tranquilas piscinas que atraviesan el área.</li>
            <li>Ascensores de alta velocidad</li>
            <li>Entrada de porte-coch</li>
            <li>Servicios de portero, valet parking, seguridad y conserjería las 24 horas.</li>
            <li>Spa con sauna y baño de vapor separados para hombres y mujeres.</li>
            <li>Gimnasio con vistas directas al mar.</li>
            <li>Club de Playa con servicio de cabañas Piscina ajardinada, piscina infantil y sala de juegos</li>


        </ul></>,
        residencias: lang === "en" ? <><ul>
            <li>Ceiling heights of 10'-6", 11' on floors 14 and 15, 13' in penthouse</li>
            <li>Master bathrooms with vanities featuring double sinks and separate bathtubs.</li>
            <li>High-gloss white lacquer kitchen cabinets</li>
            <li>High-gloss white lacquered kitchen cabinets</li>
            <li>Miele kitchen appliances</li>
            <li>White marble bathroom walls.</li>
            <li>Glass rain showers with polished chrome finishes</li>

        </ul></> : <><ul>
            <li>Alturas de techo de 10'-6", 11' en los pisos 14 y 15, 13' en el penthouse</li>
            <li>Baños principales con tocadores con lavabos dobles y bañeras separadas.</li>
            <li>Gabinetes con laca blanca brillante en cocina</li>
            <li>Gabinetes de cocina lacados en blanco brillante</li>
            <li>Electrodomésticos de cocina Miele</li>
            <li>Paredes de mármol blanco en el baño.</li>
            <li>Duchas de lluvia de cristal con acabados en cromo pulido</li>

        </ul></>
    };

    return FaenaResidencesObject;
}