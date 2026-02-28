import {useLayoutEffect} from "react";
import Doral from "../../objects/areas/Doral";
import AreaTemplate from "./AreaTemplate";

export default function DoralComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <AreaTemplate area={Doral()}/>;
}
