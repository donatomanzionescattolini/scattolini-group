import React from 'react'
import Desarrollo from '../../../models/desarrollos/Desarrollo';
import FtLauderdale from '../../areas/FtLauderdale';

export default function NattivoFtLauderdale() {
  const NatiivoFtLauderdaleObject = new Desarrollo(FtLauderdale());
  NatiivoFtLauderdaleObject.area = FtLauderdale();
  NatiivoFtLauderdaleObject.nombre = "natiivo-ft-lauderdale";
  NatiivoFtLauderdaleObject.caracteristicas = {edificio: <></>, residencias: <></>, amenidades: <></>};
  NatiivoFtLauderdaleObject.titulo = "Natiivo | Ft. Lauderdale";
  NatiivoFtLauderdaleObject.introduccion =["asd"];
  NatiivoFtLauderdaleObject.numberOfImages= 38;
  NatiivoFtLauderdaleObject.video =<iframe width="1080" height="608" src="https://www.youtube.com/embed/xQe3MFkbhUc?autoplay=1" title="Natiivo Fort Lauderdale - First Turnkey, Residential &amp; Hospitality Property in Fort Lauderdale, FL" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-sharel" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen autoFocus></iframe>
  NatiivoFtLauderdaleObject.direccion="";
  NatiivoFtLauderdaleObject.añoDeConstrucciónOFinalización = 2022;
  NatiivoFtLauderdaleObject.banner = true;
    return NatiivoFtLauderdaleObject
  ;
}
