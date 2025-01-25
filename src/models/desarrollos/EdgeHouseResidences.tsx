import Project from "./Project.tsx";
import Edgewater from "../../objects/areas/Edgewater.tsx";


export default function EdgeHouseResidencesProject(): Project {
    const EdgeHouse: Project = new Project(Edgewater());

    EdgeHouse.title = "Edge House Miami Residences";
    EdgeHouse.name = "edge-house-residences";


    EdgeHouse.subtitle = "";
    EdgeHouse.banner = true;
    EdgeHouse.numberOfImages = 23;
    EdgeHouse.numberOfRooms =
    return EdgeHouse;
}