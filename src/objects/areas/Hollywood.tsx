import { Area } from "../../models/areas/Area";




export default function Hollywood() {
    const HollywoodObject = new Area("hollywood");
    HollywoodObject.titulo = "Hollywood";
    HollywoodObject.descripcion = [""];

    HollywoodObject.numberOfImages = 0;
    HollywoodObject.slogan = "";


    return HollywoodObject;
}