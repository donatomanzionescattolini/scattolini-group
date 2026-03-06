import {AreaDto} from "../../models/areas/Area.tsx";

export default function SunnyIsles() {
    const sunnyIsles = AreaDto("sunny-isles");
    sunnyIsles.name = "sunny-isles";
    sunnyIsles.titulo = {
        es: "Sunny Isles",
        en: "Sunny Isles",
    };
    sunnyIsles.slogan = {
        es: "El Lujo y la Relajación Te Esperan",
        en: "Luxury and Relaxation Await You",
    };
    sunnyIsles.descripcion = {
        es: ["Sunny Isles, Florida, es un destino ideal para inversionistas y otros compradores que buscan una oportunidad de negocio en el sector inmobiliario. Esta ciudad costera ofrece una variedad de propiedades de lujo, desde condominios hasta casas unifamiliares, con vistas espectaculares al océano Atlántico y a la bahía de Biscayne. Sunny Isles también cuenta con una excelente ubicación, cerca de las principales atracciones turísticas, culturales y comerciales de Miami. Además, Sunny Isles tiene una baja tasa de criminalidad, una alta calidad de vida y una diversa comunidad de residentes. No pierda la oportunidad de invertir en Sunny Isles, Florida, una ciudad que lo tiene todo."],
        en: ["Sunny Isles, Florida, is an ideal destination for investors and buyers looking for a compelling real estate opportunity. This coastal city offers a wide range of luxury properties, from condominiums to single-family homes, with spectacular views of the Atlantic Ocean and Biscayne Bay. Sunny Isles also enjoys an excellent location close to Miami’s main tourist, cultural, and commercial attractions. In addition, it offers a low crime rate, a high quality of life, and a diverse residential community. Don’t miss the opportunity to invest in Sunny Isles, Florida—a city that truly has it all."],
    };
    sunnyIsles.numberOfImages = 17;

    return sunnyIsles;
}
