import { Area } from "../../models/areas/Area";
import React from "react";

export default function MidtownMiami() {
    const MidtownMiamiObject = new Area("midtown-miami");
    MidtownMiamiObject.name = "midtown-miami";
    MidtownMiamiObject.titulo = {
        es: "Midtown Miami",
        en: "Midtown Miami"
    };
    MidtownMiamiObject.numberOfImages = 43;
    MidtownMiamiObject.descripcion = {
        es: [
            "Descubre Midtown Miami, el vibrante corazón de la vida urbana contemporánea. Situado entre la energía creativa de Wynwood y la sofisticación costera de Edgewater, Midtown combina arte, arquitectura y estilo de vida en perfecta armonía. Sus torres modernas se alzan sobre bulevares arbolados llenos de tiendas de diseño, galerías, cafés y restaurantes al aire libre. Todo está pensado para disfrutar a pie: vivir, trabajar, comprar y socializar en un solo lugar, con el dinamismo propio de una gran ciudad y el encanto de un vecindario acogedor.",
            "Vivir en Midtown es ser parte de una comunidad en constante movimiento, donde la inspiración se respira a diario. Desde murales de arte urbano y eventos culturales hasta boutiques de moda y espacios gastronómicos de vanguardia, cada rincón invita a explorar. El área continúa creciendo con proyectos residenciales y comerciales de primer nivel que reafirman su estatus como uno de los destinos más deseados de Miami. Midtown Miami ofrece una vida moderna, conectada y sofisticada: un punto de encuentro entre la creatividad y la comodidad."
        ],
        en: [
            "Discover Midtown Miami, the vibrant heart of contemporary urban life. Situated between the creative energy of Wynwood and the coastal sophistication of Edgewater, Midtown combines art, architecture, and lifestyle in perfect harmony. Its modern towers rise above tree-lined boulevards filled with design shops, galleries, cafes, and outdoor restaurants. Everything is designed to be enjoyed on foot: live, work, shop, and socialize in one place, with the dynamism of a large city and the charm of a cozy neighborhood.",
            "Living in Midtown means being part of a community in constant motion, where inspiration is breathed daily. From urban art murals and cultural events to fashion boutiques and cutting-edge culinary spaces, every corner invites exploration. The area continues to grow with top-tier residential and commercial projects that reaffirm its status as one of Miami's most desired destinations. Midtown Miami offers a modern, connected, and sophisticated life: a meeting point between creativity and comfort."
        ]
    };
    MidtownMiamiObject.slogan = {
        es: "Donde la Creatividad y la Ciudad se Encuentran",
        en: "Where Creativity and the City Meet"
    };

    return MidtownMiamiObject;
}