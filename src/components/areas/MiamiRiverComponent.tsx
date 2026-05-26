import {useLayoutEffect} from "react";
import MiamiRiver from "../../objects/areas/MiamiRiver";
import AreaTemplate from "./AreaTemplate";

export default function MiamiRiverComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <AreaTemplate area={MiamiRiver}/>;
}

