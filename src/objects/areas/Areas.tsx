

import { Area } from "../../models/areas/Area.tsx";
import { desarrolloMap } from "../desarrollos/Desarrollos.ts";

export default function Areas() {
  return [...new Set([...desarrolloMap.values()].map((x) => x.area))];
}
