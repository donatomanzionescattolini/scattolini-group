import {AreaDto} from "../../models/areas/Area.tsx";

export default function  CoconutGrove() {

    const coconutGroveObject = AreaDto("coconut-grove");
    coconutGroveObject.name = "coconut-grove";
    coconutGroveObject.titulo = "Coconut Grove";


    return coconutGroveObject;
}

