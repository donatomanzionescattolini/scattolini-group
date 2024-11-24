import Project from "../../../models/desarrollos/Project.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SalernoEstates() {
    const SalernoEstates = new Project();
    SalernoEstates.name = "salerno-estates";
    SalernoEstates.title = "Salerno Estates";
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
