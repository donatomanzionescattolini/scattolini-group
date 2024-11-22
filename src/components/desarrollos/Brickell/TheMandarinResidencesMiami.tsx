import Project from "../../../models/desarrollos/Project.tsx";
import Brickell from "../../../objects/areas/Brickell";



export default function TheMandarinResidencesMiami() {

    const TheMandarinResidencesObject = new Project(Brickell());

    TheMandarinResidencesObject.name = "the-mandarin-oriental-residences-miami";
    TheMandarinResidencesObject.title = <div><h1 className="text-center display-5">The Residences<br>Mandarin Oriental<br>Miami</br></br></h1></div>;

    TheMandarinResidencesObject.amenities =
        new Map();
    TheMandarinResidencesObject.amenities.set("Ofertas Recreativas",
        ["Piscina oceánica",
            "Piscina de la laguna",
            "Salón junto a la piscina con servicios",
            "Piscina para niños",
            "Bosque de hamacas inmersivo",
            "Paseo artístico del podio",
            "Simulador de golf de interior",
            "Sala de juegos",
            "Sala de proyección privada",
            "Club de Niños"]);

    TheMandarinResidencesObject.amenities.set("Experiencias Gastronómicas", [
        "Pabellón de Comedor",
        "Pabellón de Té",
        "Barra de honestidad",
        "Comedor Privado",
        "Bodega"
    ]);

    TheMandarinResidencesObject.amenities.set("Salud y Bienestar", [
        "Mandarin Oriental Signature Spa",
        "Programación de spa por FaceGym™",
        "Salas de tratamiento interiores/exteriores",
        "Jardín de té",
        "Césped de yoga en el bosque",
        "Saunas y hammam para hombres y mujeres",
        "Terraza de la piscina de bienestar",
        "Terapia de frío y calor",
        "Taller de fitness",
        "Pista polideportiva",
        "Balnearios de peluquería canina"
    ]);
    TheMandarinResidencesObject.amenities.set("Eventos de Ocasión y Negocios",[
        "Suite de conferencias",
"Oficinas Privadas",
"Áreas de trabajo de alta gama",
"Biblioteca",
"Cocina de autoservicio"


    ])













    return TheMandarinResidencesObject;
}