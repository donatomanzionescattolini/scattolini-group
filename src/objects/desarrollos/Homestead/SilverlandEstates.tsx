import Project from "../../../models/desarrollos/Project.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SilverlandEstates() {
    const SilverlandEstates = new Project();
    SilverlandEstates.name = "silverland-estates";
    SilverlandEstates.title = "Silverland Estates";
    SilverlandEstates.subtitle = "";
    SilverlandEstates.traits = {building: <></>, residences: <></>, amenities: <></>};

    SilverlandEstates.introduction = [];
    SilverlandEstates.area = Homestead();

    return SilverlandEstates;
}