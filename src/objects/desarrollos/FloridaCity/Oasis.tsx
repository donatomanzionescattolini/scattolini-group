import Project from "../../../models/desarrollos/NewDevelopment.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function Oasis() {
    const OasisObject = new Project();
    OasisObject.nameForProjectFolders = "oasis";
    OasisObject.officialName = "Oasis";
    OasisObject.subtitle = "";
    OasisObject.traits = {
        building: <></>,
        residences: <></>,
        amenities: <></>,
    };

    OasisObject.introduction = [];
    OasisObject.area = FloridaCity();

    return OasisObject;
}
