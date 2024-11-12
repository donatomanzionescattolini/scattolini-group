import React from "react";
import OnGrandvilleComponent from "../../components/desarrollos/Homestead/OnGrandvilleComponent";
import {Route} from "react-router-dom";
import OasisComponent from "../../components/desarrollos/FloridaCity/OasisComponent";
import ParcVillasComponent from "../../components/desarrollos/FloridaCity/ParcVillasComponent";
import ParkSquareComponent from "../../components/desarrollos/FloridaCity/ParkSquareComponent";

export default function FloridaCityRoutes() {
    return (
        <React.Fragment>
            {" "}
            <Route
                element={<OnGrandvilleComponent/>}
                path="/desarrollos/on-grandville"
            />
            <Route
                element={<OasisComponent/>} path="/desarrollos/oasis"/>
            <Route element={<ParcVillasComponent/>} path="/desarrollos/parc-villas"/>
            <Route element={<ParkSquareComponent/>} path="/desarrollos/park-square"/>
        </React.Fragment>
    );
}
