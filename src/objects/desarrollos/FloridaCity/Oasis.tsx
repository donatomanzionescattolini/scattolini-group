import Project from "../../../models/desarrollos/Project.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function Oasis() {
    const OasisObject = new Project();
    OasisObject.name = "oasis";
    OasisObject.title = "Oasis";
    OasisObject.subtitle = "";
    OasisObject.traits = {
        building: <></>,
        residencias: <></>,
        amenities: <></>,
    };

    OasisObject.introduction = [];
    OasisObject.area = FloridaCity();

    return OasisObject;
}
