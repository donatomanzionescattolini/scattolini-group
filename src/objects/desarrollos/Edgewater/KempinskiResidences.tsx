import {getDesarrolloI18n} from "../useDesarrolloI18n";
import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Edgewater from "../../areas/Edgewater.tsx";

export default function KempinskiResidences(lang: "en" | "es" = "es") {
    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("kempinski-residences", lang);
    const project = new Desarrollo();

    project.nombre = "kempinski-residences";
    project.area = Edgewater();
    project.banner = false;
    project.numberOfImages = 17;
    project.direccion = getLocalizedField("direccion", "3801 & 3883 Biscayne Blvd, Miami, FL 33137");
    project.titulo = getLocalizedField("titulo", "Kempinski Residences Miami Design District");
    project.slogan = getLocalizedField("slogan", "European refinement redefined in Miami");
    project.introduccion = getLocalizedArray("introduccion", [
        "Kempinski Residences Miami Design District introduces a landmark of European luxury to one of Miami's most prestigious addresses. Located at 3801 & 3883 Biscayne Blvd — at the gateway to the Miami Design District™ — this dual-tower development brings the legendary Kempinski hospitality brand to life through two 23-story residential towers, united by an exclusive amenity bridge on the fourth floor.",
        "With 64 residences per tower, 22 private guest suites, 6 townhomes, and approximately 70,000 square feet of curated amenities, Kempinski Residences offers an unparalleled lifestyle surrounded by luxury retail, chef-driven dining, cultural institutions, and sweeping views of Biscayne Bay and the Miami skyline."
    ]);
    project.caracteristicas = {
        edificio: (
            <ul className="list-disc ml-5">
                <li><b>{getLocalizedField("caracteristicas.edificio.ubicacion", "Address")}:</b> {getLocalizedField("caracteristicas.edificio.ubicacionValor", "3801 & 3883 Biscayne Blvd, Miami, FL 33137")}</li>
                <li><b>{getLocalizedField("caracteristicas.edificio.ubicacionDesc", "Location")}:</b> {getLocalizedField("caracteristicas.edificio.ubicacionDescValor", "Gateway to the Miami Design District™")}</li>
                <li><b>{getLocalizedField("caracteristicas.edificio.torres", "Towers")}:</b> {getLocalizedField("caracteristicas.edificio.torresValor", "Two 23-story residential towers (North & South)")}</li>
                <li><b>{getLocalizedField("caracteristicas.edificio.unidades", "Residences")}:</b> {getLocalizedField("caracteristicas.edificio.unidadesValor", "64 residences per tower + 22 private guest suites + 6 townhomes")}</li>
                <li><b>{getLocalizedField("caracteristicas.edificio.amenidades", "Amenities")}:</b> {getLocalizedField("caracteristicas.edificio.amenidadesValor", "Approx. 70,000 sq ft across both towers")}</li>
                <li><b>{getLocalizedField("caracteristicas.edificio.puente", "Amenity Bridge")}:</b> {getLocalizedField("caracteristicas.edificio.puenteValor", "Fourth-floor bridge connecting both towers")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.concierge", "24-Hour Concierge trained by Kempinski")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.carService", "Luxury house car service")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.porteCochere", "Private Porte-Cochère with water features")}</li>
                <li>{getLocalizedField("caracteristicas.edificio.parking", "Onsite structured parking for residents and guests")}</li>
            </ul>
        ),
        residencias: (
            <ul className="list-disc ml-5">
                <li><b>{getLocalizedField("caracteristicas.residencias.tipos", "Unit Types")}:</b> {getLocalizedField("caracteristicas.residencias.tiposValor", "2 Bed / 2.5 Bath + Den and 4 Bed / 4.5 Bath + Den")}</li>
                <li><b>{getLocalizedField("caracteristicas.residencias.precio", "Starting Price")}:</b> {getLocalizedField("caracteristicas.residencias.precioValor", "From $3,895,900")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.techos", "11' high ceilings in Great Room, Bedrooms, Den and Balcony")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.balcon", "10' deep balconies with unobstructed Biscayne Bay views")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.elevador", "Private elevator lobby per residence")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.closet", "Private valet closet")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.piedra", "Natural stone finishes throughout, curated by Rockwell Group")}</li>
                <li>{getLocalizedField("caracteristicas.residencias.lavanderia", "Laundry room in each residence")}</li>
                <li><b>{getLocalizedField("caracteristicas.residencias.cocina", "Kitchen")}:</b> {getLocalizedField("caracteristicas.residencias.cocinaValor", "Full Gaggenau appliance package, waterfall island, natural stone countertops, custom cabinetry by Rockwell Group")}</li>
                <li><b>{getLocalizedField("caracteristicas.residencias.suite", "Primary Suite")}:</b> {getLocalizedField("caracteristicas.residencias.suiteValor", "Kallista fixtures, oversized walk-in closet, freestanding tub, Kohler Leap Smart Toilet")}</li>
            </ul>
        ),
        amenidades: (
            <ul className="list-disc ml-5">
                <li>{getLocalizedField("caracteristicas.amenidades.lap", "85' Lap Pool with sun shelf")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.beach", "Beach entry pool with sun shelf")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.cabanas", "Open-air cabanas, daybeds & poolside social cabanas")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.outdoor", "Outdoor theater, games deck & outdoor lounge")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.padel", "Ground level Padel court & dog park")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.wellness", "Wellness sanctuary: cold plunge, infrared sauna, dry sauna, steam rooms, meditation & yoga garden")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.spa", "Coed spa with private treatment rooms & relaxation lounge")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.gym", "State-of-the-art fitness center + yoga & pilates movement studio")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.familia", "Children's splash pad, playground, playroom, game room, F1 simulator, golf simulator & teen's room")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.social", "Owner's Lounge, wine & cigar lounge, private dining room, chef's kitchen, music room & podcast room")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.business", "Business center & private executive boardroom")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.cafe", "Sunrise Café & Wellness Café offering daily breakfast")}</li>
                <li>{getLocalizedField("caracteristicas.amenidades.beach2", "Offsite beach service")}</li>
            </ul>
        )
    };

    return project;
}

