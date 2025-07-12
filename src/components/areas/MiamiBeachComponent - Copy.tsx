import AreaTemplate from "./AreaTemplate.tsx";
import MiamiBeach from "../../objects/areas/MiamiBeach.tsx";

import {useLayoutEffect} from "react";export default function MiamiBeachComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return <AreaTemplate area={MiamiBeach()}/>
}