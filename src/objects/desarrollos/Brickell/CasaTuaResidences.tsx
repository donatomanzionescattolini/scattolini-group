import React from 'react'
import Desarrollo from '../../../models/desarrollos/Desarrollo'
import Brickell from '../../areas/Brickell'

export default function CasaTuaResidences() {
    const CasaTuaResidencesObject = new Desarrollo(Brickell());
    CasaTuaResidencesObject.caracteristicas = { edificio: <></>, residencias: <></>, amenidades: <></> };
    CasaTuaResidencesObject.numberOfImages = 0;
    CasaTuaResidencesObject.area = Brickell();
    CasaTuaResidencesObject.titulo = "Casa Tua Residences";
    CasaTuaResidencesObject.subtitulo = "";
    CasaTuaResidencesObject.direccion = "";
    CasaTuaResidencesObject.añoDeConstrucciónOFinalización = 2022;
    CasaTuaResidencesObject.introduccion = ["", ""]
    CasaTuaResidencesObject.banner =true;
    CasaTuaResidencesObject.nombre = "casa-tua-residences";
    return CasaTuaResidencesObject

}
