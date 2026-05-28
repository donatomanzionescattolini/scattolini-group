import AreaTemplate from "./AreaTemplate.tsx";
import WestPalmBeach from "../../objects/areas/WestPalmBeach.tsx";
import {useLayoutEffect} from "react";
export default function WestPalmBeachComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AreaTemplate area={WestPalmBeach}/>
    );
}
