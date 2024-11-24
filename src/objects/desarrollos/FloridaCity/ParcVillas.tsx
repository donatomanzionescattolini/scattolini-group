import Project from "../../../models/desarrollos/Project.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function ParcVillas() {
    const ParcVillasObject = new Project();
    ParcVillasObject.name = "parc-villas";
    ParcVillasObject.title = "Parc Villas";
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
