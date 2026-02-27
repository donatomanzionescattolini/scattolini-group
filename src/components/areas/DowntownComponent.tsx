import { useLayoutEffect } from "react";
import Downtown from "../../objects/areas/Downtown";
import AreaTemplate from "./AreaTemplate";

export default function DowntownComponent() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AreaTemplate area={Downtown()} />;
}
