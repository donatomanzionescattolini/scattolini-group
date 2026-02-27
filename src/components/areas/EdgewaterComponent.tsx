import { useLayoutEffect } from "react";
import Edgewater from "../../objects/areas/Edgewater";
import AreaTemplate from "./AreaTemplate";

export default function EdgewaterComponent() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AreaTemplate area={Edgewater()} />;
}
