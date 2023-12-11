import Edgewater from "./Edgewater.tsx";

import CoconutGrove from "./CoconutGrove.tsx";
import Doral from "./Doral.tsx";
import CoralGables from "./CoralGables.tsx";
import Brickell from "./Brickell.tsx";

import BayHarbor from "./BayHarbor.tsx";
import Downtown from "./Downtown.tsx";
import Homestead from "./Homestead.tsx";
import NorthBayVillage from "./NorthBayVillage.tsx";
import Pinecrest from "./Pinecrest.tsx";
import SunnyIsles from "./SunnyIsles.tsx";
import {Area} from "../../models/areas/Area.tsx";

export default function Areas(): Area[] {
    const AllAreaObjects: Area[] = [];


    AllAreaObjects.push(Brickell());
    AllAreaObjects.push(CoconutGrove());
    AllAreaObjects.push(CoralGables());
    AllAreaObjects.push(BayHarbor());
    AllAreaObjects.push(Downtown());

    AllAreaObjects.push(Edgewater());

    AllAreaObjects.push(Homestead());
    AllAreaObjects.push(Doral());
    AllAreaObjects.push(NorthBayVillage());
    AllAreaObjects.push(Pinecrest());
    AllAreaObjects.push(SunnyIsles());
    return (
        AllAreaObjects);
}

