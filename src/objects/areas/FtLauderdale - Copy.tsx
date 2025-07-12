import React from 'react'
import { Area } from '../../models/areas/Area'

export default function FtLauderdale() {
    const FtLauderdaleObject = new Area("ft-lauderdale");
    FtLauderdaleObject.numberOfImages = 34;
    FtLauderdaleObject.titulo = "Ft. Lauderdale";
    FtLauderdaleObject.name = "ft-lauderdale";
    FtLauderdaleObject.descripcion = ["Explora Fort Lauderdale, un destino donde el lujo y la comodidad se unen. Conocida como la “Venecia de América” por sus extensos canales, Fort Lauderdale ofrece una experiencia única de navegación y vistas panorámicas. Su vibrante vida nocturna, playas impresionantes y una amplia gama de actividades recreativas, como el buceo y la pesca, hacen de esta ciudad un lugar ideal para aquellos que buscan un estilo de vida dinámico y sofisticado. Además, Fort Lauderdale cuenta con una excelente infraestructura educativa y de salud, así como una gran variedad de tiendas de lujo y restaurantes gourmet. ¡Ven y encuentra tu hogar perfecto en Fort Lauderdale, y deja que nuestros expertos en bienes raíces te guíen en cada paso del camino hacia tu nueva inversión!"];
    FtLauderdaleObject.slogan = "Venecia de América";
    
    return FtLauderdaleObject;
  
}
