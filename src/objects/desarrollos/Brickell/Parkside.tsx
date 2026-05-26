import {getDesarrolloI18n} from "../useDesarrolloI18n";
import Brickell from "../../areas/Brickell.tsx";
import Desarrollo from "../../../models/desarrollos/Desarrollo";

    const {getLocalizedField, getLocalizedArray} = getDesarrolloI18n("parkside", "es");
    const Parkside = new Desarrollo(Brickell);
    Parkside.nombre = "parkside";
    Parkside.titulo = getLocalizedField("titulo", "Parkside");
    Parkside.slogan = getLocalizedField("slogan", "Urban luxury in the heart of Brickell");
    Parkside.introduccion = getLocalizedArray(
        "introduccion",
        [
            "Parkside is an exclusive luxury condominium development ideally located in the heart of Brickell, Miami. Designed for those who demand the finest in urban living, Parkside offers a curated collection of elegantly crafted residences surrounded by the city's most vibrant dining, culture, and business corridors.",
            "With sweeping views, resort-style amenities, and thoughtfully designed floor plans, Parkside sets a new benchmark for sophisticated living in Miami's most sought-after neighborhood."
        ]
    );
    Parkside.constructora = getLocalizedField("constructora", "Habitat Group and BI Group");
    Parkside.ubicacion = getLocalizedField("ubicacion", "Brickell, Miami, FL");
    Parkside.estimatedCompletionYear = parseInt(getLocalizedField("estimatedCompletionYear", "2028"), 10) || 2028;
    Parkside.typeOfUnits = getLocalizedField("typeOfUnits", "1, 2, and 3 bedroom residences and penthouses");
    Parkside.residencias = getLocalizedArray("residencias", [
        "High ceilings with floor-to-ceiling windows",
        "Private balconies with city and bay views",
        "Gourmet kitchens with European cabinetry and premium appliances",
        "Spa-inspired bathrooms with designer fixtures",
        "Premium finishes and custom millwork throughout",
        "In-unit laundry",
    ]);
    Parkside.amenidades = getLocalizedArray("amenidades", [
        "Signature lobby with concierge",
        "Resort-style rooftop pool with nighttime ambiance",
        "Rooftop terrace with panoramic city views",
        "State-of-the-art fitness center",
        "Yoga and meditation studio",
        "Indoor cycling room",
        "Co-working lounge and business center",
        "Full-service spa with treatment rooms",
    ]);
    Parkside.caracteristicas = Parkside.createCaracteristicas();
    Parkside.banner = true;
    Parkside.numberOfImages = 26;
    Parkside.area = Brickell;
    Parkside.video = getLocalizedField("video", "https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/parkside/video.mp4");

export default Parkside;
