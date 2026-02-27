import { useLayoutEffect } from "react";
import SunnyIsles from "../../objects/areas/SunnyIsles";
import AreaTemplate from "./AreaTemplate";

export default function SunnyIslesComponent() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AreaTemplate area={SunnyIsles()} />;
}
