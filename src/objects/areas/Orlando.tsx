import {Area} from "../../models/areas/Area.tsx";

export default function Orlando() {
    const area = new Area("orlando");
    area.name = "orlando";
    area.titulo = {
        es: "Orlando",
        en: "Orlando",
    };
    area.slogan = {
        es: "The City Beautiful",
        en: "The City Beautiful",
    };
    area.descripcion = {
        es: [
            "Orlando se ha consolidado como una de las ciudades más dinámicas y prometedoras de Florida, ideal tanto para quienes buscan un nuevo hogar como para quienes desean invertir estratégicamente en bienes raíces. Su crecimiento económico sostenido, la llegada constante de nuevas empresas y su calidad de vida —marcada por seguridad, áreas verdes y una oferta cultural en expansión— la convierten en una alternativa atractiva frente a los mercados más saturados del sur del estado. Además, su infraestructura moderna y su ubicación estratégica en el centro de Florida facilitan la conexión con el resto del país y con destinos internacionales.",
            "Para los inversionistas, Orlando ofrece un mercado inmobiliario con alta demanda de alquileres a largo y corto plazo, impulsado por su industria turística de clase mundial y por un flujo continuo de nuevos residentes. La combinación de precios competitivos, apreciación constante y un entorno favorable para negocios crea un escenario ideal para maximizar el retorno de inversión. En resumen, Orlando representa una oportunidad sólida y versátil, perfecta para quienes buscan estabilidad, crecimiento y un estilo de vida excepcional.",
        ],
        en: [
            "Orlando has established itself as one of Florida’s most dynamic and promising cities, ideal for both buyers looking for a new home and investors seeking a strategic real estate opportunity. Its sustained economic growth, steady arrival of new businesses, and quality of life—shaped by safety, green spaces, and a growing cultural scene—make it an attractive alternative to the more saturated markets in South Florida. Its modern infrastructure and central Florida location also make it easy to connect with the rest of the country and international destinations.",
            "For investors, Orlando offers a real estate market with strong demand for both long- and short-term rentals, driven by its world-class tourism industry and a constant flow of new residents. The combination of competitive pricing, steady appreciation, and a business-friendly environment creates an ideal setting to maximize return on investment. In short, Orlando represents a solid and versatile opportunity for those looking for stability, growth, and an exceptional lifestyle.",
        ],
    };
    area.numberOfImages = 52;
    return area;
}
