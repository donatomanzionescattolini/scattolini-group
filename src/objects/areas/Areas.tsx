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
import { Area } from "../../models/areas/Area.tsx";
import FloridaCity from "./FloridaCity.tsx";
import MiamiBeach from "./MiamiBeach.tsx";
import { desarrolloMap } from "../desarrollos/Desarrollos.ts";

export default function Areas() {
  return [...desarrolloMap.values()].map((x) => x.area) as Area[];
}
