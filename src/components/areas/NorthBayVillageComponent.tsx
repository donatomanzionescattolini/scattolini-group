import { useLayoutEffect } from "react";
import NorthBayVillage from "../../objects/areas/NorthBayVillage";
import AreaTemplate from "./AreaTemplate";

export default function NorthBayVillageComponent() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AreaTemplate area={NorthBayVillage()} />;
}
