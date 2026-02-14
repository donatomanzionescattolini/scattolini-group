

import React from 'react'
import Brickell from '../areas/Brickell';
import Desarrollo from '../../models/desarrollos/Desarrollo';
import { useTranslation } from '../../i18n';

export default function TemplateAndMainFields() {
    const { t } = useTranslation();
    
    const ProjectObject = new Desarrollo(Brickell());
    ProjectObject.nombre = "2200-brickell";
    ProjectObject.titulo = t('desarrollos.brickell2200.titulo', '2200 Brickell');
    ProjectObject.introduccion = [
        t('desarrollos.brickell2200.introduccion.0', ''),
        t('desarrollos.brickell2200.introduccion.1', '')
    ];
    ProjectObject.area = Brickell();
    ProjectObject.caracteristicas = {
        edificio: <></>,
        residencias: <></>,
        amenidades: <></>,
    }
    ProjectObject.numberOfImages = 0;
    ProjectObject.direccion = t('desarrollos.brickell2200.direccion', '');
    ProjectObject.numberOfUnits = 0;
    ProjectObject.typeOfUnits = t('desarrollos.brickell2200.typeOfUnits', '');
    ProjectObject.numberOfFloors = 0;
    ProjectObject.slogan = t('desarrollos.brickell2200.slogan', '');
    ProjectObject.banner = true;
  return ProjectObject;
}
