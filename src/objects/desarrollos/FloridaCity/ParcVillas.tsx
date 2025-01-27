import Project from "../../../models/desarrollos/NewDevelopment.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function ParcVillas() {
    const ParcVillasObject = new Project();
    ParcVillasObject.nameForProjectFolders = "parc-villas";
    ParcVillasObject.officialName = "Parc Villas";
    ParcVillasObject.subtitle = "";
    ParcVillasObject.traits = {
        building: <></>,
        residences: <></>,
        amenities: <></>,
    };
    ParcVillasObject.introduction = [];
    ParcVillasObject.area = FloridaCity();
    return ParcVillasObject;
}
