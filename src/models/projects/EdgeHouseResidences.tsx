import Project from "./NewDevelopment.tsx";
import Edgewater from "../../objects/areas/Edgewater.tsx";


export default function EdgeHouseResidencesProject(): Project {
    const EdgeHouse: Project = new Project(Edgewater());

    EdgeHouse.officialName = "Edge House Miami Residences";
    EdgeHouse.nameForProjectFolders = "edge-house-residences";


    EdgeHouse.subtitle = "";
    EdgeHouse.banner = true;
    EdgeHouse.numberOfImages = 23;
    EdgeHouse.numberOfRooms =
    return EdgeHouse;
}