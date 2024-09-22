import { Area } from "../../models/areas/Area";



export default function Aventura() {

    let AventuraObject = new Area("aventura");
    AventuraObject.titulo = "Aventura";
    AventuraObject.numberOfImages = 0;
    AventuraObject.descripcion = [""];
    AventuraObject.slogan = "";
    AventuraObject.name = "aventura";
    return AventuraObject;



}