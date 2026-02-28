import {useLayoutEffect} from "react";
import BayHarbor from "../../objects/areas/BayHarbor";
import AreaTemplate from "./AreaTemplate";

export default function BayHarborComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <AreaTemplate area={BayHarbor()}/>;
}
