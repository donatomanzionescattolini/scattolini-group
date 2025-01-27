import Project from "../../../models/desarrollos/NewDevelopment.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SalernoEstates() {
    const SalernoEstates = new Project();
    SalernoEstates.nameForProjectFolders = "salerno-estates";
    SalernoEstates.officialName = "Salerno Estates";
    SalernoEstates.subtitle = "";
    SalernoEstates.area = Homestead();
    SalernoEstates.traits = {
        building: <></>,
        residences: <></>,
        amenities: <></>,
    };

    SalernoEstates.introduction = [];

    return SalernoEstates;
}
