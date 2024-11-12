import AreaTemplate from "./AreaTemplate.tsx";
import Edgewater from "../../objects/areas/Edgewater.tsx";

import {useLayoutEffect} from "react";

export default function EdgewaterComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AreaTemplate area={Edgewater()}/>
    );
}
