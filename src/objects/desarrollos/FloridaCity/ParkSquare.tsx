import Project from "../../../models/desarrollos/Project.tsx";
import FloridaCity from "../../areas/FloridaCity.tsx";

export default function ParkSquare() {
    const ParkSquareObject = new Project();
    ParkSquareObject.name = "park-square";
    ParkSquareObject.title = "Park Square";
    ParkSquareObject.subtitle = "";
    ParkSquareObject.traits = {
        building: <></>,
        residencias: <></>,
        amenities: <></>,
    };

    ParkSquareObject.introduction = [];
    ParkSquareObject.area = FloridaCity();

    return ParkSquareObject;
}
