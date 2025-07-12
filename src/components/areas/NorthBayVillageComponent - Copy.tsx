import AreaTemplate from "./AreaTemplate.tsx";
import NorthBayVillage from "../../objects/areas/NorthBayVillage.tsx";

import {useLayoutEffect} from "react";export default function NorthBayVillageComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return <AreaTemplate area={NorthBayVillage()}/>
}