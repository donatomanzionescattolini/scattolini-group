import React from 'react'
import Brickell from '../areas/Brickell';
import Project from '../../models/desarrollos/Project.tsx';

export default function TemplateAndMainFields() {
    const ProjectObject = new Project(Brickell());
    ProjectObject.name = "2200-brickell";
    ProjectObject.title = "2200 Brickell";
    ProjectObject.introduction = ["", ""];
    ProjectObject.area = Brickell();
    ProjectObject.traits = {
        building: <></>,
        residencias: <></>,
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
