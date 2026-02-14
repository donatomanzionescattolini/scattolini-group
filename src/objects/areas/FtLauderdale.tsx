import React from 'react'
import { Area } from '../../models/areas/Area'

export default function FtLauderdale() {
    const FtLauderdaleObject = new Area("ft-lauderdale");
    FtLauderdaleObject.numberOfImages = 34;
    FtLauderdaleObject.titulo = {
        es: "Ft. Lauderdale",
        en: "Ft. Lauderdale"
    };
    FtLauderdaleObject.name = "ft-lauderdale";
    FtLauderdaleObject.descripcion = {
        es: [
            "Explora Fort Lauderdale, un destino donde el lujo y la comodidad se unen. Conocida como la “Venecia de América” por sus extensos canales, Fort Lauderdale ofrece una experiencia única de navegación y vistas panorámicas. Su vibrante vida nocturna, playas impresionantes y una amplia gama de actividades recreativas, como el buceo y la pesca, hacen de esta ciudad un lugar ideal para aquellos que buscan un estilo de vida dinámico y sofisticado. Además, Fort Lauderdale cuenta con una excelente infraestructura educativa y de salud, así como una gran variedad de tiendas de lujo y restaurantes gourmet. ¡Ven y encuentra tu hogar perfecto en Fort Lauderdale, y deja que nuestros expertos en bienes raíces te guíen en cada paso del camino hacia tu nueva inversión!"
        ],
        en: [
            "Explore Fort Lauderdale, a destination where luxury and comfort come together. Known as the 'Venice of America' for its extensive canals, Fort Lauderdale offers a unique sailing experience and panoramic views. Its vibrant nightlife, stunning beaches, and wide range of recreational activities, such as diving and fishing, make this city an ideal place for those seeking a dynamic and sophisticated lifestyle. Additionally, Fort Lauderdale has excellent educational and healthcare infrastructure, as well as a great variety of luxury shops and gourmet restaurants. Come and find your perfect home in Fort Lauderdale, and let our real estate experts guide you every step of the way toward your new investment!"
        ]
    };
    FtLauderdaleObject.slogan = {
        es: "Venecia de América",
        en: "Venice of America"
    };
    
    return FtLauderdaleObject;
  
}
