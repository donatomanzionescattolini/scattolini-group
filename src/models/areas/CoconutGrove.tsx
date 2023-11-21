import {Desarrollo} from "../Desarrollo.tsx";
import {Area} from "../Area.tsx";
import PropiedadesSunnyIsles from "../../components/desarrollos/SunnyIsles/PropiedadesSunnyIsles.tsx";

export const CoconutGrove = new Area("coconut-grove", "Coconut Grove", "",[],<PropiedadesSunnyIsles/>,0);
CoconutGrove.addDesarrollo(new Desarrollo("vita"));
