import {useLayoutEffect} from "react";
import Pinecrest from "../../objects/areas/Pinecrest";
import AreaTemplate from "./AreaTemplate";

export default function PinecrestComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <AreaTemplate area={Pinecrest()}/>;
}
