import AreaTemplate from "./AreaTemplate.tsx";
import Orlando from "../../objects/areas/Orlando.tsx";
import {useLayoutEffect} from "react";

export const OrlandoComponent = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AreaTemplate area={Orlando()}></AreaTemplate>
    );
};