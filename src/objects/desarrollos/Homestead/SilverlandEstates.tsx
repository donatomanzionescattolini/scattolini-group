import Project from "../../../models/desarrollos/NewDevelopment.tsx";
import Homestead from "../../areas/Homestead.tsx";

export default function SilverlandEstates() {
    const SilverlandEstates = new Project();
    SilverlandEstates.nameForProjectFolders = "silverland-estates";
    SilverlandEstates.officialName = "Silverland Estates";
    SilverlandEstates.subtitle = "";
    SilverlandEstates.traits = {building: <></>, residences: <></>, amenities: <></>};

    SilverlandEstates.introduction = [];
    SilverlandEstates.area = Homestead();

    return SilverlandEstates;
}