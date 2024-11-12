import AreaTemplate from "./AreaTemplate.tsx";
import Homestead from "../../objects/areas/Homestead.tsx";

import {useLayoutEffect} from "react";

export default function HomesteadComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <AreaTemplate area={Homestead()}/>
}