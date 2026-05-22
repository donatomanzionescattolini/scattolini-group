import ProjectTemplate from "../ProjectTemplate.tsx";
import { useDesarrolloI18n } from "../../../objects/desarrollos/useDesarrolloI18n";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Downtown from "../../../objects/areas/Downtown.tsx";
import { useMemo } from "react";

export default function VistaHarborProject() {
    const { getLocalizedField, getLocalizedArray, lang } = useDesarrolloI18n("vista-harbor");

    const desarrollo = useMemo(() => {
        const project = new Desarrollo();
        project.nombre = "vista-harbor";
        project.area = Downtown;
        project.banner = true;
        project.numberOfImages = 13;
        project.titulo = getLocalizedField("titulo", "Vista Harbor Residences & Yacht Club");
        project.slogan = getLocalizedField("slogan", "Luxury living along the Miami River");
        project.introduccion = getLocalizedArray("introduccion", [
            "Continuing Henry Pino's vision of transformation along the Miami River, ALTA Development introduces Vista Harbor Residences & Yacht Club — a 12-story condominium community featuring 242 residences and 37,000 SF of exclusive amenities, fronting 650 feet along the picturesque Miami River.",
            "Spread across two separate towers with independent lobbies, the collection includes studios and one- to four-bedroom residences. This bold modern design offers unrivaled riverfront access, providing residents with stunning views and seamless connectivity to Biscayne Bay and the best of Miami."
        ]);
        project.caracteristicas = {
            edificio: (
                <ul className="list-disc ml-5">
                    <li><b>{getLocalizedField("caracteristicas.edificio.ubicacion", "Location")}:</b> {getLocalizedField("caracteristicas.edificio.ubicacionValor", "Along the Miami River, Miami, FL")}</li>
                    <li><b>{getLocalizedField("caracteristicas.edificio.desarrollador", "Developer")}:</b> {getLocalizedField("caracteristicas.edificio.desarrolladorValor", "ALTA Development")}</li>
                    <li><b>{getLocalizedField("caracteristicas.edificio.pisos", "Floors")}:</b> {getLocalizedField("caracteristicas.edificio.pisosValor", "12 stories — two separate towers (East & West)")}</li>
                    <li><b>{getLocalizedField("caracteristicas.edificio.unidades", "Residences")}:</b> {getLocalizedField("caracteristicas.edificio.unidadesValor", "242 residences")}</li>
                    <li><b>{getLocalizedField("caracteristicas.edificio.amenidades", "Amenities")}:</b> {getLocalizedField("caracteristicas.edificio.amenidadesValor", "37,000 SF of exclusive amenities")}</li>
                    <li><b>{getLocalizedField("caracteristicas.edificio.frente", "River Frontage")}:</b> {getLocalizedField("caracteristicas.edificio.frenteValor", "650 feet along the Miami River")}</li>
                    <li>{getLocalizedField("caracteristicas.edificio.alquiler", "West Tower: minimum 30-day short-term rental permitted, turnkey investment opportunity")}</li>
                    <li>{getLocalizedField("caracteristicas.edificio.hospital", "Minutes from University of Miami Health campus and Jackson Memorial Hospital")}</li>
                </ul>
            ),
            residencias: (
                <ul className="list-disc ml-5">
                    <li><b>{getLocalizedField("caracteristicas.residencias.tipos", "Unit Types")}</b></li>
                    <li>{getLocalizedField("caracteristicas.residencias.tipos1", "Studios, 1-, 2-, 3-, and 4-bedroom residences")}</li>
                    <li>{getLocalizedField("caracteristicas.residencias.rangoPrecio", "Starting from $648,900")}</li>
                    <li>{getLocalizedField("caracteristicas.residencias.vistas", "Stunning Miami River and Biscayne Bay views")}</li>
                    <li>{getLocalizedField("caracteristicas.residencias.pisoACielo", "Floor-to-ceiling windows in all residences")}</li>
                    <li>{getLocalizedField("caracteristicas.residencias.cocina", "Gourmet kitchens with high-end finishes")}</li>
                    <li>{getLocalizedField("caracteristicas.residencias.paquetes", "Furniture package options available (Adriana Hoyos design) — turnkey rental-ready")}</li>
                    <li>{getLocalizedField("caracteristicas.residencias.penthouse", "Penthouse collection also available (PH units)")}</li>
                </ul>
            ),
            amenidades: (
                <ul className="list-disc ml-5">
                    <li>{getLocalizedField("caracteristicas.amenidades.muelle", "Private docks — cruise the city directly from your home (Yacht Club)")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.piscina", "Rooftop pool with stunning river and city views")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.gym", "State-of-the-art fitness center / gym")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.pickleball", "Pickleball courts")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.business", "Business center")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.lobby", "Signature lobbies (independent for each tower)")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.alquilerServicio", "On-site short-term rental support services")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.acceso", "Quick access to Downtown Miami, Midtown, Edgewater, Miami Beach, Design District, Miami International Airport, Port of Miami, and Brightline Train Station")}</li>
                    <li>{getLocalizedField("caracteristicas.amenidades.riverLanding", "5-minute drive to River Landing mall — Publix, 9 restaurants, 21 retailers")}</li>
                </ul>
            )
        };
        return project;
    }, [getLocalizedField, getLocalizedArray, lang]);

    return (
        <ProjectTemplate desarrollo={desarrollo}></ProjectTemplate>
    );
}
