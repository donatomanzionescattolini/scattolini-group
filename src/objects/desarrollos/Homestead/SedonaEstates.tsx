import Project from "../../../models/desarrollos/Project.tsx";

export default function SedonaEstates() {
    const SedonaEstates = {} as Project;
    SedonaEstates.name = "sedona-estates";
    SedonaEstates.title = "Sedona Estates";
    SedonaEstates.subtitle = "";
    SedonaEstates.traits = {building: <></>, residences: <></>, amenities: <></>};

    SedonaEstates.introduction = [];


    return SedonaEstates;
}