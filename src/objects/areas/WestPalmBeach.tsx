import {Area} from "../../models/areas/Area.tsx";

const area = new Area("west-palm-beach");
area.name = "west-palm-beach";
area.titulo = {
    es: "West Palm Beach",
    en: "West Palm Beach",
};
area.slogan = {
    es: "La Joya del Atlántico",
    en: "The Jewel of the Atlantic",
};
area.descripcion = {
    es: [
        "West Palm Beach se ha consolidado como uno de los mercados inmobiliarios más atractivos de Florida, ofreciendo una combinación única de lujo, cultura y naturaleza. Ubicada en el corazón del condado Palm Beach, esta ciudad ofrece acceso directo a algunas de las playas más hermosas del estado, junto con un dinámico centro urbano repleto de restaurantes, galerías de arte, boutiques exclusivas y una vibrante vida nocturna. La icónica Avenida Clematis y el paseo marítimo de CityPlace son solo algunos de los puntos de encuentro que hacen de esta ciudad un destino excepcional para vivir.",
        "Para los inversionistas, West Palm Beach representa una oportunidad estratégica de primer orden. La ciudad experimenta un crecimiento constante impulsado por la llegada de empresas financieras y tecnológicas de renombre, lo que ha generado una fuerte demanda de propiedades residenciales y comerciales de alta gama. Con precios aún competitivos en comparación con Miami y una apreciación sostenida del mercado, invertir aquí significa apostar por una ciudad en plena expansión, con una calidad de vida excepcional y una proyección internacional en constante ascenso.",
    ],
    en: [
        "West Palm Beach has established itself as one of Florida's most attractive real estate markets, offering a unique combination of luxury, culture, and nature. Located in the heart of Palm Beach County, this city provides direct access to some of the state's most beautiful beaches, along with a dynamic urban core filled with restaurants, art galleries, exclusive boutiques, and a vibrant nightlife. The iconic Clematis Street and the CityPlace waterfront promenade are just some of the gathering spots that make this city an exceptional place to live.",
        "For investors, West Palm Beach represents a top-tier strategic opportunity. The city is experiencing steady growth driven by the arrival of renowned financial and technology firms, generating strong demand for high-end residential and commercial properties. With prices still competitive compared to Miami and sustained market appreciation, investing here means betting on a city in full expansion, with exceptional quality of life and a steadily rising international profile.",
    ],
};
area.numberOfImages = 5;
area.imageExtension = "jpg";

export default area;

