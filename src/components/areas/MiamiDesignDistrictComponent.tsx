import {useLayoutEffect} from "react";
import MiamiDesignDistrict from "../../objects/areas/MiamiDesignDistrict";
import AreaTemplate from "./AreaTemplate";

export default function MiamiDesignDistrictComponent() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <AreaTemplate area={MiamiDesignDistrict}/>;
}

