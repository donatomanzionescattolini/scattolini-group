import { useLayoutEffect } from "react";
import CoralGables from "../../objects/areas/CoralGables";
import AreaTemplate from "./AreaTemplate";

export default function CoralGablesComponent() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AreaTemplate area={CoralGables()} />;
}
