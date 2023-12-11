import AreaTemplate from "./AreaTemplate.tsx";
import Brickell from "../../objects/areas/Brickell.tsx";

import {useLayoutEffect} from "react";export default function BrickellComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return (
        <AreaTemplate area={Brickell()}/>
    );
}
