import {useLayoutEffect} from "react";
import MiamiBeach from "../../objects/areas/MiamiBeach";
import AreaTemplate from "./AreaTemplate";

export default function MiamiBeachComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <AreaTemplate area={MiamiBeach()}/>;
}
