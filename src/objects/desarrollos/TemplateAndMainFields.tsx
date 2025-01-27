import React from 'react'
import Brickell from '../areas/Brickell';
import Project from '../../models/desarrollos/NewDevelopment.tsx';

export default function TemplateAndMainFields() {
    const ProjectObject = new Project(Brickell());
    ProjectObject.nameForProjectFolders = "2200-brickell";
    ProjectObject.officialName = "2200 Brickell";
    ProjectObject.introduction = ["", ""];
    ProjectObject.area = Brickell();
    ProjectObject.traits = {
        building: <></>,
        residences: <></>,
        amenities: <></>,
    }
    ProjectObject.numberOfImages = 0;
    ProjectObject.address = "";
    ProjectObject.numberOfUnits = 0;
    ProjectObject.typeOfUnits = "";
    ProjectObject.numberOfFloors = 0;
    ProjectObject.subtitle = "";
    ProjectObject.banner = true;
    return ProjectObject;
}
