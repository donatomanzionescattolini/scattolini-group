import {AreaDto} from "../../models/areas/Area.tsx";

export default function  SunnyIsles() {
    const sunnyIsles = AreaDto("sunny-isles");
    sunnyIsles.name = "sunny-isles";
    sunnyIsles.titulo = "Sunny Isles";
    sunnyIsles.slogan = "El Lujo y la Relajación Te Esperan";
    sunnyIsles.descripcion = ["Sunny Isles, Florida, es un destino ideal para inversionistas y otros compradores que buscan una oportunidad de negocio en el sector inmobiliario. Esta ciudad costera ofrece una variedad de propiedades de lujo, desde condominios hasta casas unifamiliares, con vistas espectaculares al océano Atlántico y a la bahía de Biscayne. Sunny Isles también cuenta con una excelente ubicación, cerca de las principales atracciones turísticas, culturales y comerciales de Miami. Además, Sunny Isles tiene una baja tasa de criminalidad, una alta calidad de vida y una diversa comunidad de residentes. No pierda la oportunidad de invertir en Sunny Isles, Florida, una ciudad que lo tiene todo."];
    sunnyIsles.numberOfImages = 17;

    return sunnyIsles;
}
