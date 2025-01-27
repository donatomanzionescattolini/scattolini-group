import Project from "../../../models/desarrollos/NewDevelopment.tsx";

export default function TerraSol() {
    const TerraSolObject = new Project();
    TerraSolObject.nameForProjectFolders = "terra-sol";
    TerraSolObject.officialName = "Terra Sol";
    TerraSolObject.subtitle = "";
    TerraSolObject.traits = {building: <></>, residences: <></>, amenities: <></>};

    TerraSolObject.introduction = [];


    return TerraSolObject;
}