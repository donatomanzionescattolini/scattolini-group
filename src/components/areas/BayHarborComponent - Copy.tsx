import AreaTemplate from "./AreaTemplate.tsx";
import BayHarbor from "../../objects/areas/BayHarbor.tsx";

import {useLayoutEffect} from "react";export default function BayHarborComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return <AreaTemplate area={BayHarbor()}/>
}