import AreaTemplate from "./AreaTemplate.tsx";
import Pinecrest from "../../objects/areas/Pinecrest.tsx";

import {useLayoutEffect} from "react";export default function PinecrestComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return <AreaTemplate area={Pinecrest()}/>
}