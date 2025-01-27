import {AreaDto} from "../../models/areas/Area.tsx";

export default function Edgewater() {
    const edgewater = AreaDto("edgewater");
    edgewater.nameForProjectFolders = "edgewater";
    edgewater.officialName = "Edgewater";
    edgewater.slogan = "La Ciudad de la Hospitalidad";
    edgewater.descripcion = ["Descubre Edgewater, Florida, una ciudad en crecimiento con una address privilegiada en la costa este de Florida. Conocida como ‘La Ciudad de la Hospitalidad’, Edgewater ofrece un ambiente acogedor y amigable para aquellos que buscan comprar una casa o invertir en bienes raíces. Con fácil acceso a las playas y atracciones cercanas, esta ciudad ofrece un estilo de vida relajado y tranquilo.", "Edgewater, Florida también es conocida por sus propiedades de lujo. Hay muchas opciones disponibles para aquellos que buscan invertir en bienes raíces de alta gama en esta hermosa ciudad costera . Desde casas nuevas y modernas con vistas al río hasta propiedades con amplios terrenos y comodidades de lujo, hay algo para todos los gustos y presupuestos. ¡No pierda la oportunidad de invertir en una propiedad de lujo en Edgewater!"];
    edgewater.numberOfImages = 14;


    return edgewater;
}