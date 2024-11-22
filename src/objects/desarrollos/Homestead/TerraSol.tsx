import Project from "../../../models/desarrollos/Project.tsx";

export default function TerraSol() {
    const TerraSolObject = new Project();
    TerraSolObject.name = "terra-sol";
    TerraSolObject.title = "Terra Sol";
    TerraSolObject.subtitle = "";
    TerraSolObject.traits = {building: <></>, residencias: <></>, amenities: <></>};

    TerraSolObject.introduction = [];


    return TerraSolObject;
}