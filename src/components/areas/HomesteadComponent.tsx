import {useLayoutEffect} from "react";
import Homestead from "../../objects/areas/Homestead";
import AreaTemplate from "./AreaTemplate";

export default function HomesteadComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <AreaTemplate area={Homestead()}/>;
}
