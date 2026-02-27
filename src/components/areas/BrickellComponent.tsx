import { useLayoutEffect } from "react";
import Brickell from "../../objects/areas/Brickell";
import AreaTemplate from "./AreaTemplate";

export default function BrickellComponent() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AreaTemplate area={Brickell()} />;
}
