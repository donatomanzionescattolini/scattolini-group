

import { Area } from "../../models/areas/Area.tsx";
import { desarrolloMap } from "../desarrollos/Desarrollos";

export default function Areas() {
  return [...desarrolloMap.values()].map((x) => x.area) as Area[];
}
