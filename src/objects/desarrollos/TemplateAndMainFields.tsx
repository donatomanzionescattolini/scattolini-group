import React from 'react'
import Brickell from '../areas/Brickell';
import Desarrollo from '../../models/desarrollos/Desarrollo';

export default function TemplateAndMainFields() {
    const ProjectObject = new Desarrollo(Brickell());
    ProjectObject.nombre = "2200-brickell";
    ProjectObject.titulo = "2200 Brickell";
    ProjectObject.introduccion = ["", ""];
    ProjectObject.area = Brickell();
    ProjectObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    }
    ProjectObject.numberOfImages = 0;
    ProjectObject.direccion = "";
    ProjectObject.numberOfUnits = 0;
    ProjectObject.typeOfUnits = "";
    ProjectObject.numberOfFloors = 0;
    ProjectObject.subtitulo = "";
    ProjectObject.banner = true;
    return ProjectObject;
}
