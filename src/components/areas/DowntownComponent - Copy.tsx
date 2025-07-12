import AreaTemplate from "./AreaTemplate.tsx";
import Downtown from "../../objects/areas/Downtown.tsx";

import {useLayoutEffect} from "react";export default function DowntownComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return (
        <AreaTemplate area={Downtown()}/>
    );
}
