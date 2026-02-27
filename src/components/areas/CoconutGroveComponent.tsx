import { useLayoutEffect } from "react";
import CoconutGrove from "../../objects/areas/CoconutGrove.tsx";
import AreaTemplate from "./AreaTemplate";

export default function CoconutGroveComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AreaTemplate area={CoconutGrove()}/>
    );
}
