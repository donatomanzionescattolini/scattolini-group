import AreaTemplate from "./AreaTemplate.tsx";
import Doral from "../../objects/areas/Doral.tsx";

import {useLayoutEffect} from "react";

export default function DoralComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <AreaTemplate area={Doral()}/>;
}