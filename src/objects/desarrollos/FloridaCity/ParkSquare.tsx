import Project from "../../../models/desarrollos/NewDevelopment.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function ParkSquare() {
    const ParkSquareObject = new Project();
    ParkSquareObject.nameForProjectFolders = "park-square";
    ParkSquareObject.officialName = "Park Square";
    ParkSquareObject.subtitle = "";
    ParkSquareObject.traits = {
        building: <></>,
        residences: <></>,
        amenities: <></>,
    };

    ParkSquareObject.introduction = [];
    ParkSquareObject.area = FloridaCity();

    return ParkSquareObject;
}
