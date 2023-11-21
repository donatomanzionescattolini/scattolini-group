import {Brickell} from "../Brickell.tsx";
import {BayHarbor} from "./BayHarbor.tsx";
import {Downtown} from "./Downtown.tsx";
import {Edgewater} from "./Edgewater.tsx";
import {Homestead} from "./Homestead.tsx";
import NorthBayVillage from "./NorthBayVillage.tsx";
import Pinecrest from "./Pinecrest.tsx";
import SunnyIsles from "./SunnyIsles.tsx";
import {CoralGables} from "../CoralGables.tsx";
import {CoconutGrove} from "./CoconutGrove.tsx";
import {Area} from "../Area";


export default function AreaObjects(): Area[] {
    const AllAreaObjects: Area[] = new Array<Area>();


    AllAreaObjects.push(Brickell);
    AllAreaObjects.push(CoconutGrove);
    AllAreaObjects.push(CoralGables);
    AllAreaObjects.push(BayHarbor);
    AllAreaObjects.push(Downtown);

    AllAreaObjects.push(Edgewater);

    AllAreaObjects.push(Homestead);

    AllAreaObjects.push(NorthBayVillage);
    AllAreaObjects.push(Pinecrest);
    AllAreaObjects.push(SunnyIsles);
    return (
        AllAreaObjects);
}

