import {Brickell} from "./brickell/Brickell";
import {BayHarbor} from "./bay-harbor/BayHarbor";
import {Downtown} from "./downtown/Downtown";
import {Edgewater} from "./edgewater/Edgewater";
import {Homestead} from "./homestead/Homestead";
import NorthBayVillage from "./north-bay-village/NorthBayVillage";
import Pinecrest from "./pinecrest/Pinecrest";
import SunnyIsles from "./sunny-isles/SunnyIsles";
import {CoralGables} from "./coral-gables/CoralGables";
import {CoconutGrove} from "./coconut-grove/CoconutGrove";
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

