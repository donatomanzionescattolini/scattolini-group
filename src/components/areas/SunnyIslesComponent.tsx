import AreaTemplate from "./AreaTemplate.tsx";
import SunnyIsles from "../../objects/areas/SunnyIsles.tsx";

import {useLayoutEffect} from "react";export default function SunnyIslesComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
 return <AreaTemplate area={SunnyIsles()}/>
}