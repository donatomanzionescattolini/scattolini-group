import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Orlando from "../../areas/Orlando.tsx";
import {getDesarrolloI18n} from "../useDesarrolloI18n.ts";

export default function Doppio(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("doppio", lang);
    const project = new Desarrollo(Orlando());

    project.nombre = "doppio";
    project.area = Orlando();
    project.banner = true;
    project.numberOfImages = 116;
    project.titulo = getLocalizedField("titulo", "Doppio Westside");
    project.slogan = getLocalizedField("slogan", "The future of vacation homes");
    project.introduccion = getLocalizedArray("introduccion", [
        "Doppio Westside redefines vacation homes by combining high-end hospitality, technology, and professional management in a turnkey model built for both enjoyment and income.",
        "Located in Kissimmee, just 10 minutes from Disney, the project blends premium residences, hotel-style services, and strong rental positioning near the area's most visited attractions."
    ]);
    project.caracteristicas = {
        edificio: (
            <ul className="list-disc ml-5">
                <li>{getLocalizedField("caracteristicas.edificio.concepto", "A new category that blends hotel comfort with the freedom of a private home")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.construccion", "Premium block construction designed for durability and long-term value")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.ubicacion", "Prime location in Kissimmee, minutes from Disney, Universal, outlets, golf, and dining")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.eficiencia", "High-end energy-efficient design focused on comfort and lower utility costs")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.ventanas", "Luxury windows with insulation, noise reduction, and contemporary styling")}</li>
            </ul>
        ),
        residencias: (
            <ul className="list-disc ml-5">
                <li><b>{getLocalizedField("caracteristicas.residencias.titulo", "Residential formats")}</b></li>
                <li>{getLocalizedField("caracteristicas.residencias.casas", "Furnished 2,133 SQFT homes with a private heated pool")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.suites", "4 suites and 5 bathrooms in the townhome collection")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.cocinaGourmet", "Gourmet kitchen and international-standard finishes")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.apartamentos", "980 SQFT apartments designed for practical resort-style stays")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.dormitorios", "2-bedroom apartment layouts")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.cocinaEquipada", "Fully equipped kitchens")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.diseno", "Contemporary design with Italian-inspired cabinetry")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.isla", "Quartz waterfall kitchen island for hosting and family gatherings")}</li>
            </ul>
        ),
        amenidades: (
            <ul className="list-disc ml-5">
                <li>{getLocalizedField("caracteristicas.amenidades.piscina", "Lagoon-style resort pool")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.fitness", "Fitness center and kids' area")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.concierge", "Concierge, restaurant, and convention center")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.limpieza", "On-demand cleaning")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.seguridad", "Transfer and security services")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.equipaje", "Luggage storage")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.servicios", "Pay-per-use services such as chef, babysitter, and laundry")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.ingreso", "Turnkey operations with global marketing support and transparent monthly payouts")}</li>
            </ul>
        )
    };

    return project;
}
