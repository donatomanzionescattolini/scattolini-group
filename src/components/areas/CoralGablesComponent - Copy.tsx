import AreaTemplate from "./AreaTemplate.tsx";
import CoralGables from "../../objects/areas/CoralGables.tsx";
import {useLayoutEffect} from "react";

"../../objects/areas/CoralGables.tsx";

export default function CoralGablesComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return <AreaTemplate area={CoralGables()}/>;
}