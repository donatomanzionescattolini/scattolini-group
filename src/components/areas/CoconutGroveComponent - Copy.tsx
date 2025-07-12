import CoconutGrove from "../../objects/areas/CoconutGrove.tsx";
import AreaTemplate from "./AreaTemplate.tsx";

import {useLayoutEffect} from "react";export default function CoconutGroveComponent() {
 useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);    return (
        <AreaTemplate area={CoconutGrove()}/>
    );
}
