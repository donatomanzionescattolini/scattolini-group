import {AreaDto} from "../../models/areas/Area.tsx";

export default function Edgewater() {
    const edgewater = AreaDto("edgewater");
    edgewater.name = "edgewater";
    edgewater.titulo = {
        es: "Edgewater",
        en: "Edgewater"
    };
    edgewater.slogan = {
        es: "La Ciudad de la Hospitalidad",
        en: "The City of Hospitality"
    };
    edgewater.descripcion = {
        es: [
            "Descubre Edgewater, Florida, una ciudad en crecimiento con una ubicación privilegiada en la costa este de Florida. Conocida como ‘La Ciudad de la Hospitalidad’, Edgewater ofrece un ambiente acogedor y amigable para aquellos que buscan comprar una casa o invertir en bienes raíces. Con fácil acceso a las playas y atracciones cercanas, esta ciudad ofrece un estilo de vida relajado y tranquilo.",
            "Edgewater, Florida también es conocida por sus propiedades de lujo. Hay muchas opciones disponibles para aquellos que buscan invertir en bienes raíces de alta gama en esta hermosa ciudad costera . Desde casas nuevas y modernas con vistas al río hasta propiedades con amplios terrenos y comodidades de lujo, hay algo para todos los gustos y presupuestos. ¡No pierda la oportunidad de invertir en una propiedad de lujo en Edgewater!"
        ],
        en: [
            "Discover Edgewater, Florida, a growing city with a prime location on Florida's east coast. Known as 'The City of Hospitality,' Edgewater offers a warm and friendly atmosphere for those looking to buy a home or invest in real estate. With easy access to nearby beaches and attractions, this city offers a relaxed and quiet lifestyle.",
            "Edgewater, Florida is also known for its luxury properties. There are many options available for those looking to invest in high-end real estate in this beautiful coastal city. From new, modern homes with river views to properties with large lots and luxury amenities, there is something for every taste and budget. Don't miss the opportunity to invest in a luxury property in Edgewater!"
        ]
    };
    edgewater.numberOfImages = 14;


    return edgewater;
}